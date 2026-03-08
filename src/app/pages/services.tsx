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
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Code2,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Performance',
        'Modern Frameworks',
        'CMS Integration',
        'E-commerce Solutions'
      ],
      gradient: 'from-[#0066ff]/20 to-[#00d4ff]/20',
      iconColor: 'text-[#0066ff]'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'iOS & Android',
        'React Native',
        'Flutter Development',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications'
      ],
      gradient: 'from-[#00d4ff]/20 to-[#00ffcc]/20',
      iconColor: 'text-[#00d4ff]'
    },
    {
      icon: Database,
      title: 'Backend Services',
      description: 'Scalable and secure server-side solutions and APIs',
      features: [
        'RESTful APIs',
        'GraphQL',
        'Database Design',
        'Cloud Infrastructure',
        'Microservices',
        'Server Security'
      ],
      gradient: 'from-[#7c3aed]/20 to-[#00d4ff]/20',
      iconColor: 'text-[#7c3aed]'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: '24/7 monitoring, updates, and technical support',
      features: [
        '24/7 Support',
        'Regular Updates',
        'Performance Monitoring',
        'Bug Fixes',
        'Security Patches',
        'System Optimization'
      ],
      gradient: 'from-[#14b8a6]/20 to-[#00ffcc]/20',
      iconColor: 'text-[#14b8a6]'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that deliver results',
      features: [
        'Social Media Marketing',
        'Content Strategy',
        'Email Campaigns',
        'PPC Advertising',
        'Analytics & Reporting',
        'Brand Development'
      ],
      gradient: 'from-[#0066ff]/20 to-[#7c3aed]/20',
      iconColor: 'text-[#0066ff]'
    },
    {
      icon: Search,
      title: 'SEO Marketing',
      description: 'Improve your search rankings and online visibility',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Link Building',
        'Local SEO',
        'SEO Audits'
      ],
      gradient: 'from-[#00d4ff]/20 to-[#14b8a6]/20',
      iconColor: 'text-[#00d4ff]'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      gradient: 'from-[#7c3aed]/20 to-[#00ffcc]/20',
      iconColor: 'text-[#7c3aed]'
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent automation for business efficiency',
      features: [
        'Process Automation',
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Chatbots & AI Assistants',
        'Predictive Analytics'
      ],
      gradient: 'from-[#0066ff]/20 to-[#00ffcc]/20',
      iconColor: 'text-[#0066ff]'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive IT and AI solutions designed to transform your business 
              and accelerate your digital journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card glass-hover p-8"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.iconColor} flex-shrink-0`} />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 mb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating a detailed roadmap' },
              { step: '03', title: 'Development', description: 'Building your solution with agile methods' },
              { step: '04', title: 'Delivery', description: 'Launch and ongoing support' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-foreground/70">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300"
              >
                Contact Us Today
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="px-8 py-4 rounded-full glass-card glass-hover flex items-center justify-center gap-2"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
