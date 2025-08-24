import React, { useState } from 'react';

export default function StudentLoanCalculator() {
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