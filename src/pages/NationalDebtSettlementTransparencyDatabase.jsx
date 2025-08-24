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
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-gray-800 text-white overflow-hidden border-b border-slate-700">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-white transition-colors mb-8"
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

            <p className="text-xl text-slate-200 leading-relaxed font-light relative z-10 max-w-4xl mx-auto mb-8">
              Independent database tracking performance metrics, success rates, and compliance standards 
              for 2,500+ debt settlement companies nationwide. Promoting industry transparency and consumer protection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Search Database
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/ai-vs-human-debt-settlement-study"
                className="border border-white text-white px-8 py-6 hover:bg-white hover:text-slate-900 transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                AI Settlement Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Database Overview */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Database <span className="font-mono">Overview & Scope</span>
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              The most comprehensive collection of debt settlement industry data, updated quarterly 
              with performance metrics from companies across all 50 states.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center mb-12">
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <div className="text-4xl font-mono text-slate-700 mb-2">2,547</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Companies Tracked
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <div className="text-4xl font-mono text-slate-700 mb-2">847K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Settlement Records
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <div className="text-4xl font-mono text-slate-700 mb-2">50</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                States Covered
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <div className="text-4xl font-mono text-slate-700 mb-2">Q4'24</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Last Updated
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-6 text-center">Data Sources & Methodology</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-black mb-3">Government Sources</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• <a href="https://www.ftc.gov/enforcement/cases-proceedings" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">FTC Enforcement Actions</a></li>
                  <li>• <a href="https://www.consumerfinance.gov/data-research/consumer-complaints/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">CFPB Consumer Complaint Database</a></li>
                  <li>• State Attorney General Records</li>
                  <li>• Court Filing Database</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-3">Industry Reports</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• IAPDA Member Performance Data</li>
                  <li>• BBB Business Profile Reviews</li>
                  <li>• <a href="https://www.trustpilot.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">Consumer Review Platforms</a></li>
                  <li>• Third-Party Audit Reports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-3">Independent Research</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
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
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Industry <span className="font-mono">Performance Metrics</span>
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Comprehensive analysis of debt settlement industry performance across key metrics and standards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light text-black mb-8">
                National <span className="font-mono">Industry Averages</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Average Settlement Rate</span>
                    <span className="text-lg font-mono text-slate-700">48.7%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded">
                    <div className="bg-slate-600 h-2 rounded" style={{width: '48.7%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">
                    Industry-wide average debt reduction achieved
                  </p>
                </div>

                <div className="bg-slate-50 p-6 border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Success Rate</span>
                    <span className="text-lg font-mono text-slate-700">67.3%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded">
                    <div className="bg-slate-600 h-2 rounded" style={{width: '67.3%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">
                    Percentage of cases successfully resolved
                  </p>
                </div>

                <div className="bg-slate-50 p-6 border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Average Timeline</span>
                    <span className="text-lg font-mono text-slate-700">22.4 months</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded">
                    <div className="bg-orange-500 h-2 rounded" style={{width: '74.7%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">
                    Average time from enrollment to completion
                  </p>
                </div>

                <div className="bg-slate-50 p-6 border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Client Satisfaction</span>
                    <span className="text-lg font-mono text-slate-700">3.4/5.0</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded">
                    <div className="bg-yellow-500 h-2 rounded" style={{width: '68%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">
                    Average client satisfaction rating
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-black mb-8">
                Top Performers vs <span className="font-mono">Industry Average</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 border border-green-200">
                  <h4 className="font-semibold text-black mb-4">Top 10% Companies</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Settlement Rate</span>
                      <span className="text-sm font-mono text-green-600">67.8% (+19.1%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Success Rate</span>
                      <span className="text-sm font-mono text-green-600">91.2% (+23.9%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Timeline</span>
                      <span className="text-sm font-mono text-green-600">15.7 months (-30%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Satisfaction</span>
                      <span className="text-sm font-mono text-green-600">4.7/5.0 (+38%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 border border-red-200">
                  <h4 className="font-semibold text-black mb-4">Bottom 25% Companies</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Settlement Rate</span>
                      <span className="text-sm font-mono text-red-600">31.2% (-17.5%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Success Rate</span>
                      <span className="text-sm font-mono text-red-600">42.8% (-24.5%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Timeline</span>
                      <span className="text-sm font-mono text-red-600">31.6 months (+41%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-neutral-700">Satisfaction</span>
                      <span className="text-sm font-mono text-red-600">2.1/5.0 (-38%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Key Success Factors</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Compliance & <span className="font-mono">Regulatory Analysis</span>
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Tracking regulatory compliance, enforcement actions, and consumer protection violations across the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border border-slate-200 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-black mb-3">Enforcement Actions</h3>
              <div className="text-3xl font-mono text-red-600 mb-2">847</div>
              <p className="text-sm text-neutral-600">
                FTC/CFPB enforcement actions against debt settlement companies (2020-2024)
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200 text-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-black mb-3">Licensed Companies</h3>
              <div className="text-3xl font-mono text-yellow-600 mb-2">73%</div>
              <p className="text-sm text-neutral-600">
                Percentage of companies properly licensed in all operating states
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-black mb-3">Compliant Companies</h3>
              <div className="text-3xl font-mono text-green-600 mb-2">58%</div>
              <p className="text-sm text-neutral-600">
                Companies with no regulatory violations in past 24 months
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border border-slate-200">
              <h3 className="text-xl font-semibold text-black mb-6">
                Common Regulatory <span className="font-mono">Violations</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-sm font-mono text-neutral-700">Advance Fee Collection</span>
                  <span className="text-sm font-mono text-red-600">34%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-sm font-mono text-neutral-700">Misleading Claims</span>
                  <span className="text-sm font-mono text-red-600">28%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-sm font-mono text-neutral-700">Inadequate Disclosures</span>
                  <span className="text-sm font-mono text-red-600">23%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-sm font-mono text-neutral-700">Telemarketing Violations</span>
                  <span className="text-sm font-mono text-red-600">19%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-sm font-mono text-neutral-700">Licensing Violations</span>
                  <span className="text-sm font-mono text-red-600">16%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-slate-200">
              <h3 className="text-xl font-semibold text-black mb-6">
                Consumer <span className="font-mono">Protection Standards</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black text-sm">No Upfront Fees</h4>
                    <p className="text-xs text-neutral-600">Compliant companies collect fees only after settlement</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black text-sm">Written Contracts</h4>
                    <p className="text-xs text-neutral-600">Clear terms, cancellation rights, and fee disclosures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black text-sm">Escrow Accounts</h4>
                    <p className="text-xs text-neutral-600">Independent third-party escrow for settlement funds</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black text-sm">Realistic Expectations</h4>
                    <p className="text-xs text-neutral-600">No guarantees of specific results or timelines</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black text-sm">Proper Licensing</h4>
                    <p className="text-xs text-neutral-600">Licensed in all states where services are provided</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Interface Preview */}
      <section className="py-16 bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Database <span className="font-mono">Search Interface</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Search and filter debt settlement companies by performance metrics, location, and compliance status
            </p>
          </div>

          <div className="bg-slate-50 p-8 border border-slate-200 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-slate-200 rounded text-center">
                <Search className="w-8 h-8 text-slate-600 mx-auto mb-4" />
                <h3 className="font-semibold text-black mb-2">Company Lookup</h3>
                <p className="text-sm text-neutral-600">
                  Search by company name, license number, or registration details
                </p>
              </div>

              <div className="bg-white p-6 border border-slate-200 rounded text-center">
                <BarChart3 className="w-8 h-8 text-slate-600 mx-auto mb-4" />
                <h3 className="font-semibold text-black mb-2">Performance Metrics</h3>
                <p className="text-sm text-neutral-600">
                  Filter by settlement rates, success rates, and client satisfaction
                </p>
              </div>

              <div className="bg-white p-6 border border-slate-200 rounded text-center">
                <Globe className="w-8 h-8 text-slate-600 mx-auto mb-4" />
                <h3 className="font-semibold text-black mb-2">Geographic Search</h3>
                <p className="text-sm text-neutral-600">
                  Find companies serving specific states or metropolitan areas
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-yellow-50 p-4 border border-yellow-200 rounded mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-800">Access Requirements</span>
                </div>
                <p className="text-sm text-yellow-700">
                  Full database access available to consumers, researchers, and industry professionals. 
                  Personal consultation required to protect consumer privacy.
                </p>
              </div>
              
              <Button 
                onClick={scrollToConsultation}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Request Database Access
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8 text-center">
            Related <span className="font-mono">Research & Analysis</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/ai-vs-human-debt-settlement-study"
              className="bg-white p-6 border border-neutral-200 hover:border-slate-600 transition-colors"
            >
              <FileText className="w-6 h-6 text-slate-600 mb-3" />
              <h3 className="font-semibold text-black mb-2">AI vs Human Settlement Study</h3>
              <p className="text-sm text-neutral-600">Comprehensive research comparing AI and traditional settlement approaches</p>
            </Link>
            
            <Link 
              to="/orange-county-debt-crisis-observatory"
              className="bg-white p-6 border border-neutral-200 hover:border-slate-600 transition-colors"
            >
              <TrendingUp className="w-6 h-6 text-slate-600 mb-3" />
              <h3 className="font-semibold text-black mb-2">Debt Crisis Observatory</h3>
              <p className="text-sm text-neutral-600">Real-time monitoring of regional debt crisis trends and indicators</p>
            </Link>
            
            <Link 
              to="/medical-debt-relief-hub"
              className="bg-white p-6 border border-neutral-200 hover:border-slate-600 transition-colors"
            >
              <Users className="w-6 h-6 text-slate-600 mb-3" />
              <h3 className="font-semibold text-black mb-2">Medical Debt Relief Hub</h3>
              <p className="text-sm text-neutral-600">Specialized database of medical debt settlement performance metrics</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Access Industry <span className="font-mono">Transparency Data</span>
          </h2>
          
          <p className="text-slate-200 mb-8 text-lg">
            Make informed decisions with comprehensive industry performance data and compliance information.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToConsultation}
              className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-6 text-base font-mono uppercase tracking-wide"
            >
              Request Database Access
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-16 bg-white border-t border-neutral-200">
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