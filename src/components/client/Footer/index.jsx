import { GlobalStyle, WrapperContainer } from "../../../App-styled";
import img from "../../../assets/client/header/Logo.svg";
import up from "../../../assets/footer/up.png";
import { Wrapper, Container, UPWrapper, Title, Heading, Up, Li, Li1 } from "./styled-index";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Wrapper>
        <WrapperContainer>
          <Container>
            <Title>
              <Heading>
                <img src={img} alt="logo" />
                <ul>
                  <li>
                    <a href="#">{t("Footer.0")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.1")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.2")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.3")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.4")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.5")}</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">{t("Footer.6")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.7")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.8")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.9")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.10")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.11")}</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">{t("Footer.12")}</a>
                  </li>
                  <li>
                    <a href="tel:+998 95 169 69 69"><button>{t("Footer.13")}</button></a>
                  </li>
                  <li>
                    <a href="mailto:Info@reverhotel.uz">Info@reverhotel.uz</a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bx bxl-telegram"></i>
                    </a>
                    <a href="#">
                      <i class="bx bxl-facebook-square"></i>
                    </a>
                  </li>
                </ul>
                <UPWrapper>
                  <Up>
                    <a href="#">
                      <i class="bx bx-up-arrow-alt"></i>
                    </a>
                  </Up>
                </UPWrapper>
              </Heading>
            </Title>
          </Container>
        </WrapperContainer>
      </Wrapper>
    </>
  );
}
export default Footer;
