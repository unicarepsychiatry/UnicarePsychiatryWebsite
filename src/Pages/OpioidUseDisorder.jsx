import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const OpioidUseDisorder = () => {
  return (
    <div>
      <Helmet>
        <title>Opioid Use Disorder - Unicare Psychiatry</title>
        <meta name="description" content="Unicare, Unicare Psychiatry" />
        <meta
          name="keywords"
          content="Opioid Use Disorder, What is Opioid Use Disorder?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
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
            Opioid use disorder is a chronic and treatable mental health
            condition that involves a problematic pattern of opioid misuse.
            Effective treatment is possible and typically involves medication,
            cognitive and behavioral therapy. Contact Unicare psychiatry to seek
            help as soon as possible if you think you’re developing a dependence
            on opioids.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">About Opioid Use Disorder</p>
              Opioids produce feelings of euphoria which increase the odds that
              people will continue using them despite negative consequences.
              Opioid use disorder (OUD) is a chronic disorder, with serious
              potential consequences including disability, relapses and death.
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
              Treatment of Opioid Use Disorder
            </p>

            <p className="fa-18-b">
              If you have a concern that you have Opioid Use Disorder, you can
              contact unicare psychiatry. The expert providers will provide you
              the best treatment. We create a best treatment plan for Opioid Use
              Disorder patients. Don’t hesitate to seek help for Opioid Use
              Disorder. Contact Unicare Psychiatry today for appointment.
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
