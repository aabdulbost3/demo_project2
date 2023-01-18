import { WrapperContainer } from "../../../../App-styled";
import {
  Container,
  LeftDiv,
  RightDiv,
  Bigdiv,
  Smallestdiv,
  Smalldiv,
} from "./styled-index";
import mouse from "../../../../assets/client/home/mouse.png";
import studio from "../../../../assets/client/home/studio.png";
import { useTranslation } from "react-i18next";
function HomeHero() {
  const { t, i18n } = useTranslation();
  return (
    <>
        <Container>
          <LeftDiv>
            <h1>{t("Homehero.0")}</h1>
            <p>{t("Homehero.1")}</p>
            <button>{t("Homehero.2")}</button>
            <Bigdiv>
              <img src={mouse} alt="mouse" />
              <Smallestdiv>
                <p>{t("Homehero.3")}</p>
              </Smallestdiv>
              <Smalldiv>
                <p>{t("Homehero.4")}</p>
              </Smalldiv>
            </Bigdiv>
          </LeftDiv>
          <RightDiv>
            <img src={studio} alt="studio" />
          </RightDiv>
        </Container>
    </>
  );
}
export default HomeHero;