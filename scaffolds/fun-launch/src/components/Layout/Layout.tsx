import React, { useState } from 'react';
import { TradingSidebar } from '@/components/TradingSidebar';
import { Header } from '@/components/Header';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Pages that should not show the sidebar (if any)
  const noSidebarPages: string[] = [
    // Add routes here if you want to exclude sidebar from specific pages
    // Example: '/login', '/signup'
  ];

  const shouldShowSidebar = !noSidebarPages.includes(router.pathname);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  if (!shouldShowSidebar) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header sidebarCollapsed={false} onToggleSidebar={() => {}} />
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header - Always at top */}
      <Header sidebarCollapsed={sidebarCollapsed} onToggleSidebar={handleToggleSidebar} />
      
      {/* Main Layout - Sidebar + Content below header */}
      <div className="flex">
        {/* Sidebar - Starts below header */}
        <TradingSidebar collapsed={sidebarCollapsed} />
        
        {/* Main Content Area */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};
