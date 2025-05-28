import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CreateTaxDefiantion = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-[#14ADD6] flex items-center hover:text-blue-800"
          >
            <IoIosArrowBack className="mr-1" /> Back
          </button>
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-7">
          Create Tax Definition
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm text-black mb-1">Tax Type</label>
            <input
              type="text"
              placeholder="Enter tax name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-black mb-1">Value</label>
            <input
              type="text"
              placeholder="Enter % Value"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <div className="mt-6">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition duration-300">
            Create Salary Definition
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaxDefiantion;
