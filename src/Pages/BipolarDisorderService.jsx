import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";

const BipolarDisorderService = () => {
  return (
    <div>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Bipolar Disorder
          </h3>
        </div>
        <div className="p-0 m-0 g-0 biopolar-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Bipolar disorder (formerly called manic-depressive illness or manic
            depression) is a mental illness that causes unusual shifts in a
            person’s mood, energy, activity levels, and concentration. These
            shifts can make it difficult to carry out day-to-day tasks.
          </p>
        </div>

        <div data-aos="fade-left" className="container my-lg-5 my-3">
          <p className="div-heading">
            Bipolar Disorder Diagnoses And Treatment at Unicare Psychiatry?
          </p>
          <p className="f-18-n">
            At Unicare psychiatry, we spend time discussing your symptoms,
            concerns, and medical history to pinpoint the specific type of
            bipolar disorder you have. Our providers may also recommend
            cognitive testing to assess your mental functioning. We work with
            you as a partner to create a personalized treatment plan based on
            your needs, focusing your mental, physical and spiritual needs. For
            details schedule an appointment online today.
          </p>
        </div>
        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="biopolar-image-container h-100 w-100">
              <div className="col-12 py-5">
              <h2 className="f-35-b text-primary text-center">Schedule An Appointment </h2>
              </div>
              <div className="row my-5">
              <div className="d-flex justify-content-center align-items-center">
              <NavLink className="btn button-primary" to="/book-an-appointment">
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

export default BipolarDisorderService;
