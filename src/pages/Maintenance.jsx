import React from 'react'
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import ScheduledMaintenance from '../components/ScheduledMaintenance';

const Maintenance = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<FiSettings className="text-[#248CD8]" size={24} />}
          title="25 scheduled maintenance"
          value="25"
          comparison="2 more than last quater"
          positive={true}
        />
        <StatCard
          icon={<FiSettings className="text-[#F29425]" size={24} />}
          title="Completed maintenance"
          value="25"
          comparison="2 more than last quater"
          positive={true}
        />
        <StatCard
          icon={<FiSettings className="text-[#A601FF]" size={24} />}
          title="Pending maintenance"
          value="5"
          comparison="2 more than last quater"
          positive={true}
        />
        <StatCard
          icon={<FiSettings className="text-[#10A142]" size={24} />}
          title="Overdue maintenance"
          value="2"
          comparison="2 more than last quater"
          positive={true}
        />
      </div>
      <div className=" w-full max-w-[1148px] ">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">
            Schedule a Maintenance
          </h3>
          <Link to="/scheduled">
            <button
              className="px-8 py-2 md:px-8 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200" // Tailwind hover effects
            >
              Schedule Maintenance
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <ScheduledMaintenance />
      </div>
    </div>
  );
}

export default Maintenance
