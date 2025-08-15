import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function TaxImplicationsDebtSettlementCalifornia() {
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
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Back to Resources</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">TAX PLANNING</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Tax Implications of Debt Settlement<br />
            <span className="font-mono text-3xl lg:text-4xl">in California</span>
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 15, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Tax Planning Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">
            Understanding the tax consequences of debt settlement for Orange County residents and how to minimize 
            tax liability when settling credit cards, medical debt, and other obligations.
          </p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Form 1099-C: Cancellation of Debt</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              When you settle debt for less than the full amount owed, the forgiven portion is generally considered taxable income. 
              Creditors must issue Form 1099-C for cancelled debt of $600 or more, which you must report on your tax return.
            </p>
            <div className="bg-amber-50 border border-amber-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-4">Example Tax Calculation</h3>
                  <div className="space-y-2 text-sm text-amber-700">
                    <div className="flex justify-between"><span>Original debt:</span><span className="font-mono">$25,000</span></div>
                    <div className="flex justify-between"><span>Settlement amount:</span><span className="font-mono">$10,000</span></div>
                    <div className="flex justify-between border-t border-amber-300 pt-2"><span>Cancelled debt (taxable):</span><span className="font-mono">$15,000</span></div>
                    <div className="flex justify-between"><span>Tax owed (24% bracket):</span><span className="font-mono">$3,600</span></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">California Tax Considerations</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              California generally follows federal tax rules for debt forgiveness, meaning cancelled debt is taxable 
              at both federal and state levels. Orange County residents face combined tax rates up to 50.3% on high incomes.
            </p>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Exceptions and Exclusions</h2>
            <div className="space-y-6 mb-8">
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Insolvency Exception</h4>
                <p className="text-sm text-neutral-700">If you were insolvent when debt was cancelled, you may exclude some or all forgiven debt from taxable income.</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Principal Residence Exception</h4>
                <p className="text-sm text-neutral-700">Qualified principal residence indebtedness may be excluded up to $2 million for California residents.</p>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Tax Planning Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Tax laws are complex and change frequently. This information is for educational purposes only and does not 
                constitute tax advice. Individual tax situations vary significantly. Always consult with qualified tax 
                professionals, CPAs, or tax attorneys before making decisions about debt settlement and tax planning.
              </p>
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