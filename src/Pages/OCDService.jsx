import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const OCDService = () => {
  return (
    <div>
      <Helmet>
        <title>Obsessive Compulsive Disorder - Unicare Psychiatry</title>
        <meta name="description" content="What is Obsessive Compulsive Disorder?" />
        <meta
          name="keywords"
          content="Obsessive Compulsive Disorder, OCD, What is Obsessive Compulsive Disorder?, Unicare, Unicare Psychiatry, Psychiatry"
        />
      </Helmet>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Obsessive-Compulsive Disorder (OCD)
          </h3>
        </div>
        <div className="p-0 m-0 g-0 OCD-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Obsessive-compulsive disorder (OCD) is a condition characterized by
            frequent unwanted thoughts and sensations, known as obsessions,
            which compel individuals to engage in repetitive behaviors, or
            compulsions. These compulsions can significantly interfere with
            social interactions and the performance of daily tasks.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                About Obsessive-Compulsive Disorder
              </p>
              While everyone experiences occasional obsessions and compulsions,
              such as double-checking the stove or locks, OCD takes these
              behaviors to an extreme level. For individuals with OCD, these
              obsessions and compulsions can consume hours of their day and
              disrupt normal life and activities. Importantly, those with OCD do
              not derive pleasure from these experiences.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/signs-of-ocd.webp"
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
            <p className="f-22-b text-primary">What are the Symptoms of OCD?</p>

            <ul>
              <li className="f-18-n">
                The primary symptoms of OCD involve obsessions and compulsions
                that disrupt normal activities
              </li>
              <li className="f-18-n">
                Fear of coming into contact with perceived contaminated
                substances, such as germs or dirt
              </li>
              <li className="f-18-n">
                Fear of causing harm to oneself or others due to carelessness or
                acting on violent impulses
              </li>
              <li className="f-18-n">
                Unwanted thoughts or mental images related to sex
              </li>
              <li className="f-18-n">Fear of making mistakes</li>
              <li className="f-18-n">
                Excessive concern with morality, distinguishing between "right
                or wrong"
              </li>
              <li className="f-18-n">Feelings of doubt or disgust</li>
            </ul>
            <p className="m-3 f-18-n">
              Other obsessive-compulsive thoughts or behaviors may be highly
              personal
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="col-md-6 col-12 p-3 order-1 order-md-1"
          >
            <img
              className="img-fluid shadow-plus-border"
              src="Images/images.jpg"
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
              <p className="f-22-b text-primary">Treatment of OCD</p>
              At Unicare Psychiatry, we prioritize understanding you as a whole
              person and working together as partners to develop your mental
              health care plan. We conduct comprehensive psychiatric evaluations
              and offer a range of interventions, including medication
              management, psychotherapy, neurofeedback therapy, and more. If
              you're struggling with obsessive-compulsive disorder, don't
              hesitate to reach out. Contact Unicare Psychiatry today to
              schedule an appointment.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/DiagnosedDepression.jpg"
                alt="picture"
              />
            </div>
          </div>
        </div>
        <hr className="container line my-5" />
        <div className="p-0 m-0 overflow-hidden">
          <div className="d-flex">
            <div className="OCD-image-container h-100 w-100">
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

export default OCDService;
