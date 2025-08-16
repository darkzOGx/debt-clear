import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';
import CityPageSEO from '../components/seo/CityPageSEO';

export default function IrvineDebtSettlement() {
  const consultationRef = useRef(null);

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <CityPageSEO 
        city="Irvine"
        shortTitle="Irvine Debt Settlement - Reduce Debt 40-60%"
        description="Expert debt settlement in Irvine, CA. Reduce credit card, medical, business debt 40-60%. Licensed & bonded. Free consultation. Serving Irvine residents since 2020."
        keywords="debt settlement irvine, debt relief irvine, irvine debt settlement company, debt negotiation irvine ca, credit card debt relief irvine"
        slug="debt-settlement-irvine"
        latitude={33.6846}
        longitude={-117.8265}
      />
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
                IRVINE DEBT SETTLEMENT & DEBT RELIEF SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              Irvine Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl">& Debt Relief</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Serving Irvine residents with AI-powered debt settlement and debt relief solutions. Our local debt settlement expertise 
              combined with advanced debt relief technology helps reduce your debt by up to 60% faster than traditional companies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Irvine Debt Settlement Analysis
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

      {/* Irvine-Specific Content */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Irvine Debt Settlement & <span className="font-mono">Debt Relief Results</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Real debt settlement and debt relief results for Irvine families struggling with debt
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
              <div className="text-4xl font-mono text-black mb-2">1,247</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Irvine Families Helped
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
                Why Irvine Residents
                <br />
                <span className="font-mono">Choose VegaX AI</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Local Market Understanding</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      We understand Irvine's cost of living, median income ($94,000), and common debt challenges 
                      facing tech workers, healthcare professionals, and UCI employees.
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
                      Deep knowledge of California debt collection laws, wage garnishment limits ($348/week), 
                      and consumer protection rights specific to Orange County.
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
                      negotiation strategies for each Irvine client's unique situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                Irvine Debt Market <span className="font-mono">Analysis 2025</span>
              </h3>
              
              {/* Debt Types */}
              <div className="space-y-6 mb-8">
                <h4 className="text-lg font-semibold text-black mb-4">Common Debt Types in Irvine</h4>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Credit Card Debt</span>
                  <span className="text-sm font-mono text-black">72%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Student Loans</span>
                  <span className="text-sm font-mono text-black">58%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Personal Loans</span>
                  <span className="text-sm font-mono text-black">45%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Medical Bills</span>
                  <span className="text-sm font-mono text-black">31%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-700">Business Debt</span>
                  <span className="text-sm font-mono text-black">27%</span>
                </div>
              </div>

              {/* Economic Indicators */}
              <div className="space-y-6 mb-8 pt-6 border-t border-neutral-200">
                <h4 className="text-lg font-semibold text-black mb-4">Irvine Economic Context</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white border border-neutral-200">
                    <div className="text-2xl font-mono text-black mb-1">$94,000</div>
                    <div className="text-xs font-mono text-neutral-600">Median Household Income</div>
                  </div>
                  <div className="text-center p-4 bg-white border border-neutral-200">
                    <div className="text-2xl font-mono text-black mb-1">$1.4M</div>
                    <div className="text-xs font-mono text-neutral-600">Median Home Price</div>
                  </div>
                  <div className="text-center p-4 bg-white border border-neutral-200">
                    <div className="text-2xl font-mono text-black mb-1">$47,500</div>
                    <div className="text-xs font-mono text-neutral-600">Avg Debt Per Household</div>
                  </div>
                  <div className="text-center p-4 bg-white border border-neutral-200">
                    <div className="text-2xl font-mono text-black mb-1">18.2%</div>
                    <div className="text-xs font-mono text-neutral-600">Housing Cost Burden</div>
                  </div>
                </div>
              </div>

              {/* Industry Breakdown */}
              <div className="space-y-4 pt-6 border-t border-neutral-200">
                <h4 className="text-lg font-semibold text-black mb-4">Top Industries (Debt Settlement Clients)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-700">Technology/Software</span>
                    <span className="text-sm font-mono text-black">34%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-700">Healthcare/Biotech</span>
                    <span className="text-sm font-mono text-black">23%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-700">Education (UCI)</span>
                    <span className="text-sm font-mono text-black">19%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-700">Finance/Real Estate</span>
                    <span className="text-sm font-mono text-black">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-700">Other</span>
                    <span className="text-sm font-mono text-black">9%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-xs font-mono text-neutral-500">
                  * Based on 1,247 Irvine clients served 2020-2024 | Data: US Census, CA Dept of Finance, MLS
                </p>
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
            Join hundreds of Irvine families who've eliminated their debt with VegaX AI
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