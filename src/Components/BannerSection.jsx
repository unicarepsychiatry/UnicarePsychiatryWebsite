import React from "react";
import { NavLink } from "react-router-dom";

function BannerSection() {
  return (
    <section className="overflow-hidden m-0 p-0 slider_section long_section">
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row m-auto">
                <div className="col-md-12">
                  <div className="detail-box d-flex justify-content-center  flex-column">
                      <div className="climb-higher-text ">

                      <span className="climb-higher-text font-italic">
                        <span className="text-pink">Earn,</span> <span className="text-secondary">Learn</span> <br />{" "}
                      </span>{" "}
                      <span className="text-primary">
                        & {" "}
                      </span>
                      <span>
                      <span className="text-secondary">Climb Higher</span>
                        <br /> 
                        <span className="text-primary">{" "}With{" "}</span>
                      </span>
                      <span className="text-pink">Unicare</span>
                      <br />
                      </div>
                    <p
                      className="f-22-n text-primary"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      Schedule a complimentary 15-minute consultation <br/>for more information. 
                    </p>
                    <div className="">
                      <NavLink
                        className="button button-primary text-white"
                        to="book-an-appointment"
                      >
                        Schedule an Appointment
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
