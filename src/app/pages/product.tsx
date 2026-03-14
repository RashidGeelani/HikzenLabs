import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bot, 
  Brain, 
  Sparkles,
  Rocket,
  Lock,
  Mail,
  ArrowRight
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {

const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="mb-24 py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full glass-card mb-6">
              <span className="text-sm font-medium gradient-text">🚀 Innovation in Progress</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Revolutionary <span className="gradient-text">AI Products</span>
              <br />
              <span className="text-3xl md:text-4xl text-foreground/70">Coming Soon</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12">
              We're developing cutting-edge AI products that will transform how businesses operate. 
              Be the first to know when we launch.
            </p>

            {/* Email Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl mx-auto"
            >
              <div className="glass-card p-8 glow relative z-30">
                <h3 className="text-xl font-semibold mb-4">Get Early Access</h3>
                <p className="text-foreground/70 mb-6">
                  Join our waitlist and be among the first to access our AI products when they launch
                </p>
                <form
                  onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                    setLoading(true);
                    await fetch("https://script.google.com/macros/s/AKfycby8JvG6ori9vhDBo3_XPhyv7XdfxLXe9BXy9e9IyrAbwYiIRazsbf8zYiQaMfN2nfdN/exec", {
                      method: "POST",
                      mode: "no-cors",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        email: email
                      })
                    });

                    setLoading(false);
                    setSuccess(true);
                    form.reset();
                  }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >{loading ? "Joining..." : "Join Waitlist"}
                    <Mail className="w-4 h-4" />
                  </button>
                  
                </form>
                {success && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-green-400 font-medium"
                      >
                        ✅ You're on the waitlist! We'll notify you when we launch.
                      </motion.div>
                    )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We're <span className="gradient-text">Building</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A glimpse into the future of AI-powered business solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'AI Automation Suite',
                description: 'Intelligent tools that automate complex workflows and boost productivity by 10x',
                gradient: 'from-[#0066ff]/20 to-[#00d4ff]/20'
              },
              {
                icon: Brain,
                title: 'Smart Analytics Platform',
                description: 'Advanced data intelligence that transforms raw data into actionable business insights',
                gradient: 'from-[#7c3aed]/20 to-[#00d4ff]/20'
              },
              {
                icon: Sparkles,
                title: 'Enterprise AI Solutions',
                description: 'Custom AI products designed for enterprise-scale operations and security',
                gradient: 'from-[#00ffcc]/20 to-[#14b8a6]/20'
              }
            ].map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card glass-hover p-8 text-center"
                >
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${product.gradient} mb-6`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-foreground/70">{product.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Wait For Our Products */}
      <section className="mb-24 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Join Our Waitlist</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                title: 'Early Access',
                description: 'Be among the first to use our revolutionary AI products'
              },
              {
                icon: Sparkles,
                title: 'Special Pricing',
                description: 'Exclusive launch discounts for early adopters'
              },
              {
                icon: Lock,
                title: 'Beta Testing',
                description: 'Opportunity to shape the products with your feedback'
              },
              {
                icon: Brain,
                title: 'Priority Support',
                description: 'Premium support and onboarding assistance'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 mb-4">
                    <Icon className="w-6 h-6 text-[#0066ff]" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Progress */}
      <section className="mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center glow">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 mb-6">
              <Rocket className="w-12 h-12 text-[#0066ff]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Products in <span className="gradient-text">Active Development</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Our team is working around the clock to bring you the most advanced AI solutions. 
              Expected launch: Q3 2026
            </p>
            
            {/* Progress Indicator */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-foreground/70 mb-2">
                <span>Development Progress</span>
                <span>65%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { label: 'Prototypes', value: '8+' },
                { label: 'Beta Testers', value: '500+' },
                { label: 'Features', value: '50+' }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Need Custom Solutions Now? */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Can't Wait? <span className="gradient-text">We Can Help</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              While our products are in development, we offer custom AI development services 
              to build tailored solutions for your business right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300"
              >
                Discuss Custom Solutions
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 rounded-full glass-card glass-hover flex items-center justify-center gap-2"
              >
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
