import React from "react";

export const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="f-18-n primary-color">Get Connected us on</span>
          </div>
          <div className="social-icons">
            <a data-aos="fade-up" href="" className="me-4 text-reset">
              <i className="bi bi-facebook"></i>
            </a>
            <a data-aos="fade-up" href="" className="me-4 text-reset">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a data-aos="fade-up" href="" className="me-4 text-reset">
              <i className="bi bi-instagram"></i>
            </a>
            <a data-aos="fade-up" href="" className="me-4 text-reset">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <a className="navbar-brand" href="#">
                    <img className="img-fluid logo" src="../Images/logo1.png" />
                  </a>
                </h6>
                <p data-aos="fade-down">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-md-block d-none"
              >
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Our Mission
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Our Vision
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Contact us
                  </a>
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
              >
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

                <p>
                  <i className="bi bi-envelope"></i>
                  Unicarepsychiatry@gmail.com
                </p>
                <p>
                  <i className="bi bi-send"></i>
                  859 972-0836
                </p>
                <p>
                  <i className="bi bi-telephone-fill"></i>
                  606 689-0657
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  407 N. Broadway Lexington, KY 40508-1301
                </p>
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
