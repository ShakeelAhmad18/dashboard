import React from "react";
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StatCard from "./StatCard";

const PayrollSummary = () => {
  // Sample data for the chart

  const data = [
    { name: "Jan", netSalary: 300000, tax: 200000, loan: 100000 },
    { name: "Feb", netSalary: 350000, tax: 220000, loan: 120000 },
    { name: "Mar", netSalary: 400000, tax: 250000, loan: 150000 },
    { name: "Apr", netSalary: 420000, tax: 270000, loan: 150000 },
    { name: "May", netSalary: 450000, tax: 300000, loan: 150000 },
    { name: "Jun", netSalary: 470000, tax: 320000, loan: 150000 },
    { name: "Jul", netSalary: 500000, tax: 350000, loan: 150000 },
    { name: "Aug", netSalary: 520000, tax: 370000, loan: 150000 },
    { name: "Sep", netSalary: 540000, tax: 390000, loan: 150000 },
    { name: "Oct", netSalary: 550000, tax: 400000, loan: 150000 },
    { name: "Nov", netSalary: 570000, tax: 420000, loan: 150000 },
    { name: "Dec", netSalary: 600000, tax: 450000, loan: 150000 },
  ];

  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-6">
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-6 mb-6 md:mb-8 gap-4 flex-1">
        {/* Gross Salary Card */}
        <StatCard
          icon={
            <HiOutlineDocumentCurrencyDollar
              className="text-[#FDCC1C]"
              size={24}
            />
          }
          title="Gross salary this month"
          value="5,205,350.00"
          comparison="2% more than last month"
          positive={true}
        />

        {/* Total Tax Card */}
        <StatCard
          icon={
            <HiOutlineDocumentCurrencyDollar
              className="text-[#F29425]"
              size={24}
            />
          }
          title="Total request made"
          value="4,550,350.00"
          comparison="2.1% more than last month"
          positive={true}
        />

        {/* Net Salary Card */}
        <StatCard
          icon={
            <HiOutlineDocumentCurrencyDollar
              className="text-[#248CD8]"
              size={24}
            />
          }
          title="Total tax this month"
          value="550,350.00"
          comparison="2.1% less than last month"
          positive={false}
        />

        {/* Total Loan Card */}
        <StatCard
          icon={
            <HiOutlineDocumentCurrencyDollar
              className="text-[#A601FF]"
              size={24}
            />
          }
          title="Total loan this month"
          value="5,205,350.00"
          comparison="1.5% less than last month"
          positive={false}
        />
      </div>

      {/* Chart Section */}
      <div className="flex-1 shadow-md rounded-lg p-4 bg-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
          <h2 className="text-xl font-semibold mb-2 md:mb-0">
            Annual payroll summary
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span>Net salary</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span>Tax</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>Loan</span>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(value) => `${value / 1000}k`}
                domain={[0, 600000]}
                ticks={[0, 200000, 400000, 600000]}
              />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat("en-US").format(value)
                }
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar dataKey="netSalary" fill="#3B82F6" name="Net salary" />
              <Bar dataKey="tax" fill="#EF4444" name="Tax" />
              <Bar dataKey="loan" fill="#10B981" name="Loan" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PayrollSummary;
