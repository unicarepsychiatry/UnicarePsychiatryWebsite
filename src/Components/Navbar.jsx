import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img className="img-fluid logo" src="../Images/logo1.png" />
        </NavLink>
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
                <i className="bi bi-gear-wide-connected px-1"></i> Services
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
                  to="/Neurofeedback-Therapy"
                >
                  Neurofeedback Therapy
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
                  to="/Hypnotherapy-service"
                >
                  Hypnotherapy
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
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu-active nav-link f-18-n dropdown-item"
                      : "nav-link f-18-n dropdown-item"
                  }
                  to="/Psychiatric-services-for-geriatric-Population"
                >
                  Psychiatric services for geriatric Population
                </NavLink>
              </div>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-active nav-link" : "nav-link"
                }
                to="/contact-us"
              >
                <i className="bi bi-telephone-fill px-1"></i> contact us
              </NavLink>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://practice.kareo.com/unicarepsychiatry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-calendar-fill px-1"></i> Appointment
              </a>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-active nav-link" : "nav-link"
                }
                to="/Our-Associates"
              >
                <i className="bi bi-people-fill"></i> Associates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "menu-active nav-link" : "nav-link"
                }
                to="/about-us"
              >
                <i className="bi bi-book-half"></i> about us
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
    <i class="bi bi-star-fill"></i> Reviews
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <a
      className="nav-link"
      href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LMsuLDCOt0wzYLRSNaiwsDAxMjFNTTO3TDY3NU5OszKoSLIwSk0xNTAySjMzNTYwTvYSKs3LTE4sSlUoKK5MzshMLCmqBAAQAxZs&q=unicare+psychiatry&oq=unicare+ps&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1NDkxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x884245ef79c753cf:0xb82ed5022f65303c,1,,,," 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Google
    </a>
    {/* Other dropdown links go here */}
  </div>
</li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
