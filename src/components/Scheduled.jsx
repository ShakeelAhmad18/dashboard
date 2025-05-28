import React from 'react'
import BackButton from './BackButton'

const Scheduled = () => {
  return (
    <div className="min-h-screen">
      <BackButton />
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-5">
          Scheduled Maintenance
        </h2>
        <p className="mb-6">
          Kindly fill in the form below to schedule a maintenance.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Item Name
            </label>
            <select
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Item</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Groceries">Groceries</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number
            </label>
            <select
              name="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select option</option>
              <option value="Electronics">1</option>
              <option value="Clothing">2</option>
              <option value="Groceries">3</option>
              <option value="Furniture">4</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maintenance Type
            </label>
            <select
              name="maintenanceType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select option</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Groceries">Groceries</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recuring option
            </label>
            <select
              name="recuringOption"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select option</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Groceries">Groceries</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>
        </form>
        <div className="mt-6">
          <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white font-semibold px-20 py-2 rounded-lg hover:opacity-90 transition duration-300">
            Scheduled Maintenance
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scheduled
