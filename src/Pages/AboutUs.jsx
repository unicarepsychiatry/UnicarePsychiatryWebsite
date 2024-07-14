import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../Components/Footer";
export const AboutUs = () => {
  return (
    <>
        <Helmet>
          <title>About Us - Unicare Psychiatry</title>
          <meta
            name="description"
            content="Learn about Unicare Psychiatry and Dr. Yasmin Majumder, offering top-rated psychiatric care and mental health services."
          />
          <meta
            name="keywords"
            content="Yasmin Majumder, Unicare, Dr. Yasmin Majumder, Psychiatry, Unicare Psychiatry, Psychiatry"
          />
        </Helmet>
        <div className="px-md-5 px-3 mx-md-4 mx-2" data-aos="fade-up">
        <div className="container py-5">
          <div className="row">
            <div className="row overflow-hidden col-12 p-0 m-0">
              <h4 className="mt-md-5 mt-4 row f-22-b text-secondary">
                About UniCare Psychiatry
              </h4>             
              <div
                data-aos="fade-left"
                className="col-md-6 col-12 f-18-n order-lg-1 order-2 my-md-5 my-0"
              >
                <div className="p-3" data-aos="fade-left">
                  <p className="f-18-n">
                    Unicare Psychiatry offers both in-person and Telehealth care
                    services. We are presently welcoming new patients. Our
                    services encompass comprehensive psychiatric evaluations,
                    medication management, and supportive therapy tailored for
                    individuals experiencing PTSD, depression, phobias, alcohol
                    use disorder, opioid disorder, OCD, anxiety, bipolar
                    disorder, ADHD, and more. Dr. Chittaranjan Shukla, our
                    dedicated psychiatrist, is aligned with the mission and
                    vision of Unicare.
                  </p>
                  <p className="f-18-n">
                    At Unicare Psychiatry, we endorse a holistic approach to
                    treatment, accommodating individuals regardless of their
                    cultural background, gender, social standing, or ethnicity.
                    This approach involves utilizing medication management as
                    necessary, alongside a focus on lifestyle changes. Our
                    primary goal is to facilitate healing, enhance quality of
                    life, and nurture better relationships for our patients. We
                    extend an invitation to embark on a healing journey with us,
                    where our unwavering support awaits. Additionally, we offer
                    certified interpreters for the Hispanic population
                  </p>
                  <span className="text-primary f-18-b">
                    "One care and one remedy, which is love."
                  </span>
                </div>
              </div>

              <div
                data-aos="fade-right"
                className="col-md-6 col-12 order-1 order-md-1"
              >
                <img
                  className="img-fluid shadow-plus-border h-100 w-100"
                  src="Images/aboutusImg.jpeg"
                  alt="picture"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="container line my-5" />
        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-2 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
              Bipolar Disorder Diagnoses And Treatment at Unicare Psychiatry?
              </p>
              <p className="f-18-n">
              At Unicare psychiatry, we spend time discussing your symptoms,
            concerns, and medical history to pinpoint the specific type of
            bipolar disorder you have. Our providers may also recommend
            cognitive testing to assess your mental functioning. We work with
            you as a partner to create a personalized treatment plan based on
            your needs, focusing your mental, physical and spiritual needs. For
            details schedule an appointment online today.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-1"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/aboutusImg.jpeg"
                alt="picture"
              />
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};
