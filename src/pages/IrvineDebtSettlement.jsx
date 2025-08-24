import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

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
                IRVINE DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Irvine, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              Specialized debt relief for Irvine professionals. Our AI-driven approach helps tech workers, 
              healthcare professionals, and UCI employees reduce debt by up to 60% while protecting their credit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Irvine Debt Analysis
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

      {/* Irvine-Specific Content */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Serving Irvine's <span className="font-mono">Professional Community</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Understanding the unique financial challenges of Irvine's high-income, high-cost lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$94K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Higher income means more complex debt situations requiring specialized solutions
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">67%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Tech/Healthcare Workers
              </div>
              <p className="text-xs text-neutral-500">
                Professional debt from student loans, equipment financing, and credit cards
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$2.3M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Average Home Price
              </div>
              <p className="text-xs text-neutral-500">
                High mortgage payments create cash flow challenges requiring debt optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Focus Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">
              Debt Settlement for <span className="font-mono">Irvine Professionals</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Tailored solutions that protect your career and credit while eliminating debt
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Tech Industry Workers</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Stock option debt management</li>
                <li>• Equipment financing settlements</li>
                <li>• Credit protection for security clearances</li>
                <li>• Student loan optimization</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">Healthcare Professionals</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Medical school debt consolidation</li>
                <li>• Practice startup loan settlements</li>
                <li>• Malpractice insurance financing</li>
                <li>• Board certification costs</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-black mb-4">UCI Faculty & Staff</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Research equipment financing</li>
                <li>• Conference and travel expenses</li>
                <li>• Sabbatical financial planning</li>
                <li>• Tenure track debt management</li>
              </ul>
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