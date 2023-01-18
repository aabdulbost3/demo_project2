import { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Caroulse, GalWrapper, SliderItem, Buttons } from "./styled-index";
import Slider from "react-slick";
import "./slider.css";
import { GaleryContext } from "../../../context/galery/index";

function Gallery() {
  const carousel = useRef();
  const { t, i18n } = useTranslation();
  const { GaleryMap } = useContext(GaleryContext);

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
          autoplay: 1,
        },
      },
    ],
  };

  return (
    <GalWrapper id="Galery">
      <h2>{t("Galery.0")}</h2>
      <Slider {...settings}>
        {GaleryMap.map((elem, index) =>
          <SliderItem key={index}>
            <img src={elem.image_galery} alt="image" />
          </SliderItem>
        )}
      </Slider>
    </GalWrapper>
  );
}

export default Gallery;
