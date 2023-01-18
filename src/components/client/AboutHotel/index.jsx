import { GlobalStyle, WrapperContainer } from "../../../App-styled";
import { Wrapper, Bigdiv, First, Second, Small, Ul } from "./styled-index";
import studio2 from "../../../assets/client/AboutHotel/studio2.png";
import clean from "../../../assets/client/AboutHotel/clean.png";
import bestprice from "../../../assets/client/AboutHotel/bestprice.png";
import location from "../../../assets/client/AboutHotel/location.png";
import { useTranslation } from "react-i18next";

function AboutHotel() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Wrapper id="About">
          <h3>{t("AboutHotel.0")}</h3>
          <Bigdiv>
            <First>
              <p>{t("AboutHotel.1")}</p>
            </First>
            <Second>
              <img src={studio2} alt="studio2" />
            </Second>
          </Bigdiv>
          <Small>
            <p>{t("AboutHotel.2")}</p>
            <Ul>
              <ul>
                <li>
                  <img src={clean} alt="clean" />
                  <p>{t("AboutHotel.3")}</p>
                </li>
                <li>
                  <img src={bestprice} alt="bestprice" />
                  <p>{t("AboutHotel.4")}</p>
                </li>
                <li>
                  <img src={location} alt="location" />
                  <p>{t("AboutHotel.5")}</p>
                </li>
              </ul>
            </Ul>
          </Small>
      </Wrapper>
    </>
  );
}
export default AboutHotel;
