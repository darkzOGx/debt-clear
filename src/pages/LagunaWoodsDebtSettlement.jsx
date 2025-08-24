import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function LagunaWoodsDebtSettlement() {
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
                LAGUNA WOODS DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Laguna Woods, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Specialized debt relief for Laguna Woods' senior community. Our AI-powered approach helps 
              retirees and seniors reduce debt by up to 60% while protecting retirement assets and fixed incomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-5 text-base font-mono uppercase tracking-wide h-auto"
              >
                Free Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/blog"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow border border-white text-white px-8 py-5 hover:bg-white hover:text-black text-base font-mono uppercase tracking-wide h-auto"
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
              Laguna Woods <span className="font-mono">Senior Community</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Specialized debt solutions for America's first age-restricted city
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">16K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Senior Residents
              </div>
              <p className="text-xs text-neutral-500">
                Age-focused debt strategies for 55+ community
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$67K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Fixed Income
              </div>
              <p className="text-xs text-neutral-500">
                Retirement-focused debt management solutions
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">78</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Average Age
              </div>
              <p className="text-xs text-neutral-500">
                Senior-specific financial protection services
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
              Senior Debt Solutions for <span className="font-mono">Laguna Woods</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Protecting retirement savings and fixed incomes while eliminating debt
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Medical Debt Relief</h3>
                  <p className="text-neutral-600 mb-4">
                    Healthcare expenses often burden seniors on fixed incomes. We negotiate 
                    medical debt while protecting Medicare benefits and supplemental coverage.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Medicare supplement debt</li>
                    <li>• Hospital bill negotiations</li>
                    <li>• Prescription debt relief</li>
                    <li>• Long-term care debt</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Retirement Asset Protection</h3>
                  <p className="text-neutral-600 mb-4">
                    Safeguard 401k, IRA, and pension benefits while settling credit card 
                    and unsecured debt accumulated during retirement years.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Social Security protection</li>
                    <li>• Pension benefit security</li>
                    <li>• IRA/401k preservation</li>
                    <li>• Fixed income optimization</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Estate Planning Debt</h3>
                  <p className="text-neutral-600 mb-4">
                    Clear debt before estate transfer to heirs, protecting family 
                    inheritance and preventing debt complications for beneficiaries.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Inheritance protection</li>
                    <li>• Estate debt clearing</li>
                    <li>• Beneficiary safeguarding</li>
                    <li>• Legacy preservation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Senior</span> Success Stories
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$63K</div>
                    <div className="text-sm text-neutral-600">reduced to $22K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Retired teacher eliminated medical debt while preserving pension benefits
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$47K</div>
                    <div className="text-sm text-neutral-600">reduced to $18K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Senior couple protected Social Security while settling credit card debt
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$89K</div>
                    <div className="text-sm text-neutral-600">reduced to $31K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Widowed resident cleared debt while maintaining inheritance for children
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-mono text-black">65%</div>
                    <div className="text-xs text-neutral-600">Average Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono text-black">11 Mo</div>
                    <div className="text-xs text-neutral-600">Average Timeline</div>
                  </div>
                </div>
              </div>
            </div>
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