import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import uz from "../assets/uz.svg";
import ru from "../assets/ru.svg";
import en from "../assets/en.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const [open, setOpen] = useState(false);

  const languages = [
    { code: "ru", label: "Русский", flag: ru },
    { code: "uz", label: "O'zbek", flag: uz },
    { code: "en", label: "English", flag: en },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <>
      <input type="checkbox" className="check-input" id="menu"></input>
      <header
        data-aos="fade-down"
        data-aos-easing="linear"
        id="home"
        className="navbar"
      >
        <div className="container">
          <div className="navbar-content">
            <a href="#">
              <img src="/logo.svg" className="logo" />
            </a>

            <label htmlFor="menu">
              <div></div>
              <div></div>
              <div></div>
            </label>

            <ul className="menu">
              <a href="#home" className="link">
                {t("home")}
              </a>
              <a href="#community" className="link">
                {t("community")}
              </a>
              <a href="#features" className="link">
                {t("features")}
              </a>
              <a href="#contact" className="link">
                {t("contact")}
              </a>
              <a href="#register" className="link">
                {t("registe")}
              </a>

              <div className="lang-switcher">
                <button className="lang-btn" onClick={() => setOpen(!open)}>
                  <img src={currentLang.flag} />
               </button>

                {open && (
                  <div className="lang-dropdown">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className="lang-item"
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          localStorage.setItem("lang", lang.code);
                          setOpen(false);
                        }}
                      >
                        <img src={lang.flag} />
                        <span>{lang.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
