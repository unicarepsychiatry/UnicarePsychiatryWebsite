import React from "react";
import { WhyChooseusCard } from "./WhyChooseusCard";

export const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 order-md-1 order-2">
            <p className="f-18-b" data-aos="fade-down-up" data-aos-duration="3000">Why Choose Us</p>
            <h2 className="div-heading" data-aos="fade-left" data-aos-duration="1000">
              Why <b className="primary-color">Unicare Pychiatry</b> Healthcare?
            </h2>
            <p className="f-18-n custom-text-alignment container" data-aos="fade-right" data-aos-duration="1000">
              <b className="primary-color">Unicare Pychiatry</b> provides
              primary care services includes health promotion, disease
              prevention, health maintenance, counseling, patient education,
              diagnosis and treatment of acute and chronic illnesses in a
              variety of health care settings . Our providers, Nurse
              Practitioners and and experts who are committed to making your
              recovery and rehabilitation at home effective, accessible and
              affordable. <b className="">Unicare Pychiatry</b> is a
              professional in combining medical expertise with convenience and
              affordability with an aim to make professional services easily
              accessible to people on time. We take pride in providing
              consultation, laboratory tests, and provide treatment. Our{" "}
              <b className="">Unicare Pychiatry</b> is a center of excellence
              for chronic patients and community education
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="image-div col-md-6 col-12 order-md-2 order-1"></div>
        </div>
      </div>
      <div className="container">
      <div data-aos="fade-down" data-aos-duration="1000" className="d-flex flex-lg-row flex-column m-0 p-0 my-5">
        <WhyChooseusCard
          title="Affordable Price"
          subtitle="We brought the best standards within the reach of every individual at affordable prices."
          pic="../Images/icon-01.png"
        />
        <WhyChooseusCard
          title="Best Service"
          subtitle="Incorporating the best specialists and equipment to provide you nothing short of the best in healthcare"
          pic="../Images/icon-02.png"
        />
        <WhyChooseusCard
          title="Humble Provider"
          subtitle="Unicare pyshiatry doesn't compromise on the treatment approach and quality with a high bar of patience while treating"
          pic="../Images/icon-03.png"
        />
      </div>
      </div>
    </div>
  );
};
