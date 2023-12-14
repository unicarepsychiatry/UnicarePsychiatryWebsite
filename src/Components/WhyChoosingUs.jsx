import React from "react";
import { WhyChooseusCard } from "./WhyChooseusCard";

const WhyChoosingUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="text-primary row text-center p-3">
      <h1 className="">Why Choose Uni-care Physctary.</h1>
      </div>
      <div className="d-flex w-100">
        <div className="text-primary d-md-flex d-none flex-column why-choose-us-bg justify-content-center align-items-center p-5 col-md-5 col-12">
        </div>
        <div className="text-container col-md-7 col-12">
          <div className="my-div mx-auto p-5 row">
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12">
              <div className="checked-span d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center chooseus">
              Uni-care Psychiatry serves
              students to reach their goal and provides mentorship to new
              graduates Nurse Practitioner
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12">
              <div className="checked-span d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
              Collaborates with likeminded clinicians, including physicians in
              different states, and provides resources in the community for
              personalized health care.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
              Uni-care Psychiatry reaches out to clients from age 5 and older
              for psychiatry services in rural areas in KY, IOWA, NY and WI,
              both in person and via telehealth.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
              Offers outpatient treatments for urgent medical care, opiate
              addiction, alcohol addiction and acute or chronic psychiatric
              problems.
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
              Affiliated with different non-profit organizations in Kentucky and
              Wisconsin. Uni-care Psychiatry includes spirituality and believes
              in prayer, along with other evidence-based treatments
            
              </div>
            </div>
            <div className="f-18-n d-flex my-lg-3 my-1 col-lg-6 col-12">
              <div className="checked-span  d-flex justify-content-center align-items-center">
                <i class="bi bi-check"></i>
              </div>
              <div className="    d-flex justify-content-center align-items-center">
              We believe we are all in one; we are all singing in this world one
              song (uni-verse means one song), and we are tied to one love held
              by our creator, almighty or higher power.
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

export default WhyChoosingUs;
