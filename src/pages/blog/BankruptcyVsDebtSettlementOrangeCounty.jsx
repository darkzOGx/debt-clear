import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, DollarSign, TrendingDown, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BankruptcyVsDebtSettlementOrangeCounty() {
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
              FINANCIAL PLANNING
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Orange County Bankruptcy vs Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Complete Comparison</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 1, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VegaX Financial Planning Team</span>
            </div>
          </div>

          <p className="text-xl text-neutral-700 leading-relaxed font-light">
            Detailed analysis of bankruptcy and debt settlement options for Orange County residents, 
            including costs, timelines, credit impact, and which option is best for different financial situations.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Understanding Your Options in Orange County</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              When facing overwhelming debt in Orange County, two primary relief options emerge: bankruptcy and debt settlement. 
              With the median household income of $84,000 and average debt of $67,000, many Orange County residents find 
              themselves caught between these choices. This comprehensive analysis examines both options specifically for 
              Orange County's unique economic landscape.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Orange County Debt Crisis by the Numbers</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-mono text-amber-800 mb-2">32%</div>
                  <div className="text-sm text-amber-700">OC Residents with High Debt-to-Income Ratio</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-amber-800 mb-2">$67K</div>
                  <div className="text-sm text-amber-700">Average Household Debt</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-amber-800 mb-2">1,247</div>
                  <div className="text-sm text-amber-700">Bankruptcy Filings (2023)</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Bankruptcy in Orange County: Chapter 7 vs Chapter 13</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County residents have access to two primary bankruptcy options, each with distinct requirements 
              and outcomes based on income and asset levels.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 border border-blue-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-800">Chapter 7 Bankruptcy</h3>
                </div>
                <div className="space-y-3 text-sm text-blue-700">
                  <div><strong>Timeline:</strong> 3-6 months</div>
                  <div><strong>Cost:</strong> $1,500-$3,500 (attorney + court fees)</div>
                  <div><strong>Income Limit:</strong> Must pass means test</div>
                  <div><strong>Asset Protection:</strong> Limited exemptions</div>
                  <div><strong>Debts Discharged:</strong> Most unsecured debts</div>
                  <div><strong>Credit Impact:</strong> 7-10 years on credit report</div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Chapter 13 Bankruptcy</h3>
                </div>
                <div className="space-y-3 text-sm text-green-700">
                  <div><strong>Timeline:</strong> 3-5 years</div>
                  <div><strong>Cost:</strong> $2,500-$5,000 (attorney + court fees)</div>
                  <div><strong>Income Requirement:</strong> Regular income needed</div>
                  <div><strong>Asset Protection:</strong> Keep most assets</div>
                  <div><strong>Payment Plan:</strong> 3-5 year repayment</div>
                  <div><strong>Credit Impact:</strong> 7 years on credit report</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-black mb-4">Orange County Bankruptcy Exemptions</h3>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              California offers two exemption systems, and Orange County residents can choose the more beneficial option:
            </p>

            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h4 className="font-semibold text-black mb-4">California System 1 (Popular for OC Homeowners)</h4>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li>• <strong>Homestead:</strong> $600,000 (families), $300,000 (single), $600,000 (65+ or disabled)</li>
                <li>• <strong>Motor Vehicle:</strong> $3,325 per vehicle</li>
                <li>• <strong>Personal Property:</strong> $8,000 total</li>
                <li>• <strong>Wildcard:</strong> $1,700 plus unused homestead up to $12,575</li>
              </ul>
              
              <h4 className="font-semibold text-black mb-4">California System 2</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• <strong>Homestead:</strong> $31,950</li>
                <li>• <strong>Motor Vehicle:</strong> $5,350</li>
                <li>• <strong>Personal Property:</strong> $13,400</li>
                <li>• <strong>Wildcard:</strong> $1,425 plus $14,500</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Debt Settlement for Orange County Residents</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Debt settlement involves negotiating with creditors to accept less than the full amount owed. 
              This option has gained popularity in Orange County due to its flexibility and potential for 
              preserving assets while reducing debt burdens.
            </p>

            <div className="bg-green-50 border border-green-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                Debt Settlement Process & Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold rounded">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Months 1-2: Setup & Strategy</h4>
                    <p className="text-sm text-green-700">
                      Free consultation, financial analysis, escrow account setup, initial creditor contact
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold rounded">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Months 3-12: Negotiations</h4>
                    <p className="text-sm text-green-700">
                      Build settlement fund, creditor negotiations, settlement offers, payment arrangements
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold rounded">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Months 12-24: Completion</h4>
                    <p className="text-sm text-green-700">
                      Final settlements, debt discharge letters, credit report updates, program completion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Side-by-Side Comparison</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-neutral-200">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="border border-neutral-200 p-4 text-left font-semibold text-black">Factor</th>
                    <th className="border border-neutral-200 p-4 text-left font-semibold text-black">Chapter 7</th>
                    <th className="border border-neutral-200 p-4 text-left font-semibold text-black">Chapter 13</th>
                    <th className="border border-neutral-200 p-4 text-left font-semibold text-black">Debt Settlement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-200 p-4 font-semibold">Timeline</td>
                    <td className="border border-neutral-200 p-4 text-sm">3-6 months</td>
                    <td className="border border-neutral-200 p-4 text-sm">3-5 years</td>
                    <td className="border border-neutral-200 p-4 text-sm">12-24 months</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-200 p-4 font-semibold">Total Cost</td>
                    <td className="border border-neutral-200 p-4 text-sm">$1,500-$3,500</td>
                    <td className="border border-neutral-200 p-4 text-sm">$2,500-$5,000</td>
                    <td className="border border-neutral-200 p-4 text-sm">15-25% of settled debt</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 p-4 font-semibold">Credit Impact</td>
                    <td className="border border-neutral-200 p-4 text-sm">7-10 years</td>
                    <td className="border border-neutral-200 p-4 text-sm">7 years</td>
                    <td className="border border-neutral-200 p-4 text-sm">2-4 years</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-200 p-4 font-semibold">Asset Protection</td>
                    <td className="border border-neutral-200 p-4 text-sm">Limited by exemptions</td>
                    <td className="border border-neutral-200 p-4 text-sm">Keep most assets</td>
                    <td className="border border-neutral-200 p-4 text-sm">Full asset protection</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 p-4 font-semibold">Public Record</td>
                    <td className="border border-neutral-200 p-4 text-sm">Yes, 10 years</td>
                    <td className="border border-neutral-200 p-4 text-sm">Yes, 7 years</td>
                    <td className="border border-neutral-200 p-4 text-sm">No</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-200 p-4 font-semibold">Employment Impact</td>
                    <td className="border border-neutral-200 p-4 text-sm">Possible for financial jobs</td>
                    <td className="border border-neutral-200 p-4 text-sm">Possible for financial jobs</td>
                    <td className="border border-neutral-200 p-4 text-sm">Minimal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Case Studies</h2>

            <div className="space-y-8 mb-12">
              <div className="border border-neutral-200 p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Case 1: Irvine Tech Executive</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Financial Profile:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Income: $145,000/year</li>
                      <li>• Debt: $89,000 (credit cards, personal loans)</li>
                      <li>• Assets: $850,000 home, $45,000 401k</li>
                      <li>• Age: 42, married with 2 children</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Best Option: Debt Settlement</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Reason: Income too high for Chapter 7</li>
                      <li>• Chapter 13 would require full repayment</li>
                      <li>• Settlement reduced debt to $34,000</li>
                      <li>• Preserved job and security clearance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Case 2: Santa Ana Small Business Owner</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Financial Profile:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Income: $38,000/year (variable)</li>
                      <li>• Debt: $156,000 (business & personal)</li>
                      <li>• Assets: $280,000 home, business equipment</li>
                      <li>• Age: 55, single</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Best Option: Chapter 7 Bankruptcy</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Reason: Low income, qualified for Chapter 7</li>
                      <li>• Home protected by California exemptions</li>
                      <li>• Business debt included in discharge</li>
                      <li>• Fresh start in 6 months</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Case 3: Huntington Beach Retiree</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Financial Profile:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Income: $67,000/year (pension + SS)</li>
                      <li>• Debt: $78,000 (medical, credit cards)</li>
                      <li>• Assets: $1.2M home, $340,000 retirement</li>
                      <li>• Age: 68, widowed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Best Option: Chapter 13 Bankruptcy</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Reason: Protect valuable home asset</li>
                      <li>• Stable fixed income for payments</li>
                      <li>• Reduced payment plan over 3 years</li>
                      <li>• No risk to retirement accounts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Decision Framework for Orange County Residents</h2>
            
            <div className="bg-black text-white p-8 mb-8">
              <h3 className="text-xl font-light mb-6">Choose Debt Settlement If:</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• You want to avoid public bankruptcy records</li>
                <li>• Your job requires security clearance or financial trustworthiness</li>
                <li>• You have significant assets you want to protect</li>
                <li>• Your income is too high to qualify for Chapter 7</li>
                <li>• You prefer a private resolution process</li>
                <li>• You can afford monthly settlement fund payments</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-6">Choose Chapter 7 Bankruptcy If:</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Your income qualifies under the means test</li>
                <li>• You want the fastest debt relief (3-6 months)</li>
                <li>• You have few assets to protect</li>
                <li>• You cannot afford debt settlement payments</li>
                <li>• You want complete legal protection from creditors</li>
                <li>• Your debt includes student loans or taxes (limited exceptions)</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-6">Choose Chapter 13 Bankruptcy If:</h3>
              <ul className="space-y-2 text-green-700">
                <li>• You have regular income but don't qualify for Chapter 7</li>
                <li>• You want to keep valuable assets (home, car)</li>
                <li>• You're behind on mortgage or car payments</li>
                <li>• You have non-dischargeable debts to address</li>
                <li>• You prefer court-supervised payment plan</li>
                <li>• You want to strip junior liens on your home</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County-Specific Considerations</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">High Cost of Living Impact</h4>
                <p className="text-neutral-700 text-sm">
                  Orange County's high cost of living affects means test calculations for bankruptcy and 
                  settlement fund requirements. Local median income figures are significantly higher than 
                  state averages, potentially disqualifying higher earners from Chapter 7.
                </p>
              </div>
              
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">Real Estate Values</h4>
                <p className="text-neutral-700 text-sm">
                  With median home values exceeding $1.2 million, many Orange County residents have 
                  significant home equity that affects both bankruptcy exemption planning and debt 
                  settlement strategies.
                </p>
              </div>
              
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">Employment Sectors</h4>
                <p className="text-neutral-700 text-sm">
                  Orange County's concentration of tech, healthcare, and finance professionals means 
                  many residents need to consider employment impacts when choosing between bankruptcy 
                  and debt settlement.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Important Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                This comparison is for educational purposes only and does not constitute legal or financial advice. 
                Individual circumstances vary significantly, and the best choice depends on your specific situation. 
                Always consult with qualified bankruptcy attorneys and debt settlement professionals before making 
                decisions. Laws and regulations change frequently, and this information may not reflect current 
                requirements.
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
              to="/blog/orange-county-debt-settlement-laws"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <h3 className="font-semibold text-black mb-2">
                Orange County Debt Settlement Laws: What You Need to Know
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Understanding California's debt settlement regulations and consumer protections.
              </p>
              <span className="text-xs font-mono text-neutral-500">8 min read</span>
            </Link>
            
            <Link 
              to="/blog/property-protection-debt-settlement-orange-county"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <h3 className="font-semibold text-black mb-2">
                Orange County Property Protection During Debt Settlement
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                How to protect your Orange County home and assets during debt settlement.
              </p>
              <span className="text-xs font-mono text-neutral-500">12 min read</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}