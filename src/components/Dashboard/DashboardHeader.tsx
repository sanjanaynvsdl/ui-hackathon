import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className="border-b border-white/5 bg-black/30 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left: Breadcrumb/Title */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-white">Dashboard</h1>
        </div>
        
        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <button className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <Bell className="h-5 w-5 text-white/70" />
          </button>
          
          {/* User Profile */}
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-dashboard-purple flex items-center justify-center">
              <span className="text-white text-sm font-medium">D</span>
            </div>
            <div className="ml-2 hidden md:block">
              <div className="text-sm font-medium text-white">David</div>
              <div className="text-xs text-white/50">Administrator</div>
            </div>
            <ChevronDown className="ml-2 h-4 w-4 text-white/50" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
