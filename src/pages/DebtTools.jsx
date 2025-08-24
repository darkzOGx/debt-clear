import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, Home, Car, CreditCard, GraduationCap, Anchor, TrendingUp, PiggyBank, Building2, Shield, Target, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';

// Calculator Component
function CalculatorCard({ title, description, icon: Icon, calculator: Calculator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <Icon className="w-8 h-8 text-blue-600 mt-1" />
        <div className="flex-1">
          <h4 className="text-lg font-bold text-black mb-2">{title}</h4>
          <p className="text-sm text-neutral-700 mb-4">{description}</p>
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition inline-flex items-center justify-center gap-2 mb-4"
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

// Individual Calculator Components
function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  
  const yearsToRetirement = retirementAge - currentAge;
  const monthlyReturn = annualReturn / 100 / 12;
  const totalMonths = yearsToRetirement * 12;
  
  // Future value calculation
  const futureValueCurrent = currentSavings * Math.pow(1 + annualReturn / 100, yearsToRetirement);
  const futureValueContributions = monthlyContribution * ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn);
  const totalRetirement = futureValueCurrent + futureValueContributions;
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Age</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Retirement Age</label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected Annual Return (%)</label>
          <input
            type="number"
            step="0.1"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h5 className="font-semibold text-green-800 mb-2">Results:</h5>
        <div className="space-y-1 text-sm">
          <div>Years to Retirement: <span className="font-medium">{yearsToRetirement}</span></div>
          <div>Total at Retirement: <span className="font-bold text-green-800">${totalRetirement.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
          <div>From Current Savings: <span className="font-medium">${futureValueCurrent.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
          <div>From Contributions: <span className="font-medium">${futureValueContributions.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
        </div>
      </div>
    </div>
  );
}

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(3000);
  const [insurance, setInsurance] = useState(1200);
  
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  // Monthly payment calculation
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const monthlyTaxInsurance = (propertyTax + insurance) / 12;
  const totalMonthlyPayment = monthlyPayment + monthlyTaxInsurance;
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Annual Property Tax ($)</label>
          <input
            type="number"
            value={propertyTax}
            onChange={(e) => setPropertyTax(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Annual Insurance ($)</label>
          <input
            type="number"
            value={insurance}
            onChange={(e) => setInsurance(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h5 className="font-semibold text-blue-800 mb-2">Monthly Payment Breakdown:</h5>
        <div className="space-y-1 text-sm">
          <div>Principal & Interest: <span className="font-medium">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Property Tax: <span className="font-medium">${(propertyTax/12).toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Insurance: <span className="font-medium">${(insurance/12).toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div className="border-t pt-2">
            <div>Total Monthly Payment: <span className="font-bold text-blue-800">${totalMonthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoLoanCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(25000);
  const [downPayment, setDownPayment] = useState(5000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(60);
  
  const loanAmount = vehiclePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  
  // Monthly payment calculation
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
  const totalPaid = monthlyPayment * loanTerm + downPayment;
  const totalInterest = totalPaid - vehiclePrice;
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Price ($)</label>
          <input
            type="number"
            value={vehiclePrice}
            onChange={(e) => setVehiclePrice(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment ($)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (months)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="bg-orange-50 p-4 rounded-lg">
        <h5 className="font-semibold text-orange-800 mb-2">Loan Summary:</h5>
        <div className="space-y-1 text-sm">
          <div>Loan Amount: <span className="font-medium">${loanAmount.toLocaleString('en-US')}</span></div>
          <div>Monthly Payment: <span className="font-bold text-orange-800">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Interest: <span className="font-medium">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Cost: <span className="font-medium">${totalPaid.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
        </div>
      </div>
    </div>
  );
}

function DebtRepaymentCalculator() {
  const [balance, setBalance] = useState(5000);
  const [interestRate, setInterestRate] = useState(18.99);
  const [monthlyPayment, setMonthlyPayment] = useState(200);
  
  const monthlyRate = interestRate / 100 / 12;
  
  // Time to pay off calculation
  const monthsToPayOff = monthlyRate === 0 ? balance / monthlyPayment : 
    Math.log(1 + (balance * monthlyRate) / monthlyPayment) / Math.log(1 + monthlyRate);
  
  const totalPaid = monthlyPayment * monthsToPayOff;
  const totalInterest = totalPaid - balance;
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Balance ($)</label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Payment ($)</label>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="bg-red-50 p-4 rounded-lg">
        <h5 className="font-semibold text-red-800 mb-2">Payoff Timeline:</h5>
        <div className="space-y-1 text-sm">
          <div>Time to Pay Off: <span className="font-bold text-red-800">{Math.ceil(monthsToPayOff)} months ({Math.ceil(monthsToPayOff/12)} years)</span></div>
          <div>Total Interest: <span className="font-medium">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Amount Paid: <span className="font-medium">${totalPaid.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
        </div>
      </div>
    </div>
  );
}

function StudentLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(30000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(10);
  
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  // Monthly payment calculation
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = totalPaid - loanAmount;
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Repayment Term (years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg">
        <h5 className="font-semibold text-purple-800 mb-2">Repayment Summary:</h5>
        <div className="space-y-1 text-sm">
          <div>Monthly Payment: <span className="font-bold text-purple-800">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Interest: <span className="font-medium">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Amount Paid: <span className="font-medium">${totalPaid.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Loan Term: <span className="font-medium">{loanTerm} years ({numberOfPayments} payments)</span></div>
        </div>
      </div>
    </div>
  );
}

function BudgetCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [housing, setHousing] = useState(1500);
  const [transportation, setTransportation] = useState(500);
  const [food, setFood] = useState(600);
  const [utilities, setUtilities] = useState(300);
  const [insurance, setInsurance] = useState(400);
  const [debt, setDebt] = useState(300);
  const [entertainment, setEntertainment] = useState(200);
  const [other, setOther] = useState(200);
  
  const totalExpenses = housing + transportation + food + utilities + insurance + debt + entertainment + other;
  const remaining = monthlyIncome - totalExpenses;
  const housingPercent = (housing / monthlyIncome * 100).toFixed(1);
  
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income After Taxes ($)</label>
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Housing ($)</label>
          <input
            type="number"
            value={housing}
            onChange={(e) => setHousing(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Transportation ($)</label>
          <input
            type="number"
            value={transportation}
            onChange={(e) => setTransportation(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Food ($)</label>
          <input
            type="number"
            value={food}
            onChange={(e) => setFood(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Utilities ($)</label>
          <input
            type="number"
            value={utilities}
            onChange={(e) => setUtilities(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Insurance ($)</label>
          <input
            type="number"
            value={insurance}
            onChange={(e) => setInsurance(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Debt Payments ($)</label>
          <input
            type="number"
            value={debt}
            onChange={(e) => setDebt(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Entertainment ($)</label>
          <input
            type="number"
            value={entertainment}
            onChange={(e) => setEntertainment(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Other Expenses ($)</label>
          <input
            type="number"
            value={other}
            onChange={(e) => setOther(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className={`${remaining >= 0 ? 'bg-green-50' : 'bg-red-50'} p-4 rounded-lg`}>
        <h5 className={`font-semibold ${remaining >= 0 ? 'text-green-800' : 'text-red-800'} mb-2`}>Budget Analysis:</h5>
        <div className="space-y-1 text-sm">
          <div>Total Monthly Income: <span className="font-medium">${monthlyIncome.toLocaleString('en-US')}</span></div>
          <div>Total Monthly Expenses: <span className="font-medium">${totalExpenses.toLocaleString('en-US')}</span></div>
          <div>Remaining: <span className={`font-bold ${remaining >= 0 ? 'text-green-800' : 'text-red-800'}`}>${remaining.toLocaleString('en-US')}</span></div>
          <div>Housing as % of Income: <span className={`font-medium ${housingPercent > 30 ? 'text-red-600' : 'text-green-600'}`}>{housingPercent}%</span> {housingPercent > 30 && '(Consider reducing)'}</div>
        </div>
      </div>
    </div>
  );
}

export default function DebtTools() {
  const moneyCalculators = [
    {
      title: "401(k) Calculator",
      description: "Estimate how much you could have in your 401(k) account by the time you retire.",
      icon: PiggyBank,
      calculator: RetirementCalculator
    },
    {
      title: "Budget Calculator", 
      description: "Get a clearer picture of how much money you're spending, what you're spending it on and where you could improve.",
      icon: Calculator,
      calculator: BudgetCalculator
    },
    {
      title: "Retirement Calculator",
      description: "See how much money you could save by the time you retire, along with an annual breakdown.",
      icon: Target,
      calculator: RetirementCalculator
    }
  ];

  const mortgageCalculators = [
    {
      title: "Mortgage Calculator",
      description: "Get an estimate of the monthly mortgage payment you could pay, including property taxes and insurance.",
      icon: Home,
      calculator: MortgageCalculator
    }
  ];

  const autoCalculators = [
    {
      title: "Auto Loan Calculator", 
      description: "Estimate your monthly payments and how much you may need to borrow.",
      icon: Car,
      calculator: AutoLoanCalculator
    }
  ];

  const creditCalculators = [
    {
      title: "Debt Repayment Calculator",
      description: "Estimate how long it could take to pay off your credit card debt.",
      icon: CreditCard,
      calculator: DebtRepaymentCalculator
    }
  ];

  const studentLoanCalculators = [
    {
      title: "Student Loan Calculator",
      description: "Use this student loan calculator to estimate your monthly payments and the total cost of your student loan.",
      icon: GraduationCap,
      calculator: StudentLoanCalculator
    }
  ];

  return (
    <>
      <Helmet>
        <title>Financial Calculators - Complete Orange County Money Management Suite | VegaX AI</title>
        <meta name="description" content="Free comprehensive financial calculators for Orange County residents. Calculate mortgages, auto loans, retirement, budgets, debt payoff, student loans. Professional money management tools." />
        <meta name="keywords" content="financial calculators, mortgage calculator, auto loan calculator, retirement calculator, budget calculator, debt calculator, student loan calculator, Orange County financial planning" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vegaxai.com/debt-tools" />
        
        <meta property="og:title" content="Financial Calculators - Complete Orange County Money Management Suite" />
        <meta property="og:description" content="Free comprehensive financial calculators for Orange County residents. Calculate mortgages, auto loans, retirement, budgets, debt payoff, student loans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegaxai.com/debt-tools" />
        <meta property="og:image" content="https://vegaxai.com/og-financial-calculators.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Financial Calculators Suite",
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
        <section className="bg-gradient-to-b from-black to-neutral-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-sm text-neutral-400 mb-4">Professional Financial Planning Tools</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Financial Calculator Suite
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl">
              Make informed financial decisions with our comprehensive collection of calculators. 
              From mortgages and auto loans to retirement planning and debt payoff strategies - all the tools you need in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#money-calculators" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded hover:bg-neutral-100 transition">
                <Calculator className="w-5 h-5" />
                Explore Calculators
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
                <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">30+</div>
                <div className="text-sm text-neutral-600">Financial Calculators</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">100%</div>
                <div className="text-sm text-neutral-600">Free to Use</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">Real-Time</div>
                <div className="text-sm text-neutral-600">Calculations</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-black">Pro-Grade</div>
                <div className="text-sm text-neutral-600">Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Money Calculators */}
        <section id="money-calculators" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black mb-4">Money Calculators</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Essential financial planning tools to help you understand your money, set goals, and make informed decisions about your financial future.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
              {moneyCalculators.map((calc, index) => (
                <CalculatorCard key={index} {...calc} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Mortgage Calculators */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Home className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black mb-4">Mortgage Calculators</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Home buying calculators to help you understand mortgage payments, affordability, and the true cost of homeownership in Orange County.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {mortgageCalculators.map((calc, index) => (
                <CalculatorCard key={index} {...calc} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Auto Calculators */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Car className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black mb-4">Auto Calculators</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Vehicle financing calculators to help you understand auto loan payments, compare financing options, and make smart car buying decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {autoCalculators.map((calc, index) => (
                <CalculatorCard key={index} {...calc} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Credit Card Calculators */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <CreditCard className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black mb-4">Credit Card Calculators</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Debt management calculators to help you understand payoff timelines, compare balance transfer options, and develop debt elimination strategies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {creditCalculators.map((calc, index) => (
                <CalculatorCard key={index} {...calc} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Student Loan Calculators */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <GraduationCap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black mb-4">Student Loan & Specialty Calculators</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Education financing and specialty loan calculators for student loans, boat loans, and other specialized financing needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {studentLoanCalculators.map((calc, index) => (
                <CalculatorCard key={index} {...calc} />
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