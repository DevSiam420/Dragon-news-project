import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("Current user : ", user, location);
  //    LOADING STATE --
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
  //   IF USER LOGGED IN --
  if (user) {
    return children;
  }
  //   - IF USER NOT LOGGED IN
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivetRoute;
