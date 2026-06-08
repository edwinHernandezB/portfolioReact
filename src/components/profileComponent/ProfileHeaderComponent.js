import React from "react";
import data from "../../data/profile.json";

export const ProfileHeaderComponent = () => {
  return (
    <section className="profile-hero">
      <div className="profile-header">
        <h1>Welcome to My Portfolio</h1>
        <p dangerouslySetInnerHTML={{ __html: data.about }} />
        <div className="button-group">
          <button className="primary-button">View My Work</button>
          <button className="secondary-button">Download CV</button>
        </div>
      </div>

      <img
        src="/profile-picture.png"
        alt="Profile"
        className="profile-picture"
      />
    </section>
  );
};
