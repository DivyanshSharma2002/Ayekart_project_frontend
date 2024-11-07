import React from 'react'
import MonthCards from '../Components/MonthCards'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import YearDropdown from '../Components/YearDropdown'

function Payslip() {
  return (
    <div className="flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10">
    <Navbar />
    <div className="mb-4 text-[#5D5D5D] font-semibold">
    <h1 className='md:hidden text-2xl font-[700] text-black leading-5 mb-2 mt-2'>PAYSLIP</h1>
        <h2>Detailed Income of Salary</h2>
      </div>
      <div className='mt-4'>  <Search/> </div>
      <div className='mt-4'>
        <YearDropdown/>
      </div>
    <div className='w-full min-h-[179px]'>
    <MonthCards/>
    </div>
     </div>
    
  )
}

export default Payslip