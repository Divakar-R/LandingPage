import React from "react";

export default function Features({ data }) {
  return (
    <div className="col-lg-4">
      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
        <div className="features-icons-icon d-flex">{data.icon}</div>
        <h3>{data.name}</h3>
        <p className="lead mb-0">{data.description}</p>
      </div>
    </div>
  );
}
