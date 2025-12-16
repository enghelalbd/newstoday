import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latestnews from "../Components/Latestnews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/Homelayout/LeftAside";
import RightAside from "../Components/Homelayout/RightAside";

const Homelayout = () => {
  return (
    <div>
      <header>
        {" "}
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <Latestnews></Latestnews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-3">
        <aside>
          <LeftAside></LeftAside>
        </aside>

        <section className="main">
          <Outlet> </Outlet>
        </section>
        <aside>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Homelayout;
