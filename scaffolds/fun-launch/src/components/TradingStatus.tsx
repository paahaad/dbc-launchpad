import React from 'react';
import { Pool } from '@/components/Explore/types';

interface TradingStatusProps {
  pool: Pool;
  className?: string;
}

export const TradingStatus: React.FC<TradingStatusProps> = ({ pool, className = '' }) => {
  const { baseAsset } = pool;
  
  if (baseAsset.canTrade) {
    return (
      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ${className}`}>
        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
        Live Trading
      </div>
    );
  }

  // Different messages based on status
  if (baseAsset.isAboutToGraduate) {
    return (
      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ${className}`}>
        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
        {baseAsset.migrationProgress === 1 ? 'Ready for Migration' : 'In Vesting'}
      </div>
    );
  }

  if (baseAsset.isGraduated) {
    return (
      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ${className}`}>
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
        Graduated
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ${className}`}>
      <div className="w-2 h-2 bg-gray-500 rounded-full mr-1"></div>
      Trading Disabled
    </div>
  );
};

interface TradingButtonProps {
  pool: Pool;
  onBuy?: () => void;
  onSell?: () => void;
  className?: string;
}

export const TradingButtons: React.FC<TradingButtonProps> = ({ 
  pool, 
  onBuy, 
  onSell, 
  className = '' 
}) => {
  const { baseAsset } = pool;
  
  if (!baseAsset.canTrade) {
    return (
      <div className={`flex gap-2 ${className}`}>
        <button 
          disabled 
          className="flex-1 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium"
          title={`Trading disabled - ${baseAsset.migrationProgress === 1 ? 'Pool completed' : baseAsset.migrationProgress === 2 ? 'In vesting' : 'Graduated'}`}
        >
          Buy (Disabled)
        </button>
        <button 
          disabled 
          className="flex-1 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium"
          title={`Trading disabled - ${baseAsset.migrationProgress === 1 ? 'Pool completed' : baseAsset.migrationProgress === 2 ? 'In vesting' : 'Graduated'}`}
        >
          Sell (Disabled)
        </button>
      </div>
    );
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      <button 
        onClick={onBuy}
        className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Buy
      </button>
      <button 
        onClick={onSell}
        className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Sell
      </button>
    </div>
  );
};

export default TradingStatus;
