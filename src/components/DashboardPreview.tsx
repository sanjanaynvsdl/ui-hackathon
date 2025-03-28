
import React from 'react';

const DashboardPreview = () => {
  return (
    <div className="dashboard-card w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex flex-col">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-dashboard-purple flex items-center justify-center mr-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21H3V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 8L13 16L9 12L3 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="font-semibold text-xl">Dashboards</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-dashboard-text-muted text-sm hidden md:block">Sam Davies</div>
            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-xs text-white">SD</span>
            </div>
            <button className="bg-dashboard-purple text-white text-sm rounded-lg px-4 py-1.5">
              Use Promo
            </button>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {/* Top Stats Section */}
          <div className="dashboard-card p-5 col-span-1">
            <div className="dashboard-label">Last 7 Days</div>
            <div className="dashboard-stat text-white mt-2">307.8</div>
            <div className="h-16 mt-2 relative">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <path 
                    d="M0,25 L20,22 L40,28 L60,20 L80,27 L100,15 L120,25 L140,18 L160,22 L180,13 L200,22" 
                    fill="none" 
                    stroke="#8B5CF6" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card p-5 col-span-1">
            <div className="dashboard-label">Avg. Sales</div>
            <div className="dashboard-stat text-white mt-2">56.5</div>
            <div className="relative mt-2 flex justify-center items-center h-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-8 border-gray-700 relative">
                  <div className="absolute inset-0 rounded-full border-8 border-dashboard-purple border-l-transparent border-r-transparent transform rotate-45"></div>
                </div>
                <div className="absolute text-lg font-bold">
                  198
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card p-5 col-span-1">
            <div className="dashboard-label">Succ. Rate</div>
            <div className="dashboard-stat text-white mt-2">29%</div>
            <div className="relative mt-2 flex justify-center items-center h-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-8 border-gray-700 relative">
                  <div className="absolute inset-0 rounded-full border-8 border-dashboard-purple border-t-transparent border-b-transparent transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Charts Section */}
          <div className="dashboard-card p-5 col-span-1 md:col-span-2">
            <div className="flex justify-between">
              <div className="dashboard-label">Performance</div>
              <div className="bg-dashboard-purple/20 text-dashboard-purple px-2 py-0.5 rounded text-xs">
                All Clients
              </div>
            </div>
            <div className="dashboard-stat text-white mt-2">16</div>
            <div className="h-32 mt-4 flex items-end space-x-2">
              {[40, 30, 60, 50, 70, 45, 65, 85].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="chart-bar"
                    style={{ 
                      height: `${height}%`,
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                  <div className="text-xs text-dashboard-text-muted mt-1">{String.fromCharCode(65 + index)}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="dashboard-card p-5 col-span-1">
            <div className="flex justify-between">
              <div className="dashboard-label">Revenue</div>
              <div className="bg-dashboard-purple/20 text-dashboard-purple px-2 py-0.5 rounded text-xs">
                Final Check
              </div>
            </div>
            <div className="h-32 mt-4 flex items-end space-x-1">
              {[20, 40, 30, 50, 25, 60, 45, 55].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="chart-bar"
                    style={{ 
                      height: `${height}%`,
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
