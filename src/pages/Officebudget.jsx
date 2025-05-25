import React from "react";
import StatCard from "../components/StatCard";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Officebudget = () => {
  return (
    <div className="min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<FaSackDollar className="text-[#248CD8]" size={24} />}
          title="Total annual budget"
          value="$23,000,000"
          comparison="5% more than last year"
          positive={true}
        />
        <StatCard
          icon={<FaSackDollar className="text-[#F29425]" size={24} />}
          title="Amount used, YTD"
          value="$10,000,000"
          positive={false}
        />
        <StatCard
          icon={<FaSackDollar className="text-[#A601FF]" size={24} />}
          title="Total budget balance"
          value="$13,000,000"
          positive={true}
        />
        <StatCard
          icon={<FaSackDollar className="text-[#10A142]" size={24} />}
          title="Budget % used"
          value="48%"
          comparison=""
        />
      </div>

      {/* Create Budget Section */}
      <div className=" w-full max-w-[1148px] ">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">Create a Budget</h3>
          <Link to="/create-budget">
            <button
              className="px-8 py-2 md:px-8 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200" // Tailwind hover effects
            >
              Create Budget
            </button>
          </Link>
        </div>
      </div>
      {/* Budget History Table */}
      <div className="mt-6 md:mt-8">
        <h3 className="text-xl md:text-xl font-bold mb-3 md:mb-4">
          Budget History
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
                    Actual Amount (#)
                  </th>
                  <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                    Variance (#)
                  </th>
                  <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-black">
                    01
                  </td>
                  <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-black">
                    00211235
                  </td>
                  <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-black">
                    Purchase of 10 units, 2Hp Hisense Air Conditions
                  </td>
                  <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-black">
                    1,400,000.00
                  </td>
                  <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-black">
                    1,380,000.00
                  </td>
                  <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-green-500">
                    + 20,000.00
                  </td>
                  <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-black">
                    18/11/2022
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officebudget;
