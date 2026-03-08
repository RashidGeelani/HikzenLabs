import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <span className="text-2xl font-bold gradient-text">Hikzen</span>
              <span className="text-2xl font-bold text-foreground ml-1">Labs</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00d4ff]"></div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-white/20 text-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Get Started Button - Desktop */}
            <button
              onClick={() => onNavigate('contact')}
              className="hidden lg:block px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300"
            >
              Get Started
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-white/20 text-foreground'
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
