import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PropertyProtectionDebtSettlementOrangeCounty() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"><ArrowLeft className="w-4 h-4" />Back to Resources</Link>
          <div className="flex items-center gap-3 mb-6"><div className="w-2 h-2 bg-black"></div><span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">ASSET PROTECTION</span></div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">Orange County Property Protection<br /><span className="font-mono text-3xl lg:text-4xl">During Debt Settlement</span></h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 5, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Asset Protection Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">How to protect your Orange County home and assets during the debt settlement process using California exemptions and strategic planning.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibant text-black mb-6 mt-12">Orange County Real Estate Protection</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">With median home values exceeding $1.2 million, Orange County homeowners have significant equity at stake during debt settlement. California's homestead exemption provides substantial protection for primary residences.</p>
            <div className="bg-emerald-50 border border-emerald-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <Home className="w-6 h-6 text-emerald-600 mt-1" />
                <div><h3 className="text-lg font-semibold text-emerald-800 mb-4">California Homestead Exemptions</h3>
                  <div className="space-y-3 text-sm text-emerald-700">
                    <div className="flex justify-between"><span>Single person:</span><span className="font-mono">$300,000</span></div>
                    <div className="flex justify-between"><span>Family (spouse/children):</span><span className="font-mono">$600,000</span></div>
                    <div className="flex justify-between"><span>Senior (65+) or disabled:</span><span className="font-mono">$600,000</span></div>
                    <div className="flex justify-between"><span>Low-income senior:</span><span className="font-mono">$600,000</span></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibant text-black mb-6 mt-12">Asset Protection Strategies</h2>
            <div className="space-y-6 mb-8">
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibant text-black mb-3">Retirement Account Protection</h4>
                <p className="text-sm text-neutral-700">401(k), 403(b), and pension plans are generally protected from creditors under ERISA. IRAs protected up to $1.36 million (2022 limit).</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibant text-black mb-3">Personal Property Exemptions</h4>
                <p className="text-sm text-neutral-700">Motor vehicles ($3,325), household goods ($8,000), jewelry ($8,000), and tools of trade are protected under California exemptions.</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibant text-black mb-3">Life Insurance Protection</h4>
                <p className="text-sm text-neutral-700">Life insurance proceeds and cash values are generally protected from creditors when properly structured.</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibant text-black mb-6 mt-12">Orange County Case Example</h2>
            <div className="bg-blue-50 border border-blue-200 p-8 mb-8">
              <h3 className="text-xl font-semibant text-blue-800 mb-4">Huntington Beach Professional</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div><h5 className="font-semibant text-black mb-2">Assets at Risk:</h5>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• Home value: $1.8M</li>
                    <li>• Mortgage balance: $900K</li>
                    <li>• Home equity: $900K</li>
                    <li>• 401(k): $450K</li>
                  </ul>
                </div>
                <div><h5 className="font-semibant text-black mb-2">Protection Strategy:</h5>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• Homestead exemption: $600K protected</li>
                    <li>• Exposed equity: $300K</li>
                    <li>• 401(k): Fully protected</li>
                    <li>• Settlement plan preserved assets</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibant text-black mb-4">Asset Protection Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Asset protection laws are complex and vary by state and federal regulations. This information is for educational purposes only and does not constitute legal advice. Individual situations vary significantly. Always consult with qualified asset protection attorneys, estate planning professionals, and financial advisors before implementing protection strategies.</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}