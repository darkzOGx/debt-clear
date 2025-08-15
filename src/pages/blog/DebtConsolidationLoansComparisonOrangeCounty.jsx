import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, TrendingDown, BarChart3, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtConsolidationLoansComparisonOrangeCounty() {
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
            Orange County Debt Consolidation Loans:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Banks vs Credit Unions vs Online Lenders</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Lending Specialist</span>
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
              Orange County residents seeking debt consolidation loans have three primary options: traditional banks, local credit unions, and online lenders. Each offers distinct advantages, rates, and terms that can dramatically impact your consolidation success and long-term financial health.
            </div>

            {/* Loan Type Comparison Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6" />
                Orange County Debt Consolidation Loan Comparison
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Lender Type</th>
                      <th className="border border-neutral-300 p-4 text-left">APR Range</th>
                      <th className="border border-neutral-300 p-4 text-left">Loan Amounts</th>
                      <th className="border border-neutral-300 p-4 text-left">Approval Speed</th>
                      <th className="border border-neutral-300 p-4 text-left">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Traditional Banks</td>
                      <td className="border border-neutral-300 p-4">8.99-19.99%</td>
                      <td className="border border-neutral-300 p-4">$5K-$100K</td>
                      <td className="border border-neutral-300 p-4">3-7 days</td>
                      <td className="border border-neutral-300 p-4">Existing customers, high credit scores</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Credit Unions</td>
                      <td className="border border-neutral-300 p-4">7.24-16.99%</td>
                      <td className="border border-neutral-300 p-4">$1K-$50K</td>
                      <td className="border border-neutral-300 p-4">2-5 days</td>
                      <td className="border border-neutral-300 p-4">Members, personal service</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Online Lenders</td>
                      <td className="border border-neutral-300 p-4">6.40-35.99%</td>
                      <td className="border border-neutral-300 p-4">$1K-$100K</td>
                      <td className="border border-neutral-300 p-4">Same day-3 days</td>
                      <td className="border border-neutral-300 p-4">Speed, varied credit profiles</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-white border border-blue-200">
                <h4 className="font-semibold text-black mb-2">Orange County Market Context</h4>
                <p className="text-sm text-neutral-700">
                  Orange County's competitive lending market offers residents numerous options. The high cost of living and significant military population create unique opportunities with both local institutions and specialized online lenders.
                </p>
              </div>
            </motion.div>

            {/* Traditional Banks Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Traditional Banks in Orange County
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Major Bank Options</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Wells Fargo</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 7.49-23.24%</li>
                        <li>• Loan amounts: $3K-$100K</li>
                        <li>• Relationship discounts available</li>
                        <li>• Strong Orange County presence</li>
                        <li>• Same-day funding for existing customers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Bank of America</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 8.99-19.99%</li>
                        <li>• Loan amounts: $3K-$100K</li>
                        <li>• Preferred Rewards discounts</li>
                        <li>• Multiple OC branch locations</li>
                        <li>• 3-5 day approval process</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Chase Bank</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 8.48-24.99%</li>
                        <li>• Loan amounts: $5K-$50K</li>
                        <li>• Private client discounts</li>
                        <li>• Significant Orange County market</li>
                        <li>• MyChase loan prequalification</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">US Bank</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 8.98-19.99%</li>
                        <li>• Loan amounts: $1K-$50K</li>
                        <li>• Gold/Platinum package discounts</li>
                        <li>• Competitive rates for good credit</li>
                        <li>• Fast online applications</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Traditional Bank Advantages</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Relationship Banking:</strong> Existing customers often receive rate discounts and faster approvals</li>
                    <li>• <strong>In-Person Service:</strong> Orange County branches provide face-to-face consultation</li>
                    <li>• <strong>Established Reputation:</strong> FDIC insured, regulated institutions with long track records</li>
                    <li>• <strong>Comprehensive Services:</strong> Integration with checking, savings, and investment accounts</li>
                    <li>• <strong>Large Loan Amounts:</strong> Can handle significant consolidations up to $100K</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Traditional Bank Disadvantages</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Strict Credit Requirements:</strong> Typically require 660+ credit scores for best rates</li>
                    <li>• <strong>Longer Approval Times:</strong> 3-7 days vs same-day online options</li>
                    <li>• <strong>Limited Flexibility:</strong> Rigid underwriting criteria, less accommodation for unique situations</li>
                    <li>• <strong>Higher Overhead Costs:</strong> Branch network costs may result in higher rates</li>
                    <li>• <strong>Relationship Requirements:</strong> Best rates often require multiple account relationships</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Credit Union Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Credit Union Options</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Top Orange County Credit Unions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Orange County's Credit Union</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 7.99-15.99%</li>
                        <li>• Loan amounts: $1K-$50K</li>
                        <li>• Local Orange County focus</li>
                        <li>• Personal service approach</li>
                        <li>• Membership: Live, work, or worship in OC</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">SchoolsFirst Federal Credit Union</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 7.24-15.99%</li>
                        <li>• Loan amounts: $500-$50K</li>
                        <li>• Education professionals focused</li>
                        <li>• Excellent rates and terms</li>
                        <li>• Strong Orange County presence</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Navy Federal Credit Union</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 7.49-18.00%</li>
                        <li>• Loan amounts: $250-$50K</li>
                        <li>• Military families and veterans</li>
                        <li>• Excellent member service</li>
                        <li>• Strong military community in OC</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Kinecta Federal Credit Union</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 9.49-17.99%</li>
                        <li>• Loan amounts: $1K-$40K</li>
                        <li>• Community-focused lending</li>
                        <li>• Flexible qualification requirements</li>
                        <li>• Multiple Southern California locations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Credit Union Advantages</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Lower Interest Rates:</strong> Generally 1-3% lower than banks due to non-profit structure</li>
                    <li>• <strong>Member-Focused Service:</strong> Personal attention and flexible underwriting</li>
                    <li>• <strong>Community Connection:</strong> Local decision-making and Orange County community focus</li>
                    <li>• <strong>Fewer Fees:</strong> Lower origination fees and penalty charges</li>
                    <li>• <strong>Relationship Building:</strong> Long-term member relationships and loyalty programs</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Credit Union Considerations</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Membership Requirements:</strong> Must qualify for membership through employment, residence, or association</li>
                    <li>• <strong>Smaller Loan Limits:</strong> Maximum loans typically $40K-50K vs $100K at banks</li>
                    <li>• <strong>Limited Technology:</strong> May have less sophisticated online platforms</li>
                    <li>• <strong>Geographic Restrictions:</strong> Some services limited to local area</li>
                    <li>• <strong>Smaller Branch Networks:</strong> Fewer physical locations than major banks</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Online Lender Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Online Lenders for Orange County Residents</h2>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Top Online Lender Options</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">SoFi Personal Loans</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 8.99-25.81%</li>
                        <li>• Loan amounts: $5K-$100K</li>
                        <li>• No fees (origination, prepayment)</li>
                        <li>• Rate discount for autopay</li>
                        <li>• Career coaching benefits</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Marcus by Goldman Sachs</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 7.99-19.99%</li>
                        <li>• Loan amounts: $3.5K-$40K</li>
                        <li>• No fees whatsoever</li>
                        <li>• Fixed rates and payments</li>
                        <li>• Strong customer satisfaction</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">LightStream (Truist)</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 7.49-25.49%</li>
                        <li>• Loan amounts: $5K-$100K</li>
                        <li>• Rate Beat Program</li>
                        <li>• Same-day funding available</li>
                        <li>• Excellent credit required</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Discover Personal Loans</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• APR: 7.99-24.99%</li>
                        <li>• Loan amounts: $2.5K-$40K</li>
                        <li>• Direct payment to creditors</li>
                        <li>• 30-day payment pause option</li>
                        <li>• Established brand reputation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Alternative Online Lenders</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Fair Credit Options</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• <strong>Upstart:</strong> 6.40-35.99% APR, AI-driven underwriting</li>
                        <li>• <strong>Best Egg:</strong> 7.99-35.99% APR, flexible terms</li>
                        <li>• <strong>Avant:</strong> 9.95-35.99% APR, fair credit focus</li>
                        <li>• <strong>OneMain Financial:</strong> 18.00-35.99% APR, secured options</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Specialized Features</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• <strong>Payoff:</strong> Credit card debt consolidation focus</li>
                        <li>• <strong>Prosper:</strong> P2P lending platform</li>
                        <li>• <strong>LendingClub:</strong> P2P with investor funding</li>
                        <li>• <strong>Rocket Loans:</strong> Same-day funding available</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Online Lender Advantages</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Speed and Convenience:</strong> Same-day to 3-day funding, 24/7 applications</li>
                    <li>• <strong>Competitive Rates:</strong> Lower overhead often means better rates</li>
                    <li>• <strong>Innovative Underwriting:</strong> AI and alternative data for better qualification</li>
                    <li>• <strong>Transparent Process:</strong> Online rate checking without credit impact</li>
                    <li>• <strong>Wide Credit Range:</strong> Options for excellent to fair credit scores</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Online Lender Risks</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>No Personal Relationship:</strong> Limited customer service for complex situations</li>
                    <li>• <strong>Variable Quality:</strong> Range from excellent to predatory lenders</li>
                    <li>• <strong>Data Security:</strong> Online applications require sharing sensitive information</li>
                    <li>• <strong>Less Negotiation:</strong> Automated decisions with limited flexibility</li>
                    <li>• <strong>Newer Companies:</strong> Less track record than established institutions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Orange County Specific Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                Orange County Resident Decision Guide
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Choose Traditional Banks When:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Excellent Credit (750+):</strong> Access to best rates and largest loan amounts</li>
                    <li>• <strong>Existing Relationship:</strong> Current customer with checking/savings accounts</li>
                    <li>• <strong>Large Consolidation:</strong> Need loans above $50K for significant debt consolidation</li>
                    <li>• <strong>Complex Financial Situation:</strong> Need in-person consultation and advice</li>
                    <li>• <strong>Long-term Banking:</strong> Want to centralize all banking relationships</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Choose Credit Unions When:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Good Credit (650-750):</strong> Best rates for this credit range</li>
                    <li>• <strong>Community Connection:</strong> Value local, personal service</li>
                    <li>• <strong>Moderate Loan Amounts:</strong> $5K-40K consolidation needs</li>
                    <li>• <strong>Military/Education:</strong> Qualify for specialized credit unions</li>
                    <li>• <strong>Lower Fees Important:</strong> Want minimal origination and other fees</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Choose Online Lenders When:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Need Speed:</strong> Urgent consolidation with same-day funding requirements</li>
                    <li>• <strong>Fair Credit (580-649):</strong> More flexible underwriting than traditional banks</li>
                    <li>• <strong>Rate Shopping:</strong> Want to compare multiple offers quickly</li>
                    <li>• <strong>Convenience Priority:</strong> Prefer 100% online process</li>
                    <li>• <strong>No Local Options:</strong> Don't qualify for area credit unions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Comparison Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <TrendingDown className="w-6 h-6" />
                Orange County Loan Comparison Example
              </h2>
              
              <div className="bg-neutral-50 border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">$25,000 Debt Consolidation Loan Comparison</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-neutral-300">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="border border-neutral-300 p-4 text-left">Lender</th>
                        <th className="border border-neutral-300 p-4 text-left">APR</th>
                        <th className="border border-neutral-300 p-4 text-left">Monthly Payment</th>
                        <th className="border border-neutral-300 p-4 text-left">Total Interest</th>
                        <th className="border border-neutral-300 p-4 text-left">Total Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-neutral-300 p-4 font-semibold">OC Credit Union (Good Credit)</td>
                        <td className="border border-neutral-300 p-4">8.99%</td>
                        <td className="border border-neutral-300 p-4">$518</td>
                        <td className="border border-neutral-300 p-4">$6,080</td>
                        <td className="border border-neutral-300 p-4">$31,080</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="border border-neutral-300 p-4 font-semibold">Wells Fargo (Excellent Credit)</td>
                        <td className="border border-neutral-300 p-4">9.99%</td>
                        <td className="border border-neutral-300 p-4">$531</td>
                        <td className="border border-neutral-300 p-4">$6,860</td>
                        <td className="border border-neutral-300 p-4">$31,860</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-300 p-4 font-semibold">SoFi Online (Excellent Credit)</td>
                        <td className="border border-neutral-300 p-4">10.99%</td>
                        <td className="border border-neutral-300 p-4">$544</td>
                        <td className="border border-neutral-300 p-4">$7,640</td>
                        <td className="border border-neutral-300 p-4">$32,640</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="border border-neutral-300 p-4 font-semibold">Upstart Online (Fair Credit)</td>
                        <td className="border border-neutral-300 p-4">15.99%</td>
                        <td className="border border-neutral-300 p-4">$609</td>
                        <td className="border border-neutral-300 p-4">$11,540</td>
                        <td className="border border-neutral-300 p-4">$36,540</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 text-sm text-neutral-600">
                  *5-year loan terms. Rates vary based on credit score, income, and other factors. Orange County residents should shop multiple lenders for best terms.
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Debt Consolidation Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/orange-county-debt-consolidation-2025"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Debt Consolidation: Complete 2025 Guide
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Comprehensive analysis of debt consolidation options for Orange County residents.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/balance-transfer-vs-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Balance Transfer vs Debt Settlement: Orange County Resident Guide
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Detailed comparison of balance transfers and debt settlement options.
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
                Find Your Best Consolidation Option
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get personalized recommendations for debt consolidation loans based on your Orange County situation, credit profile, and financial goals. Compare rates from banks, credit unions, and online lenders.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Loan Recommendations
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