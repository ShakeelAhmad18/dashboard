import React from "react";

const PaymentVoucherSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 mt-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
        Payment Voucher
      </h2>

      {/* Voucher Table - Mobile Card View */}
      <div className="sm:hidden mb-6 border border-gray-200 rounded-lg p-4">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-500">S/N:</span>
            <span className="text-sm text-gray-700">01</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-500">
              Request Title:
            </span>
            <span className="text-sm text-gray-700">
              Request for travel time
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-500">Purpose:</span>
            <span className="text-sm text-gray-700">Training course</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-500">
              Date From:
            </span>
            <span className="text-sm text-gray-700">22/11/2022</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-500">Date To:</span>
            <span className="text-sm text-gray-700">30/11/2022</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-500">Amount:</span>
            <span className="text-sm font-medium text-gray-700">
              360,000.00
            </span>
          </div>
        </div>
      </div>

      {/* Voucher Table - Desktop View */}
      <div className="hidden sm:block overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                S/N
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                Request Title
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                Purpose
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                Date From
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                Date To
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border">
                01
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border">
                Request for travel time
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border">
                Training course
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border">
                22/11/2022
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border">
                30/11/2022
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border">
                360,000.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Beneficiary Payment Details */}
      <div className="mb-6 mt-6 sm:mt-10">
        <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-4 sm:mb-6">
          Beneficiary Payment Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account name
            </label>
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account number
            </label>
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter number"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank name
            </label>
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter bank name"
            />
          </div>
        </div>
      </div>

      {/* Signatures */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mt-10 sm:mt-20">
        <div className="flex flex-col">
          <div className="h-[2px] bg-black w-full sm:w-[200px] mb-1"></div>
          <label className="block text-sm font-medium text-gray-700">
            Verifier Signature
          </label>
        </div>
        <div className="flex flex-col">
          <div className="h-[2px] bg-black w-full sm:w-[200px] mb-1"></div>
          <label className="block text-sm font-medium text-gray-700">
            Authorizer Signature
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-lg hover:opacity-80 hover:scale-105 transition-all duration-200">
          Save and Send for Approval
        </button>
        <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-lg hover:opacity-80 hover:scale-105 transition-all duration-200">
          Save
        </button>
      </div>
    </div>
  );
};

export default PaymentVoucherSection;
