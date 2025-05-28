import React from 'react'
import { HiShoppingBag } from 'react-icons/hi2';
import StatCard from '../components/StatCard';
import { Link } from 'react-router-dom';

const Procurements = () => {


    const data = [
      {
        sn: "01",
        item: "office chair",
        Qty: 2,
        amount: 2000.0,
        requestedBy: "Shakeel",
        Sendto: "Faruk Hashim",
        date: "02/11/2022",
        status: "pending",
      },
      {
        sn: "02",
        item: "office chair",
        Qty: 2,
        amount: 2000.0,
        requestedBy: "Shakeel",
        Sendto: "Faruk Hashim",
        date: "02/11/2022",
        status: "Aproved",
      },
      {
        sn: "03",
        item: "office chair",
        Qty: 20,
        amount: 2000.0,
        requestedBy: "Shakeel",
        Sendto: "Faruk Hashim",
        date: "02/11/2022",
        status: "pending",
      },
    ];


  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<HiShoppingBag className="text-[#248CD8]" size={24} />}
          title="Total request made"
          value="350"
          comparison="5% more than last year"
          positive={true}
        />
        <StatCard
          icon={<HiShoppingBag className="text-[#F29425]" size={24} />}
          title="Total cost incurred"
          value="5,000,000"
          positive={false}
        />
        <StatCard
          icon={<HiShoppingBag className="text-[#A601FF]" size={24} />}
          title="Pending requests"
          value="50"
          positive={true}
        />
        <StatCard
          icon={<HiShoppingBag className="text-[#10A142]" size={24} />}
          title="Approved requests"
          value="280"
          comparison="2% more than last year"
          positive={false}
        />
      </div>
      <div className=" w-full max-w-[1148px] ">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">
            Procurement request
          </h3>
          <Link to="/procurements-request">
            <button
              className="px-8 py-2 md:px-8 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200" // Tailwind hover effects
            >
              Make Procurement Request
            </button>
          </Link>
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl mt-7">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Procurement Request</h1>
        </div>
        <div className="overflow-auto rounded-b-xl">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2">S/N</th>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Requested By</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.sn}</td>
                  <td className="px-4 py-2">{item.item}</td>
                  <td className="px-4 py-2">{item.Qty}</td>
                  <td className="px-4 py-2">{item.amount}</td>
                  <td className="px-4 py-2">{item.requestedBy}</td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">
                    {item.status === "Aproved" ? (
                      <span className="inline-flex items-center text-green-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Aproved
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-yellow-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Pending
                      </span>
                    )}
                  </td>
                  <Link to={""}>
                    <td className="px-4 py-2 text-blue-600 font-medium">
                      <button className="mr-2 hover:underline">
                        View More
                      </button>
                    </td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Procurements;
