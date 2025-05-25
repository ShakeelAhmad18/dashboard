import React, { useState, useEffect } from "react";
import { FiFileText, FiBriefcase, FiLayers, FiUsers } from "react-icons/fi";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DualTableLayout from "../components/DualTableLayout";
import PayStateLayout from "../components/PayStateLayout";
import StatCard from "../components/StatCard";
import { Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location=useLocation();
  const isDashboardPage = location.pathname === "/";

 

  // Close sidebar when clicking on overlay
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen bg-[#F8F9FD] overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Side Navigation */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full">
          <Sidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Header with mobile menu button */}
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F8F9FD]">
         {isDashboardPage ? <>
          {/* Stats Cards with animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <StatCard
              icon={<FiUsers className="text-blue-500" size={24} />}
              title="Total number of staff"
              value="250"
              comparison="12 more than last quarter"
              positive={true}
            />
            <StatCard
              icon={<FiFileText className="text-green-500" size={24} />}
              title="Total application"
              value="100"
              comparison="0.2% lower than last quarter"
              positive={false}
            />
            <StatCard
              icon={<FiBriefcase className="text-purple-500" size={24} />}
              title="Total projects"
              value="10"
              comparison="2% more than last quarter"
              positive={true}
            />
            <StatCard
              icon={<FiLayers className="text-yellow-500" size={24} />}
              title="Total departments"
              value="10"
              comparison=""
            />
          </div>

          {/* Tables Section */}
          <DualTableLayout />

          {/* Staff Applications Card and state card*/}
          <PayStateLayout />
         </> : <Outlet/>}
          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 py-4">
            Copyright © 2022 Rifus Energy. All Rights Reserved
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
