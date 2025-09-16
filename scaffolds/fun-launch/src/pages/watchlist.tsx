"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Page from '@/components/ui/Page/Page'
import { Button } from "@/components/ui/button"
import { TokenCardList } from "@/components/TokenCard/TokenCardList"
import { Pool, TokenListTimeframe } from "@/components/Explore/types"
import { BookmarkIcon, HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

// Mock data - in a real app, this would come from localStorage, API, or state management
const MOCK_WATCHLIST_TOKENS: Pool[] = [
  // Empty for now to show empty state
]

export default function Watchlist() {
  const router = useRouter()
  const [watchlistTokens, setWatchlistTokens] = useState<Pool[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [timeframe, setTimeframe] = useState<TokenListTimeframe>('24h')

  useEffect(() => {
    // Simulate loading watchlist from localStorage or API
    const loadWatchlist = async () => {
      setIsLoading(true)
      
      // In a real app, you'd load from localStorage like:
      // const savedWatchlist = localStorage.getItem('watchlist')
      // if (savedWatchlist) {
      //   setWatchlistTokens(JSON.parse(savedWatchlist))
      // }
      
      // For now, use mock data
      setTimeout(() => {
        setWatchlistTokens(MOCK_WATCHLIST_TOKENS)
        setIsLoading(false)
      }, 500)
    }

    loadWatchlist()
  }, [])

  const handleExploreClick = () => {
    router.push('/')
  }

  const EmptyWatchlistState = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      {/* Logo */}
      <div className="relative w-24 h-24 mb-4">
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <BookmarkIcon className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Your Watchlist is Empty</h2>
        <p className="text-gray-400 max-w-md">
          Start building your watchlist by exploring tokens and adding the ones you want to track.
        </p>
      </div>

      {/* Explore Button */}
      <Button 
        onClick={handleExploreClick}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-medium"
        size="lg"
      >
        Explore Tokens
      </Button>
    </div>
  )

  return (
    <Page>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl font-bold">Watchlist</h1>
              <p className="text-gray-400">
                {watchlistTokens.length > 0 
                  ? `Tracking ${watchlistTokens.length} token${watchlistTokens.length === 1 ? '' : 's'}`
                  : "Keep track of your favorite tokens"
                }
              </p>
            </div>
          </div>

          {/* Timeframe selector - only show when there are tokens */}
          {watchlistTokens.length > 0 && (
            <div className="flex gap-2">
              {(['1h', '24h', '7d'] as TokenListTimeframe[]).map((tf) => (
                <Button
                  key={tf}
                  variant={timeframe === tf ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            </div>
          ) : watchlistTokens.length === 0 ? (
            <EmptyWatchlistState />
          ) : (
            <div className="bg-transparent border border-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-semibold">Your Tokens</h3>
              </div>
              <TokenCardList
                data={watchlistTokens}
                status="success"
                timeframe={timeframe}
                trackPools={true}
                className="max-h-[600px]"
              />
            </div>
          )}
        </div>

        {/* Helper text when not empty */}
        {watchlistTokens.length > 0 && (
          <div className="text-center text-gray-500 text-sm">
            <p>💡 Tip: Click on any token to view detailed information and trading options</p>
          </div>
        )}
      </div>
    </Page>
  )
}
