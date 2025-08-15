import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedBanner from '@/components/banner/AnimatedBanner';

export default function HeroSection({ onScrollToCalculator, onScrollToConsultation }) {
  return (
    <section className="relative py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7">

            {/* Animated Banner */}
            <div className="mb-4 -mx-6 lg:-mx-8">
              <AnimatedBanner />
            </div>

            {/* Institutional Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                ORANGE COUNTY DEBT SETTLEMENT SPECIALISTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-black mb-6 leading-[0.9]">
              Orange County Debt
              <br />
              <span className="font-mono text-4xl lg:text-5xl xl:text-6xl">Settlement & Relief</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-neutral-700 max-w-2xl mb-8 leading-relaxed font-light">
              <strong>AI-powered debt reduction</strong> for Orange County residents. Expert debt profile analysis and research-based 
              strategies reduce county debt by 50% in 12-24 months. Licensed, bonded, and trusted by over 1,200+ county residents.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <Button
                onClick={onScrollToCalculator}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide transition-all duration-200">

                Run Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
              <div className="text-xs font-mono text-neutral-500 tracking-wide">
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

            <div className="bg-neutral-50 p-6 lg:p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-2">
                    Research Metrics
                  </div>
                  <div className="h-px bg-neutral-200 mb-6"></div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl lg:text-4xl font-mono text-black mb-2">
                      $2.1B
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                      Total Debt Resolved
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-mono text-black mb-2">
                      52.7%
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                      Average Reduction
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl lg:text-4xl font-mono text-black mb-2">
                      50K+
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                      Cases Analyzed
                    </div>
                  </div>
                  <div>
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
                    <div className="w-2 h-2 bg-black"></div>
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