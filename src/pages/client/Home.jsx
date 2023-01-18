import { GlobalStyle, WrapperContainer } from "../../App-styled";
import Home from "../../components/client/Home/home-hero/index";
import AboutHotel from "../../components/client/AboutHotel";
import Terms from "../../components/client/Terms/index";
import Gallery from "../../components/client/Galery";
import ReservHome from "../../components/client/reserv";
import OurHotel from "../../components/client/OurHotel";
import Comments from "../../components/client/Comments";
import Contacts from "../../components/client/Contacts";
import News from "../../components/client/news";
function Client() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <WrapperContainer>
        <ReservHome />
        <Gallery />
        <AboutHotel />
        <Terms />
        <OurHotel/>
        <Comments/>
        <News/>
        <Contacts/>
      </WrapperContainer>
    </>
  );
}
export default Client;
