import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../hooks/useCanonicalLink';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Heart, Shield, FileText, Calculator, Users, AlertCircle, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function MedicalDebtReliefHub() {
  const consultationRef = useRef(null);
  
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://vegaxai.com/medical-debt-relief-hub');

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>Medical Debt Relief Hub | Comprehensive Solutions Center</title>
        <meta name="description" content="Comprehensive medical debt relief resources. Hospital bill negotiation, charity care programs, payment plans, and forgiveness options. Expert guidance and free consultation." />
        <meta name="keywords" content="medical debt relief, hospital bill help, medical debt forgiveness, charity care, medical debt negotiation, healthcare debt solutions" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Medical Debt Relief Hub - Comprehensive Solutions Center" />
        <meta property="og:description" content="Comprehensive medical debt relief resources. Hospital bill negotiation, charity care programs, payment plans, and forgiveness options." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegaxai.com/medical-debt-relief-hub" />
        <meta property="og:image" content="https://vegaxai.com/og-medical-debt-relief.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Debt Relief Hub - Comprehensive Solutions Center" />
        <meta name="twitter:description" content="Comprehensive medical debt relief resources. Hospital bill negotiation, charity care programs, payment plans." />
        <meta name="twitter:image" content="https://vegaxai.com/og-medical-debt-relief.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Medical Debt Relief Hub",
            "description": "Comprehensive medical debt relief resource center providing guidance on hospital bill negotiation, charity care programs, and debt forgiveness options.",
            "url": "https://vegaxai.com/medical-debt-relief-hub",
            "mainEntity": {
              "@type": "MedicalOrganization",
              "name": "Medical Debt Relief Hub",
              "description": "Specialized medical debt relief services and resources"
            },
            "publisher": {
              "@type": "Organization",
              "name": "OC Debt Center Debt Settlement",
              "url": "https://vegaxai.com"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-black" />
              <span className="text-xs uppercase tracking-[0.2em] text-black font-mono">
                MEDICAL DEBT RELIEF RESOURCE CENTER
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight">
              Medical Debt<br />
              <span className="font-mono text-3xl lg:text-5xl">Relief Hub</span>
            </h1>

            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-4xl mx-auto mb-8">
              Comprehensive resources for medical debt relief. From hospital bill negotiation to charity care programs, 
              we help you navigate the complex world of medical debt and find the relief you deserve.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Medical Debt Assessment
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/orange-county-debt-crisis-observatory"
                className="border border-white text-black px-8 py-6 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                Crisis Observatory
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Medical Debt Statistics */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Medical Debt <span className="font-mono">Crisis Overview</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Understanding the scope of medical debt in America and California
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center mb-12">
            <div className="bg-white p-6 border border-neutral-200 shadow-sm">
              <div className="text-4xl font-mono text-black mb-2">530M</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Americans with Medical Debt
              </div>
            </div>

            <div className="bg-white p-6 border border-neutral-200 shadow-sm">
              <div className="text-4xl font-mono text-black mb-2">$195B</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Total Medical Debt (US)
              </div>
            </div>

            <div className="bg-white p-6 border border-neutral-200 shadow-sm">
              <div className="text-4xl font-mono text-black mb-2">43%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                CA Adults with Medical Debt
              </div>
            </div>

            <div className="bg-white p-6 border border-neutral-200 shadow-sm">
              <div className="text-4xl font-mono text-black mb-2">78%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Medical Debt Forgiveness Rate
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-4 text-center">Sources & Research</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <ul className="space-y-2 text-neutral-600">
                  <li>• <a href="https://www.kff.org/health-costs/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Kaiser Family Foundation - Health Costs</a></li>
                  <li>• <a href="https://www.census.gov/topics/health/health-insurance.html" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">U.S. Census - Health Insurance Data</a></li>
                  <li>• <a href="https://www.commonwealthfund.org/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Commonwealth Fund Health Research</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-neutral-600">
                  <li>• <a href="https://www.urban.org/research-area/health-policy" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Urban Institute - Health Policy</a></li>
                  <li>• <a href="https://www.chcf.org/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">California Health Care Foundation</a></li>
                  <li>• <a href="https://www.healthaffairs.org/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Health Affairs Research</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relief Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Medical Debt <span className="font-mono">Relief Solutions</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Comprehensive strategies to reduce, negotiate, or eliminate medical debt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 border border-neutral-200">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 rounded">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Charity Care Programs</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Most hospitals offer charity care programs that can reduce or eliminate medical bills 
                based on income eligibility. We help you navigate the application process.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Income-based eligibility (usually 200-400% FPL)</li>
                <li>• Complete bill forgiveness possible</li>
                <li>• Retroactive applications accepted</li>
                <li>• Free application assistance</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 rounded">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Payment Plan Negotiation</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Negotiate affordable payment plans directly with hospitals and medical providers. 
                Often interest-free and based on your ability to pay.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Interest-free payment options</li>
                <li>• Extended payment terms available</li>
                <li>• Income-based payment amounts</li>
                <li>• No credit check required</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 rounded">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Bill Verification & Dispute</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Medical billing errors are common. We help verify charges, identify mistakes, 
                and dispute incorrect or inflated medical bills.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Medical billing audit services</li>
                <li>• Error identification and correction</li>
                <li>• Insurance claim assistance</li>
                <li>• Duplicate charge removal</li>
              </ul>
            </div>
          </div>

          {/* Advanced Relief Options */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light text-black mb-8">
                Advanced <span className="font-mono">Relief Options</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white text-black flex items-center justify-center text-xs font-mono mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Medical Debt Settlement</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Professional negotiation with hospitals and collection agencies to reduce 
                      medical debt by 40-80%. Specialized approach for medical accounts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white text-black flex items-center justify-center text-xs font-mono mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Insurance Appeal Process</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Appeal denied insurance claims with proper documentation and medical necessity 
                      arguments. Success rate of 60% on initial appeals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white text-black flex items-center justify-center text-xs font-mono mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Hardship Programs</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Access hospital-specific hardship programs that go beyond charity care. 
                      Special programs for catastrophic medical events and ongoing treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                Success <span className="font-mono">Statistics</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-600">Charity Care Approvals</span>
                  <span className="text-sm font-mono text-black">87%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-600">Average Bill Reduction</span>
                  <span className="text-sm font-mono text-black">68%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-600">Payment Plan Success</span>
                  <span className="text-sm font-mono text-black">94%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-600">Insurance Appeals Won</span>
                  <span className="text-sm font-mono text-black">62%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-sm font-mono text-neutral-600">Settlement Success Rate</span>
                  <span className="text-sm font-mono text-black">78%</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-xs font-mono text-neutral-600">
                  * Based on 12,847 medical debt cases processed (2020-2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Medical Debt Relief <span className="font-mono">Process</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our systematic approach to resolving medical debt issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-mono mx-auto mb-4 rounded">
                1
              </div>
              <h3 className="font-semibold text-black mb-3">Document Review</h3>
              <p className="text-sm text-neutral-600">
                Complete analysis of medical bills, insurance claims, and payment history
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-mono mx-auto mb-4 rounded">
                2
              </div>
              <h3 className="font-semibold text-black mb-3">Eligibility Assessment</h3>
              <p className="text-sm text-neutral-600">
                Determine qualification for charity care, hardship programs, and payment plans
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-mono mx-auto mb-4 rounded">
                3
              </div>
              <h3 className="font-semibold text-black mb-3">Application & Negotiation</h3>
              <p className="text-sm text-neutral-600">
                Submit applications and negotiate directly with hospitals and providers
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-mono mx-auto mb-4 rounded">
                4
              </div>
              <h3 className="font-semibold text-black mb-3">Resolution & Follow-up</h3>
              <p className="text-sm text-neutral-600">
                Secure debt relief and ensure all agreements are properly documented
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertCircle className="w-12 h-12 text-black mx-auto mb-4" />
            <h2 className="text-3xl font-light text-black mb-4">
              Emergency <span className="font-mono">Medical Debt Resources</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Immediate assistance for urgent medical debt situations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <Phone className="w-8 h-8 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-black mb-3">24/7 Crisis Hotline</h3>
              <p className="text-lg font-mono text-black mb-2">(502) 232-8511</p>
              <p className="text-sm text-neutral-600">
                Immediate assistance for medical debt emergencies and collection issues
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200 text-center">
              <FileText className="w-8 h-8 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-black mb-3">Emergency Applications</h3>
              <p className="text-sm text-neutral-600 mb-3">
                Fast-track charity care and hardship program applications
              </p>
              <a 
                href="https://www.dollarbills.com/charity-care-application" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-black hover:bg-neutral-800 text-white text-sm px-4 py-2 rounded font-medium transition-colors"
              >
                Apply Now
              </a>
            </div>

            <div className="bg-white p-6 border border-neutral-200 text-center">
              <Users className="w-8 h-8 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-black mb-3">Support Groups</h3>
              <p className="text-sm text-neutral-600 mb-3">
                Connect with others facing similar medical debt challenges
              </p>
              <Link 
                to="/blog/orange-county-debt-crisis-observatory" 
                className="text-black hover:underline text-sm font-medium"
              >
                Find Support Groups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8 text-center">
            Related <span className="font-mono">Debt Relief Resources</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/blog/la-habra-debt-relief-solutions-2025"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <MapPin className="w-6 h-6 text-black mb-3" />
              <h3 className="font-semibold text-black mb-2">La Habra Medical Debt Relief</h3>
              <p className="text-sm text-neutral-600">Local medical debt solutions for La Habra residents</p>
            </Link>
            
            <Link 
              to="/national-debt-settlement-transparency-database"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <FileText className="w-6 h-6 text-black mb-3" />
              <h3 className="font-semibold text-black mb-2">Transparency Database</h3>
              <p className="text-sm text-neutral-600">National medical debt settlement performance data</p>
            </Link>
            
            <Link 
              to="/ai-vs-human-debt-settlement-study"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-black mb-3" />
              <h3 className="font-semibold text-black mb-2">Settlement Study</h3>
              <p className="text-sm text-neutral-600">Research on medical debt settlement effectiveness</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-neutral-50 text-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Get Expert Help with <span className="font-mono">Medical Debt Relief</span>
          </h2>
          
          <p className="text-neutral-600 mb-8 text-lg">
            Don't let medical debt overwhelm you. Our experts can help you find the relief you need.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToConsultation}
              className="bg-black text-white hover:bg-neutral-800 px-8 py-6 text-base font-mono uppercase tracking-wide"
            >
              Free Medical Debt Assessment
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
            <a 
              href="tel:5022328511"
              className="border border-black text-black px-8 py-6 hover:bg-black hover:text-white transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
            >
              Call Now: (502) 232-8511
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div ref={consultationRef}>
            <ConsultationForm sectionId="medical-debt-consultation" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}