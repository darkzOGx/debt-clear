import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../../hooks/useCanonicalLink';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function BreaDebtSettlementServices2025() {
  const consultationRef = useRef(null);
  
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://orangecountydebtcenter.com/blog/brea-debt-settlement-services-2025');

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>Brea Debt Settlement Services 2025 | Local CA Experts</title>
        <meta name="description" content="Professional debt settlement services for Brea, CA residents. Local expertise, AI-powered negotiation, 50% debt reduction. Free consultation. Call (844) 541-9236" />
        <meta name="keywords" content="Brea debt settlement, Brea debt relief, California debt settlement, Orange County debt help, Brea debt negotiation" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Brea Debt Settlement Services 2025" />
        <meta property="og:description" content="Professional debt settlement services for Brea, CA residents. Local expertise, AI-powered negotiation, 50% debt reduction." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://orangecountydebtcenter.com/blog/brea-debt-settlement-services-2025" />
        <meta property="og:image" content="https://orangecountydebtcenter.com/og-brea-debt-settlement.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brea Debt Settlement Services 2025" />
        <meta name="twitter:description" content="Professional debt settlement services for Brea, CA residents. Local expertise, AI-powered negotiation." />
        <meta name="twitter:image" content="https://orangecountydebtcenter.com/og-brea-debt-settlement.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "OC Debt Center Debt Settlement - Brea",
            "image": "https://orangecountydebtcenter.com/logo.png",
            "description": "Professional debt settlement services for Brea, California residents using AI-powered negotiation strategies.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brea",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.9166,
              "longitude": -117.9000
            },
            "telephone": "(844) 541-9236",
            "serviceArea": "Brea, California",
            "url": "https://orangecountydebtcenter.com/blog/brea-debt-settlement-services-2025"
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
                BREA DEBT SETTLEMENT SERVICES 2025
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement Services:<br />
              <span className="font-mono text-3xl lg:text-4xl">Brea, CA 2025</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Serving Brea residents with cutting-edge AI-powered debt relief solutions. Our local expertise 
              combined with advanced technology helps reduce your debt by up to 60% faster than traditional companies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Brea Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/debt-settlement-orange"
                className="border border-white text-white px-8 py-6 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                Orange County Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brea-Specific Stats */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Brea Debt Settlement <span className="font-mono">Results</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Real results for Brea families struggling with debt in 2025
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">54%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Average Debt Reduction
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">16</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Average Months to Complete
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">342</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Brea Families Helped
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">4.8</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Client Satisfaction Score
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge Section */}
      <section className="py-24 bg-white">
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
                Why Brea Residents
                <br />
                <span className="font-mono">Choose OC Debt Center</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Local Market Understanding</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      We understand Brea's cost of living, median income ($72,000), and common debt challenges 
                      facing energy sector employees, retail workers, and local business owners.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">California Law Expertise</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Deep knowledge of California debt collection laws, wage garnishment limits, 
                      and consumer protection rights specific to Orange County residents.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">AI-Powered Efficiency</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Our proprietary AI analyzes 50,000+ California settlements to predict optimal 
                      negotiation strategies for each Brea client's unique situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                Common Debt Types in <span className="font-mono">Brea</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Credit Card Debt</span>
                  <span className="text-sm font-mono text-black">71%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Medical Bills</span>
                  <span className="text-sm font-mono text-black">39%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Personal Loans</span>
                  <span className="text-sm font-mono text-black">34%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Business Debt</span>
                  <span className="text-sm font-mono text-black">26%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Student Loans</span>
                  <span className="text-sm font-mono text-black">18%</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-xs font-mono text-neutral-500">
                  * Based on 342 Brea clients served 2020-2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Orange County Cities */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8 text-center">
            Orange County <span className="font-mono">Debt Settlement Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/debt-settlement-anaheim"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors text-center"
            >
              <h3 className="font-semibold text-black mb-2">Anaheim Debt Settlement</h3>
              <p className="text-sm text-neutral-600">847+ families helped</p>
            </Link>
            
            <Link 
              to="/debt-settlement-fullerton"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors text-center"
            >
              <h3 className="font-semibold text-black mb-2">Fullerton Debt Settlement</h3>
              <p className="text-sm text-neutral-600">623+ families helped</p>
            </Link>
            
            <Link 
              to="/blog/la-habra-debt-relief-solutions-2025"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors text-center"
            >
              <h3 className="font-semibold text-black mb-2">La Habra Debt Relief</h3>
              <p className="text-sm text-neutral-600">289+ families helped</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready to Start Your <span className="font-mono">Debt-Free Journey?</span>
          </h2>
          
          <p className="text-neutral-300 mb-8 text-lg">
            Join hundreds of Brea families who've eliminated their debt with OC Debt Center
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
            <ConsultationForm sectionId="brea-consultation" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}