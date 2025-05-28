import React from 'react'
import { Link } from 'react-router-dom';

const TaxDefination = () => {

    const salaryData = [
      {
        sn: "01",
        taxType: "VAT",
        value: "2%",
      },
      {
        sn: "02",
        taxType: "VAT",
        value: "2%",
      },
      {
        sn: "03",
        taxType: "VAT",
        value: "2%",
      },
      {
        sn: "04",
        taxType: "VAT",
        value: "2%",
      },
      {
        sn: "05",
        taxType: "VAT",
        value: "2%",
      },
      {
        sn: "06",
        taxType: "VAT",
        value: "2%",
      },
      {
        sn: "07",
        taxType: "WHT",
        value: "2.4%",
      },
      {
        sn: "08",
        taxType: "NHIS",
        value: "3%",
      },
      {
        sn: "09",
        taxType: "WHT",
        value: "5%",
      },
      {
        sn: "10",
        taxType: "VAT",
        value: "2%",
      },
      {
        sn: "11",
        taxType: "WHT",
        value: "2%",
      },
    ];
      
  return (
    <div className="p-6 bg-white rounded-xl mt-7">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Salary Defination</h1>
        <Link to="/create-tax-definition">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-4 py-2 rounded-md shadow">
            Create Tax Definition
          </button>
        </Link>
      </div>
      <div className="overflow-auto rounded-b-xl">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2">S/N</th>
              <th className="px-4 py-2">Tax Type</th>
              <th className="px-4 py-2">% Value</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.sn}</td>
                <td className="px-4 py-2">{item.taxType}</td>
                <td className="px-4 py-2">{item.value}</td>
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

export default TaxDefination
