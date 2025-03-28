
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
    <section className="py-5 px-4 lg:mx-40  md:mx-36 mx-0 rounded-xl sm:px-6 lg:px-8 relative ">
      {/* <div className="max-w-7xl mx-auto"> */}
        {/* <div className="text-center mb-4 animate-fade-in">
          <h2 className="text-lg md:text-3xl md:text-white font-bold text-dashboard-purple">Trusted by Industry Leaders</h2>
          
        </div> */}
        
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
                <div className="md:text-3xl text-xl font-bold text-white/80 hover:text-dashboard-purple transition-colors">
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
      {/* </div> */}
    </section>
  );
};

export default CompanyLogos;
