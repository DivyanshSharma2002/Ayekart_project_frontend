import React from "react";
import { useNavigate } from "react-router-dom";

function Mypay() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:p-4 xxs:p-0 pr-10 pl-10 ">
      <h1 className="text-xl font-[700] leading-6">MY PAY</h1>
      <h2 className="mb-4 text-[#5D5D5D] font-[600]">
        Overview of your payroll details
      </h2>

      {/* Wrapper 1 */}
      <div className="flex flex-wrap justify-between min-h-[410px] mb-6">
        {/* Box 1 */}
        <div className="flex flex-col lg:max-w-[614px] xxs:w-full md:w-full xxs:mb-3  bg-[#FAFAFA] rounded-[10px] border-[0.8px] border-[#BFB6B6] justify-between border-b-0">
          {/* First part */}
          <div className="flex  items-center justify-between relative sm:pl-6 sm:pr-6 xxs:pr-4 xxs:pl-4 pt-4 ">
            <div>
              <h1 className="sm:text-lg xxs:text-nm sm:font-[700] xxs:font-[600] leading-4">
                Monthly CTC: ₹41,000
              </h1>
              <p className="text-xs font-[600] text-[#656060]">
                Yearly CTC: ₹5,46,000
              </p>
            </div>
            <img
              src="./assets/goto.png"
              alt="go to"
              className="absolute top-[15px] right-[30px]  sm:w-[44px] sm:h-[44px] xxs:w-[30px] xxs:h-[30px] cursor-pointer"
              onClick={() => navigate("/Salary_Structure")}
            />
          </div>

          {/* Second part */}
          <div className="flex lg:flex-row sm:flex-row xxs:flex-col xxs:justify-center  sm:justify-between sm:p-6 xxs:p-2">
            <div className="relative  sm:min-w-[45%] xxs:w-full flex justify-center mt-6 mb-3">
              <img
                src="./assets/Expense.png"
                alt="vector"
                className="sm:w-[253px] sm:h-[253px] xxs:w-[190px] xxs:h-[190px]"
              />
              <h2 className="absolute lg:top-[100px] sm:top-[110px]  lg:left-[105px] xxs:top-[70px] font-[700]">
                Salary
              </h2>
              <h1 className="absolute lg:top-[120px] sm:top-[130px] xxs:top-[90px] font-[700]">
                Income
              </h1>
            </div>
            {/* Part 2 */}
            <div className="flex flex-col xs:items-center justify-between sm:min-w-[55%] xxs:w-full sm:p-6 xxs:p-3">
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
            className="h-[44px] border-[0.6px] border-b-[#BFB6B6] text-[#0581FF] sm:text-lg xxs:text-nm leading-3 rounded-[10px] cursor-pointer"
            onClick={() => navigate("/Salary_Structure")}
          >
            View Salary Structure
          </button>
        </div>

        {/* Box 2 */}
        <div className=" lg:max-w-[391px] xxs:w-full relative xxs:mb-3">
          <div className="bg-[#FAFAFA]  min-h-[282px] xxs:pl-4 xxs:pr-4 border-[0.8px] border-[#BFB6B6] rounded-[10px] ">
            <div className="flex  items-center justify-between relative pt-4 ">
              <h1 className="text-md font-[600]">Reimbursement</h1>
              <img
                src="./assets/goto.png"
                alt="go to"
                className="absolute top-[15px] right-[20px]  sm:w-[44px] sm:h-[44px] xxs:w-[30px] xxs:h-[30px] cursor-pointer"
                onClick={() => navigate("/reimbursement")}
              />
            </div>
            <div className="absolute h-[21px] w-[87px] bg-[#FFFFFF] rounded-[4px] top-[120px] right-[-15px]"></div>
            <h1 className="font-[600] mt-8 text-lg leading-5">
              Unclaimed amount
            </h1>
            <h1 className="font-[700] sm:text-2xl xxs:text-xl">₹ 50,000</h1>
            <h2 className="mt-8 text-[#656060] font-[600]">
              Unpaid Amount: ₹ 0
            </h2>
            <h2 className="mt-8 leading-4 font-[600]">July claim</h2>
            <h3 className="text-sm text-[#656060] font-[400] mt-2">
              Reimbursement claim has been locked
            </h3>
          </div>
          <div className="flex flex-col sm:pt-8 xxs:pt-6">
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
        <div className="flex flex-col lg:max-w-[448px] xxs:mb-3  xxs:w-full bg-[#FAFAFA]   pl-4 border-[0.8px] border-[#BFB6B6] rounded-[10px] justify-between">
          {/* Part 1 */}
          <div className="flex  items-center justify-between relative pr-6 pt-4 ">
            <h1 className="text-md font-[600]">Investments</h1>
            <img
              src="./assets/goto.png"
              alt="go to"
              className="absolute top-[15px] right-[30px]  sm:w-[44px] sm:h-[44px] xxs:w-[30px] xxs:h-[30px] cursor-pointer"
              onClick={() => navigate("/investments")}
            />
          </div>
          {/* Part 2 */}
          <div className="mt-[-40px]">
            <h1 className="font-[600] mt-10 sm:text-lg xxs:text-nm">Tax Summary FY 2024-25</h1>
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
        <div className="flex flex-col bg-[#FAFAFA] xxs:mb-3   pl-4 border-[0.8px] border-[#BFB6B6] rounded-[10px] justify-between lg:max-w-[557px] xxs:w-full">
          {/* Part 1 */}
          <div className="flex  items-center justify-between relative pr-6 pt-4 ">
            <h1 className="text-md font-[600]">Loans</h1>
            <img
              src="./assets/goto.png"
              alt="go to"
              className="absolute top-[15px] right-[30px]  sm:w-[44px] sm:h-[44px] xxs:w-[30px] xxs:h-[30px] cursor-pointer"
              onClick={() => navigate("/loans")}
            />
          </div>
          {/* Part 2 */}
          <div className="flex xxs:mb-6 xxs:mt-3 h-[34px] bg-white item-center justify-center ml-2 mr-6">
            <img
              src="./assets/check.png"
              alt="check"
              className="h-[18px] w-[18px] m-2 "
            />
            <p className="sm:text-sm xxs:text-xs sm:font-[600] xxs:font-[500] xxs:mt-2">
              You’ve repaid all loans except Emergency Loan
            </p>
          </div>
          {/* Part 3 */}
          <h1 className="text-md font-[600] xxs:mb-3 lg:mb-0">History</h1>
          {/* Part 4 */}
          <div className="flex justify-between items-center sm:p-4 xxs:p-2 mb-2  h-[48px] border-l-[5.76px] border-l-[#43C838] shadow-custom sm:ml-6 xxs:ml-4 mr-6">
            <h1 className="sm:text-[16px] xxs:text-sm">Salary Advances</h1>
            <img
              src="./assets/approve.png"
              alt="approve"
              className="sm:w-[101px] sm:h-[30px] xxs:w-[80px] xxs:h-[25px]"
            />
          </div>
          {/* Part 5 */}
          <p className="sm:text-[13px] xxs:text-xs mb-2 text-[#656060] xxs:mt-2 lg:mt-0">
            Manage your loans claim, pending and approved from manager/admin for
            all important purpose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mypay;
