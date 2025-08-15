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
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Your Rights During Debt Collection</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 border border-green-200 p-6">
                <h4 className="font-semibold text-black mb-3">Right to Verification</h4>
                <p className="text-sm text-neutral-700 mb-2">Within 30 days of first contact, you can request debt validation including:</p>
                <ul className="text-xs text-neutral-600 space-y-1">
                  <li>• Amount of debt and creditor information</li>
                  <li>• Proof you owe the debt</li>
                  <li>• Copy of original signed agreement</li>
                  <li>• Account statements showing charges</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-6">
                <h4 className="font-semibold text-black mb-3">Right to Cease Communication</h4>
                <p className="text-sm text-neutral-700 mb-2">You can request collectors stop contacting you by sending a written cease and desist letter. After receipt, they can only contact you to:</p>
                <ul className="text-xs text-neutral-600 space-y-1">
                  <li>• Confirm they received your letter</li>
                  <li>• Notify you of specific legal action</li>
                  <li>• Inform you they're ending collection efforts</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6">
                <h4 className="font-semibold text-black mb-3">Right to Dispute</h4>
                <p className="text-sm text-neutral-700 mb-2">You have 30 days from initial contact to dispute the debt in writing. Collection must stop until verification is provided.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Collection Agency Registration</h2>
            <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">Local Registration Requirements</h3>
              <p className="text-neutral-700 mb-4">Collection agencies operating in Orange County must be licensed and bonded under California law. Verify collector legitimacy through:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-black mb-2">State Licensing</h4>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• California Department of Financial Protection and Innovation</li>
                    <li>• License search: dfpi.ca.gov</li>
                    <li>• Required $25,000 bond</li>
                    <li>• Annual renewal required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Warning Signs of Unlicensed Collectors</h4>
                  <ul className="text-sm text-neutral-700 space-y-1">
                    <li>• Refuse to provide company information</li>
                    <li>• Can't provide license number</li>
                    <li>• Use threatening language immediately</li>
                    <li>• Demand immediate payment via wire transfer</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Illegal Collection Practices</h2>
            <div className="bg-red-50 border border-red-200 p-8 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Prohibited Actions Under FDCPA & Rosenthal Act</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-black mb-3">Communication Violations</h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Calling before 8 AM or after 9 PM (your local time)</li>
                    <li>• Contacting you at work if told it's not allowed</li>
                    <li>• Discussing debt with third parties (family, neighbors, employers)</li>
                    <li>• Using profane, obscene, or abusive language</li>
                    <li>• Threatening violence or harm</li>
                    <li>• Repeatedly calling to annoy or harass</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-3">False Representation</h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Falsely claiming to be attorneys or government agents</li>
                    <li>• Misrepresenting debt amount or legal consequences</li>
                    <li>• Threatening arrest or jail time for unpaid debt</li>
                    <li>• Claiming legal documents are official when they're not</li>
                    <li>• Falsely threatening to garnish wages without court order</li>
                    <li>• Misrepresenting credit reporting consequences</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Legal Resources</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Free Legal Aid</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-black">Legal Aid Society of Orange County</h4>
                    <p className="text-neutral-700">Income-qualified residents can receive free legal assistance</p>
                    <p className="text-xs text-neutral-600">13 locations throughout Orange County</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Public Law Center</h4>
                    <p className="text-neutral-700">Pro bono legal services for low-income residents</p>
                    <p className="text-xs text-neutral-600">Santa Ana office: (714) 541-1010</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">UCI School of Law Clinic</h4>
                    <p className="text-neutral-700">Student-supervised consumer protection cases</p>
                    <p className="text-xs text-neutral-600">Irvine campus clinic</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Filing Complaints</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-black">Federal Trade Commission</h4>
                    <p className="text-neutral-700">ftc.gov/complaint or 1-877-FTC-HELP</p>
                    <p className="text-xs text-neutral-600">National database of collection violations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Consumer Financial Protection Bureau</h4>
                    <p className="text-neutral-700">consumerfinance.gov/complaint</p>
                    <p className="text-xs text-neutral-600">Federal oversight of large debt collectors</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">California Attorney General</h4>
                    <p className="text-neutral-700">oag.ca.gov/contact/consumer-complaint</p>
                    <p className="text-xs text-neutral-600">State-level consumer protection enforcement</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">OC District Attorney Consumer Protection</h4>
                    <p className="text-neutral-700">(714) 347-8400</p>
                    <p className="text-xs text-neutral-600">Local prosecution of collection violations</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Damage Awards for Violations</h2>
            <div className="bg-blue-50 border border-blue-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Financial Remedies Available</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-blue-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Statutory Damages</h4>
                  <p className="text-sm text-neutral-700 mb-2">FDCPA allows up to $1,000 per violation</p>
                  <p className="text-xs text-neutral-600">Plus attorney fees and court costs</p>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Actual Damages</h4>
                  <p className="text-sm text-neutral-700 mb-2">Compensation for emotional distress, lost wages</p>
                  <p className="text-xs text-neutral-600">Must be documented and proven</p>
                </div>
                <div className="bg-white border border-blue-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Punitive Damages</h4>
                  <p className="text-sm text-neutral-700 mb-2">California allows additional punitive awards</p>
                  <p className="text-xs text-neutral-600">For willful or egregious violations</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Documentation and Evidence Collection</h2>
            <div className="space-y-4 mb-8">
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Call Recording</h4>
                <p className="text-sm text-neutral-700">California is a two-party consent state. You must inform collectors you're recording, but they often consent or hang up (which stops harassment).</p>
              </div>
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Written Communications</h4>
                <p className="text-sm text-neutral-700">Save all letters, emails, texts. Note dates, times, collector names, and company information. Digital photos of damaged mail envelopes showing inappropriate markings.</p>
              </div>
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Call Logs</h4>
                <p className="text-sm text-neutral-700">Document all calls: date, time, duration, caller ID, what was said, threats made. Even brief harassment calls should be logged.</p>
              </div>
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Witness Statements</h4>
                <p className="text-sm text-neutral-700">If family members, coworkers, or neighbors witness inappropriate collector behavior or communications, obtain written statements.</p>
              </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Consumer Rights Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Debt collection laws are complex and change frequently. This information is for educational purposes only and does not constitute legal advice. Individual situations vary significantly based on debt type, collector practices, and state regulations. For specific legal questions about debt collection practices, consult with qualified consumer protection attorneys or legal aid organizations. Time limits apply to filing complaints and lawsuits.</p>
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