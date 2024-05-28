// // // // // import React, { useState } from 'react';

// // // // // const CalculationTable = ({ data, onUpdate }) => {
// // // // // const [values, setValues] = useState(data);

// // // // // const handleChange = (e, key) => {
// // // // // const updatedValues = { ...values, [key]: e.target.value };
// // // // // setValues(updatedValues);
// // // // // onUpdate(updatedValues);
// // // // // };

// // // // // return (
// // // // // <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
// // // // //     <div className="bg-white shadow-md rounded-lg p-4">
// // // // //     <h2 className="text-lg font-semibold mb-2">Latitude</h2>
// // // // //     <p>{values.lat}</p>
// // // // //     </div>
// // // // //     <div className="bg-white shadow-md rounded-lg p-4">
// // // // //     <h2 className="text-lg font-semibold mb-2">Longitude</h2>
// // // // //     <p>{values.lng}</p>
// // // // //     </div>
// // // // //     <div className="bg-white shadow-md rounded-lg p-4">
// // // // //     <h2 className="text-lg font-semibold mb-2">Area Rate (PPSQM)</h2>
// // // // //     <input
// // // // //         type="number"
// // // // //         value={values.PPSQM}
// // // // //         onChange={(e) => handleChange(e, 'PPSQM')}
// // // // //         className="border p-2 w-full rounded-md"
// // // // //     />
// // // // //     </div>
// // // // //     <div className="bg-white shadow-md rounded-lg p-4">
// // // // //     <h2 className="text-lg font-semibold mb-2">Annual Income from Property</h2>
// // // // //     <p>{values.annualRental}</p>
// // // // //     </div>
// // // // //     <div className="bg-white shadow-md rounded-lg p-4">
// // // // //     <h2 className="text-lg font-semibold mb-2">Annual Expenses</h2>
// // // // //     <input
// // // // //         type="number"
// // // // //         value={values.annualExpenses}
// // // // //         onChange={(e) => handleChange(e, 'annualExpenses')}
// // // // //         className="border p-2 w-full rounded-md"
// // // // //     />
// // // // //     </div>
// // // // //     <div className="bg-white shadow-md rounded-lg p-4">
// // // // //     <h2 className="text-lg font-semibold mb-2">Net Income After Expenses</h2>
// // // // //     <p>{values.netIncomeAfterExpenses}</p>
// // // // //     </div>
// // // // //     <div className="bg-white shadow-md rounded-lg p-4">
// // // // //     <h2 className="text-lg font-semibold mb-2">Cap Rate</h2>
// // // // //     <input
// // // // //         type="number"
// // // // //         value={values.capRate}
// // // // //         onChange={(e) => handleChange(e, 'capRate')}
// // // // //         className="border p-2 w-full rounded-md"
// // // // //     />
// // // // //     </div>
// // // // //     <div className="bg-white shadow-md rounded-lg p-4">
// // // // //     <h2 className="text-lg font-semibold mb-2">Valuation</h2>
// // // // //     <p>{values.valuation}</p>
// // // // //     </div>
// // // // // </div>
// // // // // );
// // // // // };

// // // // // export default CalculationTable;
// // // // import React, { useState } from 'react';

// // // // const CalculationTable = ({ data, onUpdate }) => {
// // // //   const initialValues = {
// // // //     lat: 51.505,
// // // //     lng: -0.09,
// // // //     PPSQM: 10,
// // // //     annualRental: 1200,
// // // //     annualExpenses: 300,
// // // //     netIncomeAfterExpenses: 900,
// // // //     capRate: 0.08,
// // // //     valuation: 11250,
// // // //   };

// // // //   const [values, setValues] = useState(initialValues);

// // // //   const handleChange = (e, key) => {
// // // //     const updatedValues = { ...values, [key]: e.target.value };
// // // //     setValues(updatedValues);
// // // //     onUpdate(updatedValues);
// // // //   };

// // // //   return (
// // // //     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <h2 className="text-lg font-bold mb-2">Latitude</h2>
// // // //         <p className="text-gray-700">{values.lat}</p>
// // // //       </div>
// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <h2 className="text-lg font-bold mb-2">Longitude</h2>
// // // //         <p className="text-gray-700">{values.lng}</p>
// // // //       </div>
// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <h2 className="text-lg font-bold mb-2">Area Rate (PPSQM)</h2>
// // // //         <input
// // // //           type="number"
// // // //           value={values.PPSQM}
// // // //           onChange={(e) => handleChange(e, 'PPSQM')}
// // // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //       </div>
// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <h2 className="text-lg font-bold mb-2">Annual Income from Property</h2>
// // // //         <p className="text-gray-700">{values.annualRental}</p>
// // // //       </div>
// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <h2 className="text-lg font-bold mb-2">Annual Expenses</h2>
// // // //         <input
// // // //           type="number"
// // // //           value={values.annualExpenses}
// // // //           onChange={(e) => handleChange(e, 'annualExpenses')}
// // // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //       </div>
// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <h2 className="text-lg font-bold mb-2">Net Income After Expenses</h2>
// // // //         <p className="text-gray-700">{values.netIncomeAfterExpenses}</p>
// // // //       </div>
// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <h2 className="text-lg font-bold mb-2">Cap Rate</h2>
// // // //         <input
// // // //           type="number"
// // // //           value={values.capRate}
// // // //           onChange={(e) => handleChange(e, 'capRate')}
// // // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //       </div>
// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <h2 className="text-lg font-bold mb-2">Valuation</h2>
// // // //         <p className="text-gray-700">{values.valuation}</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CalculationTable;
// // // import React, { useState, useEffect } from 'react';

