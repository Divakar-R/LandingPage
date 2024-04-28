import React from "react";

export default function Peoples({ data }) {
  return (
    <div className="col-lg-4">
      <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img
          className="img-fluid rounded-circle mb-3"
          src={data.image}
          alt="..."
        />
        <h5>{data.name}</h5>
        <p className="font-weight-light mb-0">{data.description}</p>
      </div>
    </div>
  );
}
