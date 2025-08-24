import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, FileText, DollarSign, AlertTriangle, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function TaxImplicationsDebtSettlementOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tax Implications of Debt Settlement Orange County | Complete Tax Guide</title>
        <meta name="description" content="Comprehensive guide to tax implications of debt settlement for Orange County residents. Understand federal and state tax consequences and planning strategies." />
        <meta name="keywords" content="tax implications debt settlement Orange County, debt settlement taxes California, 1099-C tax forms Orange County, debt forgiveness tax consequences" />
        <meta property="og:title" content="Tax Implications of Debt Settlement - Orange County Guide" />
        <meta property="og:description" content="Essential tax guidance for Orange County residents pursuing debt settlement including federal and state tax implications and planning strategies." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://debtclear.com/blog/tax-implications-debt-settlement-orange-county" />
      </Helmet>
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
              TAX & LEGAL
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Tax Implications of Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Guide 2025</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>13 min read</span>
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
              Debt settlement can provide significant relief for Orange County residents, but forgiven debt often creates taxable income. Understanding these tax implications is crucial for proper financial planning and avoiding unexpected tax bills during your debt relief process.
            </div>

            {/* Tax Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-red-50 border border-red-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Critical Tax Alert: Forgiven Debt = Taxable Income
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">The General Rule</h3>
                  <p className="text-neutral-700 mb-3">
                    Under IRS rules, forgiven debt of $600 or more is considered taxable income and must be reported on your tax return.
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• You'll receive Form 1099-C from creditors</li>
                    <li>• Forgiven amount added to your gross income</li>
                    <li>• Taxed at your ordinary income tax rate</li>
                    <li>• Could push you into higher tax bracket</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Orange County Example</h3>
                  <div className="bg-white border border-red-200 p-4">
                    <p className="text-sm text-neutral-700 mb-2">
                      <strong>Debt settled:</strong> $50,000 → Paid $15,000
                    </p>
                    <p className="text-sm text-neutral-700 mb-2">
                      <strong>Forgiven debt:</strong> $35,000 (taxable income)
                    </p>
                    <p className="text-sm text-neutral-700 mb-2">
                      <strong>Estimated tax (24% bracket):</strong> $8,400
                    </p>
                    <p className="text-sm text-red-600 font-semibold">
                      Plus California state tax: ~$3,500
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Exceptions and Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Key Exceptions to Taxable Debt Forgiveness
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">1. Insolvency Exception (Most Common)</h3>
                  <p className="text-neutral-700 mb-3">
                    If you were insolvent immediately before debt settlement, the forgiven debt may not be taxable.
                  </p>
                  <div className="bg-white border border-green-200 p-4">
                    <h4 className="font-semibold text-black mb-2">Insolvency Test:</h4>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• Total debts &gt; Total asset value = Insolvent</li>
                      <li>• Exclude forgiven debt amount up to insolvency</li>
                      <li>• Must file Form 982 with tax return</li>
                      <li>• Professional valuation recommended</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">2. Primary Residence Exception</h3>
                  <p className="text-neutral-700 mb-3">
                    Qualified principal residence debt forgiveness (until 2025) may be excluded from taxable income.
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Must be qualified principal residence debt</li>
                    <li>• Maximum exclusion of $2 million ($1M if married filing separately)</li>
                    <li>• Orange County homeowners often qualify</li>
                    <li>• Requires Form 982 filing</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">3. Student Loan Forgiveness</h3>
                  <p className="text-neutral-700 mb-3">
                    Certain student loan forgiveness programs are excluded from taxable income.
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Public Service Loan Forgiveness (PSLF)</li>
                    <li>• Income-driven repayment forgiveness (temporary exclusion)</li>
                    <li>• Teacher loan forgiveness programs</li>
                    <li>• Death or disability discharge</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* California-Specific Tax Issues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">California State Tax Considerations</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">State Tax Implications</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• California generally follows federal tax treatment</li>
                    <li>• High state income tax rates (up to 13.3%)</li>
                    <li>• Mental Health Services Tax (1% on income &gt;$1M)</li>
                    <li>• No special Orange County exemptions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Planning Strategies</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Time settlements across tax years</li>
                    <li>• Consider moving before settlement (if possible)</li>
                    <li>• Use insolvency exception for both federal and state</li>
                    <li>• Maximize deductions in settlement year</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-orange-50 border border-orange-200 p-6">
                <h4 className="font-semibold text-black mb-2">Orange County High Earner Alert</h4>
                <p className="text-neutral-700">
                  If debt settlement pushes your income above $1 million, you'll face California's highest tax bracket (13.3%) plus the Mental Health Services Tax, resulting in combined federal and state rates exceeding 50%.
                </p>
              </div>
            </motion.div>

            {/* Tax Planning Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6" />
                Strategic Tax Planning for Debt Settlement
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Timing Strategies</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Spread settlements across years:</strong> Avoid pushing into higher brackets</li>
                    <li>• <strong>Settle in low-income years:</strong> Job loss or reduced hours</li>
                    <li>• <strong>December vs January:</strong> Time 1099-C receipt strategically</li>
                    <li>• <strong>Coordinate with spouse:</strong> Filing jointly vs separately analysis</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Income Offset Strategies</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Maximize retirement contributions:</strong> 401(k), IRA, HSA</li>
                    <li>• <strong>Business expense deductions:</strong> If self-employed</li>
                    <li>• <strong>Charitable contributions:</strong> Itemize if beneficial</li>
                    <li>• <strong>Tax-loss harvesting:</strong> Realize investment losses</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Payment Planning</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Save for tax bill:</strong> Set aside 25-40% of forgiven amount</li>
                    <li>• <strong>Quarterly estimates:</strong> Avoid underpayment penalties</li>
                    <li>• <strong>Installment agreements:</strong> IRS and California payment plans</li>
                    <li>• <strong>Offer in compromise:</strong> If unable to pay tax debt</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Form 1099-C Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Understanding Form 1099-C</h2>
              
              <div className="bg-neutral-50 border border-neutral-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">What to Expect</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Timeline</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Creditors must issue by January 31</li>
                      <li>• You should receive by early February</li>
                      <li>• Copy sent to IRS and California FTB</li>
                      <li>• Must be included in tax return</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Key Information</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Box 2: Amount of debt forgiven</li>
                      <li>• Box 4: Federal income tax withheld</li>
                      <li>• Box 5: Description of debt</li>
                      <li>• Box 6: Date debt was canceled</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4">
                  <h4 className="font-semibold text-black mb-2">What If You Don't Receive Form 1099-C?</h4>
                  <p className="text-sm text-neutral-700">
                    You're still required to report forgiven debt as income, even without the form. Keep detailed records of all settlement agreements and payments for tax preparation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Professional Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">When to Seek Professional Tax Help</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="font-semibold text-black mb-3">High-Risk Situations</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Forgiven debt exceeding $25,000</li>
                    <li>• Multiple settlements in one year</li>
                    <li>• Business debt settlements</li>
                    <li>• Complex asset valuations needed</li>
                    <li>• Prior tax problems or liens</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Orange County Resources</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• CPAs specializing in debt settlement</li>
                    <li>• Enrolled Agents (IRS representation)</li>
                    <li>• Tax attorneys for complex cases</li>
                    <li>• VITA programs for low-income taxpayers</li>
                    <li>• Orange County Bar Association referrals</li>
                  </ul>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Tax and Legal Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/debt-settlement-attorney-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Working with Debt Settlement Attorneys
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Legal guidance for complex debt settlement cases in Orange County.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/debt-settlement-scams-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Avoiding Debt Settlement Scams
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Protect yourself from fraudulent debt settlement companies and practices.
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
                Need Help with Debt Settlement Tax Planning?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Don't let unexpected tax bills derail your debt relief success. Get expert guidance on tax implications and planning strategies for Orange County residents.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Tax Strategy Help
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