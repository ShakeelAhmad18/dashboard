import React from 'react'
import {Link} from 'react-router-dom'

const EmpolyHistory = [
  {
    sn: "01",
    StaffName: "Abubakar Alghazali",
    Title: "Managing Director",
    Level: "MD/CEO",
    BasicSalary: "₦600,000.00",
    Allowance: "₦1,145,331.00",
    GrossSalary: "₦224,000.00",
    Deduction: "₦224,000.00",
    netSalary: "₦224,000.00",
  },
  {
    sn: "01",
    StaffName: "Abubakar Alghazali",
    Title: "Managing Director",
    Level: "MD/CEO",
    BasicSalary: "₦600,000.00",
    Allowance: "₦1,145,331.00",
    GrossSalary: "₦224,000.00",
    Deduction: "₦224,000.00",
    netSalary: "₦224,000.00",
  },
  {
    sn: "01",
    StaffName: "Abubakar Alghazali",
    Title: "Managing Director",
    Level: "MD/CEO",
    BasicSalary: "₦600,000.00",
    Allowance: "₦1,145,331.00",
    GrossSalary: "₦224,000.00",
    Deduction: "₦224,000.00",
    netSalary: "₦224,000.00",
  },
  {
    sn: "01",
    StaffName: "Abubakar Alghazali",
    Title: "Managing Director",
    Level: "MD/CEO",
    BasicSalary: "₦600,000.00",
    Allowance: "₦1,145,331.00",
    GrossSalary: "₦224,000.00",
    Deduction: "₦224,000.00",
    netSalary: "₦224,000.00",
  },
];

const EmployPaySlip = () => {
  return (
    <div className="p-6 bg-white rounded-xl mt-7">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Salary Defination</h1>
        <Link to="/create-payslip">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-4 py-2 rounded-md shadow">
            Create payslip
          </button>
        </Link>
      </div>
      <div className="overflow-auto rounded-b-xl">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2">S/N</th>
              <th className="px-4 py-2">Staff Name</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">Basic Salary</th>
              <th className="px-4 py-2">Allowances</th>
              <th className="px-4 py-2">Gross Salary</th>
              <th className="px-4 py-2">Deduction</th>
              <th className="px-4 py-2">Net Salary</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {EmpolyHistory.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.sn}</td>
                <td className="px-4 py-2">{item.StaffName}</td>
                <td className="px-4 py-2">{item.Title}</td>
                <td className="px-4 py-2">{item.Level}</td>
                <td className="px-4 py-2">{item.BasicSalary}</td>
                <td className="px-4 py-2">{item.Allowance}</td>
                <td className="px-4 py-2">{item.GrossSalary}</td>
                <td className="px-4 py-2">{item.Deduction}</td>
                <td className="px-4 py-2">{item.netSalary}</td>
                <td className="px-4 py-2 text-blue-600 font-medium">
                  <Link to={`/viewpayslip/${item.sn}`}>
                    {" "}
                    <button className="mr-2 hover:underline">
                      View more
                    </button>{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployPaySlip
