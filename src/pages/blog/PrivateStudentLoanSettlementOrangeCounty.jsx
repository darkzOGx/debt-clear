import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, GraduationCap, DollarSign, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function PrivateStudentLoanSettlementOrangeCounty() {
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
              STUDENT LOANS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Private Student Loan Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Graduate Options</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Student Loan Specialist</span>
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
              Orange County graduates struggling with private student loan debt have settlement options that federal loan borrowers don't. Unlike federal student loans, private student loans can be negotiated and settled for less than the full balance, providing crucial debt relief for graduates facing financial hardship.
            </div>

            {/* Private vs Federal Loans */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6" />
                Private vs. Federal Student Loans: Key Differences
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Factor</th>
                      <th className="border border-neutral-300 p-4 text-left">Federal Student Loans</th>
                      <th className="border border-neutral-300 p-4 text-left">Private Student Loans</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Settlement Options</td>
                      <td className="border border-neutral-300 p-4">Very limited, mostly for defaults</td>
                      <td className="border border-neutral-300 p-4">Negotiable, especially in hardship</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Forgiveness Programs</td>
                      <td className="border border-neutral-300 p-4">PSLF, IDR forgiveness, others</td>
                      <td className="border border-neutral-300 p-4">None (except death/disability)</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Bankruptcy Discharge</td>
                      <td className="border border-neutral-300 p-4">Extremely difficult</td>
                      <td className="border border-neutral-300 p-4">Slightly easier (undue hardship)</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Collection Powers</td>
                      <td className="border border-neutral-300 p-4">Wage garnishment, tax refund offset</td>
                      <td className="border border-neutral-300 p-4">Must sue first, state law governs</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Statute of Limitations</td>
                      <td className="border border-neutral-300 p-4">None</td>
                      <td className="border border-neutral-300 p-4">Varies by state (CA: 4 years)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Orange County Graduate Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Graduate Student Loan Challenges</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    High Cost of Living Impact
                  </h3>
                  <p className="text-neutral-700 mb-3">
                    Orange County's expensive lifestyle makes student loan repayment particularly challenging:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Housing Costs:</strong> Average rent $2,800/month limits debt payment capacity</li>
                    <li>• <strong>Transportation:</strong> High gas prices and car insurance costs</li>
                    <li>• <strong>Entry-Level Wages:</strong> Often insufficient for both living costs and loan payments</li>
                    <li>• <strong>Competition:</strong> Job market competition keeps starting salaries down</li>
                    <li>• <strong>Graduate School Debt:</strong> UCI, Chapman, and other local schools create high debt loads</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Common Private Student Loan Scenarios</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Undergraduate Debt</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• UC system students with private loans</li>
                        <li>• Chapman University high tuition debt</li>
                        <li>• Cal State Fullerton supplemental borrowing</li>
                        <li>• Private college attendance costs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Graduate School Debt</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Law school debt (Chapman, Western State)</li>
                        <li>• Medical school private loan gaps</li>
                        <li>• MBA program financing</li>
                        <li>• Graduate PLUS loan limits exceeded</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Settlement Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Private Student Loan Settlement Strategies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">When Settlement Makes Sense</h3>
                  <p className="text-neutral-700 mb-3">
                    Private student loan settlement works best in specific circumstances:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Financial Hardship:</strong> Job loss, medical issues, or income reduction</li>
                    <li>• <strong>Loan Default:</strong> Already in default with damaged credit</li>
                    <li>• <strong>High Interest Rates:</strong> Older loans with rates exceeding 10-15%</li>
                    <li>• <strong>No Cosigner Relief:</strong> Unable to remove cosigner from loan</li>
                    <li>• <strong>Bankruptcy Consideration:</strong> Exploring all alternatives first</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Settlement Process Steps</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Phase 1: Preparation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Document financial hardship thoroughly</li>
                        <li>• Gather all loan documentation</li>
                        <li>• Stop payments to create leverage</li>
                        <li>• Build settlement fund (20-50% of balance)</li>
                        <li>• Prepare hardship letter and evidence</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Phase 2: Negotiation</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Contact lender after 90+ days past due</li>
                        <li>• Start with low settlement offer (20-30%)</li>
                        <li>• Emphasize financial hardship and inability to pay</li>
                        <li>• Request deletion from credit reports</li>
                        <li>• Get settlement agreement in writing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Orange County Settlement Rates</h3>
                  <p className="text-neutral-700 mb-3">
                    Typical settlement ranges for Orange County graduates:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Recent Defaults (6-12 months):</strong> 40-60% of balance</li>
                    <li>• <strong>Older Defaults (1-3 years):</strong> 25-45% of balance</li>
                    <li>• <strong>Charged-Off Loans:</strong> 15-35% of balance</li>
                    <li>• <strong>With Hardship Documentation:</strong> Often 10-20% lower</li>
                    <li>• <strong>Lump Sum Offers:</strong> Better rates than payment plans</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Major Private Lenders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Major Private Student Loan Lenders and Settlement Approach</h2>
              
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Sallie Mae / Navient</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Settlement Characteristics</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Generally willing to settle in hardship cases</li>
                        <li>• Prefers lump-sum payments</li>
                        <li>• May offer payment plans for settlements</li>
                        <li>• Usually requires 90+ days past due</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Negotiation Tips</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Emphasize income reduction or job loss</li>
                        <li>• Request supervisor if initial offer rejected</li>
                        <li>• Document all communications</li>
                        <li>• Ask for credit report deletion</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Wells Fargo / First Union</h3>
                  <p className="text-neutral-700 mb-3">
                    Wells Fargo exited student lending but services existing loans:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• Settlement department available for hardship cases</li>
                    <li>• Typical settlement range: 30-50% of balance</li>
                    <li>• May require detailed financial documentation</li>
                    <li>• Consider offers for forbearance before settlement</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Discover Student Loans</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Approach:</strong> Conservative on settlements, prefers payment plans</li>
                    <li>• <strong>Settlement Range:</strong> 40-70% typical offers</li>
                    <li>• <strong>Strategy:</strong> Emphasize long-term inability to pay full balance</li>
                    <li>• <strong>Documentation:</strong> Requires extensive hardship proof</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Cosigner Considerations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Cosigner Impact and Protection Strategies
              </h2>
              
              <div className="bg-red-50 border border-red-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Cosigner Complications</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Cosigner Risks</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Equally liable for full loan balance</li>
                      <li>• Credit damage affects both borrower and cosigner</li>
                      <li>• Lender can pursue either party for collection</li>
                      <li>• Settlement affects both credit reports</li>
                      <li>• Cosigner release often unavailable</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Protection Strategies</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Include cosigner in settlement negotiations</li>
                      <li>• Document cosigner's financial hardship too</li>
                      <li>• Request credit deletion for both parties</li>
                      <li>• Consider cosigner's ability to pay separately</li>
                      <li>• Explore cosigner bankruptcy if applicable</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-red-200">
                  <h4 className="font-semibold text-black mb-2">Orange County Family Dynamics</h4>
                  <p className="text-sm text-neutral-700">
                    Many Orange County families cosigned student loans to help children attend expensive local universities. Settlement negotiations should consider the family's overall financial situation and ability to contribute to settlement funds.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Alternative Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Alternatives to Settlement</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Refinancing Options</h3>
                  <p className="text-neutral-700 mb-3">
                    Before pursuing settlement, Orange County graduates should explore refinancing:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>SoFi, Earnest, CommonBond:</strong> Major refinancing lenders</li>
                    <li>• <strong>Credit Score Requirements:</strong> Usually 650+ for best rates</li>
                    <li>• <strong>Income Requirements:</strong> Stable employment history needed</li>
                    <li>• <strong>Rate Reduction:</strong> Can significantly lower monthly payments</li>
                    <li>• <strong>Cosigner Release:</strong> Some lenders offer this option</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Forbearance and Modification</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Temporary Forbearance:</strong> 6-12 months of reduced/paused payments</li>
                    <li>• <strong>Interest Rate Reduction:</strong> Permanent rate decrease for hardship</li>
                    <li>• <strong>Extended Repayment:</strong> Longer term to reduce monthly payment</li>
                    <li>• <strong>Graduation Repayment:</strong> Lower initial payments that increase over time</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Bankruptcy Considerations</h3>
                  <p className="text-neutral-700 mb-3">
                    Bankruptcy discharge of student loans requires proving "undue hardship":
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• <strong>Brunner Test:</strong> Can't maintain minimal standard of living</li>
                    <li>• <strong>Persistence:</strong> Hardship likely to persist for significant period</li>
                    <li>• <strong>Good Faith:</strong> Made good faith effort to repay loans</li>
                    <li>• <strong>Orange County Costs:</strong> High living costs may support hardship argument</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Tax Implications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Tax Implications of Student Loan Settlement</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Taxable Income from Forgiven Debt</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">General Rule</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Forgiven debt becomes taxable income</li>
                      <li>• Lender issues Form 1099-C</li>
                      <li>• Taxed at ordinary income rates</li>
                      <li>• Both federal and California tax apply</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Potential Exclusions</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Insolvency exception (Form 982)</li>
                      <li>• Student loan exception (rare)</li>
                      <li>• Qualified educational expenses (limited)</li>
                      <li>• Tax planning strategies available</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-yellow-200">
                  <h4 className="font-semibold text-black mb-2">Orange County Tax Planning</h4>
                  <p className="text-sm text-neutral-700">
                    Given California's high tax rates, Orange County graduates should plan for potential tax liability from settlement. Consider spreading settlements across tax years or documenting insolvency to minimize tax impact.
                  </p>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Student Loan Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/student-loan-debt-relief-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Student Loan Debt Relief in Orange County
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Comprehensive guide to student loan relief options for Orange County residents.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/orange-county-student-loan-forgiveness-2025"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Student Loan Forgiveness 2025
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Latest student loan forgiveness programs and relief options for Orange County graduates.
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
                Struggling with Private Student Loan Debt?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get expert guidance on private student loan settlement strategies tailored for Orange County graduates. Don't let student debt control your financial future.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Student Loan Help
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