import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";

const AlcoholUseDisorder = () => {
  return (
    <div>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Alcohol Use Disorder
          </h3>
        </div>
        <div className="p-0 m-0 g-0 Alcohol-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Alcohol-use disorder (AUD) is a problematic pattern of alcohol use
            leading to significant impairment or distress. Unhealthy alcohol use
            includes the spectrum of at-risk drinking and alcohol-use disorders.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                About Post Traumatic Stress Disorder
              </p>
              Alcohol use disorder (AUD) is a medical condition characterized by
              an impaired ability to stop or control alcohol use despite adverse
              social, occupational, or health consequences.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Alcohol2.jpg"
                alt="picture"
              />
            </div>
          </div>
        </div>

        <hr className="container my-5 line" />
        <div className="d-flex container flex-md-row flex-column justify-content-center align-items-center">
          <div
            data-aos="fade-left"
            className="col-md-6  my-5 col-12  order-2 order-md-2"
          >
            <p className="f-22-b text-primary">
              Treatment of Alcohol Use Disorder
            </p>

            <p className="fa-18-b">
              If you have a concern that you have AUD, you can contact unicare
              psychiatry. The expert providers will provide you the best
              treatment. We create a best treatment plan for Alcohol Use
              Disorder patients. Don’t hesitate to seek help for Alcohol Use
              Disorder. Contact Unicare Psychiatry today for appointment.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="col-md-6 col-12 p-3 order-1 order-md-1"
          >
            <img
              className="img-fluid shadow-plus-border"
              src="Images/Alcohol3.jpg"
              alt="picture"
            />
          </div>
        </div>
        
        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="Alcohol-image-container h-100 w-100">
              <div className="col-12 py-5">
                <h2 className="f-35-b text-white text-center">
                  Schedule An Appointment{" "}
                </h2>
              </div>
              <div className="row my-5">
                <div className="d-flex justify-content-center align-items-center">
                  <NavLink
                    className="btn button-primary"
                    to="/book-an-appointment"
                  >
                    Book Appointment
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AlcoholUseDisorder;
