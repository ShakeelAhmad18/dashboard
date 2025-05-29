import React from "react";
import {
  HiCheckCircle,
  HiClipboardList,
  HiExclamationCircle,
  HiChartBar,
} from "react-icons/hi";
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";

const QualityAssurance = () => {
  const data = [
    {
      sn: "01",
      product: "Model X-2000",
      testType: "Durability",
      testedBy: "John Smith",
      supervisor: "Sarah Johnson",
      date: "02/11/2023",
      status: "pending",
      defects: 2,
    },
    {
      sn: "02",
      product: "Model Y-3000",
      testType: "Performance",
      testedBy: "Michael Brown",
      supervisor: "Sarah Johnson",
      date: "05/11/2023",
      status: "approved",
      defects: 0,
    },
    {
      sn: "03",
      product: "Model Z-4000",
      testType: "Safety",
      testedBy: "Emily Davis",
      supervisor: "Robert Wilson",
      date: "08/11/2023",
      status: "rejected",
      defects: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<HiClipboardList className="text-[#248CD8]" size={24} />}
          title="Total Tests Conducted"
          value="1,250"
          comparison="12% more than last quarter"
          positive={true}
        />
        <StatCard
          icon={<HiCheckCircle className="text-[#10A142]" size={24} />}
          title="Passed Tests"
          value="1,100"
          comparison="8% improvement"
          positive={true}
        />
        <StatCard
          icon={<HiExclamationCircle className="text-[#F29425]" size={24} />}
          title="Defects Identified"
          value="150"
          comparison="5% reduction"
          positive={false}
        />
        <StatCard
          icon={<HiChartBar className="text-[#A601FF]" size={24} />}
          title="Avg. Test Duration"
          value="2.5 hrs"
          comparison="15% faster"
          positive={true}
        />
      </div>

      <div className="w-full max-w-[1148px]">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">
            Quality Test Records
          </h3>
          <Link to="/create-test-record">
            <button
              className="px-8 py-2 md:px-8 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200"
            >
              Create New Test Record
            </button>
          </Link>
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl mt-7">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Recent Quality Tests</h1>
          <div className="flex space-x-2">
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>All Test Types</option>
              <option>Durability</option>
              <option>Performance</option>
              <option>Safety</option>
              <option>Compliance</option>
            </select>
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-auto rounded-b-xl">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2">S/N</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Test Type</th>
                <th className="px-4 py-2">Tested By</th>
                <th className="px-4 py-2">Supervisor</th>
                <th className="px-4 py-2">Defects</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.sn}</td>
                  <td className="px-4 py-2 font-medium">{item.product}</td>
                  <td className="px-4 py-2">{item.testType}</td>
                  <td className="px-4 py-2">{item.testedBy}</td>
                  <td className="px-4 py-2">{item.supervisor}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium 
                      ${
                        item.defects > 3
                          ? "bg-red-100 text-red-800"
                          : item.defects > 0
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.defects} {item.defects === 1 ? "defect" : "defects"}
                    </span>
                  </td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">
                    {item.status === "approved" ? (
                      <span className="inline-flex items-center text-green-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Approved
                      </span>
                    ) : item.status === "rejected" ? (
                      <span className="inline-flex items-center text-red-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Rejected
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-yellow-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <Link to={``}>
                      <button className="text-blue-600 font-medium hover:underline mr-2">
                        Details
                      </button>
                    </Link>
                    <button className="text-gray-600 hover:text-gray-900">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600">
            Showing 1 to {data.length} of {data.length} entries
          </div>
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 border rounded text-sm disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 border rounded text-sm bg-blue-500 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
