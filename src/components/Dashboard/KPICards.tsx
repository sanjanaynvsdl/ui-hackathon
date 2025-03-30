import React from 'react';
import { ArrowUp, ArrowDown, Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

const KPICard = ({ 
  title, 
  value, 
  change, 
  icon: Icon,
  positive = true 
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col transition-all hover:bg-white/10">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-white/60 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-dashboard-purple/10">
          <Icon className="h-5 w-5 text-dashboard-purple" />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        {positive ? (
          <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
        ) : (
          <ArrowDown className="h-3 w-3 text-red-400 mr-1" />
        )}
        <span className={`mr-1 ${positive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </span>
        <span className="text-white/50">vs last month</span>
      </div>
    </div>
  );
};

const KPICards = () => {
  const kpis = [
    { 
      title: "Total Revenue", 
      value: "$84,254.35", 
      change: "12.5%", 
      icon: DollarSign, 
      positive: true 
    },
    { 
      title: "Active Users", 
      value: "32,891", 
      change: "8.2%", 
      icon: Users, 
      positive: true 
    },
    { 
      title: "New Orders", 
      value: "1,245", 
      change: "3.4%", 
      icon: ShoppingCart, 
      positive: true 
    },
    { 
      title: "Conversion Rate", 
      value: "12.8%", 
      change: "1.1%", 
      icon: TrendingUp, 
      positive: false 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
};

export default KPICards;