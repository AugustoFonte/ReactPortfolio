import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

function Navbar() {
  return (
    <nav>
      <div>
        <Link  to="/">
          <img src={logo} alt="" className="w-32" />
        </Link>

        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/carlist">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/about">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;