import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import HomeLayout from "../../Components/HomeLayout/LeftAsaide";
import RightAsaide from "../../Components/HomeLayout/RightAsaide";

const Home = () => {
  return (
    <>
      <div>
        <header>
          <Header></Header>
          <nav>
            <Navbar></Navbar>
          </nav>
        </header>
        <main
          className="max-w-7xl mx-auto w-11/12 my-8 
                 grid grid-cols-1 md:grid-cols-12 gap-4  "
        >
          {/* Left Sidebar */}
          <aside className="md:col-span-3">
            <HomeLayout />
          </aside>

          {/* Main Content */}
          <section className="md:col-span-6">
            <Outlet />
          </section>

          {/* Right Sidebar */}
          <aside className="md:col-span-3">
            <RightAsaide />
          </aside>
        </main>
      </div>
    </>
  );
};

export default Home;
