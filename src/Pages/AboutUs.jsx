import React from "react";
import { Helmet } from "react-helmet";
export const AboutUs = () => {
  return (
    <div className="px-md-5 px-3 mx-md-4 mx-2" data-aos="fade-up">
      <Helmet>
        <title>About-us - Unicare Psychiatry</title>
        <meta
          name="description"
          content="PharmaCare billing Solution is medical billing company in US."
        />
      </Helmet>
      <div className="container">
        <div className="row">
          <div
            className="px-0 mx-0 py-5 col-12"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2
              className="py-2 div-heading"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Nice to Meet You
            </h2>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-4 d-lg-flex d-none">
              <img
                className="img-fluid about-us-img"
                src="/Images/unnamed.png"
                alt="profile image"
              />
            </div>
            <div className="col-md-8 col-12">
              <div className="div-sub-heading">About us</div>
              <div className="f-18-n custom-text-alignment">
                <p>
                  As a board-certified psychiatric mental health nurse
                  practitioner, I offer comprehensive and individualized care
                  for children, teens, and adults. My experience with mental
                  health patients is broad, ranging from hospital and university
                  settings, to caring for the homeless in community-based
                  clinics. I provide the very best care to the patients on
                  location in Kentucky and across the state via telehealth
                  services.
                </p>
              </div>
            </div>
          </div>
          <div className="row col-12 my-lg-5 my-2 position-relative">
            <h4 className="row div-sub-heading">Professional Background</h4>
          <div className="col-md-6 col-12 order-lg-1 order-2">
          <p className="f-18-n custom-text-alignment">
              After completing my graduate studies as a Family Nurse
              Practitioner, I pursued advanced education at the University of
              Kentucky, earning my post-certificate as a Psych-Mental Health
              Nurse Practitioner. My extensive experience in mental health care
              spans diverse settings, including hospitals, nursing homes,
              community outpatient centers, and academic environments. I have
              served both as a provider and faculty member, working with varied
              populations such as children, homeless individuals, and those
              battling addiction, with a specific focus on opiate and alcohol
              dependency. Throughout my career, I've supported patients coping
              with severe early childhood trauma, leading to a range of
              psychiatric disorders including PTSD, Depression, Phobia,
              Substance use induced disorder, OCD, Anxiety, Bipolar, ADHD, and
              more. Each interaction has been a valuable and distinctive
              experience, deepening my empathy and reinforcing my commitment to
              advocating for individuals struggling with mental illness,
              regardless of their cultural, sexual, racial, or socioeconomic
              background. In my recent Doctorate of Nursing research project, I
              explored the integration of faith-based psychiatry in the
              treatment of mental health and opiate addiction. Incorporating
              Jean Watson’s theory of “Human Caring,” this endeavor reaffirmed
              the importance of compassion and patience in fostering hope for
              recovery. By combining faith-based care with effective therapeutic
              communication skills, alongside psychotherapy and medication
              management, my goal is to enhance not just physical health, but
              also mental and spiritual well-being. Currently, I am actively
              engaged in clinical practice throughout Kentucky and provide
              telehealth services to adolescents in Wisconsin. I collaborate
              with universities and rehabilitation centers, adhering to Florence
              Nightingale’s philosophy. I believe in empowering patients to
              self-heal, addressing both physical and mental health challenges
              through a holistic and compassionate approach."
            </p>
          </div>
          <div className="col-md-6 col-12 order-lg-2 order-1">
            <div className="profissional-bg"></div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};
