import React from "react";

function Earning({ monthdata }) {
  return (
    <div className="flex md:flex-row xxs:flex-col items-center justify-between pt-12 flex-grow">
      <div className="lg:w-[185px] md:w-[140px] w-full h-[69px] md:ml-6 xxs:ml-0 md:mr-0 xxs:mr-6  shadow-custom border-l-[#3DCD90] border-l-[3.53px]">
        <h2 className="ml-2 mt-2 text-sm text-[#656060] font-[600]">Earnings</h2>
        <h1 className="ml-2 font-[700] mt-1">{monthdata.earnings}</h1>
      </div>
      <div className="lg:w-[185px] md:w-[140px] w-full h-[69px] md:ml-6 xxs:ml-0 md:mr-0 xxs:mr-6 mt-2 shadow-custom border-l-[#FDCA58] border-l-[3.53px]">
        <h2 className="ml-2 mt-2 text-sm text-[#656060] font-[600]">Deductions</h2>
        <h1 className="ml-2 font-[700] mt-1">{monthdata.deductions}</h1>
      </div>
      <div className="lg:w-[185px] md:w-[140px] w-full h-[69px] md:ml-6 xxs:ml-0 md:mr-0 xxs:mr-6 mt-2 shadow-custom border-l-[#0A4F83] border-l-[3.53px]">
        <h2 className="ml-2 mt-2 text-sm text-[#656060] font-[600]">Net Income</h2>
        <h1 className="ml-2 font-[700] mt-1">{monthdata.netIncome}</h1>
      </div>
    </div>
  );
}

export default Earning;
