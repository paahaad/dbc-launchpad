// React hook for fetching and managing DBC pool data
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PublicKey } from '@solana/web3.js';
import { dbcClient, VirtualPool } from '@/utils/dbc-client';
import { useCallback, useMemo } from 'react';

export interface DBCPoolData {
  pool: VirtualPool;
  poolPDA: PublicKey;
  price: number;
  marketCap: number;
  reserves: {
    base: number;
    quote: number;
  };
  volume24h?: number;
  priceChange24h?: number;
}

export interface TokenMetadata {
  name?: string;
  symbol?: string;
  description?: string;
  image?: string;
  mint: string;
}

/**
 * Hook to fetch DBC pool data by token mint
 */
export function useDBCPool(tokenMint: string | undefined) {
  return useQuery({
    queryKey: ['dbc-pool', tokenMint],
    queryFn: async (): Promise<DBCPoolData | null> => {
      if (!tokenMint) return null;
      
      try {
        const mint = new PublicKey(tokenMint);
        const result = await dbcClient.findPoolByToken(mint);
        
        if (!result) return null;
        
        const { pool, poolPDA } = result;
        
        // Calculate price from sqrt_price
        const price = dbcClient.calculatePrice(pool.sqrtPrice);
        
        // Calculate market cap (you'll need total supply from mint account)
        const totalSupply = 1000000; // Placeholder - fetch from mint account
        const marketCap = dbcClient.calculateMarketCap(pool, price, totalSupply);
        
        // Convert reserves to human readable numbers
        const baseReserve = pool.baseReserve.toNumber() / Math.pow(10, 9); // Assuming 9 decimals
        const quoteReserve = pool.quoteReserve.toNumber() / Math.pow(10, 6); // Assuming 6 decimals
        
        return {
          pool,
          poolPDA,
          price,
          marketCap,
          reserves: {
            base: baseReserve,
            quote: quoteReserve,
          },
        };
      } catch (error) {
        console.error('Error fetching DBC pool:', error);
        return null;
      }
    },
    enabled: !!tokenMint,
    refetchInterval: 10000, // Refetch every 10 seconds
    staleTime: 5000, // Consider data stale after 5 seconds
    refetchOnMount: false, // Prevent refetch on mount to avoid hydration issues
    refetchOnWindowFocus: false, // Prevent refetch on window focus during SSR
  });
}

/**
 * Hook to fetch token metadata
 */
export function useTokenMetadata(tokenMint: string | undefined) {
  return useQuery({
    queryKey: ['token-metadata', tokenMint],
    queryFn: async (): Promise<TokenMetadata | null> => {
      if (!tokenMint) return null;
      
      try {
        const mint = new PublicKey(tokenMint);
        const metadata = await dbcClient.getTokenMetadata(mint);
        
        // Always return some metadata, even if fallback
        return {
          name: metadata?.name || `Token ${tokenMint.slice(0, 8)}...`,
          symbol: metadata?.symbol || `T${tokenMint.slice(0, 4)}`,
          description: metadata?.description,
          image: metadata?.image,
          mint: tokenMint,
        };
      } catch (error) {
        console.error('Error fetching token metadata:', error);
        
        // Fallback metadata on error
        return {
          name: `Token ${tokenMint.slice(0, 8)}...`,
          symbol: `T${tokenMint.slice(0, 4)}`,
          mint: tokenMint,
        };
      }
    },
    enabled: !!tokenMint,
    staleTime: 300000, // Metadata doesn't change often, cache for 5 minutes
    retry: 2, // Retry failed requests twice
    retryDelay: 1000, // Wait 1 second between retries
    refetchOnMount: false, // Prevent refetch on mount to avoid hydration issues
    refetchOnWindowFocus: false, // Prevent refetch on window focus during SSR
  });
}

/**
 * Hook to combine pool data and metadata
 */
