import React, { useState } from 'react'
import Search from '../Components/Search'
import YearDropdown from '../Components/YearDropdown'
import Payslipdoc from '../Components/Payslipdoc';
import Formslip from '../Components/Formslip';
function Document() {
   const[clicked,setclicked]=useState('payslip');
   
   const handleClick = (tab) => {
    if (clicked !== tab) {
      setclicked(tab); 
  }
};

  return (
    <div className='flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10 '>
    <h1 className='text-xl font-[700] '>Documents</h1>
  <p className='text-nm font-[400] text-[#5D5D5D]'>Management of Loan Application</p>
  <div className='mt-4'>  <Search/> </div>
  <div className='mt-4'>
    <YearDropdown/>
</div> 
 
 <h1 className='mt-8 text-lg font-[700]'>History:</h1>

<div className='flex mt-8 '>
            <div 
                    className={`cursor-pointer font-[700] mr-6 ${clicked === 'payslip' ?'border-b-[3px] border-[#0581FF] text-black': 'text-[#9D9B9B]'}`} 
                    onClick={() => handleClick('payslip')}
                >
                    Payslip
                </div>
                <div 
                    className={`cursor-pointer font-[700] ${clicked === 'form' ?'border-b-[3px] border-[#0581FF] text-black': 'text-[#9D9B9B]'}`} 
                    onClick={() => handleClick('form')}
                >
                    Form Slip
                </div>
               
            </div>

            <div>
            {clicked === 'payslip' && <Payslipdoc />}
                {clicked === 'form' && <Formslip />}
            </div>
        </div>



  )
}

export default Document