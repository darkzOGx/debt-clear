import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
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
                LAGUNA NIGUEL DEBT SETTLEMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Laguna Niguel, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Master-planned community debt relief for Laguna Niguel residents. Our AI-driven approach helps 
              families and professionals in gated communities reduce debt by up to 60% while maintaining privacy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Laguna Niguel Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
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
              Serving one of Orange County's premier master-planned communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$1.1M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Home Value
              </div>
              <p className="text-xs text-neutral-500">
                Protect your investment in this exclusive community
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$103K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Professional-grade debt solutions for suburban families
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">65K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Population Served
              </div>
              <p className="text-xs text-neutral-500">
                Discreet service for Laguna Niguel's private communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community-Focused Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">
              Debt Solutions for <span className="font-mono">Gated Communities</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Private, professional debt resolution for Laguna Niguel's exclusive neighborhoods
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">HOA Residents</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• HOA fee protection strategies</li>
                <li>• Community property preservation</li>
                <li>• Gated community discretion</li>
                <li>• Neighbor confidentiality assured</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Maintain your standing in the community
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Young Professionals</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• First home debt management</li>
                <li>• Student loan optimization</li>
                <li>• Tech industry layoff support</li>
                <li>• Startup equity protection</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Build your future while resolving past debt
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Active Retirees</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Golf club membership protection</li>
                <li>• Travel lifestyle preservation</li>
                <li>• Fixed income optimization</li>
                <li>• Healthcare cost management</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Enjoy retirement without debt stress
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master-Planned Advantage */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
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
                Laguna Niguel's
                <br />
                <span className="font-mono">Trusted Partner</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Master-Planned Expertise</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Understanding of Laguna Niguel's unique community structure, from The Club 
                      at Rancho Niguel to Marina Hills and Bear Brand Ranch.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Family-Centered Solutions</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Protect your children's stability in Capistrano Unified schools while 
                      resolving financial challenges discreetly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Lifestyle Preservation</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Maintain your membership at El Niguel Country Club, access to community 
                      amenities, and family's quality of life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Laguna Niguel</span> Success Metrics
              </h3>
              
              <div className="space-y-8">
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Families Served</span>
                    <span className="text-2xl font-mono text-black">312</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Average Reduction</span>
                    <span className="text-lg font-mono text-black">57%</span>
                  </div>
                </div>
                
                <div className="border-b border-neutral-200 pb-6">
                  <div className="text-sm font-mono text-neutral-500 mb-3">Neighborhood Results:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Marina Hills</span>
                      <span className="font-mono text-black">47 families</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Ocean Ranch</span>
                      <span className="font-mono text-black">38 families</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Bear Brand Ranch</span>
                      <span className="font-mono text-black">29 families</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-mono text-neutral-500 mb-3">Recent Success:</div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Tech professional family eliminated $94K debt (61% reduction) while 
                    maintaining residence in gated community and private school enrollment.
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