import "../styles/Community.css";
import { useTranslation } from "react-i18next";

import Icon1 from "../assets/card-icon-1.svg";
import Icon2 from "../assets/card-icon-2.svg";
import Icon3 from "../assets/card-icon-3.svg";

const Card = () => {
  const { t } = useTranslation();

  return (
    <div className="card-box">
      <div data-aos="fade-right" className="card">
        <img src={Icon1} alt="card-icon" className="card-icon" />
        <h2 className="title">
          {t("card1_title_1")} <br />
          {t("card1_title_2")}
        </h2>
        <p>{t("card_desc")}</p>
      </div>

      <div data-aos="zoom-in-up" className="card">
        <img src={Icon2} alt="card-icon" className="card-icon" />
        <h2 className="title">
          {t("card2_title_1")} <br />
          {t("card2_title_2")}
        </h2>
        <p>{t("card_desc")}</p>
      </div>

      <div data-aos="fade-left" className="card">
        <img src={Icon3} alt="card-icon" className="card-icon" />
        <h2 className="title">
          {t("card3_title_1")} <br />
          {t("card3_title_2")}
        </h2>
        <p>{t("card_desc")}</p>
      </div>
    </div>
  );
};

export default Card;