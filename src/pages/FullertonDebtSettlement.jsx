import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function FullertonDebtSettlement() {
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
                FULLERTON DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Fullerton, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Educational community debt relief for Fullerton residents. Our AI-powered approach helps 
              families, students, and professionals reduce debt by up to 60% while supporting educational goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Fullerton Debt Analysis
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

      {/* Community Profile */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Fullerton <span className="font-mono">Educational Community</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Debt solutions for Orange County's university town and educational hub
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">139K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Education-Focused Residents
              </div>
              <p className="text-xs text-neutral-500">
                University community debt management solutions
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$76K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Student and family financial strategies
              </p>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">40K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Cal State Fullerton Students
              </div>
              <p className="text-xs text-neutral-500">
                Student loan and education debt expertise
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
              Debt Solutions for <span className="font-mono">Fullerton's Students & Families</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Educational community financial solutions for university families and professionals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Student & Parent Debt</h3>
                  <p className="text-neutral-600 mb-4">
                    Cal State Fullerton families often struggle with educational expenses, 
                    student loans, and the high cost of supporting college-age children.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Student loan consolidation</li>
                    <li>• Parent education debt relief</li>
                    <li>• College expense settlements</li>
                    <li>• Graduate school financing</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">University Staff & Faculty</h3>
                  <p className="text-neutral-600 mb-4">
                    Academic professionals managing debt while working in educational 
                    institutions with unique benefit structures and retirement planning needs.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Faculty debt management</li>
                    <li>• Academic benefit protection</li>
                    <li>• Pension plan preservation</li>
                    <li>• Tenure track financial planning</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Young Professional Families</h3>
                  <p className="text-neutral-600 mb-4">
                    Recent graduates and young families in Fullerton managing career 
                    transitions, new home purchases, and growing family expenses.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• New graduate debt relief</li>
                    <li>• First-time homebuyer assistance</li>
                    <li>• Career transition planning</li>
                    <li>• Young family financial strategies</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Fullerton</span> Success Stories
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$84K</div>
                    <div className="text-sm text-neutral-600">reduced to $31K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    University professor eliminated student loan debt while preserving tenure benefits
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$52K</div>
                    <div className="text-sm text-neutral-600">reduced to $19K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Recent graduate settled education debt while starting career in Orange County
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$71K</div>
                    <div className="text-sm text-neutral-600">reduced to $27K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Parent family reduced college expense debt while supporting two students
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-mono text-black">62%</div>
                    <div className="text-xs text-neutral-600">Average Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono text-black">12 Mo</div>
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