import React from "react";
import BackButton from "../components/BackButton";

const CreatePaySlip = () => {
  return (
    <div className="min-h-screen">
      <BackButton />

      {/* Basic Information Rectangle */}
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl mb-6">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-10">
          Create Payslip
        </h2>
        <h3 className="text-md font-bold text-[#2D2D2D] mb-3">
          Basic Information
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Staff Name
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]">
              <option>Select Staff</option>
              <option>HR</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]">
              <option>Select Title</option>
              <option>Mr</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Level
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]">
              <option className="text-gray-400">Select Level</option>
              <option>HR</option>
            </select>
          </div>
        </form>
      </div>

      {/* Salary Structure Rectangle */}
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl mb-6">
        <h3 className="text-md font-bold text-[#2D2D2D] mb-3">
          Salary Structure
        </h3>
        <div className="mt-10">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Basic Salary
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Housing Allowance
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transport Allowance
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Utility Allowance
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Productivity Allowance
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Communication Allowance
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Inconvenience allowance
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gross Salary
              </label>
              <input
                type="text"
                disabled
                placeholder="Enter Amount"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Deductions Rectangle */}
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl mb-6">
        <h3 className="text-md font-bold text-[#2D2D2D] mb-3">Detuctions</h3>
        <div className="mt-10">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                TAX/PAYE
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employee pension
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Deduction
              </label>
              <input
                type="text"
                disabled
                placeholder="Enter Amount"
                className="w-full bg-gray-200 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Net Salary Rectangle */}
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl">
        <h3 className="text-md font-bold text-[#2D2D2D] mb-3">Net Salary</h3>
        <div className="mt-10">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Net Salary
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                disabled
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
              />
            </div>
          </form>
        </div>
        <div className="mt-6">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white font-semibold px-30 py-2 rounded-lg hover:opacity-90 transition duration-300">
            Create Payslip
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePaySlip;
