
import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Gardener",
    rating: 5,
    content: "Snap Plant has completely transformed how I care for my houseplants. The identification is incredibly accurate and the care tips are so helpful!",
    avatar: "/avatar-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Hiking Enthusiast",
    rating: 5,
    content: "I use this app on all my nature walks. It's amazing to finally know the names of all the plants I encounter. The multilingual support is a great feature!",
    avatar: "/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Plant Collector",
    rating: 4,
    content: "As someone with over 50 houseplants, this app has become indispensable. The collection feature helps me keep track of all my green friends.",
    avatar: "/avatar-3.jpg"
  },
  {
    id: 4,
    name: "Daniel Rodriguez",
    role: "Landscape Designer",
    rating: 5,
    content: "I recommend Snap Plant to all my clients. The detailed information helps them understand how to properly care for their new garden installations.",
    avatar: "/avatar-4.jpg"
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
    <section id="testimonials" ref={sectionRef} className="py-20 bg-plant-lightBg">
      <div className="section-container">
        <h2 className="section-title reveal">What Our Users Say</h2>
        <div className="reveal flex items-center justify-center mb-12">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <span className="ml-3 text-lg font-semibold">4.8 out of 5 stars on App Store</span>
        </div>
        
        <div className="relative max-w-4xl mx-auto reveal">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full p-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-plant-light"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
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
                className={`mx-1 h-2 w-8 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-plant' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-2xl font-semibold mb-4">Join over 10,000 plant enthusiasts</p>
          <a 
            href="https://apps.apple.com/us/app/snap-plant-identification/id6737281030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download on App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
