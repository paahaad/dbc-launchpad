import ky, { Options } from 'ky';
import {
  GetChartRequest,
  GetChartResponse,
  GetGemsTokenListIndividualResponse,
  GetGemsTokenListRequest,
  GetTokenDescriptionResponse,
  GetTokenRequest,
  GetTokenResponse,
  GetTopHoldersResponse,
  GetTxsRequest,
  GetTxsResponse,
  Pool,
  CustomHolderTag,
} from './types';
// Only using GOR RPC - no external API calls needed
import { Connection, PublicKey } from '@solana/web3.js';
import { DynamicBondingCurveClient } from '@meteora-ag/dynamic-bonding-curve-sdk';
import { NATIVE_MINT, getMint } from '@solana/spl-token';
import { GOR_CONFIG } from '@/config/gor-config';
import { getBondingCurveStatus, calculateTokenPrice, calculateMarketCap, calculateLiquidity } from '@/utils/bondingCurveHelpers';
import { debugAllTokenStatuses, logMigrationProgressMapping } from '@/utils/debugTokenStatus';

// All data fetched from GOR chain - no external APIs needed

/**
 * Helper function to calculate 24h price change percentage
 * 
 * This function fetches historical price data from the database and calculates
 * the percentage change between the current price and the price from 24 hours ago.
 * 
 * @param tokenMint - The mint address of the token
 * @returns The percentage change (positive for increase, negative for decrease)
 */
async function calculate24hPriceChange(tokenMint: string): Promise<number> {
  try {
    const response = await ky.get(`/api/price-history?mint=${encodeURIComponent(tokenMint)}&hours=24`).json<{
      priceHistory: Array<{ price: number; timestamp: number; interval: string }>;
      currentPrice: number | null;
      price24hAgo: number | null;
    }>();
    
    const { currentPrice, price24hAgo, priceHistory } = response;
    
    // If we have direct current and 24h ago prices, use them
    if (currentPrice && price24hAgo && price24hAgo > 0) {
      return ((currentPrice - price24hAgo) / price24hAgo) * 100;
    }
    
    // Fallback: calculate from price history if available
    if (priceHistory && priceHistory.length >= 2) {
      const latestPrice = priceHistory[priceHistory.length - 1].price;
      const oldestPrice = priceHistory[0].price;
      
      if (oldestPrice > 0) {
        return ((latestPrice - oldestPrice) / oldestPrice) * 100;
      }
    }
    
    // No historical data available
    return 0;
  } catch (error) {
    console.error(`Failed to calculate 24h price change for token ${tokenMint}:`, error);
    return 0;
  }
}

export class ApeClient {
  static async getGemsTokenList<T extends GetGemsTokenListRequest>(
    req: T,
    _options?: Options
  ): Promise<{
    [K in keyof T]: undefined extends T[K]
      ? GetGemsTokenListIndividualResponse | undefined
      : GetGemsTokenListIndividualResponse;
  }> {
    const result: any = {};

    // Get all tokens from database
    const response = await ky.get('/api/tokens').json<{ tokens: { mintAddress: string; createdAt: string; name: string; symbol: string; imageUrl: string | null }[] }>();

    // Fetch all token info with bonding status
    const allPoolsWithInfo = await Promise.all(
      response.tokens.map(async (token) => {
        try {
          const tokenInfo = await ApeClient.getGorTokenInfo(token.mintAddress);
          const pool = tokenInfo.pools[0];
          if (pool) {
            pool.createdAt = token.createdAt;
            pool.baseAsset.name = token.name || pool.baseAsset.name;
            pool.baseAsset.symbol = token.symbol || pool.baseAsset.symbol;
            if (token.imageUrl) {
              pool.baseAsset.icon = token.imageUrl;
              pool.baseAsset.image = token.imageUrl;
            }
          }
          return pool;
        } catch (error) {
          console.error(`Failed to fetch info for token ${token.mintAddress}:`, error);
          return null;
        }
      })
    );

    const validPools = allPoolsWithInfo.filter((p): p is Pool => p !== null);

    // Debug logging to help troubleshoot token visibility
    console.log('🔍 Debug: Token filtering started');
    logMigrationProgressMapping();
    debugAllTokenStatuses(validPools);

    if (req.recent) {
      // Filter for actively bonding tokens (PreBondingCurve)
      const recentPools = validPools.filter(pool => 
        pool.baseAsset.isBonding === true
      );
      console.log(`📝 Recent tokens filtered: ${recentPools.length}/${validPools.length}`);
      result.recent = { pools: recentPools };
    }

    if (req.graduated) {
      // Filter for graduated tokens (CreatedPool)
      const graduatedPools = validPools.filter(pool => 
        pool.baseAsset.isGraduated === true
      );
      console.log(`🎓 Graduated tokens filtered: ${graduatedPools.length}/${validPools.length}`);
      result.graduated = { pools: graduatedPools };
    }

    if (req.aboutToGraduate) {
      // Filter for tokens about to graduate (PostBondingCurve or LockedVesting)
      const aboutToGraduatePools = validPools.filter(pool => 
        pool.baseAsset.isAboutToGraduate === true
      );
      console.log(`🚀 About to graduate tokens filtered: ${aboutToGraduatePools.length}/${validPools.length}`);
      result.aboutToGraduate = { pools: aboutToGraduatePools };
    }

    return result;
  }
  static async getToken(req: GetTokenRequest, _options?: Options): Promise<GetTokenResponse> {
    console.log('🔗 Fetching token data from GOR RPC for:', req.id);
    const tokenInfo = await ApeClient.getGorTokenInfo(req.id);
    
    // Fetch from DB
    try {
      const dbResponse = await ky.get(`/api/token?mint=${encodeURIComponent(req.id)}`).json<{ token: { name: string; symbol: string; imageUrl: string | null } | null }>();
      const dbToken = dbResponse.token;
      if (dbToken) {
        const pool = tokenInfo.pools[0];
        if (pool) {
          pool.baseAsset.name = dbToken.name || pool.baseAsset.name;
          pool.baseAsset.symbol = dbToken.symbol || pool.baseAsset.symbol;
          if (dbToken.imageUrl) {
            pool.baseAsset.icon = dbToken.imageUrl;
            pool.baseAsset.image = dbToken.imageUrl;
          }
        }
      }
    } catch (error) {
      console.error(`Failed to fetch DB info for token ${req.id}:`, error);
    }
    
    return tokenInfo;
  }

