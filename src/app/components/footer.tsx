import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock newsletter signup
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="glass-card p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-foreground/70">
                Subscribe to our newsletter for the latest updates on AI, tech trends, and our services.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold gradient-text">Hikzen</span>
              <span className="text-2xl font-bold"> Labs</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Innovative IT and AI solutions for the future. Building tomorrow's technology today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-foreground/70 hover:text-[#0066ff] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'AI Automation',
                'UI/UX Design',
                'Digital Marketing',
                'SEO Services'
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-foreground/70 hover:text-[#0066ff] transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0066ff] mt-0.5" />
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <a href="mailto:hello@hikzenlabs.com" className="text-foreground hover:text-[#0066ff] transition-colors">
                    hello@hikzenlabs.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0066ff] mt-0.5" />
                <div>
                  <p className="text-sm text-foreground/70">Phone</p>
                  <a href="tel:+1234567890" className="text-foreground hover:text-[#0066ff] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0066ff] mt-0.5" />
                <div>
                  <p className="text-sm text-foreground/70">Location</p>
                  <p className="text-foreground">San Francisco, CA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/70 text-sm">
              © 2026 Hikzen Labs. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/70 hover:text-[#0066ff] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/70 hover:text-[#0066ff] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/70 hover:text-[#0066ff] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
