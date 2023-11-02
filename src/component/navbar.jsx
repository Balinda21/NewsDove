import React, { useState } from "react";
// import {FaBar} from 'react-icons/fa'
import Button from "./button";
import { Link, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  console.log("MENU OPEN", mobileMenuOpen);
  return (
    <nav>
      <h1 className="bird">NewsBird</h1>
      <ul className="desktop-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/login">Logout</Link>
      </ul>

      <ul
        className={`mobile-menu ${mobileMenuOpen === false ? " hidden" : ""}`}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>

        <div
          onClick={() => {
            localStorage.removeItem("token");
            // navigate("/login");
          }}
        >
          Logout
        </div>
      </ul>

      <span className="menu">
        <span
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          <i>
            <TiThMenu className="menu" />
          </i>
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
