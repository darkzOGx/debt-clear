import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Scale, CreditCard, TrendingDown, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function BalanceTransferVsDebtSettlementOrangeCounty() {
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
              DEBT CONSOLIDATION
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Balance Transfer vs Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Resident Guide</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>13 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Debt Strategy Analyst</span>
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
              Orange County residents facing credit card debt have two primary relief strategies: balance transfers and debt settlement. Understanding the qualification requirements, costs, and long-term impacts of each approach is crucial for making the right decision for your financial situation.
            </div>

            {/* Strategy Comparison Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6" />
                Balance Transfer vs Debt Settlement: Quick Comparison
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Factor</th>
                      <th className="border border-neutral-300 p-4 text-left">Balance Transfer</th>
                      <th className="border border-neutral-300 p-4 text-left">Debt Settlement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Credit Score Required</td>
                      <td className="border border-neutral-300 p-4">670+ (Good to Excellent)</td>
                      <td className="border border-neutral-300 p-4">Any (even poor credit)</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Debt Reduction</td>
                      <td className="border border-neutral-300 p-4">Interest savings only</td>
                      <td className="border border-neutral-300 p-4">30-60% principal reduction</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Credit Impact</td>
                      <td className="border border-neutral-300 p-4">Minimal to positive</td>
                      <td className="border border-neutral-300 p-4">Significant negative impact</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Timeline</td>
                      <td className="border border-neutral-300 p-4">12-21 months promotional</td>
                      <td className="border border-neutral-300 p-4">24-48 months typical</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Tax Implications</td>
                      <td className="border border-neutral-300 p-4">None</td>
                      <td className="border border-neutral-300 p-4">Forgiven debt = taxable income</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-white border border-blue-200">
                <h4 className="font-semibold text-black mb-2">Orange County Context</h4>
                <p className="text-sm text-neutral-700">
                  Orange County's high cost of living and competitive credit market provide unique opportunities and challenges for both balance transfer and debt settlement strategies. The choice often depends on current credit standing and available income.
                </p>
              </div>
            </motion.div>

            {/* Balance Transfer Deep Dive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6" />
                Balance Transfer Strategy for Orange County Residents
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">How Balance Transfers Work</h3>
                  <p className="text-neutral-700 mb-3">
                    Balance transfers involve moving high-interest credit card debt to a new card with a promotional 0% APR period:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Promotional Period:</strong> 12-21 months of 0% APR on transferred balances</li>
                    <li>• <strong>Transfer Fee:</strong> Typically 3-5% of transferred amount (one-time cost)</li>
                    <li>• <strong>Credit Limit:</strong> New card must have sufficient limit for debt transfer</li>
                    <li>• <strong>Payment Strategy:</strong> Pay off entire balance before promotional rate expires</li>
                    <li>• <strong>Post-Promo Rate:</strong> Regular APR kicks in after promotional period</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Best Balance Transfer Cards for Orange County (2025)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Chase Slate Edge</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• 0% APR for 18 months</li>
                        <li>• $0 transfer fee for first 60 days</li>
                        <li>• 17.24-25.99% variable APR after</li>
                        <li>• No annual fee</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Citi Simplicity</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• 0% APR for 21 months</li>
                        <li>• 3% transfer fee</li>
                        <li>• 17.24-27.24% variable APR after</li>
                        <li>• No late fees, no penalty APR</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">BankAmericard Credit Card</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• 0% APR for 21 months</li>
                        <li>• 3% transfer fee ($10 minimum)</li>
                        <li>• 15.24-25.24% variable APR after</li>
                        <li>• No annual fee</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Wells Fargo Reflect</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• 0% APR for 21 months</li>
                        <li>• 3% transfer fee ($5 minimum)</li>
                        <li>• 16.24-27.24% variable APR after</li>
                        <li>• No annual fee</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Balance Transfer Qualification Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Credit Score Requirements</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• <strong>Excellent Credit (750+):</strong> Access to best offers</li>
                        <li>• <strong>Good Credit (670-749):</strong> Most cards available</li>
                        <li>• <strong>Fair Credit (580-669):</strong> Limited options</li>
                        <li>• <strong>Poor Credit (below 580):</strong> Unlikely approval</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Additional Requirements</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Stable income (employment or benefits)</li>
                        <li>• Low debt-to-income ratio (under 40%)</li>
                        <li>• Recent payment history (no 30+ day lates)</li>
                        <li>• Reasonable credit utilization (under 30%)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Orange County Balance Transfer Example</h3>
                  <div className="bg-white border border-orange-200 p-4">
                    <h4 className="font-semibold text-black mb-2">$20,000 Credit Card Debt Scenario</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-black mb-1">Current Situation</h5>
                        <ul className="text-sm text-neutral-700 space-y-1">
                          <li>• 4 cards with balances</li>
                          <li>• Average APR: 24.99%</li>
                          <li>• Minimum payments: $650/month</li>
                          <li>• Payoff time: 34 months</li>
                          <li>• Total interest: $10,100</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-black mb-1">After Balance Transfer</h5>
                        <ul className="text-sm text-neutral-700 space-y-1">
                          <li>• Transfer fee: $600 (3%)</li>
                          <li>• 0% APR for 21 months</li>
                          <li>• Required payment: $980/month</li>
                          <li>• Payoff time: 21 months</li>
                          <li>• <strong>Total savings: $9,500</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Debt Settlement Deep Dive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <TrendingDown className="w-6 h-6" />
                Debt Settlement Strategy for Orange County Residents
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">How Debt Settlement Works</h3>
                  <p className="text-neutral-700 mb-3">
                    Debt settlement involves negotiating with creditors to accept less than the full balance owed:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Stop Payments:</strong> Cease payments to creditors to demonstrate hardship</li>
                    <li>• <strong>Accumulate Funds:</strong> Save money in settlement account instead</li>
                    <li>• <strong>Negotiate Settlements:</strong> Offer lump sum payments at 30-60% of balance</li>
                    <li>• <strong>Legal Protection:</strong> Professional representation during negotiations</li>
                    <li>• <strong>Settlement Implementation:</strong> Pay agreed amounts and get debt forgiveness</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Debt Settlement Process Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <h4 className="font-semibold text-black">Months 1-3: Setup Phase</h4>
                        <p className="text-sm text-neutral-700">Stop payments, begin saving in settlement account, creditors start calling</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <h4 className="font-semibold text-black">Months 4-12: Collection Phase</h4>
                        <p className="text-sm text-neutral-700">Accounts charge off, collection agencies take over, credit score drops significantly</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <h4 className="font-semibold text-black">Months 12-24: Settlement Phase</h4>
                        <p className="text-sm text-neutral-700">Begin settlement negotiations, settle accounts one by one</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      <div>
                        <h4 className="font-semibold text-black">Months 24-48: Completion Phase</h4>
                        <p className="text-sm text-neutral-700">Final settlements completed, credit repair begins</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Orange County Debt Settlement Example</h3>
                  <div className="bg-white border border-gray-200 p-4">
                    <h4 className="font-semibold text-black mb-2">$40,000 Credit Card Debt Scenario</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-black mb-1">Settlement Breakdown</h5>
                        <ul className="text-sm text-neutral-700 space-y-1">
                          <li>• Original debt: $40,000</li>
                          <li>• Settlement payments: $16,000 (40%)</li>
                          <li>• Professional fees: $8,000 (20%)</li>
                          <li>• Tax on forgiven debt: $6,000 (est.)</li>
                          <li>• Total program cost: $30,000</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-black mb-1">Timeline and Impact</h5>
                        <ul className="text-sm text-neutral-700 space-y-1">
                          <li>• Program duration: 36 months</li>
                          <li>• Credit score drop: 100-200 points</li>
                          <li>• Monthly program payment: $835</li>
                          <li>• <strong>Total savings: $10,000</strong></li>
                          <li>• Credit recovery: 2-4 years post-completion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decision Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Target className="w-6 h-6" />
                Orange County Decision Matrix
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">✅ Choose Balance Transfer When:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Good Credit Score:</strong> 670+ FICO score for approval</li>
                    <li>• <strong>Stable Income:</strong> Can afford higher payments during promotional period</li>
                    <li>• <strong>Disciplined Approach:</strong> Committed to paying off debt within promo period</li>
                    <li>• <strong>Moderate Debt Levels:</strong> Under $30K total credit card debt</li>
                    <li>• <strong>Credit Preservation:</strong> Need to maintain good credit for Orange County housing/employment</li>
                    <li>• <strong>No Hardship:</strong> Debt is manageable with interest rate reduction</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="font-semibold text-black mb-3">⚠️ Choose Debt Settlement When:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Poor Credit Score:</strong> Below 650 or unable to qualify for balance transfer cards</li>
                    <li>• <strong>Financial Hardship:</strong> Cannot afford current minimum payments</li>
                    <li>• <strong>High Debt Levels:</strong> $30K+ debt that's unmanageable even with lower interest</li>
                    <li>• <strong>Overwhelming Situation:</strong> Debt continues growing despite payments</li>
                    <li>• <strong>Alternative to Bankruptcy:</strong> Want to avoid Chapter 7/13 filing</li>
                    <li>• <strong>Lump Sum Available:</strong> Access to settlement funds (savings, 401k, family help)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="font-semibold text-black mb-3">❌ Avoid Both When:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Manageable Debt:</strong> Can pay off current debt within 2-3 years with budget adjustments</li>
                    <li>• <strong>Emergency Fund Needed:</strong> Using available cash would eliminate emergency savings</li>
                    <li>• <strong>Stable Payment History:</strong> Current on all payments and debt isn't growing</li>
                    <li>• <strong>Job Security Issues:</strong> Orange County employment concerns that require good credit</li>
                    <li>• <strong>Home Purchase Plans:</strong> Planning to buy Orange County real estate within 2-3 years</li>
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
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County-Specific Considerations</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Housing Market Impact</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>High Home Values:</strong> Orange County median $1.2M requires excellent credit for best mortgage rates</li>
                    <li>• <strong>Rental Requirements:</strong> Many landlords require 700+ credit scores</li>
                    <li>• <strong>Security Deposits:</strong> Poor credit = higher deposits for rentals</li>
                    <li>• <strong>Refinancing Options:</strong> Good credit preserves ability to tap home equity</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Employment Considerations</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Security Clearances:</strong> Military contractors require good credit</li>
                    <li>• <strong>Financial Positions:</strong> Banking/finance jobs check credit reports</li>
                    <li>• <strong>Professional Licenses:</strong> Some licenses review credit issues</li>
                    <li>• <strong>Executive Roles:</strong> C-level positions often include credit checks</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Cost Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Total Cost Comparison: Orange County Examples</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Debt Amount</th>
                      <th className="border border-neutral-300 p-4 text-left">Balance Transfer Total Cost</th>
                      <th className="border border-neutral-300 p-4 text-left">Debt Settlement Total Cost</th>
                      <th className="border border-neutral-300 p-4 text-left">Recommended Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">$15,000</td>
                      <td className="border border-neutral-300 p-4">
                        $450 transfer fee<br/>
                        <strong>Total: $15,450</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        $6,000 settlement<br/>
                        $3,000 fees<br/>
                        $2,250 taxes<br/>
                        <strong>Total: $11,250</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">Balance Transfer (if qualified)</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">$30,000</td>
                      <td className="border border-neutral-300 p-4">
                        $900 transfer fee<br/>
                        <strong>Total: $30,900</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        $12,000 settlement<br/>
                        $6,000 fees<br/>
                        $4,500 taxes<br/>
                        <strong>Total: $22,500</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">Depends on credit/income</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">$50,000</td>
                      <td className="border border-neutral-300 p-4">
                        $1,500 transfer fee<br/>
                        (if approved for limit)<br/>
                        <strong>Total: $51,500</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        $20,000 settlement<br/>
                        $10,000 fees<br/>
                        $7,500 taxes<br/>
                        <strong>Total: $37,500</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">Debt Settlement (if hardship)</td>
                    </tr>
                  </tbody>
                </table>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Debt Strategy Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/debt-consolidation-loans-comparison-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Debt Consolidation Loans: Banks vs Credit Unions vs Online Lenders
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Comprehensive comparison of debt consolidation loan options for Orange County residents.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/credit-card-debt-settlement-major-banks-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Credit Card Debt Settlement: Major Bank Negotiation Strategies
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Specialized strategies for settling debt with Chase, Bank of America, and other major banks.
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
                Need Help Choosing Your Debt Strategy?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get expert analysis of your Orange County debt situation to determine whether balance transfer or debt settlement is the right strategy for your credit profile, income, and financial goals.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Strategy Analysis
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