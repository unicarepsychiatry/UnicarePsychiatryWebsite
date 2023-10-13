import React from "react";

export const OurMission = () => {
  return (
    <section className="our-features d-flex">
      <div className="container-fluid p-lg-3 p-3 d-flex flex-lg-row flex-column  my-auto">
        <div className="section-header col-md-6 col-12 d-flex align-items-center justify-content-center">
        <img className="img-fluid img-style" src="../Images/mission-1.jpg" alt="" />
        </div>
        <div className="features-holder col-md-6 col-12 d-flex align-items-center justify-content-center text-center">
          <div className="p-3" data-aos="fade-down-left">
          <h2 className="div-heading">Our Mission</h2>
            <p className="f-18-b">
              Our mission is to empower newly graduated nurse practitioners,
              arming them with the tools to utilize UniCare, where love is the
              universal remedy. We accomplish this by providing them with the
              latest evidence-based information and cultivating a healthcare
              environment rooted in compassion and understanding."
            </p>
            <button
                    className="my-3 px-md-5 p-2 btn button-primary text-white"
                    type="submit">Explore more</button>
          </div>
        </div>
      </div>
    </section>
  );
};
