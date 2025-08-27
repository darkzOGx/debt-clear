import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, DollarSign, Calculator, TrendingDown, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtSettlementVsBankruptcyCostComparisonOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Debt Settlement vs Bankruptcy Cost Comparison | Orange County Guide</title>
        <meta name="description" content="Comprehensive cost comparison of debt settlement vs bankruptcy for Orange County residents. Analyze total costs, fees, and long-term financial impact." />
        <meta name="keywords" content="debt settlement vs bankruptcy costs Orange County, bankruptcy vs settlement comparison California, debt relief cost analysis" />
        <meta property="og:title" content="Debt Settlement vs Bankruptcy Cost Comparison - Orange County" />
        <meta property="og:description" content="Detailed cost analysis comparing debt settlement and bankruptcy options for Orange County residents with expert financial guidance." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://orangecountydebtcenter.com/" />
      </Helmet>
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
              COST ANALYSIS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Orange County Debt Settlement vs Bankruptcy:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Complete Cost Comparison 2025</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
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
              <span>Financial Analyst</span>
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
              Orange County residents facing overwhelming debt must carefully weigh the true costs of debt settlement versus bankruptcy. This comprehensive analysis reveals hidden fees, long-term financial impacts, and total cost comparisons to help make the most informed decision for your financial future.
            </div>

            {/* Cost Overview Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 border border-neutral-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6" />
                Orange County Cost Overview: Debt Settlement vs Bankruptcy
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Cost Factor</th>
                      <th className="border border-neutral-300 p-4 text-left">Debt Settlement</th>
                      <th className="border border-neutral-300 p-4 text-left">Chapter 7 Bankruptcy</th>
                      <th className="border border-neutral-300 p-4 text-left">Chapter 13 Bankruptcy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Attorney Fees</td>
                      <td className="border border-neutral-300 p-4">$2,500-$5,000</td>
                      <td className="border border-neutral-300 p-4">$1,500-$3,500</td>
                      <td className="border border-neutral-300 p-4">$3,000-$6,000</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Court Filing Fees</td>
                      <td className="border border-neutral-300 p-4">$0</td>
                      <td className="border border-neutral-300 p-4">$338</td>
                      <td className="border border-neutral-300 p-4">$313</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Credit Counseling</td>
                      <td className="border border-neutral-300 p-4">$0-$100</td>
                      <td className="border border-neutral-300 p-4">$50-$100</td>
                      <td className="border border-neutral-300 p-4">$50-$100</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Settlement Payments</td>
                      <td className="border border-neutral-300 p-4">30-60% of debt</td>
                      <td className="border border-neutral-300 p-4">$0</td>
                      <td className="border border-neutral-300 p-4">100% of priority debts</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Tax Implications</td>
                      <td className="border border-neutral-300 p-4">Income tax on forgiven debt</td>
                      <td className="border border-neutral-300 p-4">Usually none</td>
                      <td className="border border-neutral-300 p-4">Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-white border border-neutral-200">
                <h4 className="font-semibold text-black mb-2">Orange County Context</h4>
                <p className="text-sm text-neutral-700">
                  Orange County's high cost of living and property values significantly impact both debt settlement and bankruptcy costs. Attorney fees tend to be 20-30% higher than national averages, and asset protection becomes more critical due to substantial home equity.
                </p>
              </div>
            </motion.div>

            {/* Debt Settlement Detailed Costs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Debt Settlement: Complete Cost Breakdown
              </h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Professional Fees</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Attorney Representation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Orange County attorneys: $2,500-$5,000</li>
                        <li>• Flat fee or percentage of debt</li>
                        <li>• Complex cases may cost more</li>
                        <li>• Payment plans often available</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Settlement Company Fees</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• 20-25% of enrolled debt typical</li>
                        <li>• $50-100 monthly maintenance fees</li>
                        <li>• Setup fees: $100-500</li>
                        <li>• Total: $3,000-$8,000 for $50K debt</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Settlement Payment Costs</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County debt settlement payment examples:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white border border-neutral-200 p-4">
                      <h4 className="font-semibold text-black mb-2">$50,000 Total Debt Example</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Settlement at 40%: $20,000 payment to creditors</li>
                        <li>• Professional fees: $3,000-5,000</li>
                        <li>• Tax implications: $3,000-7,000 (varies by income)</li>
                        <li>• <strong>Total Cost: $26,000-32,000</strong></li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-neutral-200 p-4">
                      <h4 className="font-semibold text-black mb-2">$100,000 Total Debt Example</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Settlement at 45%: $45,000 payment to creditors</li>
                        <li>• Professional fees: $5,000-8,000</li>
                        <li>• Tax implications: $6,000-15,000 (varies by income)</li>
                        <li>• <strong>Total Cost: $56,000-68,000</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-black" />
                    Hidden and Ongoing Costs
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Credit Score Impact:</strong> 100-200 point drop, higher borrowing costs for years</li>
                    <li>• <strong>Collection Activity:</strong> Potential lawsuit defense costs</li>
                    <li>• <strong>Lost Opportunity:</strong> Inability to access credit during process</li>
                    <li>• <strong>Orange County Living:</strong> High cost of living with damaged credit more challenging</li>
                    <li>• <strong>Insurance Rates:</strong> Higher premiums due to credit score impact</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Bankruptcy Detailed Costs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Bankruptcy: Complete Cost Analysis</h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Chapter 7 Bankruptcy Costs</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Required Costs</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Filing fee: $338</li>
                        <li>• Attorney fees: $1,500-3,500</li>
                        <li>• Credit counseling: $50-100</li>
                        <li>• Debtor education: $50-100</li>
                        <li>• Document preparation: $100-300</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Potential Additional Costs</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Asset appraisals: $300-1,000</li>
                        <li>• Reaffirmation agreements: $500-1,500</li>
                        <li>• Trustee fees (if assets): 25% of proceeds</li>
                        <li>• Amendment fees: $338 each</li>
                        <li>• Emergency filing: $75</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-white border border-neutral-200">
                    <h4 className="font-semibold text-black mb-2">Orange County Chapter 7 Total: $2,000-5,500</h4>
                    <p className="text-sm text-neutral-700">
                      Most Orange County Chapter 7 cases cost $2,500-4,000 total, with complex asset cases reaching $5,500+
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Chapter 13 Bankruptcy Costs</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Upfront Costs</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Filing fee: $313</li>
                        <li>• Attorney fees: $3,000-6,000</li>
                        <li>• Credit counseling: $50-100</li>
                        <li>• Debtor education: $50-100</li>
                        <li>• Plan preparation: $500-1,000</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Ongoing Costs (3-5 years)</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Trustee fees: 3-10% of payments</li>
                        <li>• Plan modification fees: $338 each</li>
                        <li>• Annual tax return reviews</li>
                        <li>• Attorney hourly fees for issues</li>
                        <li>• Court appearance costs</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-white border border-neutral-200">
                    <h4 className="font-semibold text-black mb-2">Orange County Chapter 13 Example</h4>
                    <p className="text-sm text-neutral-700">
                      $4,000 upfront + $150,000 in plan payments over 5 years + $4,500 trustee fees = $158,500 total cost for a typical Orange County case
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orange County Specific Factors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County-Specific Cost Factors</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">High Property Values Impact</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Asset Protection Costs:</strong> More complex due to high home values</li>
                    <li>• <strong>Homestead Exemption:</strong> $700K limit may not cover full equity</li>
                    <li>• <strong>Trustee Interest:</strong> Higher asset values increase bankruptcy complexity</li>
                    <li>• <strong>Chapter 13 Payments:</strong> Higher disposable income calculations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Professional Fee Premiums</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Attorney Rates:</strong> 20-30% above national average</li>
                    <li>• <strong>Court Efficiency:</strong> Central District moves faster but costs more</li>
                    <li>• <strong>Specialist Needs:</strong> Complex cases require expensive specialists</li>
                    <li>• <strong>Document Costs:</strong> Higher costs for appraisals and valuations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 5-Year Total Cost Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <TrendingDown className="w-6 h-6" />
                5-Year Total Cost Analysis: Orange County Examples
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Scenario</th>
                      <th className="border border-neutral-300 p-4 text-left">Debt Settlement</th>
                      <th className="border border-neutral-300 p-4 text-left">Chapter 7</th>
                      <th className="border border-neutral-300 p-4 text-left">Chapter 13</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">$30K Credit Card Debt<br/>$80K Income</td>
                      <td className="border border-neutral-300 p-4">
                        $18,000 settlements<br/>
                        $3,000 fees<br/>
                        $2,000 taxes<br/>
                        <strong>Total: $23,000</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        $3,000 attorney/fees<br/>
                        $0 debt payment<br/>
                        $0 taxes<br/>
                        <strong>Total: $3,000</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        $4,000 upfront<br/>
                        $30,000 plan payments<br/>
                        $1,000 trustee fees<br/>
                        <strong>Total: $35,000</strong>
                      </td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">$80K Mixed Debt<br/>$120K Income</td>
                      <td className="border border-neutral-300 p-4">
                        $40,000 settlements<br/>
                        $6,000 fees<br/>
                        $8,000 taxes<br/>
                        <strong>Total: $54,000</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        $4,000 attorney/fees<br/>
                        $0 debt payment<br/>
                        $0 taxes<br/>
                        <strong>Total: $4,000</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        $5,000 upfront<br/>
                        $80,000 plan payments<br/>
                        $2,500 trustee fees<br/>
                        <strong>Total: $87,500</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">$150K Mixed Debt<br/>$200K Income</td>
                      <td className="border border-neutral-300 p-4">
                        $75,000 settlements<br/>
                        $10,000 fees<br/>
                        $18,000 taxes<br/>
                        <strong>Total: $103,000</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        Above means test<br/>
                        Must file Chapter 13<br/>
                        <strong>Not Available</strong>
                      </td>
                      <td className="border border-neutral-300 p-4">
                        $6,000 upfront<br/>
                        $150,000 plan payments<br/>
                        $4,000 trustee fees<br/>
                        <strong>Total: $160,000</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Long-term Financial Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Long-Term Financial Impact Analysis</h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Credit Score Recovery Timeline</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Debt Settlement</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Year 1: 450-550 score</li>
                        <li>• Year 2: 500-600 score</li>
                        <li>• Year 3: 550-650 score</li>
                        <li>• Year 5: 600-700 score</li>
                        <li>• 7 years: Full recovery possible</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Chapter 7</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Year 1: 500-580 score</li>
                        <li>• Year 2: 550-630 score</li>
                        <li>• Year 3: 600-680 score</li>
                        <li>• Year 5: 650-720 score</li>
                        <li>• 10 years: Bankruptcy removed</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Chapter 13</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• During plan: 500-600 score</li>
                        <li>• Plan completion: 600-650</li>
                        <li>• Year 6: 650-700 score</li>
                        <li>• Year 8: 700+ possible</li>
                        <li>• 7 years: Bankruptcy removed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Orange County Housing Market Impact</h3>
                  <p className="text-neutral-700 mb-3">
                    Credit score impact affects Orange County home buying ability:
                  </p>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Median home price: $1.2M requires excellent credit for best rates</li>
                    <li>• 100-point credit difference = 1% higher mortgage rate</li>
                    <li>• On $960K mortgage: 1% rate difference = $500/month = $180K over 30 years</li>
                    <li>• FHA loans available 2 years after Chapter 7, 1 year after Chapter 13 completion</li>
                    <li>• Conventional loans: 4 years after Chapter 7, 2 years after Chapter 13</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Decision Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Decision Framework</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Choose Debt Settlement When:</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Substantial Assets:</strong> Orange County home equity exceeds exemptions</li>
                    <li>• <strong>Income Too High:</strong> Above Chapter 7 means test limits</li>
                    <li>• <strong>Business Concerns:</strong> Professional licenses or business ownership</li>
                    <li>• <strong>Selective Relief:</strong> Only need help with specific debts</li>
                    <li>• <strong>Privacy Important:</strong> Bankruptcy is public record</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Choose Bankruptcy When:</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Overwhelming Debt:</strong> Debt settlement costs approach debt amount</li>
                    <li>• <strong>Limited Income:</strong> Qualify for Chapter 7 means test</li>
                    <li>• <strong>Immediate Relief:</strong> Need automatic stay protection</li>
                    <li>• <strong>Multiple Lawsuits:</strong> Facing or expecting litigation</li>
                    <li>• <strong>Long-term Planning:</strong> Fresh start outweighs short-term costs</li>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Cost Analysis Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/bankruptcy-vs-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Bankruptcy vs Debt Settlement: Complete Comparison
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Detailed analysis of bankruptcy and debt settlement options beyond just costs.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/debt-settlement-fees-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Debt Settlement Fees: Understanding the Costs
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Transparent breakdown of debt settlement fees and what's legal in Orange County.
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
                Need a Personalized Cost Analysis?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Every Orange County resident's financial situation is unique. Get a detailed cost comparison of debt settlement vs bankruptcy based on your specific circumstances and debt levels.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Cost Analysis
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