import React from 'react'
import MonthCards from '../Components/MonthCards'
import Navbar from '../Components/Navbar'
function Payslip() {
  return (
    <div className="flex flex-col p-4 pr-10 pl-10">
    <Navbar />
    <div className='w-full min-h-[179px]'>
    <MonthCards/>
    </div>
     </div>
    
  )
}

export default Payslip