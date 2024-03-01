import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="f-18-n primary-color">Connect with Us on</span>
          </div>
          {/* <div className="social-icons">
            <a
              data-aos="fade-up"
              href="https://www.facebook.com"
              className="me-4 text-reset"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              data-aos="fade-up"
              href="https://www.x.com"
              className="me-4 text-reset"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              data-aos="fade-up"
              href="https://www.instagram.com"
              className="me-4 text-reset"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              data-aos="fade-up"
              href="https://www.linkedin.com/in/followyourheartnp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="me-4 text-reset"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div> */}
        </section>
        <section className="">
          <div className="container-fluid text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4  col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <NavLink className="navbar-brand" to="/">
                    <img className="img-fluid logo" src="../Images/logo1.png" />
                  </NavLink>
                </h6>
                <p
                  data-aos="fade-down"
                  className="custom-text-alignment f-18-n"
                >
                  Our mission is to deliver exceptional patient care while
                  empowering newly graduated nurse practitioners, equipping them
                  with the resources to harness UniCare, where love serves as
                  the universal remedy.
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="col-md-4  col-xl-4 mx-auto mb-md-0 mb-4"
              >
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

                <p className="f-18-n social-icon">
                  <i className="bi bi-envelope-fill"></i>
                  <a
                    style={{
                      // color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    href="mailto:unicarepsychiatry@gmail.com"
                    className="f-18-t ml-5"
                  >
                    unicarepsychiatry@gmail.com
                  </a>
                </p>
                <p className="f-18-n social-icon">
                  <i className="bi bi-chat-dots-fill"></i>
                  <a
                    style={{
                      // color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    href="sms:+16066890657"
                    className="f-18-t ml-5"
                  >
                    606-689-0657
                  </a>
                </p>
{/* 
                <p className="f-18-n social-icon">
                  <i className="bi bi-telephone-fill"></i>
                  <a
                    style={{
                      // color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    href="tel:+16066890657"
                    onClick={() => {
                      alert("Calling 606-689-0657...");
                    }}
                    className="f-18-t ml-5"
                  >
                    606-689-0657
                  </a>
                </p> */}

                <p className="f-18-n social-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                  <a
                    style={{
                      // color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    href="https://www.google.com/maps/search/?api=1&query=407%20N.%20Broadway%20Lexington,%20KY%2040508-1301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="f-18-t ml-5"
                  >
                    407 N. Broadway Lexington, KY 40508
                  </a>
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="col-md-4  col-xl-4 mx-auto mb-4 d-md-block d-none"
              >
                <h6 className="text-uppercase fw-bold mb-4">Our Office</h6>
                <img
                  className="img-fluid rounded rounded-5"
                  src="/Images/map.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4 text-white"
          style={{ backgroundColor: "#91278f" }}
        >
          © {date} Copyright:
          <a className="text-reset px-3 fw-bold" href="/">
            unicarepsychiatry.com
          </a>
        </div>
      </footer>
    </div>
  );
};
