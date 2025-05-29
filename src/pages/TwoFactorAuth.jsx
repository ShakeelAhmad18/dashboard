import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TwoFactorAuth = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      // Fixed syntax error here
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus to next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("Verifying OTP:", code);
    // Add your verification logic here
    navigate("/dashboard"); // Redirect after verification
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - OTP Form */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          {/* Logo and Header */}
          <div className="flex mb-14">
            <Link to="/">
              <img
                src="/Logo.png" // Replace with your actual ERP logo path
                alt="ERP Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Header */}
          <div className="mt-14">
            <p className="text-sm text-gray-600">2FA</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Please enter the 2FA code sent to your mail.
            </h2>
          </div>

          {/* OTP Form */}
          <div className="mt-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* OTP Inputs */}
              <div className="flex justify-center space-x-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-14 h-14 text-3xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side - Image (hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="/loginPic.png"
          alt="Authentication visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
