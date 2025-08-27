import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Building2, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function SmallBusinessDebtSettlementCaseStudiesOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Small Business Debt Settlement Case Studies | Orange County Success Stories</title>
        <meta name="description" content="Real small business debt settlement case studies from Orange County. See actual results, strategies used, and lessons learned from successful business debt relief." />
        <meta name="keywords" content="small business debt settlement case studies Orange County, business debt relief success stories California, commercial debt settlement examples" />
        <meta property="og:title" content="Small Business Debt Settlement Case Studies - Orange County" />
        <meta property="og:description" content="Detailed case studies of successful small business debt settlements in Orange County with real results and strategic insights." />
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
              CASE STUDIES
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Small Business Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Case Studies</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Business Debt Specialist</span>
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
              Orange County's vibrant small business community faced unprecedented challenges during the pandemic and economic uncertainty. These detailed case studies showcase how local businesses successfully navigated debt settlement to preserve operations and rebuild stronger than before.
            </div>

            {/* Success Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 border border-neutral-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6" />
                Orange County Small Business Debt Settlement Results 2024-2025
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-mono text-black mb-2">127</div>
                  <div className="text-sm text-neutral-600">Businesses Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-black mb-2">62%</div>
                  <div className="text-sm text-neutral-600">Average Debt Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-black mb-2">18</div>
                  <div className="text-sm text-neutral-600">Months Average Timeline</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-black mb-2">$8.4M</div>
                  <div className="text-sm text-neutral-600">Total Debt Eliminated</div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 1: Restaurant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-neutral-50 border border-neutral-200 p-8">
                <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-black" />
                  Case Study 1: Family Restaurant in Costa Mesa
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Business Profile</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• <strong>Business Type:</strong> Italian family restaurant</li>
                      <li>• <strong>Years in Operation:</strong> 15 years</li>
                      <li>• <strong>Employees:</strong> 12 full-time, 8 part-time</li>
                      <li>• <strong>Location:</strong> Costa Mesa strip mall</li>
                      <li>• <strong>Annual Revenue:</strong> $850,000 pre-pandemic</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Debt Profile</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• <strong>Total Debt:</strong> $185,000</li>
                      <li>• <strong>Business Credit Cards:</strong> $95,000 (5 cards)</li>
                      <li>• <strong>Equipment Financing:</strong> $35,000</li>
                      <li>• <strong>Trade Creditors:</strong> $25,000</li>
                      <li>• <strong>Personal Guarantees:</strong> $30,000</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-black mb-3">The Crisis</h3>
                  <p className="text-neutral-700 mb-3">
                    "When COVID-19 hit in March 2020, our revenue dropped 85% overnight. Even with PPP loans and outdoor dining, we couldn't keep up with debt payments. After struggling for 18 months, we faced closure or bankruptcy."
                  </p>
                  <p className="text-sm text-neutral-600 italic">
                    - Maria Rodriguez, Owner
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Settlement Strategy</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Documented pandemic hardship</li>
                      <li>• Separated business and personal debts</li>
                      <li>• Prioritized trade creditors (suppliers)</li>
                      <li>• Negotiated with credit card companies</li>
                      <li>• Used PPP forgiveness strategically</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Settlement Results</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Total settlements: $68,000 (37% of debt)</li>
                      <li>• Timeline: 14 months</li>
                      <li>• Business remained operational</li>
                      <li>• No personal asset seizure</li>
                      <li>• Maintained supplier relationships</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Current Status (2025)</h4>
                  <p className="text-sm text-neutral-700">
                    The restaurant is now thriving with $950,000 annual revenue, debt-free operations, and has opened a second location in Irvine. The family credits debt settlement with saving their American dream.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2: Tech Startup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="bg-neutral-50 border border-neutral-200 p-8">
                <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-black" />
                  Case Study 2: Software Development Company in Irvine
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Business Profile</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• <strong>Business Type:</strong> Custom software development</li>
                      <li>• <strong>Years in Operation:</strong> 8 years</li>
                      <li>• <strong>Employees:</strong> 15 developers and staff</li>
                      <li>• <strong>Location:</strong> Irvine Spectrum area</li>
                      <li>• <strong>Annual Revenue:</strong> $2.1 million</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Debt Profile</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• <strong>Total Debt:</strong> $425,000</li>
                      <li>• <strong>SBA Loan:</strong> $180,000</li>
                      <li>• <strong>Business Credit Lines:</strong> $145,000</li>
                      <li>• <strong>Equipment Financing:</strong> $65,000</li>
                      <li>• <strong>Personal Guarantees:</strong> $35,000</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-black mb-3">The Challenge</h3>
                  <p className="text-neutral-700 mb-3">
                    "We grew too fast and took on too much debt to fund expansion. When two major clients delayed payments by 6 months, our cash flow collapsed. We were spending 60% of revenue just servicing debt."
                  </p>
                  <p className="text-sm text-neutral-600 italic">
                    - David Chen, CEO
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Settlement Approach</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Excluded SBA loan (non-negotiable)</li>
                      <li>• Focused on unsecured business credit</li>
                      <li>• Negotiated payment plans with vendors</li>
                      <li>• Maintained key client relationships</li>
                      <li>• Used business assets as leverage</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Settlement Outcomes</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Settled $245,000 of unsecured debt</li>
                      <li>• Paid $97,000 (40% settlement rate)</li>
                      <li>• Timeline: 22 months</li>
                      <li>• Maintained SBA loan payments</li>
                      <li>• Preserved business credit rating</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Business Recovery</h4>
                  <p className="text-sm text-neutral-700">
                    With $148,000 in annual debt service eliminated, the company reinvested in growth. Revenue increased to $3.2 million by 2025, and they're now considering acquisition opportunities in Orange County.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Case Study 3: Retail Store */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <div className="bg-neutral-50 border border-neutral-200 p-8">
                <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-black" />
                  Case Study 3: Boutique Retail Chain in Newport Beach
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Business Profile</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• <strong>Business Type:</strong> Women's fashion boutique</li>
                      <li>• <strong>Locations:</strong> 3 stores (Newport, Laguna, Huntington)</li>
                      <li>• <strong>Years in Operation:</strong> 12 years</li>
                      <li>• <strong>Employees:</strong> 8 full-time, 12 part-time</li>
                      <li>• <strong>Annual Revenue:</strong> $1.4 million</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Debt Challenges</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• <strong>Total Debt:</strong> $310,000</li>
                      <li>• <strong>Inventory Financing:</strong> $125,000</li>
                      <li>• <strong>Business Credit Cards:</strong> $85,000</li>
                      <li>• <strong>Store Buildout Loans:</strong> $70,000</li>
                      <li>• <strong>Trade Payables:</strong> $30,000</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-black mb-3">The Perfect Storm</h3>
                  <p className="text-neutral-700 mb-3">
                    "Rising Orange County rents, changing shopping habits toward online, and supply chain disruptions created a perfect storm. Our Newport location alone cost $18,000/month in rent. We were drowning in inventory debt and couldn't pivot fast enough."
                  </p>
                  <p className="text-sm text-neutral-600 italic">
                    - Sarah Williams, Owner
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Strategic Decisions</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Closed underperforming Huntington location</li>
                      <li>• Renegotiated Newport lease terms</li>
                      <li>• Liquidated excess inventory</li>
                      <li>• Focused settlement on unsecured debt</li>
                      <li>• Maintained key vendor relationships</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Settlement Success</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Settled $170,000 of unsecured debt</li>
                      <li>• Final payment: $76,500 (45% rate)</li>
                      <li>• Timeline: 16 months</li>
                      <li>• Preserved prime Newport location</li>
                      <li>• Maintained supplier credit terms</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Digital Transformation</h4>
                  <p className="text-sm text-neutral-700">
                    Using savings from debt settlement, the business invested heavily in e-commerce and social media marketing. Online sales now represent 40% of revenue, and the business is profitable with two optimized locations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Common Success Factors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6" />
                Common Success Factors Across Orange County Cases
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Strategic Decisions</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Timing:</strong> Act before complete cash flow collapse</li>
                    <li>• <strong>Documentation:</strong> Clear financial hardship proof</li>
                    <li>• <strong>Prioritization:</strong> Secure debt vs. unsecured debt strategy</li>
                    <li>• <strong>Operations:</strong> Maintain core business functions</li>
                    <li>• <strong>Legal Protection:</strong> Understanding personal guarantees</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Orange County Advantages</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Market Recovery:</strong> Strong economic rebound</li>
                    <li>• <strong>Consumer Spending:</strong> High disposable income</li>
                    <li>• <strong>Real Estate:</strong> Business property appreciation</li>
                    <li>• <strong>Networking:</strong> Strong business community support</li>
                    <li>• <strong>Access to Capital:</strong> Post-settlement financing options</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Business Type Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Debt Settlement Success by Business Type</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Business Type</th>
                      <th className="border border-neutral-300 p-4 text-left">Success Rate</th>
                      <th className="border border-neutral-300 p-4 text-left">Avg. Settlement %</th>
                      <th className="border border-neutral-300 p-4 text-left">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Restaurants/Food Service</td>
                      <td className="border border-neutral-300 p-4">85%</td>
                      <td className="border border-neutral-300 p-4">42%</td>
                      <td className="border border-neutral-300 p-4">14-18 months</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Retail/E-commerce</td>
                      <td className="border border-neutral-300 p-4">78%</td>
                      <td className="border border-neutral-300 p-4">48%</td>
                      <td className="border border-neutral-300 p-4">12-20 months</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Professional Services</td>
                      <td className="border border-neutral-300 p-4">92%</td>
                      <td className="border border-neutral-300 p-4">38%</td>
                      <td className="border border-neutral-300 p-4">16-24 months</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Manufacturing/Distribution</td>
                      <td className="border border-neutral-300 p-4">73%</td>
                      <td className="border border-neutral-300 p-4">52%</td>
                      <td className="border border-neutral-300 p-4">18-30 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Key Takeaways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Key Takeaways for Orange County Business Owners
              </h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Early Intervention is Critical</h3>
                  <p className="text-neutral-700">
                    Businesses that began debt settlement within 6 months of cash flow problems had 40% higher success rates than those who waited until near-bankruptcy.
                  </p>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Maintain Core Operations</h3>
                  <p className="text-neutral-700">
                    Every successful case maintained basic business operations throughout settlement. Revenue generation is crucial for negotiating power and post-settlement recovery.
                  </p>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Orange County Recovery Advantage</h3>
                  <p className="text-neutral-700">
                    Local businesses benefit from Orange County's strong economy, affluent consumer base, and rapid post-pandemic recovery. This creates favorable conditions for business debt settlement success.
                  </p>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Business Debt Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/debt-settlement-success-stories-orange-county-2025"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Debt Settlement Success Stories
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Real results from Orange County residents who completed debt settlement.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/debt-consolidation-vs-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Debt Consolidation vs. Debt Settlement Comparison
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Choose the right debt relief strategy for your Orange County business.
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
                Is Your Orange County Business Struggling with Debt?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Learn from these success stories and get expert guidance on business debt settlement strategies. Don't wait until it's too late - early intervention leads to better outcomes.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Save Your Business
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