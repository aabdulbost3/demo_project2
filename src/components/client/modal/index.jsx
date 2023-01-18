import { useTranslation } from "react-i18next";
import { Modals } from "./styled-index"


function Modal({ HendelChange, ValLang, set, modal }) {
    const { t, i18n } = useTranslation()
    const HendelClose = () => {
        set(false)
    }
    return (
        <Modals modal={modal === false}>
            <p onClick={HendelClose}>X</p>
            <ul>
                <li>
                    <a onClick={HendelClose} href="#Galery">{t("Navbar.0")}</a>
                </li>
                <li>
                    <a onClick={HendelClose} href="#About">{t("Navbar.1")}</a>
                </li>
                <li>
                    <a onClick={HendelClose} href="#numbers">{t("Navbar.2")}</a>
                </li>
                <li>
                    <a onClick={HendelClose} href="#comments">{t("Navbar.3")}</a>
                </li>
                <li>
                    <a onClick={HendelClose} href="#contacts">{t("Navbar.4")}</a>
                </li>
                <li>
                    <select onChange={HendelChange}>
                        {ValLang() === "uz" ? (
                            <>
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </>
                        ) : ValLang() === "ru" ? (
                            <>
                                <option value="ru">RU</option>
                                <option value="uz">UZ</option>
                                <option value="en">EN</option>
                            </>
                        ) : ValLang() === "en" ? (
                            <>
                                <option value="en">EN</option>
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                            </>
                        ) : (
                            <>
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </>
                        )}
                    </select>
                </li>
            </ul>
        </Modals>
    );
}

export default Modal;