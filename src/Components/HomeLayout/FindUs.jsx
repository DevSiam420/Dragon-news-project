import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="w-full max-w-md mx-auto my-12 px-8 sm:px-10 md:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1.5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Find Us On
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Connect with us on social media
            </p>
          </div>
        </div>
        <div className="hidden sm:block w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      {/* Social Links Card */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {/* Facebook */}
          <a
            href="#"
            className="flex items-center justify-between px-7 py-6 hover:bg-blue-50/50 transition-all duration-200 group"
            aria-label="Visit our Facebook page"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  <FaFacebookF className="text-blue-600 text-lg" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Facebook
                </h3>
                <p className="text-sm text-gray-500">
                  Follow for updates & news
                </p>
              </div>
            </div>
            <FaArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="flex items-center justify-between px-7 py-6 hover:bg-sky-50/50 transition-all duration-200 group"
            aria-label="Visit our Twitter profile"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 group-hover:from-sky-100 group-hover:to-sky-200 transition-all duration-300">
                  <FaTwitter className="text-sky-500 text-lg" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">t</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-sky-500 transition-colors">
                  Twitter
                </h3>
                <p className="text-sm text-gray-500">Join the conversation</p>
              </div>
            </div>
            <FaArrowRight className="text-gray-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-300" />
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="flex items-center justify-between px-7 py-6 hover:bg-pink-50/50 transition-all duration-200 group"
            aria-label="Visit our Instagram profile"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-50 to-rose-100 group-hover:from-pink-100 group-hover:to-rose-200 transition-all duration-300">
                  <FaInstagram className="text-pink-500 text-lg" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">IG</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                  Instagram
                </h3>
                <p className="text-sm text-gray-500">See our visual stories</p>
              </div>
            </div>
            <FaArrowRight className="text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-7 py-5 text-center border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Follow us for the latest updates and community engagement
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
