import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Pages/Login";
import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthenticationLayout;
