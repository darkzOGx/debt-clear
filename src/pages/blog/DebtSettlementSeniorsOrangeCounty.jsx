import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtSettlementSeniorsOrangeCounty() {
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
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">SENIOR FINANCE</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Debt Settlement for Orange County Seniors:<br />
            <span className="font-mono text-3xl lg:text-4xl">Special Considerations</span>
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 12, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Senior Finance Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">
            Age-specific debt relief strategies for Orange County seniors, including asset protection, 
            fixed income planning, and special protections available to older adults.
          </p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Senior Debt Challenges</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County seniors face unique financial pressures with 34% of households headed by someone 65+ carrying debt. 
              High healthcare costs, fixed Social Security income, and the region's expensive cost of living create perfect 
              storm conditions for debt accumulation among older adults.
            </p>
            <div className="bg-purple-50 border border-purple-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">OC Senior Debt Statistics</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div><div className="text-2xl font-mono text-purple-800 mb-1">34%</div><div className="text-xs text-purple-700">Seniors with Debt</div></div>
                    <div><div className="text-2xl font-mono text-purple-800 mb-1">$23K</div><div className="text-xs text-purple-700">Average Senior Debt</div></div>
                    <div><div className="text-2xl font-mono text-purple-800 mb-1">67%</div><div className="text-xs text-purple-700">Medical/Healthcare Related</div></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Senior-Specific Protections</h2>
            <div className="space-y-6 mb-8">
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Social Security Protection</h4>
                <p className="text-sm text-neutral-700">Social Security benefits are generally protected from creditor garnishment, except for federal debts like taxes or student loans.</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Retirement Account Protection</h4>
                <p className="text-sm text-neutral-700">401(k), IRA, and pension accounts are typically protected from creditors under ERISA and California law.</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Enhanced Homestead Exemption</h4>
                <p className="text-sm text-neutral-700">California provides enhanced homestead protection of $600,000 for seniors 65+ and disabled individuals.</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Senior-Focused Settlement Strategies</h2>
            <div className="bg-green-50 border border-green-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Case Study: Huntington Beach Retiree</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h5 className="font-semibold text-black mb-2">Situation:</h5>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• Age 72, widowed</li>
                    <li>• Fixed income: $2,800/month</li>
                    <li>• Medical debt: $34,000</li>
                    <li>• Credit card debt: $18,000</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-black mb-2">Outcome:</h5>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• Medical debt: 80% reduction</li>
                    <li>• Credit cards: 65% reduction</li>
                    <li>• Protected all retirement assets</li>
                    <li>• Maintained Medicare eligibility</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Senior Resources</h2>
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Local Senior Support</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• <strong>Orange County on Aging:</strong> Financial counseling and assistance programs</li>
                <li>• <strong>AARP Foundation Tax-Aide:</strong> Free tax preparation for seniors</li>
                <li>• <strong>Legal Aid Society Senior Services:</strong> Free legal assistance for low-income seniors</li>
                <li>• <strong>Orange County Senior Centers:</strong> Financial literacy workshops and support groups</li>
              </ul>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Senior Debt Settlement Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                This information is for educational purposes only and does not constitute legal, financial, or tax advice. 
                Senior debt situations often involve complex considerations including Medicare, Social Security, and estate planning. 
                Always consult with qualified elder law attorneys, financial planners, and tax professionals before making 
                debt settlement decisions. Individual circumstances vary significantly.
              </p>
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