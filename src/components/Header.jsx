import React from "react";
import UserProfileDropdown from "./UserProfileDropdown";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-[#F8F9FD]">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side - Welcome message and date */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="lg:hidden mr-4 p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleSidebar}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">
                Welcome, Mr. Otor John 😘
              </h1>
              <p className="text-sm text-gray-500">
                Today is Saturday, 11th November 2022.
              </p>
            </div>
          </div>

          {/* Right side - User profile dropdown */}
          <div className="flex items-center space-x-4">
            <UserProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
