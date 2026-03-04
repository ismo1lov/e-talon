import "../styles/Community.css";
import { useTranslation } from "react-i18next";
import Card from "./Card";

const Community = () => {
  const { t } = useTranslation();

  return (
    <section className="community">
      <div className="container">
        <div className="community-content">
          <h1 data-aos="zoom-out">
            {t("community_title_1")} <br />
            {t("community_title_2")}
          </h1>

          <p data-aos="zoom-out">{t("community_desc")}</p>

          <Card />
        </div>
      </div>
    </section>
  );
};

export default Community;