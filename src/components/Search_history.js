import React, { useState, useEffect } from 'react';

const SearchHistory = () => {
const [history, setHistory] = useState([]);

useEffect(() => {
// Fetch search history from an API or local storage
const fetchHistory = async () => {
    // Example data, replace this with actual data fetching
    const exampleHistory = [
    {
        address: '1 Thibault Square, Cape Town, South Africa',
        details: 'Property valuation for office building',
        price: 'R 3,000,000',
    },
    {
        address: '2 Dock Road, V&A Waterfront, Cape Town, South Africa',
        details: 'Property valuation for industrial site',
        price: 'R 5,000,000',
    },
    {
        address: '3 Alice Lane, Sandton, Johannesburg, South Africa',
        details: 'Property valuation for retail space',
        price: 'R 1,500,000',
    },
    ];
    setHistory(exampleHistory);
};

fetchHistory();
}, []);

return (
<div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Search History</h2>
    <div className="space-y-4">
    {history.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">{item.address}</h3>
        <p className="text-gray-700 mb-1">{item.details}</p>
        <p className="text-gray-700 font-bold">Price: {item.price}</p>
        </div>
    ))}
    </div>
</div>
);
};

export default SearchHistory;
