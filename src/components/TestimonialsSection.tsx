import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Gardener",
    rating: 5,
    content: "Snap Plant has completely transformed how I care for my houseplants. The identification is incredibly accurate and the care tips are so helpful!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Hiking Enthusiast",
    rating: 5,
    content: "I use this app on all my nature walks. It's amazing to finally know the names of all the plants I encounter. The multilingual support is a great feature!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Plant Collector",
    rating: 4,
    content: "As someone with over 50 houseplants, this app has become indispensable. The collection feature helps me keep track of all my green friends.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    name: "Daniel Rodriguez",
    role: "Landscape Designer",
    rating: 5,
    content: "I recommend Snap Plant to all my clients. The detailed information helps them understand how to properly care for their new garden installations.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-b from-plant-lightBg via-white to-plant-lightBg">
      <div className="section-container">
        <h2 className="section-title reveal text-3xl sm:text-4xl font-extrabold text-center text-plant">What Our Users Say</h2>
        <div className="reveal flex items-center justify-center mb-10">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="ml-3 text-sm sm:text-lg font-semibold text-gray-700">4.8 out of 5 stars on App Store</span>
        </div>

        <div className="relative max-w-4xl mx-auto reveal">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full p-6">
                  <div className="bg-white rounded-3xl shadow-xl p-8 text-center flex flex-col items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-plant"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6 text-sm sm:text-base max-w-xl">"{testimonial.content}"</p>
                    <h4 className="font-bold text-lg text-plant mb-1">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`mx-1 h-2 w-6 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-plant scale-110' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Join over 10,000+ Plant Enthusiasts</p>
          <a 
            href="https://apps.apple.com/us/app/snap-plant-identification/id6737281030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-plant text-white font-semibold hover:bg-plant-dark transition-colors duration-300"
          >
            Download on App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
