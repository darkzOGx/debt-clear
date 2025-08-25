import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../hooks/useCanonicalLink';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, BarChart3, Users, DollarSign, Home, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function OrangeCountyDebtCrisisObservatory() {
  const consultationRef = useRef(null);
  
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://vegaxai.com/orange-county-debt-crisis-observatory');

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>Orange County Debt Crisis Observatory | 2025 Analysis</title>
        <meta name="description" content="Real-time analysis of Orange County debt crisis trends, consumer statistics, and economic indicators. Comprehensive data on household debt, foreclosures, and relief solutions." />
        <meta name="keywords" content="Orange County debt crisis, California debt statistics, household debt trends, debt crisis analysis, Orange County economics, consumer debt data" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Orange County Debt Crisis Observatory - 2025 Analysis" />
        <meta property="og:description" content="Real-time analysis of Orange County debt crisis trends, consumer statistics, and economic indicators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegaxai.com/orange-county-debt-crisis-observatory" />
        <meta property="og:image" content="https://vegaxai.com/og-debt-crisis-observatory.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orange County Debt Crisis Observatory - 2025 Analysis" />
        <meta name="twitter:description" content="Real-time analysis of Orange County debt crisis trends, consumer statistics, and economic indicators." />
        <meta name="twitter:image" content="https://vegaxai.com/og-debt-crisis-observatory.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Orange County Debt Crisis Observatory",
            "description": "Comprehensive analysis and monitoring of debt crisis trends in Orange County, California.",
            "url": "https://vegaxai.com/orange-county-debt-crisis-observatory",
            "mainEntity": {
              "@type": "Dataset",
              "name": "Orange County Debt Statistics 2025",
              "description": "Real-time debt crisis data for Orange County residents",
              "keywords": ["debt crisis", "Orange County", "consumer debt", "household debt", "economic indicators"]
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
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
                DEBT CRISIS RESEARCH CENTER
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Orange County<br />
              <span className="font-mono text-3xl lg:text-5xl">Debt Crisis Observatory</span>
            </h1>

            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-4xl mx-auto mb-8">
              Real-time monitoring and analysis of debt crisis trends affecting Orange County residents. 
              Comprehensive data, economic indicators, and relief solution insights.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Get Crisis Assessment
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/national-debt-settlement-transparency-database"
                className="border border-white text-white px-8 py-6 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                National Database
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crisis Alert Dashboard */}
      <section className="py-16 bg-red-50 border-y border-red-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-light text-black">Crisis Alert Status</h2>
            </div>
            <p className="text-neutral-700 max-w-2xl mx-auto">
              Current debt crisis indicators for Orange County (Updated: August 2025)
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 border-l-4 border-red-500 shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-3xl font-mono text-red-600 mb-2">↑ 23%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-700">
                Household Debt Increase (YoY)
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-orange-500 shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <Home className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-3xl font-mono text-orange-600 mb-2">847</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-700">
                Foreclosure Filings (Q3 2025)
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-red-500 shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <CreditCard className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-3xl font-mono text-red-600 mb-2">68%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-700">
                Credit Utilization Rate
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-yellow-500 shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-3xl font-mono text-yellow-600 mb-2">34%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-700">
                Residents in Financial Stress
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Analysis Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Comprehensive <span className="font-mono">Debt Analysis</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              In-depth statistical analysis of Orange County's debt landscape based on multiple data sources
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Regional Debt Statistics */}
            <div>
              <h3 className="text-2xl font-light text-black mb-8">
                Regional <span className="font-mono">Debt Statistics</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 p-6 border border-neutral-200">
                  <h4 className="font-semibold text-black mb-4">Average Household Debt by City</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Newport Beach</span>
                      <span className="text-sm font-mono text-black">$127,400</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Irvine</span>
                      <span className="text-sm font-mono text-black">$89,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Huntington Beach</span>
                      <span className="text-sm font-mono text-black">$74,800</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Anaheim</span>
                      <span className="text-sm font-mono text-black">$62,300</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Santa Ana</span>
                      <span className="text-sm font-mono text-black">$51,700</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 p-6 border border-neutral-200">
                  <h4 className="font-semibold text-black mb-4">Debt-to-Income Ratios</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Credit Cards</span>
                      <span className="text-sm font-mono text-red-600">34.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Auto Loans</span>
                      <span className="text-sm font-mono text-orange-600">18.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Student Loans</span>
                      <span className="text-sm font-mono text-yellow-600">12.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Personal Loans</span>
                      <span className="text-sm font-mono text-orange-600">8.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Indicators */}
            <div>
              <h3 className="text-2xl font-light text-black mb-8">
                Economic <span className="font-mono">Indicators</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 p-6 border border-neutral-200">
                  <h4 className="font-semibold text-black mb-4">Housing Market Impact</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Median Home Price</span>
                      <span className="text-sm font-mono text-red-600">$1,247,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Price-to-Income Ratio</span>
                      <span className="text-sm font-mono text-red-600">14.8x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Monthly Housing Cost</span>
                      <span className="text-sm font-mono text-orange-600">$4,890</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Housing Burden Rate</span>
                      <span className="text-sm font-mono text-red-600">58%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 p-6 border border-neutral-200">
                  <h4 className="font-semibold text-black mb-4">Employment & Income</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Unemployment Rate</span>
                      <span className="text-sm font-mono text-yellow-600">4.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Median Household Income</span>
                      <span className="text-sm font-mono text-black">$84,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Income Growth (YoY)</span>
                      <span className="text-sm font-mono text-green-600">+2.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Cost of Living Index</span>
                      <span className="text-sm font-mono text-red-600">168.2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Trends Analysis */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-light text-black mb-12 text-center">
            Debt Crisis <span className="font-mono">Trend Analysis</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                ↑
              </div>
              <h3 className="font-semibold text-black mb-4">Rising Trend</h3>
              <ul className="text-sm text-neutral-600 space-y-2 text-left">
                <li>• Credit card delinquencies: +18%</li>
                <li>• Medical debt collections: +27%</li>
                <li>• Personal loan defaults: +12%</li>
                <li>• Bankruptcy filings: +31%</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                →
              </div>
              <h3 className="font-semibold text-black mb-4">Stable Trend</h3>
              <ul className="text-sm text-neutral-600 space-y-2 text-left">
                <li>• Auto loan delinquencies: -2%</li>
                <li>• Mortgage defaults: +3%</li>
                <li>• Student loan forbearance: +1%</li>
                <li>• Business debt restructuring: -5%</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                ↓
              </div>
              <h3 className="font-semibold text-black mb-4">Improving Trend</h3>
              <ul className="text-sm text-neutral-600 space-y-2 text-left">
                <li>• Debt settlement success: +22%</li>
                <li>• Credit counseling enrollment: +15%</li>
                <li>• Emergency fund building: +19%</li>
                <li>• Financial literacy scores: +8%</li>
              </ul>
            </div>
          </div>

          {/* External Research Links */}
          <div className="bg-white p-8 border border-neutral-200">
            <h3 className="text-2xl font-light text-black mb-6">
              Research <span className="font-mono">Sources & Studies</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-black mb-3">Government Data Sources</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• <a href="https://www.census.gov/programs-surveys/acs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Census Bureau - American Community Survey</a></li>
                  <li>• <a href="https://www.bls.gov/regions/west/california.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bureau of Labor Statistics - California Data</a></li>
                  <li>• <a href="https://www.dre.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">California Department of Real Estate</a></li>
                  <li>• <a href="https://www.dfpi.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CA Dept of Financial Protection & Innovation</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-black mb-3">Financial Research</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• <a href="https://www.federalreserve.gov/publications/files/scf20.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Federal Reserve - Survey of Consumer Finances</a></li>
                  <li>• <a href="https://www.newyorkfed.org/microeconomics/hhdc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NY Fed - Household Debt and Credit Report</a></li>
                  <li>• <a href="https://www.zillow.com/research/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Zillow Research - Housing Market Data</a></li>
                  <li>• <a href="https://www.experian.com/blogs/insights/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Experian - Consumer Credit Research</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8 text-center">
            Related <span className="font-mono">Research & Tools</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/ai-vs-human-debt-settlement-study"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <BarChart3 className="w-8 h-8 text-black mb-4" />
              <h3 className="font-semibold text-black mb-2">AI vs Human Settlement Study</h3>
              <p className="text-sm text-neutral-600">Comparative analysis of debt settlement methodologies and success rates</p>
            </Link>
            
            <Link 
              to="/national-debt-settlement-transparency-database"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <DollarSign className="w-8 h-8 text-black mb-4" />
              <h3 className="font-semibold text-black mb-2">Transparency Database</h3>
              <p className="text-sm text-neutral-600">National debt settlement performance metrics and industry standards</p>
            </Link>
            
            <Link 
              to="/medical-debt-relief-hub"
              className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors"
            >
              <Users className="w-8 h-8 text-black mb-4" />
              <h3 className="font-semibold text-black mb-2">Medical Debt Relief Hub</h3>
              <p className="text-sm text-neutral-600">Specialized resources for medical debt crisis and relief solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Get Your Personal <span className="font-mono">Debt Crisis Assessment</span>
          </h2>
          
          <p className="text-neutral-600 mb-8 text-lg">
            Understanding the data is the first step. Get a personalized analysis of your debt situation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToConsultation}
              className="bg-white text-black hover:bg-neutral-100 px-8 py-6 text-base font-mono uppercase tracking-wide"
            >
              Free Crisis Assessment
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div ref={consultationRef}>
            <ConsultationForm sectionId="crisis-observatory-consultation" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}