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
                <h3 className="text-primary">Dr. Yasmin Majumder</h3>
                <p className="f-22-b text-secondary">DNP, FNP-BC, PMHNP</p>
                <div className="f-18-n custom-text-alignment">
                  <p>
                    As a board-certified psychiatric mental health nurse
                    practitioner, I offer comprehensive and individualized care
                    for children, teens, and adults. My experience with mental
                    health patients is broad, ranging from hospital and
                    university settings, to caring for the homeless in
                    community-based clinics. I provide the very best care to the
                    patients on location in Kentucky and across the state via
                    telehealth services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row col-12 p-0 m-0">
              <h4 className="mt-3 row div-sub-heading">
                Professional Background
              </h4>
              <div
                data-aos="fade-left"
                className="col-md-6 col-12 order-lg-1 order-2 my-md-5 my-0"
              >
                <p className="f-18-n custom-text-alignment">
                  After completing my graduate studies as a Family Nurse
                  Practitioner, while serving as a registered nurse practitioner
                  in Psychiatric Eastern State Hospital for 10 years as nurse
                  and 4 years as a family nurse practitioner in collaboration
                  with psychiatric MD and medical director. I pursued advanced
                  education at the University of Kentucky, earning my
                  post-certificate as a Psych-Mental Health Nurse Practitioner.
                  My extensive experience in mental health care spans diverse
                  settings, including hospitals, nursing homes, community
                  outpatient centers, and academic environments. I have served
                  both as a provider and faculty member, working with varied
                  populations such as children, homeless individuals, and those
                  battling addiction, with a specific focus on opiate and
                  alcohol dependency.
                </p>
                <p className="f-18-n custom-text-alignment">
                  Throughout my career, I've supported patients coping with
                  severe early childhood trauma, leading to a range of
                  psychiatric disorders including PTSD, Depression, Phobia,
                  Substance use induced disorder, OCD, Anxiety, Bipolar, ADHD,
                  and more. Each interaction has been a valuable and distinctive
                  experience, deepening my empathy and reinforcing my commitment
                  to advocating for individuals struggling with mental illness,
                  regardless of their cultural, sexual, racial, or socioeconomic
                  background.
                </p>
              </div>

              <div
                data-aos="fade-right"
                className="col-md-6 col-12 order-1 order-md-1"
              >
                <img
                  className="img-fluid shadow-plus-border h-75 w-100"
                  src="Images/professionalbg.webp"
                  alt="picture"
                />
              </div>
            </div>
            <div className="container">
              <p className="f-18-n custom-text-alignment">
                In my recent Doctorate of Nursing research project, I explored
                the integration of faith-based psychiatry in the treatment of
                mental health and opiate addiction. Incorporating Jean Watson’s
                theory of “Human Caring,” this endeavor reaffirmed the
                importance of compassion and patience in fostering hope for
                recovery. By combining faith-based care with effective
                therapeutic communication skills, alongside psychotherapy and
                medication management, my goal is to enhance not just physical
                health, but also mental and spiritual well-being.
              </p>

              <p className="f-18-n custom-text-alignment">
                Currently, I am actively engaged in clinical practice throughout
                Kentucky and provide telehealth services to adolescents in
                Wisconsin. I collaborate with universities and rehabilitation
                centers, adhering to Florence Nightingale’s philosophy. I
                believe in empowering patients to self-heal, addressing both
                physical and mental health challenges through a holistic and
                compassionate approach."
              </p>
            </div>
            <div className="line pb-3"></div>
            <div className="row overflow-hidden col-12 p-0 m-0">
              <h4 className="mt-md-5 mt-4 row f-22-b text-secondary">
                Academic Background
              </h4>
              <div
                data-aos="fade-left"
                className="col-md-6 col-12 order-lg-1 order-2 my-md-5 my-0"
              >
                <div className="p-3">
                  <span className="d-flex flex-row f-22-n text-primary">
                    <img className="img-fluid px-3 university-icon" src="/Images/University.png"/>NORTHERN KENTUCKY
                  </span>
                  <span className="d-flex my-1 flex-row  f-18-n ">
                    <img className="img-fluid px-3 university-icon" src="/Images/Degree.png"/>
                    Doctorate of Nursing Practice (DNP) 2022
                  </span>
                </div>

                <div className="p-3">
                  <span className="d-flex flex-row  f-22-n text-primary">
                    <img className="img-fluid px-3 university-icon" src="/Images/University.png"/>
                    UNIVERSITY OF KENTUCKY
                  </span>
                  <span className="d-flex my-1 flex-row  f-18-n ">
                    <img className="img-fluid px-3 university-icon" src="/Images/Degree.png"/>
                    Psychiatry Mental Health Nurse Practitioner (PMHNP) 2018
                  </span>
                </div>

                <div className="p-3">
                  <span className="d-flex flex-row  f-22-n text-primary">
                    <img className="img-fluid px-3 university-icon" src="/Images/University.png"/>
                    SPALDING UNIVERSITY
                  </span>
                  <span className="d-flex my-1 flex-row  f-18-n ">
                    <img className="img-fluid px-3 university-icon" src="/Images/Degree.png"/>
                    Family Nurse Practitioner (FNP) 2013
                  </span>
                </div>

                <div className="p-3">
                  <span className="d-flex flex-row  f-22-n text-primary">
                    <img className="img-fluid px-3 university-icon" src="/Images/University.png"/>
                    INDIANA WESLEYAN UNIVERSITY
                  </span>
                  <span className="d-flex my-1 flex-row  f-18-n ">
                    <img className="img-fluid px-3 university-icon" src="/Images/Degree.png"/>
                    Bachelor’s Degree Nursing (BSN) 2008
                  </span>
                </div>
                <div className="p-3">
                  <span className="d-flex flex-row  f-22-n text-primary">
                    <img className="img-fluid px-3 university-icon" src="/Images/University.png"/>
                    EASTERN KENTUCKY UNIVERSITY
                  </span>
                  <span className="d-flex my-1 flex-row  f-18-n ">
                    <img className="img-fluid px-3 university-icon" src="/Images/Degree.png"/>
                    Associates in Nursing (ADN) 2004
                  </span>
                </div>
              </div>

              <div
                data-aos="fade-right"
                className="col-md-6 col-12 order-1 order-md-1"
              >
                <img
                  className="img-fluid shadow-plus-border h-75 w-100"
                  src="Images/334.jpg"
                  alt="picture"
                />
              </div>
            </div>
            <div className="line pb-3"></div>
            <div className="row overflow-hidden col-12 p-0 m-0">
              <h4 className="mt-md-5 mt-4 row f-22-b text-secondary">
                About Unicare Psychiatry
              </h4>
              <div
                data-aos="fade-left"
                className="col-md-6 col-12 order-lg-1 order-2 my-md-5 my-0"
              >
                <div className="p-3">
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
                    healing where we will support you. Through
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
                  className="img-fluid shadow-plus-border h-75 w-100"
                  src="Images/banner.png"
                  alt="picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
