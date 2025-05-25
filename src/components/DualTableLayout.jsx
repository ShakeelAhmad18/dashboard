import React, { useEffect, useRef, useState } from "react";

const DualTableLayout = () => {
  // Memo table scroll handling
  const memoScrollRef = useRef(null);
  const memoThumbRef = useRef(null);
  const [memoThumbPosition, setMemoThumbPosition] = useState(0);

  // Staff table scroll handling
  const staffScrollRef = useRef(null);
  const staffThumbRef = useRef(null);
  const [staffThumbPosition, setStaffThumbPosition] = useState(0);

  useEffect(() => {
    const memoContainer = memoScrollRef.current;
    const memoThumb = memoThumbRef.current;

    const handleMemoScroll = () => {
      const scrollRatio =
        memoContainer.scrollTop /
        (memoContainer.scrollHeight - memoContainer.clientHeight);
      const maxTop = memoContainer.clientHeight - 30;
      setMemoThumbPosition(scrollRatio * maxTop);
    };

    memoContainer.addEventListener("scroll", handleMemoScroll);
    return () => memoContainer.removeEventListener("scroll", handleMemoScroll);
  }, []);

  useEffect(() => {
    const staffContainer = staffScrollRef.current;
    const staffThumb = staffThumbRef.current;

    const handleStaffScroll = () => {
      const scrollRatio =
        staffContainer.scrollTop /
        (staffContainer.scrollHeight - staffContainer.clientHeight);
      const maxTop = staffContainer.clientHeight - 30;
      setStaffThumbPosition(scrollRatio * maxTop);
    };

    staffContainer.addEventListener("scroll", handleStaffScroll);
    return () =>
      staffContainer.removeEventListener("scroll", handleStaffScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-5 max-w-6xl mx-auto transition-all duration-300">
      {/* Memo Table - Left Side */}
      <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-500 relative transform hover:scale-[1.01] transition-transform duration-200">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Memo
          </h2>
          <div className="relative overflow-x-auto">
            <div
              ref={memoScrollRef}
              className="overflow-y-hidden max-h-[400px] pr-2 scroll-container"
            >
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      S/N
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      Memo Title
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      Sent From
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      Sent To
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">01</td>
                    <td className="py-3 px-4 text-gray-600">Operations memo</td>
                    <td className="py-3 px-4 text-gray-600">Otor John</td>
                    <td className="py-3 px-4 text-gray-600">Ibrahim Sadiq</td>
                    <td className="py-3 px-4">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">02</td>
                    <td className="py-3 px-4 text-gray-600">
                      Operations project memo
                    </td>
                    <td className="py-3 px-4 text-gray-600">Fatima Faruk</td>
                    <td className="py-3 px-4 text-gray-600">Shola Abiola</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                        Approved
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">03</td>
                    <td className="py-3 px-4 text-gray-600">
                      Project onboard notice
                    </td>
                    <td className="py-3 px-4 text-gray-600">Otor John</td>
                    <td className="py-3 px-4 text-gray-600">James Emeka</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                        Approved
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">04</td>
                    <td className="py-3 px-4 text-gray-600">Operations memo</td>
                    <td className="py-3 px-4 text-gray-600">Ibrahim Musa</td>
                    <td className="py-3 px-4 text-gray-600">Otor John</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                        Approved
                      </span>
                    </td>
                  </tr>
                  {/* Additional memo rows */}
                  {[5, 6, 7, 8, 9, 10].map((i) => (
                    <tr key={`memo-${i}`} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">{i}</td>
                      <td className="py-3 px-4 text-gray-600">
                        Additional memo {i}
                      </td>
                      <td className="py-3 px-4 text-gray-600">Sender {i}</td>
                      <td className="py-3 px-4 text-gray-600">Recipient {i}</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                          Approved
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Custom scrollbar for memo table */}
            <div className="absolute right-2 top-0 h-full w-[2px] bg-gray-100 rounded-full"></div>
            <div
              ref={memoThumbRef}
              className="absolute right-1 w-[9px] h-[30px] mt-20 rounded-full bg-gradient-to-b from-[#14ADD6] to-blue-[#384295] shadow-sm scroll-thumb transition-all duration-100"
              style={{ top: `${memoThumbPosition}px` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Staff List Table - Right Side */}
      <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-500 relative transform hover:scale-[1.01] transition-transform duration-200">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Staff List
          </h2>
          <div className="relative overflow-x-auto">
            <div
              ref={staffScrollRef}
              className="overflow-y-hidden max-h-[400px] pr-2 scroll-container"
            >
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      S/N
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      Staff Name
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      Staff Role
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 font-medium text-gray-700 sticky top-0 bg-gray-50">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">01</td>
                    <td className="py-3 px-4 text-gray-600">
                      Abubakar Ismaila Goje
                    </td>
                    <td className="py-3 px-4 text-gray-600">Admin</td>
                    <td className="py-3 px-4 text-gray-600">
                      Human Resource Dept.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">02</td>
                    <td className="py-3 px-4 text-gray-600">Ifeanyi Obinna</td>
                    <td className="py-3 px-4 text-gray-600">Admin</td>
                    <td className="py-3 px-4 text-gray-600">Management</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">03</td>
                    <td className="py-3 px-4 text-gray-600">
                      Bankole Olanrewaju
                    </td>
                    <td className="py-3 px-4 text-gray-600">HOD LT</td>
                    <td className="py-3 px-4 text-gray-600">
                      Peoples and Operation
                    </td>
                  </tr>
                  {/* Additional staff rows */}
                  {[5].map((i) => (
                    <tr key={`staff-${i}`} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">{i}</td>
                      <td className="py-3 px-4 text-gray-600">
                        Staff Member {i}
                      </td>
                      <td className="py-3 px-4 text-gray-600">Role {i}</td>
                      <td className="py-3 px-4 text-gray-600">
                        Department {i}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Custom scrollbar for staff table */}
            <div className="absolute right-2 top-0 h-full w-[2px] bg-gray-100 rounded-full"></div>
            <div
              ref={staffThumbRef}
              className="absolute right-1 w-[9px] h-[30px] rounded-full mt-20 bg-gradient-to-b from-blue-500 to-blue-300 shadow-sm scroll-thumb transition-all duration-100"
              style={{ top: `${staffThumbPosition}px` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualTableLayout;
