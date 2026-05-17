import React from "react";

import user from "../assets/user.png";
import About from "../Page/About";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className=" flex gap-2 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/carrer"> Carrer</NavLink>
      </div>
      <div className="login-btn flex gap-2">
        <img src={user} alt=""></img>
        <button className="btn bg-amber-300">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
