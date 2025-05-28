import React, { useState } from "react";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleAction = (action, notificationId) => {
    console.log(`${action} notification ${notificationId}`);
    // Here you would implement the actual action logic
    setOpenDropdownId(null); // Close the dropdown after action
  };

  // Generate unique IDs for each notification
  const notificationsToday = [3, 10, 60, 300].map((minutes, index) => ({
    id: `today-${index}`,
    minutes,
    isUnread: index < 3,
  }));

  const notificationsYesterday = [1, 1, 1].map((_, index) => ({
    id: `yesterday-${index}`,
    days: 1,
    isUnread: false,
  }));

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-[1148px] mx-auto">
        {/* Notifications Header */}
        <div className=" w-full max-w-[1148px]">
          <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
            <h3 className="text-base md:text-lg font-bold">
              Notifications (3 unread)
            </h3>
              <button
                className="px-8 py-2 md:px-12 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200"
              >
                Mark All As Read
              </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[20px] shadow-md mb-6 mt-6">
          {/* Today's Notifications */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Today</h2>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="yesterdaySelectAll"
                  className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-blue-600 font-medium">
                  Select all
                </span>
              </label>
            </div>
            {notificationsToday.map(({ id, minutes, isUnread }) => (
              <div
                key={id}
                className="border-b border-gray-100 py-4 last:border-0 relative"
              >
                <div className="flex items-start gap-3">
                  {/* Profile Picture */}
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  {/* Notification Content */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Link to={`/notification-detail/${id}`}>
                        <p
                          className={`font-medium ${
                            isUnread ? "text-blue-600" : "text-gray-800"
                          }`}
                        >
                          Your payment invoice request has been approved by
                          Admin
                        </p>
                      </Link>
                      <div className="flex items-center gap-2">
                        {/* Vertical Dotted Menu */}
                        <button
                          className="text-gray-400 hover:text-gray-600 relative"
                          onClick={() => toggleDropdown(id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      {minutes < 60
                        ? `${minutes}min ago`
                        : `${Math.floor(minutes / 60)}hr ago`}
                    </p>
                  </div>
                </div>

                {/* Dropdown Menu */}
                {openDropdownId === id && (
                  <div className="absolute right-0 top-12 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <button
                      onClick={() => handleAction("markAsRead", id)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Mark as read
                    </button>
                    <button
                      onClick={() => handleAction("select", id)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Select
                    </button>
                    <button
                      onClick={() => handleAction("delete", id)}
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Yesterday's Notifications */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Yesterday 18th November, 2022
              </h2>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="yesterdaySelectAll"
                  className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-blue-600 font-medium">
                  Select all
                </span>
              </label>
            </div>
            {notificationsYesterday.map(({ id, days }) => (
              <div
                key={id}
                className="border-b border-gray-100 py-4 last:border-0 relative"
              >
                <div className="flex items-start gap-3">
                  {/* Profile Picture */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  {/* Notification Content */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Link to={`/notification-detail/${id}`}>
                        <p className="text-gray-800">
                          Your payment invoice request has been approved by
                          Admin
                        </p>
                      </Link>
                      <div className="flex items-center gap-2">
                        {/* Vertical Dotted Menu */}
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          onClick={() => toggleDropdown(id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{days}day ago</p>
                  </div>
                </div>

                {/* Dropdown Menu */}
                {openDropdownId === id && (
                  <div className="absolute right-0 top-12 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <button
                      onClick={() => handleAction("markAsRead", id)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Mark as read
                    </button>
                    <button
                      onClick={() => handleAction("select", id)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Select
                    </button>
                    <button
                      onClick={() => handleAction("delete", id)}
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
