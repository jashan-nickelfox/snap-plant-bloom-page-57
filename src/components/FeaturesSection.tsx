import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screens = [
  {
    id: 1,
    title: "Camera Interface",
    description:
      "Easily capture plants with our camera interface and get instant insights, identification, and detailed information to explore the natural world around you.",
    image: "/identification.png",
  },
  {
    id: 2,
    title: "Explore Plants",
    description:
      "Effortlessly explore and identify a wide variety of plants using our intuitive camera interface, designed to make plant discovery engaging and educational for enthusiasts of all levels.",
    image: "/explore.png",
  },
  {
    id: 3,
    title: "Plant Guide",
    description:
      "Gain instant access to an extensive plant guide filled with detailed insights, care tips, watering schedules, and growth recommendations to help your plants thrive year-round.",
    image: "/guide.png",
  },
  {
    id: 4,
    title: "My Plants Collection",
    description:
      "Easily build, organize, and manage your personal plant collection. Keep track of your favorite species, monitor their care routines, and document their growth journey in one convenient place.",
    image: "/collection.png",
  },
];

const AppJourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === screens.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? screens.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
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
    <section
      id="app-journey"
      ref={sectionRef}
      className="bg-gradient-to-b from-white via-plant/5 to-white py-20"
    >
      <div className="section-container">
        <h2 className="section-title reveal text-4xl font-extrabold text-plant text-center">
          Experience The App Journey
        </h2>
        <p className="section-subtitle reveal text-gray-600 text-center mt-4">
          Follow the simple process of discovering and learning about plants
        </p>

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
                      <h3 className="text-3xl font-extrabold text-plant mb-4">
                        {screen.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {screen.description}
                      </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                      <div className="relative w-60 md:w-72">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-plant/20 to-plant-light/20 blur-2xl opacity-50"></div>
                        <img
                          src={screen.image}
                          alt={screen.title}
                          className="relative w-full max-h-80 object-contain rounded-3xl "
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
              className={`mx-1 h-2 w-8 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-plant scale-110" : "bg-gray-300"
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