  static async getGorTokenInfo(tokenMint: string): Promise<GetTokenResponse> {
    const connection = new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
    const dbcInstance = new DynamicBondingCurveClient(connection, 'confirmed');
    
    try {
      // Get token account info from GOR RPC
      const tokenPubkey = new PublicKey(tokenMint);
      
      // Derive pool address
      const configAccount = GOR_CONFIG.POOL_CONFIG_KEY;
      const config = new PublicKey(configAccount);
      const baseMint = tokenPubkey;
      const quoteMint = NATIVE_MINT;
      const poolAddress = PublicKey.findProgramAddressSync(
        [
          Buffer.from('pool'),
          config.toBuffer(),
          getFirstKey(baseMint, quoteMint),
          getSecondKey(baseMint, quoteMint),
        ],
        new PublicKey('dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN')
      )[0];

      // Fetch pool state
      const poolState = await dbcInstance.state.getPool(poolAddress);
      if (!poolState) {
        console.warn(`Pool not found for token: ${tokenMint}`);
        return { pools: [] };
      }

      // Fetch config
      const poolConfig = await dbcInstance.state.getPoolConfig(poolState.config);
      if (!poolConfig) {
        throw new Error('Pool config not found');
      }

      const mintAccount = await connection.getAccountInfo(baseMint);
      const tokenProgram = mintAccount?.owner.toString() || '';

      // Fetch mint info
      const mintInfo = await getMint(connection, baseMint);
      const totalSupply = Number(mintInfo.supply) / Math.pow(10, mintInfo.decimals);
      
      // Get migration progress and bonding curve status
      const migrationProgress = poolState.migrationProgress;
      const quoteReserve = Number(poolState.quoteReserve);
      const migrationThreshold = Number(poolConfig.migrationQuoteThreshold);
      
      // Use helper to get comprehensive status
      const bondingStatus = getBondingCurveStatus(migrationProgress, quoteReserve, migrationThreshold);
      
      // Calculate pricing using helper functions
      const solPriceInUSD = 150; // TODO: Fetch real SOL price from oracle
      const currentPrice = calculateTokenPrice(quoteReserve, totalSupply, bondingStatus.completionPercentage, solPriceInUSD);
      const marketCap = calculateMarketCap(currentPrice, totalSupply);
      const liquidity = calculateLiquidity(quoteReserve, solPriceInUSD);
      
      // Get holder count
      const holdersData = await ApeClient.getTokenHolders(tokenMint);
      const holderCount = holdersData.count || 0;
      
      // Calculate 24h price change
      const priceChange24h = await calculate24hPriceChange(tokenMint);
      console.log(`📊 24h price change for ${tokenMint}: ${priceChange24h.toFixed(2)}%`);
      
      // TODO: Fetch metadata properly using metaplex
      const tokenMetadata: { name: string; symbol: string; image: string | null } = { name: 'Unknown', symbol: 'UNK', image: null }; // Placeholder
      
      // Determine graduation timestamp
      const graduatedAt = bondingStatus.isGraduated && poolState.finishCurveTimestamp 
        ? new Date(Number(poolState.finishCurveTimestamp) * 1000).toISOString()
        : undefined;
        
      const pool: Pool = {
        id: `${tokenMint}`,
        chain: 'gor',
        dex: 'meteora-dbc',
        type: 'bonding-curve',
        createdAt: '2024-01-01T00:00:00.000Z', // TODO: Get actual createdAt from pool creation
        bondingCurve: bondingStatus.completionPercentage,
        volume24h: 0, // TODO: Implement from transaction history
        isUnreliable: false,
        updatedAt: new Date().toISOString(),
        baseAsset: {
          id: tokenMint,
          name: tokenMetadata.name,
          symbol: tokenMetadata.symbol,
          decimals: mintInfo.decimals,
          circSupply: totalSupply,
          totalSupply: totalSupply,
          tokenProgram,
          usdPrice: currentPrice,
          mcap: marketCap,
          liquidity: liquidity,
          holderCount: holderCount,
          graduatedAt: graduatedAt,
          stats24h: {
            priceChange: priceChange24h
          },
          organicScoreLabel: 'medium' as const,
          image: tokenMetadata.image,
          // Add migration status info using helper
          migrationProgress: migrationProgress,
          isBonding: bondingStatus.isBonding,
          isAboutToGraduate: bondingStatus.isAboutToGraduate,
          isGraduated: bondingStatus.isGraduated,
          canTrade: bondingStatus.canTrade
        }
      };

      return {
        pools: [pool]
      };
    } catch (error) {
      console.error('Error fetching GOR token info:', error);
      throw error;
    }
  }

