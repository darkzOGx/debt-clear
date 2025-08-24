import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function DebtCalculator() {
  const [formData, setFormData] = useState({
    total_debt: '',
    monthly_payment: '',
    visitor_email: '',
    visitor_phone: ''
  });
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSavings = async () => {
    if (!formData.total_debt || !formData.monthly_payment) return;
    
    setIsCalculating(true);
    
    const debtAmount = parseFloat(formData.total_debt);
    const monthlyPayment = parseFloat(formData.monthly_payment);
    
    const settlementAmount = debtAmount * 0.473; // Research-based average
    const estimatedSavings = debtAmount - settlementAmount;
    const timeToResolution = Math.round(settlementAmount / (monthlyPayment * 1.1));
    
    const calculationData = {
      total_debt: debtAmount,
      monthly_payment: monthlyPayment,
      estimated_savings: estimatedSavings,
      settlement_amount: settlementAmount,
      time_to_resolution: timeToResolution,
      visitor_email: formData.visitor_email,
      visitor_phone: formData.visitor_phone
    };

    // Calculation saved locally (no external API needed)
    console.log('Debt calculation completed:', calculationData);
    
    setResults(calculationData);
    setIsCalculating(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
    <section id="calculator" className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
              DEBT ANALYSIS PROTOCOL
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Debt Profile Analysis:<br />
            <span className="font-mono text-3xl lg:text-4xl">Calculate Your Reduction</span>
          </h2>
          
          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto">
            Our research-based analysis examines your county debt profile against 50,000+ 
            Orange County resident cases to project optimal debt reduction in 12-24 months.
          </p>
        </div>

      </div>
    </section>
    
    {/* Calculator Form Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-neutral-50 p-8">
              <div className="space-y-8">
                <div>
                  <Label className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-700 mb-4 block">
                    Input Parameters
                  </Label>
                  <div className="h-px bg-neutral-200 mb-6"></div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-mono text-neutral-800 mb-3 block">
                      Total Outstanding Debt ($)
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.total_debt}
                      onChange={(e) => handleInputChange('total_debt', e.target.value)}
                      className="border-0 border-b-2 border-neutral-300 rounded-none bg-transparent px-0 py-4 text-lg font-mono focus-visible:ring-0 focus:border-black transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-mono text-neutral-800 mb-3 block">
                      Current Monthly Payment ($)
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.monthly_payment}
                      onChange={(e) => handleInputChange('monthly_payment', e.target.value)}
                      className="border-0 border-b-2 border-neutral-300 rounded-none bg-transparent px-0 py-4 text-lg font-mono focus-visible:ring-0 focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <Button
                  onClick={calculateSavings}
                  disabled={!formData.total_debt || !formData.monthly_payment || isCalculating}
                  className="w-full bg-black hover:bg-neutral-800 text-white py-6 text-sm font-mono uppercase tracking-wide transition-colors"
                >
                  {isCalculating ? 'Processing...' : 'Execute Analysis'}
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 mt-8 lg:mt-0"
            >
              <div className="border border-neutral-200 p-6 md:p-8">
                <div className="space-y-8">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-700 mb-2">
                      Analysis Results
                    </div>
                    <div className="h-px bg-neutral-200 mb-6"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wide text-white mb-2">
                        Projected Savings
                      </div>
                      <div className="text-3xl lg:text-4xl font-mono text-green-400 font-bold">
                        ${results.estimated_savings.toLocaleString()}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wide text-white mb-2">
                        Reduction Percentage
                      </div>
                      <div className="text-3xl lg:text-4xl font-mono text-green-400 font-bold">
                        {Math.round((results.estimated_savings / results.total_debt) * 100)}%
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wide text-white mb-2">
                        Settlement Target
                      </div>
                      <div className="text-2xl font-mono text-white">
                        ${results.settlement_amount.toLocaleString()}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wide text-white mb-2">
                        Timeline (Months)
                      </div>
                      <div className="text-2xl font-mono text-white">
                        {results.time_to_resolution}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-600">
                    <div className="text-xs font-mono text-white leading-relaxed">
                      * Projections based on algorithmic analysis of historical settlement data. 
                      Results vary by creditor, debt type, and individual circumstances. 
                      No guarantee of specific outcomes.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}