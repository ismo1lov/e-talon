import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <>
    <input type="checkbox" className="check-input" id="menu"></input>
    <header data-aos="fade-down" data-aos-easing="linear" id="home" className="navbar">
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
            <a href="#home" className="link">{t("home")}</a>
            <a href="#community" className="link">{t("community")}</a>
            <a href="#features" className="link">{t("features")}</a>
            <a href="#contact" className="link">{t("contact")}</a>
            <a href="#register" className="link">{t("registe")}</a>
            

            <select onChange={changeLanguage} value={i18n.language}>
              <option value="ru">Рус</option>
              <option value="uz">Uzb</option>
              <option value="en">Eng</option>
            </select>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;