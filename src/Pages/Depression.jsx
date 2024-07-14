import React from "react";
import { Footer } from "../Components/Footer";
import { Helmet } from "react-helmet";

const Depression = () => {
  return (
    <div>
      <Helmet>
        <title>Depression - Unicare Psychiatry</title>
        <meta name="description" content="Depression" />
        <meta
          name="keywords"
          content="Depression, What is Depression?, Unicare, Unicare Psychiatry, Psychiatry"
        />
      </Helmet>

      <div className="depression-container">
        <div className="depression-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Depression
          </h3>
        </div>
        <div className="p-0 m-0 g-0 depression-container-banner"></div>
        <div className="depression-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Depression is a serious mental health illness that can manifest in a
            variety of ways. It is not merely sadness or having a bad day. At
            UniCare Psychiatry, our medical professionals have extensive
            expertise in diagnosing and treating depression in children,
            adolescents, and adults. Contact the office right away or make an
            appointment online if you or a loved one is depressed to get help.
            Telemedicine visits are also available.
          </p>
        </div>

        <div data-aos="fade-left" className="container my-lg-5 my-3">
          <p className="div-heading">About Depression</p>
          <p className="f-18-n">
            Depression, also known as major depressive disorder, is a common and
            serious medical illness that adversely affects how you feel, think,
            and behave. Fortunately, it is treatable. Depression causes feelings
            of sadness and a loss of interest in activities you once enjoyed. It
            can lead to a variety of emotional and physical problems and can
            decrease your ability to function at work and at home.
          </p>
        </div>
        <hr className="container line my-5" />
        <div className="">
          <div className="d-flex flex-lg-row flex-column">
            {/* For some reason when I change the text in this div className="depression-image-container rounded alters image  */}
            <div className="depression-image-container rounded">
              <div
                data-aos="fade-right"
                className="col-md-7 col-10 m-auto bg-white shadow-plus-border m-md-5 m-0 custom-text-alignment p-md-5 p-3"
              >
                <p className="f-22-b text-primary">Symptoms of Depression</p>
                <p className="f-18-n">
                  Depression symptoms can vary in severity and include:
                </p>
                <ul>
                  <li className="f-18-n">
                    Feeling sad or having a depressed mood
                  </li>
                  <li className="f-18-n">
                    Loss of interest or pleasure in activities once enjoyed
                  </li>
                  <li className="f-18-n">
                    Changes in appetite — weight loss or gain unrelated to
                    dieting
                  </li>
                  <li className="f-18-n">
                    Trouble sleeping or sleeping too much
                  </li>
                  <li className="f-18-n">
                    Loss of energy or increased fatigue
                  </li>
                  <li className="f-18-n">
                    Increase in purposeless physical activity (e.g., inability
                    to sit still, pacing, handwringing) or slowed movements or
                    speech (these actions must be severe enough to be observable
                    by others)
                  </li>
                  <li className="f-18-n">Feeling worthless or guilty</li>
                  <li className="f-18-n">
                    Difficulty thinking, concentrating, or making decisions
                  </li>
                  <li className="f-18-n">Thoughts of death or suicide</li>
                </ul>

                <p className="m-3 f-18-n">
                  Symptoms must last at least two weeks and represent a change
                  in your previous level of functioning for a depression
                  diagnosis.
                </p>
              </div>
            </div>
          </div>
          <hr className="container my-5 line" />
          <div className="d-flex container flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6  my-5 col-12  order-2 order-md-2"
            >
              <p className="f-22-b text-primary">Types of Depression</p>
              <p className="f-18-n">
                Depression can manifest in various forms. UniCare Psychiatry
                provides treatment for different depressive disorders and
                conditions, including:
              </p>
              <ul>
                <li className="f-18-n">Major depressive disorder</li>
                <li className="f-18-n">
                  Persistent depressive disorder, which lasts for at least two
                  years
                </li>
                <li className="f-18-n">
                  Postpartum depression, which many women experience after
                  giving birth
                </li>
                <li className="f-18-n">
                  Trouble sleeping or sleeping too much
                </li>
                <li className="f-18-n">
                  Bipolar disorders, which are separate conditions that may
                  involve depressive episodes
                </li>
                <li className="f-18-n">
                  Adjustment disorders, which cause an emotional or behavioral
                  reaction to a life change or stressful event.
                </li>
              </ul>
              <p className="m-3 f-18-n">
                Many individuals with depression also experience other mental
                health conditions, such as anxiety.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 p-3 order-1 order-md-1"
            >
              <img
                className="img-fluid shadow-plus-border"
                src="Images/PTSD-1.jpg"
                alt="picture"
              />
            </div>
          </div>
          <hr className="container my-5 line" />

          <div className="my-5">
            <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
              <div
                data-aos="fade-left"
                className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
              >
                <p className="f-22-b text-primary">
                  Diagnosis and Treatment of Depression
                </p>
                At UniCare Psychiatry, we prioritize understanding you as an
                individual, partnering with you to develop a comprehensive
                mental health care plan. Our process begins with a thorough
                psychiatric evaluation, which may encompass cognitive testing to
                pinpoint your unique challenges. From there, we tailor a
                personalized treatment plan, which could incorporate medication
                management, psychotherapy, hypnotherapy, Neurofeedback therapy,
                and lifestyle adjustments including nutrition, exercise, yoga,
                and sleep habits. If you're struggling with depression, don't
                hesitate to reach out. Contact UniCare Psychiatry today to
                schedule an appointment and begin your journey towards healing.
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Depression;
