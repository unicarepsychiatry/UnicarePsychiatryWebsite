import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const EarlyChildhoodTraumasService = () => {
  return (
    <div>
      <Helmet>
        <title>Early Childhood Traumas - Unicare Psychiatry</title>
        <meta name="description" content="Unicare, Unicare Psychiatry" />
        <meta
          name="keywords"
          content="Early Childhood Traumas, What is Early Childhood Traumas?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
        />
      </Helmet>
      <div className="biopolar-container overflow-hidden">
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
            These traumas can stem from deliberate acts of violence, such as
            child physical or sexual abuse, domestic violence, or events like
            natural disasters, accidents, or war. Additionally, young children
            may undergo traumatic stress as a result of painful medical
            procedures or the unexpected loss of a parent or caregiver.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                About Early Childhood Trauma
              </p>
              <p className="f-18-n">
                {" "}
                Traumas in early childhood may stem from deliberate acts of
                violence like physical or sexual abuse, domestic violence,
                or from occurrences such as natural disasters, accidents, or
                war. There's a common assumption that young age shields children
                from the effects of traumatic events. However, it's crucial to
                recognize that young children are also susceptible to traumatic
                stress triggered by painful medical procedures or the abrupt
                loss of a parent or caregiver.
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
            <p className="f-22-b text-primary">
              Treatment of Early Childhood Trauma
            </p>
            <p className="f-18-n">
              For the treatment of early childhood trauma, reach out to UniCare
              Psychiatry. Our expert providers offer top-notch care tailored
              specifically to address early childhood trauma. We specialize in
              creating personalized treatment plans that cater to the unique
              needs of each patient. If you or someone you know is experiencing
              early childhood trauma, don't hesitate to seek help. Schedule an
              appointment with UniCare Psychiatry today.
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
