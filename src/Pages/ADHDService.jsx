import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";

const ADHDService = () => {
  return (
    <div>
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
            ADHD (Attention deficit hyperactivity disorder )
          </p>
        </div>

        <div data-aos="fade-left" className="container my-lg-5 my-3">
          <p className="div-heading">What is ADHD?</p>
          <p className="f-18-n">
            Attention-deficit hyperactivity disorder (ADHD) is a common mental
            health condition that affects an estimated 8.4% of children and 2.5%
            of adults. The team at Unicare psychiatry specializes in diagnosing
            and treating ADHD in children, adolescents, and adults. We also
            treat behavioral disorders like oppositional defiant disorder (ODD),
            which is commonly comorbid with ADHD. If you think you or your child
            may have ADHD, you don’t have to continue struggling to get through
            daily responsibilities alone. Call the Unicare psychiatry office
            today or request an appointment online. Telehealth visits are
            available.
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
                How Is ADHD diagnosed And Treated?
              </p>
              If you think you or your child may have ADHD, you don’t have to
              continue struggling to get through daily responsibilities alone.
              Call the Unicare psychiatry office today or request an appointment
              online. Telehealth visits are available.
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
