
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const toast = useToast();
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current as HTMLFormElement);
    
    // Simulate form submission
    toast.toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    
    formRef.current?.reset();
  };

  return (
    <section id="download" ref={sectionRef} className="bg-white py-20">
      <div className="section-container">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Identify Plants?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Download Snap Plant today and start your journey into the world of plants. Available now on the App Store.
            </p>
            <div className="mb-10">
              <a 
                href="https://apps.apple.com/us/app/snap-plant-identification/id6737281030" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="/app-store-badge.svg" 
                  alt="Download on App Store" 
                  className="h-12"
                />
              </a>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold mb-4">Want a Similar App for Your Project?</h3>
              <p className="text-gray-700 mb-4">
                We develop custom plant identification solutions for businesses and organizations.
              </p>
            </div>
          </div>
          
          <div className="reveal">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-plant focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-plant hover:bg-plant-dark">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
