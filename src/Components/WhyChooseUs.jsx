import React from "react";
import { WhyChooseusCard } from "./WhyChooseusCard";

export const WhyChooseUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="">
        <div className="row">
          <div className="overvission col-md-6 col-12 order-md-1 order-2 p-5">
            {/* <p className="f-18-b" data-aos="fade-down-up" data-aos-duration="3000">Why Choose Us</p> */}
            <h2
              className="div-heading"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <b className="primary-color">Why Uni-care Psychiatry?</b>
            </h2>
            <p
              className="f-18-n custom-text-alignment container"
              data-aos="fade-down"
              data-aos-duration="200"
            >
              <b className="primary-color">Uni-care Psychiatry</b> serves
              students to reach their goal and provides mentorship to new
              graduates Nurse Practitioner
           
              Collaborates with likeminded clinicians, including physicians in
              different states, and provides resources in the community for
              personalized health care.
            
              Uni-care Psychiatry reaches out to clients from age 5 and older
              for psychiatry services in rural areas in KY, IOWA, NY and WI,
              both in person and via telehealth.
            
              Offers outpatient treatments for urgent medical care, opiate
              addiction, alcohol addiction and acute or chronic psychiatric
              problems.
            
              Affiliated with different non-profit organizations in Kentucky and
              Wisconsin. Uni-care Psychiatry includes spirituality and believes
              in prayer, along with other evidence-based treatments
            
              We believe we are all in one; we are all singing in this world one
              song (uni-verse means one song), and we are tied to one love held
              by our creator, almighty or higher power.
            </p>
          </div>
          <div
            className="image-div col-md-6 col-12 order-md-2 order-1"
          ></div>
        </div>
      </div>
      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="d-flex flex-lg-row flex-column m-0 p-0 my-5"
        >
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
            subtitle="Uni-care Psychiatry doesn't compromise on the treatment approach and quality with a high bar of patience while treating"
            pic="../Images/icon-03.png"
          />
        </div>
      </div>
    </div>
  );
};
