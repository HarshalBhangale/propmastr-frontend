import React from 'react';

const Sidebar = () => {
return (
<div className="w-56 bg-gray-100 text-grey h-screen p-4">
    <ul>
    <li className="mb-2"><button className="hover:underline w-full text-left">Home</button></li>
    <li className="mb-2"><button className="hover:underline w-full text-left">Search History</button></li>
    <li className="mb-2"><button className="hover:underline w-full text-left">Settings</button></li>
    </ul>
</div>
);
};

export default Sidebar;
