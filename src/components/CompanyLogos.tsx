
import React from 'react';

const CompanyLogos = () => {
  // Company names instead of actual logos
  const companies = [
    "Microsoft", "Adobe", "Salesforce", "Hubspot", 
    "Stripe", "Shopify", "Slack", "Zendesk"
  ];
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-dashboard-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-2">Trusted by Industry Leaders</h2>
          <p className="text-dashboard-text-muted max-w-2xl mx-auto">
            Join thousands of companies using our dashboard solution to optimize their sales performance.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="h-12 flex items-center justify-center transition-all hover:opacity-100 opacity-70"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-xl font-bold text-white/80 hover:text-dashboard-purple transition-colors">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
