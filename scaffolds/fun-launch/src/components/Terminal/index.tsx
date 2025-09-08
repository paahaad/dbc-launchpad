import { useWallet } from '@jup-ag/wallet-adapter';
import { useEffect, useState, useCallback } from 'react';
import { Skeleton } from '../ui/Skeleton';
import { ClientOnly, useIsClient } from '@/utils/client-only';

function TerminalComponentInner({ mint }: { mint: string }) {
  const walletContext = useWallet();
  const isClient = useIsClient();
  const [isLoaded, setIsLoaded] = useState(false);

  const launchTerminal = useCallback(async () => {
    if (isClient && window.Jupiter?.init) {
      window.Jupiter.init({
        displayMode: 'integrated',
        integratedTargetId: 'jupiter-terminal',
        formProps: {
          initialInputMint: 'So11111111111111111111111111111111111111112',
          initialOutputMint: mint,
        },
      });
    }
  }, [mint, isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    let intervalId: NodeJS.Timeout | undefined = undefined;
    if (!isLoaded || !window.Jupiter?.init) {
      intervalId = setInterval(() => {
        setIsLoaded(Boolean(window.Jupiter?.init));
      }, 500);
    }

    if (intervalId) {
      return () => clearInterval(intervalId);
    }
    return;
  }, [isLoaded, isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    setTimeout(() => {
      if (isLoaded && Boolean(window.Jupiter?.init)) {
        launchTerminal();
      }
    }, 200);
  }, [isLoaded, launchTerminal, isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    setTimeout(() => {
      if (window.Jupiter?.init) {
        window.Jupiter.init({
          displayMode: 'integrated',
          integratedTargetId: 'jupiter-terminal',
          formProps: {
            initialInputMint: 'So11111111111111111111111111111111111111112',
            initialOutputMint: mint,
          },
        });
      }
    }, 1000);
  }, [mint, isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    if (window.Jupiter) {
      window.Jupiter.syncProps({
        passthroughWalletContextState: walletContext,
      });
    }
  }, [walletContext, isClient]);

  return (
    <div className="flex flex-col h-full w-full">
      {!isLoaded ? (
        <div className="w-full h-[395px] ">
          <div className="flex flex-col items-center justify-start w-full h-full gap-y-2">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <span className="text-gray-400 mt-4">Loading Jupiter Terminal...</span>
          </div>
        </div>
      ) : (
        <div id="jupiter-terminal" className="w-full h-[568px]" />
      )}
    </div>
  );
}

export function TerminalComponent({ mint }: { mint: string }) {
  return (
    <ClientOnly 
      fallback={
        <div className="flex flex-col h-full w-full">
          <div className="w-full h-[395px]">
            <div className="flex flex-col items-center justify-start w-full h-full gap-y-2">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <span className="text-gray-400 mt-4">Loading Jupiter Terminal...</span>
            </div>
          </div>
        </div>
      }
    >
      <TerminalComponentInner mint={mint} />
    </ClientOnly>
  );
}

export default TerminalComponent;
