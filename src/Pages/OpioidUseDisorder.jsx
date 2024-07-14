import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const OpioidUseDisorder = () => {
  return (
    <div>
      <Helmet>
        <title>Opioid Use Disorder - Unicare Psychiatry</title>
        <meta name="description" content="Opioid Use Disorder" />
        <meta
          name="keywords"
          content="Opioid Use Disorder, What is Opioid Use Disorder?, Unicare, Unicare Psychiatry, Psychiatry"
        />
      </Helmet>
      <div className="biopolar-container overflow-hidden">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Opioid Use Disorder
          </h3>
        </div>
        <div className="p-0 m-0 g-0 Opioid-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center">
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Opioid Use Disorder is a chronic and treatable mental health
            condition characterized by a problematic pattern of opioid misuse.
            Effective treatment typically involves medication, cognitive, and
            behavioral therapy
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                Understanding Opioid Use Disorder
              </p>
              Opioids, a class of drugs including prescription painkillers and
              heroin, have the capacity to induce feelings of euphoria, thereby
              increasing the likelihood of continued use even when faced with
              negative consequences. Opioid Use Disorder (OUD) is recognized as
              a chronic medical condition characterized by compulsive opioid
              use, despite its detrimental effects on health, social, and
              occupational functioning. Individuals with OUD often experience a
              range of serious consequences, including physical and
              psychological dependency, increased tolerance, withdrawal symptoms
              upon cessation, and heightened risk of overdose, disability,
              relapse, and mortality. Effective management of OUD typically
              involves a comprehensive treatment approach that may include
              medication-assisted treatment (MAT), behavioral therapies,
              counseling, and support services aimed at promoting recovery and
              reducing the risk of relapse.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/GettyImages-859090900.jpg"
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
            Treatment for Opioid Use Disorder
            </p>

            <p className="f-18-n">
              If you suspect that you may be experiencing Opioid Use Disorder,
              reaching out to Unicare Psychiatry is a proactive step. Our expert
              providers offer tailored treatment plans designed to address your
              specific needs. We prioritize creating individualized approaches
              to ensure the most effective outcomes for patients with Opioid Use
              Disorder. Don't delay in seeking assistance. Schedule an
              appointment with Unicare Psychiatry today.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="col-md-6 col-12 p-3 order-1 order-md-1"
          >
            <img
              className="img-fluid shadow-plus-border"
              src="Images/4d1af960-847b-11ec-9630-8fc8460ad324.jpg"
              alt="picture"
            />
          </div>
        </div>

        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="Opioid-image-container h-100 w-100">
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

export default OpioidUseDisorder;