  static async getTokenHolders(assetId: string, _options?: Options): Promise<GetTopHoldersResponse> {
    console.log('🔗 Fetching token holders from GOR chain for:', assetId);
    
    try {
      const connection = new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
      const mintPubkey = new PublicKey(assetId);
      
      // Get mint info to get decimals
      const mintInfo = await getMint(connection, mintPubkey);
      const decimals = mintInfo.decimals;
      
      // Get all token accounts for this mint
      const tokenAccounts = await connection.getProgramAccounts(
        new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // Token Program ID
        {
          filters: [
            {
              dataSize: 165, // Token account data size
            },
            {
              memcmp: {
                offset: 0, // Mint offset in token account
                bytes: mintPubkey.toBase58(),
              },
            },
          ],
        }
      );

      console.log(`Found ${tokenAccounts.length} token accounts for mint ${assetId}`);

      // Process token accounts to get holder data
      const holders = await Promise.all(
        tokenAccounts.map(async (accountInfo) => {
          try {
            // Parse token account data
            const accountData = accountInfo.account.data;
            
            // Token account structure:
            // Offset 0-32: mint (32 bytes)
            // Offset 32-64: owner (32 bytes)
            // Offset 64-72: amount (8 bytes)
            const amount = accountData.readBigUInt64LE(64); // Amount is at offset 64
            const amountNumber = Number(amount) / Math.pow(10, decimals);
            
            // Skip accounts with zero balance
            if (amountNumber === 0) {
              return null;
            }

            // Get owner from token account data (offset 32)
            const ownerBytes = accountData.slice(32, 64);
            const owner = new PublicKey(ownerBytes);

            return {
              address: owner.toBase58(),
              amount: amountNumber,
              tags: [] as CustomHolderTag[] // No special tags for now
            };
          } catch (error) {
            console.error('Error parsing token account:', error);
            return null;
          }
        })
      );

      // Filter out null values and sort by amount (descending)
      const validHolders = holders
        .filter((holder): holder is NonNullable<typeof holder> => holder !== null)
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 100); // Limit to top 100 holders

      console.log(`Processed ${validHolders.length} valid holders`);

      return {
        holders: validHolders,
        count: validHolders.length
      };
    } catch (error) {
      console.error('Error fetching holders from GOR chain:', error);
      return { holders: undefined, count: undefined };
    }
  }

  static async getChart(
    assetId: string,
    params: GetChartRequest,
    _options?: Options
  ): Promise<GetChartResponse> {
    console.log('🔗 Fetching chart data from GOR chain for:', assetId, params);
    
    // TODO: Implement GOR chain chart data
    // This would require storing historical price data on-chain or in a database
    // For now, return empty chart data
    return {
      candles: []
    };
  }

  static async getTokenTxs(
    assetId: string,
    req: GetTxsRequest,
    _options?: Options
  ): Promise<GetTxsResponse> {
    console.log('🔗 Fetching transaction history from GOR chain for:', assetId, req);
    
    // TODO: Implement GOR chain transaction history
    // This would require parsing transaction logs for swap events
    // For now, return empty transaction history
    return {
      txs: [],
      next: undefined
    };
  }

  static async getTokenDescription(
    assetId: string,
    _options?: Options
  ): Promise<GetTokenDescriptionResponse> {
    console.log('🔗 Fetching token description from GOR chain for:', assetId);
    
    // Get description from metadata
    try {
      // TODO: Implement proper metadata fetching using connection and tokenMint
      // const connection = new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
      // const tokenMint = new PublicKey(assetId);
      const metadata = { description: '' };
      return {
        description: metadata?.description
      };
    } catch (error) {
      console.error('Error fetching token description:', error);
      return { description: undefined };
    }
  }
}

// Add helper functions from QuickTradeSidebar
function getFirstKey(key1: PublicKey, key2: PublicKey) {
  const buf1 = key1.toBuffer();
  const buf2 = key2.toBuffer();
  return Buffer.compare(buf1, buf2) === 1 ? buf1 : buf2;
}
 
function getSecondKey(key1: PublicKey, key2: PublicKey) {
  const buf1 = key1.toBuffer();
  const buf2 = key2.toBuffer();
  return Buffer.compare(buf1, buf2) === 1 ? buf2 : buf1;
}
