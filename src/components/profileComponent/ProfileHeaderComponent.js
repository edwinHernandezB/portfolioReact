import React from "react";

export const ProfileHeaderComponent = () => {
  return (
    <div className="profile-hero">
      <div className="profile-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Edwin, a passionate software developer with a love for
          creating innovative solutions. With experience in various programming
          languages and frameworks, I enjoy tackling complex problems and
          building user-friendly applications. Explore my projects and skills to
          see what I've been working on!
        </p>
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
    </div>
  );
};
