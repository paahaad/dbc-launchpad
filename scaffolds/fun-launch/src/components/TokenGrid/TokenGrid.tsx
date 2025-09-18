import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useWallet } from '@jup-ag/wallet-adapter';
import { TokenBox } from '../TokenCard/TokenBox';


// API response type
interface ApiToken {
  id: string;
  mintAddress: string;
  createdAt: string;
  name: string;
  symbol: string;
  imageUrl: string;
  marketCap: string | null;
  supply: string;
  decimals: number;
  description: string | null;
}

// Component token type
export interface Token {
  id: string;
  name: string;
  ticker: string;
  logo: string;
  createTime: Date;
  marketCap: number;
  isWhitelisted: boolean;
  price: number;
  change: number;
}

// Fetch tokens from API
const fetchTokens = async (): Promise<Token[]> => {
  try {
    const response = await fetch('/api/tokens');
    if (!response.ok) {
      throw new Error('Failed to fetch tokens');
    }
    
    const data = await response.json();
    const apiTokens: ApiToken[] = data.tokens || [];
    
    // Transform API data to component format
    return apiTokens.map((apiToken) => {
      // Parse market cap from string or use a default
      const marketCapValue = apiToken.marketCap ? parseFloat(apiToken.marketCap) : 0;
      
      return {
        id: apiToken.mintAddress,
        name: apiToken.name,
        ticker: apiToken.symbol,
        logo: apiToken.imageUrl,
        createTime: new Date(apiToken.createdAt),
        marketCap: marketCapValue || Math.floor(Math.random() * 500000) + 10000, // Use real market cap or fallback
        isWhitelisted: false, // This will be updated based on real watchlist status
        price: Math.random() * 0.1 + 0.001, // Mock price for now - could be calculated from market cap and supply
        change: (Math.random() - 0.5) * 100, // Mock change for now
      };
    });
  } catch (error) {
    console.error('Error fetching tokens:', error);
    return [];
  }
};

export const TokenGrid: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [watchlist, setWatchlist] = useState<Set<string>>(new Set());
  const [userId, setUserId] = useState<string | null>(null);
  const { publicKey } = useWallet();
  const walletAddress = useMemo(() => publicKey?.toBase58(), [publicKey]);



  // Function to fetch user's watchlist
  const fetchWatchlist = async (userAddress: string) => {
    if (!userAddress) return;
    
    try {
      const response = await fetch(`/api/watchlist-status?userId=${userAddress}`);
      if (response.ok) {
        const data = await response.json();
        setWatchlist(new Set(data.watchlist));
      } else {
        // Silently handle API errors - don't show error to user
        console.warn('Failed to fetch watchlist:', response.status);
        setWatchlist(new Set());
      }
    } catch (error) {
      // Silently handle network errors - don't show error to user
      console.warn('Error fetching watchlist:', error);
      setWatchlist(new Set());
    }
  };

  // Function to toggle watchlist status
  const toggleWatchlist = async (mintAddress: string, isCurrentlyWatched: boolean) => {
    if (!userId || !walletAddress) {
      console.warn('Wallet not connected - cannot update watchlist');
      return;
    }

    try {
      const action = isCurrentlyWatched ? 'remove' : 'add';
      const response = await fetch('/api/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          mintAddress,
          action,
        }),
      });

      if (response.ok) {
        // Update local state
        setWatchlist(prev => {
          const newSet = new Set(prev);
          if (isCurrentlyWatched) {
            newSet.delete(mintAddress);
          } else {
            newSet.add(mintAddress);
          }
          return newSet;
        });

        // Update token in the tokens array
        setTokens(prev => prev.map(token => 
          token.id === mintAddress 
            ? { ...token, isWhitelisted: !isCurrentlyWatched }
            : token
        ));
      } else {
        console.error('Failed to update watchlist');
      }
    } catch (error) {
      console.error('Error updating watchlist:', error);
    }
  };

  // Load tokens when component mounts
  useEffect(() => {
    const loadTokens = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const fetchedTokens = await fetchTokens();
        setTokens(fetchedTokens);
      } catch (err) {
        setError('Failed to load tokens');
        console.error('Error loading tokens:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTokens();
  }, []);

  // Fetch watchlist when wallet connects or changes
  useEffect(() => {
    const loadWatchlist = async () => {
      if (walletAddress) {
        setUserId(walletAddress);
        await fetchWatchlist(walletAddress);
      } else {
        // Clear watchlist when wallet disconnects
        setWatchlist(new Set());
        setUserId(null);
      }
    };

    loadWatchlist();
  }, [walletAddress]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Explore</h2>
          <div className="text-sm text-neutral-400">Loading...</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="border-neutral-800 bg-neutral-900/50">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-neutral-700 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 bg-neutral-700 rounded animate-pulse w-24" />
                      <div className="h-3 bg-neutral-700 rounded animate-pulse w-16" />
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-neutral-700 rounded-full animate-pulse" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-3 bg-neutral-700 rounded animate-pulse w-12" />
                      <div className="h-4 bg-neutral-700 rounded animate-pulse w-16" />
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="h-3 bg-neutral-700 rounded animate-pulse w-16" />
                      <div className="h-4 bg-neutral-700 rounded animate-pulse w-12" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-3 bg-neutral-700 rounded animate-pulse w-12" />
                      <div className="h-4 bg-neutral-700 rounded animate-pulse w-8" />
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="h-3 bg-neutral-700 rounded animate-pulse w-16" />
                      <div className="h-4 bg-neutral-700 rounded animate-pulse w-12" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Explore</h2>
        </div>
        <div className="text-center py-12">
          <p className="text-red-400 mb-4">{error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
            className="border-neutral-600 text-white hover:bg-neutral-800"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Sort tokens by creation time (newest first)
  const sortedTokens = [...tokens].sort((a, b) => b.createTime.getTime() - a.createTime.getTime());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Explore</h2>
        <div className="text-sm text-neutral-400">
          {sortedTokens.length} tokens generated
        </div>
      </div>
      
      {sortedTokens.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-400">No tokens found. Be the first to create one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedTokens.map((token) => (
            <TokenBox 
              key={token.id} 
              token={token} 
              isWatched={watchlist.has(token.id)}
              onToggleWatchlist={toggleWatchlist}
              isWalletConnected={!!walletAddress}
            />
          ))}
        </div>
      )}
    </div>
  );
};
