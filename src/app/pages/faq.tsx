import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'General',
      icon: '🏢',
      questions: [
        {
          question: 'What services does Hikzen Labs offer?',
          answer: 'We offer comprehensive IT and AI solutions including web development, mobile app development, backend services, UI/UX design, digital marketing, SEO, maintenance and support, and AI automation. We also develop our own AI-powered products.'
        },
        {
          question: 'Where is Hikzen Labs located?',
          answer: 'While our headquarters is in San Francisco, CA, we operate as a remote-first company with team members across 15+ countries. This allows us to provide 24/7 support and serve clients globally.'
        },
        {
          question: 'What industries do you work with?',
          answer: 'We work with clients across various industries including fintech, healthcare, e-commerce, education, SaaS, and more. Our versatile team can adapt to any industry\'s specific needs and requirements.'
        }
      ]
    },
    {
      category: 'Services & Pricing',
      icon: '💰',
      questions: [
        {
          question: 'How much does a typical project cost?',
          answer: 'Project costs vary based on scope, complexity, and requirements. Our Starter package begins at $499/month, Professional at $1,499/month, and Enterprise at $4,999/month. We also offer custom pricing for unique projects. Contact us for a detailed quote.'
        },
        {
          question: 'Do you offer maintenance and support?',
          answer: 'Yes! All our packages include post-launch support. Starter includes 1 month, Professional includes 3 months, and Enterprise includes 12 months of support. We also offer ongoing maintenance contracts for long-term partnerships.'
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we\'ll help you transition smoothly.'
        }
      ]
    },
    {
      category: 'Development Process',
      icon: '⚙️',
      questions: [
        {
          question: 'What is your development process?',
          answer: 'We follow a proven 4-phase process: Discovery (understanding your needs), Planning (creating a detailed roadmap), Development (building with agile methodology), and Delivery (launch and ongoing support). We maintain transparent communication throughout.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Timeline depends on project complexity. A basic website takes 2-4 weeks, a mobile app 8-12 weeks, and enterprise solutions 3-6 months. We\'ll provide a detailed timeline during the planning phase.'
        },
        {
          question: 'Will I have input during development?',
          answer: 'Absolutely! We believe in collaborative development. You\'ll have regular check-ins, access to staging environments, and opportunities to provide feedback throughout the development process.'
        }
      ]
    },
    {
      category: 'AI & Technology',
      icon: '🤖',
      questions: [
        {
          question: 'What AI technologies do you work with?',
          answer: 'We specialize in machine learning, natural language processing (NLP), computer vision, predictive analytics, and chatbot development. We use frameworks like TensorFlow, PyTorch, and cutting-edge LLMs.'
        },
        {
          question: 'Can you integrate AI into my existing system?',
          answer: 'Yes! We can integrate AI capabilities into your existing infrastructure. Whether it\'s adding chatbots, automation, or analytics, we ensure seamless integration with minimal disruption.'
        },
        {
          question: 'Do you develop custom AI models?',
          answer: 'Yes, we develop custom AI models tailored to your specific business needs. We can train models on your data and deploy them for various applications including prediction, classification, and recommendation systems.'
        }
      ]
    },
    {
      category: 'Technical',
      icon: '💻',
      questions: [
        {
          question: 'What technologies and frameworks do you use?',
          answer: 'We use modern, industry-standard technologies including React, Next.js, React Native, Flutter, Node.js, Python, PostgreSQL, MongoDB, AWS, and more. We choose the best stack for each project\'s specific needs.'
        },
        {
          question: 'Do you provide source code?',
          answer: 'Yes! Upon project completion and final payment, you receive full ownership of the source code, including documentation and deployment instructions.'
        },
        {
          question: 'How do you ensure security?',
          answer: 'Security is our top priority. We follow industry best practices including encryption, secure authentication, regular security audits, GDPR compliance, and protection against common vulnerabilities like SQL injection and XSS.'
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const globalIndex = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

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
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 mb-6">
              <HelpCircle className="w-12 h-12 text-[#0066ff]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
              Find answers to common questions about our services, pricing, and processes
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={questionIndex}
                        className="glass-card overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="font-semibold text-lg pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 text-foreground/70 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-[#00d4ff]/5 to-[#7c3aed]/5"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 text-center glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. 
              Reach out and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 transition-all duration-300"
              >
                Contact Us
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-10 py-5 rounded-full glass-card glass-hover text-lg flex items-center justify-center gap-2"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Helpful <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-foreground/70">Explore more information about our services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'View Our Services', description: 'Explore our complete service offerings', page: 'services' },
              { title: 'Check Pricing', description: 'Find the perfect plan for your needs', page: 'pricing' },
              { title: 'Read Our Blog', description: 'Learn from our insights and tutorials', page: 'blog' }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-hover p-6 cursor-pointer"
                onClick={() => onNavigate(resource.page)}
              >
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-foreground/70 mb-4">{resource.description}</p>
                <div className="flex items-center gap-2 text-[#0066ff]">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
