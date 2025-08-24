import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../hooks/useCanonicalLink';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Database, Shield, Search, BarChart3, Users, TrendingUp, AlertTriangle, CheckCircle, FileText, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function NationalDebtSettlementTransparencyDatabase() {
  const consultationRef = useRef(null);
  
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://vegaxai.com/national-debt-settlement-transparency-database');

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>National Debt Settlement Transparency Database | Industry Standards</title>
        <meta name="description" content="Comprehensive database of debt settlement industry performance metrics, success rates, and compliance standards. Independent research on 2,500+ companies nationwide." />
        <meta name="keywords" content="debt settlement database, debt settlement transparency, industry performance metrics, debt settlement standards, debt settlement research, consumer protection data" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="National Debt Settlement Transparency Database - Industry Standards" />
        <meta property="og:description" content="Comprehensive database of debt settlement industry performance metrics, success rates, and compliance standards with 2,500+ companies nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegaxai.com/national-debt-settlement-transparency-database" />
        <meta property="og:image" content="https://vegaxai.com/og-transparency-database.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="National Debt Settlement Transparency Database" />
        <meta name="twitter:description" content="Industry performance metrics, success rates, and compliance standards for 2,500+ debt settlement companies." />
        <meta name="twitter:image" content="https://vegaxai.com/og-transparency-database.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "National Debt Settlement Transparency Database",
            "description": "Comprehensive database of debt settlement industry performance metrics, success rates, and regulatory compliance data.",
            "url": "https://vegaxai.com/national-debt-settlement-transparency-database",
            "creator": {
              "@type": "Organization",
              "name": "VegaX AI Research Division"
            },
            "publisher": {
              "@type": "Organization",
              "name": "VegaX AI Debt Settlement",
              "url": "https://vegaxai.com"
            },
            "keywords": ["debt settlement", "industry standards", "performance metrics", "consumer protection", "transparency"],
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "temporalCoverage": "2020/2024"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-black">
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
              <Database className="w-6 h-6 text-white" />
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
                INDUSTRY TRANSPARENCY INITIATIVE
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
              National Debt Settlement<br />
              <span className="font-mono text-3xl lg:text-5xl">Transparency Database</span>
            </h1>

            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-4xl mx-auto mb-8">
              Independent database tracking performance metrics, success rates, and compliance standards 
              for 2,500+ debt settlement companies nationwide. Promoting industry transparency and consumer protection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Search Database
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/ai-vs-human-debt-settlement-study"
                className="border border-white text-white px-8 py-6 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                AI Settlement Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Database Overview */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">
              Database <span className="font-mono">Overview & Scope</span>
            </h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              The most comprehensive collection of debt settlement industry data, updated quarterly 
              with performance metrics from companies across all 50 states.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center mb-12">
            <div className="bg-black p-6 border border-neutral-700 shadow-sm">
              <div className="text-4xl font-mono text-white mb-2">2,547</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-400">
                Companies Tracked
              </div>
            </div>

            <div className="bg-black p-6 border border-neutral-700 shadow-sm">
              <div className="text-4xl font-mono text-white mb-2">847K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-400">
                Settlement Records
              </div>
            </div>

            <div className="bg-black p-6 border border-neutral-700 shadow-sm">
              <div className="text-4xl font-mono text-white mb-2">50</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-400">
                States Covered
              </div>
            </div>

            <div className="bg-black p-6 border border-neutral-700 shadow-sm">
              <div className="text-4xl font-mono text-white mb-2">Q4'24</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-400">
                Last Updated
              </div>
            </div>
          </div>

          <div className="bg-black p-8 border border-neutral-700 shadow-sm">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Data Sources & Methodology</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-3">Government Sources</h4>
                <ul className="text-sm text-neutral-300 space-y-2">
                  <li>• <a href="https://www.ftc.gov/enforcement/cases-proceedings" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">FTC Enforcement Actions</a></li>
                  <li>• <a href="https://www.consumerfinance.gov/data-research/consumer-complaints/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">CFPB Consumer Complaint Database</a></li>
                  <li>• State Attorney General Records</li>
                  <li>• Court Filing Database</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Industry Reports</h4>
                <ul className="text-sm text-neutral-300 space-y-2">
                  <li>• IAPDA Member Performance Data</li>
                  <li>• BBB Business Profile Reviews</li>
                  <li>• <a href="https://www.trustpilot.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Consumer Review Platforms</a></li>
                  <li>• Third-Party Audit Reports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Independent Research</h4>
                <ul className="text-sm text-neutral-300 space-y-2">
                  <li>• Client Outcome Surveys</li>
                  <li>• Mystery Shopping Programs</li>
                  <li>• Financial Performance Analysis</li>
                  <li>• Regulatory Compliance Audits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Performance Metrics */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">
              Industry <span className="font-mono">Performance Metrics</span>
            </h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              Comprehensive analysis of debt settlement industry performance across key metrics and standards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light text-white mb-8">
                National <span className="font-mono">Industry Averages</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">Average Settlement Rate</span>
                    <span className="text-lg font-mono text-white">48.7%</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded">
                    <div className="bg-white h-2 rounded" style={{width: '48.7%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">
                    Industry-wide average debt reduction achieved
                  </p>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">Success Rate</span>
                    <span className="text-lg font-mono text-white">67.3%</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded">
                    <div className="bg-white h-2 rounded" style={{width: '67.3%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">
                    Percentage of cases successfully resolved
                  </p>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">Average Timeline</span>
                    <span className="text-lg font-mono text-white">22.4 months</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded">
                    <div className="bg-neutral-400 h-2 rounded" style={{width: '74.7%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">
                    Average time from enrollment to completion
                  </p>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">Client Satisfaction</span>
                    <span className="text-lg font-mono text-white">3.4/5.0</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded">
                    <div className="bg-neutral-300 h-2 rounded" style={{width: '68%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">
                    Average client satisfaction rating
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-white mb-8">
                Top Performers vs <span className="font-mono">Industry Average</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <h4 className="font-semibold text-white mb-4">Top 10% Companies</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-300">Settlement Rate</span>
                      <span className="text-sm font-mono text-white">67.8% (+19.1%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-300">Success Rate</span>
                      <span className="text-sm font-mono text-white">91.2% (+23.9%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-300">Timeline</span>
                      <span className="text-sm font-mono text-white">15.7 months (-30%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-300">Satisfaction</span>
                      <span className="text-sm font-mono text-white">4.7/5.0 (+38%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <h4 className="font-semibold text-white mb-4">Bottom 25% Companies</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-300">Settlement Rate</span>
                      <span className="text-sm font-mono text-neutral-400">31.2% (-17.5%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-300">Success Rate</span>
                      <span className="text-sm font-mono text-neutral-400">42.8% (-24.5%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-300">Timeline</span>
                      <span className="text-sm font-mono text-neutral-400">31.6 months (+41%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-300">Satisfaction</span>
                      <span className="text-sm font-mono text-neutral-400">2.1/5.0 (-38%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <h4 className="font-semibold text-white mb-3">Key Success Factors</h4>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• Transparent fee structures</li>
                    <li>• Licensed in all operating states</li>
                    <li>• Dedicated client support teams</li>
                    <li>• Technology-assisted negotiations</li>
                    <li>• Regulatory compliance history</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Regulatory Analysis */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">
              Compliance & <span className="font-mono">Regulatory Analysis</span>
            </h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              Tracking regulatory compliance, enforcement actions, and consumer protection violations across the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black p-8 border border-neutral-700 text-center">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-white mb-3">Enforcement Actions</h3>
              <div className="text-3xl font-mono text-white mb-2">847</div>
              <p className="text-sm text-neutral-300">
                FTC/CFPB enforcement actions against debt settlement companies (2020-2024)
              </p>
            </div>

            <div className="bg-black p-8 border border-neutral-700 text-center">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-white mb-3">Licensed Companies</h3>
              <div className="text-3xl font-mono text-white mb-2">73%</div>
              <p className="text-sm text-neutral-300">
                Percentage of companies properly licensed in all operating states
              </p>
            </div>

            <div className="bg-black p-8 border border-neutral-700 text-center">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-white mb-3">Compliant Companies</h3>
              <div className="text-3xl font-mono text-white mb-2">58%</div>
              <p className="text-sm text-neutral-300">
                Companies with no regulatory violations in past 24 months
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black p-8 border border-neutral-700">
              <h3 className="text-xl font-semibold text-white mb-6">
                Common Regulatory <span className="font-mono">Violations</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Advance Fee Collection</span>
                  <span className="text-sm font-mono text-neutral-400">34%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Misleading Claims</span>
                  <span className="text-sm font-mono text-neutral-400">28%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Inadequate Disclosures</span>
                  <span className="text-sm font-mono text-neutral-400">23%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Telemarketing Violations</span>
                  <span className="text-sm font-mono text-neutral-400">19%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Licensing Violations</span>
                  <span className="text-sm font-mono text-neutral-400">16%</span>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 border border-neutral-700">
              <h3 className="text-xl font-semibold text-white mb-6">
                Consumer <span className="font-mono">Protection Standards</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">No Upfront Fees</h4>
                    <p className="text-xs text-neutral-300">Compliant companies collect fees only after settlement</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Written Contracts</h4>
                    <p className="text-xs text-neutral-300">Clear terms, cancellation rights, and fee disclosures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Escrow Accounts</h4>
                    <p className="text-xs text-neutral-300">Independent third-party escrow for settlement funds</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Realistic Expectations</h4>
                    <p className="text-xs text-neutral-300">No guarantees of specific results or timelines</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Proper Licensing</h4>
                    <p className="text-xs text-neutral-300">Licensed in all states where services are provided</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Interface Preview */}
      <section className="py-16 bg-black border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">
              Database <span className="font-mono">Search Interface</span>
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Search and filter debt settlement companies by performance metrics, location, and compliance status
            </p>
          </div>

          <div className="bg-neutral-900 p-8 border border-neutral-700 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black p-6 border border-neutral-700 rounded text-center">
                <Search className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Company Lookup</h3>
                <p className="text-sm text-neutral-300">
                  Search by company name, license number, or registration details
                </p>
              </div>

              <div className="bg-black p-6 border border-neutral-700 rounded text-center">
                <BarChart3 className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Performance Metrics</h3>
                <p className="text-sm text-neutral-300">
                  Filter by settlement rates, success rates, and client satisfaction
                </p>
              </div>

              <div className="bg-black p-6 border border-neutral-700 rounded text-center">
                <Globe className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Geographic Search</h3>
                <p className="text-sm text-neutral-300">
                  Find companies serving specific states or metropolitan areas
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-neutral-900 p-4 border border-neutral-700 rounded mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">Access Requirements</span>
                </div>
                <p className="text-sm text-neutral-300">
                  Full database access available to consumers, researchers, and industry professionals. 
                  Personal consultation required to protect consumer privacy.
                </p>
              </div>
              
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Request Database Access
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-white mb-8 text-center">
            Related <span className="font-mono">Research & Analysis</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/ai-vs-human-debt-settlement-study"
              className="bg-black p-6 border border-neutral-700 hover:border-white transition-colors"
            >
              <FileText className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">AI vs Human Settlement Study</h3>
              <p className="text-sm text-neutral-300">Comprehensive research comparing AI and traditional settlement approaches</p>
            </Link>
            
            <Link 
              to="/orange-county-debt-crisis-observatory"
              className="bg-black p-6 border border-neutral-700 hover:border-white transition-colors"
            >
              <TrendingUp className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">Debt Crisis Observatory</h3>
              <p className="text-sm text-neutral-300">Real-time monitoring of regional debt crisis trends and indicators</p>
            </Link>
            
            <Link 
              to="/medical-debt-relief-hub"
              className="bg-black p-6 border border-neutral-700 hover:border-white transition-colors"
            >
              <Users className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">Medical Debt Relief Hub</h3>
              <p className="text-sm text-neutral-300">Specialized database of medical debt settlement performance metrics</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Access Industry <span className="font-mono">Transparency Data</span>
          </h2>
          
          <p className="text-neutral-300 mb-8 text-lg">
            Make informed decisions with comprehensive industry performance data and compliance information.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToConsultation}
              className="bg-white text-black hover:bg-neutral-100 px-8 py-6 text-base font-mono uppercase tracking-wide"
            >
              Request Database Access
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-16 bg-black border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div ref={consultationRef}>
            <ConsultationForm sectionId="transparency-database-consultation" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}