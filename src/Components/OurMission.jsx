import React from "react";

export const OurMission = () => {
  return (
    <section id="OurMission" className=" d-flex">
      <div className="container-fluid p-lg-3 p-3 d-flex flex-lg-row flex-column  my-auto">
        <div className="section-header col-md-6 col-12 d-flex align-items-center justify-content-center">
          <img
            className="img-fluid img-style"
            src="../Images/mission-1.jpg"
            alt=""
          />
        </div>
        <div className="features-holder col-md-6 col-12 d-flex align-items-center justify-content-center text-center">
          <div className="p-lg-3" data-aos="fade-down-left">
            <h2 className="div-heading">Our Mission</h2>
            <p className="f-18-b mx-md-2">
              At Unicare Psychiatry, our mission is to provide exceptional
              holistic care to our patients. By integrating faith-based
              {/* principles with evidence-based therapies and medication
              management, we ensure the highest standards of excellence in
              patient care. Our commitment is to support and guide our patients
              towards achieving optimal mental health and well-being. */}
            </p>
            {/* <button
              className="my-3 px-md-5 p-2 btn button-primary text-white"
              type="submit"
            >
              Explore more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
