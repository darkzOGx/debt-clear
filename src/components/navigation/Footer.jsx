import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Services Column */}
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                  Services
                </div>
                <div className="space-y-2 text-sm">
                  <Link to="/debt-settlement-anaheim" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Anaheim
                  </Link>
                  <Link to="/debt-settlement-santa-ana" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Santa Ana
                  </Link>
                  <Link to="/debt-settlement-irvine" className="text-neutral-400 hover:text-white transition block">
                    Debt Settlement Irvine
                  </Link>
                  <Link to="/debt-settlement-huntington-beach" className="text-neutral-400 hover:text-white transition block">
                    Huntington Beach
                  </Link>
                  <Link to="/debt-settlement-newport-beach" className="text-neutral-400 hover:text-white transition block">
                    Newport Beach
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
                <div className="space-y-2 text-sm">
                  <Link to="/money-calculators" className="text-neutral-400 hover:text-white transition block">
                    Money Calculators
                  </Link>
                  <Link to="/mortgage-calculators" className="text-neutral-400 hover:text-white transition block">
                    Mortgage Calculators
                  </Link>
                  <Link to="/auto-calculators" className="text-neutral-400 hover:text-white transition block">
                    Auto Calculators
                  </Link>
                  <Link to="/credit-calculators" className="text-neutral-400 hover:text-white transition block">
                    Credit Card Calculators
                  </Link>
                  <Link to="/student-loan-calculators" className="text-neutral-400 hover:text-white transition block">
                    Student Loan & Specialty
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-4">
                  Orange County Results
                </div>
                <div className="space-y-2 text-sm text-neutral-400">
                  <div>2,847+ County Residents Helped</div>
                  <div>$127M+ County Debt Eliminated</div>
                  <div>52% Average Reduction</div>
                  <div>12-24 Months Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
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