import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Phobiasservice = () => {
  return (
    <div>
      <Helmet>
        <title>PHOBIAS - Unicare Psychiatry</title>
        <meta name="description" content="Unicare, Unicare Psychiatry" />
        <meta
          name="keywords"
          content="What is PHOBIAS?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
        />
      </Helmet>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Phobias
          </h3>
        </div>
        <div className="p-0 m-0 g-0 PHOBIAS-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            className="p-3 custom-padding custom-text-alignment"
          >
            Defined as persistent, excessive, and irrational fears of specific
            objects, people, animals, activities, or situations, phobias
            represent a type of anxiety disorder.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">What is Phobia</p>Phobia,
              categorized as an anxiety disorder, induces intense and irrational
              fear in individuals towards specific situations, living beings,
              places, or objects. Those afflicted often alter their lifestyles
              to evade perceived dangers, despite the actual threat being
              minimal compared to their perceived fear.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Phobia4.jpg"
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
            <p className="f-22-b text-primary">Common Symptoms of Phobias</p>
            <ul>
              <li className="f-18-n">
                Experience of intense anxiety when confronted with the source of
                fear.
              </li>
              <li className="f-18-n">Nightmares</li>
              <li className="f-18-n">
                Persistent avoidance of the feared object or situation.
              </li>
              <li className="f-18-n">
                Impaired ability to function normally when faced with the
                trigger.
              </li>
              <li className="f-18-n">
                Uncontrollable anxiety upon exposure to the source of fear.
              </li>
              <li className="f-18-n">
                Recognition that the fear is irrational, yet an inability to
                manage the feelings effectively.
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-right"
            className="col-md-6 col-12 p-3 order-1 order-md-1"
          >
            <img
              className="img-fluid shadow-plus-border"
              src="Images/Phobia6.jpg"
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
              <p className="f-22-b text-primary">Treating Phobias</p>
              Phobias are highly treatable conditions, and the providers at
              UniCare Psychiatry are experts in addressing them. Don't hesitate
              to seek help for your phobia. Contact UniCare Psychiatry today to
              schedule an appointment.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Phobia2.jpg"
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
