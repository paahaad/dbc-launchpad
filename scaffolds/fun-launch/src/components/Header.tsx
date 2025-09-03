import { useWallet } from '@jup-ag/wallet-adapter';
import { useUnifiedWalletContext } from '@jup-ag/wallet-adapter';
import Link from 'next/link';

export const Header = () => {
  const { publicKey } = useWallet();
  const { setShowModal } = useUnifiedWalletContext();

  const handleConnectWallet = () => {
    setShowModal(true);
  };

  return (
    <header className="bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DBC</span>
            </div>
            <span className="text-xl font-bold text-white">DBC Launchpad</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Explore Tokens
            </Link>
            <Link href="/create-pool" className="text-gray-300 hover:text-white transition">
              Launch Token
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About DBC
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {publicKey ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-300 text-sm">
                  {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
                </span>
                <Link
                  href="/create-pool"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
                >
                  Launch Token
                </Link>
              </div>
            ) : (
              <button
                onClick={handleConnectWallet}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
