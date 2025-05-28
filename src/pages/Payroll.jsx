import React, { useState } from 'react'
import PayrollSummary from '../components/PayrollSummary'
import { Link } from 'react-router-dom';
import SalaryDefinitionTable from '../components/SalaryDefinitionTable';
import NavBar from '../components/NavBar';
import TaxDefination from '../components/TaxDefination';
import EmployPaySlip from '../components/EmployPaySlip';
import PayRollTable from '../components/PayRollTable';

const Payroll = () => {

  const [activeTab, setActiveTab] = useState("Salary Breakdown");

  const tabs = ["Salary Breakdown", "Tax Definitions", "Payslips", "Payroll"];
   
  return (
    <div>
      <PayrollSummary />
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      {activeTab === "Salary Breakdown" && <SalaryDefinitionTable />}
      {activeTab === "Tax Definitions" && <TaxDefination/>}
      {activeTab === 'Payslips' && <EmployPaySlip/>}
      {activeTab === 'Payroll' && <PayRollTable/>}
    </div>
  );
}

export default Payroll
