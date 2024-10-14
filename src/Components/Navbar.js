import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const tabMapping = {
        'SALARY STRUCTURE': '/Salary_Structure',
        'PAYSLIP': '/payslip', 
        'ANNUAL EARNINGS': '/annual-earnings', 
        'EPF SUMMARY': '/epf-summary', 
    };

    // Function to get the active tab based on the current pathname
    const getActiveTab = () => {
        return Object.keys(tabMapping).find(tab => tabMapping[tab] === location.pathname) || '';
    };

    const activeTab = getActiveTab();

    const handleTabClick = (tabName) => {
        navigate(tabMapping[tabName]); 
    };

    return (
        <div className='w-full'>
            <ul className='flex flex-row'>
                {Object.keys(tabMapping).map((tab) => (
                    <li
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`cursor-pointer mr-8 font-[700] text-xl ${
                            activeTab === tab ? 'border-b-[4px] border-[#0581FF]' : 'text-[#9D9B9B]'
                        }`}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
