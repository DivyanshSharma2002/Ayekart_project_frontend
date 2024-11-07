import React, { useState } from 'react';

function Formslip() {
    const [selected, setSelected] = useState('2024-25');

    const fiscalYears = [
        '2024-25',
        '2023-24',
        '2022-23',
        '2021-20',
        '2020-19'
    ];

    const handleFiscalYearClick = (year) => {
        setSelected(selected === year ? null : year); // Toggle selection
    };

    return (
        <div className='mt-4'>
            <h1 className='text-[#6D6D6D]'>This form has been signed and certified using a Digital Signature Certificate as specified under section 119 of the Income Tax Act, 1961.</h1>

            {fiscalYears.map((year) => (
                <div 
                    key={year} 
                    className={`cursor-pointer flex justify-between w-full  font-[600]  mt-4 p-3 tracking-wider shadow-custom items-center min-h-auto ${selected === year ? "border-l-[5px] border-l-[#5EB629] " : ''}`} 
                    onClick={() => handleFiscalYearClick(year)}
                >
                    <h1>FY: {year}</h1>
                    <div className='flex items-center'>
                        <img src='./assets/download.png' className='w-[15px] h-[20px] mr-2'/>
                        <h1 className='font-[400] mr-4 text-[#0581FF]'>Download</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Formslip;
