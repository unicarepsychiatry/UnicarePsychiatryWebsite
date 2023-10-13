import React from "react";

export const OurServicesCard = ({ title, pic }) => {
  return (
    <div className="">
      <div
        className="col-md-4 col-12 my-3 Speical-card"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="Sepcial-card-body">
        <h1 className="special-card-title">{title}</h1>
        </div>
      </div>
    </div>
  );
};
