
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: 49,
      billing: "per month",
      description: "Perfect for small sales teams getting started with analytics.",
      features: [
        "Real-time dashboard",
        "Basic filtering options",
        "Up to 5 team members",
        "30-day data history",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: 99,
      billing: "per month",
      description: "Advanced features for growing sales organizations.",
      features: [
        "Everything in Starter",
        "Advanced filtering options",
        "Unlimited team members",
        "12-month data history",
        "Custom reports & exports",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: 249,
      billing: "per month",
      description: "Complete solution for large sales teams with complex needs.",
      features: [
        "Everything in Professional",
        "Custom dashboard creation",
        "API access",
        "Unlimited data history",
        "Custom integrations",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];
  
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-white">
            Simple, <span className='text-dashboard-purple'>Transparent Pricing</span>
          </h2>
          <p className="text-lg text-dashboard-text-muted max-w-3xl mx-auto">
            Choose the plan that works for your team. All plans include a 14-day free trial.
          </p>
          
          {/* <div className="mt-8 inline-flex items-center bg-dashboard-card rounded-lg p-1">
            <button className="px-4 py-2 rounded-md bg-dashboard-purple text-white">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-dashboard-text-muted">
              Yearly (Save 20%)
            </button>
          </div> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-[#272829] bg-noise-texture p-8 rounded-xl animate-fade-in-up relative ${
                plan.popular ? 'border-dashboard-purple purple-glow' : ''
              }`} 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dashboard-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mt-4 mb-6">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className="ml-2 text-dashboard-text-muted">{plan.billing}</span>
              </div>
              <p className="text-dashboard-text-muted mb-6">
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-dashboard-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
