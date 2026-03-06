import "../styles/Community.css";
import { useTranslation } from "react-i18next";


const Card = () => {
  const { t } = useTranslation();

  return (
    <div className="card-box">
        <div data-aos="fade-right" className="card">
          <i className="bi bi-building-gear"></i>
          <h2 className="title">
            {t("card1_title_1")} <br />
            {t("card1_title_2")}
          </h2>
          <p>{t("card_desc-1")}</p>
        </div>

        <div data-aos="zoom-in-up" className="card">
          <i className="bi bi-pc-display"></i>
          <h2 className="title">
            {t("card2_title_1")} <br />
            {t("card2_title_2")}
          </h2>
          <p>{t("card_desc-2")}</p>
        </div>

        <div data-aos="fade-left" className="card">
          <i class="bi bi-tools"></i>
          <h2 className="title">
            {t("card3_title_1")} <br />
            {t("card3_title_2")}
          </h2>
          <p>{t("card_desc-3")}</p>
        </div>

        <div data-aos="fade-right" className="card">
          <i className="bi bi-people"></i>
          <h2 className="title">
            {t("card4_title_1")} <br />
            {t("card4_title_2")}
          </h2>
          <p>{t("card_desc-1")}</p>
        </div>

        <div data-aos="zoom-in-up" className="card">
          <i className="bi bi-cup-hot"></i>
          <h2 className="title">
            {t("card5_title_1")} <br />
            {t("card5_title_2")}
          </h2>
          <p>{t("card_desc-2")}</p>
        </div>

        <div data-aos="fade-left" className="card">
          <i className="bi bi-bank"></i>
          <h2 className="title">
            {t("card6_title_1")} <br />
            {t("card6_title_2")}
          </h2>
          <p>{t("card_desc-3")}</p>
        </div>
    </div>
  );
};

export default Card;
