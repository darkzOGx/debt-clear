import React, { useRef } from 'react';
import HeroSection from '../components/hero/HeroSection';
import DebtCalculator from '../components/calculator/DebtCalculator';
import ServicesSection from '../components/services/ServicesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import BlogSection from '../components/blog/BlogSection';
import ConsultationForm from '../components/consultation/ConsultationForm';

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
      <div id="consultation" ref={consultationRef}>
        <ConsultationForm />
      </div>


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

              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                  Orange County Services
                </div>
                <div className="grid grid-cols-6 gap-2">
                  <div className="space-y-1">
                    <a href="/debt-settlement-anaheim" className="block text-neutral-400 hover:text-white transition-colors">
                      Anaheim
                    </a>
                    <a href="/debt-settlement-santa-ana" className="block text-neutral-400 hover:text-white transition-colors">
                      Santa Ana
                    </a>
                    <a href="/debt-settlement-irvine" className="block text-neutral-400 hover:text-white transition-colors">
                      Irvine
                    </a>
                  </div>
                  <div className="space-y-1">
                    <a href="/debt-settlement-huntington-beach" className="block text-neutral-400 hover:text-white transition-colors">
                      Huntington Beach
                    </a>
                    <a href="/debt-settlement-garden-grove" className="block text-neutral-400 hover:text-white transition-colors">
                      Garden Grove
                    </a>
                    <a href="/debt-settlement-fullerton" className="block text-neutral-400 hover:text-white transition-colors">
                      Fullerton
                    </a>
                  </div>
                  <div className="space-y-1">
                    <a href="/debt-settlement-orange" className="block text-neutral-400 hover:text-white transition-colors">
                      Orange
                    </a>
                    <a href="/debt-settlement-costa-mesa" className="block text-neutral-400 hover:text-white transition-colors">
                      Costa Mesa
                    </a>
                    <a href="/debt-settlement-mission-viejo" className="block text-neutral-400 hover:text-white transition-colors">
                      Mission Viejo
                    </a>
                  </div>
                  <div className="space-y-1">
                    <a href="/debt-settlement-westminster" className="block text-neutral-400 hover:text-white transition-colors">
                      Westminster
                    </a>
                    <a href="/debt-settlement-newport-beach" className="block text-neutral-400 hover:text-white transition-colors">
                      Newport Beach
                    </a>
                    <a href="/debt-settlement-fountain-valley" className="block text-neutral-400 hover:text-white transition-colors">
                      Fountain Valley
                    </a>
                  </div>
                  <div className="space-y-1">
                    <a href="/debt-settlement-laguna-beach" className="block text-neutral-400 hover:text-white transition-colors">
                      Laguna Beach
                    </a>
                    <a href="/debt-settlement-yorba-linda" className="block text-neutral-400 hover:text-white transition-colors">
                      Yorba Linda
                    </a>
                    <a href="/debt-settlement-dana-point" className="block text-neutral-400 hover:text-white transition-colors">
                      Dana Point
                    </a>
                  </div>
                  <div className="space-y-1">
                    <a href="/debt-settlement-laguna-niguel" className="block text-neutral-400 hover:text-white transition-colors">
                      Laguna Niguel
                    </a>
                    <a href="/debt-settlement-seal-beach" className="block text-neutral-400 hover:text-white transition-colors">
                      Seal Beach
                    </a>
                    <a href="/debt-settlement-laguna-woods" className="block text-neutral-400 hover:text-white transition-colors">
                      Laguna Woods
                    </a>
                  </div>
                </div>
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
                © 2025 Debt Settlement Research Laboratory. All methodologies proprietary.
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