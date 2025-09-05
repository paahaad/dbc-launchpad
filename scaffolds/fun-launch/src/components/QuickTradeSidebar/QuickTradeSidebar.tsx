import { useState, useEffect } from 'react';
import { useWallet } from '@jup-ag/wallet-adapter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useTokenInfo } from '@/hooks/queries';
import { ReadableNumber } from '@/components/ui/ReadableNumber';

interface QuickTradeSidebarProps {
  tokenId: string;
}

export const QuickTradeSidebar = (_: QuickTradeSidebarProps) => {
  const { publicKey, signTransaction } = useWallet();
  const { data: tokenInfo } = useTokenInfo();
  
  const [gorAmount, setGorAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [isBuying, setIsBuying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate token amount based on GOR amount and current price
  useEffect(() => {
    if (gorAmount && tokenInfo?.baseAsset.usdPrice) {
      const calculatedTokenAmount = parseFloat(gorAmount) / tokenInfo.baseAsset.usdPrice;
      setTokenAmount(calculatedTokenAmount.toFixed(6));
    } else {
      setTokenAmount('');
    }
  }, [gorAmount, tokenInfo?.baseAsset.usdPrice]);

  // Calculate GOR amount based on token amount and current price
  useEffect(() => {
    if (tokenAmount && tokenInfo?.baseAsset.usdPrice) {
      const calculatedGorAmount = parseFloat(tokenAmount) * tokenInfo.baseAsset.usdPrice;
      setGorAmount(calculatedGorAmount.toFixed(6));
    } else {
      setGorAmount('');
    }
  }, [tokenAmount, tokenInfo?.baseAsset.usdPrice]);

  const handleQuickTrade = async () => {
    if (!publicKey || !signTransaction) {
      toast.error('Please connect your wallet');
      return;
    }

    if (!gorAmount || parseFloat(gorAmount) <= 0) {
      toast.error('Please enter a valid GOR amount');
      return;
    }

    setIsLoading(true);

    try {
      // This would integrate with Jupiter API for actual trading
      // For now, we'll show a placeholder message
      toast.success(
        `${isBuying ? 'Buy' : 'Sell'} order placed: ${tokenAmount} tokens for ${gorAmount} GOR`
      );

      // Reset form
      setGorAmount('');
      setTokenAmount('');
    } catch (error) {
      console.error('Trade error:', error);
      toast.error('Failed to place trade order');
    } finally {
      setIsLoading(false);
    }
  };

  const presetAmounts = [0.1, 0.5, 1, 2, 5];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Quick Trade</h3>
        <div className="flex bg-white/10 rounded-lg p-1">
          <button
            onClick={() => setIsBuying(true)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              isBuying
                ? 'bg-green-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setIsBuying(false)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              !isBuying
                ? 'bg-red-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Sell
          </button>
        </div>
      </div>

      {/* Token Info */}
      {tokenInfo && (
        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Current Price</span>
            <span className="font-semibold">
              <ReadableNumber num={tokenInfo.baseAsset.usdPrice} format="price" prefix="$" />
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Market Cap</span>
            <span className="font-semibold">
              <ReadableNumber num={tokenInfo.baseAsset.mcap} format="price" prefix="$" />
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">24h Change</span>
            <span className={`font-semibold ${
              (tokenInfo.baseAsset.stats24h?.priceChange || 0) >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {(tokenInfo.baseAsset.stats24h?.priceChange || 0) >= 0 ? '+' : ''}
              {((tokenInfo.baseAsset.stats24h?.priceChange || 0) * 100).toFixed(2)}%
            </span>
          </div>
        </div>
      )}

      {/* SOL Amount Input */}
      <div className="mb-4">
        <Label htmlFor="sol-amount" className="text-sm text-gray-300 mb-2 block">
          GOR Amount
        </Label>
        <div className="relative">
          <Input
            id="sol-amount"
            type="number"
            step="0.001"
            placeholder="0.0"
            value={gorAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGorAmount(e.target.value)}
            className="w-full pr-12"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
            GOR
          </span>
        </div>
        
        {/* Preset amounts */}
        <div className="flex flex-wrap gap-2 mt-2">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setGorAmount(amount.toString())}
              className="px-3 py-1 bg-white/10 rounded-md text-sm hover:bg-white/20 transition"
            >
              {amount} GOR
            </button>
          ))}
        </div>
      </div>

      {/* Token Amount Input */}
      <div className="mb-6">
        <Label htmlFor="token-amount" className="text-sm text-gray-300 mb-2 block">
          Token Amount
        </Label>
        <div className="relative">
          <Input
            id="token-amount"
            type="number"
            step="0.000001"
            placeholder="0.0"
            value={tokenAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTokenAmount(e.target.value)}
            className="w-full pr-12"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
            {tokenInfo?.baseAsset.symbol || 'TOKEN'}
          </span>
        </div>
      </div>

      {/* Trade Button */}
      <Button
        onClick={handleQuickTrade}
        disabled={isLoading || !gorAmount || !tokenAmount}
        className={`w-full ${
          isBuying
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-red-500 hover:bg-red-600'
        }`}
      >
        {isLoading ? (
          <>
            <span className="iconify ph--spinner w-4 h-4 animate-spin mr-2" />
            Processing...
          </>
        ) : (
          <>
            <span className="iconify ph--arrow-right w-4 h-4 mr-2" />
            {isBuying ? 'Buy' : 'Sell'} Tokens
          </>
        )}
      </Button>

      {/* Trade Summary */}
      {gorAmount && tokenAmount && (
        <div className="mt-4 p-3 bg-white/5 rounded-lg">
          <div className="text-sm text-gray-300 mb-1">Trade Summary</div>
          <div className="text-sm">
            {isBuying ? 'Buying' : 'Selling'} <span className="font-semibold">{tokenAmount}</span> tokens
            <br />
            for <span className="font-semibold">{gorAmount} GOR</span>
          </div>
        </div>
      )}
    </div>
  );
};
