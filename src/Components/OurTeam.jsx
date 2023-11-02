import React from "react";

const OurTeam = () => {
  return (
    <div
      className="my-md-5 m-3 overflow-hidden teamsection"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div className="container py-5">
        <div className="section-title row py-md-5 my-3">
          <h3 className="text-primary text-center">Meet Our Team</h3>
          <p className="f-22-b text-secondary text-center">Our Highly Valued Members</p>
        </div>
        <div className="row">
          <div className="col-md-3 col-6 d-flex align-items-streched">
            <div className="membercard" data-aos="fade-up" data-aos-delay="200">
            <div className="member-img">
              <img className="img-fluid"  src="/Images/unnamed.png" alt="" />
              <div className="social-media-urls">
                <a href="https://www.twitter.com" className="icons">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com" className="icons">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com" className="icons">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" className="icons">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>

            </div>
            <div className="member-info row">
            <h4 className="text-center text-primary">Dr. Yasmin Majumder</h4>
              <p  className="text-center f-18-b text-secondary">CEO</p>
              <p className="text-center f-18-n text-secondary" style={{marginTop:"-20px"}}>DNP, FNP-BC, PMHNP</p>
            </div>
            </div>
          </div>

          <div className="col-md-3 col-6 d-flex align-items-streched">
            <div className="membercard" data-aos="fade-up" data-aos-delay="400">
            <div className="member-img">
              <img className="img-fluid" src="/Images/Diana.png" alt="" />
              <div className="social-media-urls">
                <a href="https://www.twitter.com" className="icons">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com" className="icons">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com" className="icons">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" className="icons">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>

            </div>
            <div className="member-info row">
              <h4 className="text-center text-primary">Diana Spring</h4>
              <p className="text-center f-18-b text-secondary">APRN, FNP-C</p>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-streched">
            <div className="membercard" data-aos="fade-up" data-aos-delay="600">
            <div className="member-img">
              <img className="img-fluid" src="/Images/Jason.jpeg" alt="" />
              <div className="social-media-urls">
                <a href="https://www.twitter.com" className="icons">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com" className="icons">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com" className="icons">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" className="icons">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>

            </div>
            <div className="member-info row">
              <h4 className="text-center text-primary">Jason Muzzillo</h4>
              <p className="text-center f-18-b text-secondary">LCSW - Lexington</p>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-streched">
            <div className="membercard" data-aos="fade-up" data-aos-delay="800">
            <div className="member-img">
              <img className="img-fluid" src="/Images/Nikki.png" alt="" />
              <div className="social-media-urls">
                <a href="https://www.twitter.com" className="icons">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com" className="icons">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com" className="icons">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" className="icons">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>

            </div>
            <div className="member-info row">
              <h4 className="text-center text-primary">Nikki Myles</h4>
              <p className="text-center f-18-b text-secondary">FNP-BC, PMHNP</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
