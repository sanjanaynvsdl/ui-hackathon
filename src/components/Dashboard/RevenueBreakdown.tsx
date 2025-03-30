import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend 
} from 'recharts';

const data = [
  { name: 'US', value: 35 },
  { name: 'Europe', value: 25 },
  { name: 'Asia', value: 20 },
  { name: 'Others', value: 20 },
];

const COLORS = ['#8B5CF6', '#0EA5E9', '#10B981', '#F59E0B'];

const RevenueBreakdown = () => {
  return (
    <div className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Revenue by Region</h2>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'rgba(30, 30, 41, 0.8)', 
                borderColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)',
                color: 'white' 
              }}
              itemStyle={{ color: 'rgba(255,255,255,0.8)' }}
              formatter={(value) => [`${value}%`, 'Revenue']}
              labelStyle={{ color: 'white', fontWeight: 'bold' }}
            />
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right" 
              payload={
                data.map((item, index) => ({
                  id: item.name,
                  type: 'square',
                  value: `${item.name} (${item.value}%)`,
                  color: COLORS[index % COLORS.length]
                }))
              }
              formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.8)' }}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueBreakdown;