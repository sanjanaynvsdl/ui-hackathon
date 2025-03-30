import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Calendar } from 'lucide-react';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
  { name: 'Aug', sales: 4000, revenue: 2400 },
  { name: 'Sep', sales: 5000, revenue: 6398 },
  { name: 'Oct', sales: 6000, revenue: 9800 },
  { name: 'Nov', sales: 7000, revenue: 3908 },
  { name: 'Dec', sales: 9000, revenue: 4800 },
];

const SalesChart = () => {
  const [range, setRange] = useState('year');
  
  const ranges = [
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'quarter', label: 'Quarter' },
    { value: 'year', label: 'Year' },
  ];

  return (
    <div className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Revenue Overview</h2>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center text-white/50 text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Last 12 months</span>
          </div>
          
          <div className="flex p-1 rounded-lg bg-white/5 border border-white/10">
            {ranges.map((r) => (
              <button
                key={r.value}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  range === r.value 
                    ? 'bg-dashboard-purple text-white' 
                    : 'text-white/50 hover:text-white'
                }`}
                onClick={() => setRange(r.value)}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'rgba(30, 30, 41, 0.8)', 
                borderColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)',
                color: 'white' 
              }}
              itemStyle={{ color: 'rgba(255,255,255,0.8)' }}
              labelStyle={{ color: 'white', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#8B5CF6" 
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
            <Area 
              type="monotone" 
              dataKey="sales" 
              stroke="#0EA5E9" 
              fillOpacity={1} 
              fill="url(#colorSales)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;