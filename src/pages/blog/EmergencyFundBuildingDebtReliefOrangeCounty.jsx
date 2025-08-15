import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Shield, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function EmergencyFundBuildingDebtReliefOrangeCounty() {
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
            Emergency Fund Building After Debt Relief:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Strategies</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>July 23, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Financial Advisor</span>
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
              After completing debt settlement, building a robust emergency fund is critical for Orange County residents facing one of the nation's highest costs of living. This guide provides actionable strategies to create financial security and prevent future debt accumulation.
            </div>

            {/* Emergency Fund Basics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-green-50 border border-green-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Orange County Emergency Fund Requirements
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Minimum Target: 3-6 Months</h3>
                  <p className="text-neutral-700 mb-4">
                    For Orange County's median household income of $90,000, this means:
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• 3 months: $15,000-18,000</li>
                    <li>• 6 months: $30,000-36,000</li>
                    <li>• Consider higher due to OC living costs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Ideal Target: 9-12 Months</h3>
                  <p className="text-neutral-700 mb-4">
                    Given Orange County's competitive job market:
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• 9 months: $45,000-54,000</li>
                    <li>• 12 months: $60,000-72,000</li>
                    <li>• Essential for high-cost areas like Newport Beach</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Building Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Strategic Emergency Fund Building Plan</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Phase 1: Starter Fund ($1,000-2,500)
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Build initial buffer within 30-60 days after debt settlement:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Sell unused items on Facebook Marketplace or OfferUp</li>
                    <li>• Take on gig work (Uber, DoorDash, TaskRabbit in OC)</li>
                    <li>• Redirect former debt payment amounts</li>
                    <li>• Use tax refund or work bonuses</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Phase 2: Essential Fund (1 Month Expenses)
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Achieve within 3-6 months through systematic saving:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Automate 20% of income to savings</li>
                    <li>• Cut non-essential Orange County expenses</li>
                    <li>• Find roommates to reduce housing costs</li>
                    <li>• Shop at discount stores (Aldi, 99 Cent Store)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Phase 3: Security Fund (3-6 Months)</h3>
                  <p className="text-neutral-700 mb-3">
                    Build comprehensive protection within 12-18 months:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Increase income through skills development</li>
                    <li>• Negotiate raises based on OC market rates</li>
                    <li>• Start side business leveraging local opportunities</li>
                    <li>• Invest in high-yield savings accounts</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Savings Vehicles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Best Emergency Fund Accounts for Orange County Residents</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Account Type</th>
                      <th className="border border-neutral-300 p-4 text-left">Current APY</th>
                      <th className="border border-neutral-300 p-4 text-left">Best For</th>
                      <th className="border border-neutral-300 p-4 text-left">Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">High-Yield Savings</td>
                      <td className="border border-neutral-300 p-4">4.0-5.0%</td>
                      <td className="border border-neutral-300 p-4">Primary emergency fund</td>
                      <td className="border border-neutral-300 p-4">Instant access, FDIC insured</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Money Market</td>
                      <td className="border border-neutral-300 p-4">4.5-5.5%</td>
                      <td className="border border-neutral-300 p-4">Larger balances ($10K+)</td>
                      <td className="border border-neutral-300 p-4">Check writing privileges</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">CDs (Laddered)</td>
                      <td className="border border-neutral-300 p-4">5.0-5.5%</td>
                      <td className="border border-neutral-300 p-4">Excess emergency funds</td>
                      <td className="border border-neutral-300 p-4">Penalties for early withdrawal</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">I Bonds</td>
                      <td className="border border-neutral-300 p-4">Variable</td>
                      <td className="border border-neutral-300 p-4">Long-term emergency fund</td>
                      <td className="border border-neutral-300 p-4">$10K annual limit, 1-year lock</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Orange County Specific Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Cost-Cutting Strategies for Faster Savings</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Housing Cost Reduction</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Consider moving to Garden Grove or Westminster (lower rent)</li>
                    <li>• Rent rooms through Airbnb for extra income</li>
                    <li>• Negotiate rent reduction for longer lease terms</li>
                    <li>• Explore ADU living arrangements</li>
                    <li>• House-sit for traveling Orange County residents</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Daily Expense Optimization</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• Shop at OC farmers markets for produce</li>
                    <li>• Use OC Parks annual pass ($55) for recreation</li>
                    <li>• Take advantage of happy hour specials</li>
                    <li>• Join wholesale clubs (Costco Business Center)</li>
                    <li>• Utilize free OC events and beaches</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Income Boosting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Income Opportunities for Emergency Fund Growth</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-2">High-Demand Gig Work</h3>
                  <p className="text-neutral-700 mb-3">
                    Leverage Orange County's affluent demographics for premium gig opportunities:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Pet sitting in Newport Beach ($50-100/day)</li>
                    <li>• Beach equipment rentals ($200-500/weekend)</li>
                    <li>• Event staffing at OC venues ($25-35/hour)</li>
                    <li>• Tutoring in Irvine schools ($40-80/hour)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-2">Seasonal Opportunities</h3>
                  <p className="text-neutral-700 mb-3">
                    Take advantage of Orange County's year-round tourism:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Theme park seasonal work (Disney, Knott's)</li>
                    <li>• Beach city summer jobs</li>
                    <li>• Holiday retail in South Coast Plaza</li>
                    <li>• Convention center event support</li>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Financial Recovery Articles</h2>
              
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
                  to="/blog/building-credit-during-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Building Credit During Settlement
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Strategies to maintain and improve credit while completing debt settlement.
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
                Start Building Your Emergency Fund Today
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get personalized strategies for emergency fund building after debt relief. Our Orange County experts understand local financial challenges.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Savings Strategy
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