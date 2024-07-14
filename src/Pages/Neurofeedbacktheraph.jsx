import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
const Neurofeedbacktheraph = () => {
  return (
    <div>
      <Helmet>
        <title>Neurofeedback Therapy - Unicare Psychiatry</title>
        <meta name="description" content="U Neurofeedback Therapy" />
        <meta
          name="keywords"
          content="Neurofeedback Therapy, What is Neurofeedback Therapy?, Unicare, Unicare Psychiatry, Psychiatry"
        />
      </Helmet>

      <div className="depression-container">
        <div className="depression-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Neurofeedback Therapy
          </h3>
        </div>
        <div className="p-0 m-0 g-0 Neurofeedback-container-banner overflow-hidden"></div>
        <div className="depression-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Neurofeedback, also known as EEG (electroencephalogram) biofeedback,
            is a therapeutic intervention that offers immediate feedback through
            a computer-based program assessing a client’s brainwave activity.
            Using auditory or visual signals, the program helps patients
            recognize their thought patterns and encourages them to modify them.
            Through this process, clients can learn to regulate and enhance
            their brain function, potentially alleviating symptoms of various
            neurological disorders and mental health conditions.
          </p>
        </div>

        <div className="">
          <div className="container my-5">
            <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
              <div
                data-aos="fade-left"
                className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
              >
                <p className="f-22-b text-primary">When It's Used</p>
                <p className="f-18-n">
                  Neurofeedback can be beneficial in treating a variety of
                  conditions, including:
                </p>
                <ul>
                  <li className="f-18-n">
                    ADHD (including seizure conditions)
                  </li>
                  <li className="f-18-n">
                    Brain injury (including insomnia and sleep problems)
                  </li>
                  <li className="f-18-n">Anxiety (as well as depression)</li>
                  <li className="f-18-n">
                    PTSD (and age-related cognitive decline)
                  </li>
                  <li className="f-18-n">
                    Behavioral disorders (alongside developmental delays)
                  </li>
                </ul>
                <p className="f-18-b my-4">
                Contact Unicare Psychiatry today to schedule an appointment
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="col-md-6 col-12 f-18-n order-1 order-md-2"
              >
                <img
                  className="img-fluid  shadow-plus-border"
                  src="Images/Neurofeedback2.jpg"
                  alt="picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="container line my-5" />
      <div className="p-0 m-0 overflow-hidden">
        <div className="d-flex">
          <div className="Neurofeedbacks-image-container h-100 w-100">
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
      <Footer />
    </div>
  );
};

export default Neurofeedbacktheraph;
