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
} from './types';
// Only using GOR RPC - no external API calls needed
import { Connection, PublicKey } from '@solana/web3.js';
import { DynamicBondingCurveClient } from '@meteora-ag/dynamic-bonding-curve-sdk';
import { NATIVE_MINT, getMint } from '@solana/spl-token';
import { GOR_CONFIG } from '@/config/gor-config';

// All data fetched from GOR chain - no external APIs needed

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

    if (req.recent) {
      const response = await ky.get('/api/tokens').json<{ tokens: { mintAddress: string; createdAt: string; name: string; symbol: string; imageUrl: string | null }[] }>();

      const pools = await Promise.all(
        response.tokens.map(async (token) => {
          try {
            const tokenInfo = await ApeClient.getGorTokenInfo(token.mintAddress);
            const pool = tokenInfo.pools[0];
            if (pool) {
              pool.createdAt = token.createdAt;
              pool.baseAsset.name = token.name || pool.baseAsset.name;
              pool.baseAsset.symbol = token.symbol || pool.baseAsset.symbol;
              if (token.imageUrl) {
                pool.baseAsset.icon = token.imageUrl; // Set icon for UI rendering
                pool.baseAsset.image = token.imageUrl; // Also set image for completeness
              }
            }
            return pool;
          } catch (error) {
            console.error(`Failed to fetch info for token ${token.mintAddress}:`, error);
            return null;
          }
        })
      );

      result.recent = { pools: pools.filter((p): p is Pool => p !== null) };
    }

    if (req.graduated) {
      result.graduated = { pools: [] };
    }
    if (req.aboutToGraduate) {
      result.aboutToGraduate = { pools: [] };
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
      
      // TODO: Fetch metadata properly using metaplex
      const tokenMetadata: { name: string; symbol: string; image: string | null } = { name: 'Unknown', symbol: 'UNK', image: null }; // Placeholder
        
      const pool: Pool = {
        id: `${tokenMint}`,
        chain: 'gor',
        dex: 'meteora-dbc',
        type: 'bonding-curve',
        createdAt: '2024-01-01T00:00:00.000Z', // TODO: Get actual createdAt
        bondingCurve: 0, // TODO: Calculate from poolState
        volume24h: 0, // TODO: Implement
        isUnreliable: false,
        updatedAt: '2024-01-01T00:00:00.000Z',
        baseAsset: {
          id: tokenMint,
          name: tokenMetadata.name,
          symbol: tokenMetadata.symbol,
          decimals: mintInfo.decimals,
          circSupply: totalSupply,
          totalSupply: totalSupply,
          tokenProgram,
          usdPrice: 0, // TODO: Calculate from poolState
          mcap: 0, // TODO: Calculate
          liquidity: 0, // TODO: From poolState
          stats24h: {
            priceChange: 0 // TODO: Implement
          },
          organicScoreLabel: 'medium' as const,
          image: tokenMetadata.image
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
    
    // TODO: Implement GOR chain token holders fetching
    // This would require getting all token accounts for the mint using getProgramAccounts
    // For now, return empty holders list as this is complex to implement correctly
    try {
      console.log('Token holders fetching not implemented yet for GOR chain');
      return {
        holders: [],
        count: 0
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
      const connection = new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
      const tokenMint = new PublicKey(assetId);
      // TODO: Implement proper metadata fetching
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
