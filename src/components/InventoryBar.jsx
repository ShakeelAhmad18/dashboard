import React from "react";

const InventoryBar = ({ activeTab, setActiveTab }) => {



  return (
    <div className="flex">
      {/* Stocks Tab */}
      <div
        className={`px-6 py-3 font-medium text-sm cursor-pointer relative ${
          activeTab === "stocks"
            ? "text-blue-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => setActiveTab("stocks")}
      >
        Stocks
        {activeTab === "stocks" && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
        )}
      </div>

      {/* Inventory Tab */}
      <div
        className={`px-6 py-3 font-medium text-sm cursor-pointer relative ${
          activeTab === "inventory"
            ? "text-blue-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => setActiveTab("inventory")}
      >
        Inventory
        {activeTab === "inventory" && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
        )}
      </div>
    </div>
  );
};

export default InventoryBar;
