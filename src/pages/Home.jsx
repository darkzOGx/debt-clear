import React, { useRef } from 'react';
import HeroSection from '../components/hero/HeroSection';
import DebtCalculator from '../components/calculator/DebtCalculator';
import ServicesSection from '../components/services/ServicesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import BlogSection from '../components/blog/BlogSection';
import ConsultationForm from '../components/consultation/ConsultationForm';
import AiChatbot from '../components/chatbot/AiChatbot';

export default function Home() {
  const calculatorRef = useRef(null);
  const consultationRef = useRef(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection 
        onScrollToCalculator={scrollToCalculator}
        onScrollToConsultation={scrollToConsultation}
      />

      {/* Debt Calculator */}
      <div ref={calculatorRef}>
        <DebtCalculator />
      </div>

      {/* Services */}
      <ServicesSection onScrollToConsultation={scrollToConsultation} />

      {/* Case Studies */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Consultation Form */}
      <div ref={consultationRef}>
        <ConsultationForm />
      </div>

      {/* AI Research Assistant */}
      <AiChatbot />

      {/* Newsletter Signup */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-light mb-4">
            Stay Updated on <span className="font-mono">Orange County</span> Debt Laws
          </h3>
          
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
            Get monthly insights on debt settlement regulations, consumer protection updates, 
            and success stories from Orange County.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-black text-sm font-mono"
            />
            <button className="px-6 py-3 bg-white text-black hover:bg-neutral-100 text-sm font-mono uppercase tracking-wide transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-neutral-500 mt-4">
            No spam. Unsubscribe anytime. Orange County debt relief updates only.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-white"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
                  Debt Settlement Research Laboratory
                </span>
              </div>
              
              <h3 className="text-2xl font-light mb-6 leading-tight">
                Orange County
                <br />
                <span className="font-mono">Debt Settlement Specialists</span>
              </h3>
              
              <div className="text-sm text-neutral-400 leading-relaxed mb-6">
                Licensed debt settlement services serving Orange County residents with 
                AI-powered negotiation and local market expertise.
              </div>

              <div className="space-y-2 text-sm">
                <a href="/debt-settlement-anaheim" className="block text-neutral-400 hover:text-white transition-colors">
                  Debt Settlement Anaheim
                </a>
                <a href="/debt-settlement-irvine" className="block text-neutral-400 hover:text-white transition-colors">
                  Debt Settlement Irvine
                </a>
                <a href="/debt-settlement-santa-ana" className="block text-neutral-400 hover:text-white transition-colors">
                  Debt Settlement Santa Ana
                </a>
                <a href="/debt-settlement-huntington-beach" className="block text-neutral-400 hover:text-white transition-colors">
                  Debt Settlement Huntington Beach
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                    Orange County Results
                  </div>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <div>2,847+ OC Families Helped</div>
                    <div>$127M+ Debt Eliminated</div>
                    <div>52% Average Reduction</div>
                    <div>18 Months Average Timeline</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                    Certifications
                  </div>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <div>A+ BBB Rating</div>
                    <div>IAPDA Certified</div>
                    <div>Licensed & Bonded</div>
                    <div>ISO 27001 Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="text-xs font-mono text-neutral-500">
                © 2024 Debt Settlement Research Laboratory. All methodologies proprietary.
              </div>
              <div className="text-xs font-mono text-neutral-500">
                CONFIDENTIAL • EVIDENCE-BASED • PERFORMANCE-GUARANTEED
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}