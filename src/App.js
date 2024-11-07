import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mypay from "./Pages/Mypay";
import SalaryStructure from "./Pages/SalaryStructure";
import Reimbursement from "./Pages/Reimbursement";
import Document from "./Pages/Document";
import Investment from "./Pages/Investment";
import Loan from "./Pages/Loan";
import Payslip from "../src/Pages/Payslip";
import AnnualEarnings from "../src/Pages/AnnualEarnings"
import EPFsummary from "../src/Pages/EPFsummary"
import ClaimExpense from "./Pages/ClaimExpense";

function App() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="bg-[#E1DFDF] lg:w-[296px] min-h-[1024px] nm:w-[200px] md:w-0"></div>
      <div className="flex flex-col flex-grow">
        <div className="bg-[#E1DFDF] lg:h-[81px] max-w-full sm:h-[60px]"></div>
        <div className="flex-grow p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Mypay />} />
            <Route path="/Salary_Structure" element={<SalaryStructure />} />
            <Route path="/reimbursement" element={<Reimbursement />} />
            <Route path="/documents" element={<Document />} />
            <Route path="/investments" element={<Investment />} />
            <Route path="/loans" element={<Loan />} />
            <Route path="/payslip" element={<Payslip />} />
            <Route path="/annual-earnings" element={<AnnualEarnings />} />
            <Route path="/epf-summary" element={<EPFsummary />} />
            <Route path="/claim-expense" element={<ClaimExpense />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
