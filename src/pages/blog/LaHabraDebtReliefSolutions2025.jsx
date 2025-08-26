import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../../hooks/useCanonicalLink';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function LaHabraDebtReliefSolutions2025() {
  const consultationRef = useRef(null);
  
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://ocdebtcenter.com/blog/la-habra-debt-relief-solutions-2025');

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>La Habra Debt Relief Solutions 2025 | CA Experts</title>
        <meta name="description" content="Comprehensive debt relief solutions for La Habra, CA residents. Credit card debt, medical debt, and unsecured debt relief. Free consultation. Call (844) 541-9236" />
        <meta name="keywords" content="La Habra debt relief, La Habra debt settlement, California debt solutions, Orange County debt help, La Habra debt negotiation" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="La Habra Debt Relief Solutions 2025" />
        <meta property="og:description" content="Comprehensive debt relief solutions for La Habra, CA residents. Credit card debt, medical debt, and unsecured debt relief." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ocdebtcenter.com/blog/la-habra-debt-relief-solutions-2025" />
        <meta property="og:image" content="https://ocdebtcenter.com/og-la-habra-debt-relief.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Habra Debt Relief Solutions 2025" />
        <meta name="twitter:description" content="Comprehensive debt relief solutions for La Habra, CA residents. Credit card debt, medical debt, unsecured debt relief." />
        <meta name="twitter:image" content="https://ocdebtcenter.com/og-la-habra-debt-relief.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "OC Debt Center Debt Relief - La Habra",
            "image": "https://ocdebtcenter.com/logo.png",
            "description": "Comprehensive debt relief solutions for La Habra, California residents using AI-powered negotiation strategies.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "La Habra",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.9319,
              "longitude": -117.9461
            },
            "telephone": "(844) 541-9236",
            "serviceArea": "La Habra, California",
            "url": "https://ocdebtcenter.com/blog/la-habra-debt-relief-solutions-2025"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Location Badge */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
                LA HABRA DEBT RELIEF SOLUTIONS 2025
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Relief Solutions:<br />
              <span className="font-mono text-3xl lg:text-4xl">La Habra, CA 2025</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Comprehensive debt relief for La Habra residents. From credit card debt to medical bills, 
              our AI-powered solutions help eliminate unsecured debt up to 60% faster than traditional methods.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free La Habra Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/blog/brea-debt-settlement-services-2025"
                className="border border-white text-white px-8 py-6 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                Brea Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* La Habra-Specific Stats */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              La Habra Debt Relief <span className="font-mono">Results</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Proven results for La Habra families seeking debt freedom in 2025
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">58%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Average Debt Reduction
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">14</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Average Months to Complete
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">289</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                La Habra Families Helped
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">4.9</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Client Satisfaction Score
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Debt Relief Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Comprehensive <span className="font-mono">Debt Relief Solutions</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We provide tailored debt relief strategies for every financial situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-mono mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Credit Card Debt Relief</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Negotiate with major credit card companies to reduce balances by 40-70%. 
                Stop collection calls and create manageable payment plans.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Visa, MasterCard, American Express</li>
                <li>• Store credit cards and retail accounts</li>
                <li>• High-interest personal credit lines</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-mono mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Medical Debt Forgiveness</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Specialized programs for hospital bills, surgery costs, and ongoing medical expenses. 
                Often achieve 60-80% reductions on medical debt.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Hospital and emergency room bills</li>
                <li>• Specialist and surgery costs</li>
                <li>• Ongoing treatment expenses</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-mono mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Unsecured Debt Settlement</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Handle personal loans, business debt, and other unsecured obligations. 
                Comprehensive approach to total debt elimination.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Personal and signature loans</li>
                <li>• Business credit lines</li>
                <li>• Collection agency accounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                  LOCAL EXPERTISE
                </span>
              </div>
              
              <h2 className="text-4xl font-light text-black mb-8 leading-tight">
                Why La Habra Residents
                <br />
                <span className="font-mono">Choose Our Solutions</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Local Community Focus</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Understanding La Habra's diverse economy with median household income of $65,000. 
                      We serve manufacturing workers, retail employees, and small business owners.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Multi-Language Support</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Bilingual services for La Habra's diverse population. Spanish-speaking debt relief 
                      specialists understand cultural financial challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Advanced AI Technology</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Machine learning analyzes La Habra-specific debt patterns and creditor behaviors 
                      to optimize settlement strategies for maximum savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                La Habra <span className="font-mono">Debt Profile</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Credit Card Debt</span>
                  <span className="text-sm font-mono text-black">73%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Medical Debt</span>
                  <span className="text-sm font-mono text-black">41%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Personal Loans</span>
                  <span className="text-sm font-mono text-black">31%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Business Debt</span>
                  <span className="text-sm font-mono text-black">22%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Collection Accounts</span>
                  <span className="text-sm font-mono text-black">19%</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-xs font-mono text-neutral-500">
                  * Based on 289 La Habra clients served 2020-2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8 text-center">
            Related <span className="font-mono">Debt Relief Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/blog/cypress-debt-settlement-experts-2025"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors text-center"
            >
              <h3 className="font-semibold text-black mb-2">Cypress Debt Settlement</h3>
              <p className="text-sm text-neutral-600">Specialized debt settlement experts</p>
            </Link>
            
            <Link 
              to="/medical-debt-relief-hub"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors text-center"
            >
              <h3 className="font-semibold text-black mb-2">Medical Debt Relief Hub</h3>
              <p className="text-sm text-neutral-600">Comprehensive medical debt solutions</p>
            </Link>
            
            <Link 
              to="/debt-settlement-orange"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors text-center"
            >
              <h3 className="font-semibold text-black mb-2">Orange County Services</h3>
              <p className="text-sm text-neutral-600">Complete county-wide coverage</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready for <span className="font-mono">Debt Freedom?</span>
          </h2>
          
          <p className="text-neutral-300 mb-8 text-lg">
            Join La Habra families who've achieved financial freedom with our debt relief solutions
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToConsultation}
              className="bg-white text-black hover:bg-neutral-100 px-8 py-6 text-base font-mono uppercase tracking-wide"
            >
              Start Your Free Analysis
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Research Session Form */}
      <section id="consultation" className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div ref={consultationRef}>
            <ConsultationForm sectionId="la-habra-consultation" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}