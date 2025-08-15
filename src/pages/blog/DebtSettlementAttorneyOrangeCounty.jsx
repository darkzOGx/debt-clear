import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Scale, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtSettlementAttorneyOrangeCounty() {
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
              LEGAL GUIDE
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Orange County Debt Settlement Attorney vs DIY:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">When You Need Legal Help</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>July 30, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Legal Expert</span>
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
              When facing overwhelming debt in Orange County, deciding between hiring a debt settlement attorney or handling negotiations yourself is crucial. This comprehensive guide helps you understand when legal representation is necessary for successful debt relief.
            </div>

            {/* Key Differences Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 p-8 border border-neutral-200 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">When to Hire a Debt Settlement Attorney</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    Attorney Recommended
                  </h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Complex debt portfolio over $50,000</li>
                    <li>• Multiple creditor lawsuits filed</li>
                    <li>• Wage garnishment proceedings</li>
                    <li>• Business debt complications</li>
                    <li>• Asset protection concerns</li>
                    <li>• Tax implications uncertainty</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    DIY Debt Settlement
                  </h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Simple credit card debt under $25,000</li>
                    <li>• No legal actions pending</li>
                    <li>• Strong negotiation skills</li>
                    <li>• Time to handle communications</li>
                    <li>• Understanding of debt laws</li>
                    <li>• Patience for lengthy process</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Orange County Legal Landscape */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Debt Settlement Legal Landscape</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orange County's high cost of living creates unique debt settlement challenges. California's Rosenthal Fair Debt Collection Practices Act provides additional consumer protections beyond federal law, making local legal expertise valuable.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">California Debt Settlement Regulations</h3>
                    <p className="text-neutral-700">
                      California law prohibits debt settlement companies from charging upfront fees. Attorneys, however, can charge reasonable advance fees with proper client agreements and trust account management.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cost Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Cost Comparison: Attorney vs DIY Debt Settlement</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Service Type</th>
                      <th className="border border-neutral-300 p-4 text-left">Cost Structure</th>
                      <th className="border border-neutral-300 p-4 text-left">Orange County Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Debt Settlement Attorney</td>
                      <td className="border border-neutral-300 p-4">Hourly + Contingency</td>
                      <td className="border border-neutral-300 p-4">$300-500/hr + 15-25%</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">DIY Settlement</td>
                      <td className="border border-neutral-300 p-4">Your time only</td>
                      <td className="border border-neutral-300 p-4">$0 (plus time investment)</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Debt Settlement Company</td>
                      <td className="border border-neutral-300 p-4">Contingency only</td>
                      <td className="border border-neutral-300 p-4">15-25% of enrolled debt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Orange County Attorney Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Selecting a Debt Settlement Attorney in Orange County</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Essential Qualifications</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• California State Bar membership in good standing</li>
                    <li>• Specific experience with debt settlement and consumer law</li>
                    <li>• Knowledge of Orange County court systems</li>
                    <li>• Understanding of California debt collection laws</li>
                    <li>• Transparent fee structure and client agreements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Questions to Ask Potential Attorneys</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• How many debt settlement cases have you handled in Orange County?</li>
                    <li>• What is your success rate with settlements?</li>
                    <li>• How do you charge for debt settlement services?</li>
                    <li>• Will you handle all creditor communications?</li>
                    <li>• What is your strategy for my specific situation?</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="border-t border-neutral-200 pt-12 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-8">Related Orange County Debt Settlement Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/orange-county-debt-settlement-laws"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Debt Settlement Laws
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Understanding California's debt settlement regulations and consumer protections.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/choose-debt-settlement-company-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Choosing a Debt Settlement Company
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Essential criteria for selecting the right debt settlement provider in OC.
                  </p>
                </Link>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-black text-white p-8 text-center"
            >
              <h2 className="text-2xl font-light mb-4">
                Need Expert Debt Settlement Guidance?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Our Orange County debt settlement experts provide personalized guidance to help you choose the right approach for your situation.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Free Consultation
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