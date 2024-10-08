import React from "react";

const SectionHeading = ({ heading }) => {
  return (
    <div className="col-md-6 col-sm-12 mb-4">
      <h1 className="mb-3 text-nowrap fw-bold">{heading}</h1>
    </div>
  );
};

export default SectionHeading;