import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, FileText, Calculator } from 'lucide-react';

export default function InternalLinkingHub({ currentPage = '', showCities = true, showResources = true, showCalculators = true }) {
  const cityLinks = [
    { name: 'Aliso Viejo', url: '/debt-settlement-aliso-viejo', keywords: 'debt settlement Aliso Viejo reviews' },
    { name: 'Anaheim', url: '/debt-settlement-anaheim', keywords: 'free debt settlement Anaheim' },
    { name: 'Brea', url: '/debt-settlement-brea', keywords: 'debt settlement Brea phone number' },
    { name: 'Buena Park', url: '/debt-settlement-buena-park', keywords: 'debt relief Buena Park reviews' },
    { name: 'Costa Mesa', url: '/debt-settlement-costa-mesa', keywords: 'best debt relief Costa Mesa' },
    { name: 'Cypress', url: '/debt-settlement-cypress', keywords: 'debt settlement Cypress phone number' },
    { name: 'Dana Point', url: '/debt-settlement-dana-point', keywords: 'free debt relief Dana Point' },
    { name: 'Fountain Valley', url: '/debt-settlement-fountain-valley', keywords: 'best debt settlement Fountain Valley' },
    { name: 'Fullerton', url: '/debt-settlement-fullerton', keywords: 'debt settlement Fullerton reviews' },
    { name: 'Garden Grove', url: '/debt-settlement-garden-grove', keywords: 'debt relief Garden Grove phone number' },
    { name: 'Huntington Beach', url: '/debt-settlement-huntington-beach', keywords: 'free debt relief Huntington Beach' },
    { name: 'Irvine', url: '/debt-settlement-irvine', keywords: 'debt settlement Irvine reviews, free debt settlement Irvine' },
    { name: 'La Habra', url: '/debt-settlement-la-habra', keywords: 'debt relief La Habra phone number' },
    { name: 'La Palma', url: '/debt-settlement-la-palma', keywords: 'best debt relief La Palma' },
    { name: 'Laguna Beach', url: '/debt-settlement-laguna-beach', keywords: 'debt settlement Laguna Beach reviews' },
    { name: 'Laguna Hills', url: '/debt-settlement-laguna-hills', keywords: 'debt relief Laguna Hills phone number' },
    { name: 'Laguna Niguel', url: '/debt-settlement-laguna-niguel', keywords: 'free debt relief Laguna Niguel' },
    { name: 'Laguna Woods', url: '/debt-settlement-laguna-woods', keywords: 'best debt relief Laguna Woods' },
    { name: 'Lake Forest', url: '/debt-settlement-lake-forest', keywords: 'debt settlement Lake Forest reviews' },
    { name: 'Los Alamitos', url: '/debt-settlement-los-alamitos', keywords: 'debt relief Los Alamitos phone number' },
    { name: 'Mission Viejo', url: '/debt-settlement-mission-viejo', keywords: 'free debt settlement Mission Viejo' },
    { name: 'Newport Beach', url: '/debt-settlement-newport-beach', keywords: 'best debt relief Newport Beach' },
    { name: 'Orange', url: '/debt-settlement-orange', keywords: 'debt settlement Orange reviews' },
    { name: 'Placentia', url: '/debt-settlement-placentia', keywords: 'debt relief Placentia phone number' },
    { name: 'Rancho Santa Margarita', url: '/debt-settlement-rancho-santa-margarita', keywords: 'debt settlement Rancho Santa Margarita' },
    { name: 'San Clemente', url: '/debt-settlement-san-clemente', keywords: 'debt relief San Clemente reviews' },
    { name: 'San Juan Capistrano', url: '/debt-settlement-san-juan-capistrano', keywords: 'free debt settlement San Juan Capistrano' },
    { name: 'Santa Ana', url: '/debt-settlement-santa-ana', keywords: 'debt settlement Santa Ana phone number' },
    { name: 'Seal Beach', url: '/debt-settlement-seal-beach', keywords: 'debt relief Seal Beach reviews' },
    { name: 'Stanton', url: '/debt-settlement-stanton', keywords: 'best debt relief Stanton' },
    { name: 'Tustin', url: '/debt-settlement-tustin', keywords: 'debt settlement Tustin phone number' },
    { name: 'Villa Park', url: '/debt-settlement-villa-park', keywords: 'debt relief Villa Park reviews' },
    { name: 'Westminster', url: '/debt-settlement-westminster', keywords: 'free debt settlement Westminster' },
    { name: 'Yorba Linda', url: '/debt-settlement-yorba-linda', keywords: 'debt settlement Yorba Linda reviews' }
  ];

  const resourceLinks = [
    { name: 'Orange County Debt Settlement Laws', url: '/blog/orange-county-debt-settlement-laws', description: 'California legal requirements and consumer protections' },
    { name: 'Debt Settlement Process Guide 2025', url: '/blog/debt-settlement-process-guide-orange-county-2025', description: 'Complete step-by-step process overview' },
    { name: 'Choosing a Debt Settlement Company', url: '/blog/choose-debt-settlement-company-orange-county', description: 'Essential criteria for selecting providers' },
    { name: 'Bankruptcy vs Debt Settlement', url: '/blog/bankruptcy-vs-debt-settlement-orange-county', description: 'Complete comparison of debt relief options' },
    { name: 'AI vs Traditional Debt Settlement', url: '/blog/ai-vs-traditional-debt-settlement', description: 'Technology advantages in debt negotiation' },
    { name: 'Credit Score Recovery After Settlement', url: '/blog/credit-score-recovery-debt-settlement-orange-county', description: 'Rebuilding credit post-settlement' },
    { name: 'Orange County Property Tax vs Debt Settlement', url: '/blog/orange-county-debt-settlement-guide-2025', description: 'Understanding secured vs unsecured debt' },
    { name: 'Medical Debt Relief Orange County', url: '/blog/medical-debt-relief-orange-county-2025', description: 'Specialized healthcare debt solutions' }
  ];

  const calculatorLinks = [
    { name: 'Debt Settlement Calculator', url: '/debt-calculator', description: 'Estimate your potential savings' },
    { name: 'Budget Calculator', url: '/budget-calculator', description: 'Plan your debt settlement payments' },
    { name: 'Debt Repayment Calculator', url: '/debt-repayment-calculator', description: 'Compare settlement vs full payment' },
    { name: 'Credit Score Recovery Calculator', url: '/credit-calculators', description: 'Timeline for credit improvement' }
  ];

  // Filter out current page from links
  const filteredCityLinks = cityLinks.filter(link => link.url !== currentPage);
  const filteredResourceLinks = resourceLinks.filter(link => link.url !== currentPage);
  const filteredCalculatorLinks = calculatorLinks.filter(link => link.url !== currentPage);

  return (
    <section className="py-16 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-black mb-4">Explore Orange County Debt Relief Options</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Comprehensive debt settlement services and resources for all Orange County residents, 
            including specialized local expertise and city-specific solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* City-Specific Services */}
          {showCities && (
            <div className="lg:col-span-1">
              <div className="bg-white border border-neutral-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-semibold text-black">Local Debt Settlement Services</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {filteredCityLinks.slice(0, 12).map((link, index) => (
                    <Link
                      key={index}
                      to={link.url}
                      className="text-neutral-700 hover:text-black hover:underline transition-colors"
                      title={link.keywords}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <Link
                    to="/orange-county-hub"
                    className="text-black hover:underline font-medium inline-flex items-center gap-1"
                  >
                    View All Cities <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Educational Resources */}
          {showResources && (
            <div className="lg:col-span-1">
              <div className="bg-white border border-neutral-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-semibold text-black">Educational Resources</h3>
                </div>
                <div className="space-y-4">
                  {filteredResourceLinks.slice(0, 6).map((link, index) => (
                    <div key={index}>
                      <Link
                        to={link.url}
                        className="text-black hover:underline font-medium block"
                      >
                        {link.name}
                      </Link>
                      <p className="text-xs text-neutral-600 mt-1">{link.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <Link
                    to="/blog"
                    className="text-black hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Read All Articles <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Financial Tools */}
          {showCalculators && (
            <div className="lg:col-span-1">
              <div className="bg-white border border-neutral-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-semibold text-black">Financial Calculators</h3>
                </div>
                <div className="space-y-4">
                  {filteredCalculatorLinks.map((link, index) => (
                    <div key={index}>
                      <Link
                        to={link.url}
                        className="text-black hover:underline font-medium block"
                      >
                        {link.name}
                      </Link>
                      <p className="text-xs text-neutral-600 mt-1">{link.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <Link
                    to="/debt-tools"
                    className="text-black hover:underline font-medium inline-flex items-center gap-1"
                  >
                    All Financial Tools <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Company and Legal Information Links */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-black mb-4">Company Research</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-700">
                <span>Americor reviews Orange County</span>
                <span>CountryWide Debt Relief reviews</span>
                <span>Americor customer service hours</span>
                <span>Americor class action lawsuit</span>
                <span>California debt settlement licensing</span>
                <span>DFPI complaint database</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Legal & Tax Information</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-700">
                <span>Orange County property taxes</span>
                <span>California statute of limitations debt</span>
                <span>Court-ordered debt collection</span>
                <span>Prop 19 Orange County impact</span>
                <span>Tax debt public record California</span>
                <span>Orange County excess funds list</span>
              </div>
            </div>
          </div>
        </div>

        {/* External Links */}
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-600 mb-4">Additional Resources:</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-500">
            <a 
              href="https://www.dfpi.ca.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black hover:underline"
            >
              CA Dept. of Financial Protection
            </a>
            <a 
              href="https://www.bbb.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black hover:underline"
            >
              Better Business Bureau
            </a>
            <a 
              href="https://www.nfcc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black hover:underline"
            >
              National Foundation for Credit Counseling
            </a>
            <a 
              href="https://www.ftc.gov/debt-settlement" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black hover:underline"
            >
              FTC Debt Settlement Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}