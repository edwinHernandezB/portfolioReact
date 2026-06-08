import React from "react";
import "./CardItemComponent.css";

export const CardItemComponent = (props) => {
  return (
    <>
      <section className="card-item">
        <img
          className="card-image"
          src={props.image || "/default-image.png"}
          alt={props.title}
        />
        <div className="card-info">
          <hr className="card-separator" />

          <h3 className="card-subtitle">{props.title}</h3>
          <div className="card-description-row">
            <p className="card-description">{props.description}</p>
            {props.buttonText && <button className="card-button">{props.buttonText}</button> }
            {props.placeholderText && <p className="card-placeholder">{props.placeholderText}</p>}
          </div>
        </div>
      </section>
    </>
  );
};
