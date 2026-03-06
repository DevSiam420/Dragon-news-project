import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4 px-4">
      <h2 className="text-black font-bold text-md text-center md:text-left">
        Login with
      </h2>

      {/* Google Button */}
      <button
        className="w-full flex items-center justify-center gap-2 py-2 px-6
    bg-[#f5f5f5] border border-blue-500
    rounded-md text-blue-600 font-medium
    transition-all duration-200
    hover:bg-blue-50 hover:shadow-md hover:scale-[1.02]"
      >
        <FcGoogle className="text-xl" />
        Login with Google
      </button>

      {/* Github Button */}
      <button
        className="w-full flex items-center justify-center gap-3 py-2 px-6
    bg-[#f5f5f5] border border-gray-700
    rounded-md text-gray-800 font-medium
    transition-all duration-200
    hover:bg-gray-100 hover:shadow-md hover:scale-[1.02]"
      >
        <FaGithub className="text-xl" />
        Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
