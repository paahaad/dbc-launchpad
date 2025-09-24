import React from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  HomeIcon, 
  ChartBarIcon, 
  UserIcon, 
  QuestionMarkCircleIcon,
  PlusIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  href: string;
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  { id: 'home', label: 'Home', icon: HomeIcon, href: '/' },
  { id: 'watchlist', label: 'Watchlist', icon: HeartIcon, href: '/watchlist' },

  // { id: 'live', label: 'Live', icon: CameraIcon, href: '/live' },
  // { id: 'subscribe', label: 'Subscriptions', icon: PlusIcon, href: '/subscriptions' },
  { id: 'advanced', label: 'Advanced', icon: ChartBarIcon, href: '/advance', /*badge: 'NEW' */ },
  // { id: 'chat', label: 'Chat', icon: ChatBubbleLeftIcon, href: '/chat' },
  { id: 'profile', label: 'Profile', icon: UserIcon, href: '/profile' },
  { id: 'help', label: 'Help', icon: QuestionMarkCircleIcon, href: '/support' },
];

interface TradingSidebarProps {
  collapsed: boolean;
}

export const TradingSidebar: React.FC<TradingSidebarProps> = ({ collapsed }) => {
  const router = useRouter();

  return (
    <div className={cn(
      "bg-black flex flex-col transition-all duration-300 h-full",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Navigation Items */}
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <li key={item.id}>
                <Link href={item.href}>
                  <button
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative",
                      isActive
                        ? "bg-green-600 text-white"
                        : "text-gray-300 hover:bg-gray-900 hover:text-white"
                    )}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>
                        {item.badge && (
                          <span className="bg-green-500 text-xs px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Create Button */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg p-3 flex items-center justify-center space-x-2 transition-colors">
          <PlusIcon className="w-5 h-5" />
          {!collapsed && <span className="font-medium">Create</span>}
        </button>
      </div>

      {/* Bottom Section */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <span>empty</span>
          </div>
        </div>
      )}
    </div>
  );
};
