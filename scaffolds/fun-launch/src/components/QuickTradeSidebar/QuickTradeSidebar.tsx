import { useState, useEffect } from 'react';
import { useWallet } from '@jup-ag/wallet-adapter';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useTokenInfo } from '@/hooks/queries';
import { GOR_CONFIG } from '@/config/gor-config';
import { Connection } from '@solana/web3.js';
import { getAssociatedTokenAddress, getAccount, getMint } from '@solana/spl-token';
import { DynamicBondingCurveClient, VirtualPool } from '@meteora-ag/dynamic-bonding-curve-sdk';
import BN from 'bn.js';
import { getAmountInLamports, derivePoolAccount } from '@/lib/utils';

interface QuickTradeSidebarProps {
  tokenId: string;
}

// Add PDA derivation functions
const DYNAMIC_BONDING_CURVE_PROGRAM_ID = new PublicKey(GOR_CONFIG.DBC_PROGRAM_ID);

export const QuickTradeSidebar = ({ tokenId }: QuickTradeSidebarProps) => {
  const { publicKey, signTransaction } = useWallet();
  const { data: tokenInfo, isLoading: tokenLoading, isError: tokenError } = useTokenInfo();
  
  const [gorAmount, setGorAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [isBuying, setIsBuying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userGorBalance, setUserGorBalance] = useState(0);
  const [userTokenBalance, setUserTokenBalance] = useState(0);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteError, setQuoteError] = useState(null);

  // Add effect to clear states on switch
  useEffect(() => {
    setGorAmount('');
    setTokenAmount('');
    setQuoteError(null);
  }, [isBuying]);

  // Get swap quote when amounts change (only on client to prevent hydration issues)
  const inputAmount = isBuying ? parseFloat(gorAmount) || 0 : parseFloat(tokenAmount) || 0;

  useEffect(() => {
    const fetchBalances = async () => {
      if (!publicKey || !tokenId) {
        setUserGorBalance(0);
        setUserTokenBalance(0);
        return;
      }

      const connection = new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
      const tokenMint = new PublicKey(tokenId);

      // Fetch quote balance
      try {
        const nativeBalance = await connection.getBalance(publicKey);
        setUserGorBalance(nativeBalance / LAMPORTS_PER_SOL); // Use standard constant
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
  // This useeffect only calculate the quote, not the trade
  useEffect(() => {
    if (!inputAmount || parseFloat(inputAmount.toString()) <= 0) return;
 
    const fetchQuote = async () => {
      setQuoteLoading(true);
      setQuoteError(null);
      try {
        const connection = new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
        const dbcInstance = new DynamicBondingCurveClient(connection, 'confirmed');
        const derivedPool = derivePoolAccount(GOR_CONFIG.POOL_CONFIG_KEY, tokenId, DYNAMIC_BONDING_CURVE_PROGRAM_ID);
        const poolStateLocal = await dbcInstance.state.getPool(derivedPool);
        if (!poolStateLocal) throw new Error('Pool not found');
 
        const configAddress = poolStateLocal.config;
        const poolConfig = await dbcInstance.state.getPoolConfig(configAddress);
        if (!poolConfig) throw new Error('Pool config not found');
 
        const inputDecimals = isBuying ? await getMint(connection, poolConfig.quoteMint).then(m => m.decimals) 
          : await getMint(connection, poolStateLocal.baseMint).then(m => m.decimals);
        const amountIn = getAmountInLamports(inputAmount, inputDecimals);
 
        let currentPoint;
        if (poolConfig.activationType === 0) {
          currentPoint = await connection.getSlot();
        } else {
          const currentSlot = await connection.getSlot();
          currentPoint = await connection.getBlockTime(currentSlot);
        }
        if (currentPoint === null) throw new Error('Failed to get current point');
 
        const quote = await dbcInstance.pool.swapQuote({
          virtualPool: poolStateLocal,
          config: poolConfig,
          swapBaseForQuote: !isBuying,
          amountIn,
          hasReferral: false,
          currentPoint: new BN(currentPoint),
        });
 
        const outputDecimals = isBuying ? await getMint(connection, poolStateLocal.baseMint).then(m => m.decimals) 
          : await getMint(connection, poolConfig.quoteMint).then(m => m.decimals);
        const outputAmount = Number(quote.minimumAmountOut) / Math.pow(10, outputDecimals);
        if (isBuying) {
          setTokenAmount(outputAmount.toFixed(6));
        } else {
          setGorAmount(outputAmount.toFixed(6));
        }
      } catch (err) {
        setQuoteError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setQuoteLoading(false);
      }
    };
 
    const debounceTimer = setTimeout(fetchQuote, 500); // Debounce by 500ms
    return () => clearTimeout(debounceTimer);
  }, [inputAmount, isBuying, tokenId]);

  const handleQuickTrade = async () => {
    if (!publicKey || !signTransaction) {
      toast.error('Wallet or pool data not available');
      return;
    }

    const inputValue = isBuying ? gorAmount : tokenAmount;

    if (!inputValue || parseFloat(inputValue) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    setIsLoading(true);

    try {
      const connection = new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
      const dbcInstance = new DynamicBondingCurveClient(connection, 'confirmed');

      // Derive pool if not provided (using env POOL_CONFIG_KEY)
      const derivedPool = derivePoolAccount(GOR_CONFIG.POOL_CONFIG_KEY, tokenId, DYNAMIC_BONDING_CURVE_PROGRAM_ID);

      // Fetch pool state (use derived if poolAddress is null)
      const effectivePool =  derivedPool;
      const poolStateLocal: VirtualPool = await dbcInstance.state.getPool(effectivePool);
      if (!poolStateLocal) {
        throw new Error('Pool not found');
      }

      const configAddress = poolStateLocal.config; // Adjust if no 'account'
      const poolConfig = await dbcInstance.state.getPoolConfig(configAddress);
      if (!poolConfig) {
        throw new Error('Pool config not found');
      }

      // Get decimals and amountIn
      const quoteMintDecimals = await getMint(connection, poolConfig.quoteMint).then(m => m.decimals);
      const baseMintDecimals = await getMint(connection, poolStateLocal.baseMint).then(m => m.decimals);
      const inputDecimals = isBuying ? quoteMintDecimals : baseMintDecimals;
      
      // Use standard utility function for amount conversion
      const amountIn = getAmountInLamports(inputValue, inputDecimals);

      // Get current point
      let currentPoint;
      if (poolConfig.activationType === 0) {
        currentPoint = await connection.getSlot();
      } else {
        const currentSlot = await connection.getSlot();
        currentPoint = await connection.getBlockTime(currentSlot);
      }
      if (currentPoint === null) {
        throw new Error('Failed to get current point');
      }

      // Get quote
      const quote = await dbcInstance.pool.swapQuote({
        virtualPool: poolStateLocal, // Adjust if no 'account'
        config: poolConfig,
        swapBaseForQuote: !isBuying, // true for sell (base to quote), false for buy
        amountIn,
        hasReferral: false, // Set to true if you have referral
        currentPoint: new BN(currentPoint),
      });

      // Build swap tx
      const swapTx = await dbcInstance.pool.swap({
        amountIn,
        minimumAmountOut: quote.minimumAmountOut,
        owner: publicKey,
        pool: effectivePool,
        swapBaseForQuote: !isBuying,
        referralTokenAccount: null, // Add if using referral
      });

      // Sign and send
      const latestBlockhash = await connection.getLatestBlockhash();
      swapTx.recentBlockhash = latestBlockhash.blockhash;
      swapTx.feePayer = publicKey;

      const signedTx = await signTransaction(swapTx);
      const txId = await connection.sendRawTransaction(signedTx.serialize());

      await connection.confirmTransaction({
        signature: txId,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
        blockhash: latestBlockhash.blockhash,
      });

      toast.success(`${isBuying ? 'Buy' : 'Sell'} order executed successfully!`, {
        description: `Transaction: ${txId.slice(0, 8)}...`,
        action: {
          label: 'View on Explorer',
          onClick: () => window.open(`https://trashscan.xyz/tx/${txId}`, '_blank')
        },
        duration: 5000,
      });

      // Reset form
      setGorAmount('');
      setTokenAmount('');
    } catch (error) {
      console.error('Trade error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to execute trade');
    } finally {
      setIsLoading(false);
    }
  };

  // Show error state if DBC loading failed
  if (tokenLoading) {
    return (
      <div className="p-6 space-y-4">
        <div className="h-8 bg-white/10 rounded animate-pulse" />
        <div className="h-32 bg-white/10 rounded animate-pulse" />
        <div className="h-10 bg-white/10 rounded animate-pulse" />
        <div className="h-10 bg-white/10 rounded animate-pulse" />
        <div className="h-12 bg-white/10 rounded animate-pulse" />
      </div>
    );
  }
  
  if (tokenError || !tokenInfo) {
  return (
    <div className="p-6">
      <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-center">
        <div className="text-red-400 mb-2">
          <span className="iconify ph--warning-bold w-6 h-6 mx-auto" />
        </div>
        <p className="text-red-200 text-sm">
          Failed to load token data. Please try again later.
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
      {/* {tokenInfo && (
        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Current Price</span>
            <span className="font-semibold">
              <ReadableNumber num={tokenInfo?.baseAsset.usdPrice || 0} format="price" prefix="$" />
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Market Cap</span>
            <span className="font-semibold">
              <ReadableNumber num={tokenInfo?.baseAsset.mcap || 0} format="price" prefix="$" />
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Liquidity</span>
            <span className="font-semibold">
              'N/A'
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
      )} */}

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
              Balance: {userTokenBalance.toFixed(2)} {tokenInfo?.baseAsset.symbol || 'TOKEN'}
            </span>
          )}
        </div>
        <div className="relative">
          {isBuying && quoteLoading ? (
            <div className="w-full h-10 bg-white/5 rounded animate-pulse" />
          ) : (
            <Input
              id="token-amount"
              type="number"
              step="0.000001"
              placeholder="0.0"
              value={tokenAmount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTokenAmount(e.target.value)}
              className="w-full pr-12 bg-transparent border-neutral-700"
            />
          )}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
            {tokenInfo?.baseAsset.symbol || 'TOKEN'}
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
        disabled={isLoading || quoteLoading || quoteError || !(parseFloat(isBuying ? gorAmount : tokenAmount) > 0)}
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

      {quoteError && <p className="text-red-500 text-sm">Quote error: {quoteError}</p>}
    </div>
  );
};
