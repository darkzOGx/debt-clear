import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle, DollarSign, Clock, CreditCard, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DebtSettlementVsBankruptcy() {
  const comparisonData = [
    {
      category: "Debt Reduction",
      settlement: "40-60% of original debt eliminated",
      bankruptcy: "Most unsecured debts discharged (Chapter 7)",
      winner: "tie"
    },
    {
      category: "Credit Impact Duration",
      settlement: "7 years from original delinquency",
      bankruptcy: "10 years from filing date",
      winner: "settlement"
    },
    {
      category: "Asset Protection",
      settlement: "Keep all assets and property",
      bankruptcy: "Risk losing non-exempt assets",
      winner: "settlement"
    },
    {
      category: "Cost",
      settlement: "15-25% of enrolled debt",
      bankruptcy: "$1,500-$6,000+ in fees",
      winner: "varies"
    },
    {
      category: "Time to Complete",
      settlement: "24-48 months typical",
      bankruptcy: "4-6 months (Ch. 7), 3-5 years (Ch. 13)",
      winner: "bankruptcy"
    },
    {
      category: "Public Record",
      settlement: "Private process",
      bankruptcy: "Public court record",
      winner: "settlement"
    },
    {
      category: "Employment Impact",
      settlement: "No impact on job prospects",
      bankruptcy: "May affect certain jobs/clearances",
      winner: "settlement"
    },
    {
      category: "Future Credit Access",
      settlement: "Faster access to new credit",
      bankruptcy: "Limited credit options for years",
      winner: "settlement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-mono">
                DEBT RELIEF COMPARISON
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Debt Settlement vs
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Bankruptcy</span>
            </h1>
            
            <p className="text-xl text-neutral-300 leading-relaxed mb-8 font-light">
              Complete comparison guide for Orange County residents choosing between 
              debt settlement and bankruptcy as debt relief options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 hover:bg-neutral-100 transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide">
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link 
                to="/faq"
                className="border border-neutral-300 text-white px-8 py-4 hover:border-white transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide"
              >
                View FAQ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 p-8 border border-neutral-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-black" />
                <h2 className="text-2xl font-semibold text-black">Debt Settlement</h2>
              </div>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Negotiation process where creditors agree to accept less than the full amount owed. 
                Typically reduces debt by 40-60% while allowing you to keep your assets.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-neutral-700">Keep all assets and property</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-neutral-700">Private process, no public record</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-neutral-700">Faster credit recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-neutral-700">Not all debts may settle</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 p-8 border border-neutral-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-8 h-8 text-black" />
                <h2 className="text-2xl font-semibold text-black">Bankruptcy</h2>
              </div>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Legal process that eliminates most unsecured debts but requires court proceedings 
                and has long-lasting effects on credit and public records.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-neutral-700">Most debts completely eliminated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-neutral-700">Stops collections immediately</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-neutral-700">Public court record for 10 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-neutral-700">May lose assets in Chapter 7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Side-by-Side
              <br />
              <span className="font-mono">Comparison</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Detailed breakdown of key factors to help Orange County residents make an informed decision.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-neutral-200">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="text-left p-4 font-semibold text-black">Factor</th>
                  <th className="text-left p-4 font-semibold text-black">Debt Settlement</th>
                  <th className="text-left p-4 font-semibold text-black">Bankruptcy</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-neutral-200"
                  >
                    <td className="p-4 font-medium text-black">{row.category}</td>
                    <td className={`p-4 text-neutral-700 ${row.winner === 'settlement' ? 'bg-green-50' : ''}`}>
                      {row.settlement}
                      {row.winner === 'settlement' && (
                        <CheckCircle className="w-4 h-4 text-green-600 inline ml-2" />
                      )}
                    </td>
                    <td className={`p-4 text-neutral-700 ${row.winner === 'bankruptcy' ? 'bg-green-50' : ''}`}>
                      {row.bankruptcy}
                      {row.winner === 'bankruptcy' && (
                        <CheckCircle className="w-4 h-4 text-green-600 inline ml-2" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose Each Option */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Which Option is
              <br />
              <span className="font-mono">Right for You?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 p-8 border border-neutral-200"
            >
              <h3 className="text-2xl font-semibold text-black mb-6">Consider Debt Settlement If:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">You have $10,000+ in unsecured debt</div>
                    <div className="text-sm text-neutral-600">Minimum debt levels make settlement cost-effective</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">You want to keep your assets</div>
                    <div className="text-sm text-neutral-600">Protect your home, car, and other property</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">Privacy is important</div>
                    <div className="text-sm text-neutral-600">No public records or court proceedings</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">You have some income</div>
                    <div className="text-sm text-neutral-600">Ability to save for settlement offers</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">Faster credit recovery matters</div>
                    <div className="text-sm text-neutral-600">Want to rebuild credit sooner</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 p-8 border border-neutral-200"
            >
              <h3 className="text-2xl font-semibold text-black mb-6">Consider Bankruptcy If:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">You have overwhelming debt</div>
                    <div className="text-sm text-neutral-600">Debt is far beyond your ability to repay</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">Little to no income</div>
                    <div className="text-sm text-neutral-600">Cannot afford settlement payments</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">Facing immediate legal action</div>
                    <div className="text-sm text-neutral-600">Lawsuits, wage garnishment, asset seizure</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">Few valuable assets</div>
                    <div className="text-sm text-neutral-600">Most assets are exempt from bankruptcy</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">Need immediate relief</div>
                    <div className="text-sm text-neutral-600">Want fastest possible debt elimination</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Cost
              <br />
              <span className="font-mono">Comparison</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 border border-neutral-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-black" />
                <h3 className="text-2xl font-semibold text-black">Debt Settlement Costs</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-medium text-black mb-2">Example: $50,000 Debt</div>
                  <div className="space-y-2 text-sm text-neutral-700">
                    <div>• Potential Settlement: $25,000 (50% reduction)</div>
                    <div>• Settlement Fee: $6,250 (25% of $25,000)</div>
                    <div>• Total Cost: $31,250</div>
                    <div className="font-semibold text-black">• Total Savings: $18,750</div>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-4">
                  <div className="text-sm text-neutral-600">
                    <strong>Additional Considerations:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• No upfront fees required</li>
                      <li>• Fees only on successful settlements</li>
                      <li>• Monthly account maintenance: $25-50</li>
                      <li>• Possible tax implications on forgiven debt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 border border-neutral-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-black" />
                <h3 className="text-2xl font-semibold text-black">Bankruptcy Costs</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-medium text-black mb-2">Chapter 7 Bankruptcy</div>
                  <div className="space-y-2 text-sm text-neutral-700">
                    <div>• Court Filing Fee: $338</div>
                    <div>• Attorney Fees: $1,200-$3,000</div>
                    <div>• Credit Counseling: $50-$100</div>
                    <div className="font-semibold text-black">• Total Cost: $1,588-$3,438</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-lg font-medium text-black mb-2">Chapter 13 Bankruptcy</div>
                  <div className="space-y-2 text-sm text-neutral-700">
                    <div>• Court Filing Fee: $313</div>
                    <div>• Attorney Fees: $3,000-$6,000</div>
                    <div>• Trustee Fees: 3-10% of payments</div>
                    <div className="font-semibold text-black">• Total Cost: $4,000-$8,000+</div>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-4">
                  <div className="text-sm text-neutral-600">
                    <strong>Hidden Costs:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Lost credit access for years</li>
                      <li>• Potential job/security clearance impact</li>
                      <li>• Public record stigma</li>
                      <li>• Asset liquidation in Chapter 7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Get Expert Guidance for
              <br />
              <span className="font-mono">Your Debt Relief Decision</span>
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto font-light">
              Our Orange County debt specialists will analyze your situation and recommend 
              the best debt relief option for your specific circumstances.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 hover:bg-neutral-100 transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide">
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/faq"
                className="border border-neutral-600 text-white px-8 py-4 hover:border-white transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide"
              >
                View FAQ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}