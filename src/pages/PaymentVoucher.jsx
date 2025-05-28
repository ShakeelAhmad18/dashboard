import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const PaymentVoucher = () => {


    const [search, setSearch] = React.useState("");
    const [filter, setFilter] = React.useState("All Staff");

    const data = [
        {
            sn: "01",
            subject: "Payment Voucher for Office Supplies",
            date: "2023-10-01",
            preparedBy: "Shakeel",
            sendto: "John Doe",
        },
        {
            sn: "02",
            subject: "Payment Voucher for IT Equipment",
            date: "2023-10-02",
            preparedBy: "Jane Smith",
            sendto: "Alice Johnson",
        },
        {
            sn: "03",
            subject: "Payment Voucher for Training Expenses",
            date: "2023-10-03",
            preparedBy: "Mark Lee",
            sendto: "Bob Brown",
        },
    ]

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
          {/* Count display - centered with text below */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/6">
            <div className="text-xl font-semibold text-black">150</div>
            <div className="text-sm font-normal text-black text-center">
              Total payment voucher
            </div>
          </div>
          {/* Filter and button - aligned to end */}
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4">
            <div className="relative w-full">
              <label className="block text-sm text-black mb-1">
                Filter payment voucher
              </label>
              <select
                className="border bg-[#F2F7FF] border-gray-300 rounded-lg px-4 py-2 appearance-none pr-10 w-full"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All Staff</option>
                <option>Admin Staff</option>
                <option>I.T Staff</option>
                <option>Human Resource Staff</option>
              </select>
              <ChevronDown
                className="absolute mt-3 right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
            <Link to="/create-payment-voucher" className="w-full sm:w-auto">
              <button
                type="button"
                className="px-4 sm:px-8 py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium mt-5 rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap w-full"
              >
                Create Payment Voucher
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
        {/* Table Header with "All Circulars" and "Showing X per page" */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
            All Payment Vouchers
          </h3>
          <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200 text-sm">
            Showing <span className="font-medium">13</span> per page
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-6 py-3 font-medium">S/N</th>
                <th className="px-6 py-3 font-medium">Subject</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Prepared By</th>
                <th className="px-6 py-3 font-medium">Send To</th>
                <th className="px-6 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-600">
                    {item.sn}
                  </td>
                  <td className="px-6 py-4">{item.subject}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.preparedBy}</td>
                  <td className="px-6 py-4">{item.sendto}</td>
                  <td className="px-6 py-4">
                    <Link to={`/edit-profile/${item.sn}`}>
                      <button className="text-blue-600 hover:underline flex items-center gap-1">
                        View more <ChevronRight size={14} />
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
}

export default PaymentVoucher
