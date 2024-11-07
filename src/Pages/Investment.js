import React from 'react'
import Search from '../Components/Search'
import YearDropdown from '../Components/YearDropdown'

function Investment() {
  return (
    <div className='flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10 '>
        <h1 className='text-xl font-[700] '>Investments</h1>
      <p className='text-nm font-[400] text-[#5D5D5D]'>Expense on Particulars</p>
      <div className='mt-4'>  <Search/> </div>
      <div className='mt-4'>
        <YearDropdown/>
    </div>

    <div className="flex min-w-full min-h-auto mt-8 justify-between p-4 mb-2  border-l-[5.76px] border-l-[#ACAEAB] shadow-custom items-center">
        <div className='flex flex-col'>
            <h1 className='text-md font-[700] pb-2'>Overall Tax Summary</h1>
            <p  className='text-[#333333] pb-2'>Net Taxable Income:  <span className='font-[700] text-black'>₹645,630</span></p>
            <p  className='text-[#333333] pb-2'>Total Tax: <span className='font-[700] text-black'>₹40,691 </span></p>
            </div>
            <img
              src="./assets/approve.png"
              alt="approve"
              className="sm:w-[101px] sm:h-[30px] xxs:w-[80px] xxs:h-[25px] "
            />
      </div>

      <div className='flex flex-col mt-10'>
        <h1 className='font-[700]'>Particulars:</h1>
          
        <div className="flex min-w-full min-h-auto mt-8 justify-between p-4 mb-2  border-l-[5.76px] border-l-[#5EB629] shadow-custom items-center">
        <div className='flex flex-col'>
            <h1 className='text-md font-[700] pb-2'>House Rent Paid Details</h1>
            <p  className='text-[#333333] pb-2'>Jan 2024- March 2024</p>
            </div>
            <h1 className='font-[700] pr-8'>₹2,000 </h1>
      </div>

      <div className="min-w-full min-h-auto mt-8 justify-between p-4 mb-2  border-l-[5.76px] border-l-[#EFCA06] shadow-custom relative">
        <div className='flex flex-col'>
            <h1 className='text-md font-[700] pb-2'>Other Allowance Details</h1>
            <p  className='text-[#333333] pb-2 flex justify-between'>Leave Travel Allowance<span className='font-[700] text-black pr-6'>₹30,000</span></p>
            <p  className='text-[#333333] pb-2 flex justify-between'>Research Allowance<span className='font-[700] text-black pr-6'>₹24,000 </span></p>
            </div>
      </div>


      <div className="min-w-full min-h-auto mt-8 justify-between p-4 mb-2  border-l-[5.76px] border-l-[#753CEE] shadow-custom relative">
        <div className='flex flex-col'>
            <h1 className='text-md font-[700] pb-2'>80C Investments (Max Limit: ₹1,20,000)</h1>
            <p  className='text-[#333333] pb-2 flex justify-between'>Employee Provident Fund<span className='font-[700] text-black pr-6'>₹21,000</span></p>
            <p  className='text-[#333333] pb-2 flex justify-between'>Voluntary Provident Fund<span className='font-[700] text-black pr-6'>₹4,000 </span></p>
            <p  className='text-[#333333] pb-2 flex justify-between'>Public Provident Fund<span className='font-[700] text-black pr-6'>₹40,000 </span></p>
            </div>
      </div>




      </div>


    </div>
  )
}

export default Investment