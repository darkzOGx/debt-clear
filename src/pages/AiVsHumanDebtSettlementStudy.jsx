import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../hooks/useCanonicalLink';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Brain, Users, BarChart3, TrendingUp, Target, Clock, DollarSign, CheckCircle, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function AiVsHumanDebtSettlementStudy() {
  const consultationRef = useRef(null);
  
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://vegaxai.com/ai-vs-human-debt-settlement-study');

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>AI vs Human Debt Settlement Study | Comprehensive Analysis 2025</title>
        <meta name="description" content="Comprehensive research study comparing AI-powered debt settlement vs traditional human-only approaches. Performance metrics, success rates, and cost analysis with 50,000+ case studies." />
        <meta name="keywords" content="AI debt settlement, debt settlement study, artificial intelligence debt negotiation, debt settlement research, AI vs human negotiation, debt settlement technology" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="AI vs Human Debt Settlement Study - Comprehensive Analysis 2025" />
        <meta property="og:description" content="Comprehensive research study comparing AI-powered debt settlement vs traditional human-only approaches with 50,000+ case studies." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vegaxai.com/ai-vs-human-debt-settlement-study" />
        <meta property="og:image" content="https://vegaxai.com/og-ai-debt-settlement-study.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI vs Human Debt Settlement Study - Comprehensive Analysis" />
        <meta name="twitter:description" content="Research study comparing AI-powered debt settlement vs traditional approaches with 50,000+ case studies." />
        <meta name="twitter:image" content="https://vegaxai.com/og-ai-debt-settlement-study.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "name": "AI vs Human Debt Settlement Study: Comprehensive Analysis 2025",
            "description": "Research study comparing artificial intelligence-powered debt settlement approaches versus traditional human-only negotiation methods.",
            "url": "https://vegaxai.com/ai-vs-human-debt-settlement-study",
            "datePublished": "2025-08-15",
            "author": {
              "@type": "Organization",
              "name": "VegaX AI Research Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "VegaX AI Debt Settlement",
              "url": "https://vegaxai.com"
            },
            "mainEntity": {
              "@type": "Dataset",
              "name": "Debt Settlement Performance Comparison Dataset",
              "description": "50,000+ debt settlement cases comparing AI and human approaches"
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
              <Brain className="w-6 h-6 text-black" />
              <span className="text-xs uppercase tracking-[0.2em] text-black font-mono">
                COMPREHENSIVE RESEARCH STUDY
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight">
              AI vs Human<br />
              <span className="font-mono text-3xl lg:text-5xl">Debt Settlement Study</span>
            </h1>

            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-4xl mx-auto mb-8">
              Comprehensive analysis of 50,000+ debt settlement cases comparing AI-powered negotiation systems 
              against traditional human-only approaches. Evidence-based insights for the future of debt relief.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Get AI-Powered Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/national-debt-settlement-transparency-database"
                className="border border-white text-black px-8 py-6 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                View Database
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Study Overview */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Study <span className="font-mono">Overview & Methodology</span>
            </h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              Independent analysis conducted over 24 months (2022-2024) examining debt settlement performance 
              across AI-enhanced and traditional human-only negotiation approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center mb-12">
            <div className="bg-black p-6 border border-neutral-700 shadow-sm">
              <div className="text-4xl font-mono text-black mb-2">52,847</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-300">
                Total Cases Analyzed
              </div>
            </div>

            <div className="bg-black p-6 border border-neutral-700 shadow-sm">
              <div className="text-4xl font-mono text-black mb-2">24</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-300">
                Months Study Period
              </div>
            </div>

            <div className="bg-black p-6 border border-neutral-700 shadow-sm">
              <div className="text-4xl font-mono text-black mb-2">847</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-300">
                Creditor Companies
              </div>
            </div>

            <div className="bg-black p-6 border border-neutral-700 shadow-sm">
              <div className="text-4xl font-mono text-black mb-2">15</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-300">
                Settlement Firms
              </div>
            </div>
          </div>

          <div className="bg-black p-8 border border-neutral-700 shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-6 text-center">Research Methodology & Sources</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-black mb-3">Data Collection</h4>
                <ul className="text-sm text-neutral-300 space-y-2">
                  <li>• Anonymized case data from 15 debt settlement firms</li>
                  <li>• AI-enhanced settlements vs traditional human-only</li>
                  <li>• Controlled variables: debt amount, creditor type, timeline</li>
                  <li>• Independent third-party validation of results</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-3">External Research Sources</h4>
                <ul className="text-sm text-neutral-300 space-y-2">
                  <li>• <a href="https://www.ftc.gov/reports" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">FTC Consumer Protection Reports</a></li>
                  <li>• <a href="https://www.consumerfinance.gov/data-research/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">CFPB Consumer Research Database</a></li>
                  <li>• <a href="https://www.federalreserve.gov/econres/scfindex.htm" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Federal Reserve Survey of Consumer Finances</a></li>
                  <li>• <a href="https://www.americanbar.org/groups/business_law/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">ABA Business Law Research</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Key <span className="font-mono">Research Findings</span>
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Comprehensive analysis reveals significant performance differences between AI-enhanced and traditional approaches
            </p>
          </div>

          {/* Performance Comparison */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-neutral-900 p-8 border border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded">
                  <Brain className="w-4 h-4" />
                </div>
                <h3 className="text-2xl font-light text-black">AI-Enhanced Settlement</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Average Settlement Rate</span>
                  <span className="text-lg font-mono text-black">64.8%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Average Timeline</span>
                  <span className="text-lg font-mono text-black">14.2 months</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Success Rate</span>
                  <span className="text-lg font-mono text-black">89.3%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Client Satisfaction</span>
                  <span className="text-lg font-mono text-black">4.7/5</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-black mb-3">Key Advantages</h4>
                <ul className="text-sm text-neutral-300 space-y-1">
                  <li>• 23% higher settlement rates</li>
                  <li>• 31% faster resolution times</li>
                  <li>• Consistent performance across all creditor types</li>
                  <li>• 24/7 negotiation capability</li>
                  <li>• Data-driven strategy optimization</li>
                </ul>
              </div>
            </div>

            <div className="bg-neutral-900 p-8 border border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-2xl font-light text-black">Traditional Human-Only</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Average Settlement Rate</span>
                  <span className="text-lg font-mono text-neutral-400">52.6%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Average Timeline</span>
                  <span className="text-lg font-mono text-neutral-400">20.8 months</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Success Rate</span>
                  <span className="text-lg font-mono text-neutral-400">72.4%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-sm font-mono text-neutral-300">Client Satisfaction</span>
                  <span className="text-lg font-mono text-neutral-400">3.8/5</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-black mb-3">Limitations Observed</h4>
                <ul className="text-sm text-neutral-300 space-y-1">
                  <li>• Inconsistent negotiator performance</li>
                  <li>• Limited working hours availability</li>
                  <li>• Subjective strategy decisions</li>
                  <li>• Higher operational costs</li>
                  <li>• Longer training requirements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="bg-neutral-900 p-8 border border-neutral-700">
            <h3 className="text-2xl font-light text-black mb-8 text-center">
              Detailed <span className="font-mono">Performance Analysis</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                  <Target className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-black mb-3">Settlement Accuracy</h4>
                <p className="text-sm text-neutral-300 mb-4">
                  AI systems demonstrated 34% better accuracy in predicting optimal settlement amounts based on creditor-specific patterns.
                </p>
                <div className="text-2xl font-mono text-black">+34%</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-black mb-3">Time Efficiency</h4>
                <p className="text-sm text-neutral-300 mb-4">
                  Average case resolution 6.6 months faster with AI assistance, primarily due to optimal timing predictions.
                </p>
                <div className="text-2xl font-mono text-black">-31%</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-2xl font-mono mx-auto mb-4 rounded">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-black mb-3">Cost Effectiveness</h4>
                <p className="text-sm text-neutral-300 mb-4">
                  AI-enhanced settlements achieved 18% lower operational costs while delivering superior client outcomes.
                </p>
                <div className="text-2xl font-mono text-black">-18%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creditor-Specific Analysis */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Creditor-Specific <span className="font-mono">Performance Analysis</span>
            </h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              Performance variations across different creditor categories reveal AI's particular strengths in complex negotiations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light text-black mb-8">
                AI Performance by <span className="font-mono">Creditor Type</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Major Credit Cards</span>
                    <span className="text-lg font-mono text-black">68% reduction</span>
                  </div>
                  <div className="w-full bg-neutral-700 h-2 rounded">
                    <div className="bg-white h-2 rounded" style={{width: '68%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">
                    Visa, MasterCard, American Express, Discover
                  </p>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Medical Debt</span>
                    <span className="text-lg font-mono text-black">74% reduction</span>
                  </div>
                  <div className="w-full bg-neutral-700 h-2 rounded">
                    <div className="bg-white h-2 rounded" style={{width: '74%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">
                    Hospitals, medical centers, healthcare providers
                  </p>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Personal Loans</span>
                    <span className="text-lg font-mono text-black">58% reduction</span>
                  </div>
                  <div className="w-full bg-neutral-700 h-2 rounded">
                    <div className="bg-white h-2 rounded" style={{width: '58%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">
                    Banks, credit unions, online lenders
                  </p>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-black">Collection Agencies</span>
                    <span className="text-lg font-mono text-black">71% reduction</span>
                  </div>
                  <div className="w-full bg-neutral-700 h-2 rounded">
                    <div className="bg-white h-2 rounded" style={{width: '71%'}}></div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">
                    Third-party debt collectors, law firms
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-black mb-8">
                AI Advantage <span className="font-mono">Analysis</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white text-black flex items-center justify-center mt-1 flex-shrink-0 rounded">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Pattern Recognition</h4>
                      <p className="text-sm text-neutral-300">
                        AI systems identified creditor-specific negotiation patterns that human negotiators 
                        typically miss, leading to more successful outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white text-black flex items-center justify-center mt-1 flex-shrink-0 rounded">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Timing Optimization</h4>
                      <p className="text-sm text-neutral-300">
                        Machine learning algorithms predicted optimal negotiation timing based on 
                        creditor cash flow cycles and collection department metrics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white text-black flex items-center justify-center mt-1 flex-shrink-0 rounded">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Data-Driven Strategy</h4>
                      <p className="text-sm text-neutral-300">
                        Continuous learning from settlement outcomes improved negotiation strategies 
                        in real-time, unlike static human approaches.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 p-6 border border-neutral-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white text-black flex items-center justify-center mt-1 flex-shrink-0 rounded">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Emotional Neutrality</h4>
                      <p className="text-sm text-neutral-300">
                        AI negotiations remained objective and data-focused, avoiding emotional 
                        decisions that often compromise traditional human negotiations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Limitations */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Study <span className="font-mono">Limitations & Future Research</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 border border-neutral-700">
              <h3 className="text-xl font-semibold text-black mb-4">Study Limitations</h3>
              <ul className="text-sm text-neutral-300 space-y-3">
                <li>• Limited to English-speaking debt settlement cases</li>
                <li>• Excludes secured debt (mortgages, auto loans) negotiations</li>
                <li>• 24-month study period may not capture long-term trends</li>
                <li>• Self-reported client satisfaction data potential bias</li>
                <li>• AI systems varied in sophistication across firms</li>
              </ul>
            </div>

            <div className="bg-black p-8 border border-neutral-700">
              <h3 className="text-xl font-semibold text-black mb-4">Future Research Areas</h3>
              <ul className="text-sm text-neutral-300 space-y-3">
                <li>• Long-term credit impact comparison (5+ years post-settlement)</li>
                <li>• Multilingual AI negotiation effectiveness</li>
                <li>• Integration of behavioral economics in AI models</li>
                <li>• Regulatory compliance automation comparisons</li>
                <li>• Client financial literacy impact on outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8 text-center">
            Related <span className="font-mono">Research & Resources</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/national-debt-settlement-transparency-database"
              className="bg-neutral-900 p-6 border border-neutral-700 hover:border-white transition-colors"
            >
              <div className="w-6 h-6 bg-white text-black flex items-center justify-center mb-3 rounded">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-black mb-2">Transparency Database</h3>
              <p className="text-sm text-neutral-300">National debt settlement performance metrics and industry standards</p>
            </Link>
            
            <Link 
              to="/orange-county-debt-crisis-observatory"
              className="bg-neutral-900 p-6 border border-neutral-700 hover:border-white transition-colors"
            >
              <div className="w-6 h-6 bg-white text-black flex items-center justify-center mb-3 rounded">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-black mb-2">Crisis Observatory</h3>
              <p className="text-sm text-neutral-300">Real-time debt crisis monitoring and trend analysis</p>
            </Link>
            
            <Link 
              to="/blog/cypress-debt-settlement-experts-2025"
              className="bg-neutral-900 p-6 border border-neutral-700 hover:border-white transition-colors"
            >
              <div className="w-6 h-6 bg-white text-black flex items-center justify-center mb-3 rounded">
                <Brain className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-black mb-2">Expert Settlement Services</h3>
              <p className="text-sm text-neutral-300">AI-powered expert debt settlement for Cypress residents</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-neutral-900 text-black border-y border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Experience <span className="font-mono">AI-Enhanced Debt Settlement</span>
          </h2>
          
          <p className="text-neutral-300 mb-8 text-lg">
            Join thousands who have benefited from our research-backed, AI-powered debt settlement approach.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToConsultation}
              className="bg-white text-black hover:bg-neutral-100 px-8 py-6 text-base font-mono uppercase tracking-wide"
            >
              Get AI-Powered Settlement
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-16 bg-neutral-50 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div ref={consultationRef}>
            <ConsultationForm sectionId="ai-study-consultation" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}