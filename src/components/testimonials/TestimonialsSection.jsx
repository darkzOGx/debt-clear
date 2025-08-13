import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const cases = [
    {
      id: "Case #4,721",
      profile: "Corporate Executive, Phoenix AZ",
      debt: "$43,000",
      settlement: "$17,000", 
      reduction: "60.5%",
      duration: "18 months",
      methodology: "Multi-creditor negotiation protocol with accelerated payment structure"
    },
    {
      id: "Case #7,892", 
      profile: "Small Business Owner, Dallas TX",
      debt: "$67,500",
      settlement: "$26,500",
      reduction: "60.7%", 
      duration: "24 months",
      methodology: "Business debt consolidation with creditor hardship documentation"
    },
    {
      id: "Case #3,156",
      profile: "Healthcare Worker, Miami FL", 
      debt: "$28,000",
      settlement: "$10,000",
      reduction: "64.3%",
      duration: "14 months", 
      methodology: "Medical debt settlement with provider negotiation and payment planning"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              DOCUMENTED CASE STUDIES
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Research Outcomes
            <br />
            <span className="font-mono">& Data Analysis</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl font-light">
            Representative cases from our settlement database demonstrating systematic 
            debt reduction across various demographic and debt profiles.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-neutral-200 bg-neutral-50"
            >
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Case ID */}
                  <div className="lg:col-span-2">
                    <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-2">
                      Research ID
                    </div>
                    <div className="text-sm font-mono text-black">
                      {case_.id}
                    </div>
                    <div className="text-xs text-neutral-600 mt-2">
                      {case_.profile}
                    </div>
                  </div>

                  {/* Debt Profile */}
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wide text-neutral-500 mb-2">
                          Original Debt
                        </div>
                        <div className="text-lg font-mono text-black">
                          {case_.debt}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wide text-neutral-500 mb-2">
                          Settlement
                        </div>
                        <div className="text-lg font-mono text-black">
                          {case_.settlement}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wide text-neutral-500 mb-2">
                          Reduction
                        </div>
                        <div className="text-2xl font-mono text-black">
                          {case_.reduction}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wide text-neutral-500 mb-2">
                          Duration
                        </div>
                        <div className="text-sm font-mono text-neutral-700">
                          {case_.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="lg:col-span-5">
                    <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-3">
                      Applied Methodology
                    </div>
                    <div className="text-sm text-neutral-700 leading-relaxed">
                      {case_.methodology}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-neutral-200"
        >
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-mono text-black mb-2">52.7%</div>
              <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                Average Reduction Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono text-black mb-2">24.3</div>
              <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                Months Avg Resolution
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono text-black mb-2">98.2%</div>
              <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                Successful Completion Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono text-black mb-2">50,000+</div>
              <div className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                Cases in Database
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}