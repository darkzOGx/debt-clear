import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function DanaPointDebtSettlement() {
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
                DANA POINT DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Dana Point, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Harbor-side debt relief for Dana Point residents. Our AI-powered solutions help marina owners, 
              marine professionals, and coastal families reduce debt by up to 60% while preserving their maritime lifestyle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Dana Point Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/blog"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow border border-white text-white px-8 py-6 hover:bg-white hover:text-black text-base font-mono uppercase tracking-wide"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dana Point Harbor Community */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Dana Point <span className="font-mono">Harbor Community</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Specialized debt solutions for the "Whale Capital of the West"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$2.1M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Home Value
              </div>
              <p className="text-xs text-neutral-500">
                Coastal property protection with harbor view preservation
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">33,107</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Population
              </div>
              <p className="text-xs text-neutral-500">
                Tight-knit maritime community support
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">2,500+</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Harbor Slips
              </div>
              <p className="text-xs text-neutral-500">
                Marine industry expertise and boat loan settlements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                  MARITIME DEBT EXPERTISE
                </span>
              </div>
              
              <h2 className="text-4xl font-light text-black mb-8 leading-tight">
                Why Dana Point Residents
                <br />
                <span className="font-mono">Trust Our Harbor Approach</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-black mb-2">Marine Industry Understanding</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We understand boat loans, marina fees, and seasonal marine business income fluctuations 
                    that affect Dana Point harbor families.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-black mb-2">Coastal Property Protection</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Specialized strategies to protect valuable Dana Point real estate while settling debt, 
                    including harbor-view properties and marine access rights.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-black mb-2">Tourism & Hospitality Debt</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Experience with seasonal business debt, charter boat financing, and hospitality industry 
                    challenges unique to Dana Point's tourism economy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                Dana Point Debt Settlement <span className="font-mono">Results</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-xl font-mono text-black">58%</div>
                  <div className="text-xs text-neutral-600">Average Debt Reduction</div>
                </div>
                <div>
                  <div className="text-xl font-mono text-black">19</div>
                  <div className="text-xs text-neutral-600">Average Months</div>
                </div>
                <div>
                  <div className="text-xl font-mono text-black">127</div>
                  <div className="text-xs text-neutral-600">Harbor Businesses Helped</div>
                </div>
                <div>
                  <div className="text-xl font-mono text-black">$4.2M</div>
                  <div className="text-xs text-neutral-600">Maritime Debt Eliminated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready to Start Your <span className="font-mono">Debt-Free Harbor Life?</span>
          </h2>
          
          <p className="text-neutral-300 mb-8 text-lg">
            Join Dana Point families who've eliminated debt while preserving their coastal lifestyle
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
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
}