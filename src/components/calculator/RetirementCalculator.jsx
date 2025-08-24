import React, { useState } from 'react';

export default function RetirementCalculator() {
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
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Results:</h5>
        <div className="space-y-1 text-sm text-white">
          <div>Years to Retirement: <span className="font-medium text-white">{yearsToRetirement}</span></div>
          <div>Total at Retirement: <span className="font-bold text-green-400">${totalRetirement.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
          <div>From Current Savings: <span className="font-medium text-green-400">${futureValueCurrent.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
          <div>From Contributions: <span className="font-medium text-green-400">${futureValueContributions.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
        </div>
      </div>
    </div>
  );
}