import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Eye,
  Heart,
  Rocket,
  Users,
  TrendingUp,
  Award,
  Globe,
  Lightbulb,
  Zap
} from 'lucide-react';

export function AboutPage() {
  const timeline = [
    {
      year: '2020',
      title: 'Founded',
      description: 'Hikzen Labs was born with a vision to revolutionize IT services'
    },
    {
      year: '2021',
      title: 'First AI Product',
      description: 'Launched our first AI-powered automation platform'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 15+ countries'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Awarded "Best AI Innovation Startup" by Tech Leaders Summit'
    },
    {
      year: '2026',
      title: 'Future Vision',
      description: 'Building next-generation AI products for enterprise solutions'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We prioritize your needs and build lasting partnerships'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and transparent communication'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing needs and market demands'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We think globally while understanding local market nuances'
    }
  ];

  const teamStats = [
    { icon: Users, number: '50+', label: 'Expert Team Members' },
    { icon: Award, number: '15+', label: 'Industry Awards' },
    { icon: TrendingUp, number: '98%', label: 'Client Satisfaction' },
    { icon: Globe, number: '15+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Hikzen Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              We're a team of innovators, dreamers, and problem-solvers dedicated to 
              transforming businesses through AI and cutting-edge technology
            </p>
          </motion.div>

          {/* Mission, Vision, Values Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-hover p-8"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 mb-6">
                <Target className="w-8 h-8 text-[#0066ff]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70">
                To empower businesses worldwide with innovative AI and IT solutions that drive 
                growth, efficiency, and digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card glass-hover p-8"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#00d4ff]/20 mb-6">
                <Eye className="w-8 h-8 text-[#7c3aed]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-foreground/70">
                To be the world's most trusted AI and technology partner, leading the way in 
                innovation and shaping the future of digital business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card glass-hover p-8"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#00ffcc]/20 to-[#14b8a6]/20 mb-6">
                <Rocket className="w-8 h-8 text-[#14b8a6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
              <p className="text-foreground/70">
                To deliver exceptional value through cutting-edge solutions, fostering long-term 
                partnerships and driving measurable business success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 mb-4">
                      <Icon className="w-8 h-8 text-[#0066ff]" />
                    </div>
                    <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-foreground/70">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card glass-hover p-8"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 mb-4">
                    <Icon className="w-6 h-6 text-[#0066ff]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 mb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-foreground/70">
              From startup to industry leader
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0066ff] via-[#00d4ff] to-[#7c3aed] rounded-full"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#0066ff] to-[#00d4ff] border-4 border-background glow"></div>

                <div className={`glass-card p-6 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Innovation-Driven <span className="gradient-text">Culture</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                At Hikzen Labs, we foster a culture of continuous learning, experimentation, 
                and collaboration. Our team is passionate about technology and committed to 
                pushing the boundaries of what's possible.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { label: 'Remote-First', value: '100%' },
                  { label: 'Work-Life Balance', value: '⭐⭐⭐⭐⭐' },
                  { label: 'Learning Budget', value: '$5K/year' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">{item.value}</div>
                    <div className="text-foreground/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
