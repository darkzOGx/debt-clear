import React from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibant text-black mb-4">Timeline Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Settlement timelines vary significantly based on debt amounts, creditor types, client financial situation, and market conditions. This timeline represents average experiences and should not be considered a guarantee of specific outcomes or timeframes.</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}