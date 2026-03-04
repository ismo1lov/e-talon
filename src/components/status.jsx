import "../styles/Achievements.css";
import { useTranslation } from "react-i18next";

import Icon1 from "../assets/achev-icon-1.svg";
import Icon2 from "../assets/card-icon-3.svg";
import Icon3 from "../assets/achev-icon-3.svg";
import Icon4 from "../assets/achev-icon-4.svg";

const Status = () => {
  const { t } = useTranslation();

  return (
    <div data-aos="zoom-in" className="status">
      <div className="parent-box">
        <div className="child-box">
          <img src={Icon1} alt="icon" />
          <div>
            <h3>2,245,341</h3>
            <p>{t("members")}</p>
          </div>
        </div>

        <div className="child-box">
          <img src={Icon2} alt="icon" />
          <div>
            <h3>46,328</h3>
            <p>{t("clubs")}</p>
          </div>
        </div>
      </div>

      <div className="parent-box">
        <div className="child-box">
          <img src={Icon3} alt="icon" />
          <div>
            <h3>828,867</h3>
            <p>{t("event_booking")}</p>
          </div>
        </div>

        <div className="child-box child-4">
          <img src={Icon4} alt="icon" />
          <div>
            <h3>1,926,436</h3>
            <p>{t("payments")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;