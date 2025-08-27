import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-left">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Cities Column */}
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                  Cities
                </div>
                <div className="space-y-2 text-sm">
                  <Link to="/debt-settlement-anaheim" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Anaheim
                  </Link>
                  <Link to="/debt-settlement-brea" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Brea
                  </Link>
                  <Link to="/debt-settlement-costa-mesa" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Costa Mesa
                  </Link>
                  <Link to="/debt-settlement-cypress" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Cypress
                  </Link>
                  <Link to="/debt-settlement-dana-point" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Dana Point
                  </Link>
                  <Link to="/debt-settlement-fountain-valley" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Fountain Valley
                  </Link>
                  <Link to="/debt-settlement-fullerton" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Fullerton
                  </Link>
                  <Link to="/debt-settlement-garden-grove" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Garden Grove
                  </Link>
                  <Link to="/debt-settlement-huntington-beach" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Huntington Beach
                  </Link>
                  <Link to="/debt-settlement-irvine" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Irvine
                  </Link>
                  <Link to="/debt-settlement-la-habra" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement La Habra
                  </Link>
                  <Link to="/debt-settlement-laguna-beach" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Laguna Beach
                  </Link>
                  <Link to="/debt-settlement-laguna-niguel" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Laguna Niguel
                  </Link>
                  <Link to="/debt-settlement-laguna-woods" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Laguna Woods
                  </Link>
                  <Link to="/debt-settlement-mission-viejo" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Mission Viejo
                  </Link>
                  <Link to="/debt-settlement-newport-beach" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Newport Beach
                  </Link>
                  <Link to="/debt-settlement-orange" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Orange
                  </Link>
                  <Link to="/debt-settlement-santa-ana" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Santa Ana
                  </Link>
                  <Link to="/debt-settlement-seal-beach" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Seal Beach
                  </Link>
                  <Link to="/debt-settlement-westminster" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Westminster
                  </Link>
                  <Link to="/debt-settlement-yorba-linda" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Yorba Linda
                  </Link>
                </div>
              </div>

              {/* Resources Column */}
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                  Resources
                </div>
                <div className="space-y-2 text-sm">
                  <Link to="/blog" className="text-neutral-400 hover:text-white transition block">
                    Blog & Articles
                  </Link>
                  <Link to="/faq" className="text-neutral-400 hover:text-white transition block">
                    FAQ
                  </Link>
                  <Link to="/case-studies" className="text-neutral-400 hover:text-white transition block">
                    Case Studies
                  </Link>
                  <Link to="/about-us" className="text-neutral-400 hover:text-white transition block">
                    About Us
                  </Link>
                  <Link to="/orange-county-hub" className="text-neutral-400 hover:text-white transition block">
                    Orange County Hub
                  </Link>
                </div>
              </div>

              {/* DEBT TOOLS Column */}
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                  Debt Tools
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <Link to="/money-calculators" className="text-neutral-400 hover:text-white transition block">
                      Money Calculators
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="text-neutral-500 text-xs">• 401(k) Calculator</div>
                      <div className="text-neutral-500 text-xs">• Budget Calculator</div>
                      <div className="text-neutral-500 text-xs">• Compound Interest Calculator</div>
                      <div className="text-neutral-500 text-xs">• Retirement Calculator</div>
                      <div className="text-neutral-500 text-xs">• Savings Calculator</div>
                      <div className="text-neutral-500 text-xs">• Debt Settlement vs Bankruptcy</div>
                      <div className="text-neutral-500 text-xs">• Credit Card Debt Relief (Under $5K)</div>
                    </div>
                  </div>
                  <div>
                    <Link to="/mortgage-calculators" className="text-neutral-400 hover:text-white transition block">
                      Mortgage Calculators
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="text-neutral-500 text-xs">• Mortgage Calculator</div>
                      <div className="text-neutral-500 text-xs">• Mortgage Affordability Calculator</div>
                      <div className="text-neutral-500 text-xs">• Refinance Calculator</div>
                      <div className="text-neutral-500 text-xs">• Home Equity Calculator</div>
                    </div>
                  </div>
                  <div>
                    <Link to="/auto-calculators" className="text-neutral-400 hover:text-white transition block">
                      Auto Calculators
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="text-neutral-500 text-xs">• Auto Loan Calculator</div>
                      <div className="text-neutral-500 text-xs">• Auto Affordability Calculator</div>
                      <div className="text-neutral-500 text-xs">• Auto Refinance Calculator</div>
                      <div className="text-neutral-500 text-xs">• Lease vs Buy Calculator</div>
                    </div>
                  </div>
                  <div>
                    <Link to="/credit-calculators" className="text-neutral-400 hover:text-white transition block">
                      Credit Card Calculators
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="text-neutral-500 text-xs">• Debt Repayment Calculator</div>
                      <div className="text-neutral-500 text-xs">• Credit Card Payoff Calculator</div>
                      <div className="text-neutral-500 text-xs">• Balance Transfer Calculator</div>
                      <div className="text-neutral-500 text-xs">• Debt Snowball Calculator</div>
                    </div>
                  </div>
                  <div>
                    <Link to="/student-loan-calculators" className="text-neutral-400 hover:text-white transition block">
                      Student Loan & Specialty
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="text-neutral-500 text-xs">• Student Loan Calculator</div>
                      <div className="text-neutral-500 text-xs">• Student Loan Refinance Calculator</div>
                      <div className="text-neutral-500 text-xs">• Loan Forgiveness Calculator</div>
                      <div className="text-neutral-500 text-xs">• Boat Loan Calculator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                Contact Information
              </div>
              <div className="space-y-4 text-sm text-neutral-400" itemScope itemType="http://schema.org/Organization">
                <div className="font-semibold text-white mb-6">
                  <span itemProp="name">Orange County Debt Center</span>
                </div>
                
                {/* Phone Contact */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-neutral-500" />
                  <div className="font-semibold text-white">
                    <span itemProp="telephone">(844) 541-9236</span>
                  </div>
                </div>
                
                {/* Email Contacts */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neutral-500" />
                    <div>
                      <div className="text-white font-medium">
                        <span itemProp="email">contact@orangecountydebtcenter.com</span>
                      </div>
                      <div className="text-xs text-neutral-500">Direct Contact</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neutral-600" />
                    <div>
                      <div className="text-neutral-300">
                        info@orangecountydebtcenter.com
                      </div>
                      <div className="text-xs text-neutral-500">General Inquiries</div>
                    </div>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-3" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <MapPin className="w-4 h-4 text-neutral-500 mt-0.5" />
                  <div>
                    <div itemProp="streetAddress" className="text-neutral-300">400 Spectrum Center Drive</div>
                    <div itemProp="streetAddress" className="text-neutral-300">Suite 1000</div>
                    <div className="text-neutral-300">
                      <span itemProp="addressLocality">Irvine</span>, 
                      <span itemProp="addressRegion"> CA</span> 
                      <span itemProp="postalCode"> 92618</span>
                    </div>
                    <meta itemProp="addressCountry" content="US" />
                  </div>
                </div>
                
                <div className="text-xs text-neutral-500 pt-2 border-t border-neutral-800">
                  <span itemProp="areaServed">Serving Orange County, California</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
            <Link to="/privacy-policy" className="text-xs font-mono text-neutral-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <div className="text-neutral-600">|</div>
            <Link to="/terms-of-service" className="text-xs font-mono text-neutral-400 hover:text-white transition">
              Terms of Service
            </Link>
            <div className="text-neutral-600">|</div>
            <Link to="/about-us" className="text-xs font-mono text-neutral-400 hover:text-white transition">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="text-xs font-mono text-neutral-500">
              © 2025 Orange County Debt Center. All rights reserved.
            </div>
            <div className="text-xs font-mono text-neutral-500">
              Licensed • Bonded • California DFPI Certified
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}