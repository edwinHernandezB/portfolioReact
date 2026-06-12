import React from "react";
import { ProfileHeaderComponent } from "../profileComponent/ProfileHeaderComponent";
import { CardItemComponent } from "../CardItemCopmonent/CardItemComponent";
import { AboutSummaryComponent } from "../AboutSummaryComponent/AboutSummaryComponent";
import { FormComponent } from "../FormComponent/FormComponent";
import { SkillComponent } from "../SkillComponent/SkillComponent";
import data from "../../data/profile.json";

export const Body = () => {
  return (
    <section className="body-content">
      <div className="header">
        <ProfileHeaderComponent 
        title="Welcome to My Portfolio"
        about={data.about}
        image={data.image}
        />
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
              image={project.image}
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
        {data.education.map((education, index) => (
          <div key={index} className="experience-item">
            <CardItemComponent
              title={education.institution}
              description={`${education.name} - ${education.specialization}`}
              button={true}
              placeholderText={education.year}
              image={education.image}
            />
          </div>
        ))}
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
              image={exp.image}
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
