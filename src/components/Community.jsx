import "../styles/Community.css";
import { useTranslation } from "react-i18next";
import Card from "./card.jsx";

const Community = () => {
  const { t } = useTranslation();

  return (
    <section className="community" id="community">
      <div className="container">
        <div className="community-content">
          <h1 data-aos="zoom-out">
            {t("community_title_1")} <br />
            {t("community_title_2")}
          </h1>
          <p data-aos="zoom-out">{t("community_desc")}</p>

          <Card/>
          <button className="btn">{t("community_btn")}</button>
        </div>
      </div>
    </section>
  );
};

export default Community;