import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, MessageSquare, Calendar } from 'lucide-react';

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@hikzenlabs.com',
      link: 'mailto:hello@hikzenlabs.com',
      gradient: 'from-[#0066ff]/20 to-[#00d4ff]/20'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890',
      gradient: 'from-[#00d4ff]/20 to-[#00ffcc]/20'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'San Francisco, CA',
      link: '#',
      gradient: 'from-[#7c3aed]/20 to-[#00d4ff]/20'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      value: '15+ Countries',
      link: '#',
      gradient: 'from-[#14b8a6]/20 to-[#00ffcc]/20'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
    { day: 'Sunday', hours: 'Closed' }
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear from you. 
              Fill out the form below or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card glass-hover p-6 text-center block"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-[#0066ff]" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground/70">{info.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-foreground/70">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interested In *</label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="backend">Backend Services</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="ai">AI Automation</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="seo">SEO Services</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
                      >
                        <option value="">Select budget</option>
                        <option value="<5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff] resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20">
                    <Calendar className="w-6 h-6 text-[#0066ff]" />
                  </div>
                  <h3 className="text-2xl font-bold">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-foreground/70">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-foreground/70">
                  * Emergency support available 24/7 for Enterprise clients
                </p>
              </div>

              {/* Quick Response */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#00d4ff]/20">
                    <MessageSquare className="w-6 h-6 text-[#7c3aed]" />
                  </div>
                  <h3 className="text-2xl font-bold">Quick Response</h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  We pride ourselves on quick response times. Here's what you can expect:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Email Inquiries</div>
                      <div className="text-sm text-foreground/70">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Phone Calls</div>
                      <div className="text-sm text-foreground/70">During business hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Project Quotes</div>
                      <div className="text-sm text-foreground/70">Within 48 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass-card p-2 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#0066ff] mx-auto mb-3" />
                    <div className="font-semibold">San Francisco, CA</div>
                    <div className="text-sm text-foreground/70">Remote-First Company</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-foreground/70 mb-8">
              Follow us on social media for the latest updates, insights, and tech trends
            </p>
            <div className="flex justify-center gap-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'GitHub'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full glass-card glass-hover flex items-center justify-center"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
