
import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screens = [
  {
    id: 1,
    title: "Camera Interface",
    description: "Easily capture plants with our camera interface and get instant insights, identification, and detailed information to explore the natural world around you.",
    image: "/identification.svg"
  },
  {
    id: 2,
    title: "Explore Plants",
    description: "Explore and identify plants effortlessly with our intuitive camera interface",
    image: "/explore.svg"
  },
  {
    id: 3,
    title: "Plant Guide",
    description: "Access an instant plant guide with detailed insights and care tips",
    image: "/guide.svg"
  },
  {
    id: 4,
    title: "My Plants Collection",
    description: "Build and manage your personal plant collection",
    image: "/collection.svg"
  }
];

const AppJourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === screens.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? screens.length - 1 : current - 1));
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
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
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <section id="app-journey" ref={sectionRef} className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title reveal">Experience The App Journey</h2>
        <p className="section-subtitle reveal">Follow the simple process of discovering and learning about plants</p>
        
        <div className="relative mt-16 reveal">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {screens.map((screen) => (
                <div key={screen.id} className="min-w-full px-4">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <div className="md:w-1/3">
                      <h3 className="text-2xl font-bold mb-4">{screen.title}</h3>
                      <p className="text-gray-700">{screen.description}</p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                      <div className="relative w-60 md:w-72">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-plant/10 to-plant-light/10 blur-lg"></div>
                        <img 
                          src={screen.image} 
                          alt={screen.title} 
                          className="relative w-full h-auto rounded-3xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 md:left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
            aria-label="Previous screen"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 md:right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
            aria-label="Next screen"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 h-2 w-8 rounded-full transition-all ${
                index === activeIndex ? 'bg-plant' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppJourneySection;
