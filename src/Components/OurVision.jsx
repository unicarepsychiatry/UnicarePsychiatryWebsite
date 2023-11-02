import React from "react";

export const OurVision = () => {
  return (
    <div id="OurVission">
      <section className="overflow-hidden our-vission-component d-flex">
        <div className="container p-lg-0 p-md-3 p-5 d-flex flex-lg-row flex-column my-auto">
          <div className="order-lg-1 order-2 col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center text-center">
            <div className="" data-aos="fade-down-left">
              <p className="f-18-b text-white">
                The vision of Uni-care psychiatry is centered in regions with
                limited access to psychiatric care including addiction
                treatment. Uni-care psychiatry extends its services to
                Wisconsin, and soon to add New York, and Iowa through
                telehealth, addressing the severe need for mental health
                services in underserved populations with other mental health
                clinicians who hold same vision.
              </p>
              <button
                className="my-3 px-md-5 p-2 btn button-primary text-white"
                type="submit"
              >
                Explore more
              </button>
            </div>
          </div>
          <div className="section-header col-lg-6 col-md-6 col-12  d-flex align-items-center order-lg-2 order-md-2 order-1 justify-content-center">
            <p
              className="div-heading text-white f-30-b"
              data-aos="fade-down-right"
            >
              Our Vision
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
