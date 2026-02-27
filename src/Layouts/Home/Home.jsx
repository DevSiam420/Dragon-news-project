import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <>
      <div>
        <header>
          <Header></Header>
        </header>
        <main>
          <section className="left-section"></section>
          <section>
            <Outlet></Outlet>
          </section>
          <section className="right-section"></section>
        </main>
      </div>
    </>
  );
};

export default Home;
