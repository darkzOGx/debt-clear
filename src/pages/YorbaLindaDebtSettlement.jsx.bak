import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function YorbaLindaDebtSettlement() {
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
                YORBA LINDA DEBT SETTLEMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Yorba Linda, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Premium debt relief for Yorba Linda families and professionals. Our AI-powered solutions help 
              suburban families and business owners reduce debt by up to 60% while protecting their lifestyle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Yorba Linda Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/blog"
                className="border border-neutral-300 text-black px-8 py-6 hover:border-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yorba Linda Community Profile */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Yorba Linda <span className="font-mono">Market Overview</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Serving the "Land of Gracious Living" with sophisticated debt solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$1.2M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Home Value
              </div>
              <p className="text-xs text-neutral-500">
                Protect your suburban estate while eliminating debt
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$117K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Professional-level debt resolution for dual-income families
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">68K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Population Served
              </div>
              <p className="text-xs text-neutral-500">
                Personalized service for Yorba Linda's family-oriented community
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
              Debt Settlement for <span className="font-mono">Yorba Linda Families</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive solutions for suburban professionals and established families
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Professional Families</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Dual mortgage optimization</li>
                <li>• Private school debt management</li>
                <li>• Home equity protection</li>
                <li>• College funding preservation</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Maintain your family's lifestyle during debt resolution
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Small Business Owners</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Business debt separation</li>
                <li>• Equipment lease settlements</li>
                <li>• Commercial property protection</li>
                <li>• Cash flow optimization</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Keep your business running while resolving debt
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Established Residents</h3>
              <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                <li>• Retirement account shielding</li>
                <li>• Estate planning integration</li>
                <li>• Investment property strategies</li>
                <li>• Long-term care planning</li>
              </ul>
              <div className="text-xs font-mono text-neutral-500">
                Secure your retirement while eliminating debt burden
              </div>
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
                  LOCAL ADVANTAGE
                </span>
              </div>
              
              <h2 className="text-4xl font-light text-black mb-8 leading-tight">
                Why Yorba Linda
                <br />
                <span className="font-mono">Chooses VegaX AI</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Suburban Market Expertise</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Deep understanding of Yorba Linda's family-focused community, with strategies 
                      tailored for dual-income households and suburban property values.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">School District Protection</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Preserve your family's stability with strategies that protect your home 
                      and keep children in Placentia-Yorba Linda's excellent schools.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Professional Discretion</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Confidential service that protects your reputation in Yorba Linda's 
                      close-knit professional community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Yorba Linda</span> Results
              </h3>
              
              <div className="space-y-8">
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Families Helped</span>
                    <span className="text-2xl font-mono text-black">247</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Total Debt Eliminated</span>
                    <span className="text-lg font-mono text-black">$8.4M</span>
                  </div>
                </div>
                
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Average Savings</span>
                    <span className="text-2xl font-mono text-black">56%</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-neutral-600">Completion Time</span>
                    <span className="text-lg font-mono text-black">16 Months</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-mono text-neutral-500 mb-4">Recent Success:</div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Local business owner family eliminated $127K in debt (58% reduction) 
                    while keeping both properties and maintaining children's private school enrollment.
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