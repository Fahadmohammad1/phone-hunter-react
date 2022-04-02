import React from "react";
import "flowbite";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="md:flex justify-center text-center">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-emerald-400" : "text-black"
          }
        >
          <h2 className="mr-10 md:mt-4 md:pt-0 pt-4 font-bold">Home</h2>
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-emerald-400" : "text-black"
          }
        >
          <h2 className="mr-10 mt-4 font-bold">Shop</h2>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-emerald-400" : "text-black"
          }
        >
          <h2 className="mr-10 mt-4 font-bold">About us</h2>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
