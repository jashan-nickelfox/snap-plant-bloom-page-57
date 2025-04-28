import React, { useEffect, useRef } from 'react';
import identification from "/identification.svg";
import explore from "/explore.svg";
import collection from "/collection.svg";
import guide from "/guide.svg";

const features = [
  {
    title: "Instant Plant Identification",
    description: "Simply point your camera at any plant and get immediate identification with confidence scores and detailed taxonomic information.",
    imageElement: (
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={identification}
          alt="Instant Plant Identification"
          className="w-64 h-auto object-contain"
        />
      </div>
    ),
    imagePosition: "right",
  },
  {
    title: "Detailed Plant Information",
    description: "Access comprehensive information about each plant including care tips, ideal growing conditions, watering schedules, and more.",
    imageElement: (
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={explore}
          alt="Detailed Plant Information"
          className="w-64 h-auto object-contain"
        />
      </div>
    ),
    imagePosition: "left",
  },
  {
    title: "Personal Plant Collection",
    description: "Build and manage your own virtual plant collection. Track growth, set care reminders, and organize plants by location.",
    imageElement: (
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={collection}
          alt="Personal Plant Collection"
          className="w-64 h-auto object-contain"
        />
      </div>
    ),
    imagePosition: "right",
  },
  {
    title: "Multilingual Support",
    description: "Enjoy our app in your preferred language with support for multiple languages and regional plant information.",
    imageElement: (
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={guide}
          alt="Multilingual Support"
          className="w-64 h-auto object-contain"
        />
      </div>
    ),
    imagePosition: "left",
  },
];

const FeaturesSection = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
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
    <section id="features" ref={sectionRef} className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="section-title reveal">Powerful Features</h2>
        <p className="section-subtitle reveal">Discover why Snap Plant is the ultimate plant identification assistant</p>

        <div className="space-y-24 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-grid ${
                feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`reveal ${feature.imagePosition === 'left' ? 'order-2 lg:order-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700 text-lg mb-6">{feature.description}</p>
                <div className="h-1 w-20 bg-plant-light rounded-full"></div>
              </div>

              <div className={`reveal ${feature.imagePosition === 'left' ? 'order-1 lg:order-2' : ''}`}>
                <div className="relative flex justify-center items-center w-full h-full">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-plant/10 to-plant-light/10 rounded-xl blur-lg transform rotate-3"></div>
                  {feature.imageElement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;