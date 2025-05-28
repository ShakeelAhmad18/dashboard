import React from 'react'
import { Link } from 'react-router-dom';


const payrollData = [
  {
    sn: "01",
    paymentName: "Monthly Salary",
    Designation: "Accountant Department",
    dateGenerated: "2023-10-01",
    paymentMonth: "October",
    paymentYear: "2023",
    Status: "Paid",
  },
  {
    sn: "02",
    paymentName: "Monthly Salary",
    Designation: "Accountant Department",
    dateGenerated: "2023-10-01",
    paymentMonth: "October",
    paymentYear: "2023",
    Status: "Pending",
  },
  {
    sn: "03",
    paymentName: "Monthly Salary",
    Designation: "Accountant Department",
    dateGenerated: "2023-10-01",
    paymentMonth: "October",
    paymentYear: "2023",
    Status: "Paid",
  },
];

const PayRollTable = () => {
  return (
    <div className="p-6 bg-white rounded-xl mt-7">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Salary Defination</h1>
        <Link to="/generate-payroll">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-8 py-2 rounded-md shadow">
            Generate Payroll
          </button>
        </Link>
      </div>
      <div className="overflow-auto rounded-b-xl">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2">S/N</th>
              <th className="px-4 py-2">Payment name</th>
              <th className="px-4 py-2">Designation</th>
              <th className="px-4 py-2">Date generated</th>
              <th className="px-4 py-2">Payment month</th>
              <th className="px-4 py-2">Payment year</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.sn}</td>
                <td className="px-4 py-2">{item.paymentName}</td>
                <td className="px-4 py-2">{item.Designation}</td>
                <td className="px-4 py-2">{item.dateGenerated}</td>
                <td className="px-4 py-2">{item.paymentMonth}</td>
                <td className="px-4 py-2">{item.paymentYear}</td>
                <td className="px-4 py-2">
                  {item.Status === "Paid" ? (
                    <span className="inline-flex items-center text-green-600">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Paid
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-yellow-600">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Pending
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 text-blue-600 font-medium">
                  <button className="mr-2 hover:underline">View More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PayRollTable
