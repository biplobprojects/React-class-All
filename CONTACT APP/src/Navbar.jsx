import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/home" className="navbar-brand">
          CONTACT APP
        </a>

        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-list">
              <Link to="/home"className="nav-link" >HOME </Link>
            </li>
            <li className="nav-list">
              <Link to="/about"className="nav-link" > ABOUT</Link>
            </li>
            <li className="nav-list">
              <Link to="contact" className="nav-link">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
