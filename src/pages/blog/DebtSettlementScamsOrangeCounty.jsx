import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, AlertTriangle, Shield, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtSettlementScamsOrangeCounty() {
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
              CONSUMER GUIDE
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Debt Settlement Scams in Orange County:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Red Flags and How to Avoid Them</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>July 26, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Consumer Protection Expert</span>
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
              Orange County residents facing debt settlement challenges are prime targets for scammers. This comprehensive guide reveals the most common debt relief scams, warning signs to watch for, and how to protect yourself from fraudulent companies preying on financial distress.
            </div>

            {/* Warning Signs Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-red-50 border border-red-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Major Red Flags: Debt Settlement Scam Warning Signs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Illegal Practices</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Demanding upfront fees before settling any debts</li>
                    <li>• Guaranteeing specific settlement amounts</li>
                    <li>• Advising you to stop communicating with creditors</li>
                    <li>• Promising to eliminate all debt regardless of situation</li>
                    <li>• Claiming government endorsement or affiliation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Pressure Tactics</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• High-pressure sales calls and limited-time offers</li>
                    <li>• Refusing to provide written information</li>
                    <li>• Requiring immediate payment or bank account access</li>
                    <li>• Creating false urgency about legal action</li>
                    <li>• Claiming secret government programs</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Common Orange County Scams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Common Debt Settlement Scams Targeting Orange County Residents</h2>
              
              <div className="space-y-8">
                <div className="border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    The "Advance Fee" Scam
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    <strong>How it works:</strong> Scammers demand large upfront payments (often $1,000-$5,000) before providing any debt settlement services, claiming these fees are for "legal representation" or "program setup."
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-3">
                    <strong>Why it's illegal:</strong> California law prohibits debt settlement companies from charging fees before successfully settling debts.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 p-4">
                    <p className="text-sm text-neutral-700">
                      <strong>Orange County Example:</strong> A Costa Mesa resident paid $3,500 upfront to a fake debt settlement company that disappeared after two weeks, providing no services.
                    </p>
                  </div>
                </div>

                <div className="border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">The "Government Program" Scam</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    <strong>How it works:</strong> Fraudsters claim access to secret government debt forgiveness programs, often using official-sounding names and fake government endorsements.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-3">
                    <strong>Reality check:</strong> No secret government debt settlement programs exist. Legitimate government programs are public information.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 p-4">
                    <p className="text-sm text-neutral-700">
                      <strong>Orange County Example:</strong> An Irvine family lost $2,800 to scammers claiming access to a "Federal Debt Relief Program" that didn't exist.
                    </p>
                  </div>
                </div>

                <div className="border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">The "Credit Repair Combo" Scam</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    <strong>How it works:</strong> Companies bundle debt settlement with credit repair services, often charging excessive fees for basic credit report disputes anyone can do for free.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-3">
                    <strong>Warning signs:</strong> Guaranteeing specific credit score improvements or claiming to remove accurate negative information.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 p-4">
                    <p className="text-sm text-neutral-700">
                      <strong>Orange County Example:</strong> A Huntington Beach resident paid $4,200 for "guaranteed" credit repair that resulted in no score improvement.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Protection Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                How to Protect Yourself from Debt Settlement Scams
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Research and Verification</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Check BBB ratings and complaint records</li>
                    <li>• Verify business licenses with California Department of Business Oversight</li>
                    <li>• Search company name + "scam" or "complaints" online</li>
                    <li>• Check attorney credentials with California State Bar</li>
                    <li>• Review consumer protection agency warnings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Smart Consumer Practices</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Get all promises in writing before paying anything</li>
                    <li>• Never provide bank account or Social Security information until verified</li>
                    <li>• Take time to research - don't make immediate decisions</li>
                    <li>• Get multiple quotes from different companies</li>
                    <li>• Understand your rights under California law</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Legitimate vs Scam Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Legitimate Debt Settlement vs Scams: Quick Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Characteristic</th>
                      <th className="border border-neutral-300 p-4 text-left">Legitimate Company</th>
                      <th className="border border-neutral-300 p-4 text-left">Scam Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Fees</td>
                      <td className="border border-neutral-300 p-4">Only after successful settlement</td>
                      <td className="border border-neutral-300 p-4 text-red-600">Demands upfront payment</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Guarantees</td>
                      <td className="border border-neutral-300 p-4">No specific guarantees</td>
                      <td className="border border-neutral-300 p-4 text-red-600">Promises specific results</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Timeline</td>
                      <td className="border border-neutral-300 p-4">Realistic 24-48 months</td>
                      <td className="border border-neutral-300 p-4 text-red-600">Claims quick resolution</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Documentation</td>
                      <td className="border border-neutral-300 p-4">Detailed written agreements</td>
                      <td className="border border-neutral-300 p-4 text-red-600">Verbal promises only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Reporting Scams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Where to Report Debt Settlement Scams in Orange County</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Federal Agencies</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Federal Trade Commission (FTC)</li>
                    <li>• Consumer Financial Protection Bureau (CFPB)</li>
                    <li>• Better Business Bureau</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">California State Agencies</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• California Attorney General's Office</li>
                    <li>• Department of Business Oversight</li>
                    <li>• Orange County District Attorney's Office</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="border-t border-neutral-200 pt-12 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-8">Related Consumer Protection Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/choose-debt-settlement-company-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Choosing a Debt Settlement Company
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Essential criteria for selecting legitimate debt settlement providers in Orange County.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/debt-settlement-checklist-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Debt Settlement Checklist
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    15 essential steps before starting debt settlement in Orange County.
                  </p>
                </Link>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-black text-white p-8 text-center"
            >
              <h2 className="text-2xl font-light mb-4">
                Get Legitimate Debt Settlement Help
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Work with licensed, reputable debt settlement professionals serving Orange County residents with transparent practices and proven results.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Verify Our Credentials
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