// // // const CalculationTable = ({ data, onUpdate }) => {
// // //   const [values, setValues] = useState(data);

// // //   useEffect(() => {
// // //     setValues(data);
// // //   }, [data]);

// // //   const handleChange = (e, key) => {
// // //     const updatedValues = { ...values, [key]: e.target.value };
// // //     setValues(updatedValues);
// // //     onUpdate(updatedValues);
// // //   };

// // //   return (
// // //     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Latitude</h2>
// // //         <p className="text-gray-700">{values.lat}</p>
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Longitude</h2>
// // //         <p className="text-gray-700">{values.lng}</p>
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Area Rate (PPSQM)</h2>
// // //         <input
// // //           type="number"
// // //           value={values.PPSQM}
// // //           onChange={(e) => handleChange(e, 'PPSQM')}
// // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         />
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Annual Income from Property</h2>
// // //         <p className="text-gray-700">{values.annualRental}</p>
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Annual Expenses</h2>
// // //         <input
// // //           type="number"
// // //           value={values.annualExpenses}
// // //           onChange={(e) => handleChange(e, 'annualExpenses')}
// // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         />
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Net Income After Expenses</h2>
// // //         <p className="text-gray-700">{values.netIncomeAfterExpenses}</p>
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Cap Rate</h2>
// // //         <input
// // //           type="number"
// // //           value={values.capRate}
// // //           onChange={(e) => handleChange(e, 'capRate')}
// // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         />
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Valuation</h2>
// // //         <p className="text-gray-700">{values.valuation}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CalculationTable;
// // // import React, { useState, useEffect } from 'react';

// // // const CalculationTable = ({ data, onUpdate }) => {
// // //   const [values, setValues] = useState(data);

// // //   useEffect(() => {
// // //     setValues(data);
// // //   }, [data]);

// // //   const handleChange = (e, key) => {
// // //     const updatedValues = { ...values, [key]: e.target.value };
// // //     setValues(updatedValues);
// // //     onUpdate(updatedValues);
// // //   };

// // //   return (
// // //     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Latitude</h2>
// // //         <p className="text-gray-700">{values.lat}</p>
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Longitude</h2>
// // //         <p className="text-gray-700">{values.lng}</p>
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Area Rate (PPSQM)</h2>
// // //         <input
// // //           type="number"
// // //           value={values.PPSQM}
// // //           onChange={(e) => handleChange(e, 'PPSQM')}
// // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         />
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Annual Income from Property</h2>
// // //         <p className="text-gray-700">{values.annualRental}</p>
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Annual Expenses</h2>
// // //         <input
// // //           type="number"
// // //           value={values.annualExpenses}
// // //           onChange={(e) => handleChange(e, 'annualExpenses')}
// // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         />
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Net Income After Expenses</h2>
// // //         <p className="text-gray-700">{values.netIncomeAfterExpenses}</p>
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Cap Rate</h2>
// // //         <input
// // //           type="number"
// // //           value={values.capRate}
// // //           onChange={(e) => handleChange(e, 'capRate')}
// // //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         />
// // //       </div>
// // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // //         <h2 className="text-lg font-bold mb-2">Valuation</h2>
// // //         <p className="text-gray-700">{values.valuation}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CalculationTable;
// // import React, { useState, useEffect } from 'react';

// // const CalculationTable = ({ data, onUpdate }) => {
// //   const [values, setValues] = useState(data);

// //   useEffect(() => {
// //     setValues(data);
// //   }, [data]);

// //   const handleChange = (e, key) => {
// //     const updatedValues = { ...values, [key]: parseFloat(e.target.value) || 0 };
// //     setValues(updatedValues);
// //     onUpdate(updatedValues);
// //   };

