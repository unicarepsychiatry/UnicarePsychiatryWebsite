import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../Components/Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
export const ContactUs = () => {
  const form = useRef();
  // const [result,Setresult]=useState(false);
  const Emailnotify = () => toast.success("your Email Sent successfully!");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_80kntug",
        "template_9887mff",
        form.current,
        "-aKR7kFAQS5x5p3Fq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // Setresult(true);
    Emailnotify();
  };

  return (
    <>
      <Helmet>
        <title>contact us - pharmaCare billing Solutions</title>
        <meta
          name="keywords"
          content="pharmacare billing solutions, Contact us, pharmacare billing solution"
        />
        <meta
          name="description"
          content="pharmacare billing solutions, Claim denial management service, pharmacare billing solution"
        />
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Meet Our Team
          </h3>
        </div>
        <div className="p-0 m-0 g-0 contact-container-banner"></div>
      </div>
      <div
        className="px-md-5 px-3 mx-md-4 mx-2 white-bg"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <div className="row m-0 p-0 my-3">
          <div className="container">
            <h2 className="div-heading mt-5" data-aos="flip-left">
              Contact us
            </h2>
            <div className="d-flex flex-md-row flex-column">
              <div className="col-md-6 col-12" data-aos="flip-right">
                <p className="f-18-n">
                  Have a question or comment? Please feel free to reach out and
                  our team will get back to you shortly.
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
                    <span className="f-18-t ml-5">
                      unicarepsychiatry@gmail.com
                    </span>
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
              <div className="col-md-6 col-12" data-aos="flip-left">
                <div className="row">
                  <div className="col-md-10 col-10 mx-auto">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="form-group">
                        <label className="py-2">Name</label>
                        <input
                          className="form-control"
                          placeholder="Please Enter Your good name"
                          required
                          type="text"
                          name="Username"
                        />
                        <label className="py-2">Email</label>
                        <input
                          className="form-control"
                          placeholder="Please Enter your Email Address"
                          required
                          type="email"
                          name="user_Email"
                        />
                        <label className="py-2">Mobile Number</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Please Enter Your Mobile No (optional)"
                          name="user_Mobile"
                        />
                        <label className="py-2">Message</label>
                        <textarea
                          className="form-control"
                          required
                          id="message"
                          placeholder="Please Enter Your Message"
                          row="8"
                          name="message"
                        />
                        <button
                          className="my-3 px-md-5 p-2 btn button-primary text-white"
                          type="submit"
                        >
                          Send message
                        </button>
                      </div>
                    </form>
                    {/* { result ? <div className="alert alert-success">your Email Sent successfully!</div> : ""} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
