import React from 'react'
import Search from '../Components/Search'
import YearDropdown from '../Components/YearDropdown'
import Navbar from '../Components/Navbar'
import data from '../data'
import Monthlyearning from '../Components/Monthlyearning'

function AnnualEarnings() {

  const latestMonths = Object.keys(data)
  .sort((a, b) => new Date(b) - new Date(a)) 
  .slice(0, 3); 

  return (
    <div className='flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10'>
         <Navbar />
      <div className="mb-4 text-[#5D5D5D] font-semibold">
      <h1 className='md:hidden text-2xl font-[700] text-black leading-5 mb-2 mt-2'>ANNUAL EARNINGS</h1>

        <h2>Detailed Earnings of Salary Structure</h2>
      </div>
      <div className='mt-4'>  <Search/> </div>
      <div className='mt-4'>
        <YearDropdown/>
      </div>

      <div className='min-w-full bg-[#FAFAFA] border-[#BFB6B6] border-[0.4px] rounded-[4px] min-h-[300px] mt-4 sm:pl-16 xxs:pl-8 pr-16 pt-6 ' >
        <div className='flex justify-between font-[600] pb-6 text-lg'>
          <h1>Earnings</h1>
          <h1>YTD Total</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>Basic</h1>
          <h1>₹2,00,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>HRA</h1>
          <h1>₹1,10,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>Conveyance Allowance</h1>
          <h1>₹10,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>Fixed Allowance</h1>
          <h1>₹2,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>Basic Pay</h1>
          <h1>₹72,000</h1>
        </div>
        
      </div>
     <h1 className='mt-10 font-[700] text-lg'>Monthly Earnigs:</h1>
     <div className='grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 xxs:grid-cols-1 xxs:grid-rows-3 gap-x-24'>
        {latestMonths.map((month) => (
          <div
            key={month}
            className='cursor-pointer w-full  text-lg tracking-wider'
          >
            <Monthlyearning monthdata={data[month]}  month={month}/> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnnualEarnings