import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const OCDService = () => {
  return (
    <div>
      <Helmet>
        <title>Obsessive Compulsive Disorder - Unicare Psychiatry</title>
        <meta name="description" content="Unicare, Unicare Psychiatry" />
        <meta
          name="keywords"
          content="OCD, What is Obsessive Compulsive Disorder?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
        />
      </Helmet>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Obsessive Compulsive Disorder
          </h3>
        </div>
        <div className="p-0 m-0 g-0 OCD-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Obsessive-compulsive disorder (OCD) is a condition in which you have
            frequent unwanted thoughts and sensations (obsessions) that cause
            you to perform repetitive behaviors (compulsions). The repetitive
            behaviors can significantly interfere with social interactions and
            performing daily tasks.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                About Obsessive Compulsive Disorder
              </p>
              Everyone experiences obsessions and compulsions at some point. For
              example, it’s common to occasionally double-check the stove or the
              locks. People also often use the phrases “obsessing” and
              “obsessed” very casually in everyday conversations. But OCD is
              more extreme. It can take up hours of a person’s day. It gets in
              the way of normal life and activities. Obsessions in OCD are
              unwanted, and people with OCD don’t enjoy experiencing obsessive
              compulsive behaviors or thoughts.
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
            <p className="f-22-b text-primary">What are the symptoms of OCD?</p>

            <ul>
              <li className="f-18-n">
                The main symptoms of OCD are obsessions and compulsions that
                interfere with normal activities. Fear of coming into contact
                with perceived contaminated substances, such as germs or dirt.
              </li>
              <li className="f-18-n">
                Fear of causing harm to yourself or someone else because you’re
                not careful enough or you’re going to act on a violent impulse.
              </li>
              <li className="f-18-n">
                Unwanted thoughts or mental images related to sex.
              </li>
              <li className="f-18-n">Fear of making a mistake.</li>
              <li className="f-18-n">
                Excessive concern with morality (“right or wrong”).
              </li>
              <li className="f-18-n">Feelings of doubt or disgust.</li>
            </ul>
            <p className="m-3 f-18-n">
              Other obsessive compulsive thoughts or behavior that could be very
              personal.
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
              Unicare Psychiatry providers take the time to get to know you as a
              whole person and works with you as a partner in your mental health
              care plan. We perform a complete psychiatric evaluation,
              intervention may include medication management, psychotherapy,
              neuro feedback therapy and others. Don’t hesitate to seek help for
              Obsessive-compulsive disorder. Contact Unicare Psychiatry today
              for an appointment.
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
