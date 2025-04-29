import React, { useRef, useEffect } from "react";

const screens = [
  {
    id: 1,
    title: "Camera Interface",
    description:
      "Easily capture plants with our camera interface and get instant insights, identification, and detailed information to explore the natural world around you.",
    image: "/identification.svg",
  },
  {
    id: 2,
    title: "Explore Plants",
    description:
      "Effortlessly explore and identify a wide variety of plants using our intuitive camera interface, designed to make plant discovery engaging and educational for enthusiasts of all levels.",
    image: "/explore.svg",
  },
  {
    id: 3,
    title: "Plant Guide",
    description:
      "Gain instant access to an extensive plant guide filled with detailed insights, care tips, watering schedules, and growth recommendations to help your plants thrive year-round.",
    image: "/guide.svg",
  },
  {
    id: 4,
    title: "My Plants Collection",
    description:
      "Easily build, organize, and manage your personal plant collection. Keep track of your favorite species, monitor their care routines, and document their growth journey in one convenient place.",
    image: "/collection.svg",
  },
];

const AppJourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
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

  return (
    <section
      id="app-journey"
      ref={sectionRef}
      className="bg-gradient-to-b from-white via-plant/5 to-white py-20"
    >
      <div className="section-container">
        <h2 className="section-title reveal text-4xl font-extrabold text-plant text-center opacity-0 translate-y-8 transition duration-700">
          Features
        </h2>
        <p className="section-subtitle reveal text-gray-600 text-center mt-4 opacity-0 translate-y-8 transition duration-700 delay-200">
        Explore unique features built to guide you through the world of plants
        </p>

        <div className="mt-16 space-y-24">
          {screens.map((screen, index) => (
            <div
              key={screen.id}
              className={`flex flex-col md:flex-row items-center gap-8 reveal opacity-0 translate-y-8 transition duration-700 delay-${
                index * 200
              } ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-72 h-80 object-contain rounded-3xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-extrabold text-plant mb-4">
                  {screen.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .reveal.active {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </section>
  );
};

export default AppJourneySection;
