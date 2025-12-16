import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-shadow-yellow-800 flex justify-center flex-col items-center">
      <img className="  w-[350]" src={logo} alt="" />

      <p className="justify-center"> Journalism Without Fear or Favour</p>

      <p className="text-semibold text-accent">
        {" "}
        {format(new Date(), "EEEE ,MMMM MM ,yyyy")}{" "}
      </p>
    </div>
  );
};

export default Header;
