import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="img-fluid logo" src="../Images/logo1.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-active nav-link" : "nav-link"
                }
                to="/"
              >
                <i className="bi bi-house-door-fill px-1"></i> Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-active nav-link" : "nav-link"
                }
                to="/contact-us"
              >
                <i className="bi bi-telephone-fill px-1"></i> contact us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-active nav-link" : "nav-link"
                }
                to="/about-us"
              >
               <i className="bi bi-chat-dots-fill px-1"></i> about us
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-gear-wide-connected px-1"></i> Servicse
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  service1
                </a>
                <a className="dropdown-item" href="#">
                  service2
                </a>
                {/* <div className="dropdown-divider"></div> */}
                <a className="dropdown-item" href="#">
                  service3
                </a>
              </div>
            </li>
            <li className="nav-item">
              <button className="btn button-primary">Book Appointment</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
