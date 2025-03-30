import React from 'react';
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

const TopProducts = () => {
  const products = [
    { 
      name: "Premium Analytics Suite", 
      sales: 1234, 
      revenue: "$42,356.78", 
      change: "+12.3%", 
      positive: true 
    },
    { 
      name: "Data Visualization Pro", 
      sales: 945, 
      revenue: "$31,823.45", 
      change: "+8.7%", 
      positive: true 
    },
    { 
      name: "Enterprise Dashboard", 
      sales: 837, 
      revenue: "$28,956.12", 
      change: "+5.2%", 
      positive: true 
    },
    { 
      name: "Business Intelligence Basic", 
      sales: 648, 
      revenue: "$19,872.34", 
      change: "-3.1%", 
      positive: false 
    },
    { 
      name: "Custom Reports Package", 
      sales: 524, 
      revenue: "$15,438.90", 
      change: "+2.8%", 
      positive: true 
    },
  ];

  return (
    <div className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Top Products</h2>
        <button className="text-white/50 hover:text-white flex items-center text-sm transition-colors">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-white/50 text-left">
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Sales</th>
              <th className="pb-3 font-medium">Revenue</th>
              <th className="pb-3 font-medium">Change</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 text-white font-medium">{product.name}</td>
                <td className="py-4 text-white">{product.sales}</td>
                <td className="py-4 text-white">{product.revenue}</td>
                <td className="py-4">
                  <div className="flex items-center">
                    {product.positive ? (
                      <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-red-400 mr-1" />
                    )}
                    <span className={`${product.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {product.change}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
