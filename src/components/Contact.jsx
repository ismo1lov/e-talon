import "../styles/Contact.css";
import Image from "../assets/image-1.svg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <img data-aos="flip-up" src={Image} alt="image" />

          <div data-aos="flip-down" className="text-box">
            <h1>{t("contact_us")}</h1>

            <div className="box">
              <h3>{t("address")}</h3>
              <p>{t("address_text")}</p>
            </div>

            <div className="box">
              <h3>{t("phone_numbers")}</h3>
              <p>+998 77 033 14 41</p>
              <p>+998 77 034 14 41</p>
            </div>

            <div className="box">
              <h3>{t("email")}</h3>
              <p className="email">info@odilsoft.uz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;