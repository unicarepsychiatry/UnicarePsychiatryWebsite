import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";

const EarlyChildhoodTraumasService = () => {
  return (
    <div>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Early Childhood Traumas
          </h3>
        </div>
        <div className="p-0 m-0 g-0 Early-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            className="p-3 custom-padding custom-text-alignment"
          >
            These traumas can be the result of intentional violence—such as
            child physical or sexual abuse, or domestic violence—or the result
            of natural disaster, accidents, or war. Young children also may
            experience traumatic stress in response to painful medical
            procedures or the sudden loss of a parent/caregiver.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                About Early childhood trauma
              </p>
              <p className="f-18-n">
                {" "}
                About Early childhood trauma These traumas can be the result of
                intentional violence such as child physical or sexual abuse, or
                domestic violence or the result of natural disaster, accidents,
                or war. many people assume that young age protects children from
                the impact of traumatic experiences. Young children also may
                experience traumatic stress in response to painful medical
                procedures or the sudden loss of a parent/caregiver.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Trauma.jpg"
                alt="picture"
              />
            </div>
          </div>
        </div>

        <hr className="container my-5 line" />
        <div className="d-flex container flex-md-row flex-column justify-content-center align-items-center">
          <div
            data-aos="fade-left"
            className="col-md-6  p-3 my-5 col-12  order-2 order-md-2"
          >
            <p className="f-22-b text-primary">Treatment of Early childhood trauma</p>
            <p className="f-18-n">
            Contact unicare psychiatry for Early childhood trauma. The expert
            providers will provide you the best treatment. We create a best
            treatment plan for Early childhood trauma patients. Don’t hesitate
            to seek help for Early childhood trauma. Contact Unicare Psychiatry
            today for appointment.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="col-md-6 col-12 p-3 order-1 order-md-1"
          >
            <img
              className="img-fluid shadow-plus-border"
              src="Images/Phobia4.jpg"
              alt="picture"
            />
          </div>
        </div>
        
        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="Early-image-container h-100 w-100">
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

export default EarlyChildhoodTraumasService;
