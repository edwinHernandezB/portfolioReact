import React from "react";
import "./CardItemComponent.css";

export const CardItemComponent = () => {
  return (
    <div className="card-item">
      <hr className="card-divider" />
      <h2 className="card-title">Title </h2>
      <img
        className="card-image"
        src="/images/trafic-analyzer.png"
        alt="Profile"
      />
      <h3 className="card-subtitle">subtitle</h3>
      <p className="card-description">description</p>
      <button className="card-button">View details</button>
      <hr className="card-divider" />
    </div>
  );
};
