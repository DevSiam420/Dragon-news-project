import React, { useContext } from "react";
import { MdEmail, MdVerified, MdPhone } from "react-icons/md";
import {
  FaUser,
  FaSignOutAlt,
  FaEdit,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { AuthContext } from "../Provider/AuthProvider";

const UserDetails = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        {/* Banner */}
        <div className="h-28 bg-gradient-to-r from-primary to-secondary rounded-t-2xl relative">
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="avatar online">
              <div className="w-24 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-2">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  onError={(e) =>
                    (e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName}&background=6419E6&color=fff&size=96`)
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="card-body items-center text-center pt-16">
          {/* Name */}
          <h2 className="card-title text-2xl font-bold flex items-center gap-2">
            {user?.displayName || "No Name"}
            {user?.emailVerified && (
              <MdVerified className="text-info text-xl" />
            )}
          </h2>

          {/* Email Badge */}
          <div
            className={`badge gap-1 ${user?.emailVerified ? "badge-success" : "badge-error"} badge-outline`}
          >
            {user?.emailVerified ? "Verified" : "Not Verified"}
          </div>

          <div className="divider my-2"></div>

          {/* Info List */}
          <div className="w-full space-y-3">
            {/* Email */}
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
              <MdEmail className="text-primary text-xl" />
              <div className="text-left">
                <p className="text-xs text-base-content/50">Email</p>
                <p className="text-sm font-medium">{user?.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
              <MdPhone className="text-primary text-xl" />
              <div className="text-left">
                <p className="text-xs text-base-content/50">Phone</p>
                <p className="text-sm font-medium">
                  {user?.phoneNumber || "Not Provided"}
                </p>
              </div>
            </div>

            {/* Provider */}
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
              <FaShieldAlt className="text-primary text-xl" />
              <div className="text-left">
                <p className="text-xs text-base-content/50">Sign-in Provider</p>
                <p className="text-sm font-medium capitalize">
                  {user?.providerData?.[0]?.providerId || "N/A"}
                </p>
              </div>
            </div>

            {/* Created At */}
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
              <FaCalendarAlt className="text-primary text-xl" />
              <div className="text-left">
                <p className="text-xs text-base-content/50">Joined</p>
                <p className="text-sm font-medium">
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )
                    : "N/A"}
                </p>
              </div>
            </div>

            {/* UID */}
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
              <HiIdentification className="text-primary text-xl" />
              <div className="text-left overflow-hidden">
                <p className="text-xs text-base-content/50">User ID</p>
                <p className="text-xs font-mono truncate">{user?.uid}</p>
              </div>
            </div>
          </div>

          <div className="divider my-2"></div>

          {/* Buttons */}
          <div className="card-actions w-full flex gap-3">
            <button className="btn btn-primary flex-1 gap-2">
              <FaEdit />
              Edit Profile
            </button>
            <button
              onClick={logOut}
              className="btn btn-outline btn-error flex-1 gap-2"
            >
              <FaSignOutAlt />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
