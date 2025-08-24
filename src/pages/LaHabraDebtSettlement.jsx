import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function LaHabraDebtSettlement() {
  const consultationRef = useRef(null);

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
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
                LA HABRA DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">La Habra, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Professional debt settlement services for La Habra residents. Our AI-powered approach helps 
              working families eliminate up to 60% of unsecured debt while maintaining stable employment and community ties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide h-auto"
              >
                Free La Habra Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/blog"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow border border-white text-white px-8 py-6 hover:bg-white hover:text-black text-base font-mono uppercase tracking-wide h-auto"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Profile */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              La Habra <span className="font-mono">Community Profile</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Debt relief solutions for La Habra's diverse working-class community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">63K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Total Residents
              </div>
              <p className="text-xs text-neutral-500">
                Diverse community with strong family connections
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$68K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Working-class families needing practical debt solutions
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">457</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Families Helped
              </div>
              <p className="text-xs text-neutral-500">
                Local residents who achieved debt freedom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                  COMMUNITY FOCUS
                </span>
              </div>
              
              <h2 className="text-4xl font-light text-black mb-8 leading-tight">
                Why La Habra Families<br />
                <span className="font-mono">Choose VegaX AI</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Bilingual Support Services</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Comprehensive debt relief services in both English and Spanish, 
                      ensuring clear communication throughout the settlement process for La Habra's diverse community.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Working Family Strategies</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Specialized approaches for dual-income households and shift workers, 
                      protecting stable employment while managing debt settlement timelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Manufacturing Industry Focus</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Understanding La Habra's manufacturing workforce, we provide debt relief 
                      strategies that account for union benefits and variable overtime income.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                Common Debt Types in <span className="font-mono">La Habra</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Credit Card Debt</span>
                  <span className="text-sm font-mono text-black">74%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Medical Bills</span>
                  <span className="text-sm font-mono text-black">46%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Auto Loans</span>
                  <span className="text-sm font-mono text-black">38%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Personal Loans</span>
                  <span className="text-sm font-mono text-black">31%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Payday Loans</span>
                  <span className="text-sm font-mono text-black">19%</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-xs font-mono text-neutral-500">
                  * Based on 457 La Habra clients served 2020-2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              La Habra <span className="font-mono">Settlement Results</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Proven outcomes for La Habra residents who chose professional debt settlement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">56%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Average Debt Reduction
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">15</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Average Months to Complete
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">457</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                La Habra Families Helped
              </div>
            </div>
            <div className="bg-white p-8 border border-neutral-200">
              <div className="text-4xl font-mono text-black mb-2">4.7</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Client Satisfaction Score
              </div>
            </div>
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
            Join hundreds of La Habra families who've achieved financial freedom with VegaX AI
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
  );
}