import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Home, Shield, DollarSign, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function HomesteadExemptionDebtSettlementOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Homestead Exemption and Debt Settlement Orange County | Property Protection</title>
        <meta name="description" content="Protect your Orange County home during debt settlement with California homestead exemption. Learn property protection strategies and legal requirements." />
        <meta name="keywords" content="homestead exemption Orange County, property protection debt settlement, California homestead laws, home protection debt relief" />
        <meta property="og:title" content="Homestead Exemption and Debt Settlement - Orange County Guide" />
        <meta property="og:description" content="Essential guide to protecting your Orange County home during debt settlement using California homestead exemption laws and strategies." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://orangecountydebtcenter.com/" />
      </Helmet>
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
              ASSET PROTECTION
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            California Homestead Exemption:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Protecting Your Orange County Home</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Asset Protection Specialist</span>
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
              California's homestead exemption provides crucial protection for Orange County homeowners facing debt settlement. Understanding how to maximize this exemption can help preserve your most valuable asset while achieving debt relief and protecting your family's financial stability.
            </div>

            {/* Homestead Exemption Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 border border-neutral-200 p-8 mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Home className="w-6 h-6" />
                California Homestead Exemption Laws 2025
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Exemption Amounts</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Single Person:</strong> $700,000 homestead exemption</li>
                    <li>• <strong>Family of 2+:</strong> $700,000 homestead exemption</li>
                    <li>• <strong>Senior 65+:</strong> $700,000 homestead exemption</li>
                    <li>• <strong>Disabled Person:</strong> $700,000 homestead exemption</li>
                    <li>• <strong>55+ with Income &lt;$35K:</strong> $700,000 exemption</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">What's Protected</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Primary residence and surrounding property</li>
                    <li>• Mobile homes on owned or leased land</li>
                    <li>• Condominiums and townhomes</li>
                    <li>• Boat or RV used as primary dwelling</li>
                    <li>• Equity up to exemption amount</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-neutral-200">
                <h4 className="font-semibold text-black mb-2">Orange County Home Value Context</h4>
                <p className="text-sm text-neutral-700">
                  With median Orange County home values exceeding $1.2 million in 2025, the $700,000 homestead exemption provides substantial but not complete protection for many homeowners. Strategic planning is essential for high-value properties.
                </p>
              </div>
            </motion.div>

            {/* How Homestead Exemption Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                How the Homestead Exemption Protects Your Orange County Home
              </h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Automatic vs. Declared Homestead</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Automatic Homestead</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• No filing required</li>
                        <li>• Protects up to $700,000 in equity</li>
                        <li>• Applies to primary residence</li>
                        <li>• Protection exists by law</li>
                        <li>• Most common protection method</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Declared Homestead</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Requires recording with county</li>
                        <li>• Same exemption amount</li>
                        <li>• Provides notice to creditors</li>
                        <li>• Additional procedural protections</li>
                        <li>• Recommended for debt settlement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Homestead Exemption Calculation</h3>
                  <p className="text-neutral-700 mb-3">
                    Understanding how the exemption protects your Orange County home:
                  </p>
                  <div className="bg-white border border-neutral-200 p-4">
                    <h4 className="font-semibold text-black mb-2">Example: $1.5M Orange County Home</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Home Fair Market Value: $1,500,000</li>
                      <li>• Outstanding Mortgage: $600,000</li>
                      <li>• Total Equity: $900,000</li>
                      <li>• Homestead Exemption: $700,000</li>
                      <li>• <strong>Protected Equity: $700,000</strong></li>
                      <li>• <strong>Vulnerable Equity: $200,000</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orange County Real Estate Market */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Real Estate and Exemption Planning</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-4 text-left">Orange County Area</th>
                      <th className="border border-neutral-300 p-4 text-left">Median Home Value</th>
                      <th className="border border-neutral-300 p-4 text-left">Typical Equity</th>
                      <th className="border border-neutral-300 p-4 text-left">Protection Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Newport Beach</td>
                      <td className="border border-neutral-300 p-4">$2,800,000</td>
                      <td className="border border-neutral-300 p-4">$1,500,000+</td>
                      <td className="border border-neutral-300 p-4">Partial (47%)</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Irvine</td>
                      <td className="border border-neutral-300 p-4">$1,450,000</td>
                      <td className="border border-neutral-300 p-4">$800,000</td>
                      <td className="border border-neutral-300 p-4">Substantial (88%)</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Huntington Beach</td>
                      <td className="border border-neutral-300 p-4">$1,250,000</td>
                      <td className="border border-neutral-300 p-4">$650,000</td>
                      <td className="border border-neutral-300 p-4">Complete (100%)</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-4 font-semibold">Anaheim</td>
                      <td className="border border-neutral-300 p-4">$875,000</td>
                      <td className="border border-neutral-300 p-4">$450,000</td>
                      <td className="border border-neutral-300 p-4">Complete (100%)</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-4 font-semibold">Costa Mesa</td>
                      <td className="border border-neutral-300 p-4">$1,100,000</td>
                      <td className="border border-neutral-300 p-4">$550,000</td>
                      <td className="border border-neutral-300 p-4">Complete (100%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-black" />
                  High-Value Property Risks
                </h3>
                <p className="text-neutral-700 mb-3">
                  Orange County homeowners with high-value properties face unique challenges:
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Equity exceeding $700,000 exemption is vulnerable to creditors</li>
                  <li>• Forced sales can occur if unprotected equity exists</li>
                  <li>• Strategic debt settlement becomes more critical</li>
                  <li>• Additional asset protection strategies may be necessary</li>
                  <li>• Refinancing or home equity loans may reduce vulnerable equity</li>
                </ul>
              </div>
            </motion.div>

            {/* Debt Settlement Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Integrating Homestead Protection with Debt Settlement
              </h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Pre-Settlement Planning</h3>
                  <p className="text-neutral-700 mb-3">
                    Maximize homestead protection before beginning debt settlement:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li>• File declared homestead exemption with Orange County Recorder</li>
                    <li>• Document primary residence status thoroughly</li>
                    <li>• Consider strategic refinancing to reduce vulnerable equity</li>
                    <li>• Evaluate home equity loan options for debt payment</li>
                    <li>• Review property titling for optimal protection</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Settlement Negotiation Leverage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Strong Protection Position</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• All equity protected by exemption</li>
                        <li>• Creditor collection limited</li>
                        <li>• Stronger negotiation position</li>
                        <li>• Can demand better settlement terms</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Vulnerable Equity Exists</h4>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Forced sale risk increases urgency</li>
                        <li>• May need to accept higher settlements</li>
                        <li>• Consider all asset protection options</li>
                        <li>• Expedited settlement beneficial</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Timing Strategies</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Before Judgment:</strong> Homestead exemption fully protects equity</li>
                    <li>• <strong>After Judgment:</strong> Forced sale possible if unprotected equity exists</li>
                    <li>• <strong>Settlement Timing:</strong> Complete before creditor collection actions</li>
                    <li>• <strong>Property Transfers:</strong> Avoid fraudulent transfer issues</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Limitations and Exceptions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Homestead Exemption Limitations</h2>
              
              <div className="bg-neutral-50 border border-neutral-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Debts Not Protected From</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Liens That Survive</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Mortgage and deed of trust payments</li>
                      <li>• Property tax liens</li>
                      <li>• HOA liens and assessments</li>
                      <li>• Mechanic's liens for property improvements</li>
                      <li>• IRS tax liens on property</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Special Circumstances</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Spousal and child support obligations</li>
                      <li>• Some criminal restitution orders</li>
                      <li>• Debts secured by the property</li>
                      <li>• Fraudulent transfer claims</li>
                      <li>• Some bankruptcy proceedings</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-neutral-200">
                  <h4 className="font-semibold text-black mb-2">Orange County Property Tax Considerations</h4>
                  <p className="text-sm text-neutral-700">
                    Property tax liens always take priority over homestead exemptions. Orange County property taxes averaging $14,000-$40,000 annually must be kept current to maintain homestead protection effectiveness.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Filing Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Filing Declared Homestead in Orange County</h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Step-by-Step Filing Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <h4 className="font-semibold text-black">Complete Homestead Declaration Form</h4>
                        <p className="text-sm text-neutral-700">Obtain CCP 704.930 form from Orange County Recorder's office or website</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <h4 className="font-semibold text-black">Provide Property Information</h4>
                        <p className="text-sm text-neutral-700">Include legal description, APN, and declaration that property is primary residence</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <h4 className="font-semibold text-black">Get Notarization</h4>
                        <p className="text-sm text-neutral-700">Have declaration notarized by licensed notary public</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      <div>
                        <h4 className="font-semibold text-black">Record with County</h4>
                        <p className="text-sm text-neutral-700">File at Orange County Recorder, 12 Civic Center Plaza, Santa Ana (recording fees apply)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6">
                  <h3 className="font-semibold text-black mb-3">Orange County Recording Information</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Location:</strong> Orange County Recorder, 12 Civic Center Plaza, Santa Ana, CA 92701</li>
                    <li>• <strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</li>
                    <li>• <strong>Recording Fee:</strong> Approximately $15-25 (subject to change)</li>
                    <li>• <strong>Processing Time:</strong> Immediate upon recording</li>
                    <li>• <strong>Online Resources:</strong> ocrecorder.com for forms and information</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Advanced Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Advanced Asset Protection Strategies</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">For High-Value Properties</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Strategic Refinancing:</strong> Reduce vulnerable equity through cash-out refinancing</li>
                    <li>• <strong>Home Equity Lines:</strong> Use HELOC to invest in protected assets</li>
                    <li>• <strong>Irrevocable Trusts:</strong> Long-term asset protection planning</li>
                    <li>• <strong>Primary Residence Change:</strong> Consider downsizing before debt issues</li>
                    <li>• <strong>Spouse Protection:</strong> Optimize joint vs. separate ownership</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Timing Considerations</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li>• <strong>Pre-Default:</strong> Best time for asset protection planning</li>
                    <li>• <strong>Default Period:</strong> Limited options, focus on exemption filing</li>
                    <li>• <strong>Judgment Risk:</strong> Expedite settlement negotiations</li>
                    <li>• <strong>Post-Settlement:</strong> Rebuild equity strategically</li>
                    <li>• <strong>Fraudulent Transfer:</strong> Avoid transactions that appear improper</li>
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
              <h2 className="text-2xl font-semibold text-black mb-8">Related Asset Protection Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/property-protection-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Property Protection During Debt Settlement
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Comprehensive guide to protecting your Orange County assets during debt settlement.
                  </p>
                </Link>
                
                <Link 
                  to="/blog/asset-protection-trusts-debt-settlement-orange-county"
                  className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
                >
                  <h3 className="font-semibold text-black mb-3 group-hover:underline">
                    Orange County Asset Protection Trusts and Debt Settlement
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Advanced asset protection strategies for high-net-worth Orange County residents.
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
                Protect Your Orange County Home During Debt Settlement
              </h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Get expert guidance on maximizing homestead exemption protection while achieving debt relief. Don't risk losing your home to creditors when proper planning can preserve your most valuable asset.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Get Asset Protection Help
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