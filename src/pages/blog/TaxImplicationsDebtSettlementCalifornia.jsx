import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function TaxImplicationsDebtSettlementCalifornia() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tax Implications of Debt Settlement California | State Tax Guide</title>
        <meta name="description" content="Complete guide to California tax implications of debt settlement. Understand state tax consequences, planning strategies, and compliance requirements." />
        <meta name="keywords" content="tax implications debt settlement California, California debt settlement taxes, state tax consequences debt relief, CA debt settlement tax planning" />
        <meta property="og:title" content="Tax Implications of Debt Settlement California - State Tax Guide" />
        <meta property="og:description" content="Comprehensive guide to California state tax implications of debt settlement with expert planning strategies and compliance guidance." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://debtclear.com/blog/tax-implications-debt-settlement-california" />
      </Helmet>
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Back to Resources</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">TAX PLANNING</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Tax Implications of Debt Settlement<br />
            <span className="font-mono text-3xl lg:text-4xl">in California</span>
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 15, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Tax Planning Team</span></div>
          </div>
          <p className="text-xl text-neutral-700 leading-relaxed font-light">
            Understanding the tax consequences of debt settlement for Orange County residents and how to minimize 
            tax liability when settling credit cards, medical debt, and other obligations.
          </p>
        </div>
      </section>
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Form 1099-C: Cancellation of Debt</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              When you settle debt for less than the full amount owed, the forgiven portion is generally considered taxable income. 
              Creditors must issue Form 1099-C for cancelled debt of $600 or more, which you must report on your tax return.
            </p>
            <div className="bg-amber-50 border border-amber-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-4">Example Tax Calculation</h3>
                  <div className="space-y-2 text-sm text-amber-700">
                    <div className="flex justify-between"><span>Original debt:</span><span className="font-mono">$25,000</span></div>
                    <div className="flex justify-between"><span>Settlement amount:</span><span className="font-mono">$10,000</span></div>
                    <div className="flex justify-between border-t border-amber-300 pt-2"><span>Cancelled debt (taxable):</span><span className="font-mono">$15,000</span></div>
                    <div className="flex justify-between"><span>Tax owed (24% bracket):</span><span className="font-mono">$3,600</span></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">California Tax Considerations</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              California generally follows federal tax rules for debt forgiveness, meaning cancelled debt is taxable 
              at both federal and state levels. Orange County residents face combined tax rates up to 50.3% on high incomes.
            </p>
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Exceptions and Exclusions</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 border border-green-200 p-6">
                <h4 className="font-semibold text-black mb-3">Insolvency Exception</h4>
                <p className="text-sm text-neutral-700 mb-3">If you were insolvent when debt was cancelled, you may exclude some or all forgiven debt from taxable income. Use Form 982 to claim this exclusion.</p>
                <div className="text-xs text-neutral-600">
                  <p className="mb-2"><strong>Calculating Insolvency:</strong></p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-1">Total Debts:</p>
                      <ul className="space-y-1">
                        <li>• Credit cards</li>
                        <li>• Mortgages</li>
                        <li>• Student loans</li>
                        <li>• Other obligations</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Total Assets (Fair Market Value):</p>
                      <ul className="space-y-1">
                        <li>• Real estate</li>
                        <li>• Vehicles</li>
                        <li>• Bank accounts</li>
                        <li>• Investments</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-2">If debts exceed assets, you may be insolvent to that extent.</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-6">
                <h4 className="font-semibold text-black mb-3">Principal Residence Exception</h4>
                <p className="text-sm text-neutral-700 mb-3">Qualified principal residence indebtedness may be excluded up to $2 million for California residents (extended through 2025).</p>
                <div className="text-xs text-neutral-600">
                  <p className="mb-2"><strong>Requirements:</strong></p>
                  <ul className="space-y-1">
                    <li>• Debt used to acquire, build, or substantially improve principal residence</li>
                    <li>• Residence secured the debt</li>
                    <li>• Debt discharged before January 1, 2026</li>
                    <li>• Total qualified debt cannot exceed $2 million ($1 million if married filing separately)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6">
                <h4 className="font-semibold text-black mb-3">Bankruptcy Exception</h4>
                <p className="text-sm text-neutral-700 mb-2">Debt discharged in bankruptcy is not taxable income under Title 11 proceedings.</p>
                <p className="text-xs text-neutral-600">This exclusion is automatic and doesn't require additional forms, but reduces tax attributes (like basis in assets).</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 p-6">
                <h4 className="font-semibold text-black mb-3">Student Loan Forgiveness</h4>
                <p className="text-sm text-neutral-700 mb-2">Certain student loan forgiveness programs are not taxable, including Public Service Loan Forgiveness and Teacher Loan Forgiveness.</p>
                <p className="text-xs text-neutral-600">However, income-driven repayment plan forgiveness after 20-25 years may be taxable.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Tax Planning Strategies</h2>
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">Pre-Settlement Tax Planning</h3>
              <div className="space-y-4">
                <div className="border border-neutral-300 p-4">
                  <h4 className="font-semibold text-black mb-2">Timing Considerations</h4>
                  <p className="text-sm text-neutral-700">Consider settling debts in years with lower income to minimize tax impact. High-earning Orange County professionals should evaluate year-end bonuses and stock option timing.</p>
                </div>
                <div className="border border-neutral-300 p-4">
                  <h4 className="font-semibold text-black mb-2">Documentation Strategy</h4>
                  <p className="text-sm text-neutral-700">Maintain detailed records of financial hardship, asset values, and debt obligations to support insolvency calculations if needed.</p>
                </div>
                <div className="border border-neutral-300 p-4">
                  <h4 className="font-semibold text-black mb-2">Quarterly Estimated Payments</h4>
                  <p className="text-sm text-neutral-700">California residents may need to increase quarterly estimated tax payments to avoid penalties when debt is settled.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Form 1099-C Analysis and Response</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">What Form 1099-C Reports</h3>
                <div className="space-y-3 text-sm text-neutral-700">
                  <div>
                    <p className="font-semibold">Box 1: Date of cancellation</p>
                    <p className="text-xs text-neutral-600">Must be reported in the tax year shown, not when settlement occurred</p>
                  </div>
                  <div>
                    <p className="font-semibold">Box 2: Amount of debt discharged</p>
                    <p className="text-xs text-neutral-600">This becomes taxable income unless an exclusion applies</p>
                  </div>
                  <div>
                    <p className="font-semibold">Box 3: Interest if included in Box 2</p>
                    <p className="text-xs text-neutral-600">Helps determine if penalties and interest were forgiven</p>
                  </div>
                  <div>
                    <p className="font-semibold">Box 4: Fair market value of property</p>
                    <p className="text-xs text-neutral-600">Usually only applies to foreclosures or repossessions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Common 1099-C Errors</h3>
                <div className="space-y-3 text-sm text-neutral-700">
                  <div>
                    <p className="font-semibold">Incorrect cancellation date</p>
                    <p className="text-xs text-neutral-600">May report wrong tax year, requiring amended returns</p>
                  </div>
                  <div>
                    <p className="font-semibold">Wrong debt amount</p>
                    <p className="text-xs text-neutral-600">Should reflect actual forgiven amount, not total debt</p>
                  </div>
                  <div>
                    <p className="font-semibold">Duplicate reporting</p>
                    <p className="text-xs text-neutral-600">Multiple 1099-C forms for same debt from different parties</p>
                  </div>
                  <div>
                    <p className="font-semibold">Missing forms</p>
                    <p className="text-xs text-neutral-600">Still required to report even without 1099-C if debt was forgiven</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Settlement Examples with Tax Impact</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-amber-50 border border-amber-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Orange County Professional - Solvent</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Settlement Details</h4>
                    <div className="space-y-1 text-neutral-700">
                      <div className="flex justify-between"><span>Original debt:</span><span className="font-mono">$45,000</span></div>
                      <div className="flex justify-between"><span>Settlement amount:</span><span className="font-mono">$18,000</span></div>
                      <div className="flex justify-between"><span>Debt forgiven:</span><span className="font-mono">$27,000</span></div>
                      <div className="flex justify-between"><span>Annual income:</span><span className="font-mono">$120,000</span></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Tax Calculation</h4>
                    <div className="space-y-1 text-neutral-700">
                      <div className="flex justify-between"><span>Federal tax (22%):</span><span className="font-mono">$5,940</span></div>
                      <div className="flex justify-between"><span>CA state tax (9.3%):</span><span className="font-mono">$2,511</span></div>
                      <div className="flex justify-between border-t border-amber-300 pt-1"><span>Total tax liability:</span><span className="font-mono">$8,451</span></div>
                      <div className="flex justify-between font-semibold"><span>Net savings:</span><span className="font-mono text-green-600">$18,549</span></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Orange County Resident - Insolvent</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Financial Position</h4>
                    <div className="space-y-1 text-neutral-700">
                      <div className="flex justify-between"><span>Total debts:</span><span className="font-mono">$85,000</span></div>
                      <div className="flex justify-between"><span>Total assets:</span><span className="font-mono">$65,000</span></div>
                      <div className="flex justify-between"><span>Insolvency:</span><span className="font-mono">$20,000</span></div>
                      <div className="flex justify-between"><span>Debt forgiven:</span><span className="font-mono">$15,000</span></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Tax Treatment</h4>
                    <div className="space-y-1 text-neutral-700">
                      <div className="flex justify-between"><span>Excludable (insolvency):</span><span className="font-mono">$15,000</span></div>
                      <div className="flex justify-between"><span>Taxable income:</span><span className="font-mono">$0</span></div>
                      <div className="flex justify-between border-t border-green-300 pt-1"><span>Additional tax:</span><span className="font-mono">$0</span></div>
                      <div className="flex justify-between font-semibold"><span>Form 982 required:</span><span className="text-green-600">Yes</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">California State Tax Specifics</h2>
            <div className="bg-blue-50 border border-blue-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">State Tax Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-black mb-3">Tax Rates (2025)</h4>
                  <div className="space-y-2 text-sm text-neutral-700">
                    <div className="flex justify-between"><span>Income $0-$20,550:</span><span>1% - 2%</span></div>
                    <div className="flex justify-between"><span>Income $20,551-$48,700:</span><span>4% - 6%</span></div>
                    <div className="flex justify-between"><span>Income $48,701-$61,650:</span><span>8%</span></div>
                    <div className="flex justify-between"><span>Income $61,651-$319,750:</span><span>9.3%</span></div>
                    <div className="flex justify-between"><span>Income $319,751+:</span><span>10.3% - 13.3%</span></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-3">Orange County Considerations</h4>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• High income residents face top marginal rates</li>
                    <li>• Mental Health Services Tax (1%) on income over $1M</li>
                    <li>• No local income tax in Orange County</li>
                    <li>• Consider Alternative Minimum Tax (AMT) implications</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Tax Resources</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Professional Tax Help</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-black">IRS Taxpayer Advocate Service</h4>
                    <p className="text-neutral-700">Laguna Niguel office: (949) 360-2706</p>
                    <p className="text-xs text-neutral-600">Free help with IRS problems</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">VITA Tax Preparation</h4>
                    <p className="text-neutral-700">Orange County locations</p>
                    <p className="text-xs text-neutral-600">Free tax prep for income under $57,000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">California Franchise Tax Board</h4>
                    <p className="text-neutral-700">1-800-852-5711</p>
                    <p className="text-xs text-neutral-600">State tax questions and issues</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Required Forms</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-black">Form 982</h4>
                    <p className="text-neutral-700">Reduction of Tax Attributes Due to Discharge of Indebtedness</p>
                    <p className="text-xs text-neutral-600">Required for insolvency and other exclusions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Schedule CA (540)</h4>
                    <p className="text-neutral-700">California Adjustments - Residents</p>
                    <p className="text-xs text-neutral-600">May differ from federal treatment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Form 1040</h4>
                    <p className="text-neutral-700">Report cancelled debt as "Other Income"</p>
                    <p className="text-xs text-neutral-600">Line 8i for tax year 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Tax Planning for Future Settlements</h2>
            <div className="space-y-4 mb-8">
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Multi-Year Settlement Strategy</h4>
                <p className="text-sm text-neutral-700">Spread settlements across multiple tax years to manage marginal tax rates and avoid pushing income into higher brackets.</p>
              </div>
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Retirement Account Considerations</h4>
                <p className="text-sm text-neutral-700">Avoid withdrawing from retirement accounts to fund settlements, as this creates additional taxable income on top of forgiven debt.</p>
              </div>
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">Business Debt vs. Personal Debt</h4>
                <p className="text-sm text-neutral-700">Business debt cancellation has different tax implications and may be deductible against business income in some cases.</p>
              </div>
              <div className="border border-neutral-200 p-4">
                <h4 className="font-semibold text-black mb-2">State Tax Planning</h4>
                <p className="text-sm text-neutral-700">High-income Orange County residents should consider timing of settlements around potential changes in California tax rates and federal deductibility of state taxes.</p>
              </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Tax Planning Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Tax laws are complex and change frequently. This information is for educational purposes only and does not 
                constitute tax advice. Individual tax situations vary significantly based on income, filing status, state residency, 
                and specific debt circumstances. Tax rates, exemptions, and exclusions are subject to change. Always consult with 
                qualified tax professionals, CPAs, or tax attorneys before making decisions about debt settlement and tax planning. 
                Professional guidance is especially important for high-income earners and complex financial situations common in Orange County.
              </p>
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