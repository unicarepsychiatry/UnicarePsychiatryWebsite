import React from "react";
import { WhyChooseusCard } from "./WhyChooseusCard";

const WhyChoosingUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="text-primary row text-center p-3">
        <h1 className="">Why Choose Uni-care Psychiatry?</h1>
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
                Committed to assisting students in achieving their goals and
                offering mentorship to newly graduated Nurse Practitioners.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                Collaborates with like-minded clinicians, including physicians
                across various states, and offers community resources for
                personalized healthcare.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                Extends its services to clients aged 5 and older, providing
                psychiatry services in rural areas across Kentucky, Iowa, New
                York, and Wisconsin, through both in-person sessions and
                telehealth consultations.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                Provides outpatient treatments for urgent medical care, opioid
                addiction, alcohol addiction, and acute or chronic psychiatric
                issues.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                Affiliated with various non-profit organizations in Kentucky and
                Wisconsin, our practice seamlessly integrates
                spirituality into our care philosophy, complementing
                evidence-based treatments with the comforting embrace of prayer.
                We believe in a holistic approach that nurtures both the body
                and the spirit, fostering healing and well-being for our clients
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12 align-items-start">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                We believe in the unity of all existence, where we resonate as
                one harmonious melody in the world's grand composition
                (uni-verse meaning "one song"). We are bound together by a
                single love, upheld by our creator, almighty, or higher power.
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
            subtitle="Uni-care Psychiatry maintains unwavering commitment to treatment approach and quality, prioritizing patience in care."
            pic="../Images/icon-03.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoosingUs;
