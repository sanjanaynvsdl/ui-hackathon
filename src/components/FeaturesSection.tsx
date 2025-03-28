
import React from 'react';
import { BarChart3, Filter, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Advanced Filtering",
      description: "Slice and dice your data with powerful filtering options. Target specific segments, timeframes, or metrics to uncover hidden opportunities.",
      icon: <Filter className="w-12 h-12 mb-4 text-dashboard-purple" />,
    },
    {
      title: "Interactive Graphs",
      description: "Visualize your sales data with stunning, interactive charts. Hover, zoom, and click to explore trends and patterns in your revenue stream.",
      icon: <BarChart3 className="w-12 h-12 mb-4 text-dashboard-purple" />,
    },
    {
      title: "Real-Time Updates",
      description: "Stay ahead of the curve with live data refreshes. See sales as they happen and make quick, informed decisions based on current information.",
      icon: <Clock className="w-12 h-12 mb-4 text-dashboard-purple" />,
    },
  ];
  
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0  pointer-events-none" />
      
      <div className="max-w-7xl mx-6 sm:mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-white">
            Powerful Features <span className='text-dashboard-purple'>for Sales Teams</span>
          </h2>
          <p className="text-lg text-dashboard-text-muted max-w-3xl mx-auto">
            Our platform combines intuitive design with powerful analytics to give you complete control over your sales data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#272829] rounded-lg bg-noise-texture p-8 flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-2 rounded-full bg-dashboard-purple/10 p-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-dashboard-text-muted">
                {feature.description}
              </p>
              <div className="mt-6">
                <a href="#" className="text-dashboard-purple hover:text-dashboard-purple-light transition-colors inline-flex items-center">
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
