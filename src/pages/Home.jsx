import React from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="home-section" id="home">
      <div className="content">
        <h1>{t("home.title")}</h1>

        <h2 className="typewriter-line">
          I am{" "}
          <span className="typewriter-text">
            <Typewriter
              words={[
                "Web Developer",
                "Mobile App Developer",
                "Flutter Developer",
                "Laravel Developer",
                "MERN Stack Developer"
              ]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p>{t("home.subtitle")}</p>
        <a href="#projects" className="btn">{t("home.cta")}</a>
      </div>
    </section>
  );
}
