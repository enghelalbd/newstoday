import React from "react";
import { Outlet } from "react-router";
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

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12  *:border">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        <section className="main col-span-6">
          <Outlet> </Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Homelayout;
