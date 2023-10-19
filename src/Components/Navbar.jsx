import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
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
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Depression-service"
                >
                  Depression
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Anxiety-service"
                >
                  Anxiety
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Bipolar-Disorder-service"
                >
                  Bipolar Disorder
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Phobias-service"
                >
                  Phobias
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/ADHD-service"
                >
                  ADHD
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/PTSD-service"
                >
                  PTSD
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/OCD-service"
                >
                  OCD
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Early-Childhood-traumas-service"
                >
                  Early Childhood traumas
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Alcohol-Use-Disorder-service"
                >
                  Alcohol Use Disorder
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Medication-Management"
                >
                  Medication Management
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Opioid-Use-Disorder"
                >
                  Opioid Use Disorder
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Substance-Induce-Psychiatric-problems"
                >
                  Substance Induce Psychiatric problems
                </NavLink>
              </div>
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
            <div className="my-md-0 my-sm-4 nav-item">
              <NavLink className="btn button-primary" to="/book-an-appointment">
                Book Appointment
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
