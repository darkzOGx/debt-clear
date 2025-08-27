import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Calculator, FileText, Anchor, ChevronDown, ChevronUp } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';
import StudentLoanCalculator from '../components/calculator/StudentLoanCalculator';
import { useCanonicalLink } from '../hooks/useCanonicalLink';

// Calculator Component
function CalculatorCard({ title, description, icon: Icon, calculator: Calculator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <Icon className="w-8 h-8 text-purple-600 mt-1" />
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

export default function StudentLoanCalculators() {
  useCanonicalLink('https://orangecountydebtcenter.com/student-loan-calculators');
  const calculators = [
    {
      title: "Student Loan Calculator",
      description: "Use this student loan calculator to estimate your monthly payments and the total cost of your student loan.",
      icon: GraduationCap,
      calculator: StudentLoanCalculator
    },
    {
      title: "Student Loan Refinance Calculator",
      description: "See if refinancing your student loans could lower your monthly payment or save on interest.",
      icon: Calculator,
      calculator: StudentLoanCalculator
    },
    {
      title: "Loan Forgiveness Calculator",
      description: "Calculate potential savings through federal loan forgiveness programs like PSLF or income-driven repayment.",
      icon: FileText,
      calculator: StudentLoanCalculator
    },
    {
      title: "Boat Loan Calculator",
      description: "Planning to buy a boat? Calculate your monthly payments and total interest for marine financing.",
      icon: Anchor,
      calculator: StudentLoanCalculator
    }
  ];

  return (
    <>
      <Helmet>
        <title>Student Loan & Specialty Calculators - Orange County Education Financing | OC Debt Center</title>
        <meta name="description" content="Free student loan and specialty calculators for Orange County residents. Calculate student loan payments, refinancing, forgiveness, and boat loans." />
        <meta name="keywords" content="student loan calculator, student loan refinance, loan forgiveness calculator, boat loan calculator, education financing, Orange County" />
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
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">EDUCATION & SPECIALTY FINANCING</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Student Loan & Specialty:<br />
              <span className="font-mono text-3xl lg:text-4xl">Education Financing Tools</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
              Education financing and specialty loan calculators for student loans, boat loans, and other specialized financing needs. 
              Plan your education and lifestyle investments wisely.
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
              Need Help with Student Loan Debt?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 font-light">
              Get expert student loan assistance and explore forgiveness options with our Orange County specialists
            </p>
            <button
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-neutral-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Student Loan Help
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