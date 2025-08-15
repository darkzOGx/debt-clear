import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Shield, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function LegalRightsDebtSettlementOrangeCounty() {
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
              TAX & LEGAL
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Know Your Legal Rights:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Debt Settlement in Orange County</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>April 2, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Legal Advisor</span>
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
              Understanding your legal rights during debt settlement is crucial for Orange County residents facing financial hardship. Federal and California laws provide significant protections that can help you navigate the debt relief process safely and effectively.
            </div>

            {/* Core Legal Protections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Your Fundamental Debt Collection Rights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Fair Debt Collection Practices Act (FDCPA)</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Limits when collectors can contact you</li>
                    <li>• Prohibits harassment and abuse</li>
                    <li>• Requires debt validation upon request</li>
                    <li>• Right to dispute debts in writing</li>
                    <li>• Protection from false or misleading claims</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">California Consumer Protection Laws</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Rosenthal Fair Debt Collection Practices Act</li>
                    <li>• Extended protections beyond federal law</li>
                    <li>• Covers original creditors (not just collectors)</li>
                    <li>• Additional privacy protections</li>
                    <li>• Enhanced remedies for violations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Debt Validation Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Debt Validation: Your First Line of Defense</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    What You Can Demand
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Within 30 days of initial contact, you can request debt validation:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Original creditor's name and address</li>
                    <li>• Amount of debt when assigned to collector</li>
                    <li>• Verification that you owe the debt</li>
                    <li>• Copy of original contract or statement</li>
                    <li>• Chain of title if debt was sold</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Orange County Residents: Key Strategy</h3>
                  <p className="text-neutral-700 mb-3">
                    Many debt collectors cannot provide proper validation, especially for older debts. This can lead to:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Debt being withdrawn or dismissed</li>
                    <li>• Better settlement negotiations</li>
                    <li>• Protection from invalid claims</li>
                    <li>• Leverage in legal proceedings</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Statute of Limitations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6" />
                California Statute of Limitations Protection
              </h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Debt Type</th>
                      <th className="border border-neutral-300 p-4 text-left">Time Limit</th>
                      <th className="border border-neutral-300 p-4 text-left">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Credit Cards</td>
                      <td className="border border-neutral-300 p-4">4 years</td>
                      <td className="border border-neutral-300 p-4">From last payment or charge</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Personal Loans</td>
                      <td className="border border-neutral-300 p-4">4 years</td>
                      <td className="border border-neutral-300 p-4">Written contract required</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Auto Loans</td>
                      <td className="border border-neutral-300 p-4">4 years</td>
                      <td className="border border-neutral-300 p-4">After repossession</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Oral Agreements</td>
                      <td className="border border-neutral-300 p-4">2 years</td>
                      <td className="border border-neutral-300 p-4">Hard to prove</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Judgments</td>
                      <td className="border border-neutral-300 p-4">10 years</td>
                      <td className="border border-neutral-300 p-4">Renewable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 border border-red-200 p-6">
                <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Critical Warning
                </h4>
                <p className="text-neutral-700 mb-2">
                  Making a payment or acknowledging the debt in writing can restart the statute of limitations clock. Never admit to owing time-barred debt without legal counsel.
                </p>
                <p className="text-sm text-neutral-600">
                  The statute of limitations is an affirmative defense - you must raise it in court; it's not automatic.
                </p>
              </div>
            </motion.div>

            {/* Settlement Rights and Protections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Your Rights During Settlement Negotiations</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">What You Can Demand</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Written settlement agreement before payment</li>
                    <li>• Clear terms and payment schedule</li>
                    <li>• Confirmation of account closure</li>
                    <li>• No additional fees after settlement</li>
                    <li>• Specific credit report language</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Settlement Company Regulations</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Must be licensed in California</li>
                    <li>• Cannot charge upfront fees</li>
                    <li>• Must provide detailed contract</li>
                    <li>• Right to cancel within 3 days</li>
                    <li>• Must maintain separate trust account</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 p-6">
                <h4 className="font-semibold text-black mb-2">Orange County Settlement Warning</h4>
                <p className="text-neutral-700">
                  Avoid companies that guarantee specific settlement amounts or timeframes. No legitimate company can guarantee results, and such promises often indicate fraudulent operations targeting Orange County's affluent population.
                </p>
              </div>
            </motion.div>

            {/* Asset Protection Laws */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">California Asset Protection Laws</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Protected Assets (Cannot Be Taken)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li>• Homestead exemption up to $600,000-$700,000</li>
                      <li>• Retirement accounts (401k, IRA, pensions)</li>
                      <li>• Social Security and disability benefits</li>
                      <li>• Unemployment compensation</li>
                      <li>• Life insurance cash value ($8,000)</li>
                    </ul>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li>• Personal property ($8,000 total)</li>
                      <li>• Vehicle up to $6,000 value</li>
                      <li>• Tools of trade ($8,000)</li>
                      <li>• Household furnishings</li>
                      <li>• Necessary clothing</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Orange County Homestead Exemption</h3>
                  <p className="text-neutral-700 mb-3">
                    Given Orange County's high property values, the homestead exemption is particularly valuable:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• $600,000 for individuals</li>
                    <li>• $700,000 for married couples, seniors (65+), or disabled persons</li>
                    <li>• Automatically applies to your primary residence</li>
                    <li>• Protects equity up to exemption amount from creditors</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Wage Garnishment Protection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Wage Garnishment Protections in California</h2>
              
              <div className="bg-blue-50 border border-blue-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">California's Enhanced Protection</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Federal Minimum</h4>
                    <p className="text-sm text-neutral-700 mb-3">
                      Federal law protects the greater of:
                    </p>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• 75% of disposable earnings, OR</li>
                      <li>• 30 × federal minimum wage per week</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">California Enhancement</h4>
                    <p className="text-sm text-neutral-700 mb-3">
                      California provides greater protection:
                    </p>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• 75% of disposable earnings, OR</li>
                      <li>• 40 × California minimum wage per week</li>
                      <li>• Benefits Orange County's higher wages</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-blue-200">
                  <h4 className="font-semibold text-black mb-2">Example: Orange County Protection</h4>
                  <p className="text-sm text-neutral-700">
                    With California minimum wage at $18/hour (2025), weekly protection is $720 (40 × $18), compared to federal protection of $217.50 (30 × $7.25).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Legal Action Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">When to Take Legal Action</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Violations That Merit Legal Action</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Calls before 8 AM or after 9 PM</li>
                    <li>• Repeated calls intended to harass</li>
                    <li>• Threats of violence or arrest</li>
                    <li>• False claims about legal actions</li>
                    <li>• Discussing debt with third parties</li>
                    <li>• Continuing contact after cease letter</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Available Remedies</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Actual damages (financial harm)</li>
                    <li>• Statutory damages up to $1,000</li>
                    <li>• Attorney fees and costs</li>
                    <li>• Injunctive relief (stop harassment)</li>
                    <li>• Debt may become uncollectible</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 p-6">
                <h4 className="font-semibold text-black mb-2">Orange County Legal Resources</h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Orange County Bar Association Lawyer Referral</li>
                  <li>• Public Law Center (pro bono services)</li>
                  <li>• Legal Aid Society of Orange County</li>
                  <li>• California Department of Financial Protection</li>
                </ul>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="border-t border-neutral-200 pt-12 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-8">Related Legal Protection Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/debt-settlement-scams-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Avoiding Debt Settlement Scams
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Protect yourself from fraudulent debt settlement companies targeting Orange County residents.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/debt-settlement-attorney-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Working with Debt Settlement Attorneys
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    When and how to engage legal representation for debt settlement cases.
                  </p>
                </Link>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-black text-white p-8 text-center"
            >
              <h2 className="text-2xl font-light mb-4">
                Protect Your Rights During Debt Settlement
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Don't navigate debt settlement alone. Get expert guidance on your legal rights and protections available to Orange County residents.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Protect Your Rights
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