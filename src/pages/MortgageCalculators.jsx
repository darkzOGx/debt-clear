import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, DollarSign, TrendingDown, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';
import MortgageCalculator from '../components/calculator/MortgageCalculator';
import { useCanonicalLink } from '../hooks/useCanonicalLink';

// Calculator Component
function CalculatorCard({ title, description, icon: Icon, calculator: Calculator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <Icon className="w-8 h-8 text-white mt-1" />
        <div className="flex-1">
          <h4 className="text-lg font-bold text-black mb-2">{title}</h4>
          <p className="text-sm text-neutral-700 mb-4">{description}</p>
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white text-black px-6 py-3 rounded hover:bg-neutral-100 transition inline-flex items-center justify-center gap-2 mb-4"
      >
        {isOpen ? 'Hide Calculator' : 'Use Calculator'}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      
      {isOpen && (
        <div className="border-t pt-4">
          <Calculator />
        </div>
      )}
    </div>
  );
}

export default function MortgageCalculators() {
  useCanonicalLink('https://ocdebtcenter.com/mortgage-calculators');
  const calculators = [
    {
      title: "Mortgage Calculator",
      description: "Get an estimate of the monthly mortgage payment you could pay, including property taxes and insurance.",
      icon: Home,
      calculator: MortgageCalculator
    },
    {
      title: "Mortgage Affordability Calculator",
      description: "Calculate how much house you can afford based on your income, debts, and down payment.",
      icon: DollarSign,
      calculator: MortgageCalculator
    },
    {
      title: "Refinance Calculator",
      description: "See if refinancing your mortgage could save you money with lower rates or different terms.",
      icon: TrendingDown,
      calculator: MortgageCalculator
    },
    {
      title: "Home Equity Calculator",
      description: "Calculate your available home equity and explore loan or line of credit options.",
      icon: Shield,
      calculator: MortgageCalculator
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mortgage Calculators - Orange County Home Financing Tools | OC Debt Center</title>
        <meta name="description" content="Free mortgage calculators for Orange County home buyers. Calculate mortgage payments, affordability, refinance savings, and home equity. Professional real estate tools." />
        <meta name="keywords" content="mortgage calculator, home loan calculator, refinance calculator, home equity calculator, Orange County real estate, mortgage affordability" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
            <Link 
              to="/debt-tools" 
              className="inline-flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-white transition-colors mb-8 z-10 relative"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Financial Tools
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">HOME FINANCING & REAL ESTATE PLANNING</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Mortgage Calculators:<br />
              <span className="font-mono text-3xl lg:text-4xl">Home Financing Tools</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
              Home buying calculators to help you understand mortgage payments, affordability, and the true cost of homeownership in Orange County. 
              Make informed decisions about your biggest investment.
            </p>
          </div>
        </section>

        {/* Calculators */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {calculators.map((calc, index) => (
                <CalculatorCard key={index} {...calc} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-black to-neutral-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Ready to Buy Your Dream Home?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 font-light">
              Get expert mortgage advice and personalized financing strategies from our Orange County real estate specialists
            </p>
            <button
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-neutral-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Mortgage Consultation
            </button>
          </div>
        </section>

        {/* Consultation Section */}
        <section id="consultation" className="py-8 bg-white border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-6">
            <ConsultationForm />
          </div>
        </section>
      </div>
    </>
  );
}