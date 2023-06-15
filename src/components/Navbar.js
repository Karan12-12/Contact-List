import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar  navbar-dark bg-dark py-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ml-5 ">
          Home
        </Link>
        <h2 className="text-white mx-auto p-2">Contact List</h2>
      </div>
    </nav>
  );
};

export default Navbar;
