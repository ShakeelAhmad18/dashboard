import React from "react";
import DatePicker from "react-datepicker";
import { IoIosArrowBack, IoIosCalendar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BudgetSucessfullModel from "../components/BudgetSucessfullModel";
import PaymentVoucherSection from "../components/PaymentVoucherSection";

const LogisticsRequest = () => {

    const navigate = useNavigate();
    const [startDate, setStartDate] = React.useState(new Date());
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);

    const handleSubmit = () => {
        // Handle form submission logic here
        // For demonstration, we'll just show the success modal
        setShowSuccessModal(true);
    }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl">
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
            Logistics Request
          </h2>
          <p className="text-sm mb-6 text-gray-600">
            Kindly fill in the form below to submit a logistics request
          </p>

          <form>
            {/* Budget Items Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Request Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Purpose
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter purpose"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Requested By
                  </label>
                  <input
                    type="text"
                    value={"John Doe"} // Example value, replace with actual data
                    disabled
                    className="w-full bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Requeted by"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sent to
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select option</option>
                    <option value="finance">Finance Department</option>
                    <option value="operations">Operations</option>
                    <option value="hr">Human Resources</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date from
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
                    Date to
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
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Attach Payment Voucher
              </button>
            </div>
            {/* Success Modal */}
            {showSuccessModal && (
              <BudgetSucessfullModel
                show={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
              />
            )}
          </form>
        </div>
        <PaymentVoucherSection/>
      </div>
    </div>
  );
};

export default LogisticsRequest;
