import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, CheckCircle, FileText, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtSettlementChecklistOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Debt Settlement Checklist Orange County | Complete Preparation Guide</title>
        <meta name="description" content="Complete debt settlement checklist for Orange County residents. Step-by-step preparation guide with essential documents and requirements." />
        <meta name="keywords" content="debt settlement checklist Orange County, debt settlement preparation California, debt relief checklist, settlement documentation guide" />
        <meta property="og:title" content="Debt Settlement Checklist - Orange County Preparation Guide" />
        <meta property="og:description" content="Comprehensive checklist to prepare for debt settlement in Orange County with step-by-step guidance and required documentation." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://debtclear.com/blog/debt-settlement-checklist-orange-county" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
              CONSUMER GUIDE
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Orange County Debt Settlement Checklist:
            <br />
            <span className="font-mono text-3xl lg:text-4xl text-neutral-300">15 Steps Before You Start</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>July 25, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Financial Advisor</span>
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
              Before starting debt settlement in Orange County, proper preparation is essential for success. This comprehensive checklist ensures you're fully ready to navigate the debt relief process and achieve optimal results.
            </div>

            {/* Pre-Settlement Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 border border-neutral-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Phase 1: Financial Assessment (Steps 1-5)
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">1. Complete Debt Inventory</h3>
                    <p className="text-neutral-700 mb-2">List every unsecured debt including:</p>
                    <ul className="text-sm text-neutral-600 ml-4">
                      <li>• Credit card balances and minimum payments</li>
                      <li>• Personal loan amounts and terms</li>
                      <li>• Medical debt from Orange County healthcare providers</li>
                      <li>• Store credit cards and financing accounts</li>
                      <li>• Collection accounts and their original creditors</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">2. Calculate Total Household Income</h3>
                    <p className="text-neutral-700 mb-2">Document all income sources:</p>
                    <ul className="text-sm text-neutral-600 ml-4">
                      <li>• Primary employment (consider Orange County salary levels)</li>
                      <li>• Secondary income and side businesses</li>
                      <li>• Social Security, disability, or pension payments</li>
                      <li>• Investment income and rental properties</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">3. Track Monthly Expenses</h3>
                    <p className="text-neutral-700 mb-2">Account for Orange County's high living costs:</p>
                    <ul className="text-sm text-neutral-600 ml-4">
                      <li>• Housing costs (rent/mortgage typically 30-50% of income in OC)</li>
                      <li>• Transportation and commuting expenses</li>
                      <li>• Food, utilities, and healthcare</li>
                      <li>• Insurance premiums and mandatory expenses</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">4. Determine Available Settlement Funds</h3>
                    <p className="text-neutral-700">Calculate how much you can realistically save monthly for debt settlements after covering essential Orange County living expenses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">5. Review Credit Reports</h3>
                    <p className="text-neutral-700">Obtain free credit reports from all three bureaus to verify debt accuracy and identify any errors that need disputing.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Legal and Documentation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-neutral-50 border border-neutral-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6" />
                Phase 2: Legal and Documentation (Steps 6-10)
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">6. Understand California Debt Laws</h3>
                    <p className="text-neutral-700 mb-2">Familiarize yourself with key protections:</p>
                    <ul className="text-sm text-neutral-600 ml-4">
                      <li>• California Rosenthal Fair Debt Collection Practices Act</li>
                      <li>• Statute of limitations on debt collection (4 years for most debts)</li>
                      <li>• Wage garnishment limits and exemptions</li>
                      <li>• Orange County court procedures for debt cases</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">7. Gather Financial Documentation</h3>
                    <p className="text-neutral-700 mb-2">Collect essential documents:</p>
                    <ul className="text-sm text-neutral-600 ml-4">
                      <li>• Recent pay stubs and tax returns</li>
                      <li>• Bank statements for the past 3 months</li>
                      <li>• All credit card and loan statements</li>
                      <li>• Documentation of any financial hardship</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">8. Check for Pending Legal Actions</h3>
                    <p className="text-neutral-700">Search Orange County court records for any existing lawsuits or judgments against you that could affect debt settlement strategies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibent text-black mb-2">9. Understand Tax Implications</h3>
                    <p className="text-neutral-700">Research how forgiven debt may be taxable income under federal and California tax law, and consider consulting a tax professional.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">10. Protect Essential Assets</h3>
                    <p className="text-neutral-700">Understand California exemption laws that protect your home, car, and other essential assets during debt settlement.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Provider Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-neutral-50 border border-neutral-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Phase 3: Provider Selection (Steps 11-15)</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">11. Research Orange County Debt Settlement Companies</h3>
                    <p className="text-neutral-700 mb-2">Evaluate potential providers based on:</p>
                    <ul className="text-sm text-neutral-600 ml-4">
                      <li>• California licensing and bonding status</li>
                      <li>• BBB ratings and customer reviews</li>
                      <li>• Local Orange County experience and references</li>
                      <li>• Transparent fee structure and success rates</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">12. Verify Credentials and Licenses</h3>
                    <p className="text-neutral-700">Check with the California Department of Business Oversight and State Bar to verify any licensing claims.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">13. Get Multiple Consultations</h3>
                    <p className="text-neutral-700">Compare at least 3 different approaches to your Orange County debt situation before making a decision.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">14. Review All Contracts Carefully</h3>
                    <p className="text-neutral-700">Ensure contracts comply with California law and clearly outline fees, timelines, and what services will be provided.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">15. Prepare for the Settlement Process</h3>
                    <p className="text-neutral-700">Set up your dedicated settlement account and prepare for potential creditor contact changes during the 24-48 month process.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-t border-neutral-200 pt-12 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-8">Related Preparation Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/choose-debt-settlement-company-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Choosing a Debt Settlement Company
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Essential criteria for selecting the right debt settlement provider in Orange County.
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
                    Red flags and warning signs to protect yourself from fraudulent companies.
                  </p>
                </Link>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-black text-white p-8 text-center"
            >
              <h2 className="text-2xl font-light mb-4">
                Ready to Start Your Debt Settlement Journey?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get personalized guidance from Orange County debt settlement experts who understand the local market and legal landscape.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Your Checklist Review
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