import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ScheduledMaintenance = () => {
  return (
    <div className="mx-auto font-sans h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Calendar (full height and width) */}
          <div className="w-full md:w-1/2 p-4 h-full flex flex-col">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-black">
                Scheduled Maintenance
              </h1>
            </div>
            <div className="flex-grow">
              <DatePicker
                inline
                calendarClassName="w-full h-full flex flex-col"
                renderDayContents={(day) => (
                  <span className="day-content">{day}</span>
                )}
                monthsShown={1}
                renderCustomHeader={({
                  monthDate,
                  decreaseMonth,
                  increaseMonth,
                }) => (
                  <div className="flex items-center justify-between px-2 py-1 mb-2">
                    <button
                      onClick={decreaseMonth}
                      className="text-gray-600 hover:text-gray-900 p-1 rounded"
                    >
                      <span className="text-xl">&lt;</span>
                    </button>
                    <span className="text-lg font-semibold text-gray-700">
                      {monthDate.toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <button
                      onClick={increaseMonth}
                      className="text-gray-600 hover:text-gray-900 p-1 rounded"
                    >
                      <span className="text-xl">&gt;</span>
                    </button>
                  </div>
                )}
                dayClassName={(date) =>
                  date.getDate() === 18
                    ? "bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-full"
                    : "text-gray-700 hover:bg-gray-100 rounded-full"
                }
              />
            </div>
          </div>

          {/* Vertical separator line */}
          <div className="hidden md:block border-r border-gray-200"></div>

          {/* Right Side - Maintenance List (centered content) */}
          <div className="w-full md:w-1/2 p-4 bg-white flex items-center justify-center">
            <div className="space-y-4 w-full max-w-md">
              {/* First Maintenance Item */}
              <div className="rounded-lg p-4">
                <h3 className="font-semibold text-gray-800">
                  18th November, 2022
                </h3>
                <p className="text-gray-600 mt-2">
                  1. Scheduled maintenance for service of 3 unit of AC
                </p>
                <div className="flex justify-start mt-3">
                  <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-4 py-2 rounded-lg text-sm font-medium">
                    View
                  </button>
                </div>
              </div>

              {/* Second Maintenance Item */}
              <div className="rounded-lg p-4">
                <h3 className="font-semibold text-gray-800">
                  18th November, 2022
                </h3>
                <p className="text-gray-600 mt-2">
                  2. Scheduled maintenance for service of 3 unit of AC
                </p>
                <div className="flex justify-start mt-3">
                  <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-4 py-2 rounded-lg text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledMaintenance;
