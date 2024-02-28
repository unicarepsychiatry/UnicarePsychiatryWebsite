import React from "react";
import { NavLink } from "react-router-dom";
import { OurServicesCard } from "./OurServicesCard";

export const OurServices = () => {
  return (
    <div>
      <div
        className="div-padding purple-bg mb-lg-5 mb-3"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <div className="container">
          <div className=" row my-md-5 my-2" data-aos="flip-left">
            <h3 className="d-flex justify-content-center div-heading text-text-uppercase px-2 overflow-hidden">
            Explore Our Range of Services
            </h3>
          </div>
          <div className="container">
            <div className="row">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Depression-service"
              >
                <OurServicesCard
                  title={"Depression"}
                  pic={"/Images/frontimage.jpeg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Anxiety-service"
              >
                <OurServicesCard
                  title={"Anxiety Disorder"}
                  pic={"/Images/anxiety.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Bipolar-Disorder-service"
              >
                <OurServicesCard
                  title={"Bipolar Disorder"}
                  pic={"/Images/sad.webp"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Early-Childhood-traumas-service"
              >
                <OurServicesCard
                  title={"Early Childhood traumas"}
                  pic={"/Images/caleb-woods-VZILDYoqn_U-unsplash.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Phobias-service"
              >
                <OurServicesCard
                  title={"Phobias"}
                  pic={"/Images/Phobia2.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/PTSD-service"
              >
                <OurServicesCard title={"PTSD"} pic={"/Images/PTSD.jpg"} />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/OCD-service"
              >
                <OurServicesCard title={"OCD"} pic={"/Images/signs-of-ocd.webp"} />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/ADHD-service"
              >
                <OurServicesCard
                  title={"ADHD"}
                  pic={"/Images/depressioninsidepic.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Alcohol-Use-Disorder-service"
              >
                <OurServicesCard
                  title={"Alcohol Use Disorder"}
                  pic={"/Images/Alcohol1.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Medication-Management"
              >
                <OurServicesCard
                  title={"Medication Management"}
                  pic={"/Images/myriam-zilles-KltoLK6Mk-g-unsplash.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Opioid-Use-Disorder"
              >
                <OurServicesCard
                  title={"Opioid Use Disorder"}
                  pic={"/Images/Opioid2.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-3 col-6 g-2"}
                to="/Substance-Induce-Psychiatric-problems"
              >
                <OurServicesCard
                  title={"Substance-Induced Psychiatric Problems"}
                  pic={"/Images/Drug4.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-4 col-6 g-2"}
                to="/Neurofeedback-Therapy"
              >
                <OurServicesCard
                  title={"Neurofeedback Therapy"}
                  pic={"/Images/Neurofeedback1.jpeg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-4 col-6 g-2"}
                to="/Psychiatric-services-for-geriatric-Population"
              >
                <OurServicesCard
                  title={"Psychiatric Services for the Geriatric Population"}
                  pic={"/Images/geriatric.jpg"}
                />
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                className={"col-md-4 col-6 g-2"}
                to="/Hypnotherapy-service"
              >
                <OurServicesCard
                  title={"Hypnotherapy"}
                  pic={"/Images/Hypnotherapy1.JPG"}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
