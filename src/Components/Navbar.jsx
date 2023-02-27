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
            <Link className="link" to="/about">ABOUT ME</Link>
          </li>
          <li>
            <Link className="link" to="/resume">RESUME</Link>
          </li>
          <li>
            <Link className="link" to="/portfolio">PORTFOLIO</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;