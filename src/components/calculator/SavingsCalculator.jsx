import React, { useState } from 'react';

export default function SavingsCalculator() {
  const [initialAmount, setInitialAmount] = useState(5000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(200);
  const [annualRate, setAnnualRate] = useState(4.5);
  const [years, setYears] = useState(10);
  
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  
  // Calculate future value with compound interest
  const futureValueInitial = initialAmount * Math.pow(1 + annualRate / 100, years);
  const futureValueDeposits = monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  const totalSavings = futureValueInitial + futureValueDeposits;
  const totalDeposited = initialAmount + (monthlyDeposit * months);
  const totalInterest = totalSavings - totalDeposited;
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">Initial Amount ($)</label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Monthly Deposit ($)</label>
          <input
            type="number"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Annual Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={annualRate}
            onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Time Period (years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Savings Growth:</h5>
        <div className="space-y-1 text-sm text-white">
          <div>Total Savings: <span className="font-bold text-green-400">${totalSavings.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Deposited: <span className="font-medium text-white">${totalDeposited.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Interest Earned: <span className="font-medium text-green-400">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Monthly Deposits: <span className="font-medium text-white">{months} deposits</span></div>
        </div>
      </div>
    </div>
  );
}