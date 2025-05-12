import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`portfolio-header ${isMenuOpen ? "active" : ""}`}>
      <div className="logo">{t("siteName")}</div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <HashLink smooth to="/#home" onClick={() => setIsMenuOpen(false)}>
              {t("nav.home")}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" onClick={() => setIsMenuOpen(false)}>
              {t("nav.about")}
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.projects")}
            </HashLink>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              {t("nav.contact")}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="controls">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("fr")}>FR</button>
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
      </div>
    </header>
  );
}
