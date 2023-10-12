import React from 'react'
import { Helmet } from 'react-helmet'
export const AboutUs = () => {
  return (

<div className="px-md-5 px-3 mx-md-4 mx-2 white-bg" data-aos="fade-up">
    <Helmet>
          <title>About-us pharmaCare billing Solutions</title>
          <meta name="description" content="PharmaCare billing Solution is medical billing company in US."/>
    </Helmet>
      <div className="container d-flex">
        <div
          className="col-md-6 px-0 mx-0 py-5 col-12"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2
            className="py-2 div-heading"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Nice to Meet You
          </h2>
          <p className="f-18-n mx-2">
            We are committed to your success. At Pharmacare Billing Solution, we
            take a comprehensive, all-inclusive approach to the hospital billing
            and collection process. Not only do we continuously update our staff
            on changes in billing codes and payer procedures, but we also invest
            in the latest medical billing technology to provide the best
            possible service. As a hospital billing company, our internal
            quality control measures ensure accurate claims and an error-free
            billing process, for the first time. We offer end-to-end services
            from pre-admission procedures to coding, AR management, collections
            and follow-up, to detailed real-time reporting. Our hospital clients
            see reduced operating costs, increased reimbursements, improved
            collection ratio, and recovery of AR accounts dating as far back as
            a full year. Ignored claims, denials, and underpayments can
            significantly affect your hospital’s revenue stream and bottom line,
            which can negatively impact your primary focus—patient care.
          </p>
        </div>
        <div
          className="col-md-6 d-lg-flex d-none"
          data-aos="flip-right"
          data-aos-delay="400"
        >
          <span className="about-us-img w-100"></span>
        </div>
      </div>
    </div>
  )
}
