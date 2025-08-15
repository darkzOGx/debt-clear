import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, FileText, Calculator, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function TaxFormsDebtSettlementOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              TAX PLANNING
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            1099-C Tax Forms and Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Guide</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Tax Specialist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="text-xl text-neutral-700 leading-relaxed mb-12">
              Understanding Form 1099-C is crucial for Orange County residents completing debt settlement. This form reports canceled debt to the IRS and can create unexpected tax liability. Proper preparation and strategy can minimize the tax impact of your debt relief success.
            </div>

            {/* What is Form 1099-C */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Understanding Form 1099-C: Cancellation of Debt
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">What Triggers a 1099-C</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Debt settlement for less than full balance</li>
                    <li>• Canceled debt of $600 or more</li>
                    <li>• Foreclosure with debt forgiveness</li>
                    <li>• Student loan forgiveness</li>
                    <li>• Bankruptcy discharge of debt</li>
                    <li>• Credit card charge-offs after statute expires</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Key Form Information</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Box 2:</strong> Amount of debt canceled</li>
                    <li>• <strong>Box 4:</strong> Federal income tax withheld</li>
                    <li>• <strong>Box 5:</strong> Description of debt</li>
                    <li>• <strong>Box 6:</strong> Date debt was canceled</li>
                    <li>• <strong>Box 7:</strong> Fair market value of property</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-blue-200">
                <h4 className="font-semibold text-black mb-2">Orange County Example</h4>
                <p className="text-sm text-neutral-700">
                  If you settle $50,000 in credit card debt for $20,000, the creditor will likely issue a 1099-C for $30,000 in canceled debt. This $30,000 becomes taxable income unless you qualify for an exclusion.
                </p>
              </div>
            </motion.div>

            {/* Tax Implications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6" />
                Tax Impact Calculation for Orange County Residents
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Federal and California Tax Burden
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Canceled debt is generally taxed as ordinary income at your marginal tax rate:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Federal Tax Impact</h4>
                      <ul className="text-sm text-neutral-600 space-y-1">
                        <li>• 10% bracket: $3,000 tax on $30,000 canceled debt</li>
                        <li>• 22% bracket: $6,600 tax on $30,000 canceled debt</li>
                        <li>• 24% bracket: $7,200 tax on $30,000 canceled debt</li>
                        <li>• 32% bracket: $9,600 tax on $30,000 canceled debt</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">California State Tax</h4>
                      <ul className="text-sm text-neutral-600 space-y-1">
                        <li>• 1% bracket: $300 additional tax</li>
                        <li>• 6% bracket: $1,800 additional tax</li>
                        <li>• 9.3% bracket: $2,790 additional tax</li>
                        <li>• 13.3% bracket: $3,990 additional tax (high earners)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Orange County High Earner Alert</h3>
                  <p className="text-neutral-700 mb-3">
                    For Orange County residents with higher incomes, canceled debt can push you into higher tax brackets:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Combined federal and state rates can exceed 45%</li>
                    <li>• Mental Health Services Tax (1%) applies over $1 million income</li>
                    <li>• Net Investment Income Tax (3.8%) may apply</li>
                    <li>• Alternative Minimum Tax considerations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Exclusions and Exceptions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Key Exclusions from Taxable Income</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Insolvency Exclusion (Most Important)
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    If you were insolvent immediately before debt cancellation, you may exclude some or all canceled debt:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Insolvency Test:</strong> Total debts exceed total asset values</li>
                    <li>• <strong>Exclusion Limit:</strong> Amount by which you were insolvent</li>
                    <li>• <strong>Form Required:</strong> Form 982 must be filed with tax return</li>
                    <li>• <strong>Documentation:</strong> Detailed asset and liability listing required</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-white border border-green-200">
                    <h4 className="font-semibold text-black mb-2">Orange County Insolvency Example</h4>
                    <p className="text-sm text-neutral-700">
                      Assets: $200,000 (home equity, cars, savings)<br/>
                      Debts: $280,000 (mortgages, credit cards, loans)<br/>
                      Insolvency: $80,000<br/>
                      <strong>Result:</strong> Up to $80,000 of canceled debt can be excluded from income.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Qualified Principal Residence Debt</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County homeowners may exclude qualified mortgage debt forgiveness:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Debt used to buy, build, or improve principal residence</li>
                    <li>• Maximum exclusion: $2 million ($1M if married filing separately)</li>
                    <li>• Includes short sales and foreclosures</li>
                    <li>• Must file Form 982 to claim exclusion</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Other Important Exclusions</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Student Loan Forgiveness:</strong> Public Service Loan Forgiveness, Teacher forgiveness</li>
                    <li>• <strong>Gift or Bequest:</strong> Debt canceled as gift (rare)</li>
                    <li>• <strong>Deductible Debt:</strong> If payment would have been deductible</li>
                    <li>• <strong>Purchase Price Reduction:</strong> Return of property to seller</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Form 982 Filing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Filing Form 982: Reduction of Tax Attributes</h2>
              
              <div className="bg-orange-50 border border-orange-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Form 982 Requirements</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">When to File Form 982</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Claiming insolvency exclusion</li>
                      <li>• Excluding qualified principal residence debt</li>
                      <li>• Student loan discharge exclusion</li>
                      <li>• Other specific exclusions apply</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Key Form 982 Sections</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Part I: Excluded amounts</li>
                      <li>• Part II: Tax attribute reduction</li>
                      <li>• Insolvency worksheet</li>
                      <li>• Supporting documentation</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-orange-200">
                  <h4 className="font-semibold text-black mb-2">Tax Attribute Reduction Consequences</h4>
                  <p className="text-sm text-neutral-700 mb-2">
                    Using exclusions may require reducing tax benefits in future years:
                  </p>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• Net operating losses reduced first</li>
                    <li>• General business credits reduced</li>
                    <li>• Capital loss carryovers reduced</li>
                    <li>• Basis in assets reduced (can affect future sales)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Tax Planning Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Tax Planning Strategies for Orange County Residents</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Before Debt Settlement</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Calculate potential tax liability</li>
                    <li>• Document current insolvency status</li>
                    <li>• Consider timing of settlements across tax years</li>
                    <li>• Maximize deductions in settlement year</li>
                    <li>• Plan for quarterly estimated tax payments</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">During Settlement Year</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Track all settlement agreements and 1099-C forms</li>
                    <li>• Make quarterly estimated payments if needed</li>
                    <li>• Consider retirement account contributions</li>
                    <li>• Implement tax-loss harvesting strategies</li>
                    <li>• Document all qualifying exclusions</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Filing Season Preparation</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Gather all 1099-C forms by January 31</li>
                    <li>• Complete insolvency worksheets with professional help</li>
                    <li>• Prepare Form 982 if claiming exclusions</li>
                    <li>• Consider professional tax preparation</li>
                    <li>• Plan for payment of any tax owed</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Common 1099-C Tax Mistakes to Avoid</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Ignoring Form 1099-C</h4>
                    <p className="text-sm text-neutral-700">
                      The IRS receives a copy of every 1099-C. Failing to report it can result in penalties and interest.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Incorrect Insolvency Calculation</h4>
                    <p className="text-sm text-neutral-700">
                      Using fair market value instead of actual asset values, or missing debts can invalidate exclusions.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Missing Form 982 Filing</h4>
                    <p className="text-sm text-neutral-700">
                      Exclusions are not automatic. You must file Form 982 to claim them.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Not Planning for Tax Bill</h4>
                    <p className="text-sm text-neutral-700">
                      Failing to save for tax liability can create a new financial crisis after debt settlement.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="border-t border-neutral-200 pt-12 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-8">Related Tax Planning Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/tax-implications-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Tax Implications of Debt Settlement in Orange County
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Comprehensive guide to debt settlement tax consequences for Orange County residents.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/california-tax-implications-debt-relief-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    California State Tax Implications of Debt Relief
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Understanding California-specific tax consequences of debt settlement.
                  </p>
                </Link>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-black text-white p-8 text-center"
            >
              <h2 className="text-2xl font-light mb-4">
                Need Help with 1099-C Tax Planning?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Don't let unexpected tax bills undermine your debt settlement success. Get expert guidance on 1099-C forms and tax planning strategies for Orange County residents.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Tax Planning Help
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <div id="consultation">
        <ConsultationForm />
      </div>
    </div>
  );
}