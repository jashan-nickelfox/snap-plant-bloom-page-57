
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 100);
        }
      },
      { threshold: 0.1 }
    );
    
    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-b from-white to-plant-lightBg"
    >
      <div className="absolute inset-0 z-0 bg-[url('/pattern-bg.svg')] bg-repeat opacity-5"></div>
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Identify Any Plant <span className="text-plant">In Seconds</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
            Point your camera, snap a photo, and instantly discover detailed information about any plant around you. Build your personal plant collection and become a botanical expert.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://apps.apple.com/us/app/snap-plant-identification/id6737281030" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download on App Store
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end reveal">
          <div className="relative w-64 md:w-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-plant/20 to-plant-light/20 blur-xl"></div>
            <div className="relative">
              <img 
                src="/dashboard.svg" 
                alt="Snap Plant App Interface"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#app-journey" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          <ArrowDown className="h-5 w-5 text-plant" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
