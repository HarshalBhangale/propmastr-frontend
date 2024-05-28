import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
const navigate = useNavigate();

const handleLogout = () => {
// Perform any logout operations here, such as clearing authentication tokens
navigate('/login');
};

return (
<div className="w-56 bg-gray-100 text-gray-800 h-screen p-4 flex flex-col justify-between">
    <div className="flex-grow overflow-auto">
    <ul>
        <li className="mb-2">
        <button
            className="hover:underline w-full text-left"
            onClick={() => navigate('/')}
        >
            Home
        </button>
        </li>
        <li className="mb-2">
        <button
            className="hover:underline w-full text-left"
            onClick={() => navigate('/search-history')}
        >
            Search History
        </button>
        </li>
    </ul>
    </div>
    <button
    className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
    onClick={handleLogout}
    >
    Logout
    </button>
</div>
);
};

export default Sidebar;
