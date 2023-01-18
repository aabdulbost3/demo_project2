import { GlobalStyle, WrapperContainer } from "../../../App-styled";
import {
  Wrapper,
  Bigdiv,
  First,
  Second,
  Smaller,
  Smallest,
  Text,
  DfDiv,
} from "./styled-index";
import { useTranslation } from "react-i18next";

function Terms() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Wrapper>
        {/* <WrapperContainer> */}
          <h3>{t("Terms.0")}</h3>
          <Bigdiv>
            <First>
              <p>{t("Terms.1")}</p>
              <h5>{t("Terms.2")}</h5>
              <p>{t("Terms.3")}</p>
            </First>
            <Second>
              <DfDiv>
                <Smaller>
                  <h5>{t("Terms.4")}</h5>
                  <h6>14:00</h6>
                </Smaller>
                <Smallest>
                  <h5>{t("Terms.5")}</h5>
                  <h6>12:00</h6>
                </Smallest>
              </DfDiv>
              <Text>
                <h5>{t("Terms.6")}</h5>
                <p>{t("Terms.7")}</p>
              </Text>
            </Second>
          </Bigdiv>
        {/* </WrapperContainer> */}
      </Wrapper>
    </>
  );
}
export default Terms;
