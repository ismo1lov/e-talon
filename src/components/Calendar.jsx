import "../styles/Calendar.css";
import Frame from "../assets/Frame-2.svg";
import { useTranslation } from "react-i18next";

const Calendar = () => {
  const { t } = useTranslation();

  return (
    <section className="calendar">
      <div className="container">
        <div className="calendar-content">
          <img data-aos="fade-left" src={Frame} alt="Frame" />

          <div data-aos="fade-right" className="text-box">
            <h1>
              {t("calendar_title_1")} <br />
              {t("calendar_title_2")}
            </h1>

            <p>{t("calendar_desc")}</p>

            <button className="btn">{t("read_more")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;