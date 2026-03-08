import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'AI Solutions', 'UI/UX Design'];

  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Development',
      description: 'Modern financial analytics platform with real-time data visualization',
      image: 'fintech dashboard',
      tags: ['React', 'TypeScript', 'D3.js'],
      gradient: 'from-[#0066ff]/20 to-[#00d4ff]/20'
    },
    {
      title: 'Health & Fitness App',
      category: 'Mobile Apps',
      description: 'Cross-platform mobile app for tracking workouts and nutrition',
      image: 'fitness mobile app',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      gradient: 'from-[#00d4ff]/20 to-[#00ffcc]/20'
    },
    {
      title: 'AI Chatbot Platform',
      category: 'AI Solutions',
      description: 'Intelligent customer service automation with NLP capabilities',
      image: 'ai chatbot interface',
      tags: ['Python', 'TensorFlow', 'AWS'],
      gradient: 'from-[#7c3aed]/20 to-[#00d4ff]/20'
    },
    {
      title: 'E-commerce Redesign',
      category: 'UI/UX Design',
      description: 'Complete UI/UX overhaul for major online retailer',
      image: 'ecommerce website',
      tags: ['Figma', 'User Research', 'Prototyping'],
      gradient: 'from-[#14b8a6]/20 to-[#00ffcc]/20'
    },
    {
      title: 'SaaS Management Tool',
      category: 'Web Development',
      description: 'Enterprise project management and collaboration platform',
      image: 'saas dashboard',
      tags: ['Next.js', 'PostgreSQL', 'GraphQL'],
      gradient: 'from-[#0066ff]/20 to-[#7c3aed]/20'
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Apps',
      description: 'On-demand food delivery with real-time tracking',
      image: 'food delivery app',
      tags: ['Flutter', 'Firebase', 'Google Maps'],
      gradient: 'from-[#00ffcc]/20 to-[#14b8a6]/20'
    },
    {
      title: 'Predictive Analytics System',
      category: 'AI Solutions',
      description: 'Machine learning platform for business forecasting',
      image: 'analytics dashboard',
      tags: ['Python', 'Scikit-learn', 'Tableau'],
      gradient: 'from-[#7c3aed]/20 to-[#0066ff]/20'
    },
    {
      title: 'Banking App Interface',
      category: 'UI/UX Design',
      description: 'Modern, secure mobile banking experience',
      image: 'banking app interface',
      tags: ['Sketch', 'Principle', 'User Testing'],
      gradient: 'from-[#00d4ff]/20 to-[#0066ff]/20'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Explore our latest projects and success stories from clients around the globe
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white'
                    : 'glass-card hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-hover overflow-hidden group cursor-pointer"
              >
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/800x600/?${encodeURIComponent(project.image)}`}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-sm text-[#0066ff] mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 rounded-full bg-white/10 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-[#0066ff] hover:text-[#00d4ff] transition-colors flex items-center gap-2">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 mb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '200+', label: 'Happy Clients' },
                { number: '98%', label: 'Success Rate' },
                { number: '15+', label: 'Countries Served' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Ready to start your next project? Contact us today and let's discuss 
              how we can bring your vision to life.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
