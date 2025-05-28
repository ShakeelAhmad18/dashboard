import React, { useState } from "react";
import { Search, ChevronDown, ArrowDownLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CircularsMainContent = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All memos");

  const data = Array.from({ length: 13 }, (_, i) => ({
    sn: String(i + 1).padStart(2, "0"),
    title:
      i === 2
        ? "Circular for Time Maintainance in the Office"
        : i === 1
        ? "Management Circular for HR Staffs"
        : "HR Circular for Operations Department Staff",
    from: i === 2 ? "Management" : "Admin, HR",
    to: i === 1 ? "HR Staffs" : i === 2 ? "All Staff" : "Operations Staffs",
    date: "16/11/2022",
    type: i % 3 === 0 ? "Received" : "Sent",
  }));

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg p-6 shadow mb-6">
        <p className="text-sm text-black mb-4">
          Search for and view all circulars
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
          {/* Search input - takes full width on mobile, 1/3 on desktop */}
          <div className="w-full md:w-1/3 flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter search word"
              className="w-full outline-none"
            />
            <Search className="text-gray-400 ml-2" size={18} />
          </div>

          {/* Count display - centered with text below */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <div className="text-xl font-semibold text-gray-600">150</div>
            <div className="text-sm font-normal text-gray-500">
              Total circulars
            </div>
          </div>

          {/* Filter and button - aligned to end */}
          <div className="w-full md:w-1/3 flex items-center justify-end gap-4">
            <div className="relative">
              <select
                className="border bg-[#F2F7FF] border-gray-300 rounded-lg px-4 py-2 appearance-none pr-10"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All memos</option>
                <option>Sent</option>
                <option>Received</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
            <Link to="/create-circular">
              <button
                type="button"
                className="px-8 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                Create Budget
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        {/* Main Table Container */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
          {/* Table Header with "All Circulars" and "Showing X per page" */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
              All Circulars
            </h3>
            <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200 text-sm">
              Showing <span className="font-medium">13</span> per page
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-6 py-3 font-medium">S/N</th>
                  <th className="px-6 py-3 font-medium">Circular Title</th>
                  <th className="px-6 py-3 font-medium">Sent From</th>
                  <th className="px-6 py-3 font-medium">Sent To</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Circular Type</th>
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
                    <td className="px-6 py-4">{item.from}</td>
                    <td className="px-6 py-4">{item.to}</td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4 flex items-center gap-1">
                      {item.type}
                      {item.direction === "received" ? (
                        <ArrowDownLeft className="text-gray-500" size={14} />
                      ) : (
                        <ArrowUpRight className="text-gray-500" size={14} />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline flex items-center gap-1">
                        View more <ChevronRight size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination - Outside the main container */}
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
    </div>
  );
};

export default CircularsMainContent;
