import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="w-full max-w-md mx-auto my-12 px-4 sm:px-6">
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
            className="flex items-center justify-between p-5 hover:bg-blue-50/50 transition-all duration-200 group"
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
            className="flex items-center justify-between p-5 hover:bg-sky-50/50 transition-all duration-200 group"
            aria-label="Visit our Twitter profile"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 group-hover:from-sky-100 group-hover:to-sky-200 transition-all duration-300">
                  <FaTwitter className="text-sky-500 text-lg" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </span>
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
            className="flex items-center justify-between p-5 hover:bg-pink-50/50 transition-all duration-200 group"
            aria-label="Visit our Instagram profile"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-50 to-rose-100 group-hover:from-pink-100 group-hover:to-rose-200 transition-all duration-300">
                  <FaInstagram className="text-gradient-to-r from-purple-600 to-pink-600 text-lg" />
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
        <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 p-4 text-center border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Follow us for the latest updates and community engagement
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
