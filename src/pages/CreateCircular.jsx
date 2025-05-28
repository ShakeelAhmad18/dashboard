import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CreateCircular = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back button */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-[#14ADD6] flex items-center hover:text-blue-800"
          >
            <IoIosArrowBack className="mr-1" /> Back
          </button>
        </div>

        {/* Create Circular Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Create Circular
          </h1>

          <div className="space-y-6">
            {/* Grid for first three fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Circular Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Circular title
                </label>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
                    defaultValue="2022-11-16"
                  />
                  <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Sent From */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sent from
                </label>
                <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
                  Star John
                </div>
              </div>
            </div>

            {/* Grid for next two fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sent To */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sent to
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]">
                  <option>Select option</option>
                </select>
              </div>

              {/* Circular Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Circular message
                </label>
                <textarea
                  placeholder="Enter message..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14ADD6]"
                ></textarea>
              </div>
            </div>

            {/* Send Circular Button */}
            <div className="pt-4">
              <button className="px-10 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-md shadow hover:shadow-md transition-all">
                Send Circular
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCircular;
