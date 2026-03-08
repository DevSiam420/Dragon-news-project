import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            className="w-50 hover:scale-105 transition-transform duration-300 cursor-pointer"
            src="/assets/logo.png"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          {["Home", "About", "Career"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer hover:text-black transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* User Avatar */}
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
            <FaUser className="text-gray-600 text-sm" />
          </div>

          {/* Login Button */}
          <Link
            to="/auth/login"
            className="relative px-8 py-3 font-semibold text-white bg-slate-900 rounded-full overflow-hidden group border border-slate-700 hover:border-cyan-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            <span className="absolute inset-[-2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></span>
            <span className="relative flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Login
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <span
            className={`transition-all duration-300 ${open ? "rotate-90 scale-110" : ""}`}
          >
            {open ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
          {["Home", "About", "Career"].map((item, index) => (
            <li
              key={item}
              className="hover:text-cyan-600 cursor-pointer transition-colors duration-300 hover:translate-x-1 transform"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4 pb-6">
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-cyan-500 transition-all duration-300">
            <FaUser className="text-gray-600 text-sm" />
          </div>
          <button className="relative px-8 py-3 font-semibold text-white bg-slate-900 rounded-full overflow-hidden group border border-slate-700 hover:border-cyan-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95">
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            <span className="absolute inset-[-2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></span>
            <span className="relative flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Login
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
