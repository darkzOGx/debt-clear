import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Calculator, TrendingDown, Target, ChevronDown, ChevronUp } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';
import DebtRepaymentCalculator from '../components/calculator/DebtRepaymentCalculator';
import { useCanonicalLink } from '../hooks/useCanonicalLink';

// Calculator Component
function CalculatorCard({ title, description, icon: Icon, calculator: Calculator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <Icon className="w-8 h-8 text-red-600 mt-1" />
        <div className="flex-1">
          <h4 className="text-lg font-bold text-black mb-2">{title}</h4>
          <p className="text-sm text-neutral-700 mb-4">{description}</p>
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition inline-flex items-center justify-center gap-2 mb-4"
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

export default function CreditCalculators() {
  useCanonicalLink('https://vegaxai.com/credit-calculators');
  const calculators = [
    {
      title: "Debt Repayment Calculator",
      description: "Estimate how long it could take to pay off your credit card debt and see total interest costs.",
      icon: CreditCard,
      calculator: DebtRepaymentCalculator
    },
    {
      title: "Credit Card Payoff Calculator",
      description: "Calculate the time and interest cost to pay off your credit card balance with different payment amounts.",
      icon: Calculator,
      calculator: DebtRepaymentCalculator
    },
    {
      title: "Balance Transfer Calculator",
      description: "See if transferring your credit card balance could save you money with a lower interest rate.",
      icon: TrendingDown,
      calculator: DebtRepaymentCalculator
    },
    {
      title: "Debt Snowball Calculator",
      description: "Plan your debt elimination strategy by targeting smallest balances first for psychological wins.",
      icon: Target,
      calculator: DebtRepaymentCalculator
    }
  ];

  return (
    <>
      <Helmet>
        <title>Credit Card Calculators - Orange County Debt Management Tools | OC Debt Center</title>
        <meta name="description" content="Free credit card calculators for Orange County residents. Calculate debt payoff time, interest costs, balance transfers, and debt elimination strategies." />
        <meta name="keywords" content="credit card calculator, debt payoff calculator, balance transfer calculator, debt snowball, credit card interest, Orange County debt relief" />
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
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">CREDIT CARD & DEBT MANAGEMENT</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Credit Card Calculators:<br />
              <span className="font-mono text-3xl lg:text-4xl">Debt Management Tools</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
              Debt management calculators to help you understand payoff timelines, compare balance transfer options, and develop debt elimination strategies. 
              Take control of your credit card debt today.
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
              Struggling with Credit Card Debt?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 font-light">
              Get expert debt relief assistance and reduce your debt by up to 50% with our Orange County specialists
            </p>
            <button
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-neutral-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Debt Relief Help
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