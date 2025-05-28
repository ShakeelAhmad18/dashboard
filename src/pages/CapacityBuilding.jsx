import React from 'react'
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';


const payrollData = [
  {
    sn: "01",
    TrainingDes: "Staff Health and Safety Training",
    StartDate: "3/12/2023",
    TrainingType: "Individual",
    Duration: "1month",
    TrainingMode: "Pyhsical",
    Status: "Complete",
  },
  {
    sn: "02",
    TrainingDes: "Staff Health and Safety Training",
    StartDate: "3/12/2023",
    TrainingType: "Team",
    Duration: "1month",
    TrainingMode: "Online",
    Status: "Inprogress",
  },
  {
    sn: "03",
    TrainingDes: "Staff Health and Safety Training",
    StartDate: "3/12/2023",
    TrainingType: "Team",
    Duration: "1month",
    TrainingMode: "Online",
    Status: "Inprogress",
  },
];
  

const CapacityBuilding = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<FiUsers className="text-[#248CD8]" size={24} />}
          title="Total training request"
          value="350"
        />
        <StatCard
          icon={<FiUsers className="text-[#F29425]" size={24} />}
          title="Total staff trained"
          value="800"
          positive={false}
        />
        <StatCard
          icon={<FiUsers className="text-[#A601FF]" size={24} />}
          title="Total Training Done"
          value="350"
          positive={true}
        />
        <StatCard
          icon={<FiUsers className="text-[#10A142]" size={24} />}
          title="Total Training rate"
          value="70%"
          comparison=""
        />
      </div>
      <div className=" w-full max-w-[1148px] ">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">Training request</h3>
          <Link to="/training-request">
            <button
              className="px-8 py-2 md:px-8 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200" // Tailwind hover effects
            >
              Make Training Request
            </button>
          </Link>
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl mt-7">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">All Training</h1>
        </div>
        <div className="overflow-auto rounded-b-xl">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2">S/N</th>
                <th className="px-4 py-2">Training Description</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">Training Type</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Training Mode</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.sn}</td>
                  <td className="px-4 py-2">{item.TrainingDes}</td>
                  <td className="px-4 py-2">{item.StartDate}</td>
                  <td className="px-4 py-2">{item.TrainingType}</td>
                  <td className="px-4 py-2">{item.TrainingMode}</td>
                  <td className="px-4 py-2">{item.Status}</td>
                  <td className="px-4 py-2">
                    {item.Status === "Complete" ? (
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
                        Complete
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
                        Inprogres
                      </span>
                    )}
                  </td>
                  <Link to={`/training-detail/${item.sn}`}>
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

export default CapacityBuilding
