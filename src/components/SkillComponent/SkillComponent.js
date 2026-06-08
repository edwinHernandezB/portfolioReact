import React from 'react'
import "./SkillComponent.css";
export const SkillComponent = props => {
  return (
    <div className="skill">
  <span className="skill-label">{props.technology}</span>
  <div className="skill-bar">
    <div className="skill-fill" style={{ width: `${props.level}%` }}></div>
  </div>
</div>

  )
}
