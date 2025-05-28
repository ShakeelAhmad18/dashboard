import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CreateSalaryDefinition from "../components/CreateSalaryDefinition";

const SalaryDefination = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-[#14ADD6] flex items-center hover:text-blue-800"
          >
            <IoIosArrowBack className="mr-1" /> Back
          </button>
        </div>
      </div>
      <CreateSalaryDefinition/>
    </div>
  );
};

export default SalaryDefination;
