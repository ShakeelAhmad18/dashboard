import { useState } from "react";

const NavBar = ({ activeTab, setActiveTab, tabs }) => {
 

  return (
    <div className="w-full max-w-[1148px] mt-6 md:mt-8 mx-auto">
      <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[90px] flex items-center justify-between">
        <nav className="w-full">
          <ul className="flex justify-between md:justify-start md:space-x-8 w-full">
            {tabs.map((tab) => (
              <li key={tab} className="flex-1 md:flex-none text-center">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`font-medium text-sm md:text-base transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#14ADD6] to-[#384295] bg-clip-text text-transparent"
                      : "text-[#515151] hover:bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:bg-clip-text hover:text-transparent"
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
