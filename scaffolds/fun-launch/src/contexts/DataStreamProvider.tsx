import { atomMsgWithListeners } from '@/lib/jotai';
import { useSetAtom } from 'jotai';
import { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import { StreamResponse } from './TokenChart/msg'; // Keep if needed for types
import ky from 'ky';
import { Pool } from '@/components/Explore/types';
import { ApeClient } from '@/components/Explore/client';

const [dataStreamMsgAtom, useDataStreamListener] = atomMsgWithListeners<StreamResponse | null>(null);
export { useDataStreamListener };

type DataStreamContextType = {
  subscribePools: (pools: string[]) => void;
  unsubscribePools: (pools: string[]) => void;
  subscribeRecentTokenList: () => void;
  unsubscribeRecentTokenList: () => void;
  subscribeTxns: (assets: string[]) => void;
  unsubscribeTxns: (assets: string[]) => void;
};

const DataStreamContext = createContext<DataStreamContextType | null>(null);

export const DataStreamProvider = ({ children }: { children: React.ReactNode }) => {
  const setDataStreamMsg = useSetAtom(dataStreamMsgAtom);

  const subRecentTokenList = useRef(false);
  const subPools = useRef<Set<string>>(new Set());
  const subTxnsAssets = useRef<Set<string>>(new Set());
  const lastFetched = useRef(new Date(0));

  const subscribeRecentTokenList = useCallback(() => {
    subRecentTokenList.current = true;
  }, []);

  const unsubscribeRecentTokenList = useCallback(() => {
    subRecentTokenList.current = false;
  }, []);

  const subscribePools = useCallback((pools: string[]) => {
    for (const pool of pools) {
      subPools.current.add(pool);
    }
  }, []);

  const unsubscribePools = useCallback((pools: string[]) => {
    for (const pool of pools) {
      subPools.current.delete(pool);
    }
  }, []);

  const subscribeTxns = useCallback((assets: string[]) => {
    for (const asset of assets) {
      subTxnsAssets.current.add(asset);
    }
  }, []);

  const unsubscribeTxns = useCallback((assets: string[]) => {
    for (const asset of assets) {
      subTxnsAssets.current.delete(asset);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!subRecentTokenList.current) return;

      const since = lastFetched.current.toISOString();
      try {
        const response = await ky.get(`/api/tokens?since=${encodeURIComponent(since)}`).json<{ tokens: { mintAddress: string; createdAt: string; name: string; symbol: string; imageUrl: string | null }[] }>();

        if (response.tokens.length > 0) {
          const newPools = await Promise.all(
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
                  return { type: 'new' as const, pool };
                }
                return null;
              } catch (error) {
                console.error(`Failed to process new token ${token.mintAddress}:`, error);
                return null;
              }
            })
          );

          const validUpdates = newPools.filter((u): u is { type: 'new'; pool: Pool } => u !== null);

          if (validUpdates.length > 0) {
            const msg = { type: 'updates' as const, data: validUpdates };
            setDataStreamMsg(msg);
            lastFetched.current = new Date();
          }
        }
      } catch (error) {
        console.error('Polling error:', error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [setDataStreamMsg]);

  return (
    <DataStreamContext.Provider
      value={{
        subscribePools,
        unsubscribePools,
        subscribeRecentTokenList,
        unsubscribeRecentTokenList,
        subscribeTxns,
        unsubscribeTxns,
      }}
    >
      {children}
    </DataStreamContext.Provider>
  );
};

export const useDataStream = () => {
  const context = useContext(DataStreamContext);
  if (!context) {
    throw new Error('useDataStream must be used within DataStreamProvider');
  }
  return context;
};
