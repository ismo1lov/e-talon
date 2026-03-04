import "../styles/Update.css";
import { useTranslation } from "react-i18next";
import Description from "./Description";

const Update = () => {
  const { t } = useTranslation();

  return (
    <section className="update">
      <div className="container">
        <div className="update-content">
          <h1 data-aos="zoom-out">{t("update_title")}</h1>
          <p data-aos="zoom-out">{t("update_desc")}</p>
          <Description />
        </div>
      </div>
    </section>
  );
};

export default Update;