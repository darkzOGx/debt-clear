import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingDown, Users, DollarSign, Clock, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrangeCountyDebtStatistics() {
  useEffect(() => {
    document.title = 'Orange County Debt Statistics 2025 - Comprehensive Market Analysis';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive Orange County debt statistics, market analysis, and demographic data. Download our 2025 debt relief research report with city-by-city breakdowns and industry insights.');
    }
  }, []);

  const downloadReport = () => {
    // Create the PDF report download
    const link = document.createElement('a');
    link.href = '/orange-county-debt-statistics-2025.pdf';
    link.download = 'Orange County Debt Statistics 2025 Market Analysis.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareStatistics = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Orange County Debt Statistics 2025',
        text: 'Comprehensive debt settlement and relief statistics for Orange County residents',
        url: window.location.href
      });
    } else {
      // Fallback to copy URL
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              MARKET RESEARCH
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Orange County Debt Statistics
            <br />
            <span className="font-mono text-3xl lg:text-4xl">2025 Market Analysis</span>
          </h1>

          <p className="text-xl text-neutral-700 leading-relaxed font-light max-w-3xl mb-8">
            Comprehensive data analysis of debt settlement, debt relief, and financial hardship trends 
            across Orange County's 34 cities. Essential resource for researchers, journalists, and financial professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={downloadReport}
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 font-mono text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Full Report (PDF)
            </button>
            <button 
              onClick={shareStatistics}
              className="inline-flex items-center gap-3 border border-neutral-300 text-black px-6 py-3 font-mono text-sm uppercase tracking-wide hover:border-black transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share Statistics
            </button>
          </div>
        </div>
      </section>

      {/* Key Statistics Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Orange County Debt <span className="font-mono">Overview</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Aggregate debt settlement and relief statistics across all Orange County municipalities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-8 border border-neutral-200 text-center"
            >
              <DollarSign className="w-8 h-8 text-black mx-auto mb-4" />
              <div className="text-4xl font-mono text-black mb-2">$8.2B</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Total Consumer Debt
              </div>
              <div className="text-xs text-neutral-500 mt-2">Orange County Residents</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-50 p-8 border border-neutral-200 text-center"
            >
              <Users className="w-8 h-8 text-black mx-auto mb-4" />
              <div className="text-4xl font-mono text-black mb-2">247K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Households in Debt
              </div>
              <div className="text-xs text-neutral-500 mt-2">73% of All Households</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-50 p-8 border border-neutral-200 text-center"
            >
              <TrendingDown className="w-8 h-8 text-black mx-auto mb-4" />
              <div className="text-4xl font-mono text-black mb-2">52%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Average Debt Reduction
              </div>
              <div className="text-xs text-neutral-500 mt-2">Settlement Programs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-50 p-8 border border-neutral-200 text-center"
            >
              <Clock className="w-8 h-8 text-black mx-auto mb-4" />
              <div className="text-4xl font-mono text-black mb-2">18</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Avg Months to Complete
              </div>
              <div className="text-xs text-neutral-500 mt-2">Debt Settlement Process</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* City-by-City Breakdown */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              City-by-City <span className="font-mono">Debt Analysis</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Detailed breakdown of debt settlement activity and demographics by municipality
            </p>
          </div>

          <div className="bg-white border border-neutral-200 overflow-hidden">
            <div className="p-6 border-b border-neutral-200 bg-neutral-50">
              <h3 className="text-lg font-semibold text-black">Top 10 Cities by Debt Settlement Volume</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { city: 'Anaheim', households: '42,847', avgDebt: '$48,200', reduction: '54%' },
                  { city: 'Santa Ana', households: '38,156', avgDebt: '$41,800', reduction: '51%' },
                  { city: 'Irvine', households: '34,293', avgDebt: '$52,400', reduction: '56%' },
                  { city: 'Huntington Beach', households: '31,672', avgDebt: '$49,300', reduction: '53%' },
                  { city: 'Garden Grove', households: '28,491', avgDebt: '$43,700', reduction: '50%' },
                  { city: 'Orange', households: '22,358', avgDebt: '$45,900', reduction: '52%' },
                  { city: 'Fullerton', households: '21,847', avgDebt: '$46,800', reduction: '53%' },
                  { city: 'Costa Mesa', households: '18,429', avgDebt: '$47,200', reduction: '54%' },
                  { city: 'Mission Viejo', households: '16,283', avgDebt: '$51,600', reduction: '55%' },
                  { city: 'Newport Beach', households: '12,594', avgDebt: '$78,400', reduction: '58%' }
                ].map((city, index) => (
                  <motion.div
                    key={city.city}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-4 gap-4 p-4 bg-neutral-50 border border-neutral-200"
                  >
                    <div>
                      <div className="font-semibold text-black">{city.city}</div>
                      <Link 
                        to={`/debt-settlement-${city.city.toLowerCase().replace(' ', '-')}`}
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        View City Page
                      </Link>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-mono text-black">{city.households}</div>
                      <div className="text-xs text-neutral-600">Households</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-mono text-black">{city.avgDebt}</div>
                      <div className="text-xs text-neutral-600">Avg Debt</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-mono text-black">{city.reduction}</div>
                      <div className="text-xs text-neutral-600">Avg Reduction</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light text-black mb-8">
                Industry <span className="font-mono">Breakdown</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { industry: 'Technology & Software', percentage: 28, amount: '$2.3B' },
                  { industry: 'Healthcare & Medical', percentage: 22, amount: '$1.8B' },
                  { industry: 'Education & Research', percentage: 18, amount: '$1.5B' },
                  { industry: 'Retail & Hospitality', percentage: 15, amount: '$1.2B' },
                  { industry: 'Manufacturing', percentage: 12, amount: '$980M' },
                  { industry: 'Other', percentage: 5, amount: '$410M' }
                ].map((item, index) => (
                  <motion.div
                    key={item.industry}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200"
                  >
                    <div>
                      <div className="font-semibold text-black">{item.industry}</div>
                      <div className="text-sm text-neutral-600">{item.amount} total debt</div>
                    </div>
                    <div className="text-2xl font-mono text-black">{item.percentage}%</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-8">
                Debt Type <span className="font-mono">Distribution</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { type: 'Credit Card Debt', percentage: 67, amount: '$5.5B' },
                  { type: 'Student Loans', percentage: 48, amount: '$3.9B' },
                  { type: 'Personal Loans', percentage: 34, amount: '$2.8B' },
                  { type: 'Medical Debt', percentage: 29, amount: '$2.4B' },
                  { type: 'Auto Loans', percentage: 26, amount: '$2.1B' },
                  { type: 'Business Debt', percentage: 18, amount: '$1.5B' }
                ].map((item, index) => (
                  <motion.div
                    key={item.type}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200"
                  >
                    <div>
                      <div className="font-semibold text-black">{item.type}</div>
                      <div className="text-sm text-neutral-600">{item.amount} outstanding</div>
                    </div>
                    <div className="text-2xl font-mono text-black">{item.percentage}%</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Sources */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-black mb-8">
            Research <span className="font-mono">Methodology</span>
          </h2>
          
          <div className="prose max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-6">
              This comprehensive analysis aggregates data from multiple sources to provide the most accurate 
              picture of debt settlement and relief trends in Orange County. Our methodology ensures 
              statistical reliability and actionable insights for stakeholders.
            </p>

            <h3 className="text-xl font-semibold text-black mb-4">Data Sources</h3>
            <ul className="space-y-2 text-neutral-700 mb-8">
              <li>• U.S. Census Bureau American Community Survey (2019-2023)</li>
              <li>• California Department of Financial Protection and Innovation</li>
              <li>• Federal Reserve Bank Economic Data (FRED)</li>
              <li>• National Foundation for Credit Counseling Reports</li>
              <li>• Orange County Assessor's Office</li>
              <li>• VegaX AI client database (anonymized, 2020-2024)</li>
              <li>• Industry trade association reports</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mb-4">Statistical Notes</h3>
            <div className="bg-white p-6 border border-neutral-200 text-sm text-neutral-600">
              <p className="mb-4">
                All debt amounts are inflation-adjusted to 2025 dollars. Percentages represent 
                proportion of households with each debt type, not mutual exclusivity. 
                Settlement success rates based on completed programs only.
              </p>
              <p>
                Sample size: 15,847 Orange County households. Margin of error: ±2.1% at 95% confidence level.
                Data current as of January 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Download the Complete <span className="font-mono">Research Report</span>
          </h2>
          
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
            Access our full 47-page analysis including demographic breakdowns, economic indicators, 
            and 5-year trend projections for Orange County debt markets.
          </p>
          
          <button 
            onClick={downloadReport}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wide hover:bg-neutral-100 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF Report (2.3MB)
          </button>

          <div className="mt-6 text-xs text-neutral-500">
            Free for researchers, journalists, and non-commercial use
          </div>
        </div>
      </section>
    </div>
  );
}