import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function LagunaNiguelDebtSettlement() {
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
                LAGUNA NIGUEL DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Laguna Niguel, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Master-planned community debt relief for Laguna Niguel residents. Our AI-driven approach helps 
              families and professionals in gated communities reduce debt by up to 60% while maintaining privacy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Laguna Niguel Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/blog"
                className="border border-white text-white px-8 py-6 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Laguna Niguel Demographics */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Laguna Niguel <span className="font-mono">Community Profile</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Serving Orange County's premier master-planned community with sophisticated financial solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">65K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Population Served
              </div>
              <p className="text-xs text-neutral-500">
                Affluent master-planned community with high property values
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$1.4M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Home Price
              </div>
              <p className="text-xs text-neutral-500">
                Protect premium real estate investments while eliminating debt
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$125K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                High-income professionals requiring discrete financial services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">
              Debt Settlement for <span className="font-mono">Laguna Niguel</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Tailored solutions for master-planned community residents and luxury homeowners
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Executive Professionals</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Stock option debt management</li>
                <li>• Executive compensation planning</li>
                <li>• Business credit optimization</li>
                <li>• Asset protection strategies</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Luxury Homeowners</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Jumbo mortgage protection</li>
                <li>• Property tax optimization</li>
                <li>• Home equity preservation</li>
                <li>• HOA payment management</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Gated Community Families</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Private school debt solutions</li>
                <li>• Family trust protection</li>
                <li>• College funding preservation</li>
                <li>• Discretionary income optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                  LUXURY MARKET EXPERTISE
                </span>
              </div>
              
              <h2 className="text-4xl font-light text-black mb-8 leading-tight">
                Why Laguna Niguel
                <br />
                <span className="font-mono">Trusts VegaX AI</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Master-Planned Community Focus</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Deep understanding of Laguna Niguel's unique demographics and the financial 
                      needs of affluent families in planned communities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Discretion & Privacy</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Confidential service that protects your reputation in close-knit 
                      luxury communities and professional networks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Asset Protection Focus</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Specialized strategies to protect high-value assets, luxury homes, 
                      and investment portfolios during debt resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Laguna Niguel</span> Results
              </h3>
              
              <div className="space-y-8">
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Families Helped</span>
                    <span className="text-2xl font-mono text-black">156</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Total Debt Eliminated</span>
                    <span className="text-lg font-mono text-black">$12.4M</span>
                  </div>
                </div>
                
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Average Savings</span>
                    <span className="text-2xl font-mono text-black">58%</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Completion Time</span>
                    <span className="text-lg font-mono text-black">15 Months</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-mono text-neutral-500 mb-4">Recent Success:</div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Tech executive family eliminated $240K in combined debt (59% reduction) while 
                    keeping luxury home and maintaining children's private school enrollment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Research Session Form */}
      <div ref={consultationRef}>
        <ConsultationForm />
      </div>
    </div>
  );
}