import "../styles/Unlock.css";
import Frame from "../assets/Frame-1.svg";
import { useTranslation } from "react-i18next";

const Unlock = () => {
  const { t } = useTranslation();

  return (
    <section className="unlock">
      <div className="container">
        <div className="unlock-content">
          <img data-aos="fade-right" src={Frame} alt="Frame" />

          <div data-aos="fade-left" className="text-box">
            <h1>
              {t("unlock_title_1")} <br />
              {t("unlock_title_2")}
            </h1>

            <p>{t("unlock_desc")}</p>

            <button className="btn">{t("learn_more")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unlock;