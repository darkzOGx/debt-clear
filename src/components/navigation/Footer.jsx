import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
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
                      <div className="text-neutral-500 text-xs">• Retirement Calculator</div>
                    </div>
                  </div>
                  <div>
                    <Link to="/mortgage-calculators" className="text-neutral-400 hover:text-white transition block">
                      Mortgage Calculators
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="text-neutral-500 text-xs">• Mortgage Payment Calculator</div>
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
                    </div>
                  </div>
                  <div>
                    <Link to="/student-loan-calculators" className="text-neutral-400 hover:text-white transition block">
                      Student Loan & Specialty
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="text-neutral-500 text-xs">• Student Loan Calculator</div>
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
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="font-semibold text-white">Call: (502) 232-8511</div>
                <div>400 Spectrum Center Drive</div>
                <div>Suite 1000</div>
                <div>Irvine, CA 92618</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4">
            <div className="text-xs font-mono text-neutral-500">
              © 2025 Debt Settlement Research Laboratory. All methodologies proprietary.
            </div>
            <div className="text-xs font-mono text-neutral-500">
              CONFIDENTIAL • EVIDENCE-BASED • PERFORMANCE-GUARANTEED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}