import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IoIosArrowBack, IoIosCalendar } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate, useNavigate } from "react-router-dom";
import BudgetSucessfullModel from "../components/BudgetSucessfullModel";

const CreateBudget = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [receivingOffice, setReceivingOffice] = React.useState("");
  const navigate=useNavigate();


  const handleSubmit = () => {
    // Your submit logic here
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 flex items-center hover:text-blue-800 font-bold"
          >
            <IoIosArrowBack className="mr-1" /> Back
          </button>
        </div>
        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-1 text-gray-800">
            Create a Budget
          </h2>
          <p className="text-sm mb-6 text-gray-600">
            Kindly fill in the form below to create a budget
          </p>

          <form>
            {/* Budget Items Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget number
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter item"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget description
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget amount
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter amount in #"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
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
                    Receiving office
                  </label>
                  <select
                    value={receivingOffice}
                    onChange={(e) => setReceivingOffice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select option</option>
                    <option value="finance">Finance Department</option>
                    <option value="operations">Operations</option>
                    <option value="hr">Human Resources</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Create Budget
              </button>
            </div>
            {/* Success Modal */}
            {showSuccessModal && <BudgetSucessfullModel
              show={showSuccessModal}
              onClose={() => setShowSuccessModal(false)}
            />}
          </form>
        </div>

        {/* Budget Request Table */}
        <div className="mt-6 md:mt-8">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
            Request Budget
          </h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      S/N
                    </th>
                    <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Budget No.
                    </th>
                    <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Budget Description
                    </th>
                    <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Budgeted Amount (#)
                    </th>
                    <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Example Row */}
                  <tr>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-sm text-gray-700">
                      01
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-sm text-gray-700">
                      BUDG001
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-sm text-gray-700">
                      Office Supplies
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-sm text-gray-700">
                      50,000
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-sm text-gray-700">
                      01/01/2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBudget;
