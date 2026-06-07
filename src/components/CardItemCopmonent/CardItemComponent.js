import React from "react";
import "./CardItemComponent.css";

export const CardItemComponent = () => {
  return (
    <>
      <section className="card-item">
        <img
          className="card-image"
          src="/default-image.png"
          alt="Profile"
        />
        <div className="card-info">
          <hr className="card-separator" />

          <h3 className="card-subtitle">title</h3>
          <div className="card-description-row">
            <p className="card-description">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="card-button">View Details</button>
          </div>
        </div>
      </section>
      <section className="card-item">
        <img
          className="card-image"
          src="/default-image.png"
          alt="Profile"
        />
        <div className="card-info">
          <hr className="card-separator" />

          <h3 className="card-subtitle">title</h3>
          <div className="card-description-row">
            <p className="card-description">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="card-button">View Details</button>
          </div>
        </div>
      </section>
    </>
  );
};
