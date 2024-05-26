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
    <table className="table-auto w-full">
    <tbody>
        <tr>
        <td>PPSQM</td>
        <td><input type="number" value={values.PPSQM} onChange={(e) => handleChange(e, 'PPSQM')} className="border p-2 w-full"/></td>
        </tr>
        <tr>
        <td>SQM</td>
        <td><input type="number" value={values.SQM} onChange={(e) => handleChange(e, 'SQM')} className="border p-2 w-full"/></td>
        </tr>
        <tr>
        <td>Per Month Rental</td>
        <td>{values.perMonthRental}</td>
        </tr>
        <tr>
        <td>Annual Rental</td>
        <td>{values.annualRental}</td>
        </tr>
        <tr>
        <td>Annual Expenses</td>
        <td><input type="number" value={values.annualExpenses} onChange={(e) => handleChange(e, 'annualExpenses')} className="border p-2 w-full"/></td>
        </tr>
        <tr>
        <td>Net Income After Expenses</td>
        <td>{values.netIncomeAfterExpenses}</td>
        </tr>
        <tr>
        <td>Cap Rate</td>
        <td><input type="number" value={values.capRate} onChange={(e) => handleChange(e, 'capRate')} className="border p-2 w-full"/></td>
        </tr>
        <tr>
        <td>Valuation</td>
        <td>{values.valuation}</td>
        </tr>
    </tbody>
    </table>
</div>
);
};

export default CalculationTable;
