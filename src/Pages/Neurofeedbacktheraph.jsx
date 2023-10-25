import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
const Neurofeedbacktheraph = () => {
  return (
    <div>
      <Helmet>
        <title>Neurofeedback Therapy - Unicare Psychiatry</title>
        <meta name="description" content="Unicare, Unicare Psychiatry" />
        <meta
          name="keywords"
          content="What is Neurofeedback Therapy?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
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
            is a therapeutic intervention that provides immediate feedback from
            a computer-based program that assesses a client’s brainwave
            activity. The program uses auditory or visual signals to help
            patients recognize their thought patterns and try to modify them.
            Through this process, clients can learn to regulate and improve
            their brain function and hopefully alleviate symptoms of various
            neurological disorders and mental health conditions
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
                  Neurofeedback can help treat many different conditions,
                  including:
                </p>
                <ul>
                  <li className="f-18-n">ADHD (Seizure conditions)</li>
                  <li className="f-18-n">
                    Brain injury (Insomnia and sleep problems)
                  </li>
                  <li className="f-18-n">Anxiety (Depression)</li>
                  <li className="f-18-n">PTSD (Age-related cognitive loss)</li>
                  <li className="f-18-n">
                    Behavior disorders (Developmental delays)
                  </li>
                </ul>
                <p className="f-18-b my-4">
                Contact Unicare Psychiatry today for appointment.
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
