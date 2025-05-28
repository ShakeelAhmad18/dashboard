import React from "react";
import { FiLayers } from "react-icons/fi";
import StatCard from "./StatCard";
import { Link } from "react-router-dom";
import InventotyList from "./InventotyList";

const InventoryView = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          icon={<FiLayers className="text-[#248CD8]" size={24} />}
          title="Categories"
          value="10"
          comparison="2 more than last year"
          positive={true}
        />
        <StatCard
          icon={<FiLayers className="text-[#F29425]" size={24} />}
          title="Total Items"
          value="300"
          comparison="10 more than last month"
          positive={true}
        />
        <StatCard
          icon={<FiLayers className="text-[#A601FF]" size={24} />}
          title="Total items costs"
          value="$50,000,000"
          comparison="2.5% less than last year"
          positive={false}
        />
        <StatCard
          icon={<FiLayers className="text-[#10A142]" size={24} />}
          title="Total Suppliers"
          value="20"
          comparison="2 more than last week"
          positive={true}
        />
      </div>
      <div className=" w-full max-w-[1148px] ">
        <div className="bg-white p-4 md:p-6 rounded-[20px] shadow-md h-[100px] flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold">Update Inventory Table</h3>
          <Link to="/update-stock">
            <button
              className="px-8 py-2 md:px-14 md:py-2 text-white rounded-lg font-medium text-sm md:text-base 
             bg-gradient-to-r from-[#14ADD6] to-[#384295] shadow-md 
             hover:opacity-80 hover:scale-105 transition-all duration-200" // Tailwind hover effects
            >
              Update Inventory
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-6 mb-4">
        <InventotyList />
      </div>
    </div>
  );
};

export default InventoryView;
