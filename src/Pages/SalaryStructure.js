import React, { useState } from "react";
import data from "../data";
import Earning from "../Components/Earning";
import Gross from "../Components/Gross";
import Navbar from "../Components/Navbar";

function SalaryStructure() {
  const [selectedMonth, setSelectedMonth] = useState("September");
  const [selectedMonth1, setSelectedMonth1] = useState("September");

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };
  
  const handleMonthClick1 = (month) => {
    setSelectedMonth1(month);
  };
  const latestMonths = Object.keys(data)
  .sort((a, b) => new Date(b) - new Date(a)) 
  .slice(0, 4); 


  return (
    <div className="flex flex-col p-4 pr-10 pl-10">
      <Navbar />
      <div className="mb-4 text-[#5D5D5D] font-semibold">
        <h2>Overview of your payroll details</h2>
      </div>
      {/* Wrapper 1 */}
      <div className="flex flex-wrap justify-between lg:min-h-[422px] mb-6">
        {/* Box 1 */}
        <div className="flex flex-col lg:max-w-[1050px] md:w-full bg-[#FAFAFA] rounded-[10px] border border-[#BFB6B6]">
          {/* First Part */}
          <div className="p-6">
            <h1 className="text-lg font-bold leading-7">Monthly CTC: ₹ 41,000</h1>
            <p className="text-xs font-semibold text-[#656060]">Yearly CTC: ₹ 5,46,000</p>
          </div>
          {/* Second Part */}
          <div className="flex lg:flex-row xs:flex-col items-center p-1 ">
            <div className="relative lg:w-[35%] xs:w-full xs:flex xs:justify-center">
              <img
                src="./assets/Expense.png"
                alt="vector"
                className="lg:w-[253px] lg:h-[253px] xs:w-[150px] xs:h-[150px]"
              />
              <h2 className="absolute top-[100px] lg:left-[155px] font-bold">Salary</h2>
              <h1 className="absolute top-[120px] lg:left-[150px] font-bold">Income</h1>
            </div>
            {/* Part 2 */}
            <div className="flex flex-col items-center lg:w-[55%] min-h-full xs:w-full pt-4 pl-10">
             
                <ul className=" w-full flex flex-row  items-center font-[700] ">
                
                  {latestMonths.map((month) => (
                    <li
                      key={month}
                      onClick={() => handleMonthClick(month)}
                      className={`cursor-pointer text-center w-full text-lg tracking-wider ${
                        selectedMonth === month
                          ? "border-b-4 border-[#0581FF] text-black"
                          : "text-[#9D9B9B]"
                      }`}
                    >
                      {month}
                    </li>
                  ))}
                </ul>
            
              <div>
                <Earning monthdata={data[selectedMonth]} />
              </div>
            </div>
          </div>
          {/* Third Part */}
          <button  className="flex h-[44px] border-[0.6px] border-b-[#BFB6B6] text-[#0581FF] text-lg justify-center leading-3 cursor-pointer mt-6 items-center border-b-0 border-l-0 border-r-0">
            <img src="./assets/group.png" alt="download" className="w-[20px] h-[23px] " />
            <h1 className="pl-4">Download</h1>
          </button>
        </div>
      </div>
      {/* wrapper 2 */}
      
      {/* Box 2 */}
      <div className="flex flex-col lg:max-w-[1050px] md:w-full bg-[#FAFAFA] lg:min-h-[320px] mb-6 rounded-[10px] border border-[#BFB6B6] p-6">
        
         <ul className="w-[50%] flex flex-row  justify-between items-center font-[700] p-4">
            {latestMonths.map((month) => (
              <li
                key={month}
                onClick={() => handleMonthClick1(month)}
                className={`cursor-pointer text-center w-full pl-4 pr-4 text-lg tracking-wider ${
                  selectedMonth1 === month ? "border-b-4 border-[#0581FF] text-black"
                          : "text-[#9D9B9B]"
                }`}
              >
                {month}
              </li>
            ))}
          </ul>
  
        <div className="w-full">
          <Gross monthdata={data[selectedMonth1]} />
        </div>
      </div>
    </div>
  );
}

export default SalaryStructure;
