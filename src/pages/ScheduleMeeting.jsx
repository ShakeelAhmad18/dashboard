import React, { useState } from "react";
import BackButton from "../components/BackButton";

const ScheduledMeeting = () => {
  const [formData, setFormData] = useState({
    meetingTitle: "",
    meetingType: "",
    participants: [],
    date: "",
    startTime: "",
    endTime: "",
    recurrence: "none",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Meeting scheduled:", formData);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <BackButton />
        <div className="mt-6 p-6 bg-white rounded-xl shadow-md w-full max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Schedule a Meeting
          </h2>
          <p className="mb-6 text-gray-600">
            Fill in the details below to schedule a new meeting.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          >
            {/* Meeting Title */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meeting Title *
              </label>
              <input
                type="text"
                name="meetingTitle"
                value={formData.meetingTitle}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter meeting title"
                required
              />
            </div>

            {/* Meeting Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meeting Type *
              </label>
              <select
                name="meetingType"
                value={formData.meetingType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select meeting type</option>
                <option value="team">Team Meeting</option>
                <option value="client">Client Meeting</option>
                <option value="one-on-one">1:1 Meeting</option>
                <option value="interview">Interview</option>
                <option value="webinar">Webinar</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Start Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time *
              </label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* End Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Time *
              </label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Recurrence */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recurrence
              </label>
              <select
                name="recurrence"
                value={formData.recurrence}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="none">Does not repeat</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="custom">Custom...</option>
              </select>
            </div>

            {/* Participants */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Participants
              </label>
              <input
                type="text"
                name="participants"
                value={formData.participants.join(", ")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    participants: e.target.value.split(","),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email addresses separated by commas"
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Meeting agenda or notes"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition duration-300 shadow-md"
              >
                Schedule Meeting
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduledMeeting;
