import React from 'react'
import Navbar from '../Components/Navbar'
import YearDropdown from '../Components/YearDropdown'
import Search from '../Components/Search'
import Monthlyhistory from '../Components/Monthlyhistory';
import data from '../data'

function EPFsummary() {
  const latestMonths = Object.keys(data)
  .sort((a, b) => new Date(b) - new Date(a)) 
  .slice(0, 3); 
  return (
    <div className='flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10 '>
         <Navbar />
      <div className="mb-4 text-[#5D5D5D] font-semibold">
      <h1 className='md:hidden text-2xl font-[700] text-black leading-5 mb-2 mt-2'>EPF SUMMARY</h1>

        <h2>Detailed Structure of EPF till YTD </h2>
      </div>
      <div className='mt-4'>  <Search/> </div>
      <div className='mt-4'>
        <YearDropdown/>
      </div>

      <div className='w-full flex flex-col bg-[#FAFAFA] border-[#BFB6B6] border-[0.4px] rounded-[4px]  mt-4 relative' >
      
        <img src='./assets/epf.png' className='absolute w-[50px] h-[50px] top-4 left-3'/>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex items-end justify-center'>
          <h1 className=' mr-2 text-[#656060] font-[600] text-sm mt-5'>Yearly To Date (YTD)</h1>
          <div className='w-[70px] bg-[#656060] h-[1px] '></div>
          </div>
          <h1  className='ml-2 font-[700]'>Total Contribution:<span className='ml-2 font-[700]'>₹ 50,000</span></h1>
        </div>
         
         <div className='w-full flex flex-col mt-8 ml-3'>
         <div className='flex mb-2'>
          <h1 className='sm:font-[500] xxs:font-[400] w-1/2 ml-8'>Total Employee contribution: <span className='sm:font-[700] xxs:font-[600]'>₹30,000 </span></h1>
          <h1 className='sm:font-[500] xxs:font-[400] w-1/2 ml-8'>Total Employee contribution: <span  className='sm:font-[700] xxs:font-[600]'>₹30,000 </span></h1>
         </div>
          
          <div className='flex'>
               <div className='border-r-[0.4px] border-[#959494] w-1/2 ml-8'>
                <ul className='list-disc marker:text-black'>
                  <li className='mt-2 text-[#656060]'>Total PF Wages: ₹ 10,000 </li>
                  <li className='mt-2 text-[#656060]'>Total EPF: ₹ 10,000 </li>
                  <li className='mt-2 text-[#656060]'>Total EPS: ₹ 10,000 </li>
                </ul>
               </div>
               <div className='w-1/2 ml-8'> 
               <ul className='list-disc marker:text-black' >
                  <li className='mt-2 text-[#656060]'>Total EPF: ₹ 10,000 </li>
                  <li className='mt-2 text-[#656060]'>Total EPS: ₹ 10,000 </li>
                </ul>
               </div>
          </div>
        

         </div>
         <h1 className='text-[#656060] mt-4 ml-3'>i) The  total data from term covering from beginning of the year to current date.</h1>
         <button className='bg-[#1C82FE] mt-4 text-xl text-white font-[600] p-2'>Export PDF</button>
      </div>

      <div className="w-full min-h-[70px] shadow-custom border-l-[#000000] border-l-[3.53px] mt-6 p-2">
               
                <div className='flex items-center justify-between pr-8'>
                <h2 className="font-[600]">
                Statutory Details
                </h2>
                    <div>
                    <h1 className="font-[700] mt-1">PF Account number</h1>
                    <h1 className="font-[700] mt-1">-</h1>
                    </div>
                    <div>
                    <h1 className="font-[700] mt-1">UAN</h1>
                    <h1 className="font-[700] mt-1">-</h1>
                    </div>
                </div>
                
              </div>
              <h1 className='mt-10 font-[700] text-lg'>Monthly History :</h1>
              <div className='grid nm:grid-cols-3 nm:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 xxs:grid-cols-1 xxs:grid-rows-3 gap-x-24'>
              {latestMonths.map((month) => (
          <div
            key={month}
            className='cursor-pointer w-full text-lg tracking-wider'
          >
            <Monthlyhistory monthdata={data[month]}  month={month}/> {/* Pass month to Earning if needed */}
          </div>
        ))}
      </div>
</div>
  )
}

export default EPFsummary