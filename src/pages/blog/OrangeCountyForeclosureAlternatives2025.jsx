import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Home, Shield, FileX, AlertTriangle, DollarSign, Clock3, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function OrangeCountyForeclosureAlternatives2025() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Orange County Foreclosure Alternatives 2025 | Save Your Home Today</title>
        <meta name="description" content="Save your Orange County home from foreclosure in 2025. Explore loan modifications, short sales, deed in lieu, and emergency assistance programs. Expert guidance available." />
        <meta name="keywords" content="Orange County foreclosure alternatives, loan modification, short sale, deed in lieu, foreclosure prevention, home saving programs" />
        <meta property="og:title" content="Orange County Foreclosure Alternatives 2025 | Save Your Home" />
        <meta property="og:description" content="Save your Orange County home from foreclosure. Expert guidance on loan modifications, short sales, and foreclosure prevention programs." />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ocdebtcenter.com/blog/orange-county-foreclosure-alternatives-2025" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Orange County Foreclosure Alternatives Save Your Home in 2025",
            "description": "Save your Orange County home from foreclosure in 2025. Explore loan modifications, short sales, deed in lieu, and emergency assistance programs. Expert guidance available.",
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
            "datePublished": "2025-08-15",
            "dateModified": "2025-08-15",
            "mainEntityOfPage": "https://ocdebtcenter.com/blog/orange-county-foreclosure-alternatives-2025"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
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
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
              FORECLOSURE PREVENTION
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Save Your
            <br />
            <span className="text-neutral-300">Orange County Home</span>
          </h1>

          <p className="text-xl lg:text-2xl text-neutral-300 mb-8 max-w-3xl leading-relaxed">
            Proven foreclosure alternatives and emergency assistance programs for 2025
          </p>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>17 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>OC Debt Center Housing Team</span>
            </div>
          </div>

          <button 
            onClick={scrollToConsultation}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
          >
            Save My Home Now
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
                  <Home className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">2,847</div>
                  <div className="text-gray-600 text-sm">Q1 2025 Foreclosure Filings</div>
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
                  <Clock3 className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">127</div>
                  <div className="text-gray-600 text-sm">Days Average Timeline</div>
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
                  <DollarSign className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">$1.1M</div>
                  <div className="text-gray-600 text-sm">Median Home Value at Risk</div>
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
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">89%</div>
                  <div className="text-gray-600 text-sm">Prevention Success Rate</div>
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
              Despite Orange County's strong economy, rising housing costs and interest rate increases have put many homeowners at risk. With median home prices exceeding $1.1 million, even high-income families can face foreclosure due to job loss, medical emergencies, or divorce. Discover your foreclosure prevention options today.
            </div>

            {/* Orange County Foreclosure Crisis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 border border-neutral-200 p-8 mb-12 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Foreclosure Crisis Overview</h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-mono text-black mb-2">2,847</div>
                  <div className="text-sm text-black">Foreclosure Filings (Q1 2025)</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-black mb-2">127</div>
                  <div className="text-sm text-black">Days Average Timeline</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-black mb-2">$1.1M</div>
                  <div className="text-sm text-black">Median Home Value at Risk</div>
                </div>
              </div>
            </motion.div>

            {/* California Foreclosure Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">California Foreclosure Process Timeline</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Understanding California's non-judicial foreclosure process helps Orange County homeowners recognize critical deadlines and opportunities for intervention.
              </p>

              <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-6">Foreclosure Timeline Steps</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono rounded-full">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Default Notice (Day 1-30)</h4>
                      <p className="text-sm text-neutral-600">
                        Lender sends Notice of Default after 30+ days of missed payments. Homeowner has 3 months to cure default or seek alternatives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono rounded-full">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Notice of Trustee Sale (Day 90)</h4>
                      <p className="text-sm text-neutral-600">
                        If default isn't cured, lender files Notice of Trustee Sale. This begins 21-day notice period before auction.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-mono rounded-full">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Trustee Sale (Day 111+)</h4>
                      <p className="text-sm text-neutral-600">
                        Property is auctioned to highest bidder. Homeowner can still redeem property up until sale completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Loan Modification Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Loan Modification Programs in Orange County</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Loan modifications remain the most common foreclosure alternative, allowing homeowners to permanently change mortgage terms to make payments affordable.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-6 h-6 text-black" />
                    <h3 className="text-lg font-semibold text-black">Government Programs</h3>
                  </div>
                  <div className="space-y-3 text-sm text-black">
                    <p>• HAMP 2.0 (Home Affordable Modification)</p>
                    <p>• FHA-HAMP for FHA loans</p>
                    <p>• VA Loan modification programs</p>
                    <p>• USDA Rural Development modifications</p>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-black" />
                    <h3 className="text-lg font-semibold text-black">Lender Programs</h3>
                  </div>
                  <div className="space-y-3 text-sm text-black">
                    <p>• Bank of America Modifications</p>
                    <p>• Wells Fargo Workout Options</p>
                    <p>• Chase Homeowner Assistance</p>
                    <p>• Proprietary modification programs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Emergency Assistance Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-6">Orange County Emergency Assistance Programs</h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Several emergency assistance programs help Orange County homeowners catch up on mortgage payments and avoid foreclosure during temporary hardships.
              </p>

              <div className="bg-neutral-50 border border-neutral-200 p-8 mb-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-6">Available Assistance Programs</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-black mb-4">California Mortgage Relief Program</h4>
                    <div className="space-y-2 text-sm text-neutral-600">
                      <p>• Up to $80,000 assistance</p>
                      <p>• Income limits: $150,000 (family of 4)</p>
                      <p>• Covers mortgage, property taxes, insurance</p>
                      <p>• Application: camortgagerelief.org</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-4">Orange County Emergency Rental Assistance</h4>
                    <div className="space-y-2 text-sm text-neutral-600">
                      <p>• Mortgage assistance component</p>
                      <p>• Priority for vulnerable populations</p>
                      <p>• Up to 18 months assistance</p>
                      <p>• Application: occommunityservices.org</p>
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