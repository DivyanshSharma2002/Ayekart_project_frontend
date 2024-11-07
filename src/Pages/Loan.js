import React from 'react'
import Search from '../Components/Search'
import YearDropdown from '../Components/YearDropdown'
function Loan() {
  return (
    <div className='flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10 '>
        <h1 className='text-xl font-[700] '>Loans</h1>
      <p className='text-nm font-[400] text-[#5D5D5D]'>Management of Loan Application</p>
      <div className='mt-4'>  <Search/> </div>
      <div className='flex  justify-between mt-4'>
        <YearDropdown/>
        <button className='bg-[#1D7FF7] text-white sm:text-md xxs:text-sm font-[600] rounded-[4px] sm:p-3 xxs:p-1'>Apply for Loan</button>
    </div>
       
    <div className='flex flex-col mt-10'>
        <h1 className='font-[700]'>Loan History:</h1>
          
        <div className="flex min-w-full min-h-auto mt-8 justify-between p-4 mb-2  border-l-[5.76px] border-l-[#5EB629] shadow-custom items-center">
             <div className='flex'>
              <div className='flex flex-col justify-between'>
                <div className='sm:mr-16 xxs:mr-4 mb-4'>
                <h1 className='leading-3 text-[#333333]'>Distributed On</h1>
                <p className='font-[700]'>23/06/24</p>
                </div>
                <div className='sm:mr-16 xxs:mr-4'>
                <h1 className='leading-3 text-[#333333] '>Closed On</h1>
                <p className='font-[700]'>09/02/24</p>
                </div>
                
              </div>


             <div className='flex flex-col justify-between'>
             <h1 className='leading-3 text-[#333333] font-[600]'>LOAN-00003</h1>
                <div>
                <h1 className='leading-3 text-[#333333] font-[600]'>Personal Expenses</h1>
                <p className='font-[600] text-[#333333]'>₹45,000</p>
                </div>
              </div>
             </div>
                <div className='sm:w-[90px] sm:h-[35px] xxs:w-[55px] xxs:h-[25px] bg-[#DAFFD7] rounded-[8px] flex items-center justify-center'>
                  <h1 className='text-[#18AA0C] sm:font-[600] xxs:font-[500]'>Closed</h1>
                </div>

          </div>
        <div className="flex min-w-full min-h-auto mt-8 justify-between p-4 mb-2  border-l-[5.76px] border-l-[#5EB629] shadow-custom items-center">
             <div className='flex'>
              <div className='flex flex-col justify-between'>
                <div className='sm:mr-16 xxs:mr-4 mb-4'>
                <h1 className='leading-3 text-[#333333]'>Distributed On</h1>
                <p className='font-[700]'>12/07/23</p>
                </div>
                <div className='sm:mr-16 xxs:mr-4'>
                <h1 className='leading-3 text-[#333333]'>Closed On</h1>
                <p className='font-[700]'>10/11/23</p>
                </div>
                
              </div>


             <div className='flex flex-col justify-between'>
             <h1 className='leading-3 text-[#333333] font-[600]'>LOAN-00003</h1>
                <div>
                <h1 className='leading-3 text-[#333333] font-[600]'>Salary Advance</h1>
                <p className='font-[600] text-[#333333]'>₹65,000</p>
                </div>
              </div>
             </div>
                <div className='sm:w-[90px] sm:h-[35px] xxs:w-[55px] xxs:h-[25px] bg-[#DAFFD7] rounded-[8px] flex items-center justify-center'>
                  <h1 className='text-[#18AA0C] sm:font-[600] xxs:font-[500] '>Closed</h1>
                </div>

          </div>
        <div className="flex min-w-full min-h-auto mt-8 justify-between p-4 mb-2  border-l-[5.76px] border-l-[#EA5425] shadow-custom items-center">
             <div className='flex'>
              <div className='flex flex-col justify-between'>
                <div className='sm:mr-16 xxs:mr-4 mb-4'>
                <h1 className='leading-3 text-[#333333]'>Distributed On</h1>
                <p className='font-[700]'>11/02/24</p>
                </div>
                <div className='sm:mr-16 xxs:mr-4'>
                <h1 className='leading-3 text-[#333333]'>Closed On</h1>
                <p className='font-[700]'>01/03/24</p>
                </div>
                
              </div>


             <div className='flex flex-col justify-between'>
             <h1 className='leading-3 text-[#333333] font-[600]'>LOAN-00006</h1>
                <div>
                <h1 className='leading-3 text-[#333333] font-[600]'>Emergency Loan</h1>
                <p className='font-[600] text-[#333333]'>₹50,000</p>
                </div>
              </div>
             </div>
                <div className='sm:w-[90px] sm:h-[35px] xxs:w-[55px] xxs:h-[25px] bg-[#FFFDD7] rounded-[8px] flex items-center justify-center'>
                  <h1 className='text-[#E6DB09] sm:font-[600] xxs:font-[500]'>Pending</h1>
                </div>

          </div>

         <div className='flex items-center justify-center p-3 shadow-custom mt-8'>
          <img src='./assets/check.png' className='pr-4'/>
          <h1 className='sm:font-[600] xxs:font-[500]'>You’ve repaid all loans except Emergency Loan</h1>
         </div>

     </div>



    </div>
  )
}

export default Loan