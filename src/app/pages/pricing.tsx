import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 499,
      annualPrice: 4990,
      popular: false,
      features: [
        { name: 'Basic Website (up to 5 pages)', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'SEO Optimization', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: '1 Month Support', included: true },
        { name: 'Mobile App Development', included: false },
        { name: 'Advanced Features', included: false },
        { name: 'Priority Support', included: false }
      ],
      gradient: 'from-[#0066ff]/20 to-[#00d4ff]/20'
    },
    {
      name: 'Professional',
      description: 'For growing businesses with advanced needs',
      monthlyPrice: 1499,
      annualPrice: 14990,
      popular: true,
      features: [
        { name: 'Custom Website (unlimited pages)', included: true },
        { name: 'Advanced Responsive Design', included: true },
        { name: 'SEO & Analytics', included: true },
        { name: 'CMS Integration', included: true },
        { name: '3 Months Support', included: true },
        { name: 'Basic Mobile App', included: true },
        { name: 'API Integration', included: true },
        { name: 'Priority Support', included: false }
      ],
      gradient: 'from-[#7c3aed]/20 to-[#00d4ff]/20'
    },
    {
      name: 'Enterprise',
      description: 'Full-scale solutions for large organizations',
      monthlyPrice: 4999,
      annualPrice: 49990,
      popular: false,
      features: [
        { name: 'Everything in Professional', included: true },
        { name: 'Custom Mobile Apps (iOS & Android)', included: true },
        { name: 'Advanced AI Integration', included: true },
        { name: 'Custom Backend Development', included: true },
        { name: '12 Months Support & Maintenance', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Priority 24/7 Support', included: true },
        { name: 'Custom SLA', included: true }
      ],
      gradient: 'from-[#00ffcc]/20 to-[#14b8a6]/20'
    }
  ];

  const addOns = [
    { name: 'Additional Page', price: 150 },
    { name: 'E-commerce Setup', price: 2500 },
    { name: 'Advanced SEO Package', price: 800 },
    { name: 'Social Media Integration', price: 500 },
    { name: 'Custom AI Chatbot', price: 3000 },
    { name: 'Performance Optimization', price: 1200 }
  ];

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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our commitment 
              to excellence and innovation.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex glass-card p-2 gap-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Annual
                <span className="ml-2 text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-[#0066ff] glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-sm font-medium flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6`}>
                  <div className="text-2xl font-bold">{plan.name[0]}</div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/70 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold gradient-text">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-foreground/70">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-foreground/70 mt-2">
                      ${(plan.annualPrice / 12).toFixed(0)}/month billed annually
                    </p>
                  )}
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full px-6 py-3 rounded-lg mb-8 transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="space-y-4">
                  <div className="font-semibold mb-4">What's included:</div>
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-foreground/30 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-foreground/30'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Optional <span className="gradient-text">Add-ons</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Enhance your package with additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card glass-hover p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold mb-1">{addon.name}</h3>
                  <p className="text-sm text-foreground/70">One-time fee</p>
                </div>
                <div className="text-2xl font-bold gradient-text">
                  ${addon.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enterprise Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a <span className="gradient-text">Custom Solution</span>?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              For large enterprises and complex projects, we offer fully customized solutions 
              tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300"
              >
                Contact Sales
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-4 rounded-full glass-card glass-hover flex items-center justify-center gap-2"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/70 mb-8">
              Have questions? We're here to help.
            </p>
            <button
              onClick={() => onNavigate('faq')}
              className="px-8 py-3 rounded-full glass-card glass-hover inline-flex items-center gap-2"
            >
              View All FAQs
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
