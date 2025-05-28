import React, { useState } from "react";

const BudgetSuccessModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/Group.png"
          alt="success"
          className="text-green-500 text-5xl mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">Congratulations</h2>
        <p className="text-gray-600 mb-6">
          Your budget has been submitted successfully.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2  bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ok
        </button>
      </div>
    </div>
  );
};


export default BudgetSuccessModal;