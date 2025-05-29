import React from "react";
import {
  HiOutlineClipboardList,
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
} from "react-icons/hi";

import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";

const ProjectManagement = () => {
  const data = Array.from({ length: 13 }, (_, i) => ({
    sn: String(i + 1).padStart(2, "0"),
    title:
      i === 2
        ? "Website Redesign Project"
        : i === 1
        ? "Mobile App Development"
        : "ERP System Implementation",
    manager: i === 2 ? "Sarah Johnson" : "Michael Chen",
    team: i === 1 ? "5 members" : i === 2 ? "8 members" : "12 members",
    status:
      i % 4 === 0 ? "In Progress" : i % 3 === 0 ? "Completed" : "Planning", // Mixed statuses
    deadline: `${(i % 12) + 1}/06/2024`, // Dynamic date example
  }));

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<HiOutlineClipboardList className="text-[#248CD8]" size={24} />}
          title="Total Projects"
          value="42"
          comparison="3 more than last quarter"
          positive={true}
        />
        <StatCard
          icon={<HiOutlineCalendar className="text-[#F29425]" size={24} />}
          title="Ongoing Projects"
          value="18"
          positive={true}
        />
        <StatCard
          icon={<HiOutlineUserGroup className="text-[#A601FF]" size={24} />}
          title="Team Members"
          value="76"
          positive={true}
        />
        <StatCard
          icon={<HiOutlineCheckCircle className="text-[#10A142]" size={24} />}
          title="Completed Projects"
          value="24"
          comparison="12% increase YoY"
        />
      </div>
      <div className=" w-full max-w-[1148px] ">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">Project Management</h3>
          <Link to="/create-project">
            <button
              className="px-8 py-2 md:px-8 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200"
            >
              Create New Project
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden mt-5 mb-4">
        {/* Table Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
            All Projects
          </h3>
          <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200 text-sm">
            Showing <span className="font-medium">13</span> projects
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-6 py-3 font-medium">S/N</th>
                <th className="px-6 py-3 font-medium">Project Title</th>
                <th className="px-6 py-3 font-medium">Project Manager</th>
                <th className="px-6 py-3 font-medium">Team Size</th>
                <th className="px-6 py-3 font-medium">Deadline</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Progress</th>
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
                  <td className="px-6 py-4">{item.manager}</td>
                  <td className="px-6 py-4">{item.team}</td>
                  <td className="px-6 py-4">{item.deadline}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Planning"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          item.status === "Completed"
                            ? "bg-green-600 w-full"
                            : item.status === "Planning"
                            ? "bg-blue-600 w-1/4"
                            : "bg-yellow-500 w-2/3"
                        }`}
                        style={{
                          width:
                            item.status === "Completed"
                              ? "100%"
                              : item.status === "Planning"
                              ? "25%"
                              : "65%",
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/project-detail/${item.sn}`}>
                      <button className="text-blue-600 hover:underline flex items-center gap-1">
                        View details
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
};

export default ProjectManagement;
