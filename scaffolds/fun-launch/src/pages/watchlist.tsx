"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/router"
import Page from '@/components/ui/Page/Page'
import { Button } from "@/components/ui/button"
import { BookmarkIcon, StarIcon } from '@heroicons/react/24/outline'
import { useWallet } from '@jup-ag/wallet-adapter'

// Token type for watchlist
interface WatchlistToken {
  id: string;
  mintAddress: string;
  name: string;
  symbol: string;
  imageUrl: string;
  marketCap: string | null;
  supply: string;
  decimals: number;
  description: string | null;
  createdAt: string;
  holders: number;
  website: string | null;
  twitter: string | null;
  telegram: string | null;
  discord: string | null;
}

export default function Watchlist() {
  const router = useRouter()
  const [watchlistTokens, setWatchlistTokens] = useState<WatchlistToken[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { publicKey } = useWallet()
  const walletAddress = useMemo(() => publicKey?.toBase58(), [publicKey])

  // Fetch watchlist tokens from API
  const fetchWatchlistTokens = async (userAddress: string) => {
    try {
      const response = await fetch(`/api/watchlist-tokens?userId=${userAddress}`)
      if (response.ok) {
        const data = await response.json()
        setWatchlistTokens(data.tokens || [])
        setError(null)
      } else {
        setError('Failed to load watchlist')
      }
    } catch (err) {
      setError('Failed to load watchlist')
      console.error('Error fetching watchlist:', err)
    }
  }

  // Remove token from watchlist
  const removeFromWatchlist = async (mintAddress: string) => {
    if (!walletAddress) return

    try {
      const response = await fetch('/api/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: walletAddress,
          mintAddress,
          action: 'remove',
        }),
      })

      if (response.ok) {
        // Remove from local state
        setWatchlistTokens(prev => prev.filter(token => token.mintAddress !== mintAddress))
      } else {
        console.error('Failed to remove from watchlist')
      }
    } catch (error) {
      console.error('Error removing from watchlist:', error)
    }
  }

  useEffect(() => {
    const loadWatchlist = async () => {
      setIsLoading(true)
      setError(null)
      
      if (walletAddress) {
        await fetchWatchlistTokens(walletAddress)
      } else {
        setWatchlistTokens([])
      }
      
      setIsLoading(false)
    }

    loadWatchlist()
  }, [walletAddress])

  const handleExploreClick = () => {
    router.push('/')
  }

  // Utility functions
  const formatMarketCap = (mcap: string | null): string => {
    if (!mcap) return 'N/A'
    const value = parseFloat(mcap)
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`
    }
    return `$${value}`
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60)
      return `${hours}h ago`
    } else {
      const days = Math.floor(diffInMinutes / 1440)
      return `${days}d ago`
    }
  }

  const EmptyWatchlistState = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      {/* Logo */}
      <div className="relative w-24 h-24 mb-4">
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          <BookmarkIcon className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">
          {!walletAddress ? 'Connect Your Wallet' : 'Your Watchlist is Empty'}
        </h2>
        <p className="text-gray-400 max-w-md">
          {!walletAddress 
            ? 'Connect your wallet to view and manage your token watchlist.'
            : 'Start building your watchlist by exploring tokens and adding the ones you want to track.'
          }
        </p>
      </div>

      {/* Action Button */}
      <Button 
        onClick={handleExploreClick}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg font-medium"
        size="lg"
      >
        {!walletAddress ? 'Connect Wallet' : 'Explore Tokens'}
      </Button>
    </div>
  )

  const WatchlistTable = () => (
    <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">Token</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">Market Cap</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">Holders</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">Added</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-neutral-300">Links</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-neutral-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {watchlistTokens.map((token) => (
              <tr key={token.id} className="hover:bg-neutral-800/30 transition-colors">
                {/* Token Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center overflow-hidden">
                      {token.imageUrl ? (
                        <img 
                          src={token.imageUrl} 
                          alt={token.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<span class="text-sm font-bold text-primary">${token.symbol.charAt(0)}</span>`;
                            }
                          }}
                        />
                      ) : (
                        <span className="text-sm font-bold text-primary">
                          {token.symbol.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-white">{token.name}</div>
                      <div className="text-sm text-neutral-400">{token.symbol}</div>
                    </div>
                  </div>
                </td>

                {/* Market Cap */}
                <td className="px-6 py-4">
                  <div className="text-white font-medium">
                    {formatMarketCap(token.marketCap)}
                  </div>
                </td>

                {/* Holders */}
                <td className="px-6 py-4">
                  <div className="text-white">
                    {token.holders.toLocaleString()}
                  </div>
                </td>

                {/* Added Date */}
                <td className="px-6 py-4">
                  <div className="text-neutral-400 text-sm">
                    {formatDate(token.createdAt)}
                  </div>
                </td>

                {/* Links */}
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {token.website && (
                      <a 
                        href={token.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Website
                      </a>
                    )}
                    {token.twitter && (
                      <a 
                        href={token.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Twitter
                      </a>
                    )}
                    {token.telegram && (
                      <a 
                        href={token.telegram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Telegram
                      </a>
                    )}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-center">
                  <Button
                    onClick={() => removeFromWatchlist(token.mintAddress)}
                    size="sm"
                    variant="ghost"
                    className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10"
                    title="Remove from watchlist"
                  >
                    <StarIcon className="w-4 h-4 fill-current" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <Page>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-bold text-white">Watchlist</h1>
              <p className="text-neutral-400">
                {!walletAddress 
                  ? "Connect your wallet to view your watchlist"
                  : watchlistTokens.length > 0 
                    ? `Tracking ${watchlistTokens.length} token${watchlistTokens.length === 1 ? '' : 's'}`
                    : "Keep track of your favorite tokens"
                }
              </p>
            </div>
          </div>

          {/* Refresh button when wallet is connected */}
          {walletAddress && watchlistTokens.length > 0 && (
            <Button
              onClick={() => fetchWatchlistTokens(walletAddress)}
              variant="outline"
              size="sm"
              className="border-neutral-600 text-white hover:bg-neutral-800"
            >
              Refresh
            </Button>
          )}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 mb-4">{error}</p>
              <Button 
                onClick={() => walletAddress && fetchWatchlistTokens(walletAddress)} 
                variant="outline"
                className="border-neutral-600 text-white hover:bg-neutral-800"
              >
                Try Again
              </Button>
            </div>
          ) : watchlistTokens.length === 0 ? (
            <EmptyWatchlistState />
          ) : (
            <WatchlistTable />
          )}
        </div>

        {/* Helper text when not empty */}
        {watchlistTokens.length > 0 && (
          <div className="text-center text-neutral-500 text-sm">
            <p>💡 Tip: Click the star icon to remove tokens from your watchlist</p>
          </div>
        )}
      </div>
    </Page>
  )
}
