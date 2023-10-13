import React, { useRef } from "react";
import { Helmet } from 'react-helmet';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
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
    <div
      className="px-md-5 px-3 mx-md-4 mx-2 white-bg"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <Helmet>
        <title>
          contact us - pharmaCare billing Solutions
        </title>
        <meta name="keywords" content="pharmacare billing solutions, Contact us, pharmacare billing solution" />
        <meta name="description" content="pharmacare billing solutions, Claim denial management service, pharmacare billing solution" />
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
      <div className="container">
        <h2 className="div-heading mt-5" data-aos="flip-left">
          Meet Our Team
        </h2>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col=10 mx-auto">
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
                    type="submit">Send message</button>
                </div>
              </form>
              {/* { result ? <div className="alert alert-success">your Email Sent successfully!</div> : ""} */}
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
