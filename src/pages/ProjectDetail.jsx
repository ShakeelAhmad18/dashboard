import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const navigate = useNavigate();

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

        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <h1 className="text-xl font-bold mb-4">ERP System Implementation</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">Project Code:</p>
              <p>PRJ-2023-001</p>
            </div>
            <div>
              <p className="font-semibold">Budget:</p>
              <p>¥5,000,000.00</p>
            </div>
            <div>
              <p className="font-semibold">Project Manager:</p>
              <p>Michael Chen</p>
            </div>
            <div>
              <p className="font-semibold">Department:</p>
              <p>Information Technology</p>
            </div>
            <div>
              <p className="font-semibold">Timeline:</p>
              <p>6 months - (01/01/2023 - 30/06/2023)</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <p className="text-green-600">Completed</p>
            </div>
            <div>
              <p className="font-semibold">Priority:</p>
              <p className="text-red-600">High</p>
            </div>
            <div>
              <p className="font-semibold">Progress:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">100% completed</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Project Description:</p>
            <p className="text-gray-700">
              Implementation of a comprehensive ERP system to integrate all
              business processes including finance, HR, procurement, and
              inventory management. The project includes customization, data
              migration, user training, and post-implementation support.
            </p>
          </div>

          <p className="text-right mt-4">Created: 15th December, 2022</p>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <h2 className="font-bold mb-4">Project Team</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">S/N</th>
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">Role</th>
                  <th className="border border-gray-300 p-2 text-left">
                    Department
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Contact
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Hours Allocated
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">Michael Chen</td>
                  <td className="border border-gray-300 p-2">
                    Project Manager
                  </td>
                  <td className="border border-gray-300 p-2">IT</td>
                  <td className="border border-gray-300 p-2">
                    michael.chen@company.com
                  </td>
                  <td className="border border-gray-300 p-2">Full-time</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">Sarah Johnson</td>
                  <td className="border border-gray-300 p-2">
                    Business Analyst
                  </td>
                  <td className="border border-gray-300 p-2">Operations</td>
                  <td className="border border-gray-300 p-2">
                    sarah.j@company.com
                  </td>
                  <td className="border border-gray-300 p-2">30 hrs/week</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">David Wilson</td>
                  <td className="border border-gray-300 p-2">Developer</td>
                  <td className="border border-gray-300 p-2">IT</td>
                  <td className="border border-gray-300 p-2">
                    d.wilson@company.com
                  </td>
                  <td className="border border-gray-300 p-2">Full-time</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">4</td>
                  <td className="border border-gray-300 p-2">Emma Roberts</td>
                  <td className="border border-gray-300 p-2">QA Specialist</td>
                  <td className="border border-gray-300 p-2">IT</td>
                  <td className="border border-gray-300 p-2">
                    e.roberts@company.com
                  </td>
                  <td className="border border-gray-300 p-2">25 hrs/week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <h2 className="font-bold mb-4">Project Milestones</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">S/N</th>
                  <th className="border border-gray-300 p-2 text-left">
                    Milestone
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Due Date
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Status
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Completion Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">
                    Requirements Gathering
                  </td>
                  <td className="border border-gray-300 p-2">15/01/2023</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    Completed
                  </td>
                  <td className="border border-gray-300 p-2">10/01/2023</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">System Design</td>
                  <td className="border border-gray-300 p-2">15/02/2023</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    Completed
                  </td>
                  <td className="border border-gray-300 p-2">12/02/2023</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">
                    Development Phase 1
                  </td>
                  <td className="border border-gray-300 p-2">15/03/2023</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    Completed
                  </td>
                  <td className="border border-gray-300 p-2">18/03/2023</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">4</td>
                  <td className="border border-gray-300 p-2">User Testing</td>
                  <td className="border border-gray-300 p-2">15/05/2023</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    Completed
                  </td>
                  <td className="border border-gray-300 p-2">10/05/2023</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">5</td>
                  <td className="border border-gray-300 p-2">Go-Live</td>
                  <td className="border border-gray-300 p-2">30/06/2023</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    Completed
                  </td>
                  <td className="border border-gray-300 p-2">28/06/2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <h2 className="font-bold mb-4">Project Budget Breakdown</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">S/N</th>
                  <th className="border border-gray-300 p-2 text-left">
                    Category
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Description
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Planned
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Actual
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Variance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">
                    Software License
                  </td>
                  <td className="border border-gray-300 p-2">
                    ERP System License
                  </td>
                  <td className="border border-gray-300 p-2">¥2,000,000</td>
                  <td className="border border-gray-300 p-2">¥1,950,000</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    ¥50,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">Implementation</td>
                  <td className="border border-gray-300 p-2">
                    Consulting Fees
                  </td>
                  <td className="border border-gray-300 p-2">¥1,500,000</td>
                  <td className="border border-gray-300 p-2">¥1,550,000</td>
                  <td className="border border-gray-300 p-2 text-red-600">
                    (¥50,000)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">Hardware</td>
                  <td className="border border-gray-300 p-2">
                    Servers & Equipment
                  </td>
                  <td className="border border-gray-300 p-2">¥800,000</td>
                  <td className="border border-gray-300 p-2">¥750,000</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    ¥50,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">4</td>
                  <td className="border border-gray-300 p-2">Training</td>
                  <td className="border border-gray-300 p-2">User Training</td>
                  <td className="border border-gray-300 p-2">¥500,000</td>
                  <td className="border border-gray-300 p-2">¥450,000</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    ¥50,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">5</td>
                  <td className="border border-gray-300 p-2">Miscellaneous</td>
                  <td className="border border-gray-300 p-2">Contingency</td>
                  <td className="border border-gray-300 p-2">¥200,000</td>
                  <td className="border border-gray-300 p-2">¥150,000</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    ¥50,000
                  </td>
                </tr>
                <tr className="font-semibold">
                  <td className="border border-gray-300 p-2" colSpan="3">
                    TOTAL
                  </td>
                  <td className="border border-gray-300 p-2">¥5,000,000</td>
                  <td className="border border-gray-300 p-2">¥4,850,000</td>
                  <td className="border border-gray-300 p-2 text-green-600">
                    ¥150,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-2">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-4">
            <div className="w-full md:w-1/3">
              <label className="block font-semibold mb-2">Update Status</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Select status</option>
                <option value="planning">Planning</option>
                <option value="active">Active</option>
                <option value="on-hold">On Hold</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <label className="block font-semibold mb-2">Notes</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter update notes"
              />
            </div>

            <div className="w-full md:w-1/3 flex justify-end">
              <button className="bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white px-6 py-2 rounded mt-6 md:mt-0 hover:bg-blue-700">
                Update Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
