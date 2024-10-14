import React from "react";

function Gross({ monthdata }) {
  return (
    <div className="flex w-full flex-col pl-6">
      <div className="flex w-full border-b-[1px] border-b-[#D9D9D9]">
        <div className="w-[40%] mr-[80px] pr-24 pl-6">
        <h1 className="text-lg font-[700] tracking-wider mb-2">Earnings</h1>
          <div className="flex justify-between mb-6">
            <h1 className="text-[#665566] text-md font-[600]">Basic</h1>
            <h1 className="text-md font-[700]">{monthdata.basic}</h1>
          </div>
          <div className="flex justify-between mb-6">
          <h1 className="text-[#665566] text-md font-[600]">House Rent Allowence</h1>
          <h1 className="text-md font-[700]">{monthdata.House_rent}</h1>
          </div>
          <div className="flex justify-between mb-6">
             <h1 className="text-[#665566] text-md font-[600]">conveyacne Allowence</h1>
            <h1 className="text-md font-[700]">{monthdata.conveyance}</h1>
          </div>
        </div>
        <div className="w-[40%] ml-[80px] pl-24 pr-6">
        <h1 className="text-lg font-[700] tracking-wider mb-2">Deductions</h1>
          <div className="flex justify-between mb-6">
             <h1 className="text-[#665566] text-md font-[600]">EPF</h1>
            <h1 className="text-md font-[700]">{monthdata.epf}</h1>
          </div>
          <div className="flex justify-between mb-6">
             <h1 className="text-[#665566] text-md font-[600]">EDLI</h1>
            <h1 className="text-md font-[700]">{monthdata.edli}</h1>
          </div>
          <div className="flex justify-between mb-10">
             <h1 className="text-[#665566] text-md font-[600]">EPF Admin Charges</h1>
            <h1 className="text-md font-[700]">{monthdata.epf_Admin}</h1>
          </div>
        </div>
      </div>
       <div className="flex justify-between items-center mt-2 pl-6 pr-14">
       <h1 className="text-[#665566] text-md font-[600]">Monthly CTC</h1>
        <h1 className="text-md font-[700]">{monthdata.monthlyCTC}</h1>
      </div>
    </div>
  );
}

export default Gross;
