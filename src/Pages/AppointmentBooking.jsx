import React from "react";
import { Helmet } from "react-helmet";
import { useForm, ValidationError } from "@formspree/react";
import { Footer } from "../Components/Footer";
const AppointmentBooking = () => {
  const [state, handleSubmit] = useForm("xleyaqyy");

  return (
    <div>
      <Helmet>
        <title>Book an Appointment with unicarepsychiatry</title>
        <meta
          name="keywords"
          content="unicarepsychiatry, unicare, psychiatry, pharmacare billing solution, Psychiatry, Schedule an Appointment, complimentary consultation"
        />
        <meta
          name="description"
          content="Schedule a complimentary consultation by booking an appointment
          online."
        />
      </Helmet>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Schedule an Appointment
          </h3>
        </div>
        <div className="p-0 m-0 g-0 bookingAppointment-container-banner"></div>
      </div>

      <div className="container my-md-5 my-3">
        <h2 className="div-heading mt-5" data-aos="fade-up-left">
          Schedule an Appointment
        </h2>
        <div className="d-flex flex-md-row flex-column">
          <div className="col-md-6 col-12" data-aos="flip-right">
            <p className="f-18-n">
              Schedule a complimentary consultation by booking an appointment
              online. Prior to confirming your in-person or telehealth
              appointment, take advantage of the opportunity to consult with our
              experienced administrators or providers for personalized guidance.
            </p>
            <p className="f-18-n">
              To ensure optimal service, patients are kindly requested to
              schedule appointments at least 24 hours in advance to visit the
              provider. Please note that we do not accommodate walk-in patients.
            </p>
            <div>
              {/* <p className="f-18-n social-icon">
                <i class="bi bi-alarm"></i> Working Hours
                <br />
                <div className="row">
                  <div className="f-18-t pl-5">Monday 8AM to 7PM est</div>
                  <div className="f-18-t ml-5">Tuesday 3PM to9PM est</div>
                  <div className="f-18-t ml-5">Wednesday Off</div>
                  <div className="f-18-t ml-5">Thursday 2PM to 8PM est</div>
                  <div className="f-18-t ml-5">Friday 3PM to 9PM est</div>
                  <div className="f-18-t ml-5">Saturday 12PM to 6PM est</div>
                  <div className="f-18-t ml-5">Sunday Off</div>
                </div>
              </p> */}
            </div>
            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-envelope-fill"></i> Email
                <br />
                <a
                  style={{
                    // color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  href="mailto:unicarepsychiatry2020@gmail.com"
                  className="f-18-t ml-5"
                >
                  unicarepsychiatry2020@gmail.com
                </a>
                {/* <span className="f-18-t ml-5">unicarepsychiatry2020@gmail.com</span> */}
              </p>
            </div>

            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-chat-dots-fill"></i> Text Only
                <br />
                {/* This span directs user to messanger */}
                <a
                  style={{
                    // color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  href="sms:+16066890657"
                  className="f-18-t ml-5"
                >
                  606-689-0657
                </a>
                {/* <span className="f-18-t ml-5">606-689-0657</span> */}
              </p>
            </div>

            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-geo-alt-fill"></i> Address
                <br />
                {/* <span className="f-18-t ml-5">
                  407 N. Broadway Lexington, KY 40508-1301
                </span> */}
                <a
                  style={{
                    // color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  href="https://www.google.com/maps/search/?api=1&query=407%20N.%20Broadway%20Lexington,%20KY%2040508-1301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-18-t ml-5"
                >
                  407 N. Broadway Lexington, KY 40508
                </a>
              </p>
            </div>
          </div>

          {state.succeeded ? (
            <div className="card shadow m-auto" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                style={{
                  height: "200px",
                  width: "200px",
                  margin: "auto",
                  padding: "35px",
                }}
                src="/Images/thankyou.png"
                alt="Card image cap"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-secondary">Thank You!</h5>
                <p className="card-text f-18-n">
                  Your appointment request has been forwarded to our team,
                  someone will be in touch with you shortly.
                </p>
                <a
                  href="/"
                  className="my-3 px-md-5 p-2 btn button-primary text-white"
                >
                  Home
                </a>
              </div>
            </div>
          ) : (
            <div className="col-md-6 col-12" data-aos="flip-left">
              <div className="row">
                <div className="col-10 mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName" className="f-18-n py-2">
                        <b>Full Name *</b>
                      </label>
                      <input
                        className="form-control"
                        // placeholder="Full Name"
                        id="firstName"
                        type="text"
                        required
                        name="firstName"
                      />
                      <br />
                      <label className="f-18-n py-2">
                        <b>Gender *</b>
                      </label>
                      <input
                        className="form-control"
                        required
                        type="Gender"
                        name="user_Gender"
                      />
                      <br />
                      <label className="f-18-n py-2">
                        <b>Email *</b>
                      </label>
                      <input
                        className="form-control"
                        // placeholder="Email Address"
                        required
                        type="email"
                        name="email"
                      />
                      <br />
                      <label htmlFor="phone" className="f-18-n py-2">
                        <b>Phone Number *</b>
                      </label>
                      <input
                        className="form-control"
                        type="tel"
                        id="phone"
                        placeholder="(123) 456-7890"
                        name="phone"
                      />
                      <br />

                      <label htmlFor="appointment" className="f-18-n py-2">
                        <b>Reason for Appointment *</b>
                      </label>
                      <textarea
                        className="form-control"
                        // placeholder="Reason for Appointment"
                        required
                        id="text"
                        name="appointment"
                      />
                      {/* 
                      <label htmlFor="appointment" className="f-18-n py-2">
                        Reason for Appointment
                      </label>
                      <input
                        className="form-control"
                        placeholder="Reason for Appointment"
                        required
                        type="text"
                        name="appointment"
                      /> */}
                      <br />
                      <div className="my-2">
                        <button
                          className="my-3 px-md-5 p-2 btn button-primary text-white"
                          type="submit"
                        >
                          <i class="bi bi-send"></i> Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* { result ? <div className="alert alert-success">your Email Sent successfully!</div> : ""} */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentBooking;
