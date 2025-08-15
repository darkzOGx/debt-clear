import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Mail } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function HuntingtonBeachDebtSettlement() {
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
                HUNTINGTON BEACH DEBT SETTLEMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Huntington Beach, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Premium debt relief services for Huntington Beach residents. Our AI-powered approach helps 
              coastal professionals and retirees reduce debt by up to 60% while protecting valuable assets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free HB Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Huntington Beach Market */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Huntington Beach <span className="font-mono">Market Profile</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Understanding the financial landscape of "Surf City USA"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$3.2M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Home Value
              </div>
              <p className="text-xs text-neutral-500">
                High property values create unique debt management strategies
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$89K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Higher income brackets require sophisticated debt solutions
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">34%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Age 55+ Population
              </div>
              <p className="text-xs text-neutral-500">
                Retirement-focused debt planning and asset protection services
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
              Debt Settlement for <span className="font-mono">Coastal Professionals</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Tailored solutions for Huntington Beach's unique demographic and financial profile
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Retirees & Pre-Retirees</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Fixed income debt optimization</li>
                <li>• Retirement account protection</li>
                <li>• Medicare supplement costs</li>
                <li>• Long-term care planning</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Protect your golden years from debt stress
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Business Professionals</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Executive compensation planning</li>
                <li>• Business credit optimization</li>
                <li>• Investment property debt</li>
                <li>• Stock option exercises</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Maintain professional reputation while eliminating debt
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Real Estate Investors</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Investment property negotiations</li>
                <li>• Construction loan settlements</li>
                <li>• Portfolio optimization</li>
                <li>• Short sale alternatives</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Strategic debt resolution for property portfolios
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Protection Focus */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                  ASSET PROTECTION
                </span>
              </div>
              
              <h2 className="text-4xl font-light text-black mb-8 leading-tight">
                Protecting Your
                <br />
                <span className="font-mono">Coastal Assets</span>
              </h2>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Huntington Beach residents often have significant assets that require careful protection 
                during debt settlement. Our strategies ensure you keep what matters most while eliminating debt.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Primary Residence Protection</h3>
                    <p className="text-sm text-neutral-600">
                      California homestead exemption maximizes protection for your Huntington Beach property
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Retirement Account Shielding</h3>
                    <p className="text-sm text-neutral-600">
                      ERISA protection for 401(k)s, IRAs, and pension plans during settlement negotiations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Investment Portfolio Strategy</h3>
                    <p className="text-sm text-neutral-600">
                      Strategic liquidation planning to minimize tax implications and preserve growth assets
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Huntington Beach</span> Client Results
              </h3>
              
              <div className="space-y-8">
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Debt Eliminated</span>
                    <span className="text-2xl font-mono text-black">$127K</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Home Equity Preserved</span>
                    <span className="text-lg font-mono text-black">$890K</span>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Retired couple eliminated business debt while protecting beachfront property
                  </p>
                </div>
                
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Settlement Savings</span>
                    <span className="text-2xl font-mono text-black">58%</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Timeline</span>
                    <span className="text-lg font-mono text-black">14 Months</span>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Real estate professional resolved investment property debt complications
                  </p>
                </div>
                
                <div>
                  <div className="text-sm font-mono text-neutral-500 mb-4">Average Results:</div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-mono text-black">54%</div>
                      <div className="text-xs text-neutral-600">Debt Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-black">16 Mo</div>
                      <div className="text-xs text-neutral-600">Completion Time</div>
                    </div>
                  </div>
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
            Ready to Protect Your <span className="font-mono">Coastal Lifestyle?</span>
          </h2>
          
          <p className="text-neutral-300 mb-8 text-lg">
            Join Huntington Beach professionals who've eliminated debt while preserving their assets
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
      <div ref={consultationRef}>
        <ConsultationForm />
      </div>
    </div>
  );
}