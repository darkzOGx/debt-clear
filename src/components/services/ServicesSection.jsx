import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection({ onScrollToConsultation }) {
  const services = [
  {
    id: "01",
    title: "AI-Powered Debt Settlement",
    scope: "Credit Cards • Personal Loans • Medical Debt • Student Loans",
    methodology: "Advanced AI algorithms analyze creditor patterns and negotiate optimal settlements for Orange County residents",
    outcome: "Average 45-60% debt reduction in 24-48 months"
  },
  {
    id: "02",
    title: "Orange County Legal Protection",
    scope: "Collection Calls • Wage Garnishment • Court Actions",
    methodology: "Local California law expertise with immediate creditor contact cessation under FDCPA guidelines",
    outcome: "100% protection from creditor harassment"
  },
  {
    id: "03",
    title: "Credit Score Rehabilitation",
    scope: "Credit Repair • Score Monitoring • Financial Education",
    methodology: "Post-settlement credit rebuilding program designed for Orange County economic conditions",
    outcome: "Average 120-point credit score improvement"
  }];


  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              ORANGE COUNTY DEBT RELIEF SERVICES
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Why Choose VegaX AI for
            <br />
            <span className="font-mono">Orange County Debt Settlement</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl font-light">
            Unlike national debt settlement companies, we specialize in Orange County's unique economic landscape. 
            Our AI-powered approach combines local market knowledge with advanced technology for superior results.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) =>
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-neutral-200 bg-white">

              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="text-xs font-mono text-neutral-400">
                      {service.id}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-11">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-xl font-light text-black mb-3 leading-tight">
                          {service.title}
                        </h3>
                        <div className="text-sm font-mono text-neutral-600">
                          {service.scope}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-3">
                          Methodology
                        </div>
                        <div className="text-sm text-neutral-700 leading-relaxed">
                          {service.methodology}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-3">
                          Expected Outcome
                        </div>
                        <div className="text-sm font-mono text-black">
                          {service.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-neutral-200">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl font-light text-black mb-3">Schedule Personal Advisement

              </h3>
              <div className="text-sm font-mono text-neutral-600">
                CONFIDENTIAL • NO OBLIGATION • EVIDENCE-BASED ANALYSIS
              </div>
            </div>
            
            <Button
              onClick={onScrollToConsultation}
              className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-sm font-mono uppercase tracking-wide shrink-0">

              Schedule Session
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

}