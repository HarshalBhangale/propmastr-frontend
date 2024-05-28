import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import MapComponent from './components/MapComponent';
import CalculationTable from './components/CalculationTable';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import SearchHistory from './components/Search_history';
const App = () => {
  const [position, setPosition] = useState(null);
  const [data, setData] = useState({
    PPSQM: 0,
    SQM: 0,
    perMonthRental: 0,
    annualRental: 0,
    annualExpenses: 0,
    netIncomeAfterExpenses: 0,
    capRate: 0.09,
    valuation: 0,
  });

  const handleSearch = async (address) => {
    console.log('Search initiated for address:', address); // Debug log

    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: address,
          format: 'json',
        },
      });

      console.log('API response:', response.data); // Debug log

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        console.log('Location found:', lat, lon); // Debug log
        setPosition([parseFloat(lat), parseFloat(lon)]);
      } else {
        alert('Location not found');
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
      alert('Error fetching location data');
    }
  };

  const handleUpdate = (values) => {
    const perMonthRental = values.PPSQM * values.SQM;
    const annualRental = perMonthRental * 12;
    const netIncomeAfterExpenses = annualRental - values.annualExpenses;
    const valuation = netIncomeAfterExpenses / values.capRate;

    setData({
      ...values,
      perMonthRental,
      annualRental,
      netIncomeAfterExpenses,
      valuation,
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/valuation"
          element={
            <div className="h-screen flex flex-col">
              <Navbar />
              <div className="flex-1 flex">
                <Sidebar />
                <div className="flex-1 p-4">
                  <SearchBar onSearch={handleSearch} />
                  {position && (
                    <div className="mt-4">
                      <MapComponent position={position} />
                      <CalculationTable data={data} onUpdate={handleUpdate} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/search-history" element={<SearchHistory />} />
      </Routes>
    </Router>
  );
};

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import SearchBar from './SearchBar';
// import MapComponent from './MapComponent';
// import CalculationTable from './CalculationTable';
// import LandingPage from './LandingPage';
// import Login from './Login';
// import Signup from './Signup';
// import SearchHistory from './Search_history';

// const App = () => {
//   const [position, setPosition] = useState(null);
//   const [data, setData] = useState({
//     PPSQM: 0,
//     SQM: 0,
//     perMonthRental: 0,
//     annualRental: 0,
//     annualExpenses: 0,
//     netIncomeAfterExpenses: 0,
//     capRate: 0.09,
//     valuation: 0,
//   });

//   const handleSearch = async (address) => {
//     console.log('Search initiated for address:', address);

//     try {
//       const response = await axios.get(`http://localhost:5000/property?address=${address}`);
//       console.log('API response:', response.data);

//       if (response.data) {
//         const propertyData = response.data;
//         setPosition([parseFloat(propertyData.lat), parseFloat(propertyData.lon)]);
//         handleUpdate(propertyData); // Update calculation table with fetched data
//       } else {
//         alert('Property data not found');
//       }
//     } catch (error) {
//       console.error('Error fetching property data:', error);
//       alert('Error fetching property data');
//     }
//   };

//   const handleUpdate = (values) => {
//     const perMonthRental = values.PPSQM * values.SQM;
//     const annualRental = perMonthRental * 12;
//     const netIncomeAfterExpenses = annualRental - values.annualExpenses;
//     const valuation = netIncomeAfterExpenses / values.capRate;

//     setData({
//       ...values,
//       perMonthRental,
//       annualRental,
//       netIncomeAfterExpenses,
//       valuation,
//     });
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//           path="/valuation"
//           element={
//             <div className="h-screen flex flex-col">
//               <Navbar />
//               <div className="flex-1 flex">
//                 <Sidebar />
//                 <div className="flex-1 p-4">
//                   <SearchBar onSearch={handleSearch} />
//                   {position && (
//                     <div className="mt-4">
//                       <MapComponent position={position} />
//                       <CalculationTable data={data} onUpdate={handleUpdate} />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           }
//         />
//         <Route path="/search-history" element={<SearchHistory />} />
//       </Routes>
//     </Router>
//   );
// };

export default App;
