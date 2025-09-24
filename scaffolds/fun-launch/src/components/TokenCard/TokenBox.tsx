import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Token } from '@/components/TokenGrid/TokenGrid';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const formatCreateTime = (date: Date): string => {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`;
  } else {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours}h`;
  }
};


const formatMarketCap = (mcap: number): string => {
  if (mcap >= 1000000) {
    return `$${(mcap / 1000000).toFixed(1)}M`;
  } else if (mcap >= 1000) {
    return `$${(mcap / 1000).toFixed(0)}K`;
  }
  return `$${mcap}`;
};


export const TokenBox: React.FC<{ 
  token: Token;
  isWatched: boolean; 
  onToggleWatchlist: (mintAddress: string, isCurrentlyWatched: boolean) => void;
  isWalletConnected: boolean;
}> = ({ token, isWatched, onToggleWatchlist, isWalletConnected }) => {
  const router = useRouter();

  const handleWhitelist = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking watchlist button
    if (!isWalletConnected) {
      console.warn('Please connect your wallet to manage watchlist');
      return;
    }
    onToggleWatchlist(token.id, isWatched);
  };

  const handleCardClick = () => {
    router.push(`/token/${token.id}`);
  };

  const isPositiveChange = token.change > 0;

  return (
    <Card 
      className="relative group hover:shadow-lg transition-all duration-200 border-neutral-800 bg-neutral-900/50 cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center overflow-hidden">
              {token.logo ? (
                <img 
                  src={token.logo} 
                  alt={token.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initial letter if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-lg font-bold text-primary">${token.ticker.charAt(0)}</span>`;
                    }
                  }}
                />
              ) : (
                <span className="text-lg font-bold text-primary">
                  {token.ticker.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">{token.name}</h3>
              <p className="text-sm text-neutral-400">{token.ticker}</p>
            </div>
          </div>
          <Button
            onClick={handleWhitelist}
            size="icon"
            variant="ghost"
            className={cn(
              "w-8 h-8 rounded-full transition-all duration-200",
              !isWalletConnected 
                ? "text-neutral-600 cursor-not-allowed" 
                : isWatched 
                  ? "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10" 
                  : "text-neutral-400 hover:text-yellow-400 hover:bg-yellow-400/10"
            )}
            title={
              !isWalletConnected 
                ? 'Connect wallet to manage watchlist' 
                : isWatched 
                  ? 'Remove from watchlist' 
                  : 'Add to watchlist'
            }
          >
            <svg 
              className={cn(
                "w-4 h-4 transition-all duration-200",
                isWatched ? "fill-current" : "fill-none stroke-current stroke-2"
              )}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Price and Change */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-neutral-500 text-sm">Price</span>
              <p className="text-white font-medium">${token.price.toFixed(4)}</p>
            </div>
            <div className="text-right">
              <span className="text-neutral-500 text-sm">24h Change</span>
              <p className={cn(
                "font-medium",
                isPositiveChange ? "text-green-400" : "text-red-400"
              )}>
                {isPositiveChange ? '+' : ''}{token.change.toFixed(1)}%
              </p>
            </div>
          </div>
          
          {/* Bottom row: Created time and Market Cap */}
          <div className="flex items-center justify-between text-sm">
            <div>
              <span className="text-neutral-500">Created</span>
              <p className="text-white font-medium">{formatCreateTime(token.createTime)}</p>
            </div>
            <div className="text-right">
              <span className="text-neutral-500">Market Cap</span>
              <p className="text-white font-medium">{formatMarketCap(token.marketCap)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};