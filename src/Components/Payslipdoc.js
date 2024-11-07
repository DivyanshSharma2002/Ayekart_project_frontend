import React from 'react'
import data from '../data';
import { useState } from 'react';
function Payslipdoc() {
    const[SelectedMonth,setSelectedMonth]=useState("September");
    const handleMonthClick = (month) => {
      setSelectedMonth(month);
    };
  return (
    <div className='flex flex-col mt-8'>
    {Object.keys(data).map((month) => (
                <div
                  key={month}
                  onClick={() => handleMonthClick(month)}
                  className={`cursor-pointer flex justify-between w-full  font-[600] mb-6 p-3 tracking-wider shadow-custom items-center min-h-auto ${
                    SelectedMonth === month
                      ? "border-l-[5px] border-l-[#5EB629] "
                      : ""
                  }`}
                >
                  {month}
                  <div className='flex items-center'>
                        <img src='./assets/download.png' className='w-[15px] h-[20px] mr-2'/>
                        <h1 className='font-[400] mr-4 text-[#0581FF]'>Download</h1>
                    </div>
                </div>
              ))}
              

</div>
  )
}

export default Payslipdoc