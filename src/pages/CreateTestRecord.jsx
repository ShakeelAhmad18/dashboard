import React from "react";
import BackButton from "../components/BackButton";

const CreateTestRecord = () => {
  return (
    <div className="min-h-screen">
      <BackButton />

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Create Quality Test Record
        </h1>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product/Item
              </label>
              <input
                type="text"
                placeholder="Enter product name or ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Test Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select test type</option>
                <option>Durability</option>
                <option>Performance</option>
                <option>Safety</option>
                <option>Compliance</option>
                <option>Environmental</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Test Standard
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select standard</option>
                <option>ISO 9001</option>
                <option>ISO 13485</option>
                <option>ASTM</option>
                <option>IEC</option>
                <option>Custom</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Batch/Lot Number
              </label>
              <input
                type="text"
                placeholder="Enter batch number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sample Size
              </label>
              <input
                type="number"
                placeholder="Number of units tested"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Test Duration
              </label>
              <input
                type="text"
                placeholder="e.g., 2 hours, 1 week"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Test Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tested By
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100">
                <p className="font-semibold">John Doe (QA Technician)</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Test Equipment
              </label>
              <input
                type="text"
                placeholder="Equipment used"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <button
              type="button"
              className="px-8 py-2 md:px-14 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200"
            >
              Attach Test Results
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Test Results Summary
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Test Parameter</th>
                <th className="px-4 py-2 text-left">Specification</th>
                <th className="px-4 py-2 text-left">Result</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="px-4 py-2">Tensile Strength</td>
                <td className="px-4 py-2">≥ 50 MPa</td>
                <td className="px-4 py-2">52.4 MPa</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Pass
                  </span>
                </td>
                <td className="px-4 py-2">Within specification</td>
              </tr>
              <tr className="border-b-2">
                <td className="px-4 py-2">Durability Cycles</td>
                <td className="px-4 py-2">≥ 10,000 cycles</td>
                <td className="px-4 py-2">9,850 cycles</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Marginal
                  </span>
                </td>
                <td className="px-4 py-2">Slightly below target</td>
              </tr>
              <tr className="border-b-2">
                <td className="px-4 py-2">Temperature Resistance</td>
                <td className="px-4 py-2">-20°C to 80°C</td>
                <td className="px-4 py-2">-25°C to 85°C</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Fail
                  </span>
                </td>
                <td className="px-4 py-2">Lower limit exceeded</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Defects Identified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Defect Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select defect type</option>
                <option>Material Defect</option>
                <option>Manufacturing Defect</option>
                <option>Design Flaw</option>
                <option>Packaging Issue</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severity
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select severity</option>
                <option>Critical</option>
                <option>Major</option>
                <option>Minor</option>
                <option>Cosmetic</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Defect Description
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Detailed description of the defect..."
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Review Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tested By
              </label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100">
                <p className="font-semibold">John Doe (QA Technician)</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reviewed By
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select reviewer</option>
                <option>QA Supervisor</option>
                <option>QA Manager</option>
                <option>Engineering Lead</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Approved By
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select approver</option>
                <option>Quality Director</option>
                <option>Plant Manager</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div>
              <div className="border-t w-[200px] border-black pt-2 mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Reviewer Signature
                </label>
              </div>
            </div>
            <div>
              <div className="border-t w-[200px] border-black pt-2 mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Approver Signature
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="px-8 py-2 md:px-14 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200"
          >
            Submit for Review
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Save Draft
          </button>
          <button className="px-6 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Reject Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTestRecord;
