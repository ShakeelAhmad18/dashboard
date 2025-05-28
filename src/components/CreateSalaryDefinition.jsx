import React from "react";

const CreateSalaryDefinition = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl">
      <h2 className="text-xl font-bold text-[#2D2D2D] mb-7">
        Create Salary Definition
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm text-black mb-1">Job Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-black mb-1">Level</label>
          <input
            type="text"
            placeholder="Enter level"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-black mb-1">Basic Salary</label>
          <input
            type="text"
            placeholder="Enter amount in ₦"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-black mb-1">Allowance</label>
          <input
            type="text"
            placeholder="Enter allowance"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-black mb-1">Deductions</label>
          <input
            type="text"
            placeholder="Enter deductions"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-black mb-1">Gross Salary</label>
          <input
            type="text"
            placeholder="Gross Salary"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-black mb-1">Net Salary</label>
          <input
            type="text"
            placeholder="Gross Salary"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition duration-300">
            Create Salary Definition
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSalaryDefinition;
