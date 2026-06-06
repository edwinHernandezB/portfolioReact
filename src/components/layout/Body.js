import React from "react";
import { ProfileHeaderComponent } from "../profileComponent/ProfileHeaderComponent";
import { CardItemComponent } from "../CardItemCopmonent/CardItemComponent";

export const Body = () => {
  return (
    <section className="body-content">
      <ProfileHeaderComponent />
      <hr />
      <h2 className="project-title">My Projects </h2>
      <CardItemComponent />
      <h2 className="project-title">More Articles </h2>
      <CardItemComponent />
      <h2 className="project-title">About Me </h2>
      <h2 className="project-title">Experience </h2>
       <CardItemComponent />
             <h2 className="project-title">Contact Me </h2>
    </section>
  );
};
