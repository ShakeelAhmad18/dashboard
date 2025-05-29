import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Logging in with:", { email, password, rememberMe });
    navigate("/"); // Redirect after login
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Login Form (shows on all screens) */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          {/* Logo and Signup Button Row */}
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/Logo.png" // Replace with your actual ERP logo path
                  alt="ERP Logo"
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>
            </div>
            {/* Signup Button */}
            <div>
              <button
                onClick={() => navigate("/signup")}
                className="flex items-center space-x-2 px-4 py-3 sm:px-4 sm:py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span>Sign Up</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mt-14">
            <p className="text-sm text-gray-600">Welcome back!</p>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              Please Sign In
            </h2>
          </div>

          {/* Form */}
          <div className="mt-14">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side - Image (hidden on mobile, shows on lg screens and up) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="/loginPic.png"
          alt="Login visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
      </div>
    </div>
  );
};

export default Login;
