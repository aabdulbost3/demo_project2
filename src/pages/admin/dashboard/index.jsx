import { WrapperContainer } from "../../../App-styled";
import { Dashboar, Ul, UL, Pages, DashboardWrapper } from "./styled-index";
import Logo from "../../../assets/client/header/Logo.svg";
import { NavLink } from "react-router-dom";
import Gallery from "../gallery";

function Dashboard() {
  if (!window.localStorage.getItem("authToken")) {
    window.location = "/admin";
  }
  return (
    <WrapperContainer>
      <DashboardWrapper>
        {/* <Dashboar>
          <ul>
            <li>
              <UL>
                <li>
                  <img src={Logo} alt="logo" />
                </li>
              </UL>
            </li>
            <li>
              <Ul>
                <li>
                  <NavLink to="gallery">Галерея</NavLink>
                </li>
                <li>
                  <NavLink to="#">Об отеле</NavLink>
                </li>
                <li>
                  <NavLink to="#">Номера</NavLink>
                </li>
                <li>
                  <NavLink to="#">Отзывы</NavLink>
                </li>
                <li>
                  <NavLink to="#">Контакты</NavLink>
                </li>
              </Ul>
            </li>
          </ul>
        </Dashboar>
        <Pages>
          <Gallery />
        </Pages> */}
      </DashboardWrapper>
    </WrapperContainer>
  );
}
export default Dashboard;