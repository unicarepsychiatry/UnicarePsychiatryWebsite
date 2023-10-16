import React from "react";

const Payment = () => {
  return (
    <div className="payment--bg p-5">
      <div className="container">
        <div className="">
          <h2 className="text-uppercase p-4 text-white f-30-b text-center">
            The following payment methods are accepted:
          </h2>
        </div>
        <div className="container p-0 m-0">
          <div className="row g-3 p-0 my-4 m-auto text-center d-flex justify-content-center">
            <div className="col-lg-4 col-sm-12 col-md-6">
              <h2 className="f-30-b text-white">Debit/Credit cards</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <h2 className="f-30-b text-white">Money Order</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <h2 className="f-30-b text-white">Cash</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
