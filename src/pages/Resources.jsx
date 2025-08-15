import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Resources() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              DEBT RELIEF RESOURCES
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-light text-black mb-6 leading-tight">
            Orange County Debt Relief
            <br />
            <span className="font-mono">Resources & Research</span>
          </h1>

          <p className="text-xl text-neutral-600 max-w-3xl">
            Comprehensive resources for Orange County residents seeking debt settlement, 
            reduction strategies, and financial analysis. Research-based guidance for 
            county debt relief in 12-24 months.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-black mb-8">
            Quick Links for County Residents
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link 
              to="/blog"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
            >
              <BookOpen className="w-8 h-8 text-black mb-4" />
              <h3 className="font-semibold text-black mb-2 group-hover:underline">
                Debt Settlement Articles
              </h3>
              <p className="text-neutral-600 text-sm mb-4">
                60+ research articles on Orange County debt relief, reduction strategies, and settlement analysis.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-mono text-black">
                View Articles <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link 
              to="/#calculator"
              onClick={scrollToTop}
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
            >
              <Calculator className="w-8 h-8 text-black mb-4" />
              <h3 className="font-semibold text-black mb-2 group-hover:underline">
                Debt Profile Calculator
              </h3>
              <p className="text-neutral-600 text-sm mb-4">
                Analyze your debt profile and calculate potential reduction in 12-24 months.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-mono text-black">
                Calculate Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <div className="bg-black text-white p-6">
              <Phone className="w-8 h-8 text-white mb-4" />
              <h3 className="font-semibold text-white mb-2">
                Call for Analysis
              </h3>
              <p className="text-neutral-300 text-sm mb-4">
                Speak with our debt settlement specialists for immediate assistance.
              </p>
              <a href="tel:502-232-8511" className="inline-flex items-center gap-2 text-sm font-mono text-white">
                (502) 232-8511 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Orange County Cities */}
          <h2 className="text-3xl font-light text-black mb-8">
            Orange County Debt Settlement by City
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { name: 'Anaheim', link: '/debt-settlement-anaheim' },
              { name: 'Santa Ana', link: '/debt-settlement-santa-ana' },
              { name: 'Irvine', link: '/debt-settlement-irvine' },
              { name: 'Huntington Beach', link: '/debt-settlement-huntington-beach' },
              { name: 'Garden Grove', link: '/debt-settlement-garden-grove' },
              { name: 'Fullerton', link: '/debt-settlement-fullerton' },
              { name: 'Orange', link: '/debt-settlement-orange' },
              { name: 'Costa Mesa', link: '/debt-settlement-costa-mesa' },
              { name: 'Mission Viejo', link: '/debt-settlement-mission-viejo' },
              { name: 'Westminster', link: '/debt-settlement-westminster' },
              { name: 'Newport Beach', link: '/debt-settlement-newport-beach' },
              { name: 'Laguna Beach', link: '/debt-settlement-laguna-beach' },
              { name: 'Fountain Valley', link: '/debt-settlement-fountain-valley' },
              { name: 'Yorba Linda', link: '/debt-settlement-yorba-linda' },
              { name: 'Dana Point', link: '/debt-settlement-dana-point' },
              { name: 'Laguna Niguel', link: '/debt-settlement-laguna-niguel' }
            ].map((city) => (
              <Link
                key={city.name}
                to={city.link}
                className="bg-white p-4 border border-neutral-200 hover:border-black transition-colors text-center"
              >
                <span className="text-sm font-mono text-black">{city.name}</span>
              </Link>
            ))}
          </div>

          {/* External Resources */}
          <h2 className="text-3xl font-light text-black mb-8">
            External Resources for County Residents
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 p-6 border border-neutral-200">
              <h3 className="font-semibold text-black mb-4">Government Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.consumer.ftc.gov/articles/debt-relief-and-credit-repair" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black"
                  >
                    FTC Debt Relief Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.consumerfinance.gov/consumer-tools/debt-collection/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black"
                  >
                    CFPB Debt Collection Resources <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://oag.ca.gov/consumers/general/debt_collectors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black"
                  >
                    California Attorney General - Debt Collection <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 border border-neutral-200">
              <h3 className="font-semibold text-black mb-4">Orange County Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.occourts.org/self-help/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black"
                  >
                    OC Superior Court Self-Help <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ocgov.com/residents/social-services" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black"
                  >
                    OC Social Services Agency <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.legal-aid.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black"
                  >
                    Legal Aid Society of Orange County <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-black text-white p-8 text-center">
            <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-light mb-4">
              Visit Our Orange County Office
            </h3>
            <p className="text-neutral-300 mb-2">
              400 Spectrum Center Drive, Suite 1000
            </p>
            <p className="text-neutral-300 mb-6">
              Irvine, CA 92618
            </p>
            <div className="flex justify-center gap-6">
              <a href="tel:502-232-8511" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 hover:bg-neutral-100 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-mono text-sm uppercase tracking-wide">Call Now</span>
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
                <span className="font-mono text-sm uppercase tracking-wide">Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}