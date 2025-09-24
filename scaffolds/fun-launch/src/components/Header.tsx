import { useWallet } from '@jup-ag/wallet-adapter';
import { useUnifiedWalletContext } from '@jup-ag/wallet-adapter';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Bars3Icon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}

export const Header = ({ sidebarCollapsed = false, onToggleSidebar }: HeaderProps) => {
  const { publicKey, disconnect } = useWallet();
  const { setShowModal } = useUnifiedWalletContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleConnectWallet = () => {
    setShowModal(true);
  };

  const handleDisconnectWallet = async () => {
    try {
      await disconnect();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const handleChangeWallet = () => {
    setShowModal(true);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black">
      <div className="px-2 py-2">
        <div className="grid grid-cols-3 items-center w-full">
          {/* Left Section - Toggle + Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleSidebar}
              className="text-gray-400 hover:text-white p-2 flex-shrink-0 rounded-full hover:bg-gray-800"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
            
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="https://gorbagana.wtf/images/gorb-logo.avif"
                  alt="GOR Logo"
                  className="w-8 h-8 rounded-lg object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Dumpster</span>
            </Link>
          </div>

          {/* Center Section - Search Bar */}
          <div className="flex justify-center">
            <div className="relative max-w-xl w-full">
              <input
                type="text"
                placeholder="Search tokens, pools..."
                className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-2 pl-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:bg-gray-900 transition-all duration-200"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-green-600 hover:bg-green-700 rounded-r-xl border-l-0 transition-all duration-200 shadow-inner">
                <MagnifyingGlassIcon className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Right Section - Actions + Wallet */}
          <div className="flex items-center justify-end space-x-4">
            <Link 
              href="/create-pool" 
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25"
            >
              <PlusIcon className="w-4 h-4" />
              <span>Create</span>
            </Link>
            {publicKey ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl transition-all duration-200 border border-gray-600"
                >
                  <span className="text-gray-300 text-sm">
                    {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-300 transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-1.5 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="py-1">
                      <Link 
                        href="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors block"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleChangeWallet}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        Change Wallet
                      </button>
                      <button
                        onClick={handleDisconnectWallet}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        Disconnect
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleConnectWallet}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25"
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
