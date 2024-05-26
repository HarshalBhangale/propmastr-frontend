import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
const [address, setAddress] = useState('');

const handleSearch = () => {
console.log('Search button clicked with address:', address); // Debug log
onSearch(address);
};

return (
<div className="flex justify-center items-center p-4">
    <input
    type="text"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    className="border rounded-l-lg p-2 w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter property address"
    />
    <button
    onClick={handleSearch}
    className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg transition duration-300"
    >
    Search
    </button>
</div>
);
};

export default SearchBar;
