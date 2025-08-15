import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Shield, CreditCard, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function BuildingCreditDuringDebtSettlementOrangeCounty() {
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
              CREDIT & CONSUMER RIGHTS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Building Credit During Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Strategy Guide</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Credit Advisor</span>
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
              While debt settlement temporarily impacts credit scores, Orange County residents can simultaneously rebuild credit during the settlement process. Strategic credit building minimizes long-term damage and accelerates post-settlement financial recovery.
            </div>

            {/* Key Strategy Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-yellow-50 border border-yellow-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                Critical Balance: Settlement vs. Credit Building
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">What NOT to Do</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Don't take on new debt before settlement completion</li>
                    <li>• Avoid closing old credit cards unnecessarily</li>
                    <li>• Never apply for multiple credit accounts quickly</li>
                    <li>• Don't ignore bills not in settlement program</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Safe Credit Building Actions</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Maintain perfect payments on remaining accounts</li>
                    <li>• Keep existing credit cards open with zero balances</li>
                    <li>• Consider secured credit cards carefully</li>
                    <li>• Monitor credit reports for accuracy</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* During Settlement Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Credit Building Strategies During Active Settlement</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Protect Existing Good Standing Accounts
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Maintain perfect payment history on accounts not included in debt settlement:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Auto loans, mortgages, and student loans (continue paying)</li>
                    <li>• Utility bills and phone services</li>
                    <li>• Any credit cards you plan to keep</li>
                    <li>• Medical bills not included in settlement</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Strategic Use of Remaining Credit Cards
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    For cards not in settlement that remain open:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Keep balances at zero or very low (under 10% of limit)</li>
                    <li>• Make small purchases monthly to keep accounts active</li>
                    <li>• Pay off immediately to show responsible usage</li>
                    <li>• Don't close these accounts during settlement period</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Authorized User Strategy</h3>
                  <p className="text-neutral-700 mb-3">
                    Consider becoming an authorized user on a family member's account:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Choose someone with excellent payment history</li>
                    <li>• Account should have low utilization ratio</li>
                    <li>• Verify that card company reports authorized users</li>
                    <li>• Can provide positive payment history during settlement</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Secured Credit Card Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Secured Credit Cards: Timing and Selection</h2>
              
              <div className="bg-orange-50 border border-orange-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Optimal Timing for Orange County Residents</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Wait Until Settlement Completion If:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Settlement program is less than 12 months</li>
                      <li>• You have multiple accounts in settlement</li>
                      <li>• Income is limited for deposit requirements</li>
                      <li>• Credit utilization is already very high</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Consider During Settlement If:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Settlement program exceeds 18 months</li>
                      <li>• You have stable income for deposits</li>
                      <li>• Only 1-2 accounts in settlement</li>
                      <li>• Employment requires good credit in Orange County</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-orange-200">
                  <h4 className="font-semibold text-black mb-2">Recommended Secured Cards for Orange County</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Capital One Secured (no annual fee, graduation path)</li>
                    <li>• Discover it Secured (cash back rewards, FICO score tracking)</li>
                    <li>• Citi Secured (reports to all three bureaus)</li>
                    <li>• Wells Fargo Secured (local branch support in OC)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Credit Monitoring During Settlement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6" />
                Active Credit Monitoring and Dispute Strategy
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Monthly Monitoring Tasks</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Check all three credit reports for accuracy</li>
                    <li>• Verify that paid-off accounts reflect zero balances</li>
                    <li>• Dispute any inaccurate late payments immediately</li>
                    <li>• Monitor for identity theft or unauthorized accounts</li>
                    <li>• Track progress of accounts in settlement</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Dispute Strategy During Settlement</h3>
                  <p className="text-neutral-700 mb-3">
                    Focus disputes on clear inaccuracies while settlement is ongoing:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Wrong account balances or payment amounts</li>
                    <li>• Incorrect dates of first delinquency</li>
                    <li>• Duplicate reporting by original creditor and collector</li>
                    <li>• Accounts showing as open when they're closed</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Orange County Specific Considerations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Employment and Housing Considerations</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Employment Credit Checks</h3>
                  <p className="text-neutral-700 mb-3">
                    Many Orange County employers check credit for sensitive positions:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Financial services companies (prevalent in OC)</li>
                    <li>• Healthcare organizations</li>
                    <li>• Technology companies with security clearances</li>
                    <li>• Government positions</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200">
                    <p className="text-sm text-neutral-700">
                      <strong>Strategy:</strong> Maintain one positive tradeline throughout settlement to demonstrate current responsibility.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Housing Market Preparation</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County's competitive rental market often requires good credit:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Landlords typically require 650+ credit scores</li>
                    <li>• Luxury communities may require 700+</li>
                    <li>• Alternative: larger security deposits</li>
                    <li>• Co-signers may be necessary temporarily</li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200">
                    <p className="text-sm text-neutral-700">
                      <strong>Planning:</strong> Build 6+ months of positive payment history before major housing moves.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Common Mistakes to Avoid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Common Credit Building Mistakes During Settlement</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Opening Multiple New Accounts</h4>
                    <p className="text-sm text-neutral-700">
                      Multiple hard inquiries can drop your score further and signal financial distress to lenders.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Closing Old Credit Cards</h4>
                    <p className="text-sm text-neutral-700">
                      Reduces available credit and shortens average account age, both harmful to scores.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Ignoring Non-Settlement Bills</h4>
                    <p className="text-sm text-neutral-700">
                      Missing payments on utilities, phone, or other services can create new negative marks.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Maxing Out Remaining Credit</h4>
                    <p className="text-sm text-neutral-700">
                      High utilization on remaining cards compounds the negative impact of settlement accounts.
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Credit Building Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/credit-score-recovery-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Credit Score Recovery After Debt Settlement
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Complete guide to rebuilding credit scores after debt settlement completion.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/legal-rights-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Know Your Legal Rights During Debt Settlement
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Understanding your consumer protection rights throughout the settlement process.
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
                Protect Your Credit During Debt Settlement
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get expert guidance on maintaining and building credit while completing debt settlement. Minimize long-term damage and accelerate your financial recovery.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Credit Protection Plan
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