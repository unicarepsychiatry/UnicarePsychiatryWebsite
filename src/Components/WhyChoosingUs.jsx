import React from "react";
import { WhyChooseusCard } from "./WhyChooseusCard";

const WhyChoosingUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="text-primary row text-center p-3">
        <h1 className="">Why Choose Unicare Psychiatry?</h1>
      </div>
      <div className="d-flex w-100">
        <div className="text-primary d-md-flex d-none flex-column why-choose-us-bg justify-content-center align-items-center p-5 col-md-5 col-12"></div>
        <div className="text-container col-md-7 col-12">
          <div className="my-div mx-auto p-5 row">
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start chooseus">
                Our clinicians provide personalized mental health care,
                ensuring every patient feels heard, supported, and cared for in
                a compassionate and understanding environment.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                We offer comprehensive psychiatry services for individuals aged
                5 and older, addressing a wide range of mental health concerns
                through in-person and telehealth consultations, including
                patients in rural areas.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                Our clinic integrates evidence-based practices with a holistic
                approach to treatment, focusing on the mind, body, and spirit
                for comprehensive care. We believe in empowering patients
                through both medical and spiritual support.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                We provide timely outpatient treatments for urgent psychiatric
                conditions, including substance use disorders, depression,
                anxiety, and other acute or chronic mental health challenges.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                Our telehealth services ensure that mental health care is
                accessible to those who may face geographical or mobility
                barriers, providing the same high-quality care from the comfort
                of your home.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                We work closely with other clinicians and healthcare providers
                to ensure that you receive a well-rounded treatment plan
                tailored to your unique needs.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="d-flex flex-lg-row flex-column m-0 p-0 my-5"
        >
          <WhyChooseusCard
            title="Affordable Pricing"
            subtitle="We bring the highest standards within reach, offering affordable prices for every individual."
            pic="../Images/icon-01.png"
          />
          <WhyChooseusCard
            title="Exemplary Service"
            subtitle="We integrate top specialists and cutting-edge equipment to ensure unparalleled healthcare."
            pic="../Images/icon-02.png"
          />
          <WhyChooseusCard
            title="Compassionate Care"
            subtitle="Unicare Psychiatry maintains unwavering commitment to treatment approach and quality, prioritizing patience in care."
            pic="../Images/icon-03.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoosingUs;
