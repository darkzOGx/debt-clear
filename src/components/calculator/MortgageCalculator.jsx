import React, { useState } from 'react';

export default function MortgageCalculator() {
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
          <label className="block text-sm font-medium text-white mb-1">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Loan Term (years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Annual Property Tax ($)</label>
          <input
            type="number"
            value={propertyTax}
            onChange={(e) => setPropertyTax(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-white mb-1">Annual Insurance ($)</label>
          <input
            type="number"
            value={insurance}
            onChange={(e) => setInsurance(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Monthly Payment Breakdown:</h5>
        <div className="space-y-1 text-sm text-white">
          <div>Principal & Interest: <span className="font-medium text-red-400">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Property Tax: <span className="font-medium text-red-400">${(propertyTax/12).toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Insurance: <span className="font-medium text-red-400">${(insurance/12).toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div className="border-t pt-2">
            <div>Total Monthly Payment: <span className="font-bold text-red-400">${totalMonthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}