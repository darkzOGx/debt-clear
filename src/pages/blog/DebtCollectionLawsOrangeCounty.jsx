import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtCollectionLawsOrangeCounty() {
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
          <div className="flex items-center gap-3 mb-6"><div className="w-2 h-2 bg-black"></div><span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">CONSUMER RIGHTS</span></div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">Orange County Debt Collection Laws:<br /><span className="font-mono text-3xl lg:text-4xl">Know Your Rights</span></h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>June 20, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Consumer Rights Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">Complete guide to debt collection regulations in Orange County, including illegal practices, consumer protections, and how to file complaints.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Federal and California Consumer Protections</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">Orange County residents benefit from both federal Fair Debt Collection Practices Act (FDCPA) and California's Rosenthal Fair Debt Collection Practices Act, providing comprehensive protection against abusive debt collection.</p>
            <div className="bg-blue-50 border border-blue-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div><h3 className="text-lg font-semibold text-blue-800 mb-4">Prohibited Collection Practices</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Calling before 8 AM or after 9 PM</li>
                    <li>• Contacting you at work if prohibited</li>
                    <li>• Using profane or threatening language</li>
                    <li>• Misrepresenting debt amount or legal consequences</li>
                    <li>• Continuing contact after cease and desist letter</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">California-Specific Protections</h2>
            <div className="space-y-6 mb-8">
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Wage Garnishment Limits</h4>
                <p className="text-sm text-neutral-700">California limits wage garnishment to 25% of disposable income or amount exceeding 40x minimum wage per week, whichever is less.</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Statute of Limitations</h4>
                <p className="text-sm text-neutral-700">4 years for most consumer debts in California. Collectors cannot sue for debts older than this timeframe.</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Asset Protection</h4>
                <p className="text-sm text-neutral-700">Social Security, unemployment benefits, and certain pension benefits are protected from garnishment in California.</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Filing Complaints in Orange County</h2>
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Where to Report Violations</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• <strong>Federal Trade Commission:</strong> ftc.gov/complaint</li>
                <li>• <strong>Consumer Financial Protection Bureau:</strong> consumerfinance.gov/complaint</li>
                <li>• <strong>California Attorney General:</strong> oag.ca.gov/contact/consumer-complaint-against-business-or-company</li>
                <li>• <strong>Orange County District Attorney:</strong> Consumer Protection Unit</li>
              </ul>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Consumer Rights Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Debt collection laws are complex and change frequently. This information is for educational purposes only and does not constitute legal advice. Individual situations vary. For specific legal questions about debt collection practices, consult with qualified consumer protection attorneys or legal aid organizations.</p>
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