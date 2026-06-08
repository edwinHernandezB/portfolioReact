import React from "react";
import { ProfileHeaderComponent } from "../profileComponent/ProfileHeaderComponent";
import { CardItemComponent } from "../CardItemCopmonent/CardItemComponent";
import { AboutSummaryComponent } from "../AboutSummaryComponent/AboutSummaryComponent";
import { FormComponent } from "../FormComponent/FormComponent";
import { SkillComponent } from "../SkillComponent/SkillComponent";
import data from "../../data/profile.json";

export const Body = () => {
  console.log(data.skills.map((skill) => console.log(skill.technology)));

  return (
    <section className="body-content">
      <div className="header">
        <ProfileHeaderComponent />
        <hr />
      </div>

      <div className="projects">
        <h2>My Projects</h2>
         {data.Projects.map((project, index) => (
          <div key={index} className="experience-item">
            <CardItemComponent
              title={project.name}
              description={project.description}
              button={true}
              buttonText="View details"
            />
          </div>
        ))}
      </div>

      <div className="about">
        <AboutSummaryComponent />
      </div>

      <div className="contact">
        <h2>Contact Me</h2>
        <FormComponent />
      </div>

      <div className="education">
        <h2>Education</h2>
        <CardItemComponent />
      </div>

      <div className="experience">
        <h2>Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <CardItemComponent
              title={exp.company}
              description={exp.summary}
              button={true}
              buttonText={`${exp.years[exp.years.length - 1].start} - ${exp.years[0].end}`}
            />
          </div>
        ))}
      </div>

      <div className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          {data.skills.map((skill, index) => (
            <SkillComponent
              key={index}
              technology={skill.technology}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
