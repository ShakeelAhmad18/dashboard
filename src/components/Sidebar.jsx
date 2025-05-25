import React from "react";
import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiFileText,
  FiBell,
  FiBook,
  FiShoppingBag,
  FiTruck,
  FiPieChart,
  FiMail,
  FiSettings,
  FiLayers,
} from "react-icons/fi";

const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FiHome size={18} /> },
    { name: "Staff", icon: <FiUsers size={18} /> },
    { name: "Payment Voucher", icon: <FiDollarSign size={18} /> },
    { name: "Payroll", icon: <FiFileText size={18} /> },
    { name: "Memo", icon: <FiMail size={18} /> },
    { name: "Circulars", icon: <FiBook size={18} /> },
    { name: "Maintenance", icon: <FiSettings size={18} /> },
    { name: "Logistics", icon: <FiTruck size={18} /> },
    { name: "Office Budget", icon: <FiPieChart size={18} /> },
    { name: "Stocks and Inventory", icon: <FiLayers size={18} /> },
    { name: "Notifications", icon: <FiBell size={18} /> },
    { name: "Capacity Building", icon: <FiUsers size={18} /> },
    { name: "Procurements", icon: <FiShoppingBag size={18} /> },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
        <img
          src="/Logo.png"
          alt="logo"
          className="flex justify-center items-center ml-12 transition-opacity duration-200 hover:opacity-90"
        />
      </div>
      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200 relative
                  ${
                    activeItem === item.name
                      ? "text-blue-600 font-medium bg-blue-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {/* Active item indicator */}
                {activeItem === item.name && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r-md transition-all duration-300"></div>
                )}
                <span className="mr-3 transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="transition-all duration-200">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
