import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Users, Building2, DollarSign, Home, Briefcase, GraduationCap, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

// Orange County comprehensive data and statistics
const countyData = {
  overview: {
    population: "3,186,989",
    medianIncome: "$94,441",
    medianHomePrice: "$1,050,000",
    unemploymentRate: "3.2%",
    povertyRate: "10.2%",
    totalHouseholds: "1,066,351"
  },
  cities: [
    { name: "Anaheim", population: "346,235", medianIncome: "$75,818", link: "/debt-settlement-anaheim" },
    { name: "Santa Ana", population: "310,227", medianIncome: "$66,145", link: "/debt-settlement-santa-ana" },
    { name: "Irvine", population: "307,670", medianIncome: "$105,126", link: "/debt-settlement-irvine" },
    { name: "Huntington Beach", population: "198,711", medianIncome: "$95,096", link: "/debt-settlement-huntington-beach" },
    { name: "Garden Grove", population: "171,949", medianIncome: "$69,278", link: "/debt-settlement-garden-grove" },
    { name: "Fullerton", population: "139,921", medianIncome: "$82,577", link: "/debt-settlement-fullerton" },
    { name: "Orange", population: "139,484", medianIncome: "$85,042", link: "/debt-settlement-orange" },
    { name: "Costa Mesa", population: "111,918", medianIncome: "$84,138", link: "/debt-settlement-costa-mesa" },
    { name: "Mission Viejo", population: "93,937", medianIncome: "$105,928", link: "/debt-settlement-mission-viejo" },
    { name: "Westminster", population: "90,857", medianIncome: "$66,616", link: "/debt-settlement-westminster" },
    { name: "Newport Beach", population: "85,239", medianIncome: "$142,265", link: "/debt-settlement-newport-beach" },
    { name: "Laguna Beach", population: "22,827", medianIncome: "$129,983", link: "/debt-settlement-laguna-beach" },
    { name: "Fountain Valley", population: "55,313", medianIncome: "$90,824", link: "/debt-settlement-fountain-valley" },
    { name: "Yorba Linda", population: "68,336", medianIncome: "$122,818", link: "/debt-settlement-yorba-linda" },
    { name: "Dana Point", population: "33,107", medianIncome: "$96,924", link: "/debt-settlement-dana-point" },
    { name: "Laguna Niguel", population: "64,355", medianIncome: "$108,949", link: "/debt-settlement-laguna-niguel" },
    { name: "Seal Beach", population: "23,896", medianIncome: "$71,776", link: "/debt-settlement-seal-beach" },
    { name: "Laguna Woods", population: "16,192", medianIncome: "$52,338", link: "/debt-settlement-laguna-woods" }
  ],
  debtStatistics: {
    averageDebt: "$47,820",
    creditCardDebt: "$8,420",
    mortgageDebt: "$487,000",
    studentLoanDebt: "$35,600",
    autoLoanDebt: "$27,340",
    delinquencyRate: "2.8%"
  },
  industries: [
    { name: "Healthcare", employees: "234,000", avgSalary: "$67,000" },
    { name: "Tourism & Hospitality", employees: "178,000", avgSalary: "$35,000" },
    { name: "Technology", employees: "156,000", avgSalary: "$115,000" },
    { name: "Manufacturing", employees: "142,000", avgSalary: "$58,000" },
    { name: "Education", employees: "98,000", avgSalary: "$62,000" },
    { name: "Finance", employees: "87,000", avgSalary: "$95,000" }
  ],
  resources: [
    {
      category: "Government Resources",
      items: [
        { name: "OC Community Services", url: "https://www.occommunityservices.org", description: "County assistance programs" },
        { name: "OC Housing Authority", url: "https://www.ochousing.org", description: "Housing assistance and counseling" },
        { name: "CalFresh OC", url: "https://www.ssa.ocgov.com/gov/assistance/calfresh", description: "Food assistance programs" },
        { name: "OC Health Care Agency", url: "https://www.ochealthinfo.com", description: "Medical debt assistance" }
      ]
    },
    {
      category: "Legal Resources",
      items: [
        { name: "Legal Aid Society of OC", url: "https://www.legal-aid.com", description: "Free legal assistance" },
        { name: "OC Bar Association", url: "https://www.ocbar.org", description: "Lawyer referral service" },
        { name: "Consumer Protection Unit", url: "https://www.orangecountyda.org/consumer", description: "Fraud and scam protection" },
        { name: "OC Superior Court", url: "https://www.occourts.org", description: "Self-help legal resources" }
      ]
    },
    {
      category: "Financial Counseling",
      items: [
        { name: "Consumer Credit Counseling", url: "https://www.nfcc.org", description: "Non-profit credit counseling" },
        { name: "Financial Literacy OC", url: "https://www.ocde.us/adulted/pages/financial-literacy.aspx", description: "Free financial education" },
        { name: "OC United Way", url: "https://www.unitedwayoc.org", description: "Financial stability programs" },
        { name: "Small Business Development", url: "https://www.ocsbdc.org", description: "Business debt counseling" }
      ]
    },
    {
      category: "Research & Studies",
      items: [
        { name: "AI vs. Human Study", url: "/ai-vs-human-debt-settlement-study", description: "Comparative analysis of AI vs traditional debt settlement outcomes" },
        { name: "OC Debt Crisis Observatory", url: "/orange-county-debt-crisis-observatory", description: "Real-time Orange County debt and economic monitoring" },
        { name: "Medical Hub Debt Relief", url: "/medical-debt-relief-hub", description: "Comprehensive medical debt relief resources and strategies" }
      ]
    }
  ]
};

