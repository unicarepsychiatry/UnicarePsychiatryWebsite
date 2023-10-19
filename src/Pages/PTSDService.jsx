import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const PTSDService = () => {
  return (
    <div>
      <Helmet>
        <title>Post Traumatic Stress Disorder - Unicare Psychiatry</title>
        <meta name="description" content="Unicare, Unicare Psychiatry" />
        <meta
          name="keywords"
          content="PTSD, What is Post-Traumatic Stress Disorder?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
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
                About Post Traumatic Stress Disorder
              </p>
              Post-traumatic stress disorder (PTSD) is a mental health disorder
              that some people develop night mares, insomnia, anxiety,
              depression, panic attacks, paranoia and other psychosis after they
              experience different types of traumatic event such as domestic
              violence, like combat, a natural disaster, a car accident, or
              sexual assault. But sometimes the event is not necessarily a
              dangerous one. For example, the sudden, unexpected death of a
              loved one can also cause PTSD
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
            <p className="f-22-b text-primary">
              What are the symptoms of post-traumatic stress disorder (PTSD)?
            </p>

            <ul>
              <li className="f-18-n">
                Flashbacks, which cause you to feel like you are going through
                the event again
              </li>
              <li className="f-18-n">Nightmares</li>
              <li className="f-18-n">Frightening thoughts </li>
              <li className="f-18-n">Feeling tense or "on edge".</li>
              <li className="f-18-n">Having difficulty sleeping</li>
              <li className="f-18-n">Having angry outbursts</li>
              <li className="f-18-n">
                Trouble remembering important things about the traumatic event
              </li>
              <li className="f-18-n">
                Negative thoughts about yourself or the world
              </li>
              <li className="f-18-n">Feeling blame and guilt</li>
              <li className="f-18-n">
                No longer being interested in things you enjoyed
              </li>
              <li className="f-18-n">Having angry outbursts</li>
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
                Treatment of Post Traumatic Stress Disorder
              </p>
              Unicare Psychiatry providers will do your mental health screening.
              We perform a complete psychiatric evaluation. Then, we create a
              treatment plan. Don’t hesitate to seek help for Post-Traumatic
              Stress Disorder. Contact Unicare Psychiatry today for appointment.
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
