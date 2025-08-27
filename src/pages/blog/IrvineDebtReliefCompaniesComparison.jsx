import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../../hooks/useCanonicalLink';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function IrvineDebtReliefCompaniesComparison() {
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://debtclear.com/blog/irvine-debt-relief-companies-comparison');

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Irvine Debt Relief Companies Comparison | Expert Guide 2025</title>
        <meta name="description" content="Expert comparison of debt relief companies serving Irvine residents. Guide to choosing legitimate partners for financial recovery in Orange County's tech capital." />
        <meta name="keywords" content="Irvine debt relief companies comparison, Orange County debt settlement, tech worker debt relief, Irvine financial services" />
        <meta property="og:title" content="Irvine Debt Relief Companies Comparison - Expert Guide 2025" />
        <meta property="og:description" content="Expert comparison of debt relief companies serving Irvine with detailed analysis of legitimate providers." />
        <meta property="og:type" content="article" />
      </Helmet>
      {/* Hero Section - Black Gradient */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
              LEGAL GUIDE
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Orange County Debt Settlement Laws:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">What You Need to Know</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>OC Debt Center Legal Team</span>
            </div>
          </div>

          <p className="text-xl text-neutral-300 leading-relaxed font-light">
            Understanding California's debt settlement regulations and how they protect Orange County 
            residents from predatory practices while ensuring legitimate debt relief options.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">California Debt Settlement Protection Laws</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              California has some of the strongest consumer protection laws in the nation when it comes to debt settlement. 
              Orange County residents benefit from both state and federal regulations that govern how debt settlement companies operate.
            </p>

            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Key California Protections:</h3>
              <ul className="space-y-3 text-neutral-700">
                <li><strong>No Upfront Fees:</strong> Companies cannot charge fees before settling your debt</li>
                <li><strong>Written Contracts:</strong> All agreements must be in writing with clear terms</li>
                <li><strong>Cancellation Rights:</strong> You have 3 days to cancel any debt settlement contract</li>
                <li><strong>Licensing Requirements:</strong> Debt settlement companies must be licensed in California</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Specific Considerations</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Living in Orange County presents unique financial challenges due to the high cost of living. 
              The median home price of $1.2 million means many residents carry significant mortgage debt alongside 
              credit cards and other obligations.
            </p>

            <h3 className="text-xl font-semibold text-black mb-4">Wage Garnishment Limits</h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              In California, creditors can garnish up to 25% of your disposable income or the amount by which 
              your weekly disposable income exceeds 40 times the state minimum wage, whichever is less. 
              For Orange County residents earning the median income of $84,000, this typically means 
              a maximum garnishment of about $400-500 per week.
            </p>

            <h3 className="text-xl font-semibold text-black mb-4">Homestead Exemption</h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              California's homestead exemption protects up to $600,000 of home equity for families, 
              which is crucial for Orange County homeowners. This means your primary residence 
              cannot be forced into sale to pay unsecured debts in most cases.
            </p>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Warning Signs of Predatory Companies</h2>
            
            <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Avoid Companies That:</h3>
              <ul className="space-y-2 text-black">
                <li>• Demand upfront payments before any services</li>
                <li>• Guarantee specific debt reduction percentages</li>
                <li>• Tell you to stop communicating with creditors entirely</li>
                <li>• Lack proper California licensing</li>
                <li>• Use high-pressure sales tactics</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Legitimate Debt Settlement Process</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              A legitimate debt settlement company in Orange County should follow a structured process 
              that complies with California law:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Free Consultation</h4>
                  <p className="text-neutral-700">
                    Comprehensive review of your financial situation with no upfront costs
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Written Agreement</h4>
                  <p className="text-neutral-700">
                    Clear contract outlining fees, timeline, and services provided
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Escrow Account Setup</h4>
                  <p className="text-neutral-700">
                    Independent third-party account to accumulate settlement funds
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Creditor Negotiations</h4>
                  <p className="text-neutral-700">
                    Professional negotiation with creditors to reduce debt amounts
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Settlement & Payment</h4>
                  <p className="text-neutral-700">
                    Fees only charged after successful debt settlement
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Resources for Orange County Residents</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              If you're considering debt settlement in Orange County, take advantage of these local resources:
            </p>

            <ul className="space-y-3 text-neutral-700 mb-8">
              <li><strong>Orange County Bar Association:</strong> Lawyer referral service for debt and bankruptcy attorneys</li>
              <li><strong>California Department of Financial Protection:</strong> Verify company licensing and file complaints</li>
              <li><strong>Better Business Bureau:</strong> Check company ratings and complaint history</li>
              <li><strong>National Foundation for Credit Counseling:</strong> Free nonprofit credit counseling services</li>
            </ul>

            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Important Disclaimer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                This information is for educational purposes only and does not constitute legal advice. 
                Debt settlement laws can be complex and individual situations vary. Always consult with 
                a qualified attorney or financial advisor before making decisions about debt settlement. 
                OC Debt Center is not a law firm and does not provide legal advice.
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Debt-Free Journey?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Get expert debt settlement guidance tailored to your specific situation.
          </p>
          <button 
            onClick={scrollToConsultation}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
          >
            FREE CONSULTATION
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/blog/ai-vs-traditional-debt-settlement"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <h3 className="font-semibold text-black mb-2">
                AI vs Traditional Debt Settlement: Orange County Case Studies
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Real results comparing AI-powered debt negotiation with traditional companies for Orange County families.
              </p>
              <span className="text-xs font-mono text-neutral-500">12 min read</span>
            </Link>
            
            <Link 
              to="/blog/choose-debt-settlement-company-orange-county"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <h3 className="font-semibold text-black mb-2">
                How to Choose a Debt Settlement Company in Orange County
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Essential criteria for selecting a debt settlement provider, including licensing, fees, and success rates.
              </p>
              <span className="text-xs font-mono text-neutral-500">10 min read</span>
            </Link>
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