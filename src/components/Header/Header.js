import React from "react";
import "flowbite";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="md:flex justify-center text-center">
        <Link to="/home">
          <h2 className="mr-10 md:mt-4 md:pt-0 pt-4 font-bold">Home</h2>
        </Link>
        <Link to="/shop">
          <h2 className="mr-10 mt-4 font-bold">Shop</h2>
        </Link>
        <Link to="">
          <h2 className="mr-10 mt-4 font-bold">Services</h2>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
