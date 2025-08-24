import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, DollarSign, TrendingUp, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';
import AutoLoanCalculator from '../components/calculator/AutoLoanCalculator';
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

export default function AutoCalculators() {
  useCanonicalLink('https://vegaxai.com/auto-calculators');
  const calculators = [
    {
      title: "Auto Loan Calculator",
      description: "Estimate your monthly payments and how much you may need to borrow for your next vehicle.",
      icon: Car,
      calculator: AutoLoanCalculator
    },
    {
      title: "Auto Affordability Calculator",
      description: "Find out how much car you can afford based on your budget and monthly payment limits.",
      icon: DollarSign,
      calculator: AutoLoanCalculator
    },
    {
      title: "Auto Refinance Calculator",
      description: "See if refinancing your auto loan could lower your monthly payments or save on interest.",
      icon: TrendingUp,
      calculator: AutoLoanCalculator
    },
    {
      title: "Lease vs Buy Calculator",
      description: "Compare the costs of leasing versus buying a vehicle to make the best financial decision.",
      icon: FileText,
      calculator: AutoLoanCalculator
    }
  ];

  return (
    <>
      <Helmet>
        <title>Auto Calculators - Orange County Vehicle Financing Tools | VegaX AI</title>
        <meta name="description" content="Free auto loan calculators for Orange County car buyers. Calculate monthly payments, affordability, refinance savings, and lease vs buy comparisons." />
        <meta name="keywords" content="auto loan calculator, car loan calculator, vehicle financing, auto refinance calculator, lease vs buy, Orange County auto financing" />
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
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">VEHICLE FINANCING & AUTO LOANS</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Auto Calculators:<br />
              <span className="font-mono text-3xl lg:text-4xl">Vehicle Financing Tools</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
              Vehicle financing calculators to help you understand auto loan payments, compare financing options, and make smart car buying decisions in Orange County. 
              Drive away with confidence.
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
        <section className="py-16 bg-gradient-to-b from-black to-neutral-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Ready to Finance Your Next Vehicle?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 font-light">
              Get expert auto financing advice and find the best loan options from our Orange County specialists
            </p>
            <button
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-neutral-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Financing Help
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