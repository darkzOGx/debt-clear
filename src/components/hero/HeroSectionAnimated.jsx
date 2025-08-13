import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import '../../styles/animations.css';

export default function HeroSectionAnimated({ onScrollToCalculator, onScrollToConsultation }) {
  return (
    <section className="relative min-h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7">

            {/* Institutional Badge */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-up">
              <div className="w-2 h-2 bg-black pulse-glow"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                CERTIFIED DEBT SETTLEMENT INSTITUTE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-black mb-8 leading-[0.9] animate-fade-up animation-delay-100">
              Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl xl:text-6xl">Solutions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-neutral-700 max-w-2xl mb-12 leading-relaxed font-light animate-fade-up animation-delay-200">
              Evidence-based debt elimination protocols. Our research-driven approach has 
              systematically reduced client debt loads by an average of 52.7% across 50,000+ cases.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6 animate-fade-up animation-delay-300">
              <Button
                onClick={onScrollToCalculator}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide transition-all duration-200 hover-scale">

                Run Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
              <div className="text-xs font-mono text-neutral-500 tracking-wide hover-opacity cursor-pointer">
                NO UPFRONT COSTS
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5">

            <div className="bg-neutral-50 p-8 lg:p-12 hover-lift">
              <div className="space-y-8">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-2">
                    Research Metrics
                  </div>
                  <div className="h-px bg-neutral-200 mb-6"></div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="hover-scale cursor-pointer">
                    <div className="text-3xl lg:text-4xl font-mono text-black mb-2">
                      $2.1B
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                      Total Debt Resolved
                    </div>
                  </div>
                  <div className="hover-scale cursor-pointer">
                    <div className="text-3xl lg:text-4xl font-mono text-black mb-2">
                      52.7%
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                      Average Reduction
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="hover-scale cursor-pointer">
                    <div className="text-3xl lg:text-4xl font-mono text-black mb-2">
                      50K+
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                      Cases Analyzed
                    </div>
                  </div>
                  <div className="hover-scale cursor-pointer">
                    <div className="text-3xl lg:text-4xl font-mono text-black mb-2">
                      24.3
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                      Avg. Months Resolution
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <div className="w-2 h-2 bg-black pulse-glow"></div>
                    A+ BBB RATING • IAPDA CERTIFIED
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}