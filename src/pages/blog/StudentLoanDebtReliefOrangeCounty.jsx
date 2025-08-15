import React from 'react';
import { ArrowLeft, Calendar, Clock, User, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function StudentLoanDebtReliefOrangeCounty() {
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
          <div className="flex items-center gap-3 mb-6"><div className="w-2 h-2 bg-black"></div><span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">STUDENT LOANS</span></div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">Student Loan Debt Relief in Orange County:<br /><span className="font-mono text-3xl lg:text-4xl">Options Beyond Settlement</span></h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 8, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Student Loan Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">Comprehensive guide to student loan relief programs available to Orange County residents, including forgiveness options, income-driven repayment plans, and discharge possibilities.</p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Student Loan Landscape</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">Orange County residents carry $2.8 billion in student loan debt, with the average borrower owing $34,200. High local costs of living make standard repayment difficult for many graduates working in the region.</p>
            <div className="bg-indigo-50 border border-indigo-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-indigo-600 mt-1" />
                <div><h3 className="text-lg font-semibold text-indigo-800 mb-4">OC Student Loan Statistics</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div><div className="text-2xl font-mono text-indigo-800 mb-1">$2.8B</div><div className="text-xs text-indigo-700">Total OC Student Debt</div></div>
                    <div><div className="text-2xl font-mono text-indigo-800 mb-1">$34.2K</div><div className="text-xs text-indigo-700">Average Per Borrower</div></div>
                    <div><div className="text-2xl font-mono text-indigo-800 mb-1">67%</div><div className="text-xs text-indigo-700">Have Federal Loans</div></div>
                    <div><div className="text-2xl font-mono text-indigo-800 mb-1">23%</div><div className="text-xs text-indigo-700">Behind on Payments</div></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Federal Loan Forgiveness Programs</h2>
            <div className="space-y-6 mb-8">
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Public Service Loan Forgiveness (PSLF)</h4>
                <p className="text-sm text-neutral-700 mb-2">Complete forgiveness after 120 qualifying payments while working full-time for qualifying employers.</p>
                <div className="text-xs text-neutral-600"><strong>OC Qualifying Employers:</strong> Orange County government, UCI Health, school districts, nonprofits</div>
              </div>
              <div className="border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Teacher Loan Forgiveness</h4>
                <p className="text-sm text-neutral-700 mb-2">Up to $17,500 forgiveness for teachers in low-income schools after 5 consecutive years.</p>
                <div className="text-xs text-neutral-600"><strong>OC Qualifying Schools:</strong> Santa Ana USD, Anaheim Union High School District</div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Income-Driven Repayment Plans</h2>
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">SAVE Plan (Replacing REPAYE)</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div><h5 className="font-semibold text-black mb-2">Benefits:</h5>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• 5% of discretionary income (down from 10%)</li>
                    <li>• $0 payment if income ≤ 225% poverty level</li>
                    <li>• No capitalized interest</li>
                    <li>• Forgiveness after 20-25 years</li>
                  </ul>
                </div>
                <div><h5 className="font-semibold text-black mb-2">Example (OC resident):</h5>
                  <ul className="text-neutral-700 space-y-1">
                    <li>• Income: $60,000</li>
                    <li>• Family size: 2</li>
                    <li>• Monthly payment: $203</li>
                    <li>• Standard payment: $389</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Student Loan Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Student loan laws and programs change frequently. This information is current as of publication but may not reflect the latest program updates. Individual eligibility varies. Always verify current program requirements with official sources and consult with qualified student loan counselors before making decisions.</p>
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