// //   return (
// //     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-lg font-bold mb-2">Latitude</h2>
// //         <p className="text-gray-700">{values.lat}</p>
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-lg font-bold mb-2">Longitude</h2>
// //         <p className="text-gray-700">{values.lng}</p>
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-lg font-bold mb-2">Area Rate (PPSQM)</h2>
// //         <input
// //           type="number"
// //           value={values.PPSQM}
// //           onChange={(e) => handleChange(e, 'PPSQM')}
// //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-lg font-bold mb-2">Annual Income from Property</h2>
// //         <p className="text-gray-700">{values.annualRental}</p>
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-lg font-bold mb-2">Annual Expenses</h2>
// //         <input
// //           type="number"
// //           value={values.annualExpenses}
// //           onChange={(e) => handleChange(e, 'annualExpenses')}
// //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-lg font-bold mb-2">Net Income After Expenses</h2>
// //         <p className="text-gray-700">{values.netIncomeAfterExpenses}</p>
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-lg font-bold mb-2">Cap Rate</h2>
// //         <input
// //           type="number"
// //           value={values.capRate}
// //           onChange={(e) => handleChange(e, 'capRate')}
// //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-lg font-bold mb-2">Valuation</h2>
// //         <p className="text-gray-700">{values.valuation}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CalculationTable;
// import React, { useState, useEffect } from 'react';

// const CalculationTable = ({ data, onUpdate }) => {
//   const [values, setValues] = useState(data);

//   useEffect(() => {
//     setValues(data);
//   }, [data]);

//   const calculateValues = (updatedValues) => {
//     const annualRental = updatedValues.PPSQM * updatedValues.SQM * 12;
//     const netIncomeAfterExpenses = annualRental - updatedValues.annualExpenses;
//     const valuation = netIncomeAfterExpenses / (updatedValues.capRate / 100);

//     return {
//       ...updatedValues,
//       annualRental,
//       netIncomeAfterExpenses,
//       valuation,
//     };
//   };

//   const handleChange = (e, key) => {
//     const value = parseFloat(e.target.value) || 0;
//     const updatedValues = { ...values, [key]: value };

//     const recalculatedValues = calculateValues(updatedValues);
//     setValues(recalculatedValues);
//     onUpdate(recalculatedValues);
//   };

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-bold mb-2">Latitude</h2>
//         <p className="text-gray-700">{values.lat}</p>
//       </div>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-bold mb-2">Longitude</h2>
//         <p className="text-gray-700">{values.lng}</p>
//       </div>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-bold mb-2">Area Rate (PPSQM)</h2>
//         <input
//           type="number"
//           value={values.PPSQM}
//           onChange={(e) => handleChange(e, 'PPSQM')}
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-bold mb-2">Annual Income from Property</h2>
//         <p className="text-gray-700">{values.annualRental}</p>
//       </div>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-bold mb-2">Annual Expenses</h2>
//         <input
//           type="number"
//           value={values.annualExpenses}
//           onChange={(e) => handleChange(e, 'annualExpenses')}
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-bold mb-2">Net Income After Expenses</h2>
//         <p className="text-gray-700">{values.netIncomeAfterExpenses}</p>
//       </div>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-bold mb-2">Cap Rate</h2>
//         <input
//           type="number"
//           value={values.capRate}
//           onChange={(e) => handleChange(e, 'capRate')}
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-lg font-bold mb-2">Valuation</h2>
//         <p className="text-gray-700">{values.valuation}</p>
//       </div>
//     </div>
//   );
// };

// export default CalculationTable;
import React, { useState, useEffect } from 'react';

const CalculationTable = ({ data, onUpdate }) => {
  const [values, setValues] = useState(data);

  useEffect(() => {
    setValues(data);
  }, [data]);

  const calculateValues = (updatedValues) => {
    const annualRental = updatedValues.PPSQM * updatedValues.SQM * 12;
    const netIncomeAfterExpenses = annualRental - updatedValues.annualExpenses;
    const valuation = netIncomeAfterExpenses / (updatedValues.capRate / 100);

    return {
      ...updatedValues,
      annualRental,
      netIncomeAfterExpenses,
      valuation,
    };
  };

  const handleChange = (e, key) => {
    const value = parseFloat(e.target.value) || 0;
    const updatedValues = { ...values, [key]: value };

    const recalculatedValues = calculateValues(updatedValues);
    setValues(recalculatedValues);
    onUpdate(recalculatedValues);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Latitude</h2>
        <p className="text-gray-700">{values.lat}</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Longitude</h2>
        <p className="text-gray-700">{values.lng}</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Area Rate (PPSQM)</h2>
        <input
          type="number"
          value={values.PPSQM}
          onChange={(e) => handleChange(e, 'PPSQM')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Annual Income from Property</h2>
        <p className="text-gray-700">{values.annualRental}</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Annual Expenses</h2>
        <input
          type="number"
          value={values.annualExpenses}
          onChange={(e) => handleChange(e, 'annualExpenses')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Net Income After Expenses</h2>
        <p className="text-gray-700">{values.netIncomeAfterExpenses}</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Cap Rate</h2>
        <input
          type="number"
          value={values.capRate}
          onChange={(e) => handleChange(e, 'capRate')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-2">Valuation</h2>
        <p className="text-gray-700">{values.valuation}</p>
      </div>
    </div>
  );
};

export default CalculationTable;
