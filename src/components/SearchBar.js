    import React, { useState } from 'react';

    const SearchBar = ({ onSearch }) => {
    const [address, setAddress] = useState('');

    const handleSearch = () => {
    console.log('Search button clicked with address:', address); // Debug log
    onSearch(address);
    };

    return (
    <div className="flex justify-center items-center p-4">
        <div className="relative w-2/3">
        <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full py-3 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter property address"
        />
        </div>
        <button
        onClick={handleSearch}
        className="ml-3 py-3 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
        Search
        </button>
    </div>
    );
    };

    export default SearchBar;
