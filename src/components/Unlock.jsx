import "../styles/Unlock.css";
import Frame from "../assets/Frame-1.svg";
import { useTranslation } from "react-i18next";

const Unlock = () => {
  const { t } = useTranslation();

  return (
    <section className="unlock" id="features">
      <div className="container">
        <div className="unlock-content">
          <img data-aos="fade-right" src={Frame} alt="Frame" />
          <div data-aos="fade-left" className="text-box">
            <h1>{t("unlock_heading")}</h1>
            <h2>{t("unlock_title_1")}</h2>
            <p>
              {t("unlock_p_1")}
            </p>
            <h2>{t("unlock_title_2")}</h2>
            <p>
              {t("unlock_p_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
