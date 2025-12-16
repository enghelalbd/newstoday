import React from "react";
import { NavLink } from "react-router-dom";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="nav flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/career"> Carrer</NavLink>
      </div>
      <div className="login-btn flex gap-2">
        <img src={user} alt=""></img>
        <button className="btn bg-amber-300">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
