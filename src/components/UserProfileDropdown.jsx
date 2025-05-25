import React, { useState, useRef } from "react";
import { FiUser, FiSettings, FiLogOut, FiChevronDown } from "react-icons/fi";
import { FaBell } from "react-icons/fa";

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center" ref={dropdownRef}>
      {/* Notification icon - separate button */}
      <button className="p-1 mr-2 focus:outline-none relative">
        <FaBell className="h-5 w-5 text-black transition-colors duration-200 hover:text-blue-600" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      </button>

      {/* Profile dropdown toggle */}
      <button
        className="flex items-center space-x-2 focus:outline-none group"
        onClick={handleProfileClick}
      >
        {/* User avatar */}
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-200 group-hover:bg-blue-200">
          <span className="text-xs font-medium text-blue-600 transition-all duration-200 group-hover:text-blue-800">
            OJ
          </span>
        </div>

        {/* User name (desktop only) */}
        <div className="hidden md:flex flex-col items-start transition-all duration-200">
          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
            Otor John
          </span>
          <span className="text-xs text-gray-500 group-hover:text-blue-500">
            HR Office
          </span>
        </div>

        {/* Chevron icon */}
        <FiChevronDown
          className={`h-4 w-4 text-gray-500 transition-all duration-200 group-hover:text-blue-600 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu - Now appears below */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-200 origin-top animate-fadeIn">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            <FiUser className="mr-2 h-4 w-4" />
            Profile
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            <FiSettings className="mr-2 h-4 w-4" />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-100 transition-colors duration-150"
          >
            <FiLogOut className="mr-2 h-4 w-4" />
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
