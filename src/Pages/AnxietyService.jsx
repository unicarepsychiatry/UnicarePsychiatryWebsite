import React from "react";
import { useEffect } from "react";
import { Footer } from "../Components/Footer";
import { Helmet } from "react-helmet";

const AnxietyService = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".depression-container-header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? document
          .querySelector(".depression-container-header")
          .classList.add("sticky")
      : document
          .querySelector(".depression-container-header")
          .classList.remove("sticky");
  };

  return (
    <>
      <Helmet>
        <title>Anxiety Disorder - Unicare Psychiatry</title>
        <meta name="description" content="Anxiety Disorder" />
        <meta
          name="keywords"
          content="Anxiety Disorder, What is Anxiety Disorder?, Unicare, Unicare Psychiatry, Psychiatry"
        />
      </Helmet>
      <div>
        <div className="anxiety-container">
          <div className="depression-container-header row p-0 m-0 ">
            <h3
              id="Header"
              className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary"
            >
              Anxiety Disorder
            </h3>
          </div>
          <div className="p-0 m-0 g-0 anxiety-container-banner"></div>
          <div className="anxiety-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
            <p
              data-aos="fade-right"
              data-aos-duration="3000"
              className="p-3 custom-padding custom-text-alignment"
            >
              Everyone experiences temporary anxiety from time to time, but
              persistent and overwhelming worry and fear about everyday
              situations may indicate a clinical anxiety disorder. At UniCare
              Psychiatry, our providers possess extensive experience in treating
              anxiety disorders and obsessive-compulsive disorder (OCD). Whether
              you call our office or request an appointment online, you can
              expect personalized and compassionate anxiety treatment.
              Additionally, we offer telehealth services for your convenience.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="container my-lg-5 my-3"
          >
            <p className="div-heading">About Anxiety </p>
            <p className="f-18-n">
              Anxiety encompasses feelings of tension, worried thoughts, and
              physical changes such as increased blood pressure. Individuals
              with anxiety disorders often experience recurring intrusive
              thoughts or concerns, leading them to avoid certain situations due
              to apprehension. Physical symptoms may include sweating,
              trembling, dizziness, or a rapid heartbeat.
            </p>
            <p className="f-18-n">
              While anxiety and fear are often used interchangeably, they are
              distinct emotions. Anxiety is a future-oriented, persistent
              response that broadly focuses on a diffuse threat, whereas fear is
              a present-oriented, short-lived response to a specific and
              identifiable threat.
            </p>
          </div>
          <hr className="container line" />
          <div className="container">
            <div className="d-flex flex-lg-row flex-column">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="col-md-5 col-12 order-md-1 order-2 custom-text-alignment p-md-5 p-3"
              >
                <p className="f-22-b text-primary">
                  Types Of Anxiety Disorders
                </p>
                <p className="f-18-n">
                  There are numerous types of anxiety disorders, including
                  generalized anxiety disorder, panic disorder, and specific
                  phobias. Social anxiety, for instance, involves fear and
                  avoidance of social interactions. Other conditions that can
                  cause anxiety include obsessive-compulsive disorder (OCD) and
                  post-traumatic stress disorder (PTSD).
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="col-md-7 col-12 order-md-2 order-1 image-container"
              ></div>
            </div>
            <hr className="container my-3 line" />

            <div className="container">
              <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="col-md-6 col-12 f-18-n order-2 order-md-2 my-3 custom-text-alignment p-md-5 p-3"
                >
                  <p className="f-22-b text-primary">Symptoms of Anxiety</p>
                  <p className="f-18-n">
                    Individuals with anxiety disorders may experience a broad
                    range of signs and symptoms, such as:
                  </p>
                  <ul>
                    <li className="f-18-n">
                      Feeling nervous, restless, or tense
                    </li>
                    <li className="f-18-n">Experiencing fatigue</li>
                    <li className="f-18-n">Having trouble sleeping</li>
                    <li className="f-18-n">
                      Experiencing unexplained chest pain
                    </li>
                    <li className="f-18-n">Breathing rapidly</li>
                    <li className="f-18-n">Sweating excessively</li>
                    <li className="f-18-n">Experiencing trembling</li>
                    <li className="f-18-n">Having an increased heart rate</li>
                    <li className="f-18-n">
                      Struggling to focus on anything other than current worries
                    </li>
                    <li className="f-18-n">
                      Feeling the urge to avoid situations that trigger anxiety
                    </li>
                    <li className="f-18-n">
                      Experiencing gastrointestinal problems such as nausea,
                      diarrhea, or constipation
                    </li>
                    <li className="f-18-n">
                      Anxiety can lead to physical and emotional exhaustion,
                      potentially resulting in periods of depression
                    </li>
                  </ul>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="col-md-6 col-12 f-18-n order-1 order-md-1"
                >
                  <img
                    className="img-fluid shadow custome-shadow"
                    style={{ height: "auto" }}
                    src="Images/anxiety.jpg"
                    alt="picture"
                  />
                </div>
              </div>
            </div>

            <hr className="container my-3 line" />

            <div className="container">
              <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
                >
                  <p className="f-22-b text-primary">
                    Treatment of Anxiety Disorders
                  </p>
                  At UniCare Psychiatry, we specialize in evaluating and
                  managing symptoms of anxiety. During your initial visit, we
                  conduct a comprehensive psychiatric evaluation using various
                  tools and technologies, including cognitive testing, to gain
                  insight into your specific needs. Our providers prioritize
                  building a strong rapport with you, ensuring that you are
                  actively involved in crafting your anxiety treatment plan. Our
                  aim is to offer both education and relief as part of your
                  treatment journey. We provide access to resources that help
                  you understand your diagnosis, explore treatment options, and
                  learn targeted interventions you can apply independently.
                  Treatment for anxiety often involves a combination of
                  medication management, psychotherapy, and lifestyle
                  adjustments. If you're seeking ways to effectively manage
                  anxiety and enhance your well-being, reach out to UniCare
                  Psychiatry today or schedule an appointment online.
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="col-md-6 col-12 f-18-n order-1 order-md-2"
                >
                  <img
                    className="img-fluid shadow custome-shadow"
                    src="Images/kaygi-bozuklugunun-tedavisi.jpg"
                    alt="picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AnxietyService;
