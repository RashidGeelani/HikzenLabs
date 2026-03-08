import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Web Development', 'Mobile Apps', 'Design', 'Business'];

  const featuredPost = {
    title: 'The Future of AI in Business: Trends for 2026',
    excerpt: 'Discover how artificial intelligence is reshaping the business landscape and what companies need to know to stay competitive in the AI-driven economy.',
    image: 'artificial intelligence business',
    category: 'AI & Machine Learning',
    author: 'Sarah Chen',
    date: 'January 15, 2026',
    readTime: '8 min read',
    gradient: 'from-[#0066ff]/20 to-[#00d4ff]/20'
  };

  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and architecture patterns for creating maintainable React apps at scale.',
      image: 'react development code',
      category: 'Web Development',
      author: 'Michael Torres',
      date: 'January 12, 2026',
      readTime: '6 min read',
      gradient: 'from-[#00d4ff]/20 to-[#00ffcc]/20'
    },
    {
      title: 'Mobile-First Design Principles',
      excerpt: 'Essential guidelines for creating exceptional mobile user experiences.',
      image: 'mobile app design',
      category: 'Mobile Apps',
      author: 'Emily Zhang',
      date: 'January 10, 2026',
      readTime: '5 min read',
      gradient: 'from-[#7c3aed]/20 to-[#00d4ff]/20'
    },
    {
      title: 'The Art of Minimalist UI Design',
      excerpt: 'How to create clean, beautiful interfaces that users love.',
      image: 'minimalist design ui',
      category: 'Design',
      author: 'Alex Johnson',
      date: 'January 8, 2026',
      readTime: '7 min read',
      gradient: 'from-[#14b8a6]/20 to-[#00ffcc]/20'
    },
    {
      title: 'Digital Transformation Success Stories',
      excerpt: 'Real-world case studies of companies that successfully digitized their operations.',
      image: 'digital transformation business',
      category: 'Business',
      author: 'David Kim',
      date: 'January 5, 2026',
      readTime: '10 min read',
      gradient: 'from-[#0066ff]/20 to-[#7c3aed]/20'
    },
    {
      title: 'Natural Language Processing Explained',
      excerpt: 'A beginner-friendly guide to understanding NLP and its applications.',
      image: 'natural language processing',
      category: 'AI & Machine Learning',
      author: 'Lisa Martinez',
      date: 'January 3, 2026',
      readTime: '9 min read',
      gradient: 'from-[#7c3aed]/20 to-[#0066ff]/20'
    },
    {
      title: 'Progressive Web Apps: The Future',
      excerpt: 'Why PWAs are becoming the go-to solution for modern web development.',
      image: 'progressive web app',
      category: 'Web Development',
      author: 'James Wilson',
      date: 'December 30, 2025',
      readTime: '6 min read',
      gradient: 'from-[#00ffcc]/20 to-[#14b8a6]/20'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Insights, tutorials, and industry trends from the Hikzen Labs team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card glass-hover overflow-hidden group cursor-pointer"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className={`relative h-80 lg:h-auto bg-gradient-to-br ${featuredPost.gradient} overflow-hidden`}>
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/1200x800/?${encodeURIComponent(featuredPost.image)}`}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Featured
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-sm text-[#0066ff] mb-3">{featuredPost.category}</div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-foreground/70 mb-6 text-lg">{featuredPost.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 text-[#0066ff] hover:text-[#00d4ff] transition-colors font-medium">
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
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

      {/* Blog Posts Grid */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-hover overflow-hidden group cursor-pointer"
              >
                <div className={`relative h-52 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/800x600/?${encodeURIComponent(post.image)}`}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-[#0066ff] mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#0066ff] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-foreground/70 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-foreground/70" />
                    <span className="text-sm text-foreground/70">{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest articles, insights, and tech news 
              delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
