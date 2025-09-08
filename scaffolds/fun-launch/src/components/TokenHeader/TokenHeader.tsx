import { useMinimalTokenInfo, useTokenInfo, useTokenAddress } from '@/hooks/queries';
import { useDBCToken } from '@/hooks/use-dbc-pool';
import { cn } from '@/lib/utils';
import { memo } from 'react';
import { getNumberColorCn, ReadableNumber } from '../ui/ReadableNumber';
import { formatReadablePercentChange } from '@/lib/format/number';
import { Copyable } from '../ui/Copyable';
import { TruncatedAddress } from '../TruncatedAddress/TruncatedAddress';
import CopyIconSVG from '@/icons/CopyIconSVG';
import { TrenchesTokenIcon, TrenchesTokenIconImage } from '../TokenIcon';

type TokenHeaderProps = {
  className?: string;
};

export const TokenHeader: React.FC<TokenHeaderProps> = memo(({ className }) => {
  const tokenId = useTokenAddress();
  const { data: pool, isLoading: poolLoading, error: poolError } = useTokenInfo();
  const { data: minimalTokenInfo, isLoading: minimalLoading, error: minimalError } = useMinimalTokenInfo();
  const { data: dbcToken, isLoading: dbcLoading } = useDBCToken(tokenId);

  // No major changes, but add a console log for debugging
  console.log('Token info:', minimalTokenInfo);

  const pctChange =
    pool?.baseAsset.stats24h?.priceChange === undefined
      ? undefined
      : pool.baseAsset.stats24h.priceChange / 100;

  // Show loading state
  if (poolLoading || minimalLoading || dbcLoading) {
    return (
      <div className={cn('flex items-center overflow-hidden w-full', className)}>
        <div className="relative mr-2 flex shrink-0 items-center rounded-lg bg-neutral-850">
          <div className="w-8 h-8 rounded-lg bg-neutral-700 animate-pulse" />
        </div>
        <div className="flex flex-1 justify-between gap-2.5 overflow-hidden">
          <div className="flex flex-col justify-center gap-0.5">
            <div className="h-5 bg-neutral-700 rounded animate-pulse w-20" />
            <div className="h-4 bg-neutral-700 rounded animate-pulse w-32" />
          </div>
          <div className="flex flex-col items-end justify-center gap-0.5">
            <div className="h-5 bg-neutral-700 rounded animate-pulse w-16" />
            <div className="h-4 bg-neutral-700 rounded animate-pulse w-12" />
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (poolError || minimalError) {
    return (
      <div className={cn('flex items-center overflow-hidden w-full', className)}>
        <div className="text-red-400 text-sm">
          Error loading token data: {poolError ? String(poolError) : minimalError ? String(minimalError) : 'Unknown error'}
        </div>
      </div>
    );
  }

  // Show empty state if no data
  if (!pool && !dbcToken && !minimalTokenInfo) {
    return (
      <div className={cn('flex items-center overflow-hidden w-full', className)}>
        <div className="text-neutral-500 text-sm">No token data available</div>
      </div>
    );
  }

  // Use DBC data if available, fallback to original data
  const tokenData = dbcToken || pool;
  const tokenSymbol = dbcToken?.metadata?.symbol || minimalTokenInfo?.symbol || pool?.baseAsset.symbol || 'Unknown Token';
  const tokenPrice = dbcToken?.price || pool?.baseAsset.usdPrice || 0;
  const tokenMarketCap = dbcToken?.marketCap || pool?.baseAsset.mcap || 0;
  const priceChange = dbcToken?.priceChange24h || pctChange || 0;

  return (
    <div className={cn('flex items-center overflow-hidden w-full', className)}>
      <div className="relative mr-2 flex shrink-0 items-center rounded-lg bg-neutral-850">
        <TrenchesTokenIcon className="rounded-lg" token={minimalTokenInfo}>
          <TrenchesTokenIconImage className="rounded-lg" />
        </TrenchesTokenIcon>
      </div>

      <div className="flex flex-1 justify-between gap-2.5 overflow-hidden">
        <div className="flex flex-col justify-center gap-0.5">
          <h1 className="cursor-pointer truncate font-medium leading-none tracking-tight">
            {tokenSymbol}
          </h1>

          {minimalTokenInfo && (
            <Copyable
              name="Address"
              copyText={minimalTokenInfo.address}
              className={cn(
                'flex min-w-0 items-center gap-0.5 text-sm text-neutral-500 duration-500 hover:text-neutral-200'
              )}
            >
              {(copied) => (
                <>
                  <TruncatedAddress
                    className={cn(
                      'min-w-0 overflow-hidden text-clip whitespace-nowrap leading-none tracking-tight',
                      {
                        'text-primary': copied,
                      }
                    )}
                    address={minimalTokenInfo.address}
                  />
                  {copied ? (
                    <span className="iconify shrink-0 text-primary ph--check-bold" />
                  ) : (
                    <CopyIconSVG className="shrink-0" width={11} height={11} />
                  )}
                </>
              )}
            </Copyable>
          )}
        </div>

        <div className={cn('flex flex-col items-end justify-center gap-0.5', className)}>
          <ReadableNumber
            className="leading-none tracking-tight font-semibold"
            format="price"
            num={tokenPrice}
            prefix="$"
            animated
            showDirection
          />
          <div className={cn('text-xs leading-none font-semibold', getNumberColorCn(priceChange))}>
            {formatReadablePercentChange(priceChange, { hideSign: 'positive' })}
          </div>
        </div>
      </div>
    </div>
  );
});

TokenHeader.displayName = 'TokenHeader';
