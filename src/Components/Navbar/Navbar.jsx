import { useContext, useState, useRef, useEffect } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import {
  IoLogOutOutline,
  IoPersonOutline,
  IoMailOutline,
  IoFingerPrintOutline,
  IoChevronForward,
} from "react-icons/io5";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, LogOut } = useContext(AuthContext);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    LogOut()
      .then(() => {
        setProfileOpen(false);
        alert("User logged out");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <img
            className="w-50 hover:scale-105 transition-transform duration-300 cursor-pointer"
            src="/assets/logo.png"
            alt="Logo"
          />
        </div>

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

        <div className="hidden md:flex items-center gap-4">
          <div className="relative" ref={profileRef}>
            {/* Avatar */}
            <button
              onClick={() => user && setProfileOpen(!profileOpen)}
              className="relative group"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full transition-all duration-700 ${
                  profileOpen
                    ? "opacity-100 blur-md scale-110"
                    : "opacity-0 group-hover:opacity-60 blur-sm"
                }`}
              ></div>
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/80 transition-transform duration-300 group-hover:scale-105">
                {user ? (
                  <img
                    src={user?.photoURL}
                    alt="user"
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName}&background=7c3aed&color=fff`)
                    }
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <FaUser className="text-gray-400" />
                  </div>
                )}
              </div>
              {/* Online dot */}
              {user && (
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white z-10"></span>
              )}
            </button>

            {/* ========== DROPDOWN ========== */}
            {profileOpen && (
              <div className="absolute right-0 top-[60px] z-50">
                {/* Arrow */}
                <div className="absolute -top-2 right-4 w-4 h-4 bg-[#1a1a2e] rotate-45 border-l border-t border-white/10"></div>

                <div
                  className="w-[300px] bg-[#1a1a2e] rounded-2xl border border-white/[0.08] overflow-hidden"
                  style={{
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
                    animation: "dropIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Top section */}
                  <div className="p-5 pb-4">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar */}
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden ring-1 ring-white/10">
                          <img
                            src={user?.photoURL}
                            alt={user?.displayName}
                            className="w-full h-full object-cover"
                            onError={(e) =>
                              (e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName}&background=7c3aed&color=fff&size=56`)
                            }
                          />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-[2.5px] border-[#1a1a2e]"></span>
                      </div>

                      {/* Name & Email */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-white font-semibold text-[15px] truncate">
                            {user?.displayName || "No Name"}
                          </h4>
                          {user?.emailVerified && (
                            <GoVerified className="text-cyan-400 text-sm shrink-0" />
                          )}
                        </div>
                        <p className="text-white/40 text-[13px] truncate mt-0.5">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.06] mx-3"></div>

                  {/* Menu items */}
                  <div className="p-2">
                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors duration-200 group/item cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                        <IoPersonOutline className="text-violet-400 text-[15px]" />
                      </div>
                      <span className="text-white/70 text-[13px] font-medium flex-1 group-hover/item:text-white transition-colors">
                        View Profile
                      </span>
                      <IoChevronForward className="text-white/20 text-sm group-hover/item:text-white/40 transition-colors" />
                    </Link>

                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors duration-200 group/item cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <IoMailOutline className="text-cyan-400 text-[15px]" />
                      </div>
                      <span className="text-white/70 text-[13px] font-medium flex-1 group-hover/item:text-white transition-colors">
                        {user?.emailVerified
                          ? "Email Verified"
                          : "Verify Email"}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          user?.emailVerified
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}
                      >
                        {user?.emailVerified ? "DONE" : "PENDING"}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors duration-200 group/item cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                        <IoFingerPrintOutline className="text-pink-400 text-[15px]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-white/70 text-[13px] font-medium group-hover/item:text-white transition-colors block">
                          User ID
                        </span>
                        <span className="text-white/25 text-[11px] font-mono truncate block">
                          {user?.uid}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.06] mx-3"></div>

                  {/* Logout */}
                  <div className="p-2">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-500/[0.08] transition-colors duration-200 group/item cursor-pointer w-full"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <IoLogOutOutline className="text-red-400 text-[15px]" />
                      </div>
                      <span className="text-red-400/70 text-[13px] font-medium group-hover/item:text-red-400 transition-colors">
                        Sign Out
                      </span>
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3 bg-white/[0.02]">
                    <p className="text-white/15 text-[11px] text-center">
                      Joined{" "}
                      {user?.metadata?.creationTime
                        ? new Date(
                            user.metadata.creationTime,
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* ========== END DROPDOWN ========== */}
          </div>

          {/* Login/Logout Button */}
          {user ? (
            <Link
              onClick={handleLogout}
              to="/"
              className="relative px-8 py-3 font-semibold text-white bg-slate-900 rounded-full overflow-hidden group border border-slate-700 hover:border-cyan-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              <span className="absolute inset-[-2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></span>
              <span className="relative flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Log out
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
          ) : (
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
          )}
        </div>

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
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
          {["Home", "About", "Career"].map((item, index) => (
            <li
              key={item}
              className="hover:text-cyan-600 cursor-pointer transition-colors duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4 pb-6 px-6">
          {user ? (
            <div className="w-full bg-[#1a1a2e] rounded-2xl p-5 border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/10"
                  onError={(e) =>
                    (e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName}&background=7c3aed&color=fff`)
                  }
                />
                <div className="min-w-0">
                  <h4 className="text-white font-semibold text-sm truncate">
                    {user?.displayName}
                  </h4>
                  <p className="text-white/40 text-xs truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="flex-1 py-2.5 bg-violet-600 text-white text-sm font-medium rounded-xl text-center active:scale-95 transition-transform"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex-1 py-2.5 bg-white/5 text-red-400 text-sm font-medium rounded-xl border border-white/10 active:scale-95 transition-transform"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/auth/login"
              onClick={() => setOpen(false)}
              className="px-8 py-3 font-semibold text-white bg-slate-900 rounded-full border border-slate-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Animation keyframe */}
      <style>{`
        @keyframes dropIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
