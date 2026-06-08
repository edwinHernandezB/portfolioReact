import React from 'react'
import "./AboutSummaryComponent.css";
import data from "../../data/profile.json";

export const AboutSummaryComponent = () => {
  return (
    <section className="about-summary">
      <h2>About Me</h2>
      <p dangerouslySetInnerHTML={{ __html: data.summaryAbout }} />
      <button className="primary-button">Learn More</button>

    </section>
  )
}
