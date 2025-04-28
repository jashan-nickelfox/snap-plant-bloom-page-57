
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/icon.png" alt="Snap Plant" className="h-10" />
            <span className="ml-2 text-xl font-heading font-bold text-plant-dark">Snap Plant</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-plant transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-plant transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-plant transition-colors">Reviews</a>
            <a href="#download" className="btn-primary">Download Now</a>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {menuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-plant transition-colors">Features</a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-plant transition-colors">How It Works</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-plant transition-colors">Reviews</a>
            <a href="#download" className="btn-primary w-full mt-3">Download Now</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
