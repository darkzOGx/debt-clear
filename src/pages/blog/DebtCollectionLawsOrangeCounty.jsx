import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Shield, Scale, FileText, AlertTriangle, Users, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtCollectionLawsOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Orange County Debt Collection Laws: Know Your Rights",
    "description": "Complete guide to debt collection regulations in Orange County, including illegal practices, consumer protections, and how to file complaints.",
    "author": {
      "@type": "Organization",
      "name": "VegaX Consumer Rights Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VegaX Debt Relief",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vegax.ai/logo.png"
      }
    },
    "datePublished": "2025-06-20",
    "dateModified": "2025-08-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vegax.ai/blog/debt-collection-laws-orange-county"
    },
    "articleSection": "Consumer Rights",
    "keywords": ["debt collection laws", "Orange County consumer rights", "FDCPA", "Rosenthal Act", "debt collector harassment"],
    "about": [
      {
        "@type": "Thing",
        "name": "Debt Collection Laws",
        "description": "Legal regulations governing debt collection practices"
      },
      {
        "@type": "Place",
        "name": "Orange County",
        "description": "County in California with specific consumer protection laws"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Orange County Debt Collection Laws: Know Your Rights | VegaX</title>
        <meta name="description" content="Complete guide to debt collection regulations in Orange County, including illegal practices, consumer protections, and how to file complaints." />
        <meta name="keywords" content="debt collection laws, Orange County consumer rights, FDCPA, Rosenthal Act, debt collector harassment" />
        <meta name="author" content="VegaX Consumer Rights Team" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Orange County Debt Collection Laws: Know Your Rights" />
        <meta property="og:description" content="Complete guide to debt collection regulations in Orange County, including illegal practices, consumer protections, and how to file complaints." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vegax.ai/blog/debt-collection-laws-orange-county" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orange County Debt Collection Laws: Know Your Rights" />
        <meta name="twitter:description" content="Complete guide to debt collection regulations in Orange County, including illegal practices, consumer protections, and how to file complaints." />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-white transition-colors mb-8 z-10 relative">
            <ArrowLeft className="w-4 h-4" />Back to Resources</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-mono">CONSUMER RIGHTS</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Orange County Debt Collection Laws:<br />
            <span className="font-mono text-3xl lg:text-4xl">Know Your Rights</span>
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>June 20, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>VegaX Consumer Rights Team</span></div>
          </div>
          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
            Complete guide to debt collection regulations in Orange County, including illegal practices, consumer protections, and how to file complaints against abusive collectors.
          </p>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Scale className="w-8 h-8 text-black" />
                <span className="text-2xl font-bold text-black">30</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Days to Verify</h3>
              <p className="text-sm text-gray-600">Legal timeframe to request debt validation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-black" />
                <span className="text-2xl font-bold text-black">$1,000</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Max Damages</h3>
              <p className="text-sm text-gray-600">FDCPA violation penalty per incident</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-black" />
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Years Limit</h3>
              <p className="text-sm text-gray-600">California debt collection statute of limitations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
                <span className="text-2xl font-bold text-black">25%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Wage Protection</h3>
              <p className="text-sm text-gray-600">Maximum wage garnishment in California</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-black" />
              Federal and California Consumer Protections
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Orange County residents benefit from both federal Fair Debt Collection Practices Act (FDCPA) 
              and California's Rosenthal Fair Debt Collection Practices Act, providing comprehensive protection 
              against abusive debt collection practices.
            </p>

            <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 mb-12 border border-neutral-200">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-black mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-6">Prohibited Collection Practices</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-black" />
                        <span>Calling before 8 AM or after 9 PM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-black" />
                        <span>Contacting you at work if prohibited</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-black" />
                        <span>Using profane or threatening language</span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-black" />
                        <span>Misrepresenting debt amount or legal consequences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-black" />
                        <span>Continuing contact after cease and desist letter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-black" />
                        <span>Discussing debt with third parties</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Scale className="w-8 h-8 text-black" />
              California-Specific Protections
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-gray-900 mb-3">Wage Garnishment Limits</h4>
                <p className="text-sm text-gray-700">California limits wage garnishment to 25% of disposable income or amount exceeding 40x minimum wage per week, whichever is less.</p>
              </div>
              <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-gray-900 mb-3">Statute of Limitations</h4>
                <p className="text-sm text-gray-700">4 years for most consumer debts in California. Collectors cannot sue for debts older than this timeframe.</p>
              </div>
              <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-gray-900 mb-3">Asset Protection</h4>
                <p className="text-sm text-gray-700">Social Security, unemployment benefits, and certain pension benefits are protected from garnishment in California.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-black" />
              Filing Complaints in Orange County
            </h2>

            <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 mb-12 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Where to Report Violations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neutral-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Federal Trade Commission</h4>
                      <p className="text-sm text-gray-600">ftc.gov/complaint</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neutral-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Consumer Financial Protection Bureau</h4>
                      <p className="text-sm text-gray-600">consumerfinance.gov/complaint</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neutral-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">California Attorney General</h4>
                      <p className="text-sm text-gray-600">oag.ca.gov/contact/consumer-complaint-against-business-or-company</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neutral-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Orange County District Attorney</h4>
                      <p className="text-sm text-gray-600">Consumer Protection Unit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights During Debt Collection</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gradient-to-r from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                  Right to Verification
                </h4>
                <p className="text-gray-700 mb-3">Within 30 days of first contact, you can request debt validation including:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Amount of debt and creditor information</li>
                    <li>• Proof you owe the debt</li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Copy of original signed agreement</li>
                    <li>• Account statements showing charges</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-black" />
                  Right to Cease Communication
                </h4>
                <p className="text-gray-700 mb-3">You can request collectors stop contacting you by sending a written cease and desist letter. After receipt, they can only contact you to:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Confirm they received your letter</li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Notify you of specific legal action</li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Inform you they're ending collection efforts</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-black" />
                  Right to Dispute
                </h4>
                <p className="text-gray-700">You have 30 days from initial contact to dispute the debt in writing. Collection must stop until verification is provided.</p>
              </div>
            </div>

            {/* Professional CTA */}
            <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 text-white text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Being Harassed by Debt Collectors?</h3>
              <p className="text-black mb-6 text-lg">
                Get a free consultation to understand your rights and options under federal and California law.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black font-bold py-3 px-8 rounded-xl hover:bg-neutral-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Legal Guidance
              </button>
            </div>

            <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-gray-600" />
                Consumer Rights Disclaimer
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Debt collection laws are complex and change frequently. This information is for educational purposes 
                only and does not constitute legal advice. Individual situations vary significantly based on debt type, 
                collector practices, and state regulations. For specific legal questions about debt collection practices, 
                consult with qualified consumer protection attorneys or legal aid organizations. Time limits apply to 
                filing complaints and lawsuits.
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* Consultation Section */}
      <section id="consultation" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Expert Help with Debt Collection Issues</h2>
            <p className="text-lg text-gray-600">Free consultation to discuss your rights and legal options</p>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}