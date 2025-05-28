import React from 'react'
import { HiShoppingBag } from "react-icons/hi2";

import StatCard from '../components/StatCard';
import { Link } from 'react-router-dom';

const Logistics = () => {

    const data = Array.from({ length: 13 }, (_, i) => ({
      sn: String(i + 1).padStart(2, "0"),
      title:
        i === 2
          ? "Office Chair Procurement"
          : i === 1
          ? "Printer Maintenance Request"
          : "Laptop Replacement Request",
      from: i === 2 ? "Operations" : "HR Department",
      to:
        i === 1
          ? "Vendor: OfficePlus"
          : i === 2
          ? "IT Department"
          : "Procurement Team",
      status: i % 4 === 0 ? "Pending" : "Approved", // Mixed statuses
      type: i % 3 === 0 ? "Internal" : "Vendor",
    }));

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<HiShoppingBag className="text-[#248CD8]" size={24} />}
          title="Total request made"
          value="350"
          comparison="5% more than last year"
          positive={true}
        />
        <StatCard
          icon={<HiShoppingBag className="text-[#F29425]" size={24} />}
          title="Total cost incurred"
          value="5,000,000"
          positive={false}
        />
        <StatCard
          icon={<HiShoppingBag className="text-[#A601FF]" size={24} />}
          title="Pending requests"
          value="50"
          positive={true}
        />
        <StatCard
          icon={<HiShoppingBag className="text-[#10A142]" size={24} />}
          title="Approved requests"
          value="280"
          comparison=""
        />
      </div>
      <div className=" w-full max-w-[1148px] ">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">Logistics request</h3>
          <Link to="/logistics-request">
            <button
              className="px-8 py-2 md:px-8 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200" // Tailwind hover effects
            >
              Make Logistics Request
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden mt-5 mb-4">
        {/* Table Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
            All Logistics Request
          </h3>
          <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200 text-sm">
            Showing <span className="font-medium">13</span> requests
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-6 py-3 font-medium">S/N</th>
                <th className="px-6 py-3 font-medium">Title</th>
                <th className="px-6 py-3 font-medium">Purpose</th>
                <th className="px-6 py-3 font-medium">Request By</th>
                <th className="px-6 py-3 font-medium">Send to</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-600">
                    {item.sn}
                  </td>
                  <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">
                    {i % 2 === 0 ? "Office Supplies" : "Equipment Maintenance"}
                  </td>
                  <td className="px-6 py-4">{item.from}</td>
                  <td className="px-6 py-4">{item.to}</td>
                  <td className="px-6 py-4">
                    {`${(i % 30) + 1}/11/2023`} {/* Dynamic date example */}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Approved"
                          ? " text-green-800"
                          : " text-[#F29425]"
                      }`}
                    >
                      {i % 4 === 0 ? "Pending" : "Approved"}{" "}
                      {/* Mixed statuses */}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/logistics-details/${item.sn}`}>
                      <button className="text-blue-600 hover:underline flex items-center gap-1">
                        View more
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0">
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
}

export default Logistics
