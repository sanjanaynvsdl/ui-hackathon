import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  FileText, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  LogOut
} from 'lucide-react';

const DashboardSidebar = () => {
  return (
    <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-dashboard-purple flex items-center justify-center">
              <span className="text-white font-bold">IF</span>
            </div>
            <span className="text-white font-semibold text-xl">InsightFusion</span>
          </Link>
        </div>
        
        {/* Search Box */}
        <div className="px-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-4 pr-10 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-dashboard-purple"
            />
            <div className="absolute right-3 top-2.5 text-white/50">
              <span className="text-xs">/</span>
            </div>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 px-2">
          <div className="space-y-1">
            {[
              { name: 'Dashboard', icon: LayoutDashboard, current: true, to: '/dashboard' },
              { name: 'Analytics', icon: BarChart2, current: false, to: '/dashboard' },
              { name: 'Customers', icon: Users, current: false, to: '/dashboard' },
              { name: 'Documents', icon: FileText, current: false, to: '/dashboard' },
              { name: 'Chat', icon: MessageSquare, current: false, to: '/dashboard' },
              { name: 'Payments', icon: CreditCard, current: false, to: '/dashboard' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all
                  ${item.current 
                    ? 'bg-dashboard-purple/10 text-dashboard-purple border-l-2 border-dashboard-purple' 
                    : 'text-white/70 hover:bg-white/5 hover:text-white'}
                `}
              >
                <item.icon className={`mr-3 h-5 w-5 ${item.current ? 'text-dashboard-purple' : ''}`} />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        
        {/* Bottom Section */}
        <div className="p-4 border-t border-white/5 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-white/70 hover:bg-white/5 hover:text-white"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-white/70 hover:bg-white/5 hover:text-white"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;