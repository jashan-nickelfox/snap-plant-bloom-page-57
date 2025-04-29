import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const toast = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current as HTMLFormElement);

    toast.toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });

    formRef.current?.reset();
  };

  return (
    <section
      id="download"
      ref={sectionRef}
      className="bg-gradient-to-b from-white via-plant/5 to-white py-20"
    >
      <div className="section-container">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal transition-all duration-700 ease-in-out">
            <h2 className="text-3xl md:text-4xl font-extrabold text-plant mb-6">
              Ready to Identify Plants?
            </h2>
            <p className="text-lg text-gray-700">
              Download Snap Plant today and start your journey into the world of
              plants. Available now on the App Store.
            </p>
            <div className="inline-block">
              <a
                href="https://apps.apple.com/us/app/snap-plant-identification/id6737281030"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transform transition-transform"
              >
                <img
                  src="/app-store-badge.svg"
                  alt="Download on App Store"
                  className="w-40 h-auto"
                />
              </a>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold text-plant mb-3">
                Want a Similar App for Your Project?
              </h3>
              <p className="text-gray-600 mb-4">
                We develop custom plant identification solutions tailored for
                businesses and organizations.
              </p>
            </div>
          </div>

          <div className="reveal transition-all duration-700 ease-in-out delay-150">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-plant text-center">
                Contact Us
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="bg-gray-50 border border-gray-300 focus:ring-plant focus:border-plant"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="bg-gray-50 border border-gray-300 focus:ring-plant focus:border-plant"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-plant focus:border-plant resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-plant hover:bg-plant-dark rounded-full text-lg font-semibold"
                >
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
