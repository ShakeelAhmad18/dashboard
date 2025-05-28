import React from "react";
import BackButton from "../components/BackButton";

const ProcurementsRequest = () => {
  return (
    <div className="min-h-screen">
      <BackButton />

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Procurement Request
        </h1>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item
              </label>
              <input
                type="text"
                placeholder="Enter item name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unit price
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sent to
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select option</option>
                <option>Vendor A</option>
                <option>Vendor B</option>
                <option>Vendor C</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total price
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Add Attachment
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select option</option>
                <option>File</option>
                <option>Image</option>
                <option>Document</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Requested by
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100">
                <p className="font-semibold">Otor John</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Attachment type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select option</option>
                <option>Invoice</option>
                <option>Receipt</option>
                <option>Quotation</option>
              </select>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <button
              type="button"
              className="px-8 py-2 md:px-14 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200"
            >
              Attach Payment Voucher
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Payment Voucher
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">S/N</th>
                <th className=" px-4 py-2 text-left">Item</th>
                <th className=" px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className=" px-4 py-2 text-left">Unit Price (#)</th>
                <th className=" px-4 py-2 text-left">Total Price (#)</th>
                <th className=" px-4 py-2 text-left">VAT %</th>
                <th className=" px-4 py-2 text-left">VAT Amount (#)</th>
                <th className=" px-4 py-2 text-left">Gross Amount (#)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className=" px-4 py-2">01</td>
                <td className=" px-4 py-2">Office chairs</td>
                <td className=" px-4 py-2">25</td>
                <td className=" px-4 py-2">22/11/2022</td>
                <td className=" px-4 py-2">100,000.00</td>
                <td className=" px-4 py-2">2,500,000.00</td>
                <td className=" px-4 py-2">7.50%</td>
                <td className=" px-4 py-2">187,500.00</td>
                <td className=" px-4 py-2">2,687,500.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-8">
            Beneficiary Payment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account number
              </label>
              <input
                type="text"
                placeholder="Enter number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank name
              </label>
              <input
                type="text"
                placeholder="Enter bank name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-8">
            Memo Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Initiated by
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100">
                <p className="font-semibold">Otor John</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Verified by
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select option</option>
                <option>Verifier A</option>
                <option>Verifier B</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Approved by
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select option</option>
                <option>Approver A</option>
                <option>Approver B</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            <div>
              <div className="border-t w-[200px] border-black pt-2 mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Verifier Signature
                </label>
              </div>
            </div>
            <div>
              <div className="border-t w-[200px] border-black pt-2 mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Authorizer Signature
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="px-8 py-2 md:px-14 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200"
          >
            Save and Send for Approval
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcurementsRequest;
