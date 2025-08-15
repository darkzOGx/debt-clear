import React from 'react';
import { ArrowLeft, Calendar, Clock, User, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function CreditScoreRecoveryDebtSettlementOrangeCounty() {
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
          <div className="flex items-center gap-3 mb-6"><div className="w-2 h-2 bg-black"></div><span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">CREDIT REPAIR</span></div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">Credit Score Recovery After Debt Settlement<br /><span className="font-mono text-3xl lg:text-4xl">in Orange County</span></h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>June 25, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>11 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Credit Recovery Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">Step-by-step guide to rebuilding credit after debt settlement, with timelines and strategies specific to Orange County residents.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Post-Settlement Credit Impact</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">Debt settlement typically causes a 75-150 point credit score drop initially, but Orange County residents typically see scores recover to pre-settlement levels within 24-36 months with proper strategy.</p>
            <div className="bg-emerald-50 border border-emerald-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-emerald-600 mt-1" />
                <div><h3 className="text-lg font-semibold text-emerald-800 mb-4">Average Credit Recovery Timeline</h3>
                  <div className="space-y-2 text-sm text-emerald-700">
                    <div className="flex justify-between"><span>Months 1-6:</span><span>Score stabilizes, stops declining</span></div>
                    <div className="flex justify-between"><span>Months 6-12:</span><span>20-40 point improvement</span></div>
                    <div className="flex justify-between"><span>Months 12-24:</span><span>50-80 point improvement</span></div>
                    <div className="flex justify-between"><span>Months 24-36:</span><span>Return to pre-settlement range</span></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Credit Rebuilding Strategy</h2>
            <div className="space-y-6 mb-8">
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Phase 1: Immediate Actions (Months 1-3)</h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Obtain free credit reports from all three bureaus</li>
                  <li>• Dispute any inaccurate settlement reporting</li>
                  <li>• Open secured credit card with $500+ limit</li>
                  <li>• Keep credit utilization under 10%</li>
                </ul>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Phase 2: Foundation Building (Months 3-12)</h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Add second secured card from different issuer</li>
                  <li>• Consider credit-builder loan</li>
                  <li>• Maintain 100% on-time payment history</li>
                  <li>• Keep total utilization under 30%</li>
                </ul>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Phase 3: Score Optimization (Months 12-24)</h4>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Apply for unsecured credit cards</li>
                  <li>• Request credit limit increases</li>
                  <li>• Consider becoming authorized user</li>
                  <li>• Monitor credit reports monthly</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Credit Recovery Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Credit score recovery varies significantly based on individual credit history, settlement details, and rebuilding efforts. This timeline represents average experiences and should not be considered a guarantee. Credit repair services cannot remove accurate information from credit reports.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Schedule Debt Analysis Session */}
      <section id="consultation" className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Schedule Debt
              <br />
              <span className="font-mono">Analysis Session</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Get a personalized debt analysis from our Orange County specialists. 
              No upfront fees, no obligations, completely confidential.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}