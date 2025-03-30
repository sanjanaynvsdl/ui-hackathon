import React, { useEffect } from 'react';
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import KPICards from '@/components/Dashboard/KPICards';
import SalesChart from '@/components/Dashboard/SalesChart';
import RevenueBreakdown from '@/components/Dashboard/RevenueBreakdown';
import TopProducts from '@/components/Dashboard/TopProducts';

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | InsightFusion";
  }, []);

  return (
    <div className="flex h-screen bg-black bg-noise-texture overflow-hidden">
      {/* Purple glow effect in background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-dashboard-purple/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-dashboard-purple/10 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-6 pb-12">
          <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
            {/* KPI Cards */}
            <KPICards />
            
            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div>
                <RevenueBreakdown />
              </div>
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TopProducts />
              </div>
              <div>
                {/* Additional widget can go here */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
