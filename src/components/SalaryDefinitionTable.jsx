import React from "react";
import { Link } from "react-router-dom";

const salaryData = [
  {
    sn: "01",
    title: "Managing Director",
    level: "MD/CEO",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "02",
    title: "Executive Director",
    level: "ED",
    basic: "₦395,000.00",
    allowance: "₦197,500.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "03",
    title: "General Manager",
    level: "GM",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "04",
    title: "Deputy General Manager",
    level: "DGM",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "05",
    title: "Asst. General Manager",
    level: "MD/CEO",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "06",
    title: "Principal Manager",
    level: "MD/CEO",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "07",
    title: "Senior Manager",
    level: "MD/CEO",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "08",
    title: "Manager",
    level: "MD/CEO",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "09",
    title: "Deputy Manager",
    level: "MD/CEO",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "10",
    title: "Asst. Manager",
    level: "MD/CEO",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
  {
    sn: "11",
    title: "Snr. Executive Officer",
    level: "MD/CEO",
    basic: "₦445,331.00",
    allowance: "₦600,000.00",
    gross: "₦1,145,331.00",
    deductions: "₦224,000.00",
    net: "₦224,000.00",
  },
];

export default function SalaryDefinitionTable() {

   

  return (
    <div className="p-6 bg-white rounded-xl mt-7">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Salary Defination</h1>
        <Link to="/create-tax-defination">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-4 py-2 rounded-md shadow">
            Create Salary Definition
          </button>
        </Link>
      </div>
      <div className="overflow-auto rounded-b-xl">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2">S/N</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">Basic Salary</th>
              <th className="px-4 py-2">Allowance</th>
              <th className="px-4 py-2">Gross Salary</th>
              <th className="px-4 py-2">Deductions</th>
              <th className="px-4 py-2">Net Salary</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.sn}</td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.level}</td>
                <td className="px-4 py-2">{item.basic}</td>
                <td className="px-4 py-2">{item.allowance}</td>
                <td className="px-4 py-2">{item.gross}</td>
                <td className="px-4 py-2">{item.deductions}</td>
                <td className="px-4 py-2">{item.net}</td>
                <td className="px-4 py-2 text-blue-600 font-medium">
                  <button className="mr-2 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
