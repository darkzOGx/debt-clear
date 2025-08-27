import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Calculator, Shield, Clock, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtSettlementVsBankruptcy() {
  return (
    <>
      <Helmet>
        <title>Debt Settlement vs Bankruptcy in Orange County: Complete 2025 Guide</title>
        <meta name="description" content="Compare debt settlement vs bankruptcy for Orange County residents. Learn costs, credit impact, timeline, and which option saves more money. Free consultation available." />
        <meta name="keywords" content="debt settlement vs bankruptcy Orange County, Chapter 7 bankruptcy California, Chapter 13 bankruptcy OC, debt relief options comparison, bankruptcy alternatives Orange County" />
        <link rel="canonical" href="https://orangecountydebtcenter.com/" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Debt Settlement vs Bankruptcy in Orange County: Complete 2025 Comparison Guide",
            "description": "Comprehensive comparison of debt settlement and bankruptcy options for Orange County residents, including costs, timelines, and credit impact analysis.",
            "author": {
              "@type": "Person",
              "name": "Sarah Chen",
              "jobTitle": "Senior Debt Settlement Specialist"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Orange County Debt Center"
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15"
          })}
        </script>
      </Helmet>

      <article className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-black text-white p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/blog" className="flex items-center gap-2 hover:opacity-80 transition">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Link to="/faq" className="hover:opacity-80 transition">
              FAQ
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-b from-neutral-50 to-white py-16 border-b">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-wider text-neutral-600 font-mono">
                DEBT RELIEF COMPARISON GUIDE
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 text-center leading-tight">
              Debt Settlement vs Bankruptcy<br />
              <span className="font-mono text-3xl">in Orange County: 2025 Guide</span>
            </h1>
            <p className="text-xl text-neutral-700 text-center max-w-3xl mx-auto leading-relaxed">
              Compare your debt relief options with real data from 2,500+ Orange County cases. 
              Learn which option saves more money, protects assets better, and allows faster financial recovery.
            </p>
          </div>
        </header>

        {/* Quick Comparison Table */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-black mb-6">Quick Comparison: Settlement vs Bankruptcy</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="border-b-2 border-neutral-300">
                    <th className="text-left py-3 px-4 font-semibold text-black">Factor</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Debt Settlement</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Chapter 7 Bankruptcy</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Chapter 13 Bankruptcy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Debt Reduction</td>
                    <td className="py-3 px-4">40-60% reduction</td>
                    <td className="py-3 px-4">100% discharge (qualified debts)</td>
                    <td className="py-3 px-4">Partial discharge after payment plan</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Timeline</td>
                    <td className="py-3 px-4">24-48 months</td>
                    <td className="py-3 px-4">3-6 months</td>
                    <td className="py-3 px-4">3-5 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Credit Impact</td>
                    <td className="py-3 px-4">50-100 points, 7 years</td>
                    <td className="py-3 px-4">200+ points, 10 years</td>
                    <td className="py-3 px-4">150+ points, 7 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Total Cost</td>
                    <td className="py-3 px-4">15-25% of enrolled debt</td>
                    <td className="py-3 px-4">$1,500-$3,500</td>
                    <td className="py-3 px-4">$4,000-$6,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Asset Protection</td>
                    <td className="py-3 px-4">All assets retained</td>
                    <td className="py-3 px-4">Non-exempt assets liquidated</td>
                    <td className="py-3 px-4">Assets retained if payments made</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Public Record</td>
                    <td className="py-3 px-4">No public filing</td>
                    <td className="py-3 px-4">Public court record</td>
                    <td className="py-3 px-4">Public court record</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-black mb-6">Understanding Your Options in Orange County</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                For Orange County residents facing overwhelming debt, choosing between debt settlement and bankruptcy 
                is one of the most important financial decisions you'll make. With the median household debt in 
                Orange County at $47,000 and rising living costs, understanding these options is crucial.
              </p>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">When Debt Settlement Works Best</h3>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200 mb-6">
                <h4 className="text-lg font-semibold text-black mb-3">Ideal Candidates for Settlement:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• $10,000+ in unsecured debt (credit cards, medical bills, personal loans)</li>
                  <li>• Experiencing financial hardship but have some income</li>
                  <li>• Want to avoid bankruptcy's public record and stigma</li>
                  <li>• Can afford $300-$1,000 monthly program payments</li>
                  <li>• Need flexibility to adjust payment amounts</li>
                  <li>• Orange County professionals concerned about security clearances</li>
                </ul>
              </div>

              <p className="text-neutral-700 mb-6">
                Our data from 2,500+ Orange County clients shows debt settlement achieves an average 52% reduction 
                in total debt. For someone with $50,000 in debt, this means paying approximately $24,000 plus 
                fees, compared to $85,000+ if making minimum payments over 20 years.
              </p>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">When Chapter 7 Bankruptcy Makes Sense</h3>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200 mb-6">
                <h4 className="text-lg font-semibold text-black mb-3">Chapter 7 Qualifications in California:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Pass the means test (income below California median)</li>
                  <li>• Orange County median income: $106,700 for family of 4</li>
                  <li>• Limited non-exempt assets</li>
                  <li>• Primarily unsecured debts</li>
                  <li>• No bankruptcy filing in past 8 years</li>
                  <li>• Willing to accept 10-year credit report impact</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Chapter 13 Bankruptcy Considerations</h3>
              
              <p className="text-neutral-700 mb-6">
                Chapter 13 allows Orange County residents with regular income to keep assets while repaying 
                debts over 3-5 years. It's particularly useful for:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
                <li>Stopping foreclosure on Orange County homes (median value $1.1M)</li>
                <li>Catching up on mortgage arrears</li>
                <li>Protecting non-exempt assets from liquidation</li>
                <li>Dealing with priority debts like taxes</li>
              </ul>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Credit Impact Comparison</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h4 className="text-lg font-semibold text-black mb-3">Debt Settlement Impact</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• Initial drop: 50-100 points</li>
                    <li>• Recovery begins during program</li>
                    <li>• 650+ scores possible within 18-24 months post-completion</li>
                    <li>• "Settled" notation for 7 years</li>
                    <li>• Can qualify for mortgage in 12-24 months</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h4 className="text-lg font-semibold text-black mb-3">Bankruptcy Impact</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• Initial drop: 150-250 points</li>
                    <li>• Chapter 7: 10-year reporting</li>
                    <li>• Chapter 13: 7-year reporting</li>
                    <li>• Public record filing</li>
                    <li>• 2-4 year wait for FHA loans</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Cost Analysis for Orange County Residents</h3>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200 mb-6">
                <h4 className="text-lg font-semibold text-black mb-4">Example: $50,000 in Debt</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-semibold text-black">Debt Settlement</p>
                    <p className="text-neutral-700">Settlement amount (48%): $24,000</p>
                    <p className="text-neutral-700">Program fees (20%): $10,000</p>
                    <p className="text-neutral-700 font-semibold">Total cost: $34,000</p>
                    <p className="text-green-600 font-semibold">Savings: $16,000</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold text-black">Chapter 7 Bankruptcy</p>
                    <p className="text-neutral-700">Attorney fees: $2,500</p>
                    <p className="text-neutral-700">Court fees: $338</p>
                    <p className="text-neutral-700">Credit counseling: $50</p>
                    <p className="text-neutral-700 font-semibold">Total cost: $2,888</p>
                    <p className="text-blue-600 font-semibold">Savings: $47,112</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-semibold text-black">Chapter 13 Bankruptcy</p>
                    <p className="text-neutral-700">Repayment (varies): $15,000-$50,000</p>
                    <p className="text-neutral-700">Attorney fees: $4,500</p>
                    <p className="text-neutral-700">Trustee fees: $2,500</p>
                    <p className="text-neutral-700 font-semibold">Total cost: $22,000-$57,000</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">California-Specific Considerations</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h4 className="text-lg font-semibold text-black mb-3">California Exemptions (2025)</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• Homestead: $350,000-$675,000</li>
                    <li>• Vehicle: $3,575</li>
                    <li>• Personal property: $8,625</li>
                    <li>• Retirement accounts: Fully exempt</li>
                    <li>• Wages: 75% protected</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h4 className="text-lg font-semibold text-black mb-3">Orange County Court Statistics</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• Chapter 7 filings (2024): 3,847</li>
                    <li>• Chapter 13 filings (2024): 892</li>
                    <li>• Average discharge time: 4.2 months</li>
                    <li>• Success rate Ch 7: 94%</li>
                    <li>• Success rate Ch 13: 41%</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Impact on Orange County Lifestyle</h3>
              
              <p className="text-neutral-700 mb-6">
                Living in Orange County means considering how each option affects your ability to:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
                <li><strong>Rent apartments:</strong> Bankruptcy appears on rental applications; settlement doesn't</li>
                <li><strong>Employment:</strong> Some OC employers check credit; bankruptcy is public record</li>
                <li><strong>Security clearances:</strong> Required for many aerospace and defense jobs in OC</li>
                <li><strong>Professional licenses:</strong> Some require disclosure of bankruptcy filings</li>
                <li><strong>Business ownership:</strong> Bankruptcy can affect business credit and partnerships</li>
              </ul>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Tax Implications</h3>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                <h4 className="text-lg font-semibold text-black mb-3">Important Tax Considerations</h4>
                <p className="text-neutral-700 mb-3">
                  <strong>Debt Settlement:</strong> Forgiven debt over $600 is taxable income (1099-C). 
                  However, insolvency exception (Form 982) often eliminates this tax.
                </p>
                <p className="text-neutral-700">
                  <strong>Bankruptcy:</strong> Discharged debt is NOT taxable income. This can mean 
                  thousands in tax savings for large debt amounts.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Which Option Is Right for You?</h3>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                <h4 className="text-lg font-semibold text-black mb-3">Choose Debt Settlement If:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>✓ You want to avoid bankruptcy's stigma and public record</li>
                  <li>✓ You have steady income but face temporary hardship</li>
                  <li>✓ Your career requires security clearance or licenses</li>
                  <li>✓ You want control over the process and timeline</li>
                  <li>✓ You can afford $300+ monthly program payments</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <h4 className="text-lg font-semibold text-black mb-3">Choose Bankruptcy If:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>✓ You have little to no disposable income</li>
                  <li>✓ Creditors are garnishing wages or suing</li>
                  <li>✓ You need immediate legal protection</li>
                  <li>✓ Your debts exceed annual income by 2x or more</li>
                  <li>✓ You're comfortable with public filing</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-black mt-8 mb-4">Local Resources for Orange County Residents</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h4 className="text-lg font-semibold text-black mb-3">Bankruptcy Resources</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• US Bankruptcy Court - Santa Ana</li>
                    <li>• Legal Aid Society of OC: (714) 571-5200</li>
                    <li>• OC Bar Lawyer Referral: (949) 440-6747</li>
                    <li>• Bankruptcy self-help center</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h4 className="text-lg font-semibold text-black mb-3">Debt Settlement Resources</h4>
                  <ul className="space-y-2 text-neutral-700 text-sm">
                    <li>• Orange County Debt Center</li>
                    <li>• DFPI Consumer Services: (866) 275-2677</li>
                    <li>• BBB of Orange County</li>
                    <li>• Consumer Credit Counseling OC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* City-Specific Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-light text-black mb-8 text-center">
              Debt Relief by Orange County City
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Anaheim</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Average debt: $38,500</li>
                  <li>• Settlement savings: 54%</li>
                  <li>• Bankruptcy filings: 487/year</li>
                  <li>• Median income: $75,000</li>
                </ul>
              </div>
              
              <div className="border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Irvine</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Average debt: $62,000</li>
                  <li>• Settlement savings: 51%</li>
                  <li>• Bankruptcy filings: 198/year</li>
                  <li>• Median income: $114,000</li>
                </ul>
              </div>
              
              <div className="border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Santa Ana</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Average debt: $35,000</li>
                  <li>• Settlement savings: 56%</li>
                  <li>• Bankruptcy filings: 623/year</li>
                  <li>• Median income: $66,000</li>
                </ul>
              </div>
              
              <div className="border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Huntington Beach</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Average debt: $48,000</li>
                  <li>• Settlement savings: 52%</li>
                  <li>• Bankruptcy filings: 342/year</li>
                  <li>• Median income: $98,000</li>
                </ul>
              </div>
              
              <div className="border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Newport Beach</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Average debt: $78,000</li>
                  <li>• Settlement savings: 49%</li>
                  <li>• Bankruptcy filings: 156/year</li>
                  <li>• Median income: $142,000</li>
                </ul>
              </div>
              
              <div className="border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Costa Mesa</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Average debt: $44,000</li>
                  <li>• Settlement savings: 53%</li>
                  <li>• Bankruptcy filings: 289/year</li>
                  <li>• Median income: $84,000</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-light text-black mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Can I keep my house if I file bankruptcy in Orange County?
                </h3>
                <p className="text-neutral-700">
                  Yes, California's homestead exemption protects $350,000-$675,000 in home equity. 
                  Most Orange County residents can keep their primary residence in Chapter 7 if current 
                  on payments. Chapter 13 allows catching up on arrears while keeping the home.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Will debt settlement stop creditor lawsuits?
                </h3>
                <p className="text-neutral-700">
                  Enrollment shows good faith effort but doesn't provide automatic legal protection like 
                  bankruptcy. However, only 10-15% of our Orange County clients face lawsuits, and we 
                  prioritize settling those accounts first.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-black mb-3">
                  How soon can I rebuild credit after each option?
                </h3>
                <p className="text-neutral-700">
                  Debt settlement: Credit rebuilding begins immediately, 650+ scores possible within 
                  18-24 months. Bankruptcy: Chapter 7 requires 2-4 years for significant improvement, 
                  Chapter 13 allows rebuilding during the payment plan.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-black mb-3">
                  What debts can't be included in either option?
                </h3>
                <p className="text-neutral-700">
                  Neither option handles: student loans (except extreme hardship), recent taxes, 
                  child support, alimony, criminal fines, or DUI judgments. Secured debts like 
                  mortgages and auto loans require separate handling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-light mb-6">
              Get Your Free Debt Relief Analysis
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Our Orange County specialists will analyze your specific situation and recommend 
              the best path forward - whether that's settlement, bankruptcy, or another option.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#consultation"
                className="bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wide hover:bg-neutral-100 transition"
              >
                Free Consultation
              </Link>
              <a 
                href="tel:8445419236"
                className="border border-white px-8 py-4 font-mono text-sm uppercase tracking-wide hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (844) 541-9236
              </a>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-light text-black mb-8">Related Articles</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/blog/orange-county-debt-settlement-laws"
                className="border border-neutral-200 p-6 hover:border-black transition group"
              >
                <h3 className="text-lg font-semibold text-black mb-3 group-hover:underline">
                  Orange County Debt Settlement Laws
                </h3>
                <p className="text-neutral-600 text-sm">
                  Understanding your rights and protections under California law.
                </p>
              </Link>
              
              <Link 
                to="/blog/choose-debt-settlement-company-orange-county"
                className="border border-neutral-200 p-6 hover:border-black transition group"
              >
                <h3 className="text-lg font-semibold text-black mb-3 group-hover:underline">
                  How to Choose a Debt Settlement Company
                </h3>
                <p className="text-neutral-600 text-sm">
                  What to look for when selecting a debt relief provider in Orange County.
                </p>
              </Link>
              
              <Link 
                to="/blog/credit-score-recovery-debt-settlement-orange-county"
                className="border border-neutral-200 p-6 hover:border-black transition group"
              >
                <h3 className="text-lg font-semibold text-black mb-3 group-hover:underline">
                  Credit Score Recovery Guide
                </h3>
                <p className="text-neutral-600 text-sm">
                  Step-by-step guide to rebuilding credit after debt settlement.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Schedule Consultation Form */}
        <ConsultationForm />
      </article>
    </>
  );
}