import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const ADHDService = () => {
  return (
    <div>
      <Helmet>
        <title>ADHD - Unicare Psychiatry</title>
        <meta name="description" content="ADHD (Attention Deficit Hyperactivity Disorder)" />
        <meta
          name="keywords"
          content=" ADHD (Attention Deficit Hyperactivity Disorder), ADHD, What is ADHD?, Unicare, Unicare Psychiatry, Psychiatry"
        />
      </Helmet>

      <div className="adhd-container">
        <div className="adhd-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            ADHD
          </h3>
        </div>
        <div className="p-0 m-0 g-0 adhd-container-banner"></div>
        <div className="adhd-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding m-auto"
          >
            ADHD (Attention Deficit Hyperactivity Disorder)
          </p>
        </div>

        <div data-aos="fade-left" className="container my-lg-5 my-3">
          <p className="div-heading">What is ADHD?</p>
          <p className="f-18-n">
            {/* ADHD, or Attention-Deficit Hyperactivity Disorder, is a prevalent
            mental health condition affecting approximately 8.4% of children and
            2.5% of adults. It involves symptoms of inattention, hyperactivity,
            and impulsivity. */}
          </p>
        </div>
        <hr className="container line my-5" />
        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
                How is ADHD Diagnosed and Treated?
              </p>
              The Unicare Psychiatry team specializes in diagnosing and treating
              ADHD across various age groups, including children, adolescents,
              and adults. We understand the complexities of ADHD and its impact
              on daily functioning. Our comprehensive approach also addresses
              related behavioral disorders such as Oppositional Defiant Disorder
              (ODD), which often co-occurs with ADHD. If you suspect that you or
              your child may be struggling with ADHD, don't hesitate to reach
              out for support. Contact us today to schedule an appointment, and
              remember that telehealth visits are available for your
              convenience.
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/Age-related-immaturity-web.png"
                alt="picture"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 m-0">
        <div className="d-flex">
          <div className="adhd-image-container h-100 w-100">
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

export default ADHDService;
