import React from "react";
import { useTranslation } from "react-i18next";
import SkillCard from "../components/SkillCard"; // Adjust the import path as necessary
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  const skills = [
    { image: "/images/web.png", title: t("about.skill1") },
    { image: "/images/mobile.png", title: t("about.skill2") },
    { image: "/images/backend.png", title: t("about.skill3") },
    { image: "/images/mern.png", title: t("about.skill4") },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>{t("about.title")}</h2>
        <p className="about-description">{t("about.description")}</p>
        
        <div className="skills">
          <h3>{t("about.skillsTitle")}</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard key={index} image={skill.image} title={skill.title} />
            ))}
          </div>
        </div>

        <div className="quote">
          <p>"{t("about.motto")}"</p>
        </div>
      </div>
    </section>
  );
}
