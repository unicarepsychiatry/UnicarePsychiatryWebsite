import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const AlcoholUseDisorder = () => {
  return (
    <div>
      <Helmet>
        <title>Alcohol Use Disorder - Unicare Psychiatry</title>
        <meta name="description" content="Alcohol Use Disorder" />
        <meta
          name="keywords"
          content="Alcohol Use Disorder, What is Alcohol Use Disorder?, Unicare, Unicare Psychiatry, Psychiatry"
        />
      </Helmet>
      <div className="biopolar-container overflow-hidden">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Alcohol Use Disorder
          </h3>
        </div>
        <div className="p-0 m-0 g-0 Alcohol-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Alcohol Use Disorder (AUD) is a chronic relapsing brain disorder
            characterized by an impaired ability to control alcohol intake,
            leading to significant distress or functional impairment. It
            encompasses a spectrum of behaviors, from hazardous drinking to
            alcohol dependence, and is often accompanied by physiological and
            psychological dependence on alcohol.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                About Alcohol use disorder (AUD)?
              </p>
              Alcohol Use Disorder (AUD) is a complex medical condition
              characterized by the compulsive consumption of alcohol despite
              adverse consequences. It involves a dysregulated relationship with
              alcohol, resulting in a range of behaviors from excessive drinking
              to physical and psychological dependency. AUD is often associated
              with significant impairment in various aspects of life, including
              social, occupational, and health-related domains.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Alcohol2.jpg"
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
              Treatment of Alcohol Use Disorder
            </p>

            <p className="f-18-n">
              Seeking treatment for Alcohol Use Disorder (AUD) is crucial for
              recovery and improved quality of life. If you suspect that you or
              someone you know may be struggling with AUD, reaching out for help
              is the first step towards healing. At Unicare Psychiatry, our team
              of experienced professionals specializes in providing personalized
              treatment plans tailored to meet the unique needs of each
              individual battling AUD. From comprehensive assessments to
              evidence-based interventions, we are committed to guiding you
              through every step of your journey towards sobriety and
              well-being. Don't let AUD control your life any longer – take the
              first step towards a brighter, healthier future by contacting
              Unicare Psychiatry today to schedule an appointment.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="col-md-6 col-12 p-3 order-1 order-md-1"
          >
            <img
              className="img-fluid shadow-plus-border"
              src="Images/Alcohol3.jpg"
              alt="picture"
            />
          </div>
        </div>

        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="Alcohol-image-container h-100 w-100">
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

export default AlcoholUseDisorder;
