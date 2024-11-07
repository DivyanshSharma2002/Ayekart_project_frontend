import React from 'react'
import Search from './Search'

function Monthlyhistory({monthdata,month}) {
  return (
    <div className=''>

               <div className='bg-[#FAFAFA] mt-10   rounded-md border-[0.4px] border-t-0  border-[#BFB6B6] flex flex-col justify-between'>
                      <h1 className='text-center font-[600] mb-4 rounded-tl-[6px] rounded-tr-[6px] bg-[#1E293B] text-white p-2'>{month}</h1>   
                      <div className='text-center  mb-2 font-[600]'>
                      Total Contribution: ₹40,000 
                      </div> 
                       <div className='text-start pl-8 mb-3 '>
                       <h1 className='font-[600]'>Employee Contribution</h1>
                       <h1 className='text-[#665566] text-nm'>PF Wages: ₹10,000 </h1>                  
                      <h1 className=' text-[#665566] text-nm'>{`EPF: ${monthdata.epf}`}</h1>
                      <h1 className=' text-[#665566] text-nm'>{`EPF: ${monthdata.epf}`}</h1>
                        
                      </div> 
                       <div className='text-start pl-8 mb-3 '>
                       <h1 className='font-[600]'>Employee Contribution</h1>                 
                      <h1 className=' text-[#665566] text-nm'>{`EPF: ${monthdata.epf}`}</h1>
                      <h1 className=' text-[#665566] text-nm'>EPS: ₹10,000 </h1>
                        
                      </div> 
                  
               </div>                  
    </div>
  )
}

export default Monthlyhistory