import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative ">
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="bg-[#272829] bg-noise-texture p-12 md:p-16 text-center max-w-4xl mx-auto rounded-2xl   purple-glow animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6 text-white">
            Ready to Transform Your{" "}
            <span className="text-dashboard-purple">Sales Analytics?</span>
          </h2>
          <p className="text-lg text-dashboard-text-muted mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams who have increased revenue and
            improved performance with our dashboard solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button className="btn-primary group">
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="btn-secondary">
                Demo
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-dashboard-text-muted">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
