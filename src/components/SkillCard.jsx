import React from "react";
import "./SkillCard.css";

export default function SkillCard({ image, title }) {
  return (
    <div className="skill-card">
      <img src={image} alt={title} className="skill-card-image" />
      <p className="skill-card-title">{title}</p>
    </div>
  );
}
