import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, PiggyBank, Target, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import ConsultationForm from '../components/consultation/ConsultationForm';
import { useCanonicalLink } from '../hooks/useCanonicalLink';

// Calculator Component
function CalculatorCard({ title, description, icon: Icon, calculator: Calculator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <Icon className="w-8 h-8 text-green-600 mt-1" />
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

// Calculator Components
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
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Retirement Age</label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected Annual Return (%)</label>
          <input
            type="number"
            step="0.1"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Results:</h5>
        <div className="space-y-1 text-sm">
          <div className="text-white">Years to Retirement: <span className="font-medium text-white">{yearsToRetirement}</span></div>
          <div className="text-white">Total at Retirement: <span className="font-bold text-green-400">${totalRetirement.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
          <div className="text-white">From Current Savings: <span className="font-medium text-white">${futureValueCurrent.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
          <div className="text-white">From Contributions: <span className="font-medium text-white">${futureValueContributions.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
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
          className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Housing ($)</label>
          <input
            type="number"
            value={housing}
            onChange={(e) => setHousing(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Transportation ($)</label>
          <input
            type="number"
            value={transportation}
            onChange={(e) => setTransportation(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Food ($)</label>
          <input
            type="number"
            value={food}
            onChange={(e) => setFood(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Utilities ($)</label>
          <input
            type="number"
            value={utilities}
            onChange={(e) => setUtilities(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Insurance ($)</label>
          <input
            type="number"
            value={insurance}
            onChange={(e) => setInsurance(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Debt Payments ($)</label>
          <input
            type="number"
            value={debt}
            onChange={(e) => setDebt(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Entertainment ($)</label>
          <input
            type="number"
            value={entertainment}
            onChange={(e) => setEntertainment(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Other Expenses ($)</label>
          <input
            type="number"
            value={other}
            onChange={(e) => setOther(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Budget Analysis:</h5>
        <div className="space-y-1 text-sm">
          <div className="text-white">Total Monthly Income: <span className="font-medium text-white">${monthlyIncome.toLocaleString('en-US')}</span></div>
          <div className="text-white">Total Monthly Expenses: <span className="font-medium text-white">${totalExpenses.toLocaleString('en-US')}</span></div>
          <div className="text-white">Remaining: <span className={`font-bold ${remaining >= 0 ? 'text-green-400' : 'text-red-400'}`}>${remaining.toLocaleString('en-US')}</span></div>
          <div className="text-white">Housing as % of Income: <span className={`font-medium ${housingPercent > 30 ? 'text-red-400' : 'text-green-400'}`}>{housingPercent}%</span> {housingPercent > 30 && <span className="text-red-400"> (Consider reducing)</span>}</div>
        </div>
      </div>
    </div>
  );
}

function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [annualRate, setAnnualRate] = useState(7);
  const [years, setYears] = useState(20);
  const [compoundFreq, setCompoundFreq] = useState(12);
  
  // Compound interest calculation with regular contributions
  const r = annualRate / 100;
  const n = compoundFreq;
  const t = years;
  
  // Future value of principal
  const futureValuePrincipal = principal * Math.pow((1 + r/n), n*t);
  
  // Future value of annuity (monthly contributions)
  const monthlyRate = r / 12;
  const totalMonths = years * 12;
  const futureValueContributions = monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
  
  const totalValue = futureValuePrincipal + futureValueContributions;
  const totalContributed = principal + (monthlyContribution * totalMonths);
  const totalInterest = totalValue - totalContributed;
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initial Principal ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={annualRate}
            onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time Period (years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Compound Frequency</label>
          <select
            value={compoundFreq}
            onChange={(e) => setCompoundFreq(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          >
            <option value={1}>Annually</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
            <option value={365}>Daily</option>
          </select>
        </div>
      </div>
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Compound Interest Results:</h5>
        <div className="space-y-1 text-sm">
          <div className="text-white">Total Contributed: <span className="font-medium text-white">${totalContributed.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
          <div className="text-white">Total Interest Earned: <span className="font-medium text-green-400">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
          <div className="text-white">Final Amount: <span className="font-bold text-green-400">${totalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
        </div>
      </div>
    </div>
  );
}

function SavingsCalculator() {
  const [goal, setGoal] = useState(50000);
  const [currentSavings, setCurrentSavings] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(5);
  
  const needed = goal - currentSavings;
  const monthlyRate = annualReturn / 100 / 12;
  
  // Calculate months to reach goal
  let monthsToGoal;
  if (monthlyRate === 0) {
    monthsToGoal = needed / monthlyContribution;
  } else {
    // Using present value of annuity formula
    monthsToGoal = Math.log(1 + (needed * monthlyRate) / monthlyContribution) / Math.log(1 + monthlyRate);
  }
  
  const yearsToGoal = monthsToGoal / 12;
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Savings Goal ($)</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution ($)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected Annual Return (%)</label>
          <input
            type="number"
            step="0.1"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Savings Plan:</h5>
        <div className="space-y-1 text-sm">
          <div className="text-white">Amount Still Needed: <span className="font-medium text-white">${needed.toLocaleString('en-US')}</span></div>
          <div className="text-white">Time to Reach Goal: <span className="font-bold text-green-400">{Math.ceil(monthsToGoal)} months ({yearsToGoal.toFixed(1)} years)</span></div>
          <div className="text-white">Total Contributions Needed: <span className="font-medium text-white">${(monthlyContribution * monthsToGoal).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
        </div>
      </div>
    </div>
  );
}

export default function MoneyCalculators() {
  useCanonicalLink('https://ocdebtcenter.com/money-calculators');
  
  const calculators = [
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
      title: "Compound Interest Calculator",
      description: "See the effect of compound interest on your money and how compounding frequency can make a real difference.",
      icon: TrendingUp,
      calculator: CompoundInterestCalculator
    },
    {
      title: "Retirement Calculator",
      description: "See how much money you could save by the time you retire, along with an annual breakdown.",
      icon: Target,
      calculator: RetirementCalculator
    },
    {
      title: "Savings Calculator",
      description: "Find out how much you can grow your savings and how long it'll take or set a savings goal and see what you'd have to contribute per month to reach your goal.",
      icon: PiggyBank,
      calculator: SavingsCalculator
    }
  ];

  return (
    <>
      <Helmet>
        <title>Money Calculators - Orange County Financial Planning Tools | OC Debt Center</title>
        <meta name="description" content="Free money management calculators for Orange County residents. 401k calculator, budget planner, compound interest, retirement planning, and savings goal calculators." />
        <meta name="keywords" content="money calculators, 401k calculator, budget calculator, retirement calculator, savings calculator, compound interest calculator, Orange County financial planning" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Money Calculators - Orange County Financial Planning Tools" />
        <meta property="og:description" content="Free money management calculators for Orange County residents. 401k, budget, retirement, and savings calculators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ocdebtcenter.com/money-calculators" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Money Calculators",
            "description": "Comprehensive money management calculators including 401k, budget, retirement, and savings calculators for Orange County residents.",
            "url": "https://ocdebtcenter.com/money-calculators"
          })}
        </script>
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
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">PERSONAL FINANCE & INVESTMENT PLANNING</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Money Calculators:<br />
              <span className="font-mono text-3xl lg:text-4xl">Financial Planning Tools</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
              Essential financial planning tools to help you understand your money, set goals, and make informed decisions about your financial future. 
              Perfect for Orange County residents planning their financial journey.
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
              Need Personalized Financial Guidance?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 font-light">
              Get expert financial analysis and personalized money management strategies from our Orange County financial specialists
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