import React, { Component } from "react";

// we cant use link class outside the router:
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="" className="navbar-brand">
            React Router
          </Link>
          <div className="ml-auto">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/Home" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
