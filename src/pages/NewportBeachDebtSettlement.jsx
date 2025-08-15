import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function NewportBeachDebtSettlement() {
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
                NEWPORT BEACH DEBT SETTLEMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Newport Beach, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Elite debt relief services for Newport Beach residents. Our AI-powered approach helps 
              executives, entrepreneurs, and retirees reduce debt by up to 65% while protecting wealth and assets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Newport Beach Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newport Beach Market Profile */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Newport Beach <span className="font-mono">Financial Landscape</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Tailored debt solutions for one of California's wealthiest communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$4.5M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Home Value
              </div>
              <p className="text-xs text-neutral-500">
                Ultra-high net worth strategies for complex financial portfolios
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$127K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Executive-level debt resolution and wealth preservation
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">86K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Population Served
              </div>
              <p className="text-xs text-neutral-500">
                Exclusive service for Newport Beach's affluent community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">
              Debt Settlement for <span className="font-mono">Newport Beach Elite</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Sophisticated debt resolution strategies for high-net-worth individuals and families
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Business Executives</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Executive compensation restructuring</li>
                <li>• Stock option debt management</li>
                <li>• Corporate credit optimization</li>
                <li>• Golden parachute protection</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Protect reputation while eliminating debt
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Entrepreneurs & Investors</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Startup debt consolidation</li>
                <li>• Investment property settlements</li>
                <li>• Business acquisition financing</li>
                <li>• Portfolio margin calls</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Strategic debt resolution for complex portfolios
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Affluent Retirees</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Estate preservation planning</li>
                <li>• Trust asset protection</li>
                <li>• Luxury property debt</li>
                <li>• Yacht and aircraft financing</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Preserve wealth for future generations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                  PROVEN RESULTS
                </span>
              </div>
              
              <h2 className="text-4xl font-light text-black mb-8 leading-tight">
                Newport Beach
                <br />
                <span className="font-mono">Success Metrics</span>
              </h2>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our AI-powered system delivers superior outcomes for Newport Beach's unique financial landscape, 
                with strategies tailored to protect substantial assets while eliminating debt.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Average Debt Reduction</span>
                  <span className="text-lg font-mono text-black">62%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Asset Protection Rate</span>
                  <span className="text-lg font-mono text-black">98%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Average Timeline</span>
                  <span className="text-lg font-mono text-black">12 Months</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Client Satisfaction</span>
                  <span className="text-lg font-mono text-black">4.9/5.0</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                Recent <span className="font-mono">Case Studies</span>
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-black pl-6">
                  <div className="text-2xl font-mono text-black mb-2">$485K → $174K</div>
                  <p className="text-sm text-neutral-600">
                    Tech executive eliminated 64% of debt while maintaining security clearance 
                    and protecting $3.2M in real estate holdings
                  </p>
                </div>
                
                <div className="border-l-4 border-black pl-6">
                  <div className="text-2xl font-mono text-black mb-2">$320K → $112K</div>
                  <p className="text-sm text-neutral-600">
                    Restaurant owner resolved business debt during expansion, 
                    preserved all locations and equipment
                  </p>
                </div>
                
                <div className="border-l-4 border-black pl-6">
                  <div className="text-2xl font-mono text-black mb-2">$750K → $285K</div>
                  <p className="text-sm text-neutral-600">
                    Retired couple protected retirement accounts and beach property 
                    while eliminating investment debt
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