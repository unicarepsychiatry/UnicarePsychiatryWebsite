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
        <meta
          name="description"
          content="Unicare, Unicare Psychiatry"
        />
        <meta name="keywords" content="What is Anxiety Disorder?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"/>
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
              Everyone experiences temporary anxiety sometimes, but intense and
              persistent worry and fear about everyday situations may be a sign
              of a clinical anxiety disorder. The providers at Unicare
              Psychiatry have extensive experience of treating anxiety disorders
              and obsessive-compulsive disorder (OCD). Call the office or
              request an appointment online today for personalized,
              compassionate anxiety treatment. Telehealth is also available.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="container my-lg-5 my-3"
          >
            <p className="div-heading">About Anxiety </p>
            <p className="f-18-n">
              Anxiety is an emotion characterized by feelings of tension,
              worried thoughts, and physical changes like increased blood
              pressure. People with anxiety disorders usually have recurring
              intrusive thoughts or concerns. They may avoid certain situations
              out of worry. They may also have physical symptoms such as
              sweating, trembling, dizziness, or a rapid heartbeat.
            </p>
            <p className="f-18-n">
              Anxiety is not the same as fear, but they are often used
              interchangeably. Anxiety is considered a future-oriented,
              long-acting response broadly focused on a diffuse threat, whereas
              fear is an appropriate, present-oriented, and short-lived response
              to a clearly identifiable and specific threat.
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
                  There are many types of anxiety disorders. A few of the most
                  common anxiety disorders include generalized anxiety disorder,
                  panic disorder, and specific phobias. Social anxiety is a
                  phobia involving fear and avoidance of socializing with
                  others. Other conditions that causes anxiety include
                  obsessive-compulsive disorder (OCD) and post-traumatic stress
                  disorder (PTSD).
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
                    People with anxiety disorders can experience a wide range of
                    signs and symptoms, such as:
                  </p>
                  <ul>
                    <li className="f-18-n">
                      Feeling nervous, restless, or tense
                    </li>
                    <li className="f-18-n">Feeling tired</li>
                    <li className="f-18-n">Trouble sleeping</li>
                    <li className="f-18-n">Unexplained chest pain</li>
                    <li className="f-18-n">Rapid breathing</li>
                    <li className="f-18-n">Sweating</li>
                    <li className="f-18-n">Trembling</li>
                    <li className="f-18-n">Increased heart rate</li>
                    <li className="f-18-n">
                      Difficulty thinking about anything other than the current
                      worry
                    </li>
                    <li className="f-18-n">
                      Having the urge to avoid things that trigger anxiety
                    </li>
                    <li className="f-18-n">
                      Gastrointestinal problems such as nausea, diarrhea, or
                      constipation
                    </li>
                    <li className="f-18-n">
                      Anxiety can leave you feeling physically and emotionally
                      exhausted, which can lead to bouts of depression
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
                    Treatment Of Anxiety Disorder
                  </p>
                  At Unicare Psychiatry, we specialize in evaluating and
                  managing symptoms of anxiety. Your first visit involves a
                  thorough psychiatric evaluation with multiple tools and
                  technologies that allow to understand your specific needs,
                  such as cognitive testing. Our providers take time to get to
                  know you and make you a partner in your anxiety treatment
                  plan. The goal of treatment is to provide both education and
                  relief. We can introduce you to resources that help you learn
                  about your particular diagnosis, treatment options, and
                  targeted interventions you can do on your own. Anxiety
                  treatment often includes medication management combined with
                  psychotherapy and lifestyle. To learn how you can manage
                  anxiety and improve your life, contact Unicare Psychiatry
                  today or request an appointment online.
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
