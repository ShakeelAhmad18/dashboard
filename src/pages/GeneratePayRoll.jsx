import React from 'react'
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom';

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
  

const GeneratePayRoll = () => {
  return (
    <div className="min-h-screen ">
      <BackButton />
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl mb-6">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-10">
          Generate Payroll
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Name
            </label>
            <input
              type="text"
              placeholder="Enter Payment Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]">
              <option>Select Designation</option>
              <option>HR Department</option>
              <option>Accountant Department</option>
              <option>Admin Department</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Generated
            </label>
            <input
              type="date"
              className="w-full px-4 bg-gray-300 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Year
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]">
              <option>2023</option>
              <option>2024</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Month
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]">
              <option>January</option>
              <option>March</option>
            </select>
          </div>
        </form>
        <div className="flex items-end">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-10 py-2 rounded-md shadow hover:opacity-90 transition duration-300">
            Generate Payroll
          </button>
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl mt-7">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">Staff Details</h1>
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
    </div>
  );
}

export default GeneratePayRoll