export function useDBCToken(tokenMint: string | undefined) {
  const { data: poolData, isLoading: poolLoading, error: poolError } = useDBCPool(tokenMint);
  const { data: metadata, isLoading: metadataLoading, error: metadataError } = useTokenMetadata(tokenMint);
  
  const combinedData = useMemo(() => {
    if (!poolData || !metadata) return null;
    
    return {
      ...poolData,
      metadata,
      // Add computed fields
      volume24h: 0, // Placeholder - would need to track swaps
      priceChange24h: 0, // Placeholder - would need historical data
      totalSupply: 1000000, // Placeholder - fetch from mint account
      holders: 0, // Placeholder - would need to index token accounts
    };
  }, [poolData, metadata]);
  
  return {
    data: combinedData,
    isLoading: poolLoading || metadataLoading,
    error: poolError || metadataError,
    poolData,
    metadata,
  };
}

/**
 * Hook to simulate swap and get quote
 */
export function useSwapQuote(
  tokenMint: string | undefined,
  inputAmount: number,
  tradeDirection: 'buy' | 'sell'
) {
  const { data: poolData } = useDBCPool(tokenMint);
  
  return useQuery({
    queryKey: ['swap-quote', tokenMint, inputAmount, tradeDirection],
    queryFn: async () => {
      if (!poolData || !inputAmount) return null;
      
      // This would use the DBC SDK to calculate swap quotes
      // For now, we'll use simplified calculations
      
      const { pool } = poolData;
      const currentPrice = poolData.price;
      
      if (tradeDirection === 'buy') {
        // Calculate how many tokens you get for inputAmount of quote token
        const outputAmount = inputAmount / currentPrice;
        const priceImpact = 0.01; // Placeholder - calculate based on curve
        
        return {
          inputAmount,
          outputAmount,
          priceImpact,
          minimumReceived: outputAmount * 0.99, // 1% slippage
          route: 'DBC',
        };
      } else {
        // Calculate how much quote token you get for inputAmount of base token
        const outputAmount = inputAmount * currentPrice;
        const priceImpact = 0.01; // Placeholder
        
        return {
          inputAmount,
          outputAmount,
          priceImpact,
          minimumReceived: outputAmount * 0.99,
          route: 'DBC',
        };
      }
    },
    enabled: !!poolData && !!inputAmount,
    staleTime: 1000, // Quote data should be fresh
  });
}

/**
 * Hook to refresh pool data
 */
export function useRefreshPool() {
  const queryClient = useQueryClient();
  
  return useCallback((tokenMint: string) => {
    queryClient.invalidateQueries({ queryKey: ['dbc-pool', tokenMint] });
    queryClient.invalidateQueries({ queryKey: ['token-metadata', tokenMint] });
  }, [queryClient]);
}

/**
 * Hook to get multiple pools (for explore page)
 */
export function useDBCPools(tokenMints: string[]) {
  return useQuery({
    queryKey: ['dbc-pools', tokenMints],
    queryFn: async () => {
      const pools = await Promise.allSettled(
        tokenMints.map(async (mint) => {
          try {
            const publicKey = new PublicKey(mint);
            const result = await dbcClient.findPoolByToken(publicKey);
            if (!result) return null;
            
            const { pool, poolPDA } = result;
            const price = dbcClient.calculatePrice(pool.sqrtPrice);
            const totalSupply = 1000000; // Placeholder
            const marketCap = dbcClient.calculateMarketCap(pool, price, totalSupply);
            
            return {
              mint,
              pool,
              poolPDA,
              price,
              marketCap,
              reserves: {
                base: pool.baseReserve.toNumber() / Math.pow(10, 9),
                quote: pool.quoteReserve.toNumber() / Math.pow(10, 6),
              },
            };
          } catch (error) {
            console.error(`Error fetching pool for ${mint}:`, error);
            return null;
          }
        })
      );
      
      return pools
        .map((result) => result.status === 'fulfilled' ? result.value : null)
        .filter((pool) => pool !== null);
    },
    enabled: tokenMints.length > 0,
    staleTime: 30000, // Cache for 30 seconds
  });
}
