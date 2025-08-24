import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Layers, TrendingUp, Calculator, PieChart, Building, Shield, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function OrangeCountyDebtConsolidation2025() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Orange County Debt Consolidation 2025 | Complete Guide & Options</title>
        <meta name="description" content="Complete guide to debt consolidation for Orange County residents in 2025. Compare personal loans, balance transfers, and HELOC options. Find the best consolidation strategy." />
        <meta name="keywords" content="Orange County debt consolidation, personal loans OC, balance transfer cards, HELOC debt consolidation, credit union loans Orange County" />
        <meta property="og:title" content="Orange County Debt Consolidation 2025 | Complete Guide" />
        <meta property="og:description" content="Complete guide to debt consolidation for Orange County residents. Compare all options and find the best strategy for your situation." />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vegaxholdings.com/blog/orange-county-debt-consolidation-2025" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Orange County Debt Consolidation Complete 2025 Guide",
            "description": "Complete guide to debt consolidation for Orange County residents in 2025. Compare personal loans, balance transfers, and HELOC options. Find the best consolidation strategy.",
            "author": {
              "@type": "Organization",
              "name": "VegaX Holdings"
            },
            "publisher": {
              "@type": "Organization",
              "name": "VegaX Holdings",
              "logo": {
                "@type": "ImageObject",
                "url": "https://vegaxholdings.com/logo.png"
              }
            },
            "datePublished": "2025-08-15",
            "dateModified": "2025-08-15",
            "mainEntityOfPage": "https://vegaxholdings.com/blog/orange-county-debt-consolidation-2025"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-blue-100 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-blue-100 font-mono">
              DEBT CONSOLIDATION
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Orange County
            <br />
            <span className="text-blue-200">Debt Consolidation</span>
          </h1>

          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Complete 2025 guide to consolidation options for Orange County residents
          </p>

          <div className="flex items-center gap-6 text-sm font-mono text-blue-200 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>VegaX Financial Team</span>
            </div>
          </div>

          <button 
            onClick={scrollToConsultation}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get Consolidation Analysis
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <PieChart className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">58%</div>
                  <div className="text-gray-600 text-sm">OC Residents Multiple Debts</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">$42K</div>
                  <div className="text-gray-600 text-sm">Average Total Debt Amount</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <Building className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">3.7</div>
                  <div className="text-gray-600 text-sm">Average # of Creditors</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">73%</div>
                  <div className="text-gray-600 text-sm">Consolidation Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="text-xl text-neutral-700 leading-relaxed mb-12">
              Orange County's median household income of $94,000 comes with higher living costs, making debt consolidation an attractive option for managing multiple debts. With average credit card interest rates at 24.5% in 2025, consolidation can provide significant savings for residents.
            </div>

            {/* Debt Consolidation Landscape */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 border border-blue-200 p-8 mb-12 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Debt Consolidation Landscape</h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-mono text-blue-800 mb-2">58%</div>
                  <div className="text-sm text-blue-700">OC Residents with Multiple Debts</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-blue-800 mb-2">$42,000</div>
                  <div className="text-sm text-blue-700">Average Total Debt Amount</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-blue-800 mb-2">3.7</div>
                  <div className="text-sm text-blue-700">Average # of Creditors</div>
                </div>
              </div>
            </motion.div>

            {/* Types of Debt Consolidation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Types of Debt Consolidation in Orange County</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orange County residents have access to various consolidation methods, each with distinct advantages based on credit score, debt amount, and financial goals.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Personal Loans</h3>
                  </div>
                  <div className="space-y-3 text-sm text-green-700">
                    <p>• Fixed rates: 6.99% - 18.99%</p>
                    <p>• Terms: 2-7 years</p>
                    <p>• Amounts: $5,000 - $100,000</p>
                    <p>• Good for multiple high-interest debts</p>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-800">Balance Transfers</h3>
                  </div>
                  <div className="space-y-3 text-sm text-purple-700">
                    <p>• 0% intro rates: 12-21 months</p>
                    <p>• Transfer fees: 3-5%</p>
                    <p>• Requires good credit (700+)</p>
                    <p>• Best for credit card debt only</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orange County Lenders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Lenders and Credit Unions</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Local financial institutions often provide better rates and terms for Orange County residents. Credit unions particularly offer competitive consolidation loans with member benefits.
              </p>

              <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-6">Top Orange County Consolidation Lenders</h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Credit Unions</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Orange County's Credit Union</span>
                          <span className="font-mono">5.49% - 12.99%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SchoolsFirst FCU</span>
                          <span className="font-mono">5.99% - 13.49%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Kinecta Federal Credit Union</span>
                          <span className="font-mono">6.24% - 14.99%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-3">National Lenders</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>SoFi</span>
                          <span className="font-mono">5.99% - 20.28%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>LightStream</span>
                          <span className="font-mono">6.99% - 19.99%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Marcus by Goldman Sachs</span>
                          <span className="font-mono">6.99% - 19.99%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Home Equity Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Home Equity Options for Orange County Residents</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                With median home values in Orange County exceeding $900,000, many residents have substantial equity that can be leveraged for debt consolidation through HELOCs or home equity loans.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-800 mb-4">HELOC Benefits</h3>
                  <div className="space-y-3 text-sm text-amber-700">
                    <p>• Variable rates: 7.5% - 9.5%</p>
                    <p>• Credit lines up to 80% of home value</p>
                    <p>• Interest-only payments during draw period</p>
                    <p>• Tax deductible if used for home improvements</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">HELOC Risks</h3>
                  <div className="space-y-3 text-sm text-red-700">
                    <p>• Your home is collateral</p>
                    <p>• Variable rates can increase</p>
                    <p>• Potential for payment shock</p>
                    <p>• Closing costs: $2,000 - $5,000</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl text-center mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">
                Free Debt Analysis for Orange County Residents
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Unsure whether consolidation or settlement is right for you? Our AI-powered analysis provides personalized recommendations based on your specific Orange County situation.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Analysis Includes:</h4>
                  <ul className="space-y-1 text-blue-200">
                    <li>• Consolidation loan pre-qualification</li>
                    <li>• Settlement savings calculation</li>
                    <li>• Credit impact comparison</li>
                    <li>• Monthly payment projections</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Option Factors:</h4>
                  <ul className="space-y-1 text-blue-200">
                    <li>• Current credit score</li>
                    <li>• Total debt amount</li>
                    <li>• Monthly income stability</li>
                    <li>• Financial goals timeline</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Analysis
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