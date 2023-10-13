import React from "react";
import { NavLink } from "react-router-dom";
import { OurServicesCard } from "./OurServicesCard";

export const OurServices = () => {
  return (
    <div>
      <div
        className="div-padding purple-bg"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <div className="container">
          <div className=" row my-md-5 my-2" data-aos="flip-left">
            <h3 className="d-flex justify-content-center div-heading text-text-uppercase">
              Take Look On Our Outstanding Services.
            </h3>
          </div>
          <div className="container">
            <div className="d-flex flex-lg-row flex-column">
              <NavLink
                data-aos="zoom-in"
                data-aos-duration="1000"
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-12 m-2"}
                to="free-medical-coding"
              >
                <OurServicesCard title={"Depression"} pic={"/Images/frontimage.jpeg" }/>
                
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-12 m-2"}
                to="medical-billing"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <OurServicesCard title={"Anxiety Disorder"} pic={"/Images/anxiety.jpg" }/>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-12 m-2"}
                to="medical-coding"
              >
                <OurServicesCard title={"Bipolar Disorder"} pic={"/Images/depressioninsidepic.jpg" }/>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-12 m-2"}
                to="medical-scribe-service"
              >
                <OurServicesCard title={"ADHD"} pic={"/Images/sad.webp" }/>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
