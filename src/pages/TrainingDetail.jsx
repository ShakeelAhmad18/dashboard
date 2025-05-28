import React from 'react'
import BackButton from '../components/BackButton'

const TrainingDetail = () => {
  return (
    <div className="min-h-screen">
      <BackButton />
      <div className="max-w-6xl mx-auto p-6 font-sans bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Staff Health and Safety Training
        </h1>

        {/* Training Details Table */}
        <div className="mb-8">
          <div className="grid grid-cols-4 gap-4 bg-gray-100 p-3 rounded-t-lg">
            <div className="font-semibold text-gray-700">Training type</div>
            <div className="font-semibold text-gray-700">Training duration</div>
            <div className="font-semibold text-gray-700">Training mode</div>
            <div className="font-semibold text-gray-700">Training status</div>
          </div>
          <div className="grid grid-cols-4 gap-4 border border-t-0 border-gray-200 p-3 rounded-b-lg">
            <div className="text-gray-600">Team training</div>
            <div className="text-gray-600">3 weeks</div>
            <div className="text-gray-600">Physical</div>
            <div className="text-gray-600">Inprogress</div>
          </div>
        </div>

        {/* Training Participants */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Training participant
          </h2>
          <div className="space-y-2">
            <div className="text-gray-600">1. Fatima Mohammed</div>
            <div className="text-gray-600">2. Ibrahim Bankole</div>
            <div className="text-gray-600">3. Otor John Stephen</div>
            <div className="text-gray-600">4. Abubakar Alghazali</div>
            <div className="text-gray-600">5. Ranky Akab</div>
            <div className="text-gray-600">6. Sadiq Lukman</div>
          </div>
        </div>

        {/* Update Status Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Update status
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="border border-gray-300 rounded-md px-3 py-2 flex-grow max-w-xs">
              <option>Select option</option>
              <option>Completed</option>
              <option>Cancelled</option>
              <option>Postponed</option>
            </select>
            <button className="bg-gradient-to-r from-[#14ADD6] to-[#384295]  hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingDetail
