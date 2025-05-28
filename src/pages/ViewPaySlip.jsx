import React from 'react'
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom';

const ViewPaySlip = () => {
  return (
    <div className="min-h-screen">
      <BackButton />
      {/* Employee Info*/}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 relative">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Abubakar Alghazali
            </h2>
            <p className="text-gray-600">Managing Director | MD/CEO</p>
          </div>
          <Link to={'/create-payslip'}>
            <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white font-semibold mt-2 px-14 py-2 rounded-lg hover:opacity-90 transition duration-300 text-sm">
              Edit Payslip
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Salary Payslip</h3>

        {/* Month/Year */}
        <div className="flex mb-6">
          <p className="mr-4">
            <span className="font-medium">Month:</span> January
          </p>
          <p>
            <span className="font-medium">Year:</span> 2023
          </p>
        </div>

        {/* Salary Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left bg-black text-xs font-medium text-white uppercase tracking-wider">
                  Salary Structure
                </th>
                <th className="px-4 py-3 bg-black border-l-2 text-white text-left text-xs font-medium uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 py-3 text-left bg-black border-l-8 text-white text-xs font-medium uppercase tracking-wider">
                  Deductions
                </th>
                <th className="px-4 py-3 text-left text-xs bg-black border-l-1 text-white font-medium uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Salary Structure Rows */}
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Basic Salary
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  445,331
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Tax/PAYE
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  163,696
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Housing Allowance
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  222,666
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Employee Pension
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  60,565
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Transport Allowance
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  89,066
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Total Deduction
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  224,261
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Utility Allowance
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  44,533
                </td>
                <td className="px-4 py-3 border-2 border-blue-200 whitespace-nowrap text-md text-gray-900">
                  Net Salary
                </td>
                <td className="px-4 py-3 border-2 border-blue-200 whitespace-nowrap text-md text-gray-900">
                  800,000
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Productivity Allowance
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  89,066
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900"></td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900"></td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Communication Allowance
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  66,800
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900"></td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900"></td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  Inconvenience allowance
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  66,800
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900"></td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Gross Salary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="font-bold text-gray-800">Gross Salary</p>
          <p className="text-lg font-bold text-gray-900">1,024,261</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>
      </div>
    </div>
  );
}

export default ViewPaySlip
