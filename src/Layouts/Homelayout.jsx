import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latestnews from "../Components/Latestnews";

const Homelayout = () => {
  return (
    <div>
      <header>
        {" "}
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <Latestnews></Latestnews>
        </section>
      </header>

      <main>
        <section className="left-nav"> </section>

        <section className="main">
          {" "}
          <Outlet> </Outlet>{" "}
        </section>
        <section className="right-nav"> </section>
      </main>
    </div>
  );
};

export default Homelayout;
