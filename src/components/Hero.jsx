import "../styles/Hero.css";
import illustration from "../assets/Illustration.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div data-aos="fade-right">
            <h1>
              {t("hero_title_1")} <br />
              <span>{t("hero_title_2")}</span>
            </h1>

            <p>{t("hero_desc")}</p>

            <a className="btn" href="#register">
              {t("register")} →
            </a>
          </div>

          <img
            data-aos="fade-left"
            src={illustration}
            className="illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;