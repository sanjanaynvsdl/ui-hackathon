
import React, { useEffect, useRef } from 'react';

const CompanyLogos = () => {
  // Company names instead of actual logos
  const companies = [
    "Microsoft", "Adobe", "Salesforce", "Hubspot", 
    "Stripe", "Shopify", "Slack", "Zendesk"
  ];
  
  const logoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollLogos = () => {
      if (logoContainerRef.current) {
        if (logoContainerRef.current.scrollLeft >= logoContainerRef.current.scrollWidth / 2) {
          logoContainerRef.current.scrollLeft = 0;
        } else {
          logoContainerRef.current.scrollLeft += 1;
        }
      }
    };
    
    const interval = setInterval(scrollLogos, 30);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-dashboard-card/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-2">Trusted by Industry Leaders</h2>
          <p className="text-dashboard-text-muted max-w-2xl mx-auto">
            Join thousands of companies using our dashboard solution to optimize their sales performance.
          </p>
        </div>
        
        <div className="relative overflow-hidden w-full">
          <div 
            ref={logoContainerRef}
            className="flex space-x-16 py-4 overflow-x-scroll scrollbar-none whitespace-nowrap"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div 
                key={`first-${index}`} 
                className="h-12 flex-shrink-0 flex items-center justify-center transition-all hover:opacity-100 opacity-70"
              >
                <div className="text-xl font-bold text-white/80 hover:text-dashboard-purple transition-colors">
                  {company}
                </div>
              </div>
            ))}
            
            {/* Duplicated for infinite scroll effect */}
            {companies.map((company, index) => (
              <div 
                key={`second-${index}`} 
                className="h-12 flex-shrink-0 flex items-center justify-center transition-all hover:opacity-100 opacity-70"
              >
                <div className="text-xl font-bold text-white/80 hover:text-dashboard-purple transition-colors">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
