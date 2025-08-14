import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
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
                IRVINE DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Irvine, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Specialized debt relief for Irvine professionals. Our AI-driven approach helps tech workers, 
              healthcare professionals, and UCI employees reduce debt by up to 60% while protecting their credit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Irvine Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
              <div className="flex items-center gap-2 text-sm font-mono text-neutral-600">
                <Phone className="w-4 h-4" />
                <span>(949) 581-3965</span>
              </div>
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