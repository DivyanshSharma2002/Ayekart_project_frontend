import React from 'react'
import Search from '../Components/Search'
import YearDropdown from '../Components/YearDropdown'
import { useNavigate } from 'react-router-dom'


function Reimbursement() {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10'>

        {/* <img src='./assets/goback.png'/> */}
        <h1 className='text-xl font-[700] '>Reimbursements</h1>

      <p className='text-nm font-[400] text-[#5D5D5D]'>Expense manged my organzation</p>
      <div className='mt-4'>  <Search/> </div>
      <div className='flex  justify-between mt-4'>
        <YearDropdown/>
        <button className='bg-[#1D7FF7] text-white  xxs:text-sm sm:text-md font-[600] rounded-[4px] p-3' onClick={()=>navigate('/claim-expense')}>Add Claim</button>
      </div>

      <div className='min-w-full bg-[#FAFAFA] border-[#BFB6B6] border-[0.4px] rounded-[4px] min-h-[300px] mt-4 sm:pl-16 xxs:pl-6 pr-16 pt-10 ' >
        <div className='flex justify-between sm:font-[600] xxs:font-[700] pb-6 sm:text-lg xxs:text-nm'>
          <h1 className='xxs:-mt-2'>Unclaimed reimbursements</h1>
          <h1 className='xs:-mt-2 xxs:-mt-1'>Amount</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4 '>
          <h1>Telephne</h1>
          <h1>₹42,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4 '>
          <h1>Vehicle</h1>
          <h1>₹20,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4 '>
          <h1>Medical</h1>
          <h1>₹10,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4 '>
          <h1>Meal</h1>
          <h1>₹10,000</h1>
        </div>
      </div>



        <div className="flex min-w-full sm:min-h-[130px] xxs:min-h-[110px] mt-8 justify-between sm:p-4 xxs:p-2 sm:mb-2 xxs:mb-1  border-l-[5.76px] border-l-[#43C838] shadow-custom relative">
        <div className='flex flex-col p-2 sm:text-[16px] xxs:text-sm'>
            <h1 className='text-md font-[700] sm:pb-2 xxs:pb-1'>Claim-0027, 15/07/2024</h1>
            <p  className='text-[#333333] sm:pb-2 xxs:pb-1'>Total Bill Amount: <span className='font-[700] text-black'>₹1,000 </span></p>
            <p  className='text-[#333333] sm:pb-2 xxs:pb-1'>Apporved Amount: <span className='font-[700] text-black'>₹1,000 </span></p>
            </div>
            <img
              src="./assets/approve.png"
              alt="approve"
              className="sm:w-[101px] sm:h-[30px] xxs:w-[80px] xxs:h-[25px] absolute sm:top-[60px] sm:right-[30px] xxs:top-[45px] xxs:right-[20px]"
            />
      </div>


    </div>
  )
}

export default Reimbursement