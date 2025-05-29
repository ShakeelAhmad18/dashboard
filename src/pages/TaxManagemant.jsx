import { ChevronDown, ChevronRight, Search } from "lucide-react";
import React from "react";
import { MdReceiptLong } from "react-icons/md";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";

const TaxManagement = () => {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("All Taxes");

  const data = [
    {
      sn: "01",
      taxType: "Income Tax",
      period: "Q1 2023",
      amount: "$12,500.00",
      status: "Paid",
      dueDate: "2023-04-15",
    },
    {
      sn: "02",
      taxType: "Sales Tax",
      period: "March 2023",
      amount: "$8,750.00",
      status: "Pending",
      dueDate: "2023-04-20",
    },
    {
      sn: "03",
      taxType: "Property Tax",
      period: "Annual 2023",
      amount: "$25,000.00",
      status: "Overdue",
      dueDate: "2023-03-31",
    },
    {
      sn: "04",
      taxType: "VAT",
      period: "Q1 2023",
      amount: "$15,300.00",
      status: "Paid",
      dueDate: "2023-04-30",
    },
  ];

  const statusBadge = (status) => {
    const colorMap = {
      Paid: "text-green-800",
      Pending: "text-yellow-800",
      Overdue: "text-red-800",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${colorMap[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Stat Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={<MdReceiptLong className="text-[#248CD8]" size={24} />}
          title="Total Tax Liability"
          value="$61,550.00"
          className="w-full"
        />
        <StatCard
          icon={<MdReceiptLong className="text-[#F29425]" size={24} />}
          title="Paid Taxes"
          value="$27,800.00"
          className="w-full"
        />
        <StatCard
          icon={<MdReceiptLong className="text-[#A601FF]" size={24} />}
          title="Pending Taxes"
          value="$8,750.00"
          className="w-full"
        />
        <StatCard
          icon={<MdReceiptLong className="text-[#10A142]" size={24} />}
          title="Overdue Taxes"
          value="$25,000.00"
          className="w-full"
        />
      </div>

      {/* Search and Filters - Responsive Layout */}
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow mb-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search tax records..."
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <select className="border bg-white border-gray-300 rounded-lg px-3 py-2 w-full sm:w-auto">
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
            <div className="flex gap-2">
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                placeholder="From date"
              />
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                placeholder="To date"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200 gap-4">
          <h3 className="text-lg font-semibold text-gray-800">Tax Records</h3>
          <Link to="/create-tax-record" className="w-full sm:w-auto">
            <button
              type="button"
              className="px-4 sm:px-8 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
            >
              Create Tax Record
            </button>
          </Link>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 sm:px-6 py-3 font-medium whitespace-nowrap">
                  S/N
                </th>
                <th className="px-4 sm:px-6 py-3 font-medium whitespace-nowrap">
                  Tax Type
                </th>
                <th className="px-4 sm:px-6 py-3 font-medium whitespace-nowrap">
                  Period
                </th>
                <th className="px-4 sm:px-6 py-3 font-medium whitespace-nowrap">
                  Amount
                </th>
                <th className="px-4 sm:px-6 py-3 font-medium whitespace-nowrap">
                  Status
                </th>
                <th className="px-4 sm:px-6 py-3 font-medium whitespace-nowrap">
                  Due Date
                </th>
                <th className="px-4 sm:px-6 py-3 font-medium whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                    {item.sn}
                  </td>
                  <td className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap">
                    {item.taxType}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    {item.period}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    {item.amount}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    {statusBadge(item.status)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    {item.dueDate}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <Link to={`/tax-details/${item.sn}`}>
                      <button className="text-blue-600 hover:underline flex items-center gap-1">
                        View details <ChevronRight size={14} />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination - Responsive Layout */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0 gap-4">
        <div className="text-sm text-gray-600">
          Showing 1 to 4 of 15 entries
        </div>
        <div className="flex flex-wrap gap-1">
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-sm whitespace-nowrap">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`px-3 py-1 border rounded-md text-sm whitespace-nowrap ${
                num === 1
                  ? "bg-gradient-to-r from-[#384295] to-[#14ADD6] border-blue-500 text-white"
                  : "border-gray-300 bg-white hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-sm whitespace-nowrap">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxManagement;
