import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Shield, Phone, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtCollectorHarassmentRightsOrangeCounty() {
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
            Orange County Debt Collector Harassment:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Know Your Rights and Remedies</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>13 min read</span>
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
              Orange County residents facing debt collection have strong legal protections against harassment and abusive tactics. Understanding your rights under federal and California state law can stop illegal collection practices and potentially provide monetary compensation for violations.
            </div>

            {/* Legal Protections Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Legal Protections for Orange County Residents
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Federal Protections</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Fair Debt Collection Practices Act (FDCPA):</strong> Federal law prohibiting abusive practices</li>
                    <li>• <strong>Fair Credit Reporting Act (FCRA):</strong> Protects credit report accuracy</li>
                    <li>• <strong>Telephone Consumer Protection Act (TCPA):</strong> Limits robocalls and texts</li>
                    <li>• <strong>Consumer Financial Protection Bureau:</strong> Federal oversight and complaint process</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">California State Protections</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Rosenthal Fair Debt Collection Practices Act:</strong> Broader than federal FDCPA</li>
                    <li>• <strong>California Consumer Privacy Act:</strong> Protects personal information</li>
                    <li>• <strong>Unruh Civil Rights Act:</strong> Anti-discrimination protections</li>
                    <li>• <strong>California Department of Financial Protection:</strong> State-level oversight</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-blue-200">
                <h4 className="font-semibold text-black mb-2">Orange County Advantage</h4>
                <p className="text-sm text-neutral-700">
                  California's Rosenthal Act provides stronger protections than federal law, applying to original creditors and covering more types of harassment. Orange County residents have access to both federal and state remedies.
                </p>
              </div>
            </motion.div>

            {/* Prohibited Collection Practices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                Prohibited Debt Collection Practices
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Communication Harassment</h3>
                  <p className="text-neutral-700 mb-3">
                    Collectors cannot harass Orange County residents through excessive or abusive communication:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Excessive Calls:</strong> More than 7 calls per week to any phone number</li>
                    <li>• <strong>Early/Late Calls:</strong> Before 8 AM or after 9 PM (California time)</li>
                    <li>• <strong>Workplace Calls:</strong> After being told employer prohibits such calls</li>
                    <li>• <strong>Third Party Contact:</strong> Discussing debt with family, friends, or neighbors</li>
                    <li>• <strong>Abusive Language:</strong> Profanity, threats, or intimidating language</li>
                    <li>• <strong>False Threats:</strong> Claiming legal action they won't take</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Deceptive and False Practices</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Identity Deception</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Claiming to be attorneys when they're not</li>
                        <li>• Impersonating government officials</li>
                        <li>• Using fake law firm names</li>
                        <li>• Misrepresenting company affiliation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Financial Misrepresentation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Inflating debt amounts with fake fees</li>
                        <li>• Claiming debt is older/newer than it is</li>
                        <li>• Misrepresenting payment terms</li>
                        <li>• False credit report threats</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Unfair Collection Practices</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Public Embarrassment:</strong> Attempting to publicly shame debtors</li>
                    <li>• <strong>Postcard Communications:</strong> Sending debt information on postcards</li>
                    <li>• <strong>Deposit Threats:</strong> Threatening to deposit post-dated checks early</li>
                    <li>• <strong>Property Threats:</strong> Threatening to seize property they cannot legally take</li>
                    <li>• <strong>Arrest Threats:</strong> Claiming debtor will be arrested for civil debt</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Call Time and Frequency Rules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Call Time and Frequency Restrictions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">California Call Time Rules</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County residents are protected by specific call timing rules:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Permitted Hours</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Monday-Saturday: 8 AM to 9 PM</li>
                        <li>• Sunday: 1 PM to 5 PM</li>
                        <li>• Based on debtor's time zone</li>
                        <li>• Holidays generally prohibited</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Frequency Limits</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Maximum 7 calls per week</li>
                        <li>• 7-day period is rolling calendar</li>
                        <li>• Includes all phone numbers</li>
                        <li>• Text messages count as calls</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Workplace Contact Rules</h3>
                  <p className="text-neutral-700 mb-3">
                    Special protections for Orange County workers:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Cannot call workplace if told employer prohibits such calls</li>
                    <li>• Cannot contact employer about debt unless court-ordered</li>
                    <li>• Must stop calling work immediately when requested</li>
                    <li>• Cannot threaten to contact employer</li>
                    <li>• Cannot leave detailed voicemails at work</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Third Party Contact Restrictions</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Who Collectors Can Contact</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Your attorney (if you have one)</li>
                        <li>• Your spouse (limited circumstances)</li>
                        <li>• Credit bureaus for reporting</li>
                        <li>• Original creditor</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Prohibited Third Party Contacts</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Family members (except spouse)</li>
                        <li>• Friends and neighbors</li>
                        <li>• Employers or coworkers</li>
                        <li>• Children or relatives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Debt Validation Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Debt Validation Rights
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">30-Day Validation Period</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County residents have 30 days from first contact to request debt validation:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Initial Notice Required:</strong> Collector must provide debt information within 5 days</li>
                    <li>• <strong>30-Day Window:</strong> You have 30 days to dispute or request validation</li>
                    <li>• <strong>Collection Must Cease:</strong> No collection activity until validation provided</li>
                    <li>• <strong>Written Request:</strong> Validation request should be in writing</li>
                    <li>• <strong>Certified Mail:</strong> Use certified mail for proof of delivery</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Required Validation Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Collector Must Provide</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Original creditor name</li>
                        <li>• Amount of debt claimed</li>
                        <li>• Proof of assignment or ownership</li>
                        <li>• Account statements or records</li>
                        <li>• Chain of title documentation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Your Rights If Invalid</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Collector must stop collection efforts</li>
                        <li>• Cannot report to credit bureaus</li>
                        <li>• Cannot file lawsuit</li>
                        <li>• Must remove any negative reporting</li>
                        <li>• May be liable for FDCPA violations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Sample Debt Validation Letter</h3>
                  <div className="bg-white border border-yellow-200 p-4">
                    <p className="text-sm text-neutral-700 italic">
                      "[Date]<br/><br/>
                      [Collector Name and Address]<br/><br/>
                      RE: Account Number [if known]<br/><br/>
                      This letter is sent in response to your notice dated [date]. This is NOT a refusal to pay, but a notice that your claim is disputed.<br/><br/>
                      Under the Fair Debt Collection Practices Act, I have the right to request validation of the debt you claim I owe. I am requesting proof that I am indeed the party you are asking to pay this debt, and there is some contractual obligation which is binding on me to pay this debt.<br/><br/>
                      Please provide documentation showing:<br/>
                      1. Original creditor name and account information<br/>
                      2. Proof this debt has been assigned to you<br/>
                      3. Verification of the debt amount<br/><br/>
                      I also request that you cease all collection activities until this debt has been validated.<br/><br/>
                      [Your Name and Address]"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orange County Legal Remedies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibent text-black mb-6">Legal Remedies for Orange County Residents</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Monetary Damages Available</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Federal FDCPA Damages</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Up to $1,000 statutory damages</li>
                        <li>• Actual damages (lost wages, medical bills)</li>
                        <li>• Attorney fees and costs</li>
                        <li>• Additional punitive damages possible</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">California Rosenthal Act</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Up to $1,000 per violation</li>
                        <li>• Actual damages proven</li>
                        <li>• Attorney fees recovery</li>
                        <li>• Enhanced damages for willful violations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Filing Complaints and Lawsuits</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County residents have multiple options for legal action:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Consumer Financial Protection Bureau:</strong> Federal complaint system</li>
                    <li>• <strong>California Department of Financial Protection:</strong> State complaint process</li>
                    <li>• <strong>Orange County Superior Court:</strong> Small claims or civil court</li>
                    <li>• <strong>Federal Court:</strong> For FDCPA violations</li>
                    <li>• <strong>Attorney General:</strong> California AG consumer protection</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Orange County Legal Resources</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Free Legal Aid</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Legal Aid Society of Orange County</li>
                        <li>• Orange County Bar Association</li>
                        <li>• Public Law Center</li>
                        <li>• UCI School of Law Clinic</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Consumer Attorney Referrals</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• National Association of Consumer Advocates</li>
                        <li>• California State Bar Referral Service</li>
                        <li>• Orange County Trial Lawyers Association</li>
                        <li>• Consumer Attorneys of California</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Documentation and Evidence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Documenting Harassment for Legal Action</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Essential Documentation</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Call Logs:</strong> Date, time, duration, caller ID, content summary</li>
                    <li>• <strong>Voice Recordings:</strong> If legal in California (two-party consent required)</li>
                    <li>• <strong>Written Communications:</strong> Letters, emails, text messages</li>
                    <li>• <strong>Witness Statements:</strong> Family members who heard calls</li>
                    <li>• <strong>Medical Records:</strong> If harassment caused health issues</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Call Documentation Template</h3>
                  <div className="bg-neutral-50 border border-neutral-200 p-4 text-sm">
                    <p className="font-semibold mb-2">Date: ___________</p>
                    <p className="font-semibold mb-2">Time: ___________</p>
                    <p className="font-semibold mb-2">Caller: ___________</p>
                    <p className="font-semibold mb-2">Company: ___________</p>
                    <p className="font-semibold mb-2">Phone Number: ___________</p>
                    <p className="font-semibold mb-2">Content Summary:</p>
                    <p className="text-neutral-600">_________________</p>
                    <p className="font-semibold mb-2">Violations Noted:</p>
                    <p className="text-neutral-600">_________________</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stopping Collection Harassment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">How to Stop Collection Harassment</h2>
              
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Cease and Desist Letter</h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County residents can stop most collection calls with a cease and desist letter:
                  </p>
                  <div className="bg-white border border-orange-200 p-4">
                    <h4 className="font-semibold text-black mb-2">Sample Cease and Desist Language</h4>
                    <p className="text-sm text-neutral-700 italic">
                      "This letter is to notify you that you are hereby directed to CEASE AND DESIST all telephone communications with me regarding the alleged debt referenced above. This includes calls to my home, cell phone, and place of employment. You are also directed to cease and desist from contacting any third parties regarding this alleged debt. Your compliance with this request will be expected, and your cooperation would be appreciated. Please govern yourselves accordingly."
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Immediate Protection Steps</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Block Numbers:</strong> Use phone carrier blocking services</li>
                    <li>• <strong>Screen Calls:</strong> Let unknown numbers go to voicemail</li>
                    <li>• <strong>Report Violations:</strong> File complaints immediately</li>
                    <li>• <strong>Seek Legal Help:</strong> Contact consumer attorney if harassment continues</li>
                    <li>• <strong>Document Everything:</strong> Keep detailed records of all violations</li>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Consumer Rights Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/fdcpa-consumer-protection-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Fair Debt Collection Practices Act: Orange County Consumer Protection
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Understanding FDCPA protections and how to use them effectively.
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
                    Complete guide to debt collection regulations in Orange County.
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
                Stop Debt Collector Harassment Now
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Don't tolerate illegal debt collection practices. Get immediate help stopping harassment and learn about your rights to compensation under federal and California law.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Legal Protection Help
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