import React from "react";

export const OurVision = () => {
  return (
    <div id="OurVission">
      <section className="overflow-hidden our-vission-component d-flex">
        <div className="container p-lg-0 p-md-3 p-5 d-flex flex-lg-row flex-column my-auto">
          <div className="order-lg-1 order-2 col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center text-center">
            <div className="" data-aos="fade-down-left">
              <p className="f-18-b text-white">
                Our vision at Unicare Psychiatry is to bridge the gap in mental
                health services by providing accessible, patient-centered care
                through the lens of a psychiatric provider. We aim to expand our
                reach by leveraging telehealth services and collaborating with
                mental health professionals to address the growing demand for
                high-quality psychiatric care. Together, we work to remove
                barriers, reduce stigma, and promote mental health awareness for
                underserved and vulnerable communities.
              </p>
              {/* <button
                className="my-3 px-md-5 p-2 btn button-primary text-white"
                type="submit"
              >
                Explore more
              </button> */}
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
