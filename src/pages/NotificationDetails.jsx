import React from "react";
import BackButton from "../components/BackButton";

const notifications = [
  {
    date: "Friday, Nov 11.",
    time: "10:00am",
    messages: [
      "Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id. nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.",
      "Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.",
    ],
  },
  {
    date: "Saturday, Nov 12.",
    time: "01:20pm",
    messages: [
      "Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id. nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.",
      "Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.",
    ],
  },
  {
    date: "Sunday, Nov 13.",
    time: "09:20am",
    messages: [
      "Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id. nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.",
    ],
  },
];

const NotificationDetails = () => {
  return (
    <div className="min-h-screen">
      <BackButton />
      <div className="max-w-[1148px] mx-auto">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md mb-6 flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">
            Notifications from HR
          </h3>
          <button
            className="px-8 py-2 md:px-14 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
            bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
            hover:opacity-80 hover:scale-105 transition-all duration-200"
          >
            Delete All
          </button>
        </div>

        <div className="space-y-6">
          {notifications.map((notif, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 font-semibold text-sm md:text-base mb-2">
                <span>{notif.date}</span>
                <span>{notif.time}</span>
              </div>
              <div className="space-y-4">
                {notif.messages.map((msg, i) => (
                  <div
                    key={i}
                    className="bg-[#F8F8F8] p-5 rounded-xl text-sm md:text-base leading-relaxed text-gray-700 shadow-sm"
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationDetails;
