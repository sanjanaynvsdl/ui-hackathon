
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      quote: "This dashboard transformed how we approach sales. The real-time insights helped us increase conversion by 27% in just two months.",
      stars: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Sales Director, GrowthIQ",
      quote: "The filtering capabilities are game-changing. We can now segment our pipeline with incredible precision and focus on high-value opportunities.",
      stars: 5,
    },
    {
      name: "Emma Chen",
      role: "Revenue Operations, Velocity",
      quote: "Implementation was seamless and the ROI was immediate. The interactive charts make our weekly reviews much more productive and insightful.",
      stars: 4,
    },
    {
      name: "Emma Chen",
      role: "Revenue Operations, Velocity",
      quote: "Implementation was seamless and the ROI was immediate. The interactive charts make our weekly reviews much more productive and insightful.",
      stars: 4,
    },
    {
      name: "Emma Chen",
      role: "Revenue Operations, Velocity",
      quote: "Implementation was seamless and the ROI was immediate. The interactive charts make our weekly reviews much more productive and insightful.",
      stars: 4,
    },
  ];
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative  ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-4xl font-bold gradient-text mb-4 text-white">
            What Our <span className='text-dashboard-purple'>Customers Say</span>
          </h2>
          <p className="text-lg text-dashboard-text-muted max-w-3xl mx-auto">
            Discover how industry leaders are leveraging our dashboard to drive extraordinary results.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 50}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-[#272829] bg-noise-texture p-8 rounded-xl relative h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(5 - testimonial.stars)].map((_, i) => (
                        <Star key={i + testimonial.stars} className="w-5 h-5 text-gray-600" />
                      ))}
                    </div>
                    <p className="text-white mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="h-12 w-12 rounded-full bg-dashboard-purple/30 flex items-center justify-center mr-4">
                        <span className="text-lg font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-dashboard-text-muted">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-[#272829] bg-noise-texture border-white/10 hover:bg-white/10"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-[#272829] bg-noise-texture border-white/10 hover:bg-white/10"
                onClick={handleNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
