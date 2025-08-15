import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Shield, DollarSign, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function SocialSecurityDebtSettlementOrangeCountySeniors() {
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
              SENIOR FINANCE
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Social Security and Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Seniors Protection</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Senior Finance Specialist</span>
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
              Orange County seniors on Social Security face unique challenges when dealing with debt settlement. Understanding federal protections for Social Security benefits and strategic debt relief options can help preserve essential income while achieving maximum debt relief for seniors on fixed incomes.
            </div>

            {/* Social Security Protection Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-green-50 border border-green-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Social Security Benefits Protection from Creditors
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Federal Protections</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>42 U.S.C. § 407:</strong> Social Security benefits exempt from garnishment</li>
                    <li>• <strong>Bank Account Protection:</strong> 2 months of benefits protected</li>
                    <li>• <strong>Automatic Protection:</strong> No court action required</li>
                    <li>• <strong>Applies to All Creditors:</strong> Credit cards, medical debt, etc.</li>
                    <li>• <strong>SSI Also Protected:</strong> Supplemental Security Income included</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Important Exceptions</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Federal Debts:</strong> IRS, student loans, child support</li>
                    <li>• <strong>Overpayment Recovery:</strong> Social Security Administration</li>
                    <li>• <strong>Court-Ordered Support:</strong> Alimony and child support</li>
                    <li>• <strong>Mixed Funds Risk:</strong> Commingling with other income</li>
                    <li>• <strong>State Law Variations:</strong> Additional state protections may apply</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Orange County Senior Demographics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Users className="w-6 h-6" />
                Orange County Senior Financial Challenges
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">High Cost of Living Impact</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County's high living costs create unique challenges for seniors on fixed incomes:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Housing Costs:</strong> Many seniors spend 50%+ of income on housing</li>
                    <li>• <strong>Healthcare Expenses:</strong> High costs even with Medicare</li>
                    <li>• <strong>Property Taxes:</strong> Significant burden despite Prop 13 protection</li>
                    <li>• <strong>Daily Living Costs:</strong> Food, transportation, utilities above national average</li>
                    <li>• <strong>Limited Income Growth:</strong> Social Security COLA often insufficient</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Common Debt Sources for Orange County Seniors</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-neutral-700">
                      <li>• <strong>Medical Debt:</strong> Hospital bills, procedures, medications</li>
                      <li>• <strong>Credit Cards:</strong> Living expenses, emergency costs</li>
                      <li>• <strong>Home Equity Loans:</strong> Accessing property equity</li>
                      <li>• <strong>Family Support:</strong> Helping adult children financially</li>
                    </ul>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• <strong>Reverse Mortgage Issues:</strong> Property tax/insurance defaults</li>
                      <li>• <strong>Care Facility Costs:</strong> Assisted living, nursing home fees</li>
                      <li>• <strong>Tax Debt:</strong> Underpayment of income taxes</li>
                      <li>• <strong>Utility Bills:</strong> High energy costs in Orange County</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Debt Settlement Strategies for Seniors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Senior-Specific Debt Settlement Strategies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Leverage Social Security Protection</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County seniors can use Social Security protection as negotiation leverage:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Asset Protection Argument:</strong> Emphasize limited attachable income</li>
                    <li>• <strong>Fixed Income Documentation:</strong> Provide Social Security award letters</li>
                    <li>• <strong>Future Collection Challenges:</strong> Point out collection difficulties</li>
                    <li>• <strong>Settlement Motivation:</strong> Creditors prefer settlement over uncollectible debt</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Age-Based Hardship Arguments</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Health-Related Hardship</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Document medical expenses and conditions</li>
                        <li>• Emphasize limited earning capacity</li>
                        <li>• Highlight medication and treatment costs</li>
                        <li>• Consider caregiver expenses</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Financial Vulnerability</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Fixed income limitations</li>
                        <li>• Age discrimination in employment</li>
                        <li>• Limited time to recover financially</li>
                        <li>• Essential living expense priorities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Medicare and Healthcare Debt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6" />
                Medicare and Medical Debt Settlement
              </h2>
              
              <div className="bg-red-50 border border-red-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Orange County Healthcare Debt Challenges</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Medicare Coverage Gaps</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Medicare Part A and B deductibles and coinsurance</li>
                      <li>• Part D prescription drug coverage gaps</li>
                      <li>• Services not covered by Medicare</li>
                      <li>• Medigap insurance gaps or lack of coverage</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Orange County Healthcare Costs</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• High-cost medical centers (UCI, Hoag, CHOC)</li>
                      <li>• Specialist care expenses</li>
                      <li>• Long-term care costs</li>
                      <li>• Emergency room visits</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-red-200">
                  <h4 className="font-semibold text-black mb-2">Medical Debt Settlement Advantages for Seniors</h4>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Hospitals often have charity care programs for seniors</li>
                    <li>• Medicare recipients may qualify for additional assistance</li>
                    <li>• Age-based hardship considerations in negotiations</li>
                    <li>• Limited collection options encourage settlement</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Social Security Timing Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Strategic Timing Considerations</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Before Starting Social Security</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County residents approaching retirement age should consider debt settlement timing:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Settlement may be more challenging with higher pre-retirement income</li>
                    <li>• Consider accelerating settlement before income drops</li>
                    <li>• Tax implications may be higher with employment income</li>
                    <li>• More negotiation leverage with creditors expecting future income</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-3">After Starting Social Security</h3>
                  <p className="text-neutral-700 mb-3">
                    Seniors already receiving benefits have unique advantages:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Protected income status strengthens settlement position</li>
                    <li>• Lower total income may reduce tax impact of settled debt</li>
                    <li>• Age-based hardship arguments become more compelling</li>
                    <li>• Limited future earning potential supports settlement requests</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Orange County Senior Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Senior Financial Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Free Financial Assistance</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Orange County Aging Services:</strong> Financial counseling and assistance</li>
                    <li>• <strong>AARP Foundation:</strong> Tax preparation and financial guidance</li>
                    <li>• <strong>Legal Aid Society:</strong> Senior-specific legal assistance</li>
                    <li>• <strong>Medicare Counseling:</strong> HICAP program for healthcare costs</li>
                    <li>• <strong>Social Security Administration:</strong> Benefit optimization counseling</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Senior Housing and Support</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Orange County Housing Authority:</strong> Senior housing assistance</li>
                    <li>• <strong>Laguna Woods Village:</strong> Age-restricted community</li>
                    <li>• <strong>Senior Planet:</strong> Financial education programs</li>
                    <li>• <strong>Meals on Wheels:</strong> Reducing food costs</li>
                    <li>• <strong>Senior Transportation:</strong> Reducing transportation expenses</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Estate Planning Considerations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Estate Planning and Debt Settlement</h2>
              
              <div className="bg-orange-50 border border-orange-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Protecting Assets for Heirs</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Orange County Property Protection</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• California homestead exemption up to $700,000</li>
                      <li>• Proper titling to protect property</li>
                      <li>• Living trusts for estate planning</li>
                      <li>• Asset protection strategies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Debt Settlement Benefits</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Reduces debt passed to estate</li>
                      <li>• Preserves inheritance for family</li>
                      <li>• Avoids lengthy probate collection issues</li>
                      <li>• Provides peace of mind for seniors</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-orange-200">
                  <h4 className="font-semibold text-black mb-2">Important Consideration</h4>
                  <p className="text-sm text-neutral-700">
                    Orange County seniors should coordinate debt settlement with estate planning. Settling debts can preserve assets for heirs and reduce estate administration complexity.
                  </p>
                </div>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Senior Finance Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/debt-settlement-seniors-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Debt Settlement for Orange County Seniors
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Comprehensive guide to debt relief strategies for Orange County seniors on fixed incomes.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/orange-county-senior-debt-relief-2025"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Senior Debt Relief 2025
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Latest senior debt relief programs and assistance options in Orange County.
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
                Protect Your Social Security and Achieve Debt Relief
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get specialized guidance on debt settlement strategies that protect your Social Security benefits while achieving maximum debt relief. Orange County seniors deserve expert help.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Senior Debt Help
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