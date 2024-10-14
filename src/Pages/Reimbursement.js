import React from 'react'
import Search from '../Components/Search'
import YearDropdown from '../Components/YearDropdown'
import { useNavigate } from 'react-router-dom'

function Reimbursement() {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col p-4 pr-10 pl-10 '>

        {/* <img src='./assets/goback.png'/> */}
        <h1 className='text-xl font-[700] '>Reimbursements</h1>

      <p className='text-nm font-[400] text-[#5D5D5D]'>Expense manged my organzation</p>
      <div className='mt-4'>  <Search/> </div>
      <div className='flex  justify-between mt-4'>
        <YearDropdown/>
        <button className='bg-[#1D7FF7] text-white text-md font-[600] rounded-[4px] p-3' onClick={()=>navigate('/claim-expense')}>Add Claim</button>
      </div>

      <div className='max-w-full bg-[#FAFAFA] border-[#BFB6B6] border-[0.4px] rounded-[4px] min-h-[300px] mt-4 pl-16 pr-16 pt-10 ' >
        <div className='flex justify-between font-[600] pb-6 text-lg'>
          <h1>Unclaimed reimbursements</h1>
          <h1>Amount</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>Telephne</h1>
          <h1>₹42,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>Vehicle</h1>
          <h1>₹20,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>Medical</h1>
          <h1>₹10,000</h1>
        </div>
        <div className='flex justify-between font-[600] pb-6 pl-4'>
          <h1>Meal</h1>
          <h1>₹10,000</h1>
        </div>
      </div>



        <div className="flex max-w-full min-h-[130px] mt-8 justify-between p-4 mb-2  border-l-[5.76px] border-l-[#43C838] shadow-custom relative">
        <div className='flex flex-col p-2'>
            <h1 className='text-md font-[700] pb-2'>Claim-0027, 15/07/2024</h1>
            <p  className='text-[#333333] pb-2'>Total Bill Amount: <span className='font-[700] text-black'>₹1,000 </span></p>
            <p  className='text-[#333333] pb-2'>Apporved Amount: <span className='font-[700] text-black'>₹1,000 </span></p>
            </div>
            <img
              src="./assets/approve.png"
              alt="approve"
              className="w-[101px] h-[30px] absolute top-[60px] right-[30px]"
            />
      </div>


    </div>
  )
}

export default Reimbursement