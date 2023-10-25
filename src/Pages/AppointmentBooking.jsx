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
          content="unicarepsychiatry, unicare, psychiatry, pharmacare billing solution"
        />
        <meta
          name="description"
          content="unicarepsychiatry is US based Health care company"
        />
      </Helmet>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Book An Appointment
          </h3>
        </div>
        <div className="p-0 m-0 g-0 bookingAppointment-container-banner"></div>
      </div>

      <div className="container my-md-5 my-3">
        <h2 className="div-heading mt-5" data-aos="fade-up-left">
          Book An Appointment
        </h2>
        <div className="d-flex flex-md-row flex-column">
          <div className="col-md-6 col-12" data-aos="flip-right">
            <p className="f-18-n">
              Have a question or comment? Please feel free to reach out and our
              team will get back to you shortly.
            </p>
            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-alarm"></i> Working Hours
                <br />
                <span className="f-18-t ml-5">
                  Mon to Sat, 9:00 am - 6:00 pm
                </span>
              </p>
            </div>
            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-envelope"></i> Email
                <br />
                <span className="f-18-t ml-5">unicarepsychiatry@gmail.com</span>
              </p>
            </div>
            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-chat-dots"></i> Message Only
                <br />
                <span className="f-18-t ml-5">606 689-0657</span>
              </p>
            </div>
            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-geo-alt"></i> Address
                <br />
                <span className="f-18-t ml-5">
                  407 N. Broadway Lexington, KY 40508-1301
                </span>
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
                <h5 className="card-title text-secondary">Thankyou!</h5>
                <p className="card-text f-18-n">
                  your Appointment Reason sent to Doctor and our team will contact you
                  soon.
                </p>
                <a
                  href="/"
                  className="my-3 px-md-5 p-2 btn button-primary text-white"
                >
                  Go Back
                </a>
              </div>
            </div>
          ) : (
            <div className="col-md-6 col-12" data-aos="flip-left">
              <div className="row">
                <div className="col-10 mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName" className="f-18-n py-2">Name</label>
                      <input
                        className="form-control"
                        placeholder="Please Enter Your good name"
                        id="firstName"
                        type="text"
                        required
                        name="firstName"
                      />
                      <label className="f-18-n py-2">Gender</label>
                      <input
                        className="form-control"
                        placeholder="Male/Female"
                        required
                        type="Gender"
                        name="user_Gender"
                      />
                      <label className="f-18-n py-2">Email</label>
                      <input
                        className="form-control"
                        placeholder="Please Enter your Email Address"
                        required
                        type="email"
                        name="email"
                      />
                      <label htmlFor="phone" className="f-18-n py-2">Mobile Number</label>
                      <input
                        className="form-control"
                        type="phone"
                        id="phone"
                        placeholder="Please Enter Your Mobile No (optional)"
                        name="phone"
                      />
                      <label htmlFor="appointment" className="f-18-n py-2">
                        Reason for Appointment
                      </label>
                      <input
                        className="form-control"
                        placeholder="Please Enter Reason for Appointment"
                        required
                        type="text"
                        name="appointment"
                      />
                      <div className="my-2">
                        <button
                          className="my-3 px-md-5 p-2 btn button-primary text-white"
                          type="submit"
                        >
                          Send message
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
