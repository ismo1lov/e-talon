import '../styles/Footer.css'
import { useTranslation } from "react-i18next";


const List = ()=>{
    const { t } = useTranslation();

    return(
        <div className="lists">
            <div className="list-box">
                <h3 className='title'>{t("list-title-1")}</h3>
                <a href="https://odilteam.uz/ru">{t("list-link-1")}</a>
                <a href="https://www.instagram.com/odilsoft.uz/">{t("list-link-2")}</a>
                <a href="#contact">{t("list-link-3")}</a>
            </div>
            <div className="list-box">
                <h3 className='title'>{t("list-title-2")}</h3>
                <a href="#">{t("list-link-4")}</a>
                <a href="#">{t("list-link-5")}</a>
                <a href="#">{t("list-link-6")}</a>
            </div>
            <div className="list-box" id='form-box'>
                <h3 className="title">{t("list-title-3")}</h3>
                <form action="">
                    <input type="email" name='email' placeholder={t("list-input-placeholder")}/>
                    <button className='input-btn'><i className="bi bi-send"></i></button>
                </form>
            </div>
        </div>
    )
}

export default List