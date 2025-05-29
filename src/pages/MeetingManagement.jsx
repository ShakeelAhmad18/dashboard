import React from "react";
import { FiCalendar, FiClock, FiUsers, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import MeetingSchedule from "../components/MeetingSchedule";

const MeetingManagement = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<FiCalendar className="text-[#248CD8]" size={24} />}
          title="Upcoming Meetings"
          value="25"
          comparison="5 more than last week"
          positive={true}
        />
        <StatCard
          icon={<FiClock className="text-[#F29425]" size={24} />}
          title="In Progress Meetings"
          value="3"
          comparison="2 less than last week"
          positive={false}
        />
        <StatCard
          icon={<FiUsers className="text-[#A601FF]" size={24} />}
          title="Participants Today"
          value="42"
          comparison="10% increase"
          positive={true}
        />
        <StatCard
          icon={<FiCheckCircle className="text-[#10A142]" size={24} />}
          title="Completed Meetings"
          value="128"
          comparison="15% increase"
          positive={true}
        />
      </div>
      <div className="w-full max-w-[1148px]">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">Meeting Management</h3>
          <Link to="/schedule-meeting">
            <button
              className="px-8 py-2 md:px-8 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200"
            >
              Schedule New Meeting
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <MeetingSchedule />
      </div>
    </div>
  );
};

export default MeetingManagement;
