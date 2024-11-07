import React from "react";

function Gross({ monthdata }) {
  return (
    <div className="flex w-full flex-col pl-6">
      <div className="flex sm:flex-row xxs:flex-col w-full border-b border-[#D9D9D9]">
        {/* Earnings Section */}
        <div className="sm:w-[40%] xxs:w-full mr-20 pr-6">
          <h2 className="text-lg font-bold tracking-wider mb-2">Earnings</h2>
          <div className="flex justify-between mb-6">
            <span className="text-[#665566] text-md font-semibold">Basic</span>
            <span className="text-md font-bold">{monthdata.basic}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-[#665566] text-md font-semibold">House Rent Allowance</span>
            <span className="text-md font-bold">{monthdata.House_rent}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-[#665566] text-md font-semibold">Conveyance Allowance</span>
            <span className="text-md font-bold">{monthdata.conveyance}</span>
          </div>
        </div>

        {/* Deductions Section */}
        <div className="sm:w-[40%] xxs:w-full mr-20 pr-6">
          <h2 className="text-lg font-bold tracking-wider mb-2">Deductions</h2>
          <div className="flex justify-between mb-6">
            <span className="text-[#665566] text-md font-semibold">EPF</span>
            <span className="text-md font-bold">{monthdata.epf}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-[#665566] text-md font-semibold">EDLI</span>
            <span className="text-md font-bold">{monthdata.edli}</span>
          </div>
          <div className="flex justify-between mb-10">
            <span className="text-[#665566] text-md font-semibold">EPF Admin Charges</span>
            <span className="text-md font-bold">{monthdata.epf_Admin}</span>
          </div>
        </div>
      </div>

      {/* Monthly CTC */}
      <div className="flex justify-between items-center mt-2 pl-6 pr-14">
        <span className="text-[#665566] text-md font-semibold">Monthly CTC</span>
        <span className="text-md font-bold">{monthdata.monthlyCTC}</span>
      </div>
    </div>
  );
}

export default Gross;
