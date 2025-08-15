import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, DollarSign, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function RetirementPlanningAfterDebtReliefOrangeCounty() {
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
              FINANCIAL PLANNING
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Retirement Planning After Debt Relief:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Recovery Guide</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Retirement Specialist</span>
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
              After completing debt settlement, Orange County residents must rebuild their retirement savings while managing one of the nation's highest costs of living. This strategic guide provides actionable steps to secure your financial future after debt relief.
            </div>

            {/* Retirement Reality Check */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-red-50 border border-red-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Target className="w-6 h-6" />
                Orange County Retirement Reality: The Numbers
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Annual Retirement Costs in OC</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Comfortable retirement: $85,000-120,000</li>
                    <li>• Basic necessities: $65,000-85,000</li>
                    <li>• Healthcare costs: $8,000-15,000/year</li>
                    <li>• Housing (owned): $2,000-4,000/month</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Required Savings by Age</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Age 40: 3x annual income saved</li>
                    <li>• Age 50: 6x annual income saved</li>
                    <li>• Age 60: 8x annual income saved</li>
                    <li>• Age 67: 10x annual income saved</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-red-200">
                <p className="text-sm text-neutral-700">
                  <strong>Post-Debt Settlement Challenge:</strong> If you're behind on retirement savings due to debt issues, you'll need aggressive catch-up strategies to meet these Orange County retirement goals.
                </p>
              </div>
            </motion.div>

            {/* Catch-Up Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Retirement Catch-Up Strategy After Debt Settlement</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Phase 1: Foundation (Months 1-6)
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Establish retirement savings habits while maintaining emergency fund:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Start with 5% to employer 401(k) if company match available</li>
                    <li>• Open Roth IRA and contribute $100-200/month</li>
                    <li>• Automate contributions to avoid temptation</li>
                    <li>• Track progress monthly to build momentum</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Phase 2: Acceleration (Months 7-18)
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Maximize tax-advantaged accounts and increase contributions:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Increase 401(k) contribution by 1% every 3 months</li>
                    <li>• Max out Roth IRA ($7,000 annually, $8,000 if 50+)</li>
                    <li>• Consider traditional IRA for additional tax benefits</li>
                    <li>• Use tax refunds for retirement catch-up contributions</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Phase 3: Optimization (Year 2+)
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Maximize retirement savings and consider advanced strategies:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Target 15-20% total retirement savings rate</li>
                    <li>• Utilize catch-up contributions if age 50+</li>
                    <li>• Consider backdoor Roth IRA conversions</li>
                    <li>• Explore taxable investment accounts for flexibility</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Account Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Best Retirement Accounts for Orange County Residents</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Account Type</th>
                      <th className="border border-neutral-300 p-4 text-left">2025 Contribution Limits</th>
                      <th className="border border-neutral-300 p-4 text-left">Tax Benefits</th>
                      <th className="border border-neutral-300 p-4 text-left">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">401(k) Traditional</td>
                      <td className="border border-neutral-300 p-4">$23,000 ($30,500 if 50+)</td>
                      <td className="border border-neutral-300 p-4">Tax-deferred</td>
                      <td className="border border-neutral-300 p-4">Employer match, high earners</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Roth IRA</td>
                      <td className="border border-neutral-300 p-4">$7,000 ($8,000 if 50+)</td>
                      <td className="border border-neutral-300 p-4">Tax-free growth</td>
                      <td className="border border-neutral-300 p-4">Young workers, tax diversification</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Traditional IRA</td>
                      <td className="border border-neutral-300 p-4">$7,000 ($8,000 if 50+)</td>
                      <td className="border border-neutral-300 p-4">Tax deduction</td>
                      <td className="border border-neutral-300 p-4">No 401(k) access</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">SEP-IRA</td>
                      <td className="border border-neutral-300 p-4">25% of income (max $69,000)</td>
                      <td className="border border-neutral-300 p-4">Tax-deferred</td>
                      <td className="border border-neutral-300 p-4">Self-employed, gig workers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Investment Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Post-Debt Settlement Investment Strategy</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Conservative Approach (Age 50+)</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• 60% stocks, 40% bonds allocation</li>
                    <li>• Focus on dividend-paying stocks</li>
                    <li>• Target-date funds for simplicity</li>
                    <li>• Regular rebalancing quarterly</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Aggressive Approach (Under 50)</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• 80-90% stocks, 10-20% bonds</li>
                    <li>• Low-cost index funds (S&P 500, Total Market)</li>
                    <li>• International diversification (20-30%)</li>
                    <li>• Small-cap and growth exposure</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6">
                <h4 className="font-semibold text-black mb-2">Recommended Orange County Portfolio</h4>
                <p className="text-neutral-700 mb-3">
                  For residents recovering from debt, consider this balanced approach:
                </p>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• 40% US Total Stock Market Index</li>
                  <li>• 20% International Stock Index</li>
                  <li>• 10% Emerging Markets</li>
                  <li>• 20% US Bond Index</li>
                  <li>• 10% Real Estate Investment Trust (REIT)</li>
                </ul>
              </div>
            </motion.div>

            {/* Social Security Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Social Security Optimization for Orange County</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-2">Claiming Strategy</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County's high cost of living makes Social Security timing critical:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Full retirement age: 67 for those born after 1960</li>
                    <li>• Early claiming (62): 25% reduction in benefits</li>
                    <li>• Delayed claiming (70): 8% annual increase</li>
                    <li>• Spousal benefits: Up to 50% of higher earner's benefit</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-2">Maximization Strategies</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Work at least 35 years for maximum benefit calculation</li>
                    <li>• Delay claiming until age 70 if health permits</li>
                    <li>• Coordinate with spouse for optimal household benefits</li>
                    <li>• Consider tax implications of benefits in retirement</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Healthcare Planning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Healthcare Cost Planning in Orange County</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Health Savings Account (HSA)</h3>
                  <p className="text-neutral-700 mb-3">
                    Triple tax advantage makes HSAs perfect for retirement healthcare:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• 2025 contribution limit: $4,300 (individual), $8,550 (family)</li>
                    <li>• Tax-deductible contributions</li>
                    <li>• Tax-free growth and medical withdrawals</li>
                    <li>• Acts as retirement account after age 65</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Long-Term Care Insurance</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County long-term care costs are among the highest:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Average nursing home: $8,000-12,000/month</li>
                    <li>• Home care: $35-50/hour</li>
                    <li>• Buy coverage in your 50s for better rates</li>
                    <li>• Consider hybrid life insurance policies</li>
                  </ul>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Retirement Planning Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/financial-planning-after-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Complete Financial Planning After Debt Settlement
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Comprehensive guide to rebuilding finances after debt relief in Orange County.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/emergency-fund-building-debt-relief-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Emergency Fund Building After Debt Relief
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Build financial security with emergency savings after debt settlement.
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
                Secure Your Retirement After Debt Relief
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get personalized retirement planning guidance for Orange County residents recovering from debt. Start rebuilding your financial future today.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Plan Your Retirement
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