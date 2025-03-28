
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CompanyLogos from '@/components/CompanyLogos';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "InsightFusion - Real-time Sales Analytics Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-black bg-noise-texture">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none z-0"></div> */}
      <Navbar />
      <main>
        <HeroSection />
        <CompanyLogos />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
