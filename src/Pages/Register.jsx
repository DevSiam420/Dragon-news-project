import React from "react";
import { FaUser, FaImage, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Register your account
        </h2>

        <div className="divider my-6"></div>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Your Name
              </span>
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full pl-10 bg-gray-100"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Photo URL
              </span>
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaImage />
              </span>

              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered w-full pl-10 bg-gray-100"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Email
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

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <p className="text-sm text-gray-600">
              Accept <span className="font-medium">Term & Conditions</span>
            </p>
          </div>

          {/* Button */}
          <button className="btn w-full bg-gray-800 text-white hover:bg-black border-none">
            Register
          </button>

          {/* Login link */}
          <p className="text-center text-sm text-gray-600 pt-2">
            Already Have An Account ?
            <Link to="/auth/login" className="text-red-500 font-semibold ml-1">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
