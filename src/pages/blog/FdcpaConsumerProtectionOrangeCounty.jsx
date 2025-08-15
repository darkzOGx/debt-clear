import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Scale, BookOpen, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function FdcpaConsumerProtectionOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              CONSUMER RIGHTS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Fair Debt Collection Practices Act:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Consumer Protection</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Consumer Rights Attorney</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="text-xl text-neutral-700 leading-relaxed mb-12">
              The Fair Debt Collection Practices Act (FDCPA) provides crucial federal protections for Orange County residents dealing with debt collectors. Understanding these rights can stop abusive collection practices, provide monetary compensation for violations, and empower consumers to take control of their debt situation.
            </div>

            {/* FDCPA Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6" />
                FDCPA Overview and Orange County Application
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">What FDCPA Covers</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Third-Party Collectors:</strong> Collection agencies, debt buyers, law firms</li>
                    <li>• <strong>Personal Debts:</strong> Credit cards, medical bills, auto loans, mortgages</li>
                    <li>• <strong>Consumer Debts:</strong> Debts for personal, family, or household purposes</li>
                    <li>• <strong>Geographic Coverage:</strong> All 50 states including California</li>
                    <li>• <strong>Federal Law:</strong> Supersedes weaker state laws</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">What FDCPA Doesn't Cover</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Original creditors collecting their own debts</li>
                    <li>• Business debts (commercial collection)</li>
                    <li>• Government debt collection</li>
                    <li>• Attorneys collecting debts (some exceptions)</li>
                    <li>• Creditors' employees (in some circumstances)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-blue-200">
                <h4 className="font-semibold text-black mb-2">Orange County Advantage</h4>
                <p className="text-sm text-neutral-700">
                  Orange County residents benefit from both federal FDCPA protections and California's stronger Rosenthal Fair Debt Collection Practices Act, which covers original creditors and provides additional protections.
                </p>
              </div>
            </motion.div>

            {/* Prohibited Practices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                FDCPA Prohibited Collection Practices
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Harassment and Abuse</h3>
                  <p className="text-neutral-700 mb-3">
                    Collectors cannot harass or abuse Orange County residents:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Threatening Violence:</strong> Physical harm to person, property, or reputation</li>
                    <li>• <strong>Obscene Language:</strong> Profanity or abusive language</li>
                    <li>• <strong>Excessive Calls:</strong> Repeated calls intended to annoy or harass</li>
                    <li>• <strong>Publishing Debt:</strong> Sharing debt information publicly</li>
                    <li>• <strong>Anonymous Calls:</strong> Failing to identify themselves as debt collectors</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">False or Misleading Representations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Identity Misrepresentation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Claiming to be attorneys when not licensed</li>
                        <li>• Impersonating government officials</li>
                        <li>• Using fake law enforcement credentials</li>
                        <li>• Creating fictitious law firm names</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Debt Misrepresentation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Inflating debt amounts with fake fees</li>
                        <li>• Claiming legal action will be taken if not true</li>
                        <li>• Misrepresenting consequences of non-payment</li>
                        <li>• False claims about credit reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Unfair Collection Practices</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Collecting Unauthorized Amounts:</strong> Fees, interest, or charges not allowed by law or contract</li>
                    <li>• <strong>Postdated Check Threats:</strong> Threatening to deposit checks early or criminally prosecute</li>
                    <li>• <strong>Communication Deception:</strong> Using false company names or purposes</li>
                    <li>• <strong>Multiple Collection Efforts:</strong> Continuing collection while disputing debt validity</li>
                    <li>• <strong>Asset Seizure Threats:</strong> Threatening to take property they cannot legally seize</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Communication Rules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                FDCPA Communication Rules
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">When Collectors Can Contact You</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Permitted Times (Your Time Zone)</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• 8:00 AM to 9:00 PM local time</li>
                        <li>• No calls on Sundays (generally)</li>
                        <li>• No calls on federal holidays</li>
                        <li>• Weekdays and Saturdays allowed</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Workplace Contact Rules</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Cannot call if told employer prohibits</li>
                        <li>• Must stop when requested verbally</li>
                        <li>• Cannot leave detailed messages</li>
                        <li>• Cannot threaten to contact employer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Third Party Contact Restrictions</h3>
                  <p className="text-neutral-700 mb-3">
                    FDCPA strictly limits who collectors can contact about your debt:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Permitted Contacts</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Your attorney (if you have one representing you)</li>
                        <li>• Your spouse (limited to location information)</li>
                        <li>• Consumer reporting agencies</li>
                        <li>• The original creditor</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Prohibited Contacts</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Family members, friends, neighbors</li>
                        <li>• Employers, coworkers, supervisors</li>
                        <li>• Children, relatives, roommates</li>
                        <li>• Anyone else about debt details</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Required Disclosures</h3>
                  <p className="text-neutral-700 mb-3">
                    Every communication must include specific disclosures:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Mini-Miranda:</strong> "This is an attempt to collect a debt. Any information obtained will be used for that purpose."</li>
                    <li>• <strong>Collector Identification:</strong> Company name and that they are a debt collector</li>
                    <li>• <strong>Written Notice:</strong> Within 5 days of first contact, must send debt validation notice</li>
                    <li>• <strong>Consumer Rights:</strong> Information about dispute rights and validation process</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Debt Validation Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">FDCPA Debt Validation Process</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Initial Validation Notice Requirements</h3>
                  <p className="text-neutral-700 mb-3">
                    Within 5 days of first contact, collectors must provide Orange County residents with:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Debt Amount:</strong> The amount of debt claimed</li>
                    <li>• <strong>Creditor Name:</strong> Name of original creditor to whom debt is owed</li>
                    <li>• <strong>Consumer Rights:</strong> Statement of your right to dispute the debt</li>
                    <li>• <strong>Validation Timeline:</strong> 30-day period to request validation</li>
                    <li>• <strong>Dispute Procedure:</strong> How to dispute the debt in writing</li>
                    <li>• <strong>Original Creditor Information:</strong> How to obtain original creditor information</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Consumer Validation Rights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <h4 className="font-semibold text-black">30-Day Dispute Period</h4>
                        <p className="text-sm text-neutral-700">You have 30 days from receipt of validation notice to dispute the debt in writing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <h4 className="font-semibold text-black">Collection Must Cease</h4>
                        <p className="text-sm text-neutral-700">Collector cannot continue collection efforts until providing validation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <h4 className="font-semibold text-black">Validation Requirements</h4>
                        <p className="text-sm text-neutral-700">Collector must provide proof of debt ownership and amount claimed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">What Validation Must Include</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Required Documentation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Copy of original signed contract or agreement</li>
                        <li>• Proof of assignment or purchase of debt</li>
                        <li>• Account statements showing debt progression</li>
                        <li>• Chain of title documentation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Insufficient Validation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Computer printouts without documentation</li>
                        <li>• Affidavits without supporting records</li>
                        <li>• Balance information without proof of debt</li>
                        <li>• Generic form letters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FDCPA Violations and Remedies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                FDCPA Violations and Legal Remedies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Common FDCPA Violations in Orange County</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Communication Violations</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Calling outside permitted hours</li>
                        <li>• Continuing to call workplace after request to stop</li>
                        <li>• Contacting third parties about debt</li>
                        <li>• Failing to identify as debt collector</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Harassment Violations</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Excessive or repeated calls</li>
                        <li>• Threatening language or violence</li>
                        <li>• Publishing debt information</li>
                        <li>• Using abusive or obscene language</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Available Damages Under FDCPA</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Statutory Damages</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Up to $1,000 per lawsuit (not per violation)</li>
                        <li>• Available even without proving actual damages</li>
                        <li>• Considers frequency and persistence of violations</li>
                        <li>• Court discretion on amount awarded</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Additional Damages</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Actual damages (medical bills, lost wages)</li>
                        <li>• Attorney fees and court costs</li>
                        <li>• Emotional distress damages</li>
                        <li>• Punitive damages in egregious cases</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Filing FDCPA Lawsuits in Orange County</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County residents can file FDCPA lawsuits in:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Federal Court:</strong> U.S. District Court for Central District of California</li>
                    <li>• <strong>State Court:</strong> Orange County Superior Court</li>
                    <li>• <strong>Small Claims:</strong> For smaller damage amounts</li>
                    <li>• <strong>One-Year Statute:</strong> Must file within one year of violation</li>
                    <li>• <strong>Class Actions:</strong> May be possible for widespread violations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Orange County Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County FDCPA Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Legal Assistance</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Legal Aid Society of Orange County:</strong> Free legal help for low-income residents</li>
                    <li>• <strong>Public Law Center:</strong> Consumer rights advocacy</li>
                    <li>• <strong>Orange County Bar Association:</strong> Attorney referral service</li>
                    <li>• <strong>UCI School of Law Clinic:</strong> Student-supervised representation</li>
                    <li>• <strong>Consumer Attorneys of California:</strong> Specialist referrals</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Complaint Filing</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Consumer Financial Protection Bureau:</strong> Federal complaint database</li>
                    <li>• <strong>FTC Consumer Sentinel:</strong> Federal Trade Commission</li>
                    <li>• <strong>California Attorney General:</strong> State-level consumer protection</li>
                    <li>• <strong>California DFPI:</strong> Department of Financial Protection and Innovation</li>
                    <li>• <strong>Orange County DA:</strong> Consumer fraud prosecution</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Enforcement and Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">FDCPA Enforcement and Compliance</h2>
              
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Building a Strong FDCPA Case</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Document Everything:</strong> Keep detailed records of all communications</li>
                    <li>• <strong>Save Evidence:</strong> Voicemails, letters, text messages, emails</li>
                    <li>• <strong>Witness Statements:</strong> Family members who heard violations</li>
                    <li>• <strong>Medical Records:</strong> If harassment caused health issues</li>
                    <li>• <strong>Expert Testimony:</strong> FDCPA specialists can strengthen cases</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Collector Defense Strategies</h3>
                  <p className="text-neutral-700 mb-3">
                    Common defenses collectors use and how to counter them:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Bona Fide Error:</strong> Claiming mistake was unintentional (requires proof of procedures)</li>
                    <li>• <strong>No Standing:</strong> Claiming you're not the right person to sue (validate identity)</li>
                    <li>• <strong>Consent Defense:</strong> Claiming you consented to communications (document objections)</li>
                    <li>• <strong>Statute of Limitations:</strong> Claiming too much time passed (one-year limit)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="border-t border-neutral-200 pt-12 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-8">Related Consumer Protection Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/debt-collector-harassment-rights-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Debt Collector Harassment: Know Your Rights and Remedies
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Complete guide to stopping debt collector harassment and getting compensation.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/debt-collection-laws-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Debt Collection Laws: Know Your Rights
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Overview of all debt collection laws protecting Orange County residents.
                  </p>
                </Link>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-black text-white p-8 text-center"
            >
              <h2 className="text-2xl font-light mb-4">
                Enforce Your FDCPA Rights
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Don't let debt collectors violate federal law. Get expert help enforcing your FDCPA rights and potentially recovering damages for illegal collection practices.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get FDCPA Help
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <div id="consultation">
        <ConsultationForm />
      </div>
    </div>
  );
}