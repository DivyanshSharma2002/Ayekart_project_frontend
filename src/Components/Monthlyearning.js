import React from 'react'
import Search from './Search'

function Monthlyearning({monthdata,month}) {
  return (
    <div className=''>

               <div className='bg-[#FAFAFA] mt-10   rounded-md border-[0.4px]  border-[#BFB6B6] flex flex-col justify-between'>
                      <h1 className='text-center font-[600] mb-4'>{month}</h1>   
                      <div className='text-start md:pl-4 xxs:pl-10 mb-2 '>
                        <h1 className=' font-[700]'>{monthdata.basic}</h1>
                        <h1 className='text-[#665566] text-sm'>Basic</h1>

                      </div> 
                       <div className='text-start md:pl-4 xxs:pl-10 mb-4'>
                      <h className=' font-[700]'>{monthdata.House_rent}</h>

                        <h1 className='text-[#665566] text-sm'>HRA</h1>
                      </div> 
                       <div className='text-start md:pl-4 xxs:pl-10 mb-4'>
                      <h1 className=' font-[700]'>{monthdata.conveyance}</h1>

                        <h1 className='text-[#665566] text-sm'>Conveyance Allowance</h1>
                      </div> 
                       <div className='text-start md:pl-4 xxs:pl-10 mb-4'>
                      <h className=' font-[700]'>{monthdata.conveyance}</h>
                        <h1 className='text-[#665566] text-sm'>Conveyance Allowance</h1>
                        
                      </div> 
                  
               </div>                  
    </div>
  )
}

export default Monthlyearning