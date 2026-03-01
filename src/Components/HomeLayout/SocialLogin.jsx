import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="w-80 space-y-4">
      <h2 className="text-black font-bold text-md">Login with</h2>

      {/* Google Button */}
      <button
        className=" flex items-center justify-center gap-2 py-2 px-8
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
        className=" flex items-center justify-center gap-3 py-2 px-8
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
