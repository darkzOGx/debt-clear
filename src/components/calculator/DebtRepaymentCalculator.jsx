import React, { useState } from 'react';

export default function DebtRepaymentCalculator() {
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
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Payoff Timeline:</h5>
        <div className="space-y-1 text-sm text-white">
          <div>Time to Pay Off: <span className="font-bold text-green-400">{Math.ceil(monthsToPayOff)} months ({Math.ceil(monthsToPayOff/12)} years)</span></div>
          <div>Total Interest: <span className="font-medium text-green-400">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Amount Paid: <span className="font-medium text-green-400">${totalPaid.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
        </div>
      </div>
    </div>
  );
}