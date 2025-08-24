import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CheckCircle, Star, MapPin, Clock, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function OrangeDebtSettlement() {
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
                ORANGE DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Orange, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Comprehensive debt relief for Orange residents. Our AI-powered approach helps 
              families and professionals reduce debt by up to 55% while serving the 92856-92869 area.
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
              Orange <span className="font-mono">Community Profile</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Historic city debt solutions for Orange County's diverse community
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="text-2xl font-mono text-black mb-2">4.9★</div>
              <div className="text-xs text-neutral-600 font-mono">Client Rating</div>
            </div>
            
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="text-2xl font-mono text-black mb-2">$3.9M+</div>
              <div className="text-xs text-neutral-600 font-mono">Debt Resolved</div>
            </div>
            
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="text-2xl font-mono text-black mb-2">620+</div>
              <div className="text-xs text-neutral-600 font-mono">Clients Helped</div>
            </div>
            
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="text-2xl font-mono text-black mb-2">24/7</div>
              <div className="text-xs text-neutral-600 font-mono">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">
              Debt Solutions for <span className="font-mono">Orange Residents</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive financial solutions for Orange's historic community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Historic District Families</h3>
                  <p className="text-neutral-600 mb-4">
                    Orange's historic Old Towne district families managing the costs of 
                    preserving vintage homes while dealing with modern financial challenges.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Historic home renovation debt</li>
                    <li>• Property preservation costs</li>
                    <li>• Family legacy protection</li>
                    <li>• Community involvement expenses</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Small Business Owners</h3>
                  <p className="text-neutral-600 mb-4">
                    Local Orange business owners in retail, hospitality, and service 
                    industries facing debt from economic fluctuations and competition.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Retail business debt relief</li>
                    <li>• Restaurant settlement services</li>
                    <li>• Commercial property debt</li>
                    <li>• Inventory financing issues</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Working Families</h3>
                  <p className="text-neutral-600 mb-4">
                    Middle-class Orange families managing mortgage payments, education 
                    costs, and credit card debt in Orange County's competitive market.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Family credit card settlements</li>
                    <li>• Educational loan assistance</li>
                    <li>• Medical debt negotiation</li>
                    <li>• Home equity preservation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Orange</span> Success Stories
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$73K</div>
                    <div className="text-sm text-neutral-600">reduced to $28K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Historic district family preserved vintage home while eliminating credit debt
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$94K</div>
                    <div className="text-sm text-neutral-600">reduced to $36K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Restaurant owner resolved business debt while maintaining Old Towne location
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$58K</div>
                    <div className="text-sm text-neutral-600">reduced to $21K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Working family protected home equity while settling medical and credit card debt
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-mono text-black">64%</div>
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