
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Filter, Clock, Activity } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const HeroSection = () => {
  return (
    <section className="min-h-screen pb-20 pt-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text">
            Revolutionize Your Revenue Analytics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Transform your sales data into actionable insights with our powerful, real-time dashboard solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
            <Button className="btn-primary group">
              Book a Demo 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-secondary">
              View Features
            </Button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center mt-4 animate-fade-in">
          <div className="purple-glow animate-pulse-glow rounded-xl overflow-hidden relative">
            <DashboardPreview />
          </div>
          
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-4 bg-dashboard-card rounded-full py-3 px-6 border border-white/10 shadow-lg animate-float">
            <div className="flex items-center">
              <BarChart3 className="w-5 h-5 text-dashboard-purple mr-2" />
              <span className="text-sm font-medium">Interactive Charts</span>
            </div>
            <div className="hidden md:flex items-center">
              <Filter className="w-5 h-5 text-dashboard-purple mr-2" />
              <span className="text-sm font-medium">Advanced Filtering</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-dashboard-purple mr-2" />
              <span className="text-sm font-medium">Real-Time Updates</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center">
          <div className="animate-bounce flex flex-col items-center text-sm text-gray-400">
            <span>Scroll to explore</span>
            <Activity className="w-5 h-5 mt-2 text-dashboard-purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
