import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, FileText, TrendingDown, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function DebtTools() {
  return (
    <>
      <Helmet>
        <title>Debt Analysis Tools - Orange County Financial Recovery Suite | VegaX AI</title>
        <meta name="description" content="Free debt analysis tools for Orange County residents. Calculate settlements, compare options, plan recovery. Professional debt relief planning tools and calculators." />
        <meta name="keywords" content="debt calculator, settlement calculator, Orange County debt tools, debt analysis, financial planning tools, debt relief calculator, OIC calculator, tax debt calculator" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vegaxai.com/debt-tools" />
        
        <meta property="og:title" content="Debt Analysis Tools - Orange County Financial Recovery Suite" />
        <meta property="og:description" content="Free debt analysis tools for Orange County residents. Calculate settlements, compare options, plan recovery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegaxai.com/debt-tools" />
        <meta property="og:image" content="https://vegaxai.com/og-debt-tools.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Debt Analysis Tools",
            "description": "Free debt analysis tools for Orange County residents. Calculate settlements, compare options, plan recovery.",
            "url": "https://vegaxai.com/debt-tools",
            "publisher": {
              "@type": "Organization",
              "name": "VegaX AI",
              "url": "https://vegaxai.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-black to-neutral-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-sm text-neutral-400 mb-4">Financial Recovery Planning</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orange County Debt Analysis Tools
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Free professional-grade calculators and analysis tools to help you understand your options, 
              estimate savings, and create your personalized debt relief strategy.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Debt Settlement Calculator */}
              <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
                <Calculator className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-black mb-4">Debt Settlement Calculator</h3>
                <p className="text-neutral-700 mb-6">
                  Calculate potential savings from debt settlement. Input your debts and see estimated settlement amounts, 
                  timeline, and total savings for Orange County residents.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Instant settlement estimates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Timeline projection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Fee calculator included</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition inline-flex items-center justify-center gap-2">
                  Launch Calculator <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Tax Relief Calculator */}
              <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-black mb-4">IRS Offer in Compromise Calculator</h3>
                <p className="text-neutral-700 mb-6">
                  Determine if you qualify for an Offer in Compromise and estimate your settlement amount 
                  using Orange County specific allowable expenses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">OIC qualification check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Settlement amount estimate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Orange County living allowances</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition inline-flex items-center justify-center gap-2">
                  Calculate OIC <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Additional Tools Row */}
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Debt Comparison Tool */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <TrendingDown className="w-10 h-10 text-purple-600 mb-4" />
                <h4 className="text-lg font-bold text-black mb-3">Debt Strategy Comparison</h4>
                <p className="text-sm text-neutral-700 mb-4">
                  Compare settlement, consolidation, and bankruptcy options side-by-side.
                </p>
                <button className="text-purple-600 font-semibold hover:underline">Coming Soon</button>
              </div>

              {/* Asset Protection Tool */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="w-10 h-10 text-orange-600 mb-4" />
                <h4 className="text-lg font-bold text-black mb-3">Asset Protection Analyzer</h4>
                <p className="text-sm text-neutral-700 mb-4">
                  Understand which assets are protected under California law during debt relief.
                </p>
                <button className="text-orange-600 font-semibold hover:underline">Coming Soon</button>
              </div>

              {/* Budget Planner */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Calculator className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-lg font-bold text-black mb-3">Recovery Budget Planner</h4>
                <p className="text-sm text-neutral-700 mb-4">
                  Create a post-settlement budget for sustainable financial recovery.
                </p>
                <button className="text-green-600 font-semibold hover:underline">Coming Soon</button>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-black via-neutral-900 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Need Personalized Analysis?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 font-light">
              Get expert review of your calculations and personalized debt relief recommendations
            </p>
            <button
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-neutral-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Expert Analysis
            </button>
          </div>
        </section>

        {/* Consultation Section */}
        <section id="consultation" className="py-8 bg-white border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-6">
            <ConsultationForm />
          </div>
        </section>
      </div>
    </>
  );
}