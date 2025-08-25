import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, GraduationCap, BookOpen, Shield, DollarSign, TrendingUp, FileCheck, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function OrangeCountyStudentLoanForgiveness2025() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Orange County Student Loan Forgiveness Programs 2025 | Complete Guide</title>
        <meta name="description" content="Complete guide to student loan forgiveness programs for Orange County residents in 2025. PSLF, teacher forgiveness, SAVE plan, and state programs. Maximize your loan forgiveness potential." />
        <meta name="keywords" content="Orange County student loan forgiveness, PSLF, teacher loan forgiveness, SAVE plan, California student loans, loan discharge programs" />
        <meta property="og:title" content="Orange County Student Loan Forgiveness Programs 2025 | Complete Guide" />
        <meta property="og:description" content="Complete guide to student loan forgiveness programs for Orange County residents. PSLF, teacher forgiveness, SAVE plan, and more." />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ocdebtcenter.com/blog/orange-county-student-loan-forgiveness-2025" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Orange County Student Loan Forgiveness Programs Complete 2025 Guide",
            "description": "Complete guide to student loan forgiveness programs for Orange County residents in 2025. PSLF, teacher forgiveness, SAVE plan, and state programs. Maximize your loan forgiveness potential.",
            "author": {
              "@type": "Organization",
              "name": "OC Debt Center Holdings"
            },
            "publisher": {
              "@type": "Organization",
              "name": "OC Debt Center Holdings",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ocdebtcenter.com/logo.png"
              }
            },
            "datePublished": "2025-08-20",
            "dateModified": "2025-08-20",
            "mainEntityOfPage": "https://ocdebtcenter.com/blog/orange-county-student-loan-forgiveness-2025"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
              STUDENT LOAN FORGIVENESS
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Orange County
            <br />
            <span className="text-neutral-300">Student Loan Forgiveness</span>
          </h1>

          <p className="text-xl lg:text-2xl text-neutral-300 mb-8 max-w-3xl leading-relaxed">
            Complete 2025 guide to forgiveness programs and discharge options for Orange County borrowers
          </p>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 20, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Student Loan Specialist</span>
            </div>
          </div>

          <button 
            onClick={scrollToConsultation}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
          >
            Check My Forgiveness Options
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-neutral-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-neutral-50 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">278K</div>
                  <div className="text-gray-600 text-sm">OC Student Borrowers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-neutral-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-neutral-50 rounded-xl">
                  <DollarSign className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">$2.1B</div>
                  <div className="text-gray-600 text-sm">Total OC Student Debt</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-neutral-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-neutral-50 rounded-xl">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">18,400</div>
                  <div className="text-gray-600 text-sm">PSLF Eligible Jobs</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-neutral-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-neutral-50 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">73%</div>
                  <div className="text-gray-600 text-sm">Forgiveness Success Rate</div>
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
              Orange County's 278,000 student loan borrowers hold $2.1 billion in federal student debt. With numerous forgiveness programs available and new options launched in 2025, many borrowers can eliminate significant portions of their debt through strategic program enrollment and employer-based forgiveness opportunities.
            </div>

            {/* PSLF Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 border border-neutral-200 p-8 mb-12 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Public Service Loan Forgiveness (PSLF) in Orange County
              </h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orange County offers exceptional PSLF opportunities with 18,400+ qualifying public service jobs across government agencies, hospitals, schools, and nonprofits.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Major OC PSLF Employers</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Orange County Government:</strong> 3,200+ positions</li>
                    <li>• <strong>UCI Health System:</strong> 2,800+ positions</li>
                    <li>• <strong>Santa Ana USD:</strong> 1,900+ positions</li>
                    <li>• <strong>Anaheim Union High:</strong> 1,400+ positions</li>
                    <li>• <strong>CHOC Children's Hospital:</strong> 800+ positions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">2025 PSLF Improvements</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• <strong>Streamlined Processing:</strong> 90-day average</li>
                    <li>• <strong>Credit Rehabilitation:</strong> Past payment corrections</li>
                    <li>• <strong>Employer Verification:</strong> Simplified process</li>
                    <li>• <strong>Payment Counting:</strong> Retroactive corrections</li>
                    <li>• <strong>Communication:</strong> Real-time status updates</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-neutral-200 rounded-lg">
                <h4 className="font-semibold text-black mb-2">PSLF Orange County Success Rate</h4>
                <p className="text-sm text-neutral-700">
                  Orange County PSLF applicants achieve a 73% approval rate, significantly higher than the 67% national average, due to strong documentation practices and employer cooperation.
                </p>
              </div>
            </motion.div>

            {/* Teacher Loan Forgiveness */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Teacher Loan Forgiveness Programs</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orange County teachers have access to multiple forgiveness programs, with many schools qualifying for enhanced benefits due to Title I status and teacher shortage areas.
              </p>

              <div className="space-y-6">
                <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">Federal Teacher Loan Forgiveness</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Qualifying Orange County Schools</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li>• Santa Ana Unified (98% qualify)</li>
                        <li>• Garden Grove Unified (76% qualify)</li>
                        <li>• Anaheim Elementary (84% qualify)</li>
                        <li>• Westminster School District (91% qualify)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-3">Forgiveness Amounts</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li>• <strong>General Education:</strong> Up to $5,000</li>
                        <li>• <strong>Math/Science:</strong> Up to $17,500</li>
                        <li>• <strong>Special Education:</strong> Up to $17,500</li>
                        <li>• <strong>ESL Teachers:</strong> Up to $17,500</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-3">California Teacher Loan Assumption Program (APLE)</h3>
                  <p className="text-black mb-3">
                    California's state program provides additional loan forgiveness for teachers in high-need schools:
                  </p>
                  <ul className="space-y-2 text-sm text-black">
                    <li>• Up to $19,000 total forgiveness</li>
                    <li>• $11,000 for first two years</li>
                    <li>• $8,000 for years three and four</li>
                    <li>• Combines with federal programs</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* SAVE Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">SAVE Plan: The New Income-Driven Repayment</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                The SAVE plan, replacing REPAYE in 2024-2025, offers the most generous repayment terms and forgiveness timeline for Orange County borrowers.
              </p>

              <div className="bg-amber-50 border border-amber-200 p-8 mb-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-6">SAVE Plan Benefits</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Payment Calculation</h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>• 5% of discretionary income (vs. 10% on other plans)</li>
                      <li>• Increased income protection: $32,800 for single filers</li>
                      <li>• $0 payments for borrowers earning ≤ $32,800</li>
                      <li>• No capitalized interest ever</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Forgiveness Timeline</h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>• 10 years for loans ≤ $12,000</li>
                      <li>• 20 years for undergraduate loans</li>
                      <li>• 25 years for graduate loans</li>
                      <li>• Earlier forgiveness for smaller balances</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
                <h4 className="font-semibold text-black mb-3">Orange County SAVE Plan Example</h4>
                <div className="space-y-2 text-sm text-neutral-700">
                  <p><strong>Borrower Profile:</strong> Irvine resident, $50,000 income, $35,000 student loans</p>
                  <p><strong>SAVE Payment:</strong> $71/month (vs. $291 on Standard Plan)</p>
                  <p><strong>Interest Coverage:</strong> Payment covers all accruing interest</p>
                  <p><strong>Forgiveness:</strong> Remaining balance forgiven after 20 years</p>
                </div>
              </div>
            </motion.div>

            {/* Orange County Specific Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Healthcare Worker Programs</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Orange County's robust healthcare sector offers numerous loan repayment assistance programs for medical professionals working in underserved areas.
              </p>

              <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-6">Healthcare Loan Repayment Programs</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">National Health Service Corps</h4>
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-neutral-700">
                      <div>
                        <p className="mb-2"><strong>Orange County Sites:</strong></p>
                        <ul className="space-y-1">
                          <li>• Santa Ana community health centers</li>
                          <li>• Anaheim family health clinics</li>
                          <li>• Westminster community care</li>
                          <li>• Garden Grove health services</li>
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2"><strong>Loan Repayment:</strong></p>
                        <ul className="space-y-1">
                          <li>• Up to $50,000 for 2-year commitment</li>
                          <li>• Additional $25,000/year extension</li>
                          <li>• Tax-free loan repayment</li>
                          <li>• Primary care and mental health focus</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-3">California Health Corps</h4>
                    <div className="text-sm text-neutral-700">
                      <p className="mb-2">State program providing loan repayment for healthcare workers in Health Professional Shortage Areas:</p>
                      <ul className="space-y-1">
                        <li>• Up to $25,000 annually</li>
                        <li>• 2-year minimum commitment</li>
                        <li>• Covers dentists, physicians, nurse practitioners</li>
                        <li>• Priority for Orange County underserved areas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

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

      {/* Consultation Form */}
      <div id="consultation">
        <ConsultationForm />
      </div>
    </div>
  );
}