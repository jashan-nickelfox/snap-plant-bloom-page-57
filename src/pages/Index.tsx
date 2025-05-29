
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AppJourneySection from '@/components/AppJourneySection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { setupScrollRevealAnimation } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    const cleanup = setupScrollRevealAnimation();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AppJourneySection />
        {/* <FeaturesSection /> */}
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
