import { WrapperContainer } from "../../../App-styled"
import { Wrapper, Ul1, Ul } from "./styled-index"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { HotelOurContext } from "../../../context/our-hotel"

function OurHotel() {
  const { t, i18n } = useTranslation()
  const { HotelOurMap } = useContext(HotelOurContext)

  return (
    <>
      <Wrapper id="numbers">
        <h1>{t("OurHotel.0")}</h1>
        <Ul1>
          <Ul>
            {HotelOurMap.map((elem, index) =>
              <li key={index}>
                <img src={elem.image_room} alt="image" />
                <h3>{elem.title_room}</h3>
                <p>{t("OurHotel.1")} {elem.area_room} kv.m</p>
                <p>{t("OurHotel.2")} {elem.number_guests}</p>
                <p>{t("OurHotel.3")} {elem.cost_night} {t("OurHotel.6")}</p>
                <a href="#reserv"><button>{t("OurHotel.4")}</button></a>
              </li>
            )}
          </Ul>
        </Ul1>
      </Wrapper>
    </>
  )
}
export default OurHotel