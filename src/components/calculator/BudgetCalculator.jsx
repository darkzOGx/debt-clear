import React, { useState } from 'react';

export default function BudgetCalculator() {
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
      
      <div className="bg-black p-4 rounded-lg">
        <h5 className="font-semibold text-white mb-2">Budget Analysis:</h5>
        <div className="space-y-1 text-sm text-white">
          <div>Total Monthly Income: <span className="font-medium text-green-400">${monthlyIncome.toLocaleString('en-US')}</span></div>
          <div>Total Monthly Expenses: <span className="font-medium text-green-400">${totalExpenses.toLocaleString('en-US')}</span></div>
          <div>Remaining: <span className={`font-bold ${remaining >= 0 ? 'text-green-400' : 'text-red-400'}`}>${remaining.toLocaleString('en-US')}</span></div>
          <div>Housing as % of Income: <span className={`font-medium ${housingPercent > 30 ? 'text-red-400' : 'text-green-400'}`}>{housingPercent}%</span> {housingPercent > 30 && <span className="text-red-400">(Consider reducing)</span>}</div>
        </div>
      </div>
    </div>
  );
}