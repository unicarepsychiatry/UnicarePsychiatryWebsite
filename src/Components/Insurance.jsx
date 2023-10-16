import React from "react";

const Insurance = () => {
  return (
    <div className="insurance-bg p-5">
      <div className="container">
        <div className="">
          <h2 className="text-uppercase p-4 text-white f-30-b text-center shadow-lg ">insurance</h2>
        </div>
        <div className="container p-0 m-0">
        <div className="row g-3 p-0 my-4 m-auto text-center d-flex justify-content-center">
            <div className="col-lg-4 col-sm-12 col-md-6"><img className="img-fluid insurance-logos" src="Images/Medicare.png"/></div>
            <div className="col-lg-4 col-sm-12 col-md-6"><img className="img-fluid insurance-logos" src="Images/aetna.png"/></div>
            <div className="col-lg-4 col-sm-12 col-md-6"><img className="img-fluid insurance-logos" src="Images/BlueCross.png"/></div>
            <div className="col-lg-4 col-sm-12 col-md-6"><img className="img-fluid insurance-logos" src="Images/cigna.png"/></div>
            <div className="col-lg-4 col-sm-12 col-md-6"><img className="img-fluid insurance-logos" src="Images/Humana.png"/></div>
            <div className="col-lg-4 col-sm-12 col-md-6"><img className="img-fluid insurance-logos" src="Images/Medicaid.png"/></div>
            <div className="col-lg-4 col-sm-12 col-md-6"><img className="img-fluid insurance-logos" src="Images/UnitedHealthCare.png"/></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
