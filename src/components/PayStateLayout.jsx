import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PayStateLayout = () => {
  const applicationsData = [
    { name: "Approved", value: 370, color: "#10B981" },
    { name: "Pending", value: 80, color: "#F59E0B" },
    { name: "Rejected", value: 50, color: "#EF4444" },
  ];

  // Payment Vouchers Data
  const vouchersData = [
    {
      id: "01",
      subject: "Request for FARS for October 2022",
      date: "25/01/2023",
      status: "Pending",
    },
    {
      id: "02",
      subject: "Request for project proposal fee",
      date: "19/01/2023",
      status: "Approved",
    },
    {
      id: "03",
      subject: "Request for FARS for October 2022",
      date: "10/01/2023",
      status: "Approved",
    },
    {
      id: "04",
      subject: "Request for project proposal fee",
      date: "03/01/2023",
      status: "Pending",
    },
  ];   

  return (
    <div className="mt-5 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-300">
      {/* Payment Vouchers Table - Left Side */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-500 transform hover:scale-[1.01] transition-transform duration-200">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Payment Vouchers
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    S/N
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Subject
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {vouchersData.map((voucher) => (
                  <tr key={voucher.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">{voucher.id}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {voucher.subject}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{voucher.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded ${
                          voucher.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {voucher.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Staff Applications Card - Right Side */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border-l-4 border-blue-500 transform hover:scale-[1.01] transition-transform duration-200">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            Staff Applications
          </h3>
          <span className="text-xs sm:text-sm text-gray-500">Last 30 days</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Stats Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg transition-all duration-200 hover:bg-blue-100">
              <div className="text-blue-600 font-medium text-sm sm:text-base">
                500 Total applications
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {applicationsData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between transition-colors duration-200 hover:bg-gray-50 p-2 rounded"
                >
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-medium text-gray-800">
                    {item.value}{" "}
                    <span className="text-gray-400">
                      ({Math.round((item.value / 500) * 100)}%)
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Chart Section */}
          <div className="h-48 md:h-64 transition-all duration-300">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={applicationsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {applicationsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayStateLayout;
