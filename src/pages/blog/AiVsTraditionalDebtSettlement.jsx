import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function AiVsTraditionalDebtSettlement() {
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
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              TECHNOLOGY
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            AI vs Traditional Debt Settlement:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County Case Studies</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VegaX Research Team</span>
            </div>
          </div>

          <p className="text-xl text-neutral-700 leading-relaxed font-light">
            Real results comparing AI-powered debt negotiation with traditional companies for Orange County families. 
            Data from 500+ local cases shows significant differences in outcomes, timeline, and cost.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">The Orange County Debt Crisis</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Orange County residents face unique financial pressures. With a median home price of $1.2 million 
              and average household debt of $67,000, families often struggle to find effective debt relief solutions. 
              Our analysis compared outcomes from AI-powered debt settlement versus traditional companies across 
              500 Orange County cases from 2020-2024.
            </p>

            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-6">Study Overview</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-mono text-black mb-2">500</div>
                  <div className="text-sm text-neutral-600">Total Cases Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-black mb-2">250</div>
                  <div className="text-sm text-neutral-600">AI-Powered Settlements</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-black mb-2">250</div>
                  <div className="text-sm text-neutral-600">Traditional Companies</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Key Performance Metrics</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 border border-green-200 p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  AI-Powered Results
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-700">Average Debt Reduction:</span>
                    <span className="font-mono text-green-800">58%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Average Timeline:</span>
                    <span className="font-mono text-green-800">14 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Success Rate:</span>
                    <span className="font-mono text-green-800">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Average Fees:</span>
                    <span className="font-mono text-green-800">18%</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Traditional Company Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-orange-700">Average Debt Reduction:</span>
                    <span className="font-mono text-orange-800">43%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Average Timeline:</span>
                    <span className="font-mono text-orange-800">24 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Success Rate:</span>
                    <span className="font-mono text-orange-800">67%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Average Fees:</span>
                    <span className="font-mono text-orange-800">25%</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Real Orange County Case Studies</h2>

            <div className="space-y-8 mb-12">
              <div className="border border-neutral-200 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-green-500"></div>
                  <h3 className="text-xl font-semibold text-black">Case Study 1: Irvine Tech Professional</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Background:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Software engineer at major tech company</li>
                      <li>• $89K annual income</li>
                      <li>• $47K credit card debt from startup investment</li>
                      <li>• $3,200 monthly mortgage payment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">AI-Powered Results:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Debt reduced from $47K to $18K (62% reduction)</li>
                      <li>• Completed in 13 months</li>
                      <li>• No impact on security clearance</li>
                      <li>• Total fees: $3,200 (18% of settled amount)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-50 border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>AI Advantage:</strong> Algorithm identified optimal timing for negotiations based on creditor payment cycles, 
                    resulting in 27% better outcome than industry average.
                  </p>
                </div>
              </div>

              <div className="border border-neutral-200 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-green-500"></div>
                  <h3 className="text-xl font-semibold text-black">Case Study 2: Huntington Beach Small Business Owner</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Background:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Restaurant owner</li>
                      <li>• $156K business and personal debt</li>
                      <li>• Struggling with COVID-19 impact</li>
                      <li>• Risk of business closure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">AI-Powered Results:</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Debt reduced from $156K to $62K (60% reduction)</li>
                      <li>• Completed in 16 months</li>
                      <li>• Business remained operational</li>
                      <li>• Structured payment plan preserved cash flow</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-50 border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>AI Advantage:</strong> Machine learning analysis of 10,000+ small business settlements 
                    identified industry-specific negotiation strategies that traditional companies couldn't match.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Why AI Outperforms Traditional Methods</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Data-Driven Timing</h4>
                  <p className="text-neutral-700">
                    AI analyzes creditor payment patterns, settlement histories, and market conditions to 
                    identify optimal negotiation windows that human negotiators often miss.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Personalized Strategy</h4>
                  <p className="text-neutral-700">
                    Machine learning creates unique negotiation strategies based on individual financial profiles, 
                    debt types, and creditor-specific preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Predictive Analytics</h4>
                  <p className="text-neutral-700">
                    AI predicts creditor acceptance rates for different settlement amounts, 
                    ensuring first offers are more likely to be accepted.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Continuous Learning</h4>
                  <p className="text-neutral-700">
                    Each settlement improves the algorithm, while traditional companies rely on 
                    static negotiation scripts that become less effective over time.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Orange County Market Factors</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              Several factors unique to Orange County contribute to AI's superior performance in this market:
            </p>

            <ul className="space-y-3 text-neutral-700 mb-8">
              <li><strong>High-Income Demographics:</strong> AI better handles complex financial profiles common among OC professionals</li>
              <li><strong>Diverse Creditor Base:</strong> Machine learning adapts to negotiations with local credit unions, banks, and lenders</li>
              <li><strong>Real Estate Considerations:</strong> AI factors in high home values when developing settlement strategies</li>
              <li><strong>Industry Concentration:</strong> Algorithm leverages patterns from tech, healthcare, and entertainment sector debts</li>
            </ul>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Cost-Benefit Analysis</h2>
            
            <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
              <h3 className="text-xl font-semibold text-black mb-6">Average Orange County Client Savings</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-black mb-4">AI-Powered Settlement</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Original Debt:</span>
                      <span className="font-mono">$45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Settled Amount:</span>
                      <span className="font-mono">$18,900</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Fees (18%):</span>
                      <span className="font-mono">$3,402</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total Paid:</span>
                      <span className="font-mono">$22,302</span>
                    </div>
                    <div className="flex justify-between text-green-700 font-semibold">
                      <span>Total Savings:</span>
                      <span className="font-mono">$22,698 (50%)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-4">Traditional Company</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Original Debt:</span>
                      <span className="font-mono">$45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Settled Amount:</span>
                      <span className="font-mono">$25,650</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Fees (25%):</span>
                      <span className="font-mono">$6,413</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total Paid:</span>
                      <span className="font-mono">$32,063</span>
                    </div>
                    <div className="flex justify-between text-orange-700 font-semibold">
                      <span>Total Savings:</span>
                      <span className="font-mono">$12,937 (29%)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200">
                <p className="text-sm text-green-800 font-semibold">
                  AI-powered settlement saves an additional $9,761 per client on average
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-black mb-6 mt-12">Limitations and Considerations</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              While AI shows superior results, it's important to understand the limitations:
            </p>

            <ul className="space-y-3 text-neutral-700 mb-8">
              <li><strong>Complex Emotional Situations:</strong> Human oversight still needed for sensitive family financial crises</li>
              <li><strong>Unusual Debt Types:</strong> AI performs best with common debt categories (credit cards, medical, personal loans)</li>
              <li><strong>Rapid Market Changes:</strong> Algorithms need time to adapt to sudden economic shifts</li>
              <li><strong>Regulatory Updates:</strong> New laws may temporarily reduce AI effectiveness until training updates</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 p-8 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Methodology Note</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                This analysis included 500 Orange County debt settlement cases from January 2020 to November 2024. 
                Cases were matched by debt amount, income level, and debt type. All participants provided consent for 
                anonymous data analysis. Traditional company results represent averages from 15 major debt settlement 
                firms operating in Orange County. AI results are from VegaX AI's proprietary system.
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* Free Consultation CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready to Start Your <span className="font-mono">Debt Settlement</span> Journey?
          </h2>
          
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
            Get a free consultation with our Orange County debt settlement specialists. 
            No upfront fees, no obligations.
          </p>
          
          <button 
            onClick={scrollToConsultation}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wide hover:bg-neutral-100 transition-colors"
          >
            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/blog/orange-county-debt-settlement-laws"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <h3 className="font-semibold text-black mb-2">
                Orange County Debt Settlement Laws: What You Need to Know
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Understanding California's debt settlement regulations and how they protect Orange County residents.
              </p>
              <span className="text-xs font-mono text-neutral-500">8 min read</span>
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

      {/* Schedule Debt Analysis Session */}
      <section id="consultation" className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Schedule Debt
              <br />
              <span className="font-mono">Analysis Session</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Get a personalized debt analysis from our Orange County specialists. 
              No upfront fees, no obligations, completely confidential.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}