import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Shield, Phone, AlertTriangle, FileText, Users, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function DebtCollectorHarassmentRightsOrangeCounty() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Orange County Debt Collector Harassment: Know Your Rights and Remedies",
    "description": "Complete guide to debt collector harassment protections in Orange County, including legal remedies, documentation tips, and how to stop abusive collection practices.",
    "author": {
      "@type": "Organization",
      "name": "Consumer Rights Attorney"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OC Debt Center Debt Relief",
      "logo": {
        "@type": "ImageObject",
        "url": "https://orangecountydebtcenter.com/logo.png"
      }
    },
    "datePublished": "2025-06-15",
    "dateModified": "2025-08-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://orangecountydebtcenter.com/blog/debt-collector-harassment-rights-orange-county"
    },
    "articleSection": "Consumer Rights",
    "keywords": ["debt collector harassment", "Orange County consumer rights", "FDCPA", "Rosenthal Act", "debt collection violations"],
    "about": [
      {
        "@type": "Thing",
        "name": "Debt Collector Harassment",
        "description": "Illegal practices by debt collection agencies"
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
        <title>Orange County Debt Collector Harassment: Know Your Rights | OC Debt Center</title>
        <meta name="description" content="Complete guide to debt collector harassment protections in Orange County, including legal remedies, documentation tips, and how to stop abusive collection practices." />
        <meta name="keywords" content="debt collector harassment, Orange County consumer rights, FDCPA, Rosenthal Act, debt collection violations" />
        <meta name="author" content="Consumer Rights Attorney" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Orange County Debt Collector Harassment: Know Your Rights and Remedies" />
        <meta property="og:description" content="Complete guide to debt collector harassment protections in Orange County, including legal remedies, documentation tips, and how to stop abusive collection practices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://orangecountydebtcenter.com/blog/debt-collector-harassment-rights-orange-county" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orange County Debt Collector Harassment: Know Your Rights and Remedies" />
        <meta name="twitter:description" content="Complete guide to debt collector harassment protections in Orange County, including legal remedies, documentation tips, and how to stop abusive collection practices." />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
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
              CONSUMER RIGHTS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Orange County Debt Collector Harassment:
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Know Your Rights and Remedies</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>13 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Consumer Rights Attorney</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            Orange County residents have strong legal protections against debt collector harassment. 
            Learn your rights, document violations, and discover remedies that can provide monetary compensation.
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
              className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Phone className="w-8 h-8 text-black" />
                <span className="text-2xl font-bold text-black">7</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Max Calls/Week</h3>
              <p className="text-sm text-gray-600">Maximum calls allowed under California law</p>
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
              <h3 className="font-semibold text-gray-900 mb-2">Per Violation</h3>
              <p className="text-sm text-gray-600">FDCPA damages for each harassment incident</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <FileText className="w-8 h-8 text-black" />
                <span className="text-2xl font-bold text-black">30</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Days to Validate</h3>
              <p className="text-sm text-gray-600">Time limit to request debt validation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-black to-neutral-900 rounded-2xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-black" />
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Protection Acts</h3>
              <p className="text-sm text-gray-600">Federal FDCPA + California Rosenthal Act</p>
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
              Legal Protections for Orange County Residents
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Orange County residents benefit from comprehensive protection under both federal and California 
              state laws, providing multiple layers of defense against debt collector harassment and abuse.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Federal Protections
                </h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-black" />
                    <span><strong>Fair Debt Collection Practices Act (FDCPA):</strong> Federal law prohibiting abusive practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-black" />
                    <span><strong>Fair Credit Reporting Act (FCRA):</strong> Protects credit report accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-black" />
                    <span><strong>Telephone Consumer Protection Act (TCPA):</strong> Limits robocalls and texts</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  California State Protections
                </h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-black" />
                    <span><strong>Rosenthal Fair Debt Collection Practices Act:</strong> Broader than federal FDCPA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-black" />
                    <span><strong>California Consumer Privacy Act:</strong> Protects personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-black" />
                    <span><strong>Unruh Civil Rights Act:</strong> Anti-discrimination protections</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-black" />
              Prohibited Debt Collection Practices
            </h2>

            <div className="space-y-8 mb-12">
              <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-6">Communication Harassment</h3>
                <p className="text-black mb-4">
                  Collectors cannot harass Orange County residents through excessive or abusive communication:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 mt-1 text-black" />
                      <span><strong>Excessive Calls:</strong> More than 7 calls per week to any phone number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 mt-1 text-black" />
                      <span><strong>Early/Late Calls:</strong> Before 8 AM or after 9 PM (California time)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 mt-1 text-black" />
                      <span><strong>Workplace Calls:</strong> After being told employer prohibits such calls</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 mt-1 text-black" />
                      <span><strong>Third Party Contact:</strong> Discussing debt with family, friends, or neighbors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 mt-1 text-black" />
                      <span><strong>Abusive Language:</strong> Profanity, threats, or intimidating language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 mt-1 text-black" />
                      <span><strong>False Threats:</strong> Claiming legal action they won't take</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-6">Deceptive and False Practices</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Identity Deception</h4>
                    <ul className="space-y-2 text-black">
                      <li>• Claiming to be attorneys when they're not</li>
                      <li>• Impersonating government officials</li>
                      <li>• Using fake law firm names</li>
                      <li>• Misrepresenting company affiliation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Financial Misrepresentation</h4>
                    <ul className="space-y-2 text-black">
                      <li>• Inflating debt amounts with fake fees</li>
                      <li>• Claiming debt is older/newer than it is</li>
                      <li>• Misrepresenting payment terms</li>
                      <li>• False credit report threats</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-6">Unfair Collection Practices</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-black">
                    <li>• <strong>Public Embarrassment:</strong> Attempting to publicly shame debtors</li>
                    <li>• <strong>Postcard Communications:</strong> Sending debt information on postcards</li>
                    <li>• <strong>Deposit Threats:</strong> Threatening to deposit post-dated checks early</li>
                  </ul>
                  <ul className="space-y-2 text-black">
                    <li>• <strong>Property Threats:</strong> Threatening to seize property they cannot legally take</li>
                    <li>• <strong>Arrest Threats:</strong> Claiming debtor will be arrested for civil debt</li>
                    <li>• <strong>False Urgency:</strong> Creating artificial deadlines or emergency situations</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Phone className="w-8 h-8 text-black" />
              Call Time and Frequency Restrictions
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gradient-to-r from-black to-neutral-900 rounded-xl p-6 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-4">California Call Time Rules</h3>
                <p className="text-black mb-4">
                  Orange County residents are protected by specific call timing rules:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Permitted Hours</h4>
                    <ul className="space-y-2 text-black">
                      <li>• Monday-Saturday: 8 AM to 9 PM</li>
                      <li>• Sunday: 1 PM to 5 PM</li>
                      <li>• Based on debtor's time zone</li>
                      <li>• Holidays generally prohibited</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Frequency Limits</h4>
                    <ul className="space-y-2 text-black">
                      <li>• Maximum 7 calls per week</li>
                      <li>• 7-day period is rolling calendar</li>
                      <li>• Includes all phone numbers</li>
                      <li>• Text messages count as calls</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Remedies for Orange County Residents</h2>

            <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 mb-12 border border-neutral-200">
              <h3 className="text-xl font-bold text-black mb-6">Monetary Damages Available</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-black" />
                    Federal FDCPA Damages
                  </h4>
                  <ul className="space-y-2 text-black">
                    <li>• Up to $1,000 statutory damages</li>
                    <li>• Actual damages (lost wages, medical bills)</li>
                    <li>• Attorney fees and costs</li>
                    <li>• Additional punitive damages possible</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-black" />
                    California Rosenthal Act
                  </h4>
                  <ul className="space-y-2 text-black">
                    <li>• Up to $1,000 per violation</li>
                    <li>• Actual damages proven</li>
                    <li>• Attorney fees recovery</li>
                    <li>• Enhanced damages for willful violations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional CTA */}
            <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 text-white text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Stop Debt Collector Harassment Now</h3>
              <p className="text-black mb-6 text-lg">
                Don't tolerate illegal debt collection practices. Get immediate help stopping harassment 
                and learn about your rights to compensation under federal and California law.
              </p>
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black font-bold py-3 px-8 rounded-xl hover:bg-neutral-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Legal Protection Help
              </button>
            </div>

            <div className="bg-gradient-to-r from-black to-neutral-900 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-gray-600" />
                Legal Disclaimer
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Debt collection laws are complex and vary by situation. This information is for educational 
                purposes only and does not constitute legal advice. Individual circumstances may require 
                different approaches. For specific legal questions about debt collection harassment, consult 
                with qualified consumer protection attorneys. Time limits apply to filing complaints and lawsuits.
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* Consultation Section */}
      <section id="consultation" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stop Harassment & Get Legal Protection</h2>
            <p className="text-lg text-gray-600">Free consultation to discuss your rights and legal options</p>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}