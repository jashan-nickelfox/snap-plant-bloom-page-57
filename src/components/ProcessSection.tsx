
import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: 1,
    title: "Download the App",
    description: "Get Snap Plant from the App Store and install it on your iPhone.",
    icon: "/icon-download.svg"
  },
  {
    number: 2,
    title: "Take a Photo",
    description: "Point your camera at any plant and take a clear photo.",
    icon: "/icon-camera.svg"
  },
  {
    number: 3,
    title: "Instant Identification",
    description: "Our AI technology quickly identifies the plant with high accuracy.",
    icon: "/icon-search.svg"
  },
  {
    number: 4,
    title: "Learn & Collect",
    description: "Access detailed information and add the plant to your collection.",
    icon: "/icon-collection.svg"
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.reveal');
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
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title reveal">How It Works</h2>
        <p className="section-subtitle reveal">Identifying plants has never been easier</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="process-step reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="process-step-number">{step.number}</div>
              <div className="flex items-center justify-center mb-6 h-16">
                <img src={step.icon} alt={step.title} className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-lg text-gray-700 mb-8">
            Start your plant identification journey today
          </p>
          <a 
            href="https://apps.apple.com/us/app/snap-plant-identification/id6737281030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
