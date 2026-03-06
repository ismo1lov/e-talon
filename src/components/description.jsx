import "../styles/Update.css";
import { useTranslation } from "react-i18next";
import image1 from "../assets/image-2.svg";
import image2 from "../assets/image-3.svg";
import image3 from "../assets/image-4.svg";

const Description = () => {
  const { t } = useTranslation();

  return (
    <div className="description">
      {[image1, image2, image3].map((img, index) => (
        <div key={index} className="card">
          <img src={img} alt="image" />
          <div>
            <p>
              {t("description-p")}
            </p>
            <button className="btn-secondary">
              {t("read_more")} →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;