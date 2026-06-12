import React from "react";
import data from "../../data/profile.json";

export const ProfileHeaderComponent = props => {
  return (
    <section className="profile-hero">
      <div className="profile-header">
        <h1>{props.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: props.about }} />
        <div className="button-group">
          <button className="primary-button">View My Work</button>
          <button className="secondary-button">Download CV</button>
        </div>
      </div>

      <img
        src={props.image || "/default-image.png"}
        alt="Profile"
        className="profile-picture"
      />
    </section>
  );
};
