import { useState } from "react";
import "../styles/Register.css";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="register" className="register">
      <div className="container">
        <div className="register-content">
          <h1>
            {t("register_title_1")} <br />
            {t("register_title_2")}
          </h1>

          <button onClick={() => setIsOpen(true)} className="btn">
            {t("register_btn")} →
          </button>

          <div className={`modal ${isOpen ? "" : "hidden"}`}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              x
            </button>

            <h1>{t("register_btn")}</h1>

            <form>
              <input type="text" placeholder={t("name")} />
              <input type="text" placeholder={t("lastname")} />
              <input type="tel" placeholder={t("phone")} />
              <button className="btn">{t("send")}</button>
            </form>
          </div>

          <div
            className={`wrapper ${isOpen ? "" : "hidden"}`}
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Register;