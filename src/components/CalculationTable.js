import React, { useState } from 'react';

const CalculationTable = ({ data, onUpdate }) => {
const [values, setValues] = useState(data);

const handleChange = (e, key) => {
const updatedValues = { ...values, [key]: e.target.value };
setValues(updatedValues);
onUpdate(updatedValues);
};

return (
<div className="p-4">
    <table className="table-auto w-full border-collapse rounded-lg shadow-lg">
    <tbody>
        <tr>
        <td className="border px-4 py-2">PPSQM</td>
        <td className="border px-4 py-2">
            <input type="number" value={values.PPSQM} onChange={(e) => handleChange(e, 'PPSQM')} className="border p-2 w-full" />
        </td>
        </tr>
        <tr>
        <td className="border px-4 py-2">SQM</td>
        <td className="border px-4 py-2">
            <input type="number" value={values.SQM} onChange={(e) => handleChange(e, 'SQM')} className="border p-2 w-full" />
        </td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Per Month Rental</td>
        <td className="border px-4 py-2">{values.perMonthRental}</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Annual Rental</td>
        <td className="border px-4 py-2">{values.annualRental}</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Annual Expenses</td>
        <td className="border px-4 py-2">
            <input type="number" value={values.annualExpenses} onChange={(e) => handleChange(e, 'annualExpenses')} className="border p-2 w-full" />
        </td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Net Income After Expenses</td>
        <td className="border px-4 py-2">{values.netIncomeAfterExpenses}</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Cap Rate</td>
        <td className="border px-4 py-2">
            <input type="number" value={values.capRate} onChange={(e) => handleChange(e, 'capRate')} className="border p-2 w-full" />
        </td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Valuation</td>
        <td className="border px-4 py-2">{values.valuation}</td>
        </tr>
    </tbody>
    </table>
</div>
);
};

export default CalculationTable;
