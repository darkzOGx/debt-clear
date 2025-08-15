import React from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtSettlementTimelineOrangeCounty() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"><ArrowLeft className="w-4 h-4" />Back to Resources</Link>
          <div className="flex items-center gap-3 mb-6"><div className="w-2 h-2 bg-black"></div><span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">PROCESS GUIDE</span></div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">Debt Settlement Timeline:<br /><span className="font-mono text-3xl lg:text-4xl">What Orange County Residents Can Expect</span></h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 1, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Process Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">Month-by-month breakdown of the debt settlement process for Orange County clients, from initial consultation to final completion.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibant text-black mb-6 mt-12">Typical 18-Month Settlement Timeline</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">Based on analysis of 1,000+ Orange County debt settlements, the average timeline is 18 months from enrollment to completion, with most settlements occurring between months 6-15.</p>
            <div className="space-y-8 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibant text-black mb-2">Months 1-2: Setup Phase</h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Free consultation and financial analysis</li>
                  <li>• Contract signing and program enrollment</li>
                  <li>• Escrow account setup with third-party provider</li>
                  <li>• Begin monthly deposits ($400-$1,200 typical)</li>
                  <li>• Stop payments to creditors</li>
                </ul>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="font-semibant text-black mb-2">Months 3-6: Account Aging Phase</h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Accounts become 60-120 days delinquent</li>
                  <li>• Creditor calls and letters increase</li>
                  <li>• Some accounts may be charged off</li>
                  <li>• Continue building settlement fund</li>
                  <li>• First settlement opportunities may arise</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibant text-black mb-2">Months 6-12: Active Settlement Phase</h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Most settlements occur during this period</li>
                  <li>• Typically start with smallest balances</li>
                  <li>• Average settlement: 45-60% of original debt</li>
                  <li>• Settlement payments made from escrow account</li>
                  <li>• Completion letters received from creditors</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibant text-black mb-2">Months 12-18: Final Resolution Phase</h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Largest debts typically settled last</li>
                  <li>• Some creditors may pursue legal action</li>
                  <li>• Final settlements and payments completed</li>
                  <li>• Credit report updates begin</li>
                  <li>• Program graduation and certificate</li>
                </ul>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Specific Timeline Factors</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-orange-50 border border-orange-200 p-6">
                <h4 className="font-semibold text-black mb-3">High Cost of Living Impact</h4>
                <p className="text-sm text-neutral-700">Orange County's elevated living costs often accelerate the timeline as creditors recognize genuine hardship faster than in other markets. Average settlement timeframe: 15 months vs. 18 months nationally.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6">
                <h4 className="font-semibold text-black mb-3">Local Creditor Patterns</h4>
                <p className="text-sm text-neutral-700">Major banks with significant Orange County presence (Wells Fargo, Bank of America, Chase) typically begin settlement discussions at 4-6 months vs. 6-8 months in other regions.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-6">
                <h4 className="font-semibold text-black mb-3">Professional Income Considerations</h4>
                <p className="text-sm text-neutral-700">High-income professionals in tech, healthcare, and finance may face longer timelines (20-24 months) as creditors pursue larger settlements given income potential.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Month-by-Month Action Items</h2>
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">Detailed Monthly Breakdown</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-semibold text-black mb-2">Month 1: Program Initiation</h4>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Week 1: Initial consultation and financial analysis</li>
                    <li>• Week 2: Contract review and program enrollment</li>
                    <li>• Week 3: Third-party escrow account setup</li>
                    <li>• Week 4: First monthly deposit and payment cessation</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="font-semibold text-black mb-2">Months 2-3: Early Response Phase</h4>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Creditor contact frequency increases (10-15 calls per week)</li>
                    <li>• First collection letters arrive (30-45 days)</li>
                    <li>• Account status changes to "past due"</li>
                    <li>• Continue monthly escrow deposits</li>
                    <li>• Document all creditor communications</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="font-semibold text-black mb-2">Months 4-6: Charge-Off Period</h4>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Accounts typically charge-off at 120-180 days</li>
                    <li>• Credit score impact peaks during this period</li>
                    <li>• Some accounts transferred to collection agencies</li>
                    <li>• First settlement offers may appear (usually 70-80%)</li>
                    <li>• Continue building settlement fund</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-black mb-2">Months 7-12: Peak Settlement Period</h4>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• 60% of settlements occur during this timeframe</li>
                    <li>• Start with smallest balances for quick wins</li>
                    <li>• Typical settlement range: 40-60% of original balance</li>
                    <li>• Settlement payments made from escrow account</li>
                    <li>• Receive settlement confirmation letters</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-black mb-2">Months 13-18: Final Resolution</h4>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Largest debts typically settled during this phase</li>
                    <li>• Some creditors may initiate legal proceedings</li>
                    <li>• Final settlement negotiations and payments</li>
                    <li>• Credit reports begin showing "settled" status</li>
                    <li>• Program completion and graduation certificate</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Tech Professional - Irvine</h3>
                <div className="space-y-2 text-sm text-neutral-700">
                  <div className="flex justify-between"><span>Original debt:</span><span className="font-mono">$65,000</span></div>
                  <div className="flex justify-between"><span>Number of accounts:</span><span className="font-mono">5</span></div>
                  <div className="flex justify-between"><span>Program duration:</span><span className="font-mono">16 months</span></div>
                  <div className="flex justify-between"><span>Total settlements:</span><span className="font-mono">$28,600</span></div>
                  <div className="flex justify-between font-semibold"><span>Total savings:</span><span className="font-mono text-green-600">$36,400 (56%)</span></div>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Healthcare Worker - Newport Beach</h3>
                <div className="space-y-2 text-sm text-neutral-700">
                  <div className="flex justify-between"><span>Original debt:</span><span className="font-mono">$42,000</span></div>
                  <div className="flex justify-between"><span>Number of accounts:</span><span className="font-mono">7</span></div>
                  <div className="flex justify-between"><span>Program duration:</span><span className="font-mono">14 months</span></div>
                  <div className="flex justify-between"><span>Total settlements:</span><span className="font-mono">$19,800</span></div>
                  <div className="flex justify-between font-semibold"><span>Total savings:</span><span className="font-mono text-green-600">$22,200 (53%)</span></div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Timeline Acceleration Strategies</h2>
            <div className="space-y-4 mb-8">
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Lump Sum Availability</h4>
                <p className="text-sm text-neutral-700">Having access to larger lump sums (inheritance, bonus, home equity) can reduce timeline to 6-10 months with better settlement percentages.</p>
              </div>
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Hardship Documentation</h4>
                <p className="text-sm text-neutral-700">Strong hardship documentation (medical bills, job loss, divorce) can accelerate creditor willingness to settle by 2-4 months.</p>
              </div>
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Professional Representation</h4>
                <p className="text-sm text-neutral-700">Attorney representation can reduce timeline by 20-30% due to creditor preference for legal resolution vs. collection efforts.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Common Timeline Delays</h2>
            <div className="bg-red-50 border border-red-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Factors That Extend Timeline</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• <strong>Inconsistent payments:</strong> +3-6 months</li>
                  <li>• <strong>High-balance accounts:</strong> +2-4 months</li>
                  <li>• <strong>Premium credit cards:</strong> +1-3 months</li>
                  <li>• <strong>Recent account activity:</strong> +2-5 months</li>
                </ul>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• <strong>Multiple collection agencies:</strong> +1-4 months</li>
                  <li>• <strong>Legal action threats:</strong> +2-6 months</li>
                  <li>• <strong>Asset discovery concerns:</strong> +3-8 months</li>
                  <li>• <strong>Creditor policy changes:</strong> +1-6 months</li>
                </ul>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibant text-black mb-4">Timeline Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Settlement timelines vary significantly based on debt amounts, creditor types, client financial situation, and market conditions. This timeline represents average experiences and should not be considered a guarantee of specific outcomes or timeframes. Individual results may vary based on cooperation with the program, consistency of payments, and external economic factors.</p>
            </div>
          </div>
        </div>
      </article>
      
      {/* Consultation Form */}
      <div id="consultation">
        <ConsultationForm />
      </div>
    </div>
  );
}