import React from "react";
import BackButton from "../components/BackButton";

const CreateMemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <BackButton />

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-6 mt-4 md:mt-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
          Create Memo
        </h1>

        <form className="space-y-4 md:space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div>
              <label
                htmlFor="memoTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Memo title
              </label>
              <input
                type="text"
                id="memoTitle"
                placeholder="Enter title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="sentFrom"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sent from
              </label>
              <input
                type="text"
                id="sentFrom"
                value="Otor John"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="sentTo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sent to
              </label>
              <select
                id="sentTo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="flex items-end gap-2 md:gap-4">
              {/* Action Field */}
              <div className="flex-auto">
                {" "}
                {/* Changed from flex-1 to flex-auto */}
                <label
                  htmlFor="action"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Action
                </label>
                <div className="flex items-center gap-2 md:gap-4">
                  {" "}
                  {/* New container */}
                  <select
                    id="action"
                    className="w-full md:w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select option</option>
                    <option value="action1">Action 1</option>
                    <option value="action2">Action 2</option>
                  </select>
                  {/* Plus Icon Button */}
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Date and Attachment Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                placeholder="DD/MM/YYYY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="action"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Add Attachment?
              </label>
              <select
                id="action"
                className="w-full md:w-[340px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select option</option>
                <option value="action1">Yes</option>
                <option value="action2">No</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="attachmentType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Attachment type
              </label>
              <select
                id="attachmentType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select type</option>
                <option value="pdf">PDF</option>
                <option value="image">Image</option>
              </select>
            </div>
          </div>

          {/* Memo Body */}
          <div>
            <label
              htmlFor="memoBody"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Memo body
            </label>
            <textarea
              id="memoBody"
              placeholder="Enter subject"
              rows="4"
              className="w-full md:w-[700px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4">
            <button
              type="button"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Attache Payment Voucher
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white rounded-md hover:opacity-90 border-[white] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Memo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMemo;
