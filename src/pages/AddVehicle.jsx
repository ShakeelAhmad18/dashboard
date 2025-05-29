import React from "react";
import DatePicker from "react-datepicker";
import { IoIosArrowBack, IoIosCalendar } from "react-icons/io";
import { HiOutlineTruck, HiOutlineCog } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { LuFuel } from "react-icons/lu";

const AddVehicle = () => {
  const navigate = useNavigate();
  const [purchaseDate, setPurchaseDate] = React.useState(new Date());
  const [lastServiceDate, setLastServiceDate] = React.useState(new Date());
  const [insuranceExpiry, setInsuranceExpiry] = React.useState(new Date());

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 flex items-center hover:text-blue-800 font-bold"
          >
            <IoIosArrowBack className="mr-1" /> Back to Fleet
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-1 text-gray-800">
            Add New Vehicle to Fleet
          </h2>
          <p className="text-sm mb-6 text-gray-600">
            Complete all required fields to register a new vehicle
          </p>

          <form>
            {/* Vehicle Basic Information Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <HiOutlineTruck className="mr-2 text-blue-600" />
                Vehicle Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Type <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="pickup">Pickup Truck</option>
                    <option value="van">Van/Minibus</option>
                    <option value="truck">Heavy Duty Truck</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Make <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Toyota"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Hilux"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="2000"
                    max={new Date().getFullYear() + 1}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 2022"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    License Plate <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. ABC123XY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    VIN (Vehicle Identification Number){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="17-character VIN"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Color
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. White"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Purchase Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={purchaseDate}
                      onChange={(date) => setPurchaseDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholderText="DD/MM/YYYY"
                    />
                    <IoIosCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Mileage (km)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 15000"
                  />
                </div>
              </div>
            </div>

            {/* Technical Specifications Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <HiOutlineCog className="mr-2 text-blue-600" />
                Technical Specifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Engine Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select engine type</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Engine Size (cc)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 2500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transmission
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select transmission</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                    <option value="semi-auto">Semi-Automatic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fuel Tank Capacity (L)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 70"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seating Capacity
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 1800"
                  />
                </div>
              </div>
            </div>

            {/* Maintenance & Operational Details */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                <LuFuel className="mr-2 text-blue-600" />
                Maintenance & Operational Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assigned Driver
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select driver</option>
                    <option value="driver1">John Adekunle</option>
                    <option value="driver2">Musa Ibrahim</option>
                    <option value="driver3">Tunde Okafor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select department</option>
                    <option value="executive">Executive</option>
                    <option value="sales">Sales</option>
                    <option value="operations">Operations</option>
                    <option value="logistics">Logistics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Status
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="active">Active</option>
                    <option value="maintenance">In Maintenance</option>
                    <option value="reserved">Reserved</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Service Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={lastServiceDate}
                      onChange={(date) => setLastServiceDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholderText="DD/MM/YYYY"
                    />
                    <IoIosCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Next Service Due (km)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 50000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Insurance Expiry
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={insuranceExpiry}
                      onChange={(date) => setInsuranceExpiry(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholderText="DD/MM/YYYY"
                    />
                    <IoIosCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter any special notes about this vehicle..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start gap-4">
              <button
                type="button"
                className="px-8 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Save Vehicle
              </button>
              <button
                type="button"
                className="px-8 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
