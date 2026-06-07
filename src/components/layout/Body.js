import React from "react";
import { ProfileHeaderComponent } from "../profileComponent/ProfileHeaderComponent";
import { CardItemComponent } from "../CardItemCopmonent/CardItemComponent";
import { AboutSummaryComponent } from "../AboutSummaryComponent/AboutSummaryComponent";
import { FormComponent } from "../FormComponent/FormComponent";
import { SkillComponent } from "../SkillComponent/SkillComponent";

export const Body = () => {
  return (
    <section className="body-content">
      <div className="header">
        <ProfileHeaderComponent />
        <hr />
      </div>

      <div className="projects">
        <h2>My Projects</h2>
        <CardItemComponent />
      </div>

      <div className="about">
        <AboutSummaryComponent />
      </div>

      <div className="contact">
        <h2>Contact Me</h2>
        <FormComponent />
      </div>

      <div className="articles">
        <h2>More Articles</h2>
        <CardItemComponent />
      </div>

      <div className="experience">
        <h2>Experience</h2>
        <CardItemComponent />
      </div>

      <div className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-container">
  <SkillComponent label="JavaScript" level={85} />
  <SkillComponent label="React" level={80} />
  <SkillComponent label="Node.js" level={70} />
  <SkillComponent label="CSS" level={90} />
</div>

      </div>
    </section>
  );
};
