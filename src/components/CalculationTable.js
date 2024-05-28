import React, { useState } from 'react';

const CalculationTable = ({ data, onUpdate }) => {
  const [values, setValues] = useState(data);

  const handleChange = (e, key) => {
    const updatedValues = { ...values, [key]: e.target.value };
    setValues(updatedValues);
    onUpdate(updatedValues);
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Latitude</h2>
        <p>{values.lat}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Longitude</h2>
        <p>{values.lng}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Area Rate (PPSQM)</h2>
        <input
          type="number"
          value={values.PPSQM}
          onChange={(e) => handleChange(e, 'PPSQM')}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Annual Income from Property</h2>
        <p>{values.annualRental}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Annual Expenses</h2>
        <input
          type="number"
          value={values.annualExpenses}
          onChange={(e) => handleChange(e, 'annualExpenses')}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Net Income After Expenses</h2>
        <p>{values.netIncomeAfterExpenses}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Cap Rate</h2>
        <input
          type="number"
          value={values.capRate}
          onChange={(e) => handleChange(e, 'capRate')}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Valuation</h2>
        <p>{values.valuation}</p>
      </div>
    </div>
  );
};

export default CalculationTable;
