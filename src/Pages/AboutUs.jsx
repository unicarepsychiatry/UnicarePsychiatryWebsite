import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../Components/Footer";
export const AboutUs = () => {
  return (
    <>
      <div className="px-md-5 px-3 mx-md-4 mx-2" data-aos="fade-up">
        <Helmet>
          <title>About-us - Unicare Psychiatry</title>
          <meta name="description" content="Unicare, Unicare Psychiatry" />
          <meta
            name="keywords"
            content="Unicare, Dr. Yasmin Majumder,Yasmin Majumder, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
          />
          <meta
            name="keywords"
            content="Unicare"
          />
          <meta
            name="keywords"
            content="Dr Yasmin Majumder"
          />
          <meta
            name="keywords"
            content="Unicare Psychiatry"
          />
        </Helmet>
        <div className="container py-5">
          <div className="row">
            
            <div className="row overflow-hidden col-12 p-0 m-0">
              <h4 className="mt-md-5 mt-4 row f-22-b text-secondary">
                About Uni-care Psychiatry
              </h4>
              <div
                data-aos="fade-left"
                className="col-md-6 col-12 order-lg-1 order-2 my-md-5 my-0"
              >
                <div className="p-3" data-aos="fade-left">
                  <p className="f-18-n">
                    Unicare Psychiatry offer in-person and Telehealth care. We
                    are currently accepting new patients. We provide
                    comprehensive psychiatric evaluations, medication
                    management, and supportive therapy for patients experiencing
                    PTSD, Depression, Phobia, Alcohol Use Disorder, Opioid
                    Disorder, OCD, Anxiety, Bipolar, ADHD, and more. Dr.
                    Chittaranjan Shukla psychiatrist supports mission and vision
                    of unicare.
                  </p>
                  <p className="f-18-n">
                    We support fate base holistic approach,
                    regardless their cultural background, gender, social and
                    ethnicity to treatment, utilizing medication management as
                    needed and a focus on lifestyle changes. Our goal for our
                    patients is to heal, improve quality of life, and improve
                    relationships. Unicare Psychiatry invite you to a journey of
                    healing where we will support you. We provide certified interpreters for the Hispanic population.
                  </p>
                  <span className="text-primary f-18-b">
                    “One care and one remedy which is love”
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
