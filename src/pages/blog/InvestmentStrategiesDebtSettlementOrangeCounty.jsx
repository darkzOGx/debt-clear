import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, DollarSign, BarChart3, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function InvestmentStrategiesDebtSettlementOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Investment Strategies During Debt Settlement | Orange County Guide</title>
        <meta name="description" content="Smart investment strategies for Orange County residents during debt settlement. Balance debt relief with wealth building and financial recovery planning." />
        <meta name="keywords" content="investment strategies debt settlement Orange County, investing during debt relief, financial recovery California, wealth building debt settlement" />
        <meta property="og:title" content="Investment Strategies During Debt Settlement - Orange County" />
        <meta property="og:description" content="Expert investment guidance for Orange County residents managing debt settlement while building long-term wealth and financial stability." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://debtclear.com/blog/investment-strategies-debt-settlement-orange-county" />
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
              FINANCIAL PLANNING
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Investment Strategies After Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Wealth Building</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 8, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Investment Advisor</span>
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
              After completing debt settlement, Orange County residents need strategic investment approaches to rebuild wealth in one of California's most expensive markets. This comprehensive guide outlines proven investment strategies tailored for post-debt relief financial recovery.
            </div>

            {/* Investment Readiness Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6" />
                Investment Readiness: Post-Debt Settlement Checklist
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Before You Invest</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500"></div>
                      All settlement agreements completed
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500"></div>
                      Emergency fund established (3-6 months expenses)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500"></div>
                      Stable income source secured
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500"></div>
                      Budget allows for 10-15% savings rate
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Orange County Considerations</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500"></div>
                      Higher emergency fund due to OC costs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500"></div>
                      Tax-advantaged accounts prioritized
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500"></div>
                      Consider housing cost volatility
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500"></div>
                      Plan for high healthcare expenses
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Investment Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Strategic Investment Timeline After Debt Relief</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Year 1: Foundation Building
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Focus on safe, liquid investments while establishing investment habits:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• High-yield savings account (emergency fund completion)</li>
                    <li>• Employer 401(k) up to company match</li>
                    <li>• Roth IRA with conservative target-date fund</li>
                    <li>• Money market accounts for short-term goals</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Years 2-3: Growth Transition
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Introduce growth investments while maintaining safety:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Increase stock allocation to 60-70%</li>
                    <li>• Add low-cost index funds (S&P 500, Total Market)</li>
                    <li>• International diversification (20-30%)</li>
                    <li>• Begin taxable investment account</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <PieChart className="w-5 h-5" />
                    Years 4+: Wealth Optimization
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Maximize tax-efficiency and explore advanced strategies:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Tax-loss harvesting in taxable accounts</li>
                    <li>• Real estate investment trusts (REITs)</li>
                    <li>• Consider individual stocks (max 5-10%)</li>
                    <li>• Evaluate direct real estate opportunities</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Portfolio Allocations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Recommended Portfolio Allocations by Age</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Age Range</th>
                      <th className="border border-neutral-300 p-4 text-left">Stock Allocation</th>
                      <th className="border border-neutral-300 p-4 text-left">Bond Allocation</th>
                      <th className="border border-neutral-300 p-4 text-left">Alternative/Cash</th>
                      <th className="border border-neutral-300 p-4 text-left">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">20s-30s</td>
                      <td className="border border-neutral-300 p-4">85-90%</td>
                      <td className="border border-neutral-300 p-4">5-10%</td>
                      <td className="border border-neutral-300 p-4">5%</td>
                      <td className="border border-neutral-300 p-4">High</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">40s</td>
                      <td className="border border-neutral-300 p-4">70-80%</td>
                      <td className="border border-neutral-300 p-4">15-25%</td>
                      <td className="border border-neutral-300 p-4">5%</td>
                      <td className="border border-neutral-300 p-4">Moderate-High</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">50s</td>
                      <td className="border border-neutral-300 p-4">60-70%</td>
                      <td className="border border-neutral-300 p-4">25-35%</td>
                      <td className="border border-neutral-300 p-4">5%</td>
                      <td className="border border-neutral-300 p-4">Moderate</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">60s+</td>
                      <td className="border border-neutral-300 p-4">40-60%</td>
                      <td className="border border-neutral-300 p-4">35-50%</td>
                      <td className="border border-neutral-300 p-4">5-10%</td>
                      <td className="border border-neutral-300 p-4">Conservative</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4">
                <p className="text-sm text-neutral-700">
                  <strong>Post-Debt Settlement Adjustment:</strong> Consider reducing stock allocation by 10-15% initially to rebuild confidence and maintain stability during recovery.
                </p>
              </div>
            </motion.div>

            {/* Specific Investment Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Recommended Investments for Orange County Recovery</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Core Holdings (70-80% of portfolio)</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 p-4">
                      <h4 className="font-semibold text-black mb-2">US Total Market Index</h4>
                      <p className="text-sm text-neutral-600 mb-2">Ticker: VTI, FZROX</p>
                      <p className="text-sm text-neutral-700">Broad diversification across all US companies. Low fees, consistent returns.</p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4">
                      <h4 className="font-semibold text-black mb-2">International Index Fund</h4>
                      <p className="text-sm text-neutral-600 mb-2">Ticker: VTIAX, FTIHX</p>
                      <p className="text-sm text-neutral-700">Geographic diversification, currency protection, different economic cycles.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Satellite Holdings (20-30%)</h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 border border-purple-200 p-4">
                      <h4 className="font-semibold text-black mb-2">Bond Index Fund</h4>
                      <p className="text-sm text-neutral-600 mb-2">Ticker: BND, FXNAX</p>
                      <p className="text-sm text-neutral-700">Stability, income generation, portfolio balance during market volatility.</p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 p-4">
                      <h4 className="font-semibold text-black mb-2">Real Estate (REITs)</h4>
                      <p className="text-sm text-neutral-600 mb-2">Ticker: VNQ, SCHH</p>
                      <p className="text-sm text-neutral-700">Orange County real estate exposure without direct ownership costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tax Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Tax-Efficient Investment Strategies</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Asset Location Strategy</h3>
                  <p className="text-neutral-700 mb-3">
                    Optimize tax efficiency by placing investments in appropriate account types:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-black mb-2">401(k)/Traditional IRA</h4>
                      <ul className="text-neutral-600 space-y-1">
                        <li>• Bonds and bond funds</li>
                        <li>• High dividend stocks</li>
                        <li>• REITs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Roth IRA</h4>
                      <ul className="text-neutral-600 space-y-1">
                        <li>• High-growth stocks</li>
                        <li>• Small-cap funds</li>
                        <li>• International stocks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Taxable Account</h4>
                      <ul className="text-neutral-600 space-y-1">
                        <li>• Tax-efficient index funds</li>
                        <li>• Municipal bonds</li>
                        <li>• Tax-loss harvesting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-3">California Tax Considerations</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Municipal bonds from California for state tax benefits</li>
                    <li>• Roth conversions during lower income years</li>
                    <li>• Harvest tax losses to offset California capital gains</li>
                    <li>• Consider relocating in retirement for tax benefits</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Investment Mistakes to Avoid After Debt Settlement</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Over-Conservative Approach</h4>
                    <p className="text-sm text-neutral-700">
                      Keeping everything in savings accounts due to debt trauma. Inflation erodes purchasing power over time.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Chasing Performance</h4>
                    <p className="text-sm text-neutral-700">
                      Trying to make up for lost time with risky investments or stock picking.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Ignoring Fees</h4>
                    <p className="text-sm text-neutral-700">
                      High expense ratios and advisor fees compound over time, reducing returns significantly.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-semibold text-black mb-2">❌ Market Timing</h4>
                    <p className="text-sm text-neutral-700">
                      Trying to predict market movements instead of consistent, disciplined investing.
                    </p>
                  </div>
                </div>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Investment Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/retirement-planning-after-debt-relief-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Retirement Planning After Debt Relief
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Strategic retirement planning for Orange County residents recovering from debt.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/financial-planning-after-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Complete Financial Planning After Debt Settlement
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Comprehensive financial recovery guide for post-debt settlement success.
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
                Start Building Wealth Through Smart Investing
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get personalized investment guidance for Orange County residents recovering from debt settlement. Build long-term wealth with proven strategies.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Investment Strategy
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