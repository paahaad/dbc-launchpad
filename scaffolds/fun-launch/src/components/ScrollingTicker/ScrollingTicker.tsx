import React from 'react';
import { cn } from '@/lib/utils';

const featuredTokens = [
  { name: 'Dumpster Coin', ticker: 'DUMP', price: '$0.0012', change: '+15.2%' },
  { name: 'Trash Token', ticker: 'TRASH', price: '$0.0089', change: '+8.7%' },
  { name: 'Garbage Protocol', ticker: 'GARB', price: '$0.0234', change: '+23.1%' },
  { name: 'Waste', ticker: 'WASTE', price: '$0.0045', change: '-2.3%' },
  { name: 'Recycle Token', ticker: 'RECYCLE', price: '$0.0156', change: '+12.8%' },
  { name: 'Eco Dump', ticker: 'ECODUMP', price: '$0.0034', change: '+45.6%' },
  { name: 'Bin Coin', ticker: 'BIN', price: '$0.0067', change: '+18.9%' },
  { name: 'Litter Token', ticker: 'LITTER', price: '$0.0123', change: '+7.4%' },
];

type FeaturedToken = typeof featuredTokens[0];

const TickerItem: React.FC<{ token: FeaturedToken }> = ({ token }) => {
  const isPositive = token.change.startsWith('+');
  
  return (
    <div className="flex items-center gap-3 px-4 py-3 whitespace-nowrap hover:bg-neutral-800/30 transition-colors duration-200 rounded-lg mx-1">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/40 to-primary/70 flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold text-white">
            {token.ticker.charAt(0)}
          </span>
        </div>
        <div>
          <span className="text-sm font-semibold text-white">{token.ticker}</span>
          <span className="text-xs text-neutral-300 ml-1">{token.name}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-white">{token.price}</span>
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-md shadow-sm",
          isPositive 
            ? "text-green-300 bg-green-500/20 border border-green-500/30" 
            : "text-red-300 bg-red-500/20 border border-red-500/30"
        )}>
          {token.change}
        </span>
      </div>
    </div>
  );
};

export const ScrollingTicker: React.FC = () => {
  // Duplicate the array to create seamless scrolling
  const duplicatedTokens = [...featuredTokens, ...featuredTokens];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-neutral-900/90 via-neutral-800/80 to-neutral-900/90 border border-neutral-700/50 rounded-lg shadow-lg">
      <div className="flex animate-scroll">
        {duplicatedTokens.map((token, index) => (
          <TickerItem key={`${token.ticker}-${index}`} token={token} />
        ))}
      </div>
      {/* Subtle gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-900/90 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-900/90 to-transparent pointer-events-none"></div>
    </div>
  );
};
