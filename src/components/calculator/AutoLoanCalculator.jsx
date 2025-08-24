import React, { useState } from 'react';

export default function AutoLoanCalculator() {
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
          <label className="block text-sm font-medium text-white mb-1">Vehicle Price ($)</label>
          <input
            type="number"
            value={vehiclePrice}
            onChange={(e) => setVehiclePrice(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Down Payment ($)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
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
          <label className="block text-sm font-medium text-white mb-1">Loan Term (months)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Loan Summary:</h5>
        <div className="space-y-1 text-sm text-white">
          <div>Loan Amount: <span className="font-medium text-white">${loanAmount.toLocaleString('en-US')}</span></div>
          <div>Monthly Payment: <span className="font-bold text-red-400">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Interest: <span className="font-medium text-red-400">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
          <div>Total Cost: <span className="font-medium text-red-400">${totalPaid.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
        </div>
      </div>
    </div>
  );
}