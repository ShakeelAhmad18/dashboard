import React from 'react'
import BackButton from '../components/BackButton'

const TrainingRequest = () => {
  return (
    <div className="min-h-screen">
      <BackButton />
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-7">
          Training Request
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Training Description
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Training Type
            </label>
            <select
              name="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select type</option>
              <option value="Electronics">Team</option>
              <option value="Clothing">Individual</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Training Duration
            </label>
            <select
              name="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Duration</option>
              <option value="Electronics">1month</option>
              <option value="Clothing">2week</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Training Date
            </label>
            <input
              type="date"
              name="maintenanceType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Training Mode
            </label>
            <select
              name="recuringOption"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select mode</option>
              <option value="Electronics">Online</option>
              <option value="Clothing">Physical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Staff to be trained
            </label>
            <select
              name="recuringOption"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select staff</option>
              <option value="Electronics">Online</option>
              <option value="Clothing">Physical</option>
            </select>
          </div>
        </form>
        <div className="mt-6 flex gap-5">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white font-semibold px-10 py-2 rounded-lg hover:opacity-90 transition duration-300">
            Scheduled Maintenance
          </button>
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white font-semibold px-10 py-2 rounded-lg hover:opacity-90 transition duration-300">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainingRequest
