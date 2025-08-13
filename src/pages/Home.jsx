import React, { useRef } from 'react';
import HeroSection from '../components/hero/HeroSection';
import DebtCalculator from '../components/calculator/DebtCalculator';
import ServicesSection from '../components/services/ServicesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
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

      {/* Consultation Form */}
      <div ref={consultationRef}>
        <ConsultationForm />
      </div>

      {/* AI Research Assistant */}
      <AiChatbot />

      {/* Footer */}
      <footer className="py-16 bg-black text-white border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-white"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
                  Debt Settlement Research Laboratory
                </span>
              </div>
              
              <h3 className="text-2xl font-light mb-6 leading-tight">
                Evidence-Based Financial
                <br />
                <span className="font-mono">Recovery Solutions</span>
              </h3>
              
              <div className="text-sm text-neutral-400 leading-relaxed">
                Professional debt settlement services utilizing systematic research methodologies 
                and algorithmic creditor negotiation protocols.
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                    Research Metrics
                  </div>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <div>50,000+ Cases Analyzed</div>
                    <div>$2.1B+ Debt Resolved</div>
                    <div>52.7% Average Reduction</div>
                    <div>98.2% Success Rate</div>
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