import React, { useRef, useEffect } from 'react';
import HeroSectionAnimated from '../components/hero/HeroSectionAnimated';
import DebtCalculator from '../components/calculator/DebtCalculator';
import ServicesSection from '../components/services/ServicesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import ConsultationForm from '../components/consultation/ConsultationForm';
import AiChatbot from '../components/chatbot/AiChatbot';
import FinancialAnimation from '../components/animations/FinancialAnimation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/animations.css';

export default function HomeAnimated() {
  const calculatorRef = useRef(null);
  const consultationRef = useRef(null);

  // Initialize scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal-on-scroll class
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
      {/* Hero Section with entrance animation */}
      <div className="animate-fade-in">
        <HeroSectionAnimated 
          onScrollToCalculator={scrollToCalculator}
          onScrollToConsultation={scrollToConsultation}
        />
      </div>
      
      {/* Financial Animation - Directly Below Hero */}
      <div className="reveal-on-scroll">
        <FinancialAnimation variant="charts" />
      </div>

      {/* Debt Calculator with reveal animation */}
      <div ref={calculatorRef} className="reveal-on-scroll">
        <DebtCalculator />
      </div>
      
      {/* Financial Animation - Below Execute Analysis Button */}
      <div className="reveal-on-scroll animation-delay-200">
        <FinancialAnimation variant="dataFlow" />
      </div>
      
      {/* Financial Animation - Above Research Outcomes & Data Analysis */}
      <div className="reveal-on-scroll">
        <FinancialAnimation variant="creditScore" />
      </div>

      {/* Services Section with reveal animation */}
      <div className="reveal-on-scroll">
        <ServicesSection onScrollToConsultation={scrollToConsultation} />
      </div>

      {/* Case Studies with reveal animation */}
      <div className="reveal-on-scroll animation-delay-100">
        <TestimonialsSection />
      </div>

      {/* Consultation Form with reveal animation */}
      <div ref={consultationRef} className="reveal-on-scroll">
        <ConsultationForm />
      </div>

      {/* AI Research Assistant */}
      <AiChatbot />

      {/* Footer with entrance animation */}
      <footer className="py-16 bg-black text-white border-t border-neutral-800 reveal-on-scroll">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-white pulse-glow"></div>
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
            
            <div className="lg:col-span-6 animate-fade-up animation-delay-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                    Research Metrics
                  </div>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <div className="hover-opacity cursor-pointer">50,000+ Cases Analyzed</div>
                    <div className="hover-opacity cursor-pointer">$2.1B+ Debt Resolved</div>
                    <div className="hover-opacity cursor-pointer">52.7% Average Reduction</div>
                    <div className="hover-opacity cursor-pointer">98.2% Success Rate</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                    Certifications
                  </div>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <div className="hover-opacity cursor-pointer">A+ BBB Rating</div>
                    <div className="hover-opacity cursor-pointer">IAPDA Certified</div>
                    <div className="hover-opacity cursor-pointer">Licensed & Bonded</div>
                    <div className="hover-opacity cursor-pointer">ISO 27001 Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-800 animate-fade-up animation-delay-300">
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