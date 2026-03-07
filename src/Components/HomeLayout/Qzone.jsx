import React from "react";

const Qzone = () => {
  return (
    <div className="w-full max-w-md mx-auto my-12 px-8 sm:px-10 md:px-6 bg-gray-200 rounded-sm p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-1.5 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Q-Zone
        </h2>
      </div>

      <div className="space-y-10">
        {/* Swimming */}
        <button className="group w-full cursor-pointer">
          <div className="relative transition-all duration-300 group-hover:-translate-y-2">
            {/* Stack shadow layers */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-white rounded-xl shadow-md"></div>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-white rounded-xl shadow-sm"></div>
            {/* Front card */}
            <div className="relative bg-white rounded-xl shadow-sm p-4 transition-all duration-300">
              <img
                src="/assets/swimming.png"
                alt="Swimming"
                className="rounded-lg mb-4 w-full"
              />
              <p className="text-center text-xl font-medium text-gray-800 pb-2">
                Swimming
              </p>
            </div>
          </div>
        </button>

        {/* Class */}
        <button className="group w-full cursor-pointer">
          <div className="relative transition-all duration-300 group-hover:-translate-y-2">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-white rounded-xl shadow-md"></div>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-white rounded-xl shadow-sm"></div>
            <div className="relative bg-white rounded-xl shadow-sm p-4 transition-all duration-300">
              <img
                src="/assets/class.png"
                alt="Class"
                className="rounded-lg mb-4 w-full"
              />
              <p className="text-center text-xl font-medium text-gray-800 pb-2">
                Class
              </p>
            </div>
          </div>
        </button>

        {/* Play Ground */}
        <button className="group w-full cursor-pointer">
          <div className="relative transition-all duration-300 group-hover:-translate-y-2">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-white rounded-xl shadow-md"></div>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-white rounded-xl shadow-sm"></div>
            <div className="relative bg-white rounded-xl shadow-sm p-4 transition-all duration-300">
              <img
                src="/assets/playground.png"
                alt="Play Ground"
                className="rounded-lg mb-4 w-full"
              />
              <p className="text-center text-xl font-medium text-gray-800 pb-2">
                Play Ground
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Qzone;
