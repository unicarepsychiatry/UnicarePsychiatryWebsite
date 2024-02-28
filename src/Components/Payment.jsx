import React from "react";

const Payment = () => {
  return (
    <div className="payment-bg p-5">
      <div className="container">
        <div className="">
          <h2 className="text-uppercase p-4 text-white f-30-b text-center">
            <marquee scrollamount=""
                 scrolldelay=""> We accept a variety of payment methods for your convenience</marquee>
          </h2>
        </div>
        <div className="container p-0 m-0">
          <div className="row g-3 p-0 my-4 m-auto text-center d-flex justify-content-center">
            <div className="col-lg-4 col-sm-12 col-md-6">
              <h2 className="f-30-b text-white shadow-lg rounded p-2">Debit / Credit Card</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <h2 className="f-30-b text-white shadow-lg rounded p-2">Money Order</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <h2 className="f-30-b text-white shadow-lg rounded p-2">Self-Pay</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
