import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  return (
    <nav>
      <div>
        <ul className="menu" >
          <li>
            <Link className="link" to="/">HOME</Link>
          </li>
          <li>
            <Link className="link" to="/resume">RESUME</Link>
          </li>
          <li>
            <Link className="link" to="/about">PORTFOLIO</Link>
          </li>
          <li>
            <Link className="link" to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;