import "../styles/Clients.css";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();

  return (
    <section className="clients">
      <div className="container">
        <div className="clients-content">
          <h1 data-aos="zoom-out">{t("clients_title")}</h1>
          <p data-aos="zoom-out">{t("clients_desc")}</p>

          <div className="grid-box">
            <img data-aos="flip-up" className="logo" src="../images/Logo-1.svg" />
            <img data-aos="flip-down" className="logo" src="../images/Logo-2.svg" />
            <img data-aos="flip-up" className="logo" src="../images/Logo-3.svg" />
            <img data-aos="flip-down" className="logo" src="../images/Logo-4.svg" />
            <img data-aos="flip-up" className="logo" src="../images/Logo-5.svg" />
            <img data-aos="flip-down" className="logo" src="../images/Logo-6.svg" />
            <img data-aos="flip-up" className="logo" src="../images/Logo-7.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;