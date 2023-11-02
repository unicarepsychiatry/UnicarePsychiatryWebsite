import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const GeriatricPopulation = () => {
  return (
    <div>
      <Helmet>
        <title>
          Psychiatric services for geriatric Population - Unicare Psychiatry
        </title>
        <meta name="description" content="Unicare, Unicare Psychiatry" />
        <meta
          name="keywords"
          content="What is Depression?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
        />
      </Helmet>

      <div className="depression-container">
        <div className="depression-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Psychiatric services for geriatric Population
          </h3>
        </div>
        <div className="p-0 m-0 g-0 geriatric-container-banner"></div>
        <div className="depression-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment text-center"
          >
            Geriatric psychiatry is the medical specialty that involves working with older adults who have mental health needs. 
          </p>
        </div>

        <div className="">
          <div className="d-flex container flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6  m-5 col-12  order-2 order-md-2"
            >
              <p className="f-22-b text-primary">
                About Service
              </p>
              <p className="f-18-n">
                Our board-certified psychiatrists and behavioral health
                professionals offer specialized expertise in geriatric
                psychiatric treatment. We understand the unique needs and
                challenges facing older adults with mental health conditions.
                Some of the disorders we commonly treat include late-life
                depression, anxiety, bipolar disorder, memory disorders, and
                more. Contact Unicare Psychiatry for appointment.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 p-3 order-1 order-md-1"
            >
              <img
                className="img-fluid shadow-plus-border"
                src="Images/Geriatric2.jpg"
                alt="picture"
              />
            </div>
          </div>

          {/* <div className="my-5">
            <div className="container d-flex flex-md-row flex-column justify-content-center align-items-center">
              <div
                data-aos="fade-left"
                className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
              >
                <p className="f-22-b text-primary">
                  Common mental health uses include:
                </p>
                Stress and anxiety, especially before medical or dental
                procedures; panic attacks; and post-traumatic stress syndrome
                (PTSD), Phobias, Behavior control issues, including giving up
                smoking, losing weight and enuresis.
              </div>
              <div
                data-aos="fade-right"
                className="col-md-6 col-12 f-18-n order-1 order-md-2"
              >
                <img
                  className="img-fluid shadow-plus-border"
                  src="Images/PTSD-1.jpg"
                  alt="picture"
                />
              </div>
            </div>
          </div>

          <div className="d-flex container flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 m-5 col-12  order-2 order-md-2"
            >
              <p className="f-22-b text-primary">
                Common medical uses include:
              </p>
              <p className="f-18-n">
                Insomnia. Asthma. Hot flashes during menopause, Gastrointestinal
                disorders, including irritable bowel syndrome (IBS), Pain
                control, including after surgery, childbirth, cancer,
                fibromyalgia, burns, headaches (migraine and tension.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 p-3 order-1 order-md-1"
            >
              <img
                className="img-fluid shadow-plus-border"
                src="Images/PTSD-1.jpg"
                alt="picture"
              />
            </div>
          </div> */}
        </div>
      </div>
      <hr className="container line my-5" />
      <div className="p-0 m-0">
        <div className="d-flex">
          <div className="geriatric-image-container h-100 w-100">
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

export default GeriatricPopulation;
