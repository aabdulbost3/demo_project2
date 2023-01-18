import { WrapperContainer } from "../../../App-styled";
import {
  Wrapper,
  Ul,
  About,
  Name,
  Star,
  Carusel,
  Buttons,
  Infor,
  User,
  ULWrapper,
  LIItem,
  Item,
  HiddenDiv,
  None
} from "./styled-index";
import "../Galery/slider.css";
import Slider from "react-slick";
import { SliderItem } from "../news/styled-index";
import maksim from "../../../assets/client/comments/maksim.png";
import { useTranslation } from "react-i18next";
import { useContext, useRef } from "react";
import { Row, Col, Hidden } from "react-grid-system";
import { ReviewsContext } from "../../../context/revais";

const settings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Comments() {
  const { t, i18n } = useTranslation();
  const carousel = useRef();
  const { ReviewsMap } = useContext(ReviewsContext)
  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng")
  }

  return (
    <>
      {/* <WrapperContainer> */}
      <Wrapper id="comments">
        <h1>{t("Comments.0")}</h1>

        {/* <Hidden sm> */}
        <Row component={ULWrapper}>
          {ReviewsMap.map((elem, index) => (
            <Col key={index} component={LIItem} lg={4} md={6} sx={6} sm={12}>
              <Item>
                <About>
                  <Name>
                    <img src={elem.avatar_image} alt="" />
                    <h3>{elem.r_name}</h3>
                  </Name>
                </About>
                <Star>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </Star>
                {ValLang() === "uz" ? (<><p>{elem.description_uz}</p></>) : ValLang() === "ru" ? (<><p>{elem.description_ru}</p></>) : ValLang() === "en" ? (<><p>{elem.description_en}</p></>) : null}
              </Item>
            </Col>
          ))}
        </Row>
        {/* </Hidden> */}
        {/* <Hidden component={HiddenDiv} xxxl xl lg md sx> */}
        <None>
          <Slider {...settings}>
            {ReviewsMap.map((elem, index) =>
              <SliderItem key={index}>
                <Item>
                  <About>
                    <Name>
                      <img src={elem.avatar_image} alt="image" />
                      <h3>{elem.r_name}</h3>
                    </Name>
                  </About>
                  <Star>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </Star>
                  {ValLang() === "uz" ? (<><p>{elem.description_uz}</p></>) : ValLang() === "ru" ? (<><p>{elem.description_ru}</p></>) : ValLang() === "en" ? (<><p>{elem.description_en}</p></>) : null} 
                </Item>
              </SliderItem>
            )}
          </Slider>
        </None>
        {/* </Hidden> */}
      </Wrapper>
      {/* </WrapperContainer> */}
    </>
  );
}
export default Comments;
