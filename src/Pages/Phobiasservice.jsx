import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
const Phobiasservice = () => {
  return (
    <div>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            PHOBIAS
          </h3>
        </div>
        <div className="p-0 m-0 g-0 PHOBIAS-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            className="p-3 custom-padding custom-text-alignment"
          >
            A phobia is a persistent, excessive, unrealistic fear of an object,
            person, animal, activity or situation. It is a type of anxiety
            disorder.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">What is Phobia</p>A phobia is a
              type of anxiety disorder that causes an individual to experience
              extreme, irrational fear about a situation, living creature,
              place, or object. When a person has a phobia, they will often
              shape their lives to avoid what they consider to be dangerous. The
              imagined threat is greater than any actual threat posed by the
              cause of terror.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Phobia6.jpg"
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
            <p className="f-22-b text-primary">Symptoms of Phobias</p>

            <ul>
              <p className="f-18-b">
                A person with a phobia will experience the following symptoms.
                They are common across the majority of phobias:
              </p>
              <li className="f-18-n">
                Sensation of uncontrollable anxiety when exposed to the source
                of fear.
              </li>
              <li className="f-18-n">Nightmares</li>
              <li className="f-18-n">
                Feeling that the source of that fear must be avoided at all
                costs.
              </li>
              <li className="f-18-n">
                Not being able to function properly when exposed to the trigger.
              </li>
              <li className="f-18-n">
                Sensation of uncontrollable anxiety when exposed to the source
                of fear.
              </li>
              <li className="f-18-n">
                Acknowledgment that the fear is irrational, unreasonable, and
                exaggerated, combined with an inability to control the feelings.
              </li>
            </ul>
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
        <hr className="container my-5 line" />

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">Treatment of Phobias</p>
              Phobias are highly treatable, Unicare Psychiatry providers are
              experts to deal with phobias, Don’t hesitate to seek help for
              Phobias. Contact Unicare Psychiatry today for appointment.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Phobia1.jpg"
                alt="picture"
              />
            </div>
          </div>
        </div>
        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="PHOBIAS-image-container h-100 w-100">
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

export default Phobiasservice;
