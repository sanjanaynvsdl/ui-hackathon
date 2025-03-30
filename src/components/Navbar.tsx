
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from 'lucide-react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-none  backdrop-blur-lg shadow-lg' : 'bg-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-dashboard-purple flex items-center justify-center mr-3">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">InsightFusion</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
          <Link to="/dashboard">
              <Button variant="default" className="bg-dashboard-purple hover:bg-dashboard-purple-dark text-white purple-glow">
                Demo
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-noise-texture backdrop-blur-lg`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a href="#features" className="block py-3 text-white hover:text-dashboard-purple transition-colors">Features</a>
          <a href="#pricing" className="block py-3 text-white hover:text-dashboard-purple transition-colors">Pricing</a>
          <a href="#" className="block py-3 text-white hover:text-dashboard-purple transition-colors">Testimonials</a>
          <a href="#" className="block py-3 text-white hover:text-dashboard-purple transition-colors">FAQ</a>
          
          <div className="pt-3 space-y-3">
            

            <Link to="/dashboard">
              <Button variant="default" className="bg-dashboard-purple hover:bg-dashboard-purple-dark text-white purple-glow">
                Demo
              </Button>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
