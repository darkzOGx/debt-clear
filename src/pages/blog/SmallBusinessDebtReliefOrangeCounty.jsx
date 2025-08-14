import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SmallBusinessDebtReliefOrangeCounty() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">BUSINESS FINANCE</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Orange County Small Business<br />
            <span className="font-mono text-3xl lg:text-4xl">Debt Relief Options</span>
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 20, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>13 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Business Finance Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">
            Comprehensive guide to debt relief solutions for Orange County small businesses, from negotiation strategies 
            to restructuring options, with specific focus on local business challenges and SBA programs.
          </p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Small Business Debt Crisis</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County's 287,000 small businesses face unique financial pressures due to high commercial rents averaging 
              $3.20 per square foot, competitive labor markets with median wages of $52,000, and post-COVID recovery challenges. 
              With 42% of OC small businesses carrying debt exceeding $100,000, strategic debt relief has become critical for survival.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Orange County Business Debt Statistics</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div><div className="text-2xl font-mono text-blue-800 mb-1">287K</div><div className="text-xs text-blue-700">Small Businesses</div></div>
                    <div><div className="text-2xl font-mono text-blue-800 mb-1">$127K</div><div className="text-xs text-blue-700">Average Business Debt</div></div>
                    <div><div className="text-2xl font-mono text-blue-800 mb-1">42%</div><div className="text-xs text-blue-700">Carry $100K+ Debt</div></div>
                    <div><div className="text-2xl font-mono text-blue-800 mb-1">23%</div><div className="text-xs text-blue-700">Behind on Payments</div></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Types of Business Debt Relief</h2>
            <div className="space-y-8 mb-8">
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">1. Business Debt Settlement</h4>
                <p className="text-sm text-neutral-700 mb-4">Negotiating with creditors to accept less than full payment, typically 30-60% of original debt.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div><strong>Best For:</strong> Unsecured business debt, credit cards, lines of credit</div>
                  <div><strong>Timeline:</strong> 6-18 months</div>
                  <div><strong>Success Rate:</strong> 75-85% in Orange County</div>
                  <div><strong>Credit Impact:</strong> Temporary negative impact</div>
                </div>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">2. SBA Debt Relief Programs</h4>
                <p className="text-sm text-neutral-700 mb-4">Federal programs specifically designed to help small businesses manage SBA loan obligations.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div><strong>Best For:</strong> SBA 7(a) loans, microloans, disaster loans</div>
                  <div><strong>Timeline:</strong> 3-12 months</div>
                  <div><strong>Options:</strong> Deferment, modification, OIC</div>
                  <div><strong>Requirements:</strong> Hardship documentation</div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Business Debt Settlement Success Stories</h2>
            <div className="space-y-8 mb-8">
              <div className="bg-green-50 border border-green-200 p-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Case Study: Anaheim Manufacturing Company</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h5 className="font-semibold text-black mb-2">Business Profile:</h5>
                    <ul className="text-neutral-700 space-y-1">
                      <li>• Industry: Aerospace parts manufacturing</li>
                      <li>• Employees: 23</li>
                      <li>• Annual Revenue: $3.2M</li>
                      <li>• Total Debt: $890,000</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Settlement Results:</h5>
                    <ul className="text-neutral-700 space-y-1">
                      <li>• Equipment financing: 45% reduction</li>
                      <li>• Business credit cards: 58% reduction</li>
                      <li>• Working capital loan: 52% reduction</li>
                      <li>• Total savings: $467,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibant text-black mb-6 mt-12">Orange County SBA Resources</h2>
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Local SBA Support Centers</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• <strong>Orange County SCORE:</strong> Free business mentoring and workshops</li>
                <li>• <strong>UCI Small Business Development Center:</strong> One-on-one counseling</li>
                <li>• <strong>Women's Business Center (Santa Ana):</strong> Specialized support for women-owned businesses</li>
                <li>• <strong>Orange County Business Council:</strong> Advocacy and resources</li>
              </ul>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Business Debt Relief Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Business debt relief options vary significantly based on business structure, debt types, and financial circumstances. 
                This information is for educational purposes only and does not constitute legal or financial advice. Always consult 
                with qualified business attorneys, accountants, and financial advisors before making debt relief decisions. 
                Business debt settlement may have tax implications and impact business credit ratings.
              </p>
            </div>
          </div>
        </div>
      </article>
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/tax-implications-debt-settlement-california" className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors">
              <h3 className="font-semibold text-black mb-2">Tax Implications of Debt Settlement in California</h3>
              <p className="text-sm text-neutral-600 mb-4">Understanding tax consequences of debt settlement for Orange County businesses and individuals.</p>
              <span className="text-xs font-mono text-neutral-500">8 min read</span>
            </Link>
            <Link to="/blog/bankruptcy-vs-debt-settlement-orange-county" className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors">
              <h3 className="font-semibold text-black mb-2">Orange County Bankruptcy vs Debt Settlement: Complete Comparison</h3>
              <p className="text-sm text-neutral-600 mb-4">Detailed analysis of bankruptcy and debt settlement options for Orange County residents.</p>
              <span className="text-xs font-mono text-neutral-500">15 min read</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}