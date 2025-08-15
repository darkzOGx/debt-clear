import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, GraduationCap, BookOpen, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrangeCountyStudentLoanForgiveness2025() {
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
              STUDENT LOAN RELIEF
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Orange County Student Loan Forgiveness:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">2025 Relief Programs</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>22 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VegaX Education Team</span>
            </div>
          </div>

          <p className="text-xl text-neutral-700 leading-relaxed font-light">
            Complete guide to student loan forgiveness and relief programs for Orange County residents, 
            including PSLF updates, income-driven repayment plans, and California-specific assistance programs.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Student Debt Crisis</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County residents carry over $8.2 billion in student loan debt, with 423,000 borrowers 
              averaging $34,000 in loans. High living costs and expensive California education create unique 
              challenges requiring comprehensive relief strategies.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Orange County Student Loan Statistics</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-mono text-blue-800 mb-2">423K</div>
                  <div className="text-sm text-blue-700">OC Student Loan Borrowers</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-blue-800 mb-2">$34K</div>
                  <div className="text-sm text-blue-700">Average Debt Per Borrower</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-blue-800 mb-2">$8.2B</div>
                  <div className="text-sm text-blue-700">Total Student Debt in OC</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Federal Student Loan Forgiveness Programs</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Multiple federal programs provide student loan forgiveness for Orange County residents 
              working in qualifying public service, education, and healthcare roles.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border border-green-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Public Service Loan Forgiveness (PSLF)</h3>
                </div>
                <div className="space-y-3 text-sm text-green-700">
                  <p>• 100% forgiveness after 120 payments</p>
                  <p>• Government and non-profit employment</p>
                  <p>• Direct Loans only</p>
                  <p>• Income-driven repayment plans required</p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-800">Teacher Loan Forgiveness</h3>
                </div>
                <div className="space-y-3 text-sm text-purple-700">
                  <p>• Up to $17,500 forgiveness</p>
                  <p>• 5 years in low-income schools</p>
                  <p>• Math, science, special education priority</p>
                  <p>• Cannot combine with PSLF</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Public Service Employers</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County offers numerous PSLF-qualifying employment opportunities across government 
              agencies, school districts, and non-profit organizations.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-6">PSLF-Qualifying OC Employers</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-black mb-4">Government Agencies</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>• Orange County Government</p>
                    <p>• Orange County Sheriff's Department</p>
                    <p>• Orange County Fire Authority</p>
                    <p>• Orange County Social Services</p>
                    <p>• Orange County Health Care Agency</p>
                    <p>• Orange County Public Works</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-4">School Districts</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>• Santa Ana Unified School District</p>
                    <p>• Irvine Unified School District</p>
                    <p>• Anaheim Union High School District</p>
                    <p>• Huntington Beach Union High</p>
                    <p>• Capistrano Unified School District</p>
                    <p>• Orange Unified School District</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-4">Healthcare Systems</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>• UC Irvine Health</p>
                    <p>• Children's Hospital Orange County</p>
                    <p>• Orange County Health Care Agency</p>
                    <p>• Community Health Centers</p>
                    <p>• Federally Qualified Health Centers</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-4">Non-Profit Organizations</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>• United Way of Orange County</p>
                    <p>• Orange County Community Foundation</p>
                    <p>• Legal Aid Society of Orange County</p>
                    <p>• Families Forward</p>
                    <p>• Second Harvest Food Bank</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Income-Driven Repayment Plans</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Income-driven repayment plans reduce monthly payments based on income and family size, 
              with forgiveness after 20-25 years of qualifying payments.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="border border-neutral-200 p-4 text-left font-semibold">Plan Type</th>
                    <th className="border border-neutral-200 p-4 text-center font-semibold">Payment Amount</th>
                    <th className="border border-neutral-200 p-4 text-center font-semibold">Forgiveness</th>
                    <th className="border border-neutral-200 p-4 text-center font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-200 p-4 font-medium">SAVE Plan</td>
                    <td className="border border-neutral-200 p-4 text-center">5% of discretionary income</td>
                    <td className="border border-neutral-200 p-4 text-center">20-25 years</td>
                    <td className="border border-neutral-200 p-4 text-center">Most borrowers</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-200 p-4 font-medium">PAYE</td>
                    <td className="border border-neutral-200 p-4 text-center">10% of discretionary income</td>
                    <td className="border border-neutral-200 p-4 text-center">20 years</td>
                    <td className="border border-neutral-200 p-4 text-center">New borrowers</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 p-4 font-medium">IBR</td>
                    <td className="border border-neutral-200 p-4 text-center">10-15% of discretionary income</td>
                    <td className="border border-neutral-200 p-4 text-center">20-25 years</td>
                    <td className="border border-neutral-200 p-4 text-center">All eligible borrowers</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-200 p-4 font-medium">ICR</td>
                    <td className="border border-neutral-200 p-4 text-center">20% of discretionary income</td>
                    <td className="border border-neutral-200 p-4 text-center">25 years</td>
                    <td className="border border-neutral-200 p-4 text-center">Parent PLUS borrowers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">California-Specific Student Loan Programs</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              California offers additional student loan relief programs for residents working in high-need 
              professions and underserved communities throughout Orange County.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">California State Loan Repayment Program (SLRP)</h4>
                <p className="text-sm text-neutral-600 mb-2">
                  Healthcare professionals in underserved Orange County areas can receive up to $50,000 
                  in loan repayment assistance for 2-year service commitments.
                </p>
                <div className="text-xs font-mono text-neutral-500">
                  Eligible: Primary care, mental health, dental professionals
                </div>
              </div>
              
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">California Teachers Association Loan Forgiveness</h4>
                <p className="text-sm text-neutral-600 mb-2">
                  Teachers in high-need Orange County schools may qualify for additional state-funded 
                  loan forgiveness beyond federal programs.
                </p>
                <div className="text-xs font-mono text-neutral-500">
                  Up to $19,000 for math, science, special education teachers
                </div>
              </div>
              
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">Golden State Teacher Grant Program</h4>
                <p className="text-sm text-neutral-600 mb-2">
                  New teachers in Orange County high-need schools can receive grants that convert to 
                  loan forgiveness with 4-year service commitments.
                </p>
                <div className="text-xs font-mono text-neutral-500">
                  Up to $20,000 per year for qualified educators
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Student Loan Success Stories</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Real Orange County residents have successfully navigated student loan forgiveness programs, 
              achieving significant debt relief through strategic planning and program utilization.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">Irvine Public Defender - $89K PSLF Forgiveness</h4>
                <p className="text-sm text-neutral-600 mb-2">
                  Law school graduate working for Orange County Public Defender's Office achieved 
                  complete loan forgiveness through PSLF after 10 years of service.
                </p>
                <div className="text-xs font-mono text-neutral-500 grid md:grid-cols-2 gap-4">
                  <span>Original debt: $89,000</span>
                  <span>Forgiven: $89,000 (100%)</span>
                </div>
              </div>
              
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">Santa Ana Teacher - Combined Forgiveness Programs</h4>
                <p className="text-sm text-neutral-600 mb-2">
                  Special education teacher utilized Teacher Loan Forgiveness for initial relief, 
                  then switched to PSLF for remaining balance elimination.
                </p>
                <div className="text-xs font-mono text-neutral-500 grid md:grid-cols-2 gap-4">
                  <span>Teacher forgiveness: $17,500</span>
                  <span>PSLF forgiveness: $45,000</span>
                </div>
              </div>
              
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-semibold text-black mb-2">UC Irvine Nurse - Healthcare Loan Repayment</h4>
                <p className="text-sm text-neutral-600 mb-2">
                  Registered nurse working in underserved community clinic received California SLRP 
                  assistance plus PSLF qualification for comprehensive debt relief.
                </p>
                <div className="text-xs font-mono text-neutral-500 grid md:grid-cols-2 gap-4">
                  <span>SLRP assistance: $50,000</span>
                  <span>Remaining PSLF track: $23,000</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Private Student Loan Relief Options</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Private student loans don't qualify for federal forgiveness programs, but Orange County 
              borrowers have alternative relief options including refinancing and settlement.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-amber-50 border border-amber-200 p-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Refinancing Options</h3>
                <div className="space-y-3 text-sm text-amber-700">
                  <p>• Lower interest rates (3.0% - 12.0%)</p>
                  <p>• Extended repayment terms</p>
                  <p>• Single monthly payment</p>
                  <p>• Release of co-signers</p>
                  <p>• Variable or fixed rate options</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4">Settlement Strategies</h3>
                <div className="space-y-3 text-sm text-red-700">
                  <p>• Lump sum settlements (40-60%)</p>
                  <p>• Payment plan settlements</p>
                  <p>• Hardship-based negotiations</p>
                  <p>• Default resolution programs</p>
                  <p>• Rehabilitation options</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Employer Assistance Programs</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Many Orange County employers offer student loan assistance as employee benefits, 
              providing tax-advantaged repayment help up to federal limits.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-6">OC Employers Offering Student Loan Benefits</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-black mb-4">Technology Companies</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>• Blizzard Entertainment: $5,250/year</p>
                    <p>• Edwards Lifesciences: $3,000/year</p>
                    <p>• Broadcom: $2,500/year</p>
                    <p>• Experian: $5,000/year</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-4">Healthcare Organizations</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p>• UC Irvine Health: $5,250/year</p>
                    <p>• Kaiser Permanente: $3,000/year</p>
                    <p>• Providence St. Joseph: $2,500/year</p>
                    <p>• CHOC: $5,000/year</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Student Loan Default Prevention</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County borrowers facing financial hardship should explore default prevention 
              options before missing payments to preserve credit and maintain federal aid eligibility.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Deferment</h4>
                <div className="space-y-2 text-sm text-neutral-600">
                  <p>• Return to school</p>
                  <p>• Unemployment</p>
                  <p>• Economic hardship</p>
                  <p>• Military service</p>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Forbearance</h4>
                <div className="space-y-2 text-sm text-neutral-600">
                  <p>• Financial difficulties</p>
                  <p>• Medical expenses</p>
                  <p>• Job loss</p>
                  <p>• Temporary hardship</p>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Plan Changes</h4>
                <div className="space-y-2 text-sm text-neutral-600">
                  <p>• Income-driven repayment</p>
                  <p>• Extended repayment</p>
                  <p>• Graduated repayment</p>
                  <p>• Consolidation</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Tax Implications of Student Loan Forgiveness</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Understanding tax implications helps Orange County borrowers plan for potential tax 
              liabilities from loan forgiveness and take advantage of available deductions.
            </p>

            <div className="bg-green-50 border border-green-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Current Tax Treatment (2025)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Tax-Free Forgiveness</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Public Service Loan Forgiveness</li>
                    <li>• Teacher Loan Forgiveness</li>
                    <li>• Income-driven plan forgiveness</li>
                    <li>• Disability discharge</li>
                    <li>• Death discharge</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Available Deductions</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Student loan interest: $2,500/year</li>
                    <li>• Tuition and fees deduction</li>
                    <li>• American Opportunity Credit</li>
                    <li>• Lifetime Learning Credit</li>
                    <li>• Employer assistance exclusion: $5,250</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Student Loan Optimization Strategy</h3>
              <p className="mb-6 text-neutral-300">
                Maximize your student loan forgiveness potential with our comprehensive analysis 
                tailored to Orange County employment opportunities and California programs.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Strategy Development:</h4>
                  <ul className="space-y-1 text-neutral-300">
                    <li>• PSLF eligibility assessment</li>
                    <li>• Income-driven plan optimization</li>
                    <li>• California program qualification</li>
                    <li>• Employer benefit coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ongoing Support:</h4>
                  <ul className="space-y-1 text-neutral-300">
                    <li>• Annual certification assistance</li>
                    <li>• Employment verification guidance</li>
                    <li>• Payment plan adjustments</li>
                    <li>• Tax planning coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Student loan forgiveness isn't just a possibility—it's a structured path to financial freedom 
              for Orange County residents. With proper planning and strategic program utilization, you can 
              significantly reduce or eliminate your student debt while building a rewarding career in 
              public service, education, or healthcare.
            </p>

          </div>
        </div>
      </article>
    </div>
  );
}