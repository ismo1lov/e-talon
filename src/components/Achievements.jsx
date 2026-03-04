import "../styles/Achievements.css";
import { useTranslation } from "react-i18next";
import Status from "./Status";

const Achievements = () => {
  const { t } = useTranslation();

  return (
    <section className="achievements">
      <div className="container">
        <div className="achievements-content">
          <div data-aos="zoom-out" className="text-box">
            <h1>
              {t("ach_title_1")} <br />
              <span>{t("ach_title_2")}</span>
            </h1>

            <p>{t("ach_desc")}</p>
          </div>

          <Status />
        </div>
      </div>
    </section>
  );
};

export default Achievements;