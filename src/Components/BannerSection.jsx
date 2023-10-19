import React from "react";
import {NavLink} from 'react-router-dom'


function BannerSection() {
  return (
    <section className="overflow-hidden m-0 p-0 slider_section long_section">
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row m-auto">
                <div className="col-md-12">
                  <div className="detail-box d-flex justify-content-center align-items-center flex-column">
                    <h1 className="secondary-color text-center">
                      LEARN EARN & REACH<br />
                    </h1>
                    <p
                      className="f-18-n primary-color"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      Book Appointment Today!
                    </p>
                    <div className="">
                     <NavLink
                        className="button button-primary text-white"
                        to="contact-us"
                      >
                        Contact-us
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="container ">
              <div className="row m-auto">
                <div className="col-md-12">
                  <div className="detail-box d-flex justify-content-center align-items-center flex-column">
                    <h1 className="secondary-color text-center">
                      LEARN EARN & REACH<br />
                    </h1>
                    <p
                      className="f-18-n primary-color"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      Book Appointment Today!
                    </p>
                    <div className="">
                     <NavLink
                        className="button button-primary text-white"
                        to="contact-us"
                      >
                        Contact-us
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="container ">
              <div className="row m-auto">
                <div className="col-md-12">
                  <div className="detail-box d-flex justify-content-center align-items-center flex-column">
                    <h1 className="secondary-color text-center">
                      LEARN EARN & REACH<br />
                    </h1>
                    <p
                      className="f-18-n primary-color"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      Book Appointment Today!
                    </p>
                    <div className="">
                     <NavLink
                        className="button button-primary text-white"
                        to="contact-us"
                      >
                        Contact-us
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}

export default BannerSection;
