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
import { serializeParams } from '@/lib/utils';

const BASE_URL = process.env.JUPITER_API_BASE_URL || 'https://datapi.jup.ag';
const GOR_RPC_URL = process.env.RPC_URL || 'https://rpc.gorbagana.wtf/';

export class ApeClient {
  static async getGemsTokenList<T extends GetGemsTokenListRequest>(
    req: T,
    options?: Options
  ): Promise<{
    [K in keyof T]: undefined extends T[K]
      ? GetGemsTokenListIndividualResponse | undefined
      : GetGemsTokenListIndividualResponse;
  }> {
    console.log('🌐 Jupiter API Request:', JSON.stringify(req, null, 2));
    const result = await ky
      .post(`${BASE_URL}/v1/pools/gems`, {
        json: req,
        ...options,
      })
      .json();
    console.log('🌐 Jupiter API Response:', JSON.stringify(result, null, 2));
    //@ts-ignore
    return result;
  }
  static async getToken(req: GetTokenRequest, options?: Options): Promise<GetTokenResponse> {
    // Check if this is a GOR chain token (you can add logic to detect GOR tokens here)
    // For now, we'll try GOR RPC first, then fallback to Jupiter
    try {
      const gorData = await ApeClient.getGorTokenInfo(req.id);
      return gorData;
    } catch (error) {
      console.log('GOR RPC failed, falling back to Jupiter API:', error);
      return ky
        .get(`${BASE_URL}/v1/pools`, {
          searchParams: serializeParams({
            assetIds: [req.id],
          }),
          ...options,
        })
        .json();
    }
  }

  static async getGorTokenInfo(tokenMint: string): Promise<GetTokenResponse> {
    // Get token account info from GOR RPC
    const tokenInfoResponse = await ky
      .post(GOR_RPC_URL, {
        json: {
          jsonrpc: '2.0',
          id: 1,
          method: 'getAccountInfo',
          params: [
            tokenMint,
            {
              encoding: 'jsonParsed',
              commitment: 'confirmed'
            }
          ]
        }
      })
      .json() as any;

    if (!tokenInfoResponse.result?.value) {
      throw new Error('Token not found on GOR chain');
    }

    const tokenData = tokenInfoResponse.result.value.data.parsed.info;

    // Get current price and market data (simplified for now)
    const mockPool: Pool = {
      id: `gor-${tokenMint}`,
      chain: 'gor',
      dex: 'gor-dex',
      type: 'gor-pool',
      createdAt: new Date().toISOString(),
      bondingCurve: 0,
      volume24h: 0,
      isUnreliable: false,
      updatedAt: new Date().toISOString(),
      baseAsset: {
        id: tokenMint,
        name: `GOR Token ${tokenMint.slice(0, 4)}...${tokenMint.slice(-4)}`,
        symbol: `GOR${tokenMint.slice(0, 3).toUpperCase()}`,
        decimals: tokenData.decimals || 9,
        circSupply: parseInt(tokenData.supply) || 0,
        totalSupply: parseInt(tokenData.supply) || 0,
        tokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
        usdPrice: 0, // You can add price fetching logic here
        mcap: 0,
        liquidity: 0,
        stats24h: {
          priceChange: 0
        },
        organicScoreLabel: 'medium' as const
      }
    };

    return {
      pools: [mockPool]
    };
  }

  static async getTokenHolders(assetId: string, options?: Options): Promise<GetTopHoldersResponse> {
    return ky.get(`${BASE_URL}/v1/holders/${assetId}`, options).json();
  }

  static async getChart(
    assetId: string,
    params: GetChartRequest,
    options?: Options
  ): Promise<GetChartResponse> {
    return ky
      .get(`${BASE_URL}/v2/charts/${assetId}`, {
        searchParams: serializeParams(params),
        ...options,
      })
      .json();
  }

  static async getTokenTxs(
    assetId: string,
    req: GetTxsRequest,
    options?: Options
  ): Promise<GetTxsResponse> {
    return ky
      .get(`${BASE_URL}/v1/txs/${assetId}`, {
        searchParams: serializeParams(req),
        ...options,
      })
      .json();
  }

  static async getTokenDescription(
    assetId: string,
    options?: Options
  ): Promise<GetTokenDescriptionResponse> {
    return ky.get(`${BASE_URL}/v1/assets/${assetId}/description`, options).json();
  }
}
