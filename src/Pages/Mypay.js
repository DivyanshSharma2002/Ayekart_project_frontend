import React from "react";
import { useNavigate } from "react-router-dom";

function Mypay() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-4 pr-10 pl-10 ">
      <h1 className="text-xl font-[700] leading-6">MY PAY</h1>
      <h2 className="mb-4 text-[#5D5D5D] font-[600]">
        Overview of your payroll details
      </h2>

      {/* Wrapper 1 */}
      <div className="flex flex-wrap justify-between min-h-[410px] mb-6">
        {/* Box 1 */}
        <div className="flex flex-col lg:max-w-[614px] xs:w-full md:w-full sm:mb-3  bg-[#FAFAFA] rounded-[10px] border-[0.8px] border-[#BFB6B6] justify-between border-b-0">
          {/* First part */}
          <div className="flex  items-center justify-between reltive pl-6 pr-6 pt-4 ">
            <div>
              <h1 className="text-lg font-[700] leading-4">
                Monthly CTC: ₹ 41,000
              </h1>
              <p className="text-xs font-[600] text-[#656060]">
                Yearly CTC: ₹ 5,46,000
              </p>
            </div>
            <img
              src="./assets/goto.png"
              alt="go to"
              className=" w-[44px] h-[44px] cursor-pointer"
              onClick={() => navigate("/Salary_Structure")}
            />
          </div>

          {/* Second part */}
          <div className="flex lg:flex-row sm:flex-row xs:flex-col xs:justify-between lg:pl-6  pr-6">
            <div className="relative mr-4 min-w-[45%] xs:w-full xs:flex xs:justify-center mt-6">
              <img
                src="./assets/Expense.png"
                alt="vector"
                className="lg:w-[253px] lg:h-[253px]"
              />
              <h2 className="absolute lg:top-[100px] md:top-[110px] sm:top-[110px] lg:left-[105px] font-[700]">
                Salary
              </h2>
              <h1 className="absolute lg:top-[120px] md:top-[130px] sm:top-[130px] font-[700]">
                Income
              </h1>
            </div>
            {/* Part 2 */}
            <div className="flex flex-col items-center justify-between min-w-[55%]  xs:p-6">
              <div className="lg:w-[263px] h-[68px] xs:w-full xs:pl-3 m-2 shadow-custom   border-l-[#3DCD90] border-l-[3.53px]">
                <h2 className="ml-2 mt-2 text-sm text-[#656060] font-[600]">
                  Earnings
                </h2>
                <h1 className="ml-2 font-[700] mt-1">₹ 36,000</h1>
              </div>
              <div className="lg:w-[263px] h-[68px] xs:w-full xs:pl-3 shadow-custom   border-l-[#FDCA58] border-l-[3.53px] m-2 ">
                <h2 className="ml-2 mt-2 text-sm text-[#656060] font-[600] ">
                  Deductions
                </h2>
                <h1 className="ml-2 font-[700] mt-1">₹ 5,000</h1>
              </div>
              <div className="lg:w-[263px] h-[68px] xs:w-full xs:pl-3 shadow-custom   border-l-[#0A4F83] border-l-[3.53px] m-2 ">
                <h2 className="ml-2 mt-2 text-sm text-[#656060] font-[600]">
                  Net Income
                </h2>
                <h1 className="ml-2 font-[700] mt-1">₹ 31,000</h1>
              </div>
            </div>
          </div>
          <button
            className="h-[44px] border-[0.6px] border-b-[#BFB6B6] text-[#0581FF] text-lg leading-3 rounded-[10px] cursor-pointer"
            onClick={() => navigate("/Salary_Structure")}
          >
            View Salary Structure
          </button>
        </div>

        {/* Box 2 */}
        <div className=" lg:max-w-[391px] sm:w-full relative sm:mb-3">
          <div className="bg-[#FAFAFA]  min-h-[282px] pl-4 border-[0.8px] border-[#BFB6B6] rounded-[10px] ">
            <div className="flex  items-center justify-between reltive   pt-4 ">
              <h1 className="text-md font-[600]">Reimbursement</h1>
              <img
                src="./assets/goto.png"
                alt="go to"
                className="h-[44px] w-[44px] cursor-pointer"
                onClick={() => navigate("/reimbursement")}
              />
            </div>
            <div className="absolute h-[21px] w-[87px] bg-[#FFFFFF] rounded-[4px] top-[120px] right-[-15px]"></div>
            <h1 className="font-[600] mt-8 text-lg leading-5">
              Unclaimed amount
            </h1>
            <h1 className="font-[700] text-2xl">₹ 50,000</h1>
            <h2 className="mt-8 text-[#656060] font-[600]">
              Unpaid Amount: ₹ 0
            </h2>
            <h2 className="mt-8 leading-4 font-[600]">July claim</h2>
            <h3 className="text-sm text-[#656060] font-[400] mt-2">
              Reimbursement claim has been locked
            </h3>
          </div>
          <div className="flex flex-col pt-8">
            <div className="flex justify-between">
              <h1 className="text-md font-[600]">Documents</h1>
              <h2
                className="text-[#0581FF] text-md font-[600] cursor-pointer"
                onClick={() => navigate("/documents")}
              >
                View all
              </h2>
            </div>
            <button className="text-white bg-[#1E293B] font-[700] mt-4 p-4 rounded-[6px]">
              Download Payslip
            </button>
          </div>
        </div>
      </div>

      {/* Wrapper 2 */}
      <div className="flex flex-wrap min-h-[364px] justify-between">
        {/* Box 1 */}
        <div className="flex flex-col lg:max-w-[448px] sm:mb-3  sm:w-full bg-[#FAFAFA]   pl-4 border-[0.8px] border-[#BFB6B6] rounded-[10px] justify-between">
          {/* Part 1 */}
          <div className="flex  items-center justify-between reltive  pr-6 pt-4 ">
            <h1 className="text-md font-[600]">Investments</h1>
            <img
              src="./assets/goto.png"
              alt="go to"
              className="h-[44px] w-[44px] cursor-pointer"
              onClick={() => navigate("/investments")}
            />
          </div>
          {/* Part 2 */}
          <div className="mt-[-40px]">
            <h1 className="font-[600] mt-8 text-lg">Tax Summary FY 2024-25</h1>
            <h2 className="font-[600] mt-4 text-sm ml-1">Total Annual Tax</h2>
            <p className="font-[600] text-[#656060] text-xs ml-2 mt-6">
              **********
            </p>
          </div>
          {/* Part 3 */}
          <div className="flex mb-2 justify-between w-[60%] mt-3">
            <div className="flex flex-col ">
              <h1 className="font-[600] text-sm ">Paid</h1>
              <p className="font-[600] text-[#656060] text-xs mt-4">******</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-[600] text-sm ">Remaining</h1>
              <p className="font-[600] text-[#656060] text-xs  mt-4">******</p>
            </div>
          </div>
          {/* Part 4 */}
          <div className="p-6 text-center">
            <h1 className="text-[#656060] text-xs">
              A certain amount of *****/mnth will be deducted
            </h1>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col bg-[#FAFAFA] sm:mb-3   pl-4 border-[0.8px] border-[#BFB6B6] rounded-[10px] justify-between lg:max-w-[557px] sm:w-full">
          {/* Part 1 */}
          <div className="flex  items-center justify-between reltive  pr-6 pt-4 ">
            <h1 className="text-md font-[600]">Loans</h1>
            <img
              src="./assets/goto.png"
              alt="go to"
              className="h-[44px] w-[44px] cursor-pointer"
              onClick={() => navigate("/loans")}
            />
          </div>
          {/* Part 2 */}
          <div className="flex mb-6 h-[34px] bg-white item-center ml-2 mr-6">
            <img
              src="./assets/check.png"
              alt="check"
              className="h-[18px] w-[18px] m-2 ml-8 mr-20"
            />
            <p className="text-sm font-[600] mt-1">
              You’ve repaid all loans except Emergency Loan
            </p>
          </div>
          {/* Part 3 */}
          <h1 className="text-md font-[600]">History</h1>
          {/* Part 4 */}
          <div className="flex justify-between items-center p-4 mb-2  h-[48px] border-l-[5.76px] border-l-[#43C838] shadow-custom ml-6 mr-6">
            <h1>Salary Advances</h1>
            <img
              src="./assets/approve.png"
              alt="approve"
              className="w-[101px] h-[30px]"
            />
          </div>
          {/* Part 5 */}
          <p>
            Manage your loans claim, pending and approved from manager/admin for
            all important purpose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mypay;
