import React from "react";
import DatePicker from "react-datepicker";
import { IoIosArrowBack, IoIosCalendar } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const CreateProject = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 flex items-center hover:text-blue-800 font-bold"
          >
            <IoIosArrowBack className="mr-1" /> Back
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-1 text-gray-800">
            Create New Project
          </h2>
          <p className="text-sm mb-6 text-gray-600">
            Fill in the form below to create a new project
          </p>

          <form>
            {/* Project Details Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter project title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="PRJ-001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Budget
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter budget amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Manager
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select manager</option>
                    <option value="john">John Smith</option>
                    <option value="sarah">Sarah Johnson</option>
                    <option value="michael">Michael Chen</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select department</option>
                    <option value="it">IT</option>
                    <option value="marketing">Marketing</option>
                    <option value="operations">Operations</option>
                    <option value="hr">Human Resources</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priority
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholderText="DD/MM/YYYY"
                    />
                    <IoIosCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholderText="DD/MM/YYYY"
                      minDate={startDate}
                    />
                    <IoIosCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Status
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="planning">Planning</option>
                    <option value="active">Active</option>
                    <option value="on-hold">On Hold</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project description, objectives, and deliverables..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="button"
                className="px-8 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
