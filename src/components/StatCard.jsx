import React from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const StatCard = ({ icon, title, value, comparison, positive = true }) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-200">
      <div className="flex justify-between items-start">
        {/* Left side - Text content */}
        <div className="flex-1">
          {/* Large value */}
          <p className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight transition-all duration-200">
            {value}
          </p>

          {/* Title */}
          <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1 transition-all duration-200">
            {title}
          </p>

          {/* Comparison text with arrow icon */}
          {comparison && (
            <div className="flex items-center mt-2">
              {positive ? (
                <FiArrowUp className="text-green-600 mr-1" size={14} />
              ) : (
                <FiArrowDown className="text-red-600 mr-1" size={14} />
              )}
              <p
                className={`text-xs w-full font-medium transition-all duration-200 ${
                  positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {comparison}
              </p>
            </div>
          )}
        </div>

        {/* Right side - Icon */}
        {icon && (
          <div className="ml-2 sm:ml-4 p-2 rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
