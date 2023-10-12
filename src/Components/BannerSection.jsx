import React from "react";
import {NavLink} from 'react-router-dom'


function BannerSection() {
  return (
    <section className="slider_section long_section">
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1 className="primary-color">
                      IMPROVE <br />
                      YOUR COLLECTIONS WITH
                    </h1>
                    <p
                      className="f-18-n secondary-color"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      The Best Medical Billing Services in the USA!
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
          
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1 className="primary-color">
                      IMPROVE <br />
                      YOUR COLLECTIONS WITH
                    </h1>
                    <p
                      className="f-18-n secondary-color"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      The Best Medical Billing Services in the USA!
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

          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1 className="primary-color">
                      IMPROVE <br />
                      YOUR COLLECTIONS WITH
                    </h1>
                    <p
                      className="f-18-n secondary-color"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      The Best Medical Billing Services in the USA!
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
