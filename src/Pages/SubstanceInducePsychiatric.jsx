import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const SubstanceInducePsychiatric = () => {
  return (
    <div>
      <Helmet>
        <title>Substance Induce Psychiatric Problem - Unicare Psychiatry</title>
        <meta name="description" content="Substance-Induced Psychiatric Problems" />
        <meta
          name="keywords"
          content="Substance Induce Psychiatric Problem, What is Substance Induce Psychiatric Problem?, Unicare, Unicare Psychiatry, Psychiatry"
        />
      </Helmet>
      <div className="biopolar-container overflow-hidden">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Substance-Induced Psychiatric Problems
          </h3>
        </div>
        <div className="p-0 m-0 g-0 Substance-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Drug-induced psychosis, also referred to as substance-induced
            psychotic disorder, encompasses any episode of psychosis stemming
            from substance abuse.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                About Substance-Induced Psychiatric Problems
              </p>
              Drug-induced psychosis, also known as substance-induced psychotic
              disorder, refers to any psychotic episode triggered by substance
              abuse. This can occur due to excessive consumption of a certain
              drug, adverse reactions from mixing substances, withdrawal from a
              drug, or underlying mental health issues.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Drug3.jpg"
                alt="picture"
              />
            </div>
          </div>
        </div>

        <hr className="container my-5 line" />
        <div className="d-flex container flex-md-row flex-column justify-content-center align-items-center">
          <div
            data-aos="fade-left"
            className="col-md-6 col-12 f-18-n order-2 order-md-2 my-3 p-md-5 p-3"
          >
            <p className="f-22-b text-primary">
              Treatment of Substance-Induced Psychiatric Problems
            </p>
            Psychosis is merely a symptom, not a standalone condition. It is
            typically temporary, often resolving within a few hours or days at
            most. However, it is a severe symptom that frequently necessitates
            emergency medical intervention. One in five individuals with a
            history of psychosis will attempt suicide.
          </div>
          <div
            data-aos="fade-right"
            className="col-md-6 col-12 p-3 order-1 order-md-1"
          >
            <img
              className="img-fluid shadow-plus-border"
              src="Images/Drug4.jpg"
              alt="picture"
            />
          </div>
        </div>

        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="Substance-image-container h-100 w-100">
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

export default SubstanceInducePsychiatric;
