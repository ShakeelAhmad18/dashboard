import React from "react";
import { MdReceiptLong } from "react-icons/md";
import { TbTimeline } from "react-icons/tb";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsQrCodeScan } from "react-icons/bs";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { LuMessageCircleMore } from "react-icons/lu";

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
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [activeItem, setActiveItem] = React.useState("Dashboard");
  const location =useLocation();



  const menuItems = [
    { name: "Dashboard", icon: <FiHome size={18} />, path: "/" }, // Add paths
    { name: "Staff", icon: <FiUsers size={18} />, path: "/staff" },
    {
      name: "Payment Voucher",
      icon: <FiDollarSign size={18} />,
      path: "/payment-voucher",
    },
    { name: "Payroll", icon: <FiFileText size={18} />, path: "/payroll" },
    { name: "Memo", icon: <FiMail size={18} />, path: "/memo" },
    { name: "Circulars", icon: <FiBook size={18} />, path: "/circulars" },
    {
      name: "Maintenance",
      icon: <FiSettings size={18} />,
      path: "/maintenance",
    },
    { name: "Logistics", icon: <FiTruck size={18} />, path: "/logistics" },
    {
      name: "Office Budget",
      icon: <FiPieChart size={18} />,
      path: "/office-budget",
    },
    {
      name: "Stocks and Inventory",
      icon: <FiLayers size={18} />,
      path: "/stocks-and-inventory",
    },
    {
      name: "Notifications",
      icon: <FiBell size={18} />,
      path: "/notifications",
    },
    {
      name: "Capacity Building",
      icon: <FiUsers size={18} />,
      path: "/capacity-building",
    },
    {
      name: "Procurements",
      icon: <FiShoppingBag size={18} />,
      path: "/procurements",
    },
    {
      name: "Tax Management",
      icon: <MdReceiptLong size={18} />,
      path: "/tax-management",
    },
    {
      name: "Project Management",
      icon: <TbTimeline size={18} />,
      path: "/project-management",
    },
    {
      name: "Quality Assurance",
      icon: <BsPatchCheckFill size={18} />,
      path: "/quality-asurance",
    },
    {
      name: "Meeting Management",
      icon: <MdOutlineEventAvailable size={18} />,
      path: "/meeting-management",
    },
    {
      name: "Barcode/QR Scanning",
      icon: <BsQrCodeScan size={18} />,
      path: "/Barcode-QR-Scanning",
    },
    {
      name: "Internal Messages",
      icon: <LuMessageCircleMore size={18} />,
      path: "/messages",
    },
    {
      name: "Vehicle Fleet Management",
      icon: <LiaShuttleVanSolid size={18} />,
      path: "/vehicle-management",
    },
  ];


  const handleClick = (path, name) => {
    setActiveItem(name); // Update active item
    navigate(path); // Navigate to the specified path
  };

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
                onClick={() => handleClick(item.path, item.name)}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200 relative
                  ${
                    location.pathname === item.path || activeItem === item.name
                      ? "text-blue-600 font-medium bg-blue-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {/* Active item indicator */}
                {(location.pathname === item.path ||
                  activeItem === item.name) && (
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
