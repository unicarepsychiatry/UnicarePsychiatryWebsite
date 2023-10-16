import React from "react";

export const OurServicesCard = ({ title, pic }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="col-md-3 col-12 Speical-card"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="Sepcial-card-body">
        <h1 className="special-card-title">{title}</h1>
        </div>
      </div>
    </div>
  );
};
