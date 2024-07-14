import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const PTSDService = () => {
  return (
    <div>
      <Helmet>
        <title>Post Traumatic Stress Disorder - Unicare Psychiatry</title>
        <meta name="description" content="Post Traumatic Stress Disorder" />
        <meta
          name="keywords"
          content="Post Traumatic Stress Disorder, PTSD, What is Post-Traumatic Stress Disorder?, Unicare, Unicare Psychiatry"
        />
      </Helmet>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Post Traumatic Stress Disorder
          </h3>
        </div>
        <div className="p-0 m-0 g-0 PTSD-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Post-traumatic stress disorder (PTSD) is a mental health problem you
            may develop after experiencing traumatic events.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                What is Post Traumatic Stress Disorder
              </p>
              Post-traumatic stress disorder (PTSD) is a mental health issue
              that may arise following exposure to traumatic events. These
              experiences can vary widely, from domestic violence to combat,
              natural disasters, car accidents, or sexual assault. It's
              important to note that PTSD can also stem from seemingly
              non-dangerous events, such as the sudden and unexpected death of a
              loved one.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/PTSD-1.jpg"
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
            <p className="f-22-b text-primary">Symptoms of PTSD include:</p>

            <ul>
              <li className="f-18-n">
                Flashbacks, where individuals feel as though they are reliving
                the traumatic event.
              </li>
              <li className="f-18-n">Nightmares</li>
              <li className="f-18-n">Frightening thoughts </li>
              <li className="f-18-n">Feeling constantly tense or "on edge"</li>
              <li className="f-18-n">Difficulty sleeping</li>
              <li className="f-18-n">Angry outbursts</li>
              <li className="f-18-n">
                Trouble remembering key aspects of the traumatic event
              </li>
              <li className="f-18-n">
                Negative thoughts about oneself or the world
              </li>
              <li className="f-18-n">Feelings of blame and guilt</li>
              <li className="f-18-n">
                Loss of interest in previously enjoyed activities
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-right"
            className="col-md-6 col-12 p-3 order-1 order-md-1"
          >
            <img
              className="img-fluid shadow-plus-border"
              src="Images/PTSD2.jpg"
              alt="picture"
            />
          </div>
        </div>
        <hr className="container my-5 line" />

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                Treatment for Post-Traumatic Stress Disorder
              </p>
              At Unicare Psychiatry, our providers conduct thorough mental
              health screenings and perform comprehensive psychiatric
              evaluations to tailor a personalized treatment plan for you. If
              you're struggling with PTSD, don't hesitate to seek help. Contact
              Unicare Psychiatry today to schedule an appointment.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/PTSD3.jpg"
                alt="picture"
              />
            </div>
          </div>
        </div>
        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="PTSD-image-container h-100 w-100">
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

export default PTSDService;
