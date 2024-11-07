import React from 'react'
import { useState } from 'react';
function YearDropdown() {
    const [selectedYear, setSelectedYear] = useState('2024-25');
  
    const years = ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25'];

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
      };
    

  return (
    <div>
              {/* Dropdown for Financial Year */}
      <div className="financial-year-dropdown border-[0.4px] rounded-[4px] border-[#BFB6B6] bg-[#FAFAFA] w-[210px] p-2 ">
        <label htmlFor="financialYear" className='font-[600] mr-1'>Financial Year:</label>
        <select
          id="financialYear"
          value={selectedYear}
          onChange={handleYearChange}
          className="font-[600]"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default YearDropdown