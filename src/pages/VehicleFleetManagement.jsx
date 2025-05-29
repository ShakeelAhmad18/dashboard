import React from "react";
import {
  HiTruck,
  HiOutlineCog,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { LuFuel } from "react-icons/lu";
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";

const VehicleFleetManagement = () => {
  const data = Array.from({ length: 13 }, (_, i) => ({
    sn: String(i + 1).padStart(2, "0"),
    vehicle:
      i === 2
        ? "Toyota Hilux (ABJ-123XY)"
        : i === 1
        ? "Mercedes Sprinter (LAG-456AB)"
        : "Ford Transit (KAN-789CD)",
    driver:
      i === 2 ? "John Adekunle" : i === 1 ? "Musa Ibrahim" : "Tunde Okafor",
    department: i === 2 ? "Sales" : i === 1 ? "Operations" : "Executive",
    purpose:
      i === 1
        ? "Client Site Visit"
        : i === 2
        ? "Equipment Transport"
        : "Executive Meeting",
    status: i % 4 === 0 ? "Maintenance" : "Active",
    lastService: `${(i % 30) + 1}/11/2023`,
  }));

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<HiTruck className="text-[#248CD8]" size={24} />}
          title="Total Fleet Size"
          value="42"
          comparison="3 new vehicles this quarter"
          positive={true}
        />
        <StatCard
          icon={<LuFuel className="text-[#F29425]" size={24} />}
          title="Average Fuel Efficiency"
          value="12.4 km/L"
          comparison="2% improvement from last month"
          positive={true}
        />
        <StatCard
          icon={<HiOutlineCog className="text-[#A601FF]" size={24} />}
          title="Vehicles in Maintenance"
          value="8"
          comparison="2 completing soon"
          positive={false}
        />
        <StatCard
          icon={<HiOutlineCheckCircle className="text-[#10A142]" size={24} />}
          title="Available Vehicles"
          value="28"
          comparison=""
        />
      </div>
      <div className=" w-full max-w-[1148px] ">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">Fleet Management</h3>
          <div className="flex gap-4">
            <Link to="/add-vehicle">
              <button
                className="px-4 py-2 md:px-6 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
               bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
               hover:opacity-80 hover:scale-105 transition-all duration-200"
              >
                Add New Vehicle
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden mt-5 mb-4">
        {/* Table Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
            Vehicle Fleet Overview
          </h3>
          <div className="flex gap-3">
            <select className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200 text-sm">
              <option>All Departments</option>
              <option>Executive</option>
              <option>Sales</option>
              <option>Operations</option>
              <option>Logistics</option>
            </select>
            <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200 text-sm">
              Showing <span className="font-medium">13</span> vehicles
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-6 py-3 font-medium">S/N</th>
                <th className="px-6 py-3 font-medium">Vehicle</th>
                <th className="px-6 py-3 font-medium">Assigned Driver</th>
                <th className="px-6 py-3 font-medium">Department</th>
                <th className="px-6 py-3 font-medium">Current Usage</th>
                <th className="px-6 py-3 font-medium">Last Service</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-600">
                    {item.sn}
                  </td>
                  <td className="px-6 py-4 font-medium">{item.vehicle}</td>
                  <td className="px-6 py-4">{item.driver}</td>
                  <td className="px-6 py-4">{item.department}</td>
                  <td className="px-6 py-4">{item.purpose}</td>
                  <td className="px-6 py-4">{item.lastService}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <Link to={`/vehicle-details/${item.sn}`}>
                        <button className="text-blue-600 hover:underline flex items-center gap-1 text-sm">
                          Details
                        </button>
                      </Link>
                      <button className="text-gray-600 hover:underline flex items-center gap-1 text-sm">
                        History
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0 mt-6">
        <div className="text-sm text-gray-600 mb-2 sm:mb-0">
          Showing 1 to 10 of 42 vehicles
        </div>
        <div className="flex gap-1">
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-sm">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`px-3 py-1 border rounded-md text-sm ${
                num === 1
                  ? "bg-gradient-to-r from-[#384295] to-[#14ADD6] border-blue-500 text-white"
                  : "border-gray-300 bg-white hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleFleetManagement;
