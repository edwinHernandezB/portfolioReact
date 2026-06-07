import React from 'react'
import "./SkillComponent.css";
export const SkillComponent = () => {
  return (
    <div className="skill">
  <span className="skill-label">Skill</span>
  <div className="skill-bar">
    <div className="skill-fill" style={{ width: "85%" }}></div>
  </div>
</div>

  )
}
