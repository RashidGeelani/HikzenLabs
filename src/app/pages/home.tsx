import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Smartphone,
  Database,
  Wrench,
  TrendingUp,
  Search,
  Palette,
  Bot,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Users,
  Award,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Database,
      title: 'Backend Services',
      description: 'Scalable and secure server-side solutions'
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: '24/7 support and maintenance services'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that convert'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Improve your search rankings and visibility'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences'
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent automation for business efficiency'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries Served' }
  ];

  const features = [
    { icon: Sparkles, title: 'AI-Powered Solutions', description: 'Leveraging artificial intelligence for smarter outcomes' },
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security for your peace of mind' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance for the best user experience' },
    { icon: Users, title: 'Expert Team', description: 'World-class developers and designers at your service' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 animated-gradient-bg"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066ff]/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#00d4ff]/20 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full glass-card mb-6">
                <span className="text-sm font-medium gradient-text">🚀 AI-Powered Technology Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Building the Future with
                <br />
                <span className="gradient-text">AI & Innovation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl mx-auto">
                Hikzen Labs delivers cutting-edge IT services, AI automation, and custom software development 
                to transform your business in the digital age.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-2xl hover:shadow-[#0066ff]/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="px-8 py-4 rounded-full glass-card glass-hover flex items-center justify-center gap-2"
                >
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {/* {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              ))} */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Hikzen Labs</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We combine innovation, expertise, and cutting-edge technology to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card glass-hover p-8 text-center"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 mb-4">
                    <Icon className="w-8 h-8 text-[#0066ff]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive IT and AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-card glass-hover p-6 cursor-pointer"
                  onClick={() => onNavigate('services')}
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 mb-4">
                    <Icon className="w-6 h-6 text-[#0066ff]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 rounded-full glass-card glass-hover inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* AI Products Highlight */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#00d4ff]/20 mb-6">
                <Bot className="w-12 h-12 text-[#7c3aed]" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building <span className="gradient-text-secondary">AI Products</span>
              </h2>
              
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                We're not just service providers – we're innovators. Our team is actively developing 
                AI-powered products that will revolutionize how businesses operate in the digital age.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                {[
                  'Machine Learning Solutions',
                  'Natural Language Processing',
                  'Computer Vision Systems'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#00d4ff]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#00d4ff] text-white hover:shadow-2xl hover:shadow-[#7c3aed]/40 transition-all duration-300"
              >
                Learn More About Our Vision
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Leading Companies</span>
            </h2>
            <p className="text-foreground/70">Join hundreds of satisfied clients worldwide</p>
          </div>

          <div className="glass-card p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="text-2xl font-bold text-foreground/40">
                    Company {i}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('testimonials')}
              className="px-8 py-4 rounded-full glass-card glass-hover inline-flex items-center gap-2"
            >
              Read Client Stories
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Let's discuss how Hikzen Labs can help you achieve your goals with cutting-edge technology
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
