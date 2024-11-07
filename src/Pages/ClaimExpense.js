import React from 'react';

function ClaimExpense() {
  return (
    <div className="flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10">
      <div>
        <h1 className="text-center font-[700] text-2xl leading-loose">Expense Reimbursement Form</h1>
        <p className="font-[600] text-gray-600 text-center">
          Use this form to claim reimbursement for business-related expenses, mileage allowances, and post-travel per diem allowances. Attach receipts, tax invoices, and other relevant documentation. Once completed, send the form and share a screenshot with your manager/admin.
        </p>
      </div>

      <form className="w-full flex flex-col mt-14  item-center ">
        <div className="flex flex-row items-start flex-wrap">
          <div className="mb-4 mr-10">
            <label className="font-[700] ">Employee Name:</label>
            <input type="text" className="border-[#959292] border-b-[1px] flex-grow w-[150px]" />
          </div>
          <div className="mb-4">
            <label className="font-[700] ">Employee ID:</label>
            <input type="text" className="border-b border-[#959292] flex-grow w-[150px]" />
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <h1 className="font-[700] mb-2">Expense Period:</h1>
          <div className="flex mt-4 flex-wrap">
            <div className="flex flex-row items-center mr-10">
              <label className="font-[700] mr-2">From:</label>
              <input type="date" className="border-b border-[#959292]" />
            </div>
            <div className="flex flex-row items-center">
              <label className="font-[700] mr-2">To:</label>
              <input type="date" className="border-b border-[#959292]" />
            </div>
          </div>
        </div>
      
      <div className='min-w-full mt-10 '>
      <h1 className='font-[700] '>Item Description:</h1>
      <table className="min-w-full min-h-[200px] border-[#959292] border-[1px] mt-4">
        <thead>
          <tr className="text-center ">
            <th className="border-[#959292] border-[1px] p-2">Date</th>
            <th className="border-[#959292] border-[1px] p-2">Description</th>
            <th className="border-[#959292] border-[1px] p-2">Category</th>
            <th className="border-[#959292] border-[1px] p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-[#959292] border-[1px] p-2"></td>
            <td className="border-[#959292] border-[1px] p-2"></td>
            <td className="border-[#959292] border-[1px] p-2"></td>
            <td className="border-[#959292] border-[1px] p-2"></td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='flex mt-10 flex-wrap'>
      <div className='min-w-[30%] mr-4'>
      <label for="attach_file" className='font-[700] mr-2'>Document (proof):</label>
      <input type="submit" value="Attach File" className='text-[#1C82FE] border-b-[1px] border-[#959292] min-w-[30%]'/>
      </div>
      <div className='min-w-[30%] mr-4'>
      <label for="attach_file" className='font-[700] mr-2'>Employee Sig:</label>
      <input type="submit" value="Attach File" className='text-[#1C82FE] border-b-[1px] border-[#959292] min-w-[30%]'/>
      </div>
      <div className='min-w-[30%] mr-4'>
      <label for="attach_file" className='font-[700] mr-2'>Date:</label>
      <input type="date" className='border-b-[1px] border-[#959292] min-w-[30%]'/>
      </div>
      </div>
      <h1 className='border-b-[1px] text-[#6D6D6D] border-[#6D6D6D] font-[600] text-center mt-10'> Share a screenshot with your manager/admin and wait for approval</h1>

        <div className="flex mt-10 flex-wrap ">
        <div className='min-w-[30%] mr-4'>
            <label className="font-[700] mr-2">Approval’s Name:</label>
            <input type="text" className="border-b border-[#959292] w-[150px]" />
          </div>
          <div className='min-w-[30%] mr-4'>
            <label className="font-[700] mr-2">Approval’s Sig:</label>
            <input type="text" className="border-b border-[#959292] w-[150px]" />
          </div>
          <div className='min-w-[30%] mr-4'>
            <label for="attach_file" className='font-[700] mr-2'>Date:</label>
            <input type="date" className='border-b border-[#959292] '/>
          </div>
        </div>
        <div className="flex justify-center mt-16">
           <button className='p-3 rounded-[4px] bg-[#1D7FF7] text-white w-32'> Done</button>
        </div>
      </form>
    </div>
  );
}

export default ClaimExpense;
