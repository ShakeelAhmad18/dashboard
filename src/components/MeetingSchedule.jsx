import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiClock, FiUsers } from "react-icons/fi";

const MeetingSchedule = () => {
  // Sample meeting data
  const meetings = [
    {
      id: 1,
      date: new Date(2023, 10, 18),
      title: "Quarterly Strategy Review",
      time: "10:00 AM - 12:00 PM",
      location: "Conference Room A / Zoom",
      organizer: "Sarah Johnson",
      participants: 12,
      status: "confirmed",
    },
    {
      id: 2,
      date: new Date(2023, 10, 18),
      title: "Product Development Sync",
      time: "2:00 PM - 3:30 PM",
      location: "Meeting Room 3 / Teams",
      organizer: "Michael Chen",
      participants: 8,
      status: "confirmed",
    },
    {
      id: 3,
      date: new Date(2023, 10, 19),
      title: "Client Presentation Prep",
      time: "9:30 AM - 11:00 AM",
      location: "Conference Room B",
      organizer: "Emily Rodriguez",
      participants: 5,
      status: "tentative",
    },
  ];

  // Get meetings for the selected date (18th in this example)
  const todaysMeetings = meetings.filter(
    (meeting) => meeting.date.getDate() === 18 && meeting.date.getMonth() === 10
  );

  return (
    <div className="mx-auto font-sans h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Calendar */}
          <div className="w-full md:w-1/2 p-4 h-full flex flex-col">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-black">
                Meeting Calendar
              </h1>
              <p className="text-gray-600">
                View and manage scheduled meetings
              </p>
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
                dayClassName={(date) => {
                  const hasMeeting = meetings.some(
                    (meeting) =>
                      meeting.date.getDate() === date.getDate() &&
                      meeting.date.getMonth() === date.getMonth() &&
                      meeting.date.getFullYear() === date.getFullYear()
                  );

                  return hasMeeting
                    ? "bg-blue-100 text-blue-800 rounded-full font-medium"
                    : "text-gray-700 hover:bg-gray-100 rounded-full";
                }}
                highlightDates={meetings.map((meeting) => meeting.date)}
              />
            </div>
          </div>

          {/* Vertical separator line */}
          <div className="hidden md:block border-r border-gray-200"></div>

          {/* Right Side - Meeting List */}
          <div className="w-full md:w-1/2 p-4 bg-white flex items-center justify-center">
            <div className="space-y-4 w-full max-w-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Meetings on November 18, 2023
              </h2>

              {todaysMeetings.length > 0 ? (
                todaysMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {meeting.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          <FiClock className="inline mr-1" />
                          {meeting.time}
                        </p>
                        <p className="text-gray-600 text-sm">
                          <FiUsers className="inline mr-1" />
                          {meeting.participants} participants
                        </p>
                        <p className="text-gray-600 text-sm">
                          {meeting.location}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          meeting.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {meeting.status}
                      </span>
                    </div>
                    <div className="flex justify-between mt-3 items-center">
                      <span className="text-sm text-gray-500">
                        Organized by: {meeting.organizer}
                      </span>
                      <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FiCalendar className="mx-auto text-4xl mb-2" />
                  <p>No meetings scheduled for this date</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSchedule;
