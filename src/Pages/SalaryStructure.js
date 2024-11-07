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
    <div className="flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10 ">
      <Navbar />
      <div className="mb-4 text-[#5D5D5D] font-semibold">
      <h1 className='md:hidden text-2xl font-[700] text-black leading-5 mb-2 mt-2'>SALARY STRUCTURE</h1>
      <h2>Overview of your payroll details</h2>
      </div>

      {/* Wrapper 1 */}
      <div className="flex flex-wrap justify-between lg:min-h-[422px] mb-6">
        {/* Box 1 */}
        <div className="flex flex-col lg:w-[1050px] xxs:w-full bg-[#FAFAFA] rounded-[10px] border border-[#BFB6B6]">
          <div className="p-6">
            <h1 className="text-lg font-bold leading-7">Monthly CTC: ₹ 41,000</h1>
            <p className="text-xs font-semibold text-[#656060]">Yearly CTC: ₹ 5,46,000</p>
          </div>
          <div className="flex md:flex-row xxs:flex-col items-center p-1">
            <div className="relative md:w-[35%] xxs:w-full xxs:flex xxs:justify-center">
              <img
                src="./assets/Expense.png"
                alt="vector"
                className="lg:w-[253px] lg:h-[253px] md:w-[200px] md:h-[200px] xxs:w-[150px] xxs:h-[150px]"
              />
              <h2 className="absolute lg:top-[100px] md:top-[75px] xxs:top-[55px] lg:left-[155px] font-bold">Salary</h2>
              <h1 className="absolute lg:top-[120px] md:top-[90px] xxs:top-[75px] lg:left-[150px] font-bold">Income</h1>
            </div>
            <div className="flex flex-col md:items-center md:w-[55%] xxs:w-full pt-4 pl-10">
              <ul className="w-full flex flex-row items-center font-bold">
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
          <button className="flex h-[44px] border-[0.6px] border-b-[#BFB6B6] text-[#0581FF] text-lg justify-center leading-3 cursor-pointer mt-6 items-center border-b-0 border-l-0 border-r-0">
            <img src="./assets/download.png" alt="download" className="w-[20px] h-[23px]" />
            <h1 className="pl-4">Download</h1>
          </button>
        </div>
      </div>

      {/* Wrapper 2 */}
      <div className="flex flex-col lg:w-[1050px] md:w-full bg-[#FAFAFA] lg:min-h-[320px] mb-6 rounded-[10px] border border-[#BFB6B6] p-6">
        <ul className="w-1/2 flex flex-row justify-between items-center font-bold p-4">
          {latestMonths.map((month) => (
            <li
              key={month}
              onClick={() => handleMonthClick1(month)}
              className={`cursor-pointer text-center w-full pl-4 pr-4 text-lg tracking-wider ${
                selectedMonth1 === month ? "border-b-4 border-[#0581FF] text-black" : "text-[#9D9B9B]"
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
