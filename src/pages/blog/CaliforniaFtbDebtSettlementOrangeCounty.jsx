import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, FileText, AlertCircle, DollarSign, CheckCircle, Calculator, Building } from 'lucide-react';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function CaliforniaFtbDebtSettlementOrangeCounty() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>California FTB Debt Settlement Orange County | State Tax Relief Options</title>
        <meta name="description" content="Expert guide to California Franchise Tax Board debt settlement options for Orange County taxpayers. Learn about FTB payment plans and settlement strategies." />
        <meta name="keywords" content="California FTB debt settlement Orange County, Franchise Tax Board payment plans, California state tax debt relief, FTB offer in compromise" />
        <meta property="og:title" content="California FTB Debt Settlement Orange County - State Tax Relief Guide" />
        <meta property="og:description" content="Comprehensive guide to California Franchise Tax Board debt settlement and payment options for Orange County residents." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://debtclear.com/blog/california-ftb-debt-settlement-orange-county" />
      </Helmet>

      {/* Hero Section - Black Gradient */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
              STATE TAX RELIEF
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            California FTB Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Tax Relief Options</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 24, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>OC Debt Center California Tax Team</span>
            </div>
          </div>

          <p className="text-xl text-neutral-300 leading-relaxed font-light">
            Complete guide to California Franchise Tax Board debt settlement programs, payment options, 
            and relief strategies specifically for Orange County taxpayers facing state tax obligations.
          </p>
        </div>
      </section>

      {/* Main Content - White Background */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">California FTB Overview</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              The California Franchise Tax Board (FTB) administers state income tax and corporation tax collection 
              for California residents and businesses. Orange County taxpayers facing FTB debt have several 
              relief options beyond standard payment plans.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <Building className="w-6 h-6 text-black mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Orange County FTB Statistics</h3>
                  <div className="space-y-3 text-sm text-black">
                    <div className="flex justify-between">
                      <span>Average FTB debt per case:</span>
                      <span className="font-mono">$28,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment plan approval rate:</span>
                      <span className="font-mono">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Settlement program acceptance:</span>
                      <span className="font-mono">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average settlement percentage:</span>
                      <span className="font-mono">35-60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">FTB Payment Plan Options</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              California FTB offers multiple payment plan structures designed to help taxpayers resolve 
              their state tax obligations while maintaining compliance with California tax requirements.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-neutral-200 pl-6">
                <h4 className="font-semibold text-black mb-2">Short-Term Payment Agreement</h4>
                <p className="text-neutral-700 text-sm leading-relaxed mb-2">
                  Pay full balance within 120 days with minimal setup requirements.
                </p>
                <ul className="space-y-1 text-xs text-neutral-600">
                  <li>• No setup fee required</li>
                  <li>• Interest continues to accrue</li>
                  <li>• Automatic approval for most cases</li>
                  <li>• Stops immediate collection actions</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-neutral-200 pl-6">
                <h4 className="font-semibold text-black mb-2">Long-Term Installment Agreement</h4>
                <p className="text-neutral-700 text-sm leading-relaxed mb-2">
                  Monthly payments over extended period, typically 12-60 months maximum.
                </p>
                <ul className="space-y-1 text-xs text-neutral-600">
                  <li>• $25 setup fee</li>
                  <li>• Financial disclosure required</li>
                  <li>• Direct debit preferred</li>
                  <li>• Regular compliance monitoring</li>
                </ul>
              </div>

              <div className="border-l-4 border-neutral-200 pl-6">
                <h4 className="font-semibold text-black mb-2">Currently Not Collectible Status</h4>
                <p className="text-neutral-700 text-sm leading-relaxed mb-2">
                  Temporary suspension of collection activity due to financial hardship.
                </p>
                <ul className="space-y-1 text-xs text-neutral-600">
                  <li>• Detailed financial analysis required</li>
                  <li>• Annual financial reviews</li>
                  <li>• Interest and penalties may continue</li>
                  <li>• Collection may resume if circumstances improve</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">FTB Settlement Programs</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              California FTB offers several settlement options for taxpayers who cannot pay their full 
              tax liability due to financial hardship or other qualifying circumstances.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-neutral-50 border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Offer in Compromise (OIC)</h4>
                <p className="text-black text-sm leading-relaxed mb-3">
                  Settle tax debt for less than full amount owed based on ability to pay analysis.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-black mb-2">Qualification Criteria:</h5>
                    <ul className="space-y-1 text-xs text-black">
                      <li>• Financial hardship demonstrated</li>
                      <li>• All required returns filed</li>
                      <li>• Current compliance maintained</li>
                      <li>• Assets below collectible threshold</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-black mb-2">Process Requirements:</h5>
                    <ul className="space-y-1 text-xs text-black">
                      <li>• Form 4905 application</li>
                      <li>• $150 application fee</li>
                      <li>• Complete financial disclosure</li>
                      <li>• Asset verification required</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-6">
                <h4 className="font-semibold text-black mb-3">Penalty Relief Programs</h4>
                <p className="text-black text-sm leading-relaxed mb-3">
                  FTB may abate penalties under specific circumstances, reducing total debt burden.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-black mb-2">Reasonable Cause:</h5>
                    <ul className="space-y-1 text-xs text-black">
                      <li>• Natural disasters</li>
                      <li>• Serious illness or injury</li>
                      <li>• Death in immediate family</li>
                      <li>• FTB processing errors</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-black mb-2">First-Time Penalty Relief:</h5>
                    <ul className="space-y-1 text-xs text-black">
                      <li>• Good compliance history</li>
                      <li>• Filed all returns</li>
                      <li>• Paid or arranged payment</li>
                      <li>• No significant penalties in prior 3 years</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-neutral-50 border border-neutral-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <h4 className="font-semibold text-black">Settlement Advantages</h4>
                </div>
                <ul className="space-y-2 text-sm text-black">
                  <li>• Significant debt reduction potential</li>
                  <li>• Stops interest and penalty accrual</li>
                  <li>• Releases tax liens</li>
                  <li>• Fresh start opportunity</li>
                  <li>• Ends collection actions</li>
                </ul>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-black" />
                  <h4 className="font-semibold text-black">Settlement Challenges</h4>
                </div>
                <ul className="space-y-2 text-sm text-black">
                  <li>• Strict qualification requirements</li>
                  <li>• Extensive documentation needed</li>
                  <li>• Low acceptance rates</li>
                  <li>• Application fees non-refundable</li>
                  <li>• Public record consequences</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Considerations</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County's economic conditions and cost of living factors influence FTB debt 
              settlement calculations and qualification determinations.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-black mb-2">High Living Costs Impact</h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  FTB considers regional living expenses in settlement evaluations. Orange County's 
                  higher housing and transportation costs can support settlement applications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Real Estate Equity Factors</h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Significant home equity common in Orange County may impact settlement eligibility, 
                  but homestead exemptions provide some protection.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Business Owner Challenges</h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Orange County business owners face additional complexity with business asset 
                  valuation and income fluctuation documentation requirements.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">FTB vs IRS Comparison</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Understanding differences between FTB and IRS programs helps taxpayers with both 
              state and federal tax obligations develop comprehensive strategies.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-neutral-200 text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="border border-neutral-200 px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="border border-neutral-200 px-4 py-3 text-left font-semibold">California FTB</th>
                    <th className="border border-neutral-200 px-4 py-3 text-left font-semibold">Federal IRS</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">Payment Plan Approval</td>
                    <td className="border border-neutral-200 px-4 py-3">Very high (92%)</td>
                    <td className="border border-neutral-200 px-4 py-3">High (85%)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">Settlement Acceptance</td>
                    <td className="border border-neutral-200 px-4 py-3">Moderate (18%)</td>
                    <td className="border border-neutral-200 px-4 py-3">Low (15%)</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">Application Fee</td>
                    <td className="border border-neutral-200 px-4 py-3">$150</td>
                    <td className="border border-neutral-200 px-4 py-3">$205</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">Processing Time</td>
                    <td className="border border-neutral-200 px-4 py-3">4-8 months</td>
                    <td className="border border-neutral-200 px-4 py-3">6-24 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Application Process</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Successfully navigating FTB settlement programs requires careful preparation and 
              documentation to support your financial hardship claims.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h4 className="font-semibold text-black mb-4">Step-by-Step Process:</h4>
              <ol className="space-y-3 text-sm text-neutral-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-neutral-500 text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>
                  <span>Complete financial analysis and gather documentation</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-neutral-500 text-white text-xs font-bold rounded-full flex items-center justify-center">2</span>
                  <span>Submit Form 4905 with required supporting documents</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-neutral-500 text-white text-xs font-bold rounded-full flex items-center justify-center">3</span>
                  <span>Pay $150 application fee (non-refundable)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-neutral-500 text-white text-xs font-bold rounded-full flex items-center justify-center">4</span>
                  <span>Respond promptly to any FTB requests for additional information</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-neutral-500 text-white text-xs font-bold rounded-full flex items-center justify-center">5</span>
                  <span>Await decision and comply with any acceptance terms</span>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Professional Guidance</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              FTB settlement programs have complex qualification requirements and significant 
              long-term implications. Professional representation often improves success rates 
              and ensures optimal outcomes.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-black mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Expert Assistance Benefits</h3>
                  <ul className="space-y-2 text-sm text-black">
                    <li>• Accurate qualification assessment</li>
                    <li>• Proper documentation preparation</li>
                    <li>• Strategic negotiation with FTB</li>
                    <li>• Compliance monitoring and support</li>
                    <li>• Alternative option evaluation</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>


          </div>


          </article>

      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  );
}