export default function OrangeCountyHub() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [cityStartIndex, setCityStartIndex] = useState(0);
  const citiesPerPage = 3;

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nextCities = () => {
    if (cityStartIndex + citiesPerPage < countyData.cities.length) {
      setCityStartIndex(cityStartIndex + citiesPerPage);
    }
  };

  const prevCities = () => {
    if (cityStartIndex > 0) {
      setCityStartIndex(Math.max(0, cityStartIndex - citiesPerPage));
    }
  };

  const visibleCities = countyData.cities.slice(cityStartIndex, cityStartIndex + citiesPerPage);
  const canGoNext = cityStartIndex + citiesPerPage < countyData.cities.length;
  const canGoPrev = cityStartIndex > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
                ORANGE COUNTY FINANCIAL RESOURCE HUB
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Orange County:<br />
              <span className="font-mono text-3xl lg:text-4xl">Debt Relief Center</span>
            </h1>
            
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto">
              Comprehensive financial resources, local statistics, and debt relief solutions 
              for Orange County's 3.2 million residents across 34 cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-neutral-50 border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto py-4">
            {['overview', 'cities', 'statistics', 'industries', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`pb-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  selectedTab === tab
                    ? 'border-black text-black'
                    : 'border-transparent text-neutral-600 hover:text-black'
                }`}
              >
                <span className="font-mono text-sm uppercase tracking-wide">
                  {tab.replace('-', ' ')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Overview Tab */}
          {selectedTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-light text-black mb-8 text-center">
                Orange County <span className="font-mono">Economic Snapshot</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <Users className="w-8 h-8 text-black mb-4 mx-auto" />
                  <div className="text-3xl font-mono text-black mb-2">{countyData.overview.population}</div>
                  <div className="text-sm text-neutral-600">Total Population</div>
                  <div className="text-xs text-neutral-500 mt-2">3rd largest county in California</div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <DollarSign className="w-8 h-8 text-black mb-4 mx-auto" />
                  <div className="text-3xl font-mono text-black mb-2">{countyData.overview.medianIncome}</div>
                  <div className="text-sm text-neutral-600">Median Household Income</div>
                  <div className="text-xs text-neutral-500 mt-2">28% above national average</div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <Home className="w-8 h-8 text-black mb-4 mx-auto" />
                  <div className="text-3xl font-mono text-black mb-2">{countyData.overview.medianHomePrice}</div>
                  <div className="text-sm text-neutral-600">Median Home Price</div>
                  <div className="text-xs text-neutral-500 mt-2">Top 5 most expensive in US</div>
                </div>
              </div>

              <div className="bg-neutral-50 p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-black mb-4">Why Orange County Residents Face Unique Financial Challenges</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">High Cost of Living</h4>
                    <p className="text-sm text-neutral-600 mb-4">
                      Housing costs consume 35-45% of median household income, leaving less for debt repayment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Income Inequality</h4>
                    <p className="text-sm text-neutral-600 mb-4">
                      Wide gap between high-earning tech/finance workers and service industry employees.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Healthcare Costs</h4>
                    <p className="text-sm text-neutral-600 mb-4">
                      Premium healthcare facilities mean higher medical debt when insurance falls short.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Education Expenses</h4>
                    <p className="text-sm text-neutral-600 mb-4">
                      Private school and college costs drive families into significant educational debt.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Cities Tab */}
          {selectedTab === 'cities' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-light text-black mb-8 text-center">
                Orange County <span className="font-mono">Cities & Communities</span>
              </h2>
              
              {/* Cities Navigation Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-neutral-600">
                  Showing {cityStartIndex + 1}-{Math.min(cityStartIndex + citiesPerPage, countyData.cities.length)} of {countyData.cities.length} cities
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevCities}
                    disabled={!canGoPrev}
                    className={`p-2 border transition-colors ${
                      canGoPrev 
                        ? 'border-neutral-300 hover:border-black text-black hover:bg-neutral-50' 
                        : 'border-neutral-200 text-neutral-400 cursor-not-allowed'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextCities}
                    disabled={!canGoNext}
                    className={`p-2 border transition-colors ${
                      canGoNext 
                        ? 'border-neutral-300 hover:border-black text-black hover:bg-neutral-50' 
                        : 'border-neutral-200 text-neutral-400 cursor-not-allowed'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Cities Grid */}
              <div className="grid md:grid-cols-3 gap-4 min-h-[400px]">
                {visibleCities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={city.link}
                      className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors group block h-full"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-black">{city.name}</h3>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Population</span>
                          <span className="font-mono text-black">{city.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Median Income</span>
                          <span className="font-mono text-black">{city.medianIncome}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Cities Navigation Footer */}
              <div className="flex justify-center items-center mt-8 gap-4">
                <button
                  onClick={prevCities}
                  disabled={!canGoPrev}
                  className={`inline-flex items-center gap-2 px-4 py-2 border transition-colors ${
                    canGoPrev 
                      ? 'border-neutral-300 hover:border-black text-black hover:bg-neutral-50' 
                      : 'border-neutral-200 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="font-mono text-sm">Previous</span>
                </button>
                
                <div className="text-sm text-neutral-600 font-mono">
                  {Math.floor(cityStartIndex / citiesPerPage) + 1} / {Math.ceil(countyData.cities.length / citiesPerPage)}
                </div>
                
                <button
                  onClick={nextCities}
                  disabled={!canGoNext}
                  className={`inline-flex items-center gap-2 px-4 py-2 border transition-colors ${
                    canGoNext 
                      ? 'border-neutral-300 hover:border-black text-black hover:bg-neutral-50' 
                      : 'border-neutral-200 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  <span className="font-mono text-sm">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-12 p-8 bg-neutral-50 border border-neutral-200">
                <h3 className="text-xl font-semibold text-black mb-4">Regional Debt Patterns</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-mono text-sm uppercase text-neutral-600 mb-2">North County</h4>
                    <p className="text-sm text-neutral-600">
                      Higher medical and credit card debt due to older demographics in cities like Fullerton and Anaheim.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm uppercase text-neutral-600 mb-2">Central County</h4>
                    <p className="text-sm text-neutral-600">
                      Business and mortgage debt concentrated in Irvine and Costa Mesa's professional communities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm uppercase text-neutral-600 mb-2">South County</h4>
                    <p className="text-sm text-neutral-600">
                      Luxury lifestyle debt in coastal communities like Newport Beach and Laguna Beach.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Statistics Tab */}
          {selectedTab === 'statistics' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-light text-black mb-8 text-center">
                Orange County <span className="font-mono">Debt Statistics</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <div className="text-xs font-mono uppercase text-neutral-600 mb-2">Average Total Debt</div>
                  <div className="text-3xl font-mono text-black mb-2">{countyData.debtStatistics.averageDebt}</div>
                  <div className="text-xs text-neutral-500">Per household (excluding mortgage)</div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <div className="text-xs font-mono uppercase text-neutral-600 mb-2">Credit Card Debt</div>
                  <div className="text-3xl font-mono text-black mb-2">{countyData.debtStatistics.creditCardDebt}</div>
                  <div className="text-xs text-neutral-500">Average balance per card holder</div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <div className="text-xs font-mono uppercase text-neutral-600 mb-2">Student Loan Debt</div>
                  <div className="text-3xl font-mono text-black mb-2">{countyData.debtStatistics.studentLoanDebt}</div>
                  <div className="text-xs text-neutral-500">Average per borrower</div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <div className="text-xs font-mono uppercase text-neutral-600 mb-2">Auto Loan Debt</div>
                  <div className="text-3xl font-mono text-black mb-2">{countyData.debtStatistics.autoLoanDebt}</div>
                  <div className="text-xs text-neutral-500">Average loan balance</div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <div className="text-xs font-mono uppercase text-neutral-600 mb-2">Mortgage Debt</div>
                  <div className="text-3xl font-mono text-black mb-2">{countyData.debtStatistics.mortgageDebt}</div>
                  <div className="text-xs text-neutral-500">Median mortgage balance</div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 text-center">
                  <div className="text-xs font-mono uppercase text-neutral-600 mb-2">Delinquency Rate</div>
                  <div className="text-3xl font-mono text-black mb-2">{countyData.debtStatistics.delinquencyRate}</div>
                  <div className="text-xs text-neutral-500">90+ days past due</div>
                </div>
              </div>

              <div className="bg-black text-white p-8">
                <h3 className="text-2xl font-light mb-6 text-center">
                  Orange County residents carry <span className="font-mono">$52.4 billion</span> in consumer debt
                </h3>
                <p className="text-neutral-300 mb-8 text-center">
                  Our AI-powered debt settlement program has helped eliminate over $8.4 million in debt for Orange County families.
                </p>
                <div className="text-center">
                  <button
                    onClick={scrollToConsultation}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 hover:bg-neutral-100 transition-colors"
                  >
                    <span className="font-mono text-sm uppercase tracking-wide">Get Your Free Analysis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Industries Tab */}
          {selectedTab === 'industries' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-light text-black mb-8 text-center">
                Major <span className="font-mono">Employment Sectors</span>
              </h2>
              
              <div className="space-y-4 mb-12">
                {countyData.industries.map((industry) => (
                  <div key={industry.name} className="bg-white p-6 border border-neutral-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-black">{industry.name}</h3>
                        <p className="text-sm text-neutral-600">{industry.employees} employees</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-mono text-black">{industry.avgSalary}</div>
                        <div className="text-xs text-neutral-600">Average salary</div>
                      </div>
                    </div>
                    <div className="w-full bg-neutral-200 h-2">
                      <div 
                        className="bg-black h-full"
                        style={{ width: `${(parseInt(industry.employees.replace(',', '')) / 234000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-50 p-8 border border-neutral-200">
                <h3 className="text-xl font-semibold text-black mb-4">Industry-Specific Debt Challenges</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Briefcase className="w-6 h-6 text-black mb-2" />
                    <h4 className="font-semibold text-black mb-2">Tech Workers</h4>
                    <p className="text-sm text-neutral-600">
                      Stock option losses and startup failures create sudden debt crises despite high incomes.
                    </p>
                  </div>
                  <div>
                    <Heart className="w-6 h-6 text-black mb-2" />
                    <h4 className="font-semibold text-black mb-2">Healthcare Workers</h4>
                    <p className="text-sm text-neutral-600">
                      Student loan debt combined with pandemic burnout leads to financial stress.
                    </p>
                  </div>
                  <div>
                    <Building2 className="w-6 h-6 text-black mb-2" />
                    <h4 className="font-semibold text-black mb-2">Hospitality Workers</h4>
                    <p className="text-sm text-neutral-600">
                      Seasonal employment and low wages create chronic debt accumulation.
                    </p>
                  </div>
                  <div>
                    <GraduationCap className="w-6 h-6 text-black mb-2" />
                    <h4 className="font-semibold text-black mb-2">Educators</h4>
                    <p className="text-sm text-neutral-600">
                      High cost of living versus moderate salaries creates persistent financial pressure.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Resources Tab */}
          {selectedTab === 'resources' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-light text-black mb-8 text-center">
                Local <span className="font-mono">Financial Resources</span>
              </h2>
              
              {countyData.resources.map((category) => (
                <div key={category.category} className="mb-12">
                  <h3 className="text-xl font-semibold text-black mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="bg-white p-6 border border-neutral-200">
                        <h4 className="font-semibold text-black mb-2">{item.name}</h4>
                        <p className="text-sm text-neutral-600 mb-4">{item.description}</p>
                        <a href={item.url} className="text-sm font-mono text-black hover:underline">
                          Learn More →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-black text-white p-8 mt-12 text-center">
                <h3 className="text-2xl font-light mb-4">
                  Need Immediate <span className="font-mono">Debt Relief?</span>
                </h3>
                <p className="text-neutral-300 mb-6">
                  Don't wait for your financial situation to worsen. Our AI-powered system can analyze your debt and create a personalized settlement plan today.
                </p>
                <button
                  onClick={scrollToConsultation}
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 hover:bg-neutral-100 transition-colors"
                >
                  <span className="font-mono text-sm uppercase tracking-wide">Schedule Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Research Consultation */}
      <section id="consultation" className="py-8 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Orange County Debt Relief Resource Hub",
            "description": "Comprehensive financial resources and debt relief solutions for Orange County residents",
            "url": "https://ocdebtcenter.com/orange-county-hub",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://ocdebtcenter.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Orange County Hub",
                  "item": "https://ocdebtcenter.com/orange-county-hub"
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}