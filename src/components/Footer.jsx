import "../styles/Footer.css";
import List from "./lists";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div data-aos="fade-down" className="footer-content">
          <div className="logo-box">
            <a href="#"><img src="./logo.svg" alt="logo" /></a>
            <p>{t("footer-copyright-1")} <br />
            {t("footer-copyright-2")}</p>
            <div className="social-box">
                <a href="https://www.instagram.com/odilsoft.uz/"><i className="bi bi-instagram"></i></a>
                <a href="https://twitter.com"><i className="bi bi-twitter"></i></a>
                <a href="https://www.youtube.com"><i className="bi bi-youtube"></i></a>
                <a href="https://t.me/s/odilsoft_uz"><i className="bi bi-send-fill"></i></a>
            </div>
          </div>
          <List/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
