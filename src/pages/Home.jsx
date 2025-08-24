import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../hooks/useCanonicalLink';
import HeroSection from '../components/hero/HeroSection';
import DebtCalculator from '../components/calculator/DebtCalculator';
import ServicesSection from '../components/services/ServicesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import BlogSection from '../components/blog/BlogSection';
import ConsultationForm from '../components/consultation/ConsultationForm';
import NewsletterSignup from '../components/newsletter/NewsletterSignup';

export default function Home() {
  const calculatorRef = useRef(null);
  const consultationRef = useRef(null);
  
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://vegaxai.com/');

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
    <>
      <Helmet>
        <title>Orange County Debt Settlement - AI Relief | VegaX AI</title>
        <meta name="description" content="Orange County debt settlement & relief. Expert debt profile analysis, 50% reduction. County residents save in 12-24 months. Research-based. Call (502) 232-8511" />
        <meta name="keywords" content="Orange County debt settlement, debt relief, debt negotiation, AI debt settlement, California debt help, credit card debt relief" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Orange County Debt Settlement - AI Relief" />
        <meta property="og:description" content="Orange County debt settlement & relief. Credit card debt reduction, medical debt forgiveness, unsecured debt negotiation, bankruptcy alternatives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegaxai.com/" />
        <meta property="og:image" content="https://vegaxai.com/og-debt-settlement.jpg" />
        <meta property="og:site_name" content="VegaX AI Debt Settlement" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orange County Debt Settlement - AI Relief" />
        <meta name="twitter:description" content="Orange County debt settlement & relief. Credit card debt reduction, medical debt forgiveness, unsecured debt negotiation." />
        <meta name="twitter:image" content="https://vegaxai.com/og-debt-settlement.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VegaX AI Debt Settlement",
            "url": "https://vegaxai.com",
            "logo": "https://vegaxai.com/logo.png",
            "description": "Professional debt settlement services for Orange County residents using AI-powered negotiation strategies.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Orange County",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "(502) 232-8511",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://facebook.com/vegaxai",
              "https://twitter.com/vegaxai",
              "https://linkedin.com/company/vegaxai"
            ]
          })}
        </script>
      </Helmet>
      
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
        <ConsultationForm sectionId="home-consultation" />
      </div>


      {/* Newsletter Signup */}
      <NewsletterSignup />

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

            </div>
            
          </div>
          
        </div>
      </footer>
    </div>
    </>
  );
}