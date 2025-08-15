import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
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
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Location Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <MapPin className="w-4 h-4 text-black" />
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                DANA POINT DEBT SETTLEMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Dana Point, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Harbor-side debt relief for Dana Point residents. Our AI-powered solutions help marina owners, 
              marine professionals, and coastal families reduce debt by up to 60% while preserving their maritime lifestyle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Dana Point Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
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
              <div className="text-4xl font-mono text-black mb-2">$96K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Maritime professional debt resolution strategies
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">34K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Population Served
              </div>
              <p className="text-xs text-neutral-500">
                Personalized service for Dana Point's harbor community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maritime Industry Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">
              Debt Solutions for <span className="font-mono">Maritime Professionals</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized programs for Dana Point's unique harbor economy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Marina & Boat Owners</h3>
                  <p className="text-neutral-600 mb-4">
                    Dana Point Harbor hosts thousands of boats, with owners facing unique 
                    financing challenges from slip fees to vessel maintenance.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Boat loan restructuring</li>
                    <li>• Slip fee negotiations</li>
                    <li>• Marine equipment financing</li>
                    <li>• Yacht club debt management</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Charter & Tourism Businesses</h3>
                  <p className="text-neutral-600 mb-4">
                    Local charter operations and tourism businesses navigate seasonal 
                    revenue fluctuations and equipment financing needs.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Charter vessel debt consolidation</li>
                    <li>• Tourism business cash flow management</li>
                    <li>• Equipment lease settlements</li>
                    <li>• Seasonal income optimization</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Coastal Professionals</h3>
                  <p className="text-neutral-600 mb-4">
                    Marine industry workers, harbor employees, and coastal service 
                    providers with specialized financial needs.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Marine industry debt relief</li>
                    <li>• Coastal property protection</li>
                    <li>• Emergency fund rebuilding</li>
                    <li>• Retirement planning integration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Dana Point Harbor</span> Success Stories
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$234K</div>
                    <div className="text-sm text-neutral-600">reduced to $89K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Charter boat owner eliminated 62% of vessel debt while keeping business operational
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$87K</div>
                    <div className="text-sm text-neutral-600">reduced to $35K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Marina restaurant owner resolved pandemic debt, maintained harbor location
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$156K</div>
                    <div className="text-sm text-neutral-600">reduced to $67K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Marine equipment supplier consolidated debt during off-season transition
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="text-sm font-mono text-neutral-500 mb-4">Harbor Statistics:</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-mono text-black">127</div>
                    <div className="text-xs text-neutral-600">Harbor Businesses Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-mono text-black">$4.2M</div>
                    <div className="text-xs text-neutral-600">Maritime Debt Eliminated</div>
                  </div>
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