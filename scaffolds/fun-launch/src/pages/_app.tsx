import '@/styles/globals.css';
import { Adapter, UnifiedWalletProvider } from '@jup-ag/wallet-adapter';
import type { AppProps } from 'next/app';
import { Toaster } from 'sonner';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useWindowWidthListener } from '@/lib/device';
import { useWallet } from '@jup-ag/wallet-adapter';

export default function App({ Component, pageProps }: AppProps) {
  const wallets: Adapter[] = useMemo(() => {
    return [new PhantomWalletAdapter(), new SolflareWalletAdapter()].filter(
      (item) => item && item.name && item.icon
    ) as Adapter[];
  }, []);

  const queryClient = useMemo(() => new QueryClient(), []);

  useWindowWidthListener();

  function UserCreator({ children }: { children: React.ReactNode }) {
    const { publicKey } = useWallet();

    useEffect(() => {
      if (publicKey) {
        fetch('/api/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ address: publicKey.toBase58() }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to create user');
            }
            return res.json();
          })
          .then((data) => {
            console.log('User created/updated:', data);
          })
          .catch((error) => {
            console.error('Error creating user:', error);
          });
      }
    }, [publicKey]);

    return <>{children}</>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <UnifiedWalletProvider
        wallets={wallets}
        config={{
          env: 'mainnet-beta',
          autoConnect: true,
          metadata: {
            name: 'GOR Launchpad',
            description: 'GOR Launchpad wallet connection',
            url: 'https://jup.ag',
            iconUrls: ['/favicon.png'],
          },
          // notificationCallback: WalletNotification,
          theme: 'dark',
          lang: 'en',
        }}
      >
        <UserCreator>
          <Toaster />
          <Component {...pageProps} />
        </UserCreator>
      </UnifiedWalletProvider>
    </QueryClientProvider>
  );
}
