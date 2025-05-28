import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate=useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={() => navigate(-1)}
        className="text-[#14ADD6] flex items-center hover:text-blue-800"
      >
        <IoIosArrowBack className="mr-1" /> Back
      </button>
    </div>
  );
};

export default BackButton;
