import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface TestimonialsPageProps {
  onNavigate: (page: string) => void;
}

export function TestimonialsPage({ onNavigate }: TestimonialsPageProps) {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: 'professional woman ceo',
      rating: 5,
      text: 'Hikzen Labs transformed our business with their AI automation solutions. The team is incredibly professional, and the results exceeded our expectations. Our efficiency has increased by 300%!',
      gradient: 'from-[#0066ff]/20 to-[#00d4ff]/20'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'FinanceFlow',
      image: 'professional man cto',
      rating: 5,
      text: 'Working with Hikzen Labs on our mobile app was a game-changer. Their expertise in React Native and attention to detail resulted in a flawless product that our users love.',
      gradient: 'from-[#00d4ff]/20 to-[#00ffcc]/20'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthHub',
      image: 'professional woman marketing',
      rating: 5,
      text: 'The digital marketing strategies implemented by Hikzen Labs have tripled our online engagement. Their data-driven approach and creative solutions are simply outstanding.',
      gradient: 'from-[#7c3aed]/20 to-[#00d4ff]/20'
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'Startup Vision',
      image: 'professional man founder',
      rating: 5,
      text: 'From initial consultation to final delivery, Hikzen Labs demonstrated exceptional professionalism. They built our website and backend infrastructure flawlessly.',
      gradient: 'from-[#14b8a6]/20 to-[#00ffcc]/20'
    },
    {
      name: 'Lisa Martinez',
      role: 'Product Manager',
      company: 'InnovateCo',
      image: 'professional woman manager',
      rating: 5,
      text: 'The UI/UX design work done by Hikzen Labs is phenomenal. Our app has received countless compliments, and user retention has improved significantly.',
      gradient: 'from-[#0066ff]/20 to-[#7c3aed]/20'
    },
    {
      name: 'James Wilson',
      role: 'VP of Technology',
      company: 'CloudScale',
      image: 'professional man vp',
      rating: 5,
      text: 'Hikzen Labs built a scalable backend system that handles millions of requests daily. Their technical expertise and problem-solving skills are top-notch.',
      gradient: 'from-[#00ffcc]/20 to-[#14b8a6]/20'
    }
  ];

  const stats = [
    { number: '200+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '500+', label: 'Projects Delivered' }
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
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Don't just take our word for it – hear what our clients have to say about 
              working with Hikzen Labs
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-hover p-8 flex flex-col"
              >
                {/* Quote Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${testimonial.gradient} mb-6 self-start`}>
                  <Quote className="w-6 h-6 text-[#0066ff]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} overflow-hidden`}>
                    <ImageWithFallback
                      src={`https://source.unsplash.com/200x200/?${encodeURIComponent(testimonial.image)}`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-foreground/70">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 mb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Watch <span className="gradient-text">Client Stories</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              See how we've helped businesses transform and grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'How We 3x\'d TechStart\'s Revenue', company: 'TechStart Inc.', duration: '3:45' },
              { title: 'FinanceFlow\'s Digital Transformation', company: 'FinanceFlow', duration: '5:20' }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card glass-hover p-6 cursor-pointer group"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-foreground/70">{video.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
          </div>

          <div className="glass-card p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center justify-center opacity-50">
                  <div className="text-xl font-bold text-foreground/40">
                    Company {i + 1}
                  </div>
                </div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's work together to create your own success story. Contact us today 
              and start your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300"
              >
                Get Started Today
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-10 py-5 rounded-full glass-card glass-hover text-lg flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
