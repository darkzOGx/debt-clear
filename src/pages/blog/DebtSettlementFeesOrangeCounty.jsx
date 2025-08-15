import React from 'react';
import { ArrowLeft, Calendar, Clock, User, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtSettlementFeesOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"><ArrowLeft className="w-4 h-4" />Back to Resources</Link>
          <div className="flex items-center gap-3 mb-6"><div className="w-2 h-2 bg-black"></div><span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">COST ANALYSIS</span></div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">Orange County Debt Settlement Fees:<br /><span className="font-mono text-3xl lg:text-4xl">Understanding the Costs</span></h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>June 28, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Cost Analysis Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">Transparent breakdown of debt settlement fees in Orange County, including what's legal, typical costs, and how to avoid overcharges.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Legal Fee Structure in California</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">California law prohibits debt settlement companies from charging upfront fees. All fees must be charged only after successful settlement of each individual debt.</p>
            <div className="bg-green-50 border border-green-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-green-600 mt-1" />
                <div><h3 className="text-lg font-semibold text-green-800 mb-4">Legal Fee Requirements</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• No upfront fees before settlement</li>
                    <li>• Fees only charged after successful settlement</li>
                    <li>• Must be percentage of settled amount, not original debt</li>
                    <li>• All fees must be disclosed in writing</li>
                    <li>• Clients must approve each settlement before payment</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Fee Ranges</h2>
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Typical Fee Percentages by Company Type</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">AI-Powered Companies</span>
                  <span className="text-sm font-mono text-black">15-20%</span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">Local Boutique Firms</span>
                  <span className="text-sm font-mono text-black">18-23%</span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                  <span className="text-sm text-neutral-700">National Companies</span>
                  <span className="text-sm font-mono text-black">20-25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-700">Attorney-Based Services</span>
                  <span className="text-sm font-mono text-black">25-30%</span>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Cost Comparison Example</h2>
            <div className="bg-blue-50 border border-blue-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">$50,000 Debt Settlement</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div><h5 className="font-semibold text-black mb-2">Settlement Outcome:</h5>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• Original debt: $50,000</li>
                    <li>• Settled amount: $22,500 (55% reduction)</li>
                    <li>• Money saved: $27,500</li>
                  </ul>
                </div>
                <div><h5 className="font-semibold text-black mb-2">Fee Comparison:</h5>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• 18% fee: $4,050</li>
                    <li>• 25% fee: $5,625</li>
                    <li>• Difference: $1,575</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Fee Structure Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Debt settlement fees vary based on debt amount, complexity, and company policies. This information is for educational purposes only. Always request written fee disclosures and compare multiple companies before making decisions. Some companies may charge additional administrative or escrow fees.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Research Consultation */}
      <section id="consultation" className="py-8 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}