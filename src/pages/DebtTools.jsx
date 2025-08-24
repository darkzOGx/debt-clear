import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, Home, Car, CreditCard, GraduationCap, TrendingUp, Building2, Shield, Target, ArrowRight } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';

// Calculator Group Card Component
function CalculatorGroupCard({ title, description, icon: Icon, calculators, link, color = 'blue' }) {
  const colorClasses = {
    green: 'text-white',
    blue: 'text-white',
    orange: 'text-white',
    red: 'text-white',
    purple: 'text-white'
  };
  
  const buttonColorClasses = {
    green: 'bg-black hover:bg-neutral-800',
    blue: 'bg-black hover:bg-neutral-800',
    orange: 'bg-black hover:bg-neutral-800',
    red: 'bg-black hover:bg-neutral-800',
    purple: 'bg-black hover:bg-neutral-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border hover:shadow-xl transition-all duration-300">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <Icon className={`w-12 h-12 ${colorClasses[color]}`} />
          <div>
            <h3 className="text-2xl font-bold text-black">{title}</h3>
            <p className="text-neutral-600 mt-1">{description}</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <p className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Calculators in this section:</p>
          <ul className="space-y-2">
            {calculators.map((calc, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-neutral-400 mt-1">•</span>
                <span className="text-sm text-neutral-600">{calc}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link
          to={link}
          className={`w-full ${buttonColorClasses[color]} text-white px-6 py-3 rounded transition inline-flex items-center justify-center gap-2 font-semibold`}
        >
          Use Calculators
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function DebtTools() {
  const calculatorGroups = [
    {
      title: "Money Calculators",
      description: "Financial planning & investment tools",
      icon: DollarSign,
      color: 'green',
      link: '/money-calculators',
      calculators: [
        '401(k) Calculator',
        'Budget Calculator',
        'Retirement Calculator',
        'Compound Interest Calculator',
        'Savings Goal Calculator'
      ]
    },
    {
      title: "Mortgage Calculators",
      description: "Home financing & real estate tools",
      icon: Home,
      color: 'blue',
      link: '/mortgage-calculators',
      calculators: [
        'Mortgage Payment Calculator',
        'Mortgage Affordability Calculator',
        'Refinance Calculator',
        'Home Equity Calculator'
      ]
    },
    {
      title: "Auto Calculators",
      description: "Vehicle financing & loan tools",
      icon: Car,
      color: 'orange',
      link: '/auto-calculators',
      calculators: [
        'Auto Loan Calculator',
        'Auto Affordability Calculator',
        'Auto Refinance Calculator',
        'Lease vs Buy Calculator'
      ]
    },
    {
      title: "Credit Card Calculators",
      description: "Debt management & payoff tools",
      icon: CreditCard,
      color: 'red',
      link: '/credit-calculators',
      calculators: [
        'Debt Repayment Calculator',
        'Credit Card Payoff Calculator',
        'Balance Transfer Calculator',
        'Debt Snowball Calculator'
      ]
    },
    {
      title: "Student Loan & Specialty",
      description: "Education & specialty financing",
      icon: GraduationCap,
      color: 'purple',
      link: '/student-loan-calculators',
      calculators: [
        'Student Loan Calculator',
        'Student Loan Refinance Calculator',
        'Loan Forgiveness Calculator',
        'Boat Loan Calculator'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Debt Tools - Complete Financial Calculator Suite | VegaX AI</title>
        <meta name="description" content="Free comprehensive financial calculators for Orange County residents. Calculate mortgages, auto loans, retirement, budgets, debt payoff, student loans. Professional money management tools." />
        <meta name="keywords" content="debt tools, financial calculators, mortgage calculator, auto loan calculator, retirement calculator, budget calculator, debt calculator, student loan calculator, Orange County financial planning" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vegaxai.com/debt-tools" />
        
        <meta property="og:title" content="Debt Tools - Complete Financial Calculator Suite" />
        <meta property="og:description" content="Free comprehensive financial calculators for Orange County residents. Calculate mortgages, auto loans, retirement, budgets, debt payoff, student loans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegaxai.com/debt-tools" />
        <meta property="og:image" content="https://vegaxai.com/og-financial-calculators.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Debt Tools - Financial Calculator Suite",
            "description": "Comprehensive financial calculators including mortgage, auto loan, retirement, budget, and debt payoff calculators for Orange County residents.",
            "url": "https://vegaxai.com/debt-tools",
            "publisher": {
              "@type": "Organization",
              "name": "VegaX AI",
              "url": "https://vegaxai.com"
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Financial Calculator Suite",
              "applicationCategory": "FinanceApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">FINANCIAL TOOLS</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              DEBT TOOLS:<br />
              <span className="font-mono text-3xl lg:text-4xl">Complete Financial Calculator Suite</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 mb-8 max-w-3xl">
              Make informed financial decisions with our comprehensive collection of calculators. 
              From mortgages and auto loans to retirement planning and debt payoff strategies - all the tools you need in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#calculators" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded hover:bg-neutral-100 transition">
                <Calculator className="w-5 h-5" />
                Explore All Tools
              </a>
              <a href="#consultation" className="inline-flex items-center gap-2 border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                <Target className="w-5 h-5" />
                Get Expert Advice
              </a>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Calculator className="w-12 h-12 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">30+</div>
                <div className="text-sm text-neutral-600">Financial Calculators</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">100%</div>
                <div className="text-sm text-neutral-600">Free to Use</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">Real-Time</div>
                <div className="text-sm text-neutral-600">Calculations</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Building2 className="w-12 h-12 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">Pro-Grade</div>
                <div className="text-sm text-neutral-600">Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Groups */}
        <section id="calculators" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Choose Your Calculator Category</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Select from our comprehensive suite of financial calculators organized by category. 
                Each section contains multiple specialized tools to help you make informed financial decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {calculatorGroups.map((group, index) => (
                <CalculatorGroupCard key={index} {...group} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-black via-neutral-900 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Need Personalized Financial Analysis?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 font-light">
              Get expert review of your calculations and personalized financial recommendations from our Orange County debt relief specialists
            </p>
            <button
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-neutral-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Expert Financial Analysis
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