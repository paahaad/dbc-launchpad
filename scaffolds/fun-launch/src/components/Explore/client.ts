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
import { GOR_CONFIG, getDynamicBondingCurveProgramId, getMetadataProgramId } from '@/config/gor-config';

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
    
    try {
      // Get token account info from GOR RPC
      const tokenPubkey = new PublicKey(tokenMint);
      const tokenAccountInfo = await connection.getAccountInfo(tokenPubkey);
      
      if (!tokenAccountInfo) {
        throw new Error('Token account not found on GOR chain');
      }

      // Fetch token metadata using Metaplex standard
      const tokenMetadata = await ApeClient.getGorTokenMetadata(connection, tokenPubkey);
      
      // Find associated bonding curve pool
      const poolInfo = await ApeClient.findGorBondingCurvePool(connection, tokenPubkey);
      
      // Get token supply info
      const supplyInfo = await connection.getTokenSupply(tokenPubkey);
      
      const pool: Pool = {
        id: `gor-${tokenMint}`,
        chain: 'gor',
        dex: 'meteora-dbc',
        type: 'bonding-curve',
        createdAt: poolInfo?.createdAt || '2024-01-01T00:00:00.000Z',
        bondingCurve: poolInfo?.currentPrice || 0,
        volume24h: poolInfo?.volume24h || 0,
        isUnreliable: false,
        updatedAt: '2024-01-01T00:00:00.000Z',
        baseAsset: {
          id: tokenMint,
          name: tokenMetadata?.name || `Token ${tokenMint.slice(0, 4)}...${tokenMint.slice(-4)}`,
          symbol: tokenMetadata?.symbol || `TKN${tokenMint.slice(0, 3).toUpperCase()}`,
          decimals: supplyInfo.value.decimals,
          circSupply: parseInt(supplyInfo.value.amount) / Math.pow(10, supplyInfo.value.decimals),
          totalSupply: parseInt(supplyInfo.value.amount) / Math.pow(10, supplyInfo.value.decimals),
          tokenProgram: tokenAccountInfo.owner.toString(),
          usdPrice: poolInfo?.usdPrice || 0,
          mcap: (poolInfo?.usdPrice || 0) * (parseInt(supplyInfo.value.amount) / Math.pow(10, supplyInfo.value.decimals)),
          liquidity: poolInfo?.liquidity || 0,
          stats24h: {
            priceChange: poolInfo?.priceChange24h || 0
          },
          organicScoreLabel: 'medium' as const,
          image: tokenMetadata?.image
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

  static async getGorTokenMetadata(connection: Connection, tokenMint: PublicKey): Promise<{
    name?: string;
    symbol?: string;
    description?: string;
    image?: string;
  } | null> {
    try {
      // Try to find Metaplex metadata account
      const METADATA_PROGRAM_ID = getMetadataProgramId();
      
      const [metadataPDA] = PublicKey.findProgramAddressSync(
        [
          Buffer.from('metadata'),
          METADATA_PROGRAM_ID.toBuffer(),
          tokenMint.toBuffer(),
        ],
        METADATA_PROGRAM_ID
      );

      const metadataAccount = await connection.getAccountInfo(metadataPDA);
      if (metadataAccount) {
        // Parse metadata account (simplified)
        // In production, you'd use @metaplex-foundation/mpl-token-metadata
        const data = metadataAccount.data;
        
        // This is a simplified parser - in production use proper metadata parsing
        try {
          const nameLength = data.readUInt32LE(69);
          const name = data.slice(73, 73 + nameLength).toString('utf8').replace(/\0/g, '');
          
          const symbolStart = 73 + nameLength + 4;
          const symbolLength = data.readUInt32LE(symbolStart - 4);
          const symbol = data.slice(symbolStart, symbolStart + symbolLength).toString('utf8').replace(/\0/g, '');
          
          const uriStart = symbolStart + symbolLength + 4;
          const uriLength = data.readUInt32LE(uriStart - 4);
          const uri = data.slice(uriStart, uriStart + uriLength).toString('utf8').replace(/\0/g, '');
          
          // Fetch off-chain metadata if URI exists
          let offChainMetadata = null;
          if (uri && uri.trim()) {
            try {
              offChainMetadata = await ky.get(uri.trim()).json() as any;
            } catch (e) {
              console.log('Failed to fetch off-chain metadata:', e);
            }
          }
          
          return {
            name: name || offChainMetadata?.name,
            symbol: symbol || offChainMetadata?.symbol,
            description: offChainMetadata?.description,
            image: offChainMetadata?.image
          };
        } catch (parseError) {
          console.log('Failed to parse metadata:', parseError);
          return null;
        }
      }
      
      return null;
    } catch (error) {
      console.log('Error fetching token metadata:', error);
      return null;
    }
  }

  static async findGorBondingCurvePool(connection: Connection, tokenMint: PublicKey): Promise<{
    poolAddress?: string;
    currentPrice?: number;
    liquidity?: number;
    volume24h?: number;
    priceChange24h?: number;
    usdPrice?: number;
    createdAt?: string;
    baseReserve?: number;
    quoteReserve?: number;
  } | null> {
    try {
      // Find bonding curve pool accounts that reference this token mint
      // This uses getProgramAccounts to find pools with the specific base_mint
      
      // Dynamic Bonding Curve Program ID from configuration
      const DBC_PROGRAM_ID = getDynamicBondingCurveProgramId();
      
      // Filter for VirtualPool accounts that have this token as base_mint
      // The offset is calculated from the VirtualPool struct layout
      const pools = await connection.getProgramAccounts(DBC_PROGRAM_ID, {
        filters: [
          {
            memcmp: {
              offset: GOR_CONFIG.VIRTUAL_POOL_OFFSETS.BASE_MINT, // Use configured offset for base_mint
              bytes: tokenMint.toBase58(),
            },
          },
        ],
      });

      if (pools.length === 0) {
        console.log('No bonding curve pool found for token:', tokenMint.toString());
        return null;
      }

      // Take the first pool found
      const poolAccount = pools[0];
      const poolData = poolAccount.account.data;

      // Parse VirtualPool data structure
      // This is a simplified parser based on the Rust struct
      try {
        let offset = 0;
        
        // Skip volatility_tracker (varies in size, need to check actual implementation)
        offset += GOR_CONFIG.VIRTUAL_POOL_OFFSETS.CONFIG; // Use config offset
        
        // config: Pubkey (32 bytes)
        offset += 32;
        
        // creator: Pubkey (32 bytes)  
        offset += 32;
        
        // base_mint: Pubkey (32 bytes) - verify this matches our token
        offset += 32;
        
        // base_vault: Pubkey (32 bytes)
        offset += 32;
        
        // quote_vault: Pubkey (32 bytes)
        offset += 32;
        
        // base_reserve: u64 (8 bytes)
        const baseReserve = poolData.readBigUInt64LE(offset);
        offset += 8;
        
        // quote_reserve: u64 (8 bytes)
        const quoteReserve = poolData.readBigUInt64LE(offset);
        offset += 8;
        
        // Skip protocol fees (4 * 8 = 32 bytes)
        offset += 32;
        
        // current price (sqrt_price): u128 (16 bytes)
        const sqrtPriceLo = poolData.readBigUInt64LE(offset);
        // Note: For full u128 support, we'd need to handle the high 64 bits properly
        offset += 16;
        
        // Convert sqrt price to actual price (simplified)
        const sqrtPrice = Number(sqrtPriceLo); // This is simplified, proper u128 handling needed
        const currentPrice = (sqrtPrice / Math.pow(2, 64)) ** 2; // Approximate conversion
        
        // Calculate USD price (assuming quote token is USDC with 6 decimals)
        const quoteDecimals = 6; // USDC decimals
        const baseDecimals = 9; // Typical token decimals
        
        const baseReserveNumber = Number(baseReserve) / Math.pow(10, baseDecimals);
        const quoteReserveNumber = Number(quoteReserve) / Math.pow(10, quoteDecimals);
        
        const usdPrice = baseReserveNumber > 0 ? quoteReserveNumber / baseReserveNumber : 0;
        const liquidity = quoteReserveNumber; // Total liquidity approximation
        
        return {
          poolAddress: poolAccount.pubkey.toString(),
          currentPrice,
          liquidity,
          volume24h: 0, // Would need additional tracking
          priceChange24h: 0, // Would need historical data
          usdPrice,
          createdAt: '2024-01-01T00:00:00.000Z',
          baseReserve: baseReserveNumber,
          quoteReserve: quoteReserveNumber,
        };
      } catch (parseError) {
        console.error('Error parsing pool data:', parseError);
        return null;
      }
    } catch (error) {
      console.error('Error finding bonding curve pool:', error);
      return null;
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
      const metadata = await ApeClient.getGorTokenMetadata(connection, tokenMint);
      
      return {
        description: metadata?.description
      };
    } catch (error) {
      console.error('Error fetching token description:', error);
      return { description: undefined };
    }
  }
}
