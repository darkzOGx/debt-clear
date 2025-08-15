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
            <div className="space-y-6 mb-8">
              <div className="bg-neutral-50 p-8 border border-neutral-200">
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
              
              <div className="bg-blue-50 border border-blue-200 p-6">
                <h4 className="font-semibold text-black mb-3">Income-Based Repayment (IBR)</h4>
                <p className="text-sm text-neutral-700 mb-3">Payments capped at 10-15% of discretionary income, depending on when you first borrowed.</p>
                <div className="grid md:grid-cols-2 gap-4 text-xs text-neutral-600">
                  <div>
                    <p className="font-semibold mb-1">New Borrowers (after 7/1/2014):</p>
                    <ul className="space-y-1">
                      <li>• 10% of discretionary income</li>
                      <li>• 20-year forgiveness</li>
                      <li>• No payment if income too low</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Existing Borrowers:</p>
                    <ul className="space-y-1">
                      <li>• 15% of discretionary income</li>
                      <li>• 25-year forgiveness</li>
                      <li>• Partial financial hardship required</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6">
                <h4 className="font-semibold text-black mb-3">Pay As You Earn (PAYE)</h4>
                <p className="text-sm text-neutral-700 mb-3">Generally the most favorable terms for eligible borrowers, with 10% payment cap and 20-year forgiveness.</p>
                <div className="text-xs text-neutral-600">
                  <p className="mb-2"><strong>Eligibility Requirements:</strong></p>
                  <ul className="space-y-1">
                    <li>• Must be new borrower as of 10/1/2007</li>
                    <li>• Must have received disbursement on or after 10/1/2011</li>
                    <li>• Must demonstrate partial financial hardship</li>
                    <li>• Payment never exceeds standard 10-year amount</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6">
                <h4 className="font-semibold text-black mb-3">Income-Contingent Repayment (ICR)</h4>
                <p className="text-sm text-neutral-700 mb-3">Available for all federal loan types including Parent PLUS consolidation loans.</p>
                <div class="text-xs text-neutral-600">
                  <p className="mb-2"><strong>Payment Calculation:</strong></p>
                  <p>Lesser of 20% of discretionary income or fixed 12-year payment adjusted for income. 25-year forgiveness period.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Higher Education Landscape</h2>
            <div className="bg-orange-50 border border-orange-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">Local Universities and Debt Burden</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-black mb-2">UC Irvine</h4>
                  <div className="space-y-1 text-neutral-700">
                    <div className="flex justify-between"><span>Avg. debt (graduates):</span><span className="font-mono">$19,200</span></div>
                    <div className="flex justify-between"><span>In-state tuition:</span><span className="font-mono">$13,800</span></div>
                    <div className="flex justify-between"><span>Out-of-state:</span><span className="font-mono">$43,500</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Chapman University</h4>
                  <div className="space-y-1 text-neutral-700">
                    <div className="flex justify-between"><span>Avg. debt (graduates):</span><span className="font-mono">$31,800</span></div>
                    <div className="flex justify-between"><span>Annual tuition:</span><span className="font-mono">$58,000</span></div>
                    <div className="flex justify-between"><span>Room & board:</span><span className="font-mono">$17,500</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Cal State Fullerton</h4>
                  <div className="space-y-1 text-neutral-700">
                    <div className="flex justify-between"><span>Avg. debt (graduates):</span><span className="font-mono">$16,400</span></div>
                    <div className="flex justify-between"><span>In-state tuition:</span><span className="font-mono">$6,900</span></div>
                    <div className="flex justify-between"><span>Out-of-state:</span><span className="font-mono">$18,900</span></div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Discharge and Cancellation Options</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-red-50 border border-red-200 p-6">
                <h4 className="font-semibold text-black mb-3">Total and Permanent Disability Discharge</h4>
                <p className="text-sm text-neutral-700 mb-3">Federal student loans can be discharged if you're totally and permanently disabled.</p>
                <div className="grid md:grid-cols-2 gap-4 text-xs text-neutral-600">
                  <div>
                    <p className="font-semibold mb-1">Eligibility Documentation:</p>
                    <ul className="space-y-1">
                      <li>• Veterans Affairs disability rating (100%)</li>
                      <li>• Social Security disability determination</li>
                      <li>• Physician certification</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Orange County Resources:</p>
                    <ul className="space-y-1">
                      <li>• VA Long Beach Medical Center</li>
                      <li>• Orange County Social Services</li>
                      <li>• UCI Medical Center disability services</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 p-6">
                <h4 className="font-semibold text-black mb-3">Closed School Discharge</h4>
                <p className="text-sm text-neutral-700 mb-3">Available if your school closed while you were enrolled or within 180 days of withdrawal.</p>
                <div className="text-xs text-neutral-600">
                  <p className="mb-2"><strong>Orange County Cases:</strong></p>
                  <p>Several for-profit institutions in Orange County have closed, including branches of Corinthian Colleges and ITT Technical Institute. Students from these schools may be eligible for discharge.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h4 className="font-semibold text-black mb-3">Borrower Defense to Repayment</h4>
                <p className="text-sm text-neutral-700 mb-3">Discharge available if your school misled you or violated state laws related to your loans or education.</p>
                <div className="text-xs text-neutral-600">
                  <p className="mb-2"><strong>Common Grounds:</strong></p>
                  <ul className="space-y-1">
                    <li>• Fraudulent recruiting practices</li>
                    <li>• Misrepresentation of job placement rates</li>
                    <li>• False advertising about accreditation</li>
                    <li>• Violation of state consumer protection laws</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-6">
                <h4 className="font-semibold text-black mb-3">False Certification Discharge</h4>
                <p className="text-sm text-neutral-700 mb-3">Available if your school falsely certified your eligibility for the loan.</p>
                <div className="text-xs text-neutral-600">
                  <p className="mb-2"><strong>Scenarios Include:</strong></p>
                  <ul className="space-y-1">
                    <li>• Identity theft or forgery</li>
                    <li>• Lack of high school diploma/GED when required</li>
                    <li>• Disqualifying status (e.g., previous degree)</li>
                    <li>• Failure to meet minimum age requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Employment-Based Forgiveness</h2>
            <div className="bg-emerald-50 border border-emerald-200 p-8 mb-8">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">Public Service Loan Forgiveness Employers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-black mb-3">Government Employers</h4>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• Orange County government departments</li>
                    <li>• City governments (Irvine, Santa Ana, Anaheim, etc.)</li>
                    <li>• Orange County Superior Court</li>
                    <li>• OC Public Works and Transportation</li>
                    <li>• OC Health Care Agency</li>
                    <li>• Orange County Fire Authority</li>
                    <li>• Orange County Sheriff's Department</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-3">Qualifying Nonprofits & Organizations</h4>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• UCI Health system</li>
                    <li>• Children's Hospital of Orange County (CHOC)</li>
                    <li>• Orange County United Way</li>
                    <li>• Boys & Girls Clubs of Orange County</li>
                    <li>• Second Harvest Food Bank of OC</li>
                    <li>• Legal Aid Society of Orange County</li>
                    <li>• Anaheim Union High School District</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">State-Specific California Programs</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-yellow-50 border border-yellow-200 p-6">
                <h4 className="font-semibold text-black mb-3">California State Loan Repayment Program</h4>
                <p className="text-sm text-neutral-700 mb-3">Offers loan repayment assistance for healthcare professionals working in underserved areas.</p>
                <div className="grid md:grid-cols-2 gap-4 text-xs text-neutral-600">
                  <div>
                    <p className="font-semibold mb-1">Eligible Professions:</p>
                    <ul className="space-y-1">
                      <li>• Primary care physicians</li>
                      <li>• Nurse practitioners</li>
                      <li>• Physician assistants</li>
                      <li>• Mental health professionals</li>
                      <li>• Dentists and dental hygienists</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Orange County Sites:</p>
                    <ul className="space-y-1">
                      <li>• Santa Ana community health centers</li>
                      <li>• Anaheim underserved clinics</li>
                      <li>• Rural areas of South OC</li>
                      <li>• Federally Qualified Health Centers</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6">
                <h4 className="font-semibold text-black mb-3">California Teachers Association Programs</h4>
                <p className="text-sm text-neutral-700 mb-3">Various loan forgiveness and assistance programs for teachers in California public schools.</p>
                <div className="text-xs text-neutral-600">
                  <p className="mb-2"><strong>Programs Include:</strong></p>
                  <ul className="space-y-1">
                    <li>• Assumption Program of Loans for Education (APLE)</li>
                    <li>• California Child Development Teacher Loan Forgiveness</li>
                    <li>• Special education teacher incentives</li>
                    <li>• STEM teacher loan forgiveness programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Default Resolution and Rehabilitation</h2>
            <div className="bg-red-50 border border-red-200 p-8 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Getting Out of Default</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-red-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Loan Rehabilitation</h4>
                  <p className="text-sm text-neutral-700 mb-2">Make 9 consecutive, on-time payments to rehabilitate defaulted loans.</p>
                  <div className="text-xs text-neutral-600">
                    <p className="font-semibold mb-1">Benefits:</p>
                    <ul className="space-y-1">
                      <li>• Default removed from credit report</li>
                      <li>• Regain eligibility for federal aid</li>
                      <li>• Access to income-driven repayment</li>
                      <li>• Stop wage garnishment</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white border border-red-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Full Payment</h4>
                  <p className="text-sm text-neutral-700 mb-2">Pay the loan in full to immediately resolve default status.</p>
                  <div className="text-xs text-neutral-600">
                    <p className="font-semibold mb-1">Considerations:</p>
                    <ul className="space-y-1">
                      <li>• Collection fees may apply</li>
                      <li>• Immediate resolution</li>
                      <li>• Credit report still shows default history</li>
                      <li>• Most expensive option</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white border border-red-200 p-4">
                  <h4 className="font-semibold text-black mb-2">Loan Consolidation</h4>
                  <p className="text-sm text-neutral-700 mb-2">Consolidate defaulted loans into a new Direct Consolidation Loan.</p>
                  <div className="text-xs text-neutral-600">
                    <p className="font-semibold mb-1">Requirements:</p>
                    <ul className="space-y-1">
                      <li>• Make 3 consecutive payments, OR</li>
                      <li>• Agree to income-driven repayment</li>
                      <li>• Combines multiple loans</li>
                      <li>• May increase total interest</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Student Loan Resources</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Free Counseling Services</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-black">Federal Student Aid Information Center</h4>
                    <p className="text-neutral-700">1-800-433-3243</p>
                    <p className="text-xs text-neutral-600">Official federal student aid information</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">National Student Loan Data System (NSLDS)</h4>
                    <p className="text-neutral-700">nslds.ed.gov</p>
                    <p className="text-xs text-neutral-600">Official database of federal student aid</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Student Loan Borrower Assistance</h4>
                    <p className="text-neutral-700">studentloanborrowerassistance.org</p>
                    <p className="text-xs text-neutral-600">Free legal information project</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Local Support Organizations</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-black">OC Community Foundation</h4>
                    <p className="text-neutral-700">Scholarship and grant programs</p>
                    <p className="text-xs text-neutral-600">Newport Beach office: (949) 553-4202</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Orange County Department of Education</h4>
                    <p className="text-neutral-700">Financial aid counseling resources</p>
                    <p className="text-xs text-neutral-600">Costa Mesa office: (714) 966-4000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">UCI Financial Aid Office</h4>
                    <p className="text-neutral-700">Student loan counseling and resources</p>
                    <p className="text-xs text-neutral-600">Irvine campus: (949) 824-8262</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Private Student Loan Considerations</h2>
            <div className="bg-amber-50 border border-amber-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">Private Loan Limitations</h3>
              <div className="space-y-4 text-sm text-neutral-700">
                <div>
                  <h4 className="font-semibold text-black mb-2">Limited Relief Options</h4>
                  <p>Private student loans generally don't qualify for federal forgiveness programs or income-driven repayment plans. However, some options exist:</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-black mb-2">Potential Relief Options</h5>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      <li>• Loan modification or forbearance</li>
                      <li>• Refinancing to lower rates</li>
                      <li>• Settlement (rare, usually requires hardship)</li>
                      <li>• Discharge in bankruptcy (extremely difficult)</li>
                      <li>• Death and disability discharge (some lenders)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Orange County Private Loan Lenders</h5>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      <li>• Wells Fargo (major OC presence)</li>
                      <li>• Bank of America</li>
                      <li>• Chase Bank</li>
                      <li>• Discover Student Loans</li>
                      <li>• Sallie Mae</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Student Loan Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Student loan laws and programs change frequently. This information is current as of publication but may not reflect the latest program updates. Federal and state student loan programs have specific eligibility requirements, application deadlines, and service commitments. Individual eligibility varies based on loan type, borrowing history, employment status, and income. Always verify current program requirements with official sources including Federal Student Aid (studentaid.gov), your loan servicer, and program administrators. Consult with qualified student loan counselors, financial aid offices, or attorneys specializing in student loan law before making major decisions about repayment, forgiveness, or discharge applications.</p>
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