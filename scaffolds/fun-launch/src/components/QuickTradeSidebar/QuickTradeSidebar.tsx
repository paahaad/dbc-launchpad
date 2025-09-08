import { useState, useEffect } from 'react';
import { useWallet } from '@jup-ag/wallet-adapter';
import { PublicKey } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useTokenInfo } from '@/hooks/queries';
import { ReadableNumber } from '@/components/ui/ReadableNumber';
import { useDBCToken, useSwapQuote } from '@/hooks/use-dbc-pool';
import { dbcSwapBuilder } from '@/utils/dbc-swap';
import { GOR_CONFIG } from '@/config/gor-config';
import { LaunchpadIndicator } from '@/components/LaunchpadIndicator/LaunchpadIndicator';
import { Connection } from '@solana/web3.js';
import { getAssociatedTokenAddress, getAccount, getMint } from '@solana/spl-token';
interface QuickTradeSidebarProps {
  tokenId: string;
}

export const QuickTradeSidebar = ({ tokenId }: QuickTradeSidebarProps) => {
  const { publicKey, signTransaction } = useWallet();
  const { data: tokenInfo } = useTokenInfo();
  const { data: dbcToken, isLoading: dbcLoading, error: dbcError } = useDBCToken(tokenId);
  
  const [gorAmount, setGorAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [isBuying, setIsBuying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userGorBalance, setUserGorBalance] = useState(0);
  const [userTokenBalance, setUserTokenBalance] = useState(0);

  // Get swap quote when amounts change (only on client to prevent hydration issues)
  const inputAmount = isBuying ? parseFloat(gorAmount) || 0 : parseFloat(tokenAmount) || 0;
  const { data: swapQuote } = useSwapQuote(
    tokenId,
    inputAmount,
    isBuying ? 'buy' : 'sell'
  );

  // Update calculated amounts based on swap quote
  useEffect(() => {
    if (swapQuote) {
      if (isBuying && gorAmount) {
        setTokenAmount(swapQuote.outputAmount.toFixed(6));
      } else if (!isBuying && tokenAmount) {
        setGorAmount(swapQuote.outputAmount.toFixed(6));
      }
    }
  }, [swapQuote, isBuying, gorAmount, tokenAmount]);

  useEffect(() => {
    const fetchBalances = async () => {
      if (!publicKey || !tokenId) {
        setUserGorBalance(0);
        setUserTokenBalance(0);
        return;
      }

      const connection = new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
      const quoteMint = new PublicKey(GOR_CONFIG.QUOTE_TOKEN.mint);
      const tokenMint = new PublicKey(tokenId);
      const quoteDecimals = GOR_CONFIG.QUOTE_TOKEN.decimals;

      // Fetch quote balance
      try {
        const quoteAta = await getAssociatedTokenAddress(quoteMint, publicKey);
        const quoteAccount = await getAccount(connection, quoteAta);
        setUserGorBalance(Number(quoteAccount.amount) / Math.pow(10, quoteDecimals));
      } catch (e) {
        setUserGorBalance(0);
      }

      // Fetch token balance
      try {
        const mintInfo = await getMint(connection, tokenMint);
        const tokenDecimals = mintInfo.decimals;
        const tokenAta = await getAssociatedTokenAddress(tokenMint, publicKey);
        const tokenAccount = await getAccount(connection, tokenAta);
        setUserTokenBalance(Number(tokenAccount.amount) / Math.pow(10, tokenDecimals));
      } catch (e) {
        setUserTokenBalance(0);
      }
    };

    fetchBalances();
  }, [publicKey, tokenId]);

  const handleQuickTrade = async () => {
    if (!publicKey || !signTransaction) {
      toast.error('Please connect your wallet');
      return;
    }

    const inputValue = isBuying ? gorAmount : tokenAmount;

    if (!inputValue || parseFloat(inputValue) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (!dbcToken) {
      toast.error('Token data not available');
      return;
    }

    setIsLoading(true);

    try {
      const tokenMint = new PublicKey(tokenId);
      const quoteMint = new PublicKey(GOR_CONFIG.QUOTE_TOKEN.mint);
      
      const inputAmount = parseFloat(inputValue);
      const minimumOutputAmount = swapQuote?.minimumReceived || 0;

      // Build swap transaction
      const transaction = await dbcSwapBuilder.buildSwapTransaction({
        userWallet: publicKey,
        tokenMint,
        quoteMint,
        inputAmount,
        minimumOutputAmount,
        tradeDirection: isBuying ? 'buy' : 'sell',
        slippage: 1, // 1% slippage
      });

      // Execute swap
      const signature = await dbcSwapBuilder.executeSwap(transaction, signTransaction);

      toast.success(
        `${isBuying ? 'Buy' : 'Sell'} order executed successfully!`,
        {
          description: `Transaction: ${signature.slice(0, 8)}...`,
          duration: 5000,
        }
      );

      // Reset form
      setGorAmount('');
      setTokenAmount('');
    } catch (error) {
      console.error('Trade error:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to execute trade'
      );
    } finally {
      setIsLoading(false);
    }
  };


  // Show error state if DBC loading failed
  if (dbcError && !tokenInfo) {
    return (
      <div className="p-6">
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-center">
          <div className="text-red-400 mb-2">
            <span className="iconify ph--warning-bold w-6 h-6 mx-auto" />
          </div>
          <p className="text-red-200 text-sm">
            Unable to load token data. Please try again later.
          </p>
        </div>
      </div>
    );
  }

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
      {(dbcToken || tokenInfo) && (
        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Current Price</span>
            <span className="font-semibold">
              {dbcToken ? (
                <ReadableNumber num={dbcToken.price} format="price" prefix="$" />
              ) : (
                <ReadableNumber num={tokenInfo?.baseAsset.usdPrice || 0} format="price" prefix="$" />
              )}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Market Cap</span>
            <span className="font-semibold">
              {dbcToken ? (
                <ReadableNumber num={dbcToken.marketCap} format="price" prefix="$" />
              ) : (
                <ReadableNumber num={tokenInfo?.baseAsset.mcap || 0} format="price" prefix="$" />
              )}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Liquidity</span>
            <span className="font-semibold">
              {dbcToken ? (
                <ReadableNumber 
                  num={dbcToken.reserves.quote * (dbcToken.price || 1)} 
                  format="price" 
                  prefix="$" 
                />
              ) : (
                'N/A'
              )}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">24h Change</span>
            <span className={`font-semibold ${
              (dbcToken?.priceChange24h || tokenInfo?.baseAsset.stats24h?.priceChange || 0) >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {(dbcToken?.priceChange24h || tokenInfo?.baseAsset.stats24h?.priceChange || 0) >= 0 ? '+' : ''}
              {((dbcToken?.priceChange24h || tokenInfo?.baseAsset.stats24h?.priceChange || 0) * 100).toFixed(2)}%
            </span>
          </div>
        </div>
      )}

      {/* GOR Amount Input */}
      {isBuying && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <Label htmlFor="sol-amount" className="text-sm text-gray-300">
              GOR Amount
            </Label>
            {publicKey && isBuying && (
              <span className="text-sm text-gray-300">
                Balance: {userGorBalance.toFixed(4)} GOR
              </span>
            )}
          </div>
          <div className="relative">
            <Input
              id="sol-amount"
              type="number"
              step="0.001"
              placeholder="0.0"
              value={gorAmount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGorAmount(e.target.value)}
              className="w-full pr-12 bg-transparent border-neutral-700"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
              GOR
            </span>
          </div>
          
          {isBuying && (
            <div className="flex flex-wrap gap-2 mt-2">
              {[0.1, 0.2, 0.5, 1].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setGorAmount(amount.toString())}
                  className="px-3 py-1 bg-white/10 rounded-md text-sm hover:bg-white/20 transition"
                >
                  {amount} GOR
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Token Amount Input */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <Label htmlFor="token-amount" className="text-sm text-gray-300">
            Token Amount
          </Label>
          {publicKey && !isBuying && (
            <span className="text-sm text-gray-300">
              Balance: {userTokenBalance.toFixed(2)} {dbcToken?.metadata?.symbol || tokenInfo?.baseAsset.symbol || 'TOKEN'}
            </span>
          )}
        </div>
        <div className="relative">
          <Input
            id="token-amount"
            type="number"
            step="0.000001"
            placeholder="0.0"
            value={tokenAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTokenAmount(e.target.value)}
            className="w-full pr-12 bg-transparent border-neutral-700"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
            {dbcToken?.metadata?.symbol || tokenInfo?.baseAsset.symbol || 'TOKEN'}
          </span>
        </div>

        {!isBuying && (
          <div className="flex flex-wrap gap-2 mt-2">
            {['25%', '50%', '75%', 'Max'].map((label) => (
              <button
                key={label}
                onClick={() => {
                  const percent = label === 'Max' ? 100 : parseFloat(label);
                  const amount = (percent / 100) * userTokenBalance;
                  setTokenAmount(amount > 0 ? amount.toFixed(6) : '0');
                }}
                className="px-3 py-1 bg-white/10 rounded-md text-sm hover:bg-white/20 transition"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Trade Button */}
      <Button
        onClick={handleQuickTrade}
        disabled={isLoading || !(parseFloat(isBuying ? gorAmount : tokenAmount) > 0)}
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

      {/* Swap Quote Info */}
      {swapQuote && gorAmount && tokenAmount && (
        <div className="mt-4 p-3 bg-white/5 rounded-lg">
          <div className="text-sm text-gray-300 mb-2">Trade Summary</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>{isBuying ? 'You pay:' : 'You sell:'}</span>
              <span className="font-semibold">
                {isBuying ? `${gorAmount} GOR` : `${tokenAmount} ${dbcToken?.metadata?.symbol || 'TOKEN'}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>{isBuying ? 'You receive:' : 'You receive:'}</span>
              <span className="font-semibold">
                {isBuying ? `${tokenAmount} ${dbcToken?.metadata?.symbol || 'TOKEN'}` : `${gorAmount} GOR`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Price Impact:</span>
              <span className={`font-semibold ${
                swapQuote.priceImpact > 5 ? 'text-red-400' : swapQuote.priceImpact > 2 ? 'text-yellow-400' : 'text-green-400'
              }`}>
                {swapQuote.priceImpact.toFixed(2)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>Minimum received:</span>
              <span className="font-semibold text-xs">
                {swapQuote.minimumReceived.toFixed(6)} {isBuying ? (dbcToken?.metadata?.symbol || 'TOKEN') : 'GOR'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Route:</span>
              <span className="font-semibold text-xs">{swapQuote.route}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
