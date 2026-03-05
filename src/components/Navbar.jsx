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
    <input type="checkbox" id="menu"></input>
    <header data-aos="fade-down" data-aos-easing="linear" className="navbar">
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
            <a href="#" className="link">{t("home")}</a>
            <a href="#" className="link">{t("features")}</a>
            <a href="#" className="link">{t("community")}</a>
            <a href="#" className="link">{t("blog")}</a>
            <a href="#" className="link">{t("pricing")}</a>

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