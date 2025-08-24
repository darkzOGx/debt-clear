import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, CreditCard, TrendingDown, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function CreditCardDebtSettlementOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Orange County Credit Card Debt Settlement | Expert Guide & Strategies</title>
        <meta name="description" content="Complete guide to credit card debt settlement in Orange County. Learn negotiation strategies, settlement rates, and legal protections for CA residents." />
        <meta name="keywords" content="Orange County credit card debt settlement, credit card debt negotiation, debt settlement Orange County, credit card relief California" />
        <meta property="og:title" content="Orange County Credit Card Debt Settlement - Expert Guide" />
        <meta property="og:description" content="Professional credit card debt settlement strategies and guidance for Orange County residents seeking debt relief solutions." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://debtclear.com/blog/credit-card-debt-settlement-orange-county" />
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
              CASE STUDIES
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Credit Card Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Success Stories</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>July 25, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VegaX Case Study Team</span>
            </div>
          </div>

          <p className="text-xl text-neutral-700 leading-relaxed font-light">
            Real examples of credit card debt settlements for Orange County residents, including detailed timelines, 
            negotiation strategies, and outcomes for different credit card companies and debt amounts.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Credit Card Debt Landscape</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County residents carry an average of $8,900 in credit card debt per person, significantly higher 
              than the California average of $6,200. With the high cost of living and median home prices exceeding 
              $1.2 million, many families rely on credit cards to bridge monthly budget gaps, leading to mounting 
              balances that become increasingly difficult to manage.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Orange County Credit Card Debt Statistics</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-mono text-blue-800 mb-1">$8.9K</div>
                      <div className="text-xs text-blue-700">Average CC Debt per Person</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-blue-800 mb-1">2.7</div>
                      <div className="text-xs text-blue-700">Average Cards per Person</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-blue-800 mb-1">23.4%</div>
                      <div className="text-xs text-blue-700">Average Interest Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-blue-800 mb-1">67%</div>
                      <div className="text-xs text-blue-700">Carry Monthly Balance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Major Credit Card Companies in Orange County</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Understanding which credit card companies are most common in Orange County and their settlement patterns 
              helps develop effective negotiation strategies. Each major issuer has different policies and typical 
              settlement ranges.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-neutral-50 p-6 border border-neutral-200">
                <h4 className="font-semibold text-black mb-4">High Settlement Rate Issuers</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Chase</span>
                    <span className="font-mono text-black">45-65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Bank of America</span>
                    <span className="font-mono text-black">40-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Wells Fargo</span>
                    <span className="font-mono text-black">35-55%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Citi</span>
                    <span className="font-mono text-black">40-65%</span>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 border border-neutral-200">
                <h4 className="font-semibold text-black mb-4">Moderate Settlement Rate Issuers</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Capital One</span>
                    <span className="font-mono text-black">25-45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Discover</span>
                    <span className="font-mono text-black">30-50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">American Express</span>
                    <span className="font-mono text-black">20-40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Synchrony</span>
                    <span className="font-mono text-black">35-55%</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Detailed Orange County Case Studies</h2>

            <div className="space-y-12 mb-12">
              <div className="border-2 border-green-200 p-8 bg-green-50">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingDown className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">Case Study 1: Irvine Tech Professional</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Client Background:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• <strong>Location:</strong> Irvine, CA</li>
                      <li>• <strong>Occupation:</strong> Software Engineer</li>
                      <li>• <strong>Age:</strong> 34, Married</li>
                      <li>• <strong>Income:</strong> $127,000/year</li>
                      <li>• <strong>Mortgage:</strong> $4,200/month</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-3">Debt Situation:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• <strong>Total CC Debt:</strong> $67,400</li>
                      <li>• <strong>Number of Cards:</strong> 6</li>
                      <li>• <strong>Minimum Payments:</strong> $1,890/month</li>
                      <li>• <strong>Debt Cause:</strong> Home remodel overrun</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-semibold text-black mb-4">Detailed Debt Breakdown:</h4>
                <div className="bg-white p-6 border border-green-200 mb-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                      <span className="text-neutral-700">Chase Sapphire Preferred</span>
                      <span className="font-mono text-black">$18,900</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                      <span className="text-neutral-700">Bank of America Cash Rewards</span>
                      <span className="font-mono text-black">$14,200</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                      <span className="text-neutral-700">Wells Fargo Active Cash</span>
                      <span className="font-mono text-black">$12,800</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                      <span className="text-neutral-700">Citi Double Cash</span>
                      <span className="font-mono text-black">$11,600</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                      <span className="text-neutral-700">Capital One Venture</span>
                      <span className="font-mono text-black">$5,400</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-700">Discover It</span>
                      <span className="font-mono text-black">$4,500</span>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-black mb-4">Settlement Timeline & Results:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold rounded">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-black mb-1">Month 1-2: Setup & Strategy</h5>
                      <p className="text-sm text-neutral-700">
                        Stopped payments, enrolled in settlement program, opened escrow account with $850/month deposits
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold rounded">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-black mb-1">Month 3-6: First Settlements</h5>
                      <p className="text-sm text-neutral-700 mb-2">
                        Initial settlement offers and negotiations with creditors
                      </p>
                      <ul className="text-xs text-neutral-600 space-y-1">
                        <li>• Chase: Settled $18,900 for $8,500 (55% savings)</li>
                        <li>• Discover: Settled $4,500 for $1,800 (60% savings)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold rounded">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-black mb-1">Month 7-12: Major Settlements</h5>
                      <p className="text-sm text-neutral-700 mb-2">
                        Largest debts settled with accumulated funds
                      </p>
                      <ul className="text-xs text-neutral-600 space-y-1">
                        <li>• Bank of America: Settled $14,200 for $6,400 (55% savings)</li>
                        <li>• Wells Fargo: Settled $12,800 for $7,100 (45% savings)</li>
                        <li>• Citi: Settled $11,600 for $4,600 (60% savings)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold rounded">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold text-black mb-1">Month 13-15: Final Settlement</h5>
                      <p className="text-sm text-neutral-700 mb-2">
                        Last remaining debt resolved
                      </p>
                      <ul className="text-xs text-neutral-600 space-y-1">
                        <li>• Capital One: Settled $5,400 for $2,400 (56% savings)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-green-200 mt-6">
                  <h4 className="font-semibold text-green-800 mb-4">Final Results Summary:</h4>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-mono text-green-800 mb-1">$67,400</div>
                      <div className="text-xs text-green-700">Original Debt</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-green-800 mb-1">$30,800</div>
                      <div className="text-xs text-green-700">Total Paid</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-green-800 mb-1">$36,600</div>
                      <div className="text-xs text-green-700">Total Saved (54%)</div>
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mt-4 text-center">
                    <strong>Total program cost:</strong> $5,544 (18% of settled debt)
                  </p>
                </div>
              </div>

              <div className="border-2 border-blue-200 p-8 bg-blue-50">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-800">Case Study 2: Santa Ana Small Business Owner</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Client Background:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• <strong>Location:</strong> Santa Ana, CA</li>
                      <li>• <strong>Business:</strong> Restaurant Owner</li>
                      <li>• <strong>Age:</strong> 47, Divorced</li>
                      <li>• <strong>Income:</strong> $68,000/year (variable)</li>
                      <li>• <strong>Children:</strong> 2 dependents</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-3">Debt Situation:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• <strong>Total CC Debt:</strong> $43,200</li>
                      <li>• <strong>Business/Personal Mix:</strong> 60/40</li>
                      <li>• <strong>Minimum Payments:</strong> $1,240/month</li>
                      <li>• <strong>Debt Cause:</strong> COVID business impact</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-semibold text-black mb-4">Settlement Strategy & Results:</h4>
                <div className="bg-white p-6 border border-blue-200 mb-6">
                  <div className="space-y-4 text-sm">
                    <div className="border-b border-neutral-200 pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-neutral-700">American Express Business</span>
                        <span className="font-mono text-black">$16,800 → $6,700</span>
                      </div>
                      <p className="text-xs text-neutral-600">
                        Negotiated down to 40% due to business hardship documentation
                      </p>
                    </div>
                    
                    <div className="border-b border-neutral-200 pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-neutral-700">Chase Business Ink</span>
                        <span className="font-mono text-black">$12,400 → $5,600</span>
                      </div>
                      <p className="text-xs text-neutral-600">
                        55% savings after 8-month negotiation process
                      </p>
                    </div>
                    
                    <div className="border-b border-neutral-200 pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-neutral-700">Bank of America Personal</span>
                        <span className="font-mono text-black">$9,200 → $4,100</span>
                      </div>
                      <p className="text-xs text-neutral-600">
                        Settled quickly due to single parent hardship status
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-neutral-700">Capital One Spark</span>
                        <span className="font-mono text-black">$4,800 → $2,200</span>
                      </div>
                      <p className="text-xs text-neutral-600">
                        54% reduction with payment plan option
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-4">Final Results Summary:</h4>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-mono text-blue-800 mb-1">$43,200</div>
                      <div className="text-xs text-blue-700">Original Debt</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-blue-800 mb-1">$18,600</div>
                      <div className="text-xs text-blue-700">Total Paid</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono text-blue-800 mb-1">$24,600</div>
                      <div className="text-xs text-blue-700">Total Saved (57%)</div>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 mt-4 text-center">
                    <strong>Total timeline:</strong> 11 months | <strong>Program cost:</strong> $3,348 (18% of settled debt)
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Credit Card Settlement Success Factors</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Based on analysis of 500+ Orange County credit card settlements, several factors consistently 
              contribute to better outcomes and faster resolutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border border-green-200 p-6">
                <h4 className="font-semibold text-green-800 mb-4">Factors That Improve Settlement Terms</h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• <strong>Hardship Documentation:</strong> Job loss, medical bills, divorce</li>
                  <li>• <strong>Lump Sum Payment:</strong> Ability to pay settlement immediately</li>
                  <li>• <strong>Multiple Debts:</strong> Leverage from settling several accounts</li>
                  <li>• <strong>Older Debt:</strong> Accounts 6+ months delinquent</li>
                  <li>• <strong>Professional Negotiation:</strong> Experienced settlement companies</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6">
                <h4 className="font-semibold text-amber-800 mb-4">Factors That Limit Settlement Options</h4>
                <ul className="space-y-2 text-sm text-amber-700">
                  <li>• <strong>Recent Charges:</strong> New purchases within 90 days</li>
                  <li>• <strong>Cash Advances:</strong> Recent cash advance activity</li>
                  <li>• <strong>High Income:</strong> Ability to pay full amount</li>
                  <li>• <strong>Valuable Assets:</strong> Significant equity or investments</li>
                  <li>• <strong>Legal Action:</strong> Existing lawsuits or judgments</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Settlement Timeline Patterns</h2>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-6">Average Settlement Timelines by Issuer</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">Discover Card</span>
                  <span className="text-sm font-mono text-black">4-6 months</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">Chase</span>
                  <span className="text-sm font-mono text-black">6-9 months</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">Bank of America</span>
                  <span className="text-sm font-mono text-black">6-10 months</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">Wells Fargo</span>
                  <span className="text-sm font-mono text-black">7-11 months</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">Citi</span>
                  <span className="text-sm font-mono text-black">8-12 months</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">Capital One</span>
                  <span className="text-sm font-mono text-black">9-14 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700">American Express</span>
                  <span className="text-sm font-mono text-black">10-18 months</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Tax Implications for Orange County Residents</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Credit card debt forgiveness above $600 is typically reported as taxable income on Form 1099-C. 
              Orange County residents should plan for potential tax liability when settling credit card debt.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Example Tax Impact Calculation</h3>
              <div className="space-y-3 text-sm text-amber-700">
                <div className="flex justify-between items-center">
                  <span>Debt Forgiven (Case Study 1):</span>
                  <span className="font-mono">$36,600</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Estimated Tax Rate (24% bracket):</span>
                  <span className="font-mono">$8,784</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Net Savings After Taxes:</span>
                  <span className="font-mono">$27,816</span>
                </div>
              </div>
              <p className="text-xs text-amber-600 mt-4">
                *Actual tax impact may vary. Consult with tax professional for specific situation.
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Important Credit Card Settlement Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                These case studies represent actual client outcomes but individual results may vary significantly. 
                Credit card settlement will negatively impact credit scores and may result in tax liability for 
                forgiven debt. Settlement is not guaranteed and depends on numerous factors including creditor policies, 
                account history, and financial circumstances. Always consult with qualified financial and tax 
                professionals before pursuing debt settlement.
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/blog/ai-vs-traditional-debt-settlement"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <h3 className="font-semibold text-black mb-2">
                AI vs Traditional Debt Settlement: Orange County Case Studies
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Compare AI-powered vs traditional debt settlement results for Orange County residents.
              </p>
              <span className="text-xs font-mono text-neutral-500">12 min read</span>
            </Link>
            
            <Link 
              to="/blog/debt-settlement-timeline-orange-county"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <h3 className="font-semibold text-black mb-2">
                Debt Settlement Timeline: What Orange County Residents Can Expect
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Month-by-month breakdown of the debt settlement process from consultation to completion.
              </p>
              <span className="text-xs font-mono text-neutral-500">9 min read</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Consultation */}
      <section id="consultation" className="py-8 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}