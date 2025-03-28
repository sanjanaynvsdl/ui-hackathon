
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
  const faqs = [
    {
      question: "How easy is it to get started with your dashboard?",
      answer: "Getting started is simple. After sign-up, you can connect your data sources through our intuitive onboarding process. Most customers are up and running in less than a day, with full data integration completed within a week.",
    },
    {
      question: "Can I integrate with my existing CRM system?",
      answer: "Yes! Our dashboard integrates seamlessly with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and more. We also offer custom API integrations for proprietary systems.",
    },
    {
      question: "Is my data secure with your platform?",
      answer: "Absolutely. We implement bank-level security with end-to-end encryption. Your data is hosted in SOC 2 compliant data centers, and we offer GDPR and CCPA compliance. We never share your data with third parties.",
    },
    {
      question: "Do you offer custom solutions for enterprise needs?",
      answer: "Yes, our Enterprise plan includes custom dashboard creation, dedicated account management, and bespoke integrations. We can tailor our solution to meet specific regulatory requirements or complex sales structures.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support with varying response times. Professional and Enterprise plans include priority support with responses within 4 hours during business days. Enterprise customers also get a dedicated account manager and 24/7 emergency support.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription anytime without penalty. We offer a 14-day free trial for all plans, and a 30-day money-back guarantee after purchase if you're not completely satisfied.",
    },
  ];
  
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-white">
            Frequently <span className='text-dashboard-purple'>Asked Questions</span>
          </h2>
          <p className="text-lg text-dashboard-text-muted max-w-3xl mx-auto">
            Find answers to common questions about our dashboard solution.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-[#272829] bg-noise-texture rounded-lg  overflow-hidden transition-all duration-300 animate-fade-in-up ${
                expandedIndex === index ? 'purple-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={expandedIndex === index}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-white transition-transform duration-200 ${
                    expandedIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-96 pb-6 px-6' : 'max-h-0'
                }`}
              >
                <p className="text-dashboard-text-muted">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
