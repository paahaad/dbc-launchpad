import { TokenPageMsgHandler } from '@/components/Token/TokenPageMsgHandler';
import { TokenChart } from '@/components/TokenChart/TokenChart';
import { TokenDetails } from '@/components/TokenHeader/TokenDetail';
import { TokenHeader } from '@/components/TokenHeader/TokenHeader';
import { TokenStats } from '@/components/TokenHeader/TokenStats';
import { TokenBottomPanel } from '@/components/TokenTable';
import Page from '@/components/ui/Page/Page';
import { DataStreamProvider, useDataStream } from '@/contexts/DataStreamProvider';
import { TokenChartProvider } from '@/contexts/TokenChartProvider';
import { useTokenAddress, useTokenInfo } from '@/hooks/queries';
import { useEffect } from 'react';
import { QuickTradeSidebar } from '@/components/QuickTradeSidebar/QuickTradeSidebar';


export const MarketPageWithContext = () => {
  const tokenId = useTokenAddress();
  const { data: poolId } = useTokenInfo((data) => data?.id);
  const { subscribeTxns, unsubscribeTxns, subscribePools, unsubscribePools } = useDataStream();

  // Subscribe to token txns
  useEffect(() => {
    if (!tokenId) {
      return;
    }
    subscribeTxns([tokenId]);
    return () => {
      unsubscribeTxns([tokenId]);
    };
  }, [tokenId, subscribeTxns, unsubscribeTxns]);

  useEffect(() => {
    if (!poolId) {
      return;
    }

    subscribePools([poolId]);
    return () => {
      unsubscribePools([poolId]);
    };
    // dont track tokenId to prevent data mismatch
  }, [poolId, subscribePools, unsubscribePools]);

  return (
    <Page>
      <TokenPageMsgHandler />

      <div className="max-h-screen">
        <div className="flex mb-4 rounded-lg border border-neutral-700 p-3">
          <TokenHeader className="max-sm:order-1" />
        </div>

        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
          {/* Main Chart Area */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
              <TokenStats key={`token-stats-${poolId}`} />
            </div>

            <div className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 flex-1 min-h-[400px]">
              <div className="h-[400px] lg:h-[500px] w-full">
                <TokenChartProvider>
                  <TokenChart />
                </TokenChartProvider>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <TokenBottomPanel className="flex h-0 min-h-full flex-col overflow-hidden" />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-96 flex flex-col gap-4">
            {/* Quick Trade Sidebar */}
            <div className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <QuickTradeSidebar tokenId={tokenId} />
            </div>

            {/* Token Details */}
            <div className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <TokenDetails />
            </div>

          </div>
        </div>
      </div>
    </Page>
  );
};

export default function MarketPage() {
  return (
    <DataStreamProvider>
      <MarketPageWithContext />
    </DataStreamProvider>
  );
}
