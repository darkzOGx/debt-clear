import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, CreditCard, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function CreditRepairAfterDebtSettlementOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Credit Repair After Debt Settlement | Orange County Recovery Guide</title>
        <meta name="description" content="Complete guide to rebuilding credit after debt settlement in Orange County. Learn proven strategies to improve credit scores and restore financial health." />
        <meta name="keywords" content="credit repair after debt settlement Orange County, rebuild credit score, credit restoration California, post-settlement credit improvement" />
        <meta property="og:title" content="Credit Repair After Debt Settlement - Orange County Guide" />
        <meta property="og:description" content="Expert strategies for Orange County residents to rebuild and repair credit scores after completing debt settlement programs." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://debtclear.com/blog/credit-repair-after-debt-settlement-orange-county" />
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
              CREDIT REPAIR
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Credit Repair After Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Success Strategies</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Credit Specialist</span>
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
              Rebuilding credit after debt settlement is crucial for Orange County residents who want to restore their financial standing and access to credit. This comprehensive guide provides proven strategies to maximize credit score recovery and regain financial opportunities in Orange County's competitive market.
            </div>

            {/* Credit Score Recovery Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6" />
                Credit Score Recovery Timeline After Debt Settlement
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Timeline</th>
                      <th className="border border-neutral-300 p-4 text-left">Expected Score Range</th>
                      <th className="border border-neutral-300 p-4 text-left">Orange County Opportunities</th>
                      <th className="border border-neutral-300 p-4 text-left">Key Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">0-6 Months</td>
                      <td className="border border-neutral-300 p-4">450-550</td>
                      <td className="border border-neutral-300 p-4">Secured cards, prepaid options</td>
                      <td className="border border-neutral-300 p-4">Monitor reports, dispute errors</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">6-12 Months</td>
                      <td className="border border-neutral-300 p-4">500-600</td>
                      <td className="border border-neutral-300 p-4">Basic credit cards, utilities</td>
                      <td className="border border-neutral-300 p-4">Build payment history</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">1-2 Years</td>
                      <td className="border border-neutral-300 p-4">550-650</td>
                      <td className="border border-neutral-300 p-4">Auto loans, apartment rentals</td>
                      <td className="border border-neutral-300 p-4">Diversify credit types</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">2-3 Years</td>
                      <td className="border border-neutral-300 p-4">600-700</td>
                      <td className="border border-neutral-300 p-4">FHA mortgages, better rates</td>
                      <td className="border border-neutral-300 p-4">Optimize utilization</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">3-5 Years</td>
                      <td className="border border-neutral-300 p-4">650-750</td>
                      <td className="border border-neutral-300 p-4">Conventional mortgages, premium cards</td>
                      <td className="border border-neutral-300 p-4">Maintain perfect payment history</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-white border border-blue-200">
                <h4 className="font-semibold text-black mb-2">Orange County Context</h4>
                <p className="text-sm text-neutral-700">
                  Orange County's competitive housing and employment markets make credit score recovery especially important. Many landlords require 700+ scores, and employers often check credit for financial positions.
                </p>
              </div>
            </motion.div>

            {/* Immediate Post-Settlement Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                Immediate Actions After Debt Settlement
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Credit Report Cleanup (First 30 Days)</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County residents should immediately verify settlement accuracy:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Obtain Reports:</strong> Free reports from all three bureaus (Experian, Equifax, TransUnion)</li>
                    <li>• <strong>Verify Settlements:</strong> Ensure accounts show "Settled" or "Paid for Less Than Full Balance"</li>
                    <li>• <strong>Check Balances:</strong> Settled accounts should show $0 balance</li>
                    <li>• <strong>Dispute Errors:</strong> Challenge any inaccurate information immediately</li>
                    <li>• <strong>Document Everything:</strong> Keep settlement letters and payment confirmations</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Account Status Optimization</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Ideal Settlement Reporting</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Account closed by consumer</li>
                        <li>• $0 balance showing</li>
                        <li>• "Settled" notation (not "Charge-off")</li>
                        <li>• Accurate settlement date</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Common Reporting Errors</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Continuing to report balance owed</li>
                        <li>• Incorrect settlement amount</li>
                        <li>• Wrong settlement date</li>
                        <li>• Multiple entries for same debt</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Dispute Process for Orange County Residents</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <h4 className="font-semibold text-black">File Online Disputes</h4>
                        <p className="text-sm text-neutral-700">Use credit bureau websites for fastest processing (usually 30 days)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <h4 className="font-semibold text-black">Provide Documentation</h4>
                        <p className="text-sm text-neutral-700">Include settlement letters and payment confirmations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <h4 className="font-semibold text-black">Follow Up Aggressively</h4>
                        <p className="text-sm text-neutral-700">Continue disputing until reporting is accurate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Building New Credit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6" />
                Building New Credit After Settlement
              </h2>
              
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Secured Credit Cards (Months 1-12)</h3>
                  <p className="text-neutral-700 mb-3">
                    Best secured card options for Orange County residents:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Recommended Cards</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Capital One Secured Mastercard</li>
                        <li>• Discover it Secured</li>
                        <li>• Citi Secured Mastercard</li>
                        <li>• Wells Fargo Platinum Secured</li>
                        <li>• Local Orange County credit unions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Optimal Usage Strategy</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Keep utilization below 10%</li>
                        <li>• Pay in full every month</li>
                        <li>• Use for recurring expenses</li>
                        <li>• Request credit line increases</li>
                        <li>• Graduate to unsecured cards</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Credit Builder Loans (Months 6-18)</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County credit unions and banks offering credit builder loans:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Orange County's Credit Union:</strong> Credit builder loans from $500-2,500</li>
                    <li>• <strong>SchoolsFirst Federal Credit Union:</strong> Fresh Start loans for members</li>
                    <li>• <strong>Kinecta Federal Credit Union:</strong> Credit building programs</li>
                    <li>• <strong>Self Lender:</strong> Online credit builder loans available statewide</li>
                    <li>• <strong>Local Community Banks:</strong> Often offer flexible credit building options</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Alternative Credit Building (Months 3-24)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Utility and Rent Reporting</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Experian Boost (free utility reporting)</li>
                        <li>• UltraFICO (bank account data)</li>
                        <li>• RentTrack for rental payments</li>
                        <li>• eCredable for utility history</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Authorized User Strategy</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Family member with excellent credit</li>
                        <li>• Account aged 2+ years preferred</li>
                        <li>• Low utilization essential</li>
                        <li>• Perfect payment history required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Advanced Credit Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Advanced Credit Optimization Strategies</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Credit Utilization Optimization</h3>
                  <p className="text-neutral-700 mb-3">
                    Strategic utilization management for maximum score improvement:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white border border-red-200 p-4">
                      <h4 className="font-semibold text-black mb-2">The 10% Rule for Orange County Residents</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Keep total utilization below 10% of all limits</li>
                        <li>• Individual card utilization below 10% each</li>
                        <li>• Pay down before statement closing dates</li>
                        <li>• Request credit limit increases every 6 months</li>
                        <li>• Never close old accounts (shortens credit history)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-red-200 p-4">
                      <h4 className="font-semibold text-black mb-2">Multiple Payment Strategy</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Make payments twice monthly</li>
                        <li>• Pay large purchases immediately</li>
                        <li>• Monitor balance before statement dates</li>
                        <li>• Use balance alerts to stay under 10%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Credit Mix Development</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Years 1-2: Foundation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• 1-2 secured credit cards</li>
                        <li>• Credit builder loan</li>
                        <li>• Authorized user account</li>
                        <li>• Rent/utility reporting</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Years 2-3: Expansion</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Unsecured credit cards</li>
                        <li>• Auto loan (if needed)</li>
                        <li>• Store credit cards (sparingly)</li>
                        <li>• Personal loan (small amount)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Orange County-Specific Opportunities</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Auto Loans:</strong> Orange County's car-dependent lifestyle creates auto loan opportunities</li>
                    <li>• <strong>Store Cards:</strong> Major retailers (Target, Best Buy, Amazon) for credit mix</li>
                    <li>• <strong>Gas Cards:</strong> Chevron, Shell cards for daily expenses</li>
                    <li>• <strong>Business Credit:</strong> Separate business credit for entrepreneurs</li>
                    <li>• <strong>Student Loans:</strong> If returning to school (UCI, Chapman, etc.)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Orange County Credit Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Target className="w-6 h-6" />
                Orange County Credit Score Goals and Milestones
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Credit Score Range</th>
                      <th className="border border-neutral-300 p-4 text-left">Orange County Opportunities</th>
                      <th className="border border-neutral-300 p-4 text-left">Interest Rates</th>
                      <th className="border border-neutral-300 p-4 text-left">Timeline Goal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">580-619 (Fair)</td>
                      <td className="border border-neutral-300 p-4">
                        FHA mortgages, subprime auto loans, secured cards
                      </td>
                      <td className="border border-neutral-300 p-4">
                        Mortgage: 7-8%, Auto: 8-12%
                      </td>
                      <td className="border border-neutral-300 p-4">18-24 months</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">620-679 (Fair+)</td>
                      <td className="border border-neutral-300 p-4">
                        Conventional mortgages, prime auto loans, unsecured cards
                      </td>
                      <td className="border border-neutral-300 p-4">
                        Mortgage: 6.5-7.5%, Auto: 5-8%
                      </td>
                      <td className="border border-neutral-300 p-4">24-36 months</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">680-739 (Good)</td>
                      <td className="border border-neutral-300 p-4">
                        Best mortgage rates, premium cards, business loans
                      </td>
                      <td className="border border-neutral-300 p-4">
                        Mortgage: 6-6.5%, Auto: 3-5%
                      </td>
                      <td className="border border-neutral-300 p-4">3-4 years</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">740+ (Excellent)</td>
                      <td className="border border-neutral-300 p-4">
                        Luxury cards, investment loans, best rates available
                      </td>
                      <td className="border border-neutral-300 p-4">
                        Mortgage: 5.75-6%, Auto: 2-4%
                      </td>
                      <td className="border border-neutral-300 p-4">4-5 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Monitoring and Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Credit Monitoring and Maintenance</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Free Monitoring Resources</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>AnnualCreditReport.com:</strong> Official free reports from all bureaus</li>
                    <li>• <strong>Credit Karma:</strong> Free TransUnion and Equifax scores</li>
                    <li>• <strong>Credit Sesame:</strong> Free TransUnion score and monitoring</li>
                    <li>• <strong>Experian App:</strong> Free Experian score and FICO score</li>
                    <li>• <strong>Bank/Credit Card Apps:</strong> Many provide free scores</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Monthly Maintenance Tasks</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Check Credit Scores:</strong> Monitor across all three bureaus</li>
                    <li>• <strong>Review Reports:</strong> Look for errors or unauthorized accounts</li>
                    <li>• <strong>Optimize Utilization:</strong> Keep balances low before statement dates</li>
                    <li>• <strong>Pay On Time:</strong> Set up autopay for all accounts</li>
                    <li>• <strong>Track Progress:</strong> Document score improvements over time</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Common Credit Repair Mistakes to Avoid</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="font-semibold text-black mb-3">❌ Mistakes That Hurt Progress</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Closing Old Accounts:</strong> Reduces credit history length and available credit</li>
                    <li>• <strong>Applying for Too Much Credit:</strong> Hard inquiries lower scores temporarily</li>
                    <li>• <strong>Ignoring Utilization Timing:</strong> High balances on statement dates hurt scores</li>
                    <li>• <strong>Falling for Credit Repair Scams:</strong> Paying for services you can do yourself</li>
                    <li>• <strong>Not Monitoring Progress:</strong> Missing errors or opportunities for improvement</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">✅ Best Practices for Success</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Patience and Consistency:</strong> Credit repair takes time but pays off</li>
                    <li>• <strong>Automate Everything:</strong> Set up autopay to ensure perfect payment history</li>
                    <li>• <strong>Keep Detailed Records:</strong> Track all disputes and correspondence</li>
                    <li>• <strong>Start Small and Build:</strong> Begin with secured cards and build gradually</li>
                    <li>• <strong>Focus on Factors You Control:</strong> Payment history, utilization, credit mix</li>
                  </ul>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Credit Recovery Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/credit-score-recovery-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Credit Score Recovery After Debt Settlement in Orange County
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Step-by-step guide to rebuilding credit with timelines and strategies.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/building-credit-during-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Building Credit During Debt Settlement: Orange County Guide
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    How to maintain and improve credit scores during the debt settlement process.
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
                Ready to Rebuild Your Credit?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get personalized guidance on credit repair strategies after debt settlement. Our Orange County specialists help you develop a customized plan to restore your credit score and financial opportunities.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Credit Repair Help
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