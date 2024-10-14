import React from 'react'
import Search from './Search'

function EarningCard({monthdata,month}) {
  return (
    <div className=''>

               <div className='bg-[#FAFAFA] m-10 min-h-[300px] rounded-md border-[0.4px] border-b-0 border-[#BFB6B6] flex flex-col justify-between'>
                      <h1 className='text-center font-[600] mt-3'>{month}</h1>   
                      <div className='flex justify-between pl-5 pr-5'>
                        <h1 className='text-[#665566]  font-[600] '>Gross Pay</h1>
                        <h1 className=' font-[700]'>{monthdata.monthlyCTC}</h1>
                      </div> 
                      <div className='flex justify-between pl-5 pr-5'>
                        <h1 className='text-[#665566]  font-[600] '>Reimburse</h1>
                        <h className=' font-[700]'>{monthdata.Reimburse}</h>
                      </div> 
                      <div className='flex justify-between pl-5 pr-5'>
                        <h1 className='text-[#665566] text-sm font-[600] '>Deductions</h1>
                        <h1 className=' font-[700]'>{monthdata.deductions}</h1>
                      </div> 
                      <div className='flex justify-between pl-5 pr-5'>
                        <h1 className='text-[#665566]  font-[600] '>Take Home</h1>
                        <h className=' font-[700]'>{monthdata.netIncome}</h>
                      </div> 
                      <div className='flex min-h-[60px]'>
                        <button className='rounded-bl-[6px] bg-[#1E293B] text-white font-[600] w-[50%]'>Payslip</button>
                        <button className='rounded-br-[6px] font-[600] w-[50%] border-[#BFB6B6] border-[0.4px] border-r-0'>Tax Sheet</button>
                      </div>
               </div>                  
    </div>
  )
}

export default EarningCard