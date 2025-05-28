import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LogisticsDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 flex items-center hover:text-blue-800 font-bold"
          >
            <IoIosArrowBack className="mr-1" /> Back
          </button>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <h1 className="text-xl font-bold mb-4">Request For Travel Time</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">Purpose:</p>
              <p>Training course</p>
            </div>
            <div>
              <p className="font-semibold">Amount:</p>
              <p>¥360,000.00</p>
            </div>
            <div>
              <p className="font-semibold">From:</p>
              <p>Otor John Stephen</p>
            </div>
            <div>
              <p className="font-semibold">To:</p>
              <p>Fatimah Mohammed</p>
            </div>
            <div>
              <p className="font-semibold">Duration:</p>
              <p>4 days - (21/12/2022 - 24/12/2022)</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <p className="text-yellow-600">Pending</p>
            </div>
            <div>
              <p className="font-semibold">Attachment:</p>
              <p>Yes</p>
            </div>
          </div>

          <p className="text-right mt-4">20th October, 2022</p>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <h2 className="font-bold mb-2">Bill to:</h2>
          <p className="mb-1">THE MANAGING DIRECTOR,</p>
          <p className="mb-1">NNPC E & P LIMITED</p>
          <p className="mb-1">OSBA ROAD</p>
          <p className="mb-1">PM B 1262, BENIN CITY</p>
          <p className="mb-1">EDO STATE</p>
          <p className="mb-4">NIGERIA</p>

          <h2 className="font-bold mb-2">Retia Energy</h2>
          <p className="mb-4">Revenue generated pursuant</p>

          <div className="mb-4">
            <p>
              <span className="font-semibold">RC NO.</span> 1667068
            </p>
            <p>
              <span className="font-semibold">TIN</span> 22393959-0001
            </p>
            <p className="font-semibold">CONTRACT</p>
            <p>Contract for The Provision of</p>
            <p>Field Management and</p>
            <p>Maintenance Services for</p>
            <p>OML 11 Flow stations.</p>
          </div>

          <p className="font-semibold mb-2">INVOICE NUMBER:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">S/N</th>
                  <th className="border border-gray-300 p-2 text-left">ITEM</th>
                  <th className="border border-gray-300 p-2 text-left">
                    DESCRIPTION
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    QUANTITY
                  </th>
                  <th className="border border-gray-300 p-2 text-left">RATE</th>
                  <th className="border border-gray-300 p-2 text-left">
                    Personnel Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">ITEM 1</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">50</td>
                  <td className="border border-gray-300 p-2">11,000</td>
                  <td className="border border-gray-300 p-2">N550,000.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">ITEM 1</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">45</td>
                  <td className="border border-gray-300 p-2">10,500</td>
                  <td className="border border-gray-300 p-2">N472,500.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">ITEM 1</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">80</td>
                  <td className="border border-gray-300 p-2">9,500</td>
                  <td className="border border-gray-300 p-2">N700,000.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">4</td>
                  <td className="border border-gray-300 p-2">ITEM 1</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">90</td>
                  <td className="border border-gray-300 p-2">8,000</td>
                  <td className="border border-gray-300 p-2">N720,000.00</td>
                </tr>
                <tr className="font-semibold">
                  <td className="border border-gray-300 p-2" colSpan="3">
                    TOTAL
                  </td>
                  <td className="border border-gray-300 p-2">265</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">M2,502,500.00</td>
                </tr>
                <tr className="font-semibold">
                  <td className="border border-gray-300 p-2" colSpan="5">
                    7.5% VAT
                  </td>
                  <td className="border border-gray-300 p-2">M187,887.50</td>
                </tr>
                <tr className="font-semibold">
                  <td className="border border-gray-300 p-2" colSpan="5">
                    GRAND TOTAL
                  </td>
                  <td className="border border-gray-300 p-2">M2,690,187.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            <span className="font-semibold">Amount In Words:</span> One Million
            two hundred and ninety-four thousand five hundred and sixty-seven
            naira & ninety-two kobo
          </p>

          <div className="mt-6">
            <p>
              <span className="font-semibold">Account Name:</span> RELIA ENERGY
              LIMITED
            </p>
            <p>
              <span className="font-semibold">Account Number:</span> 1017271085
            </p>
            <p>
              <span className="font-semibold">Bank:</span> Zenith Bank
            </p>
            <p>
              <span className="font-semibold">Branch</span> Transcorp Hilton,
              FCT - Abuja
            </p>
            <p>
              <span className="font-semibold">Sort Code:</span> 57080086
            </p>
          </div>

          <div className="mt-8 text-right">
            <p className="font-semibold">FOR: RELIA ENERGY LIMITED</p>
            <div className="mt-12">
              <p className="border-t border-gray-400 pt-1 inline-block">
                SIGNATURE
              </p>
            </div>
            <p className="mt-2">STAFF NAME</p>
            <p>STAFF DESIGNATION</p>
          </div>
        </div>

        <div className="p-2">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-4">
            <div className="w-full md:w-1/3">
              <label className="block font-semibold mb-2">Action</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Select an action</option>
                <option value="approve">Approve</option>
                <option value="reject">Reject</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <label className="block font-semibold mb-2">Remarks</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter remark"
              />
            </div>

            <div className="w-full md:w-1/3 flex justify-end">
              <button className="bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white px-6 py-2 rounded mt-6 md:mt-0 hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsDetails;
