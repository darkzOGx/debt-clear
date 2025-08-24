import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Scale, BookOpen, AlertTriangle, CheckCircle, Shield, DollarSign, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function FdcpaConsumerProtectionOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fair Debt Collection Practices Act: Orange County Consumer Protection",
    "description": "Complete guide to FDCPA protections for Orange County residents, including rights, violations, enforcement, and how to file complaints against debt collectors.",
    "author": {
      "@type": "Organization",
      "name": "Consumer Rights Attorney"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VegaX Debt Relief",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vegax.ai/logo.png"
      }
    },
    "datePublished": "2025-06-15",
    "dateModified": "2025-08-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vegax.ai/blog/fdcpa-consumer-protection-orange-county"
    },
    "articleSection": "Consumer Rights",
    "keywords": ["FDCPA", "Fair Debt Collection Practices Act", "Orange County consumer rights", "debt collector violations", "consumer protection"],
    "about": [
      {
        "@type": "Thing",
        "name": "Fair Debt Collection Practices Act",
        "description": "Federal law protecting consumers from abusive debt collection practices"
      },
      {
        "@type": "Place",
        "name": "Orange County",
        "description": "County in California with specific consumer protection resources"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Fair Debt Collection Practices Act: Orange County Consumer Protection | VegaX</title>
        <meta name="description" content="Complete guide to FDCPA protections for Orange County residents, including rights, violations, enforcement, and how to file complaints against debt collectors." />
        <meta name="keywords" content="FDCPA, Fair Debt Collection Practices Act, Orange County consumer rights, debt collector violations, consumer protection" />
        <meta name="author" content="Consumer Rights Attorney" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Fair Debt Collection Practices Act: Orange County Consumer Protection" />
        <meta property="og:description" content="Complete guide to FDCPA protections for Orange County residents, including rights, violations, enforcement, and how to file complaints against debt collectors." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vegax.ai/blog/fdcpa-consumer-protection-orange-county" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fair Debt Collection Practices Act: Orange County Consumer Protection" />
        <meta name="twitter:description" content="Complete guide to FDCPA protections for Orange County residents, including rights, violations, enforcement, and how to file complaints against debt collectors." />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-blue-600" />
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
              CONSUMER RIGHTS
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Fair Debt Collection Practices Act:
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Orange County Consumer Protection
            </span>
          </motion.h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Consumer Rights Attorney</span>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 leading-relaxed max-w-3xl"
          >
            Understand your rights under the Fair Debt Collection Practices Act and learn how Orange County 
            residents can protect themselves from abusive debt collection practices.
          </motion.p>
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
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Scale className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-blue-700">1977</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">FDCPA Enacted</h3>
              <p className="text-sm text-gray-600">Federal law protecting consumers since 1977</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
                <span className="text-2xl font-bold text-green-700">$1,000</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Max Penalty</h3>
              <p className="text-sm text-gray-600">Statutory damages per FDCPA violation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-purple-600" />
                <span className="text-2xl font-bold text-purple-700">30</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Days to Validate</h3>
              <p className="text-sm text-gray-600">Time limit for debt validation requests</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <FileText className="w-8 h-8 text-orange-600" />
                <span className="text-2xl font-bold text-orange-700">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Year to Sue</h3>
              <p className="text-sm text-gray-600">Statute of limitations for FDCPA violations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              Understanding the Fair Debt Collection Practices Act
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Fair Debt Collection Practices Act (FDCPA) is a federal law that protects consumers from 
              abusive, deceptive, and unfair debt collection practices. For Orange County residents, this law 
              provides crucial protections against harassment and illegal collection tactics.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Key FDCPA Protections</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Communication Rules
                  </h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• No calls before 8 AM or after 9 PM</li>
                    <li>• Cannot contact you at work if prohibited</li>
                    <li>• Must stop calling if you request it in writing</li>
                    <li>• Cannot discuss debt with third parties</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Required Disclosures
                  </h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Must identify themselves as debt collectors</li>
                    <li>• Provide debt validation notice</li>
                    <li>• State original creditor information</li>
                    <li>• Explain your right to dispute the debt</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              Prohibited Collection Practices
            </h2>

            <div className="space-y-8 mb-12">
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-6">Harassment and Abuse</h3>
                <p className="text-red-700 mb-4">
                  Debt collectors cannot engage in conduct designed to harass, oppress, or abuse you:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-red-700">
                    <li>• Using profane or obscene language</li>
                    <li>• Threatening violence or harm</li>
                    <li>• Repeatedly calling to annoy you</li>
                  </ul>
                  <ul className="space-y-2 text-red-700">
                    <li>• Publishing lists of debtors</li>
                    <li>• Calling without identifying themselves</li>
                    <li>• Making excessive or continuous calls</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-6">False or Misleading Representations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Identity Deception</h4>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Falsely claiming to be attorneys</li>
                      <li>• Impersonating government officials</li>
                      <li>• Using fake law firm names</li>
                      <li>• Misrepresenting legal authority</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Debt Misrepresentation</h4>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Falsifying debt amounts</li>
                      <li>• Adding unauthorized fees</li>
                      <li>• Misrepresenting legal consequences</li>
                      <li>• False credit reporting threats</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-800 mb-6">Unfair Practices</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Collecting more than legally owed</li>
                    <li>• Depositing post-dated checks early</li>
                    <li>• Threatening to take property illegally</li>
                  </ul>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Using deceptive communication practices</li>
                    <li>• Continuing collection on disputed debts</li>
                    <li>• Taking or threatening illegal action</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Scale className="w-8 h-8 text-green-600" />
              Your Rights Under the FDCPA
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Debt Validation Rights
                </h3>
                <p className="text-green-700 mb-3">Within 30 days of first contact, you can request:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-green-700">
                    <li>• Verification of debt amount</li>
                    <li>• Name of original creditor</li>
                  </ul>
                  <ul className="space-y-2 text-green-700">
                    <li>• Proof of collector's authority</li>
                    <li>• Account documentation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Dispute Rights
                </h3>
                <p className="text-blue-700 mb-3">If you dispute the debt in writing within 30 days:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-blue-700">
                    <li>• Collection must stop until verified</li>
                    <li>• Collector must provide proof</li>
                  </ul>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Cannot report to credit bureaus</li>
                    <li>• Cannot pursue legal action</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-purple-800 mb-4">Cease Communication Rights</h3>
                <p className="text-purple-700">You can stop most collection calls by sending a written cease and desist letter. After receiving it, collectors can only contact you to confirm receipt or notify you of specific legal action.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Orange County FDCPA Enforcement Resources</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Federal Agencies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Consumer Financial Protection Bureau</h4>
                    <p className="text-sm text-blue-700">Primary federal enforcement agency</p>
                    <p className="text-xs text-gray-600">consumerfinance.gov/complaint</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Federal Trade Commission</h4>
                    <p className="text-sm text-blue-700">Consumer protection and education</p>
                    <p className="text-xs text-gray-600">ftc.gov/complaint</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Local Resources</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Legal Aid Society of Orange County</h4>
                    <p className="text-sm text-orange-700">Free legal assistance for qualified residents</p>
                    <p className="text-xs text-gray-600">(714) 571-5200</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Orange County Bar Association</h4>
                    <p className="text-sm text-orange-700">Attorney referral services</p>
                    <p className="text-xs text-gray-600">ocbar.org</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Damages and Remedies for FDCPA Violations</h2>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-12 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-6">Available Remedies</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Statutory Damages
                  </h4>
                  <p className="text-sm text-green-700 mb-2">Up to $1,000 per violation</p>
                  <p className="text-xs text-gray-600">Regardless of actual damages</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <h4 className="font-bold text-gray-900 mb-2">Actual Damages</h4>
                  <p className="text-sm text-green-700 mb-2">Compensation for losses</p>
                  <p className="text-xs text-gray-600">Medical bills, lost wages, etc.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <h4 className="font-bold text-gray-900 mb-2">Attorney Fees</h4>
                  <p className="text-sm text-green-700 mb-2">Legal costs covered</p>
                  <p className="text-xs text-gray-600">Court costs and attorney fees</p>
                </div>
              </div>
            </div>

            {/* Professional CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Protect Your Consumer Rights</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Don't let debt collectors violate your rights. Get expert guidance on FDCPA protections 
                and learn how to fight back against illegal collection practices.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Know Your Rights
              </button>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-gray-600" />
                Legal Information Disclaimer
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                This information about the Fair Debt Collection Practices Act is for educational purposes 
                only and does not constitute legal advice. FDCPA violations can be complex legal matters 
                requiring professional evaluation. Individual situations vary, and specific legal questions 
                should be addressed by qualified consumer protection attorneys. Time limits apply to filing 
                FDCPA violation lawsuits and complaints.
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* Consultation Section */}
      <section id="consultation" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enforce Your FDCPA Rights</h2>
            <p className="text-lg text-gray-600">Get expert help with debt collector violations</p>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}