import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Login your account
        </h2>

        <div className="divider my-6"></div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Email address
              </span>
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </span>

              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full pl-10 bg-gray-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Password
              </span>
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaLock />
              </span>

              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pl-10 bg-gray-100"
              />
            </div>
          </div>

          {/* Button */}
          <button className="btn w-full bg-gray-800 text-white hover:bg-black border-none">
            Login
          </button>

          {/* Register */}
          <p className="text-center text-sm text-gray-600 pt-2">
            Don’t Have An Account ?
            <Link
              to="/auth/Register"
              className="text-red-500 font-semibold ml-1 underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
