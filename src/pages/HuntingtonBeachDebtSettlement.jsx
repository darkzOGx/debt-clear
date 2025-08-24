import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
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
                HUNTINGTON BEACH DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Huntington Beach, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Surf City debt relief solutions for Huntington Beach residents. Our AI-powered approach helps 
              families and professionals reduce debt by up to 55% while maintaining coastal lifestyle and property values.
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
              Huntington Beach <span className="font-mono">Community Profile</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Surf City debt solutions for coastal families and beach community professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">198K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Surf City Residents
              </div>
              <p className="text-xs text-neutral-500">
                Coastal lifestyle debt management solutions
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$89K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Beach community financial strategies
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">10 Mi</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Pacific Coastline
              </div>
              <p className="text-xs text-neutral-500">
                Preserving coastal property while eliminating debt
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
              Debt Solutions for <span className="font-mono">Surf City Residents</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized programs for beach community professionals and coastal families
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Tourism & Hospitality Workers</h3>
                  <p className="text-neutral-600 mb-4">
                    Seasonal employment in Huntington Beach's tourism industry creates unique 
                    financial challenges requiring specialized debt settlement strategies.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Hotel industry debt relief</li>
                    <li>• Restaurant worker settlements</li>
                    <li>• Seasonal income planning</li>
                    <li>• Tourism job protection</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Coastal Property Owners</h3>
                  <p className="text-neutral-600 mb-4">
                    High property values and coastal living costs require strategic debt 
                    management to preserve beach community lifestyle and real estate investments.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Beachfront property protection</li>
                    <li>• Coastal lifestyle preservation</li>
                    <li>• Property tax debt relief</li>
                    <li>• Real estate equity protection</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Beach Business Owners</h3>
                  <p className="text-neutral-600 mb-4">
                    Local entrepreneurs and beach business owners facing debt from seasonal 
                    revenue fluctuations and coastal commercial real estate costs.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Surf shop debt consolidation</li>
                    <li>• Beach restaurant settlements</li>
                    <li>• Seasonal business planning</li>
                    <li>• Commercial lease negotiations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Surf City</span> Success Stories
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$76K</div>
                    <div className="text-sm text-neutral-600">reduced to $29K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Beach restaurant owner eliminated business debt while preserving coastal location
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$54K</div>
                    <div className="text-sm text-neutral-600">reduced to $21K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Surf instructor family protected beachfront condo while settling credit cards
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$92K</div>
                    <div className="text-sm text-neutral-600">reduced to $37K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Hotel manager resolved pandemic debt while maintaining coastal employment
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-mono text-black">61%</div>
                    <div className="text-xs text-neutral-600">Average Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono text-black">13 Mo</div>
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