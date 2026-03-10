import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="w-full max-w-md my-8 mx-auto px-6 sm:px-10 md:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-10 w-1.5 bg-gradient-to-b from-blue-500 via-violet-500 to-purple-600 rounded-full" />
            <div className="absolute inset-0 h-10 w-1.5 bg-gradient-to-b from-blue-500 via-violet-500 to-purple-600 rounded-full blur-sm opacity-50" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent tracking-tight leading-tight">
              Find Us On
            </h2>
            <p className="text-gray-400 text-sm mt-1 font-medium tracking-wide">
              Connect with us on social media
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1">
          <div className="w-3 h-1 rounded-full bg-blue-500" />
          <div className="w-6 h-1 rounded-full bg-violet-500" />
          <div className="w-3 h-1 rounded-full bg-purple-500" />
        </div>
      </div>

      {/* Social Links Card */}
      <div className="relative group/card">
        {/* Glow behind card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-white/60 overflow-hidden">
          <div className="divide-y divide-gray-100/80">
            {/* Facebook */}
            <a
              href="#"
              className="flex items-center justify-between px-7 py-5 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-transparent transition-all duration-300 group"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300">
                    <FaFacebookF className="text-white text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-blue-700 transition-colors duration-300">
                    Facebook
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5 font-medium">
                    Follow for updates & news
                  </p>
                </div>
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-blue-100 transition-all duration-300">
                <FaArrowRight className="text-gray-300 text-sm group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="flex items-center justify-between px-7 py-5 hover:bg-gradient-to-r hover:from-sky-50/80 hover:to-transparent transition-all duration-300 group"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-500 shadow-lg shadow-sky-500/25 group-hover:shadow-sky-500/40 group-hover:scale-105 transition-all duration-300">
                    <FaTwitter className="text-white text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-sky-600 transition-colors duration-300">
                    Twitter
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5 font-medium">
                    Join the conversation
                  </p>
                </div>
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-sky-100 transition-all duration-300">
                <FaArrowRight className="text-gray-300 text-sm group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="flex items-center justify-between px-7 py-5 hover:bg-gradient-to-r hover:from-pink-50/80 hover:to-transparent transition-all duration-300 group"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 group-hover:scale-105 transition-all duration-300">
                    <FaInstagram className="text-white text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-pink-600 transition-colors duration-300">
                    Instagram
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5 font-medium">
                    See our visual stories
                  </p>
                </div>
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-pink-100 transition-all duration-300">
                <FaArrowRight className="text-gray-300 text-sm group-hover:text-pink-500 group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-gray-50/80 via-slate-50/80 to-gray-50/80 px-7 py-4 text-center border-t border-gray-100/80">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
              Follow us for the latest updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
