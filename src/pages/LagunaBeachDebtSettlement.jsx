import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function LagunaBeachDebtSettlement() {
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
                LAGUNA BEACH DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Laguna Beach, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Boutique debt relief services for Laguna Beach's artistic and professional community. 
              Our AI-driven approach helps gallery owners, artists, and coastal professionals reduce debt by up to 60%.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Laguna Beach Debt Analysis
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

      {/* Laguna Beach Demographics */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Laguna Beach <span className="font-mono">Community Profile</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Understanding the unique financial needs of Laguna Beach's creative coastal community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$3.8M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Home Value
              </div>
              <p className="text-xs text-neutral-500">
                Premium property protection strategies for coastal estates
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$115K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Tailored solutions for artists and creative professionals
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">23K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Residents Served
              </div>
              <p className="text-xs text-neutral-500">
                Personalized service for Laguna Beach's tight-knit community
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
              Debt Solutions for <span className="font-mono">Laguna's Creative Class</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized programs for artists, gallery owners, and creative entrepreneurs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Artists & Creatives</h3>
                  <p className="text-neutral-600 mb-4">
                    Laguna Beach's vibrant arts community faces unique financial challenges from 
                    seasonal income fluctuations and gallery commission structures.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Studio equipment financing</li>
                    <li>• Gallery debt consolidation</li>
                    <li>• Seasonal income planning</li>
                    <li>• Art collection protection</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Gallery & Boutique Owners</h3>
                  <p className="text-neutral-600 mb-4">
                    Local business owners navigate high commercial rents and tourism-dependent 
                    revenue cycles requiring specialized debt strategies.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Commercial lease negotiations</li>
                    <li>• Inventory financing settlements</li>
                    <li>• Tourist season cash flow management</li>
                    <li>• Business credit restoration</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Hospitality Professionals</h3>
                  <p className="text-neutral-600 mb-4">
                    Hotel, restaurant, and tourism industry workers facing debt from 
                    pandemic impacts and seasonal employment variations.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Service industry debt relief</li>
                    <li>• Tip income verification strategies</li>
                    <li>• Off-season financial planning</li>
                    <li>• Emergency fund rebuilding</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Laguna Beach</span> Success Stories
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$89K</div>
                    <div className="text-sm text-neutral-600">reduced to $31K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Local artist eliminated 65% of studio equipment debt while maintaining workspace
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$156K</div>
                    <div className="text-sm text-neutral-600">reduced to $62K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Gallery owner restructured debt during off-season, preserved inventory
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$42K</div>
                    <div className="text-sm text-neutral-600">reduced to $17K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Restaurant manager resolved pandemic debt, maintained credit for future business
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-mono text-black">58%</div>
                    <div className="text-xs text-neutral-600">Average Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono text-black">14 Mo</div>
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