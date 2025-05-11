import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css"; // Make sure this CSS file is imported

export default function Header() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    document.documentElement.setAttribute("data-theme", theme); // Apply theme globally
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu
  };

  return (
    <header className={`portfolio-header ${isMenuOpen ? "active" : ""}`}>
      <div className="logo">{t("siteName")}</div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">{t("nav.home")}</a></li>
          <li><a href="#about">{t("nav.about")}</a></li>
          <li><a href="#projects">{t("nav.projects")}</a></li>
          <li><a href="#contact">{t("nav.contact")}</a></li>
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
