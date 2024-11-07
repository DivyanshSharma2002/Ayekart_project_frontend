import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const tabMapping = {
        'SALARY STRUCTURE': '/Salary_Structure',
        'PAYSLIP': '/payslip', 
        'ANNUAL EARNINGS': '/annual-earnings', 
        'EPF SUMMARY': '/epf-summary', 
    };

    const getActiveTab = () => {
        return Object.keys(tabMapping).find(tab => tabMapping[tab] === location.pathname) || '';
    };

    const activeTab = getActiveTab();

    const handleTabClick = (tabName) => {
        navigate(tabMapping[tabName]); 
        setIsDropdownOpen(false); // Close dropdown on tab click
    };

    return (
        <div className='w-full flex justify-between items-center relative'>
            {/* Horizontal Navbar for larger screens */}
            <div className='hidden md:flex'>
                <ul className='flex flex-row'>
                    {Object.keys(tabMapping).map((tab) => (
                        <li
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`cursor-pointer mr-8 font-[700] lg:text-xl md:text-lg xxs:text-sm ${
                                activeTab === tab ? 'border-b-[4px] border-[#0581FF]' : 'text-[#9D9B9B]'
                            }`}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hamburger Menu for Mobile on the right side */}
            <div className='md:hidden flex items-center absolute right-4 top-2'>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='flex flex-col items-center'>
                    <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
                    <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
                    <span className="block w-6 h-1 bg-gray-800"></span>
                </button>
                {isDropdownOpen && (
                    <div className='absolute right-0 mt-[300px]  w-60 bg-white shadow-lg rounded-md z-10'>
                        <ul className='flex flex-col'>
                            {Object.keys(tabMapping).map((tab) => (
                                <li
                                    key={tab}
                                    onClick={() => handleTabClick(tab)}
                                    className={`cursor-pointer p-4 hover:bg-gray-200 ${
                                        activeTab === tab ? 'font-bold' : ''
                                    }`}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
