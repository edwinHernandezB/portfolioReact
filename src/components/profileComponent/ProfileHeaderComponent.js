import React from "react";

export const ProfileHeaderComponent = () => {
  return (
    <section className="profile-hero">
      <div className="profile-header">
        <h1>Welcome to My Portfolio</h1>
        <p> lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

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
    </section>
  );
};
