import { useContext, useRef } from "react";
import Imgnew from "../../../assets/client/home/new.png";
import { CarouselDiv, Buttons, Wrapper, SliderItem, Carousel, H2 } from "./styled-index";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { NewsContext } from "../../../context/news";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

function News() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const caro = useRef();
  const { t, i18n } = useTranslation()
  const { NewsMap } = useContext(NewsContext)

  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng")
  }

  return (
    <>
      <Wrapper>
        <H2>{t("News.0")}</H2>
        <CarouselDiv>
          <Slider {...settings}>
            {NewsMap.map((elem, index) =>
              <SliderItem key={index}>
                <div>
                  <img src={elem.image_news} alt="photo" />
                  {ValLang() === "uz" ? (<><h3>{elem.news_title_uz}</h3></>) : ValLang() === "ru" ? (<><h3>{elem.news_title_ru}</h3></>) : ValLang() === "en" ? (<><h3>{elem.news_title_en}</h3></>) : null}
                  {ValLang() === "uz" ? (<><p>{elem.news_description_uz}</p></>) : ValLang() === "ru" ? (<><p>{elem.news_description_ru}</p></>) : ValLang() === "en" ? (<><p>{elem.news_description_en}</p></>) : null}
                  <button onClick={handleOpen}>{t("News.3")}</button>
                </div>
              </SliderItem>
            )}
          </Slider>
        </CarouselDiv>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
          </Box>
        </Modal>
      </Wrapper>
    </>
  );
}
export default News;
