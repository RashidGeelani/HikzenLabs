import React, { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/navigation';
import { Footer } from '@/app/components/footer';
import { HomePage } from '@/app/pages/home';
import { AboutPage } from '@/app/pages/about';
import { ServicesPage } from '@/app/pages/services';
import { ProductsPage } from '@/app/pages/product'
import { PortfolioPage } from '@/app/pages/portfolio';
import { BlogPage } from '@/app/pages/blog';
import { TestimonialsPage } from '@/app/pages/testimonials';
import { FAQPage } from '@/app/pages/faq';
import { ContactPage } from '@/app/pages/contact';
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'product':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage />;
      case 'testimonials':
        return <TestimonialsPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground animated-gradient-bg">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />

      <Analytics />
    </div>
    
  );
}
