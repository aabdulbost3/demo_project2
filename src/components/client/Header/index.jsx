import { useState } from "react";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../../App-styled";
import Logo from "../../../assets/client/header/Logo.svg";
import { Wrapper, Nav, Menu, Number } from "./styled-index";
import Modal from "../modal";

function Header() {
  const [modal, setModal] = useState(false);
  const { t, i18n } = useTranslation();
  const HendelChange = (e) => {
    e.preventDefault();
    const LanVal = e.target.value;
    window.localStorage.setItem("i18nextLng", LanVal);
    window.location.reload();
  };
  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const HendelClick = () => {
    setModal(true);
  };
  return (
    <>
      <Wrapper>
        <WrapperContainer>
          <Nav>
            <img src={Logo} alt="logo" width={140} height={60} />
            <ul>
              <li>
                <a href="#Galery">{t("Navbar.0")}</a>
              </li>
              <li>
                <a href="#About">{t("Navbar.1")}</a>
              </li>
              <li>
                <a href="#numbers">{t("Navbar.2")}</a>
              </li>
              <li>
                <a href="#comments">{t("Navbar.3")}</a>
              </li>
              <li>
                <a href="#contacts">{t("Navbar.4")}</a>
              </li>
              <li>
                <a href="tel:+998 95 169 69 69">+998 95 169 69 69</a>
                <a href="tel:+998 99 069 79 80">+998 99 069 79 80</a>
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
            <Menu>
              <button onClick={HendelClick}>
                <i class="bx bx-menu"></i>
              </button>
            </Menu>
          </Nav>
          <>
            <Modal
              modal={modal}
              HendelChange={HendelChange}
              ValLang={ValLang}
              set={setModal}
            />
          </>
        </WrapperContainer>
      </Wrapper>
      <Number>
        <a href="tel:+998 95 169 69 69">+998 95 169 69 69</a>
        <a href="tel:+998 99 069 79 80">+998 99 069 79 80</a>
      </Number>
    </>
  );
}
export default Header;
