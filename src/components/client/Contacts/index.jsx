import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Container, Row, Col, Hidden } from "react-grid-system";
import {
  Wrapper,
  WrapperLeft,
  Div,
  H1,
  Bigdiv,
  Firstdiv,
  SecondDiv,
  WrapperRight,
  BigWrapper,
  Form,
  InputGroup,
  Butto,
  ColDiv,
  HiddenText,
  Rows,
} from "./styled-index";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import axios from "axios";
import { Succsess } from "../reserv/styled-index";

function Contacts() {
  const { t, i18n } = useTranslation();
  const name = useRef();
  const number = useRef();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const HendelContact = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: name.current.value,
        phone_number: number.current.value,
      };
      const respose = await axios.post("https://api.reverhotel.uz/form", body);
      if (respose) {
        setOpen(true);
        name.current.value = null;
        number.current.value = null;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <WrapperContainer> */}
      <BigWrapper id="contacts">
        <h1>{t("Contacts.0")}</h1>
        <Row component={Rows}>
          <Col lg={6} md={6} sm={12}>
            <WrapperLeft>
              <Form>
                <InputGroup>
                  <label htmlFor="email">{t("Contacts.1")}</label>
                  <input
                    ref={name}
                    type="text"
                    id="email"
                    placeholder={t("Contacts.2")}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="phone">{t("Contacts.3")}</label>
                  <input
                    ref={number}
                    type="number"
                    id="phone"
                    placeholder="+998 (__) ___ __ __"
                    required
                  />
                </InputGroup>
                <Butto onClick={HendelContact} type="sumbit">
                  {t("Contacts.4")}
                </Butto>
              </Form>
              <Row style={{ padding: "10px 15px", margin: "0" }}>
                <Hidden component={HiddenText} xs sm>
                  <p>{t("Contacts.5")}</p>
                </Hidden>
                <Col
                  style={{ padding: "0" }}
                  component={ColDiv}
                  lg={6}
                  md={6}
                  sx={12}
                >
                  <h3>{t("Contacts.6")}</h3>
                  <p>{t("Contacts.7")}</p>
                </Col>
                <Col
                  style={{ padding: "0" }}
                  component={ColDiv}
                  lg={6}
                  md={6}
                  sx={6}
                  sm={6}
                >
                  <h3>{t("Contacts.9")}</h3>
                  <a href="tel:+998951696969">+998 95 169 69 69</a>
                  <br />
                  <a href="tel:+998990697980">+998 99 069 79 80</a>
                </Col>
                <Col
                  style={{ padding: "0" }}
                  component={ColDiv}
                  lg={6}
                  md={6}
                  sx={6}
                  sm={6}
                >
                  <h3>{t("Contacts.8")}</h3>
                  <a href="mailto:Info@reverhotel.uz">Info@reverhotel.uz</a>
                </Col>
                <Col style={{ padding: "0" }} component={ColDiv} lg={6} md={6}>
                  <Hidden xs sm>
                    <h4>{t("Contacts.10")}</h4>
                    <a href="#">
                      <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bx bxl-telegram"></i>
                    </a>
                    <a href="#">
                      <i class="bx bxl-facebook-square"></i>
                    </a>
                  </Hidden>
                </Col>
              </Row>
            </WrapperLeft>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <WrapperRight>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5213256996535!2d69.29783388087688!3d41.341021084491196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5c95e633d07%3A0x2ab8ade14a1876f!2sRever%20Hotel!5e0!3m2!1sru!2s!4v1671088243234!5m2!1sru!2s"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </WrapperRight>
          </Col>
        </Row>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <Succsess>
              <i class="bx bx-check-circle"></i>
              <h3>{t("Reserv.9")}</h3>
              <button onClick={handleClose}>Ok</button>
            </Succsess>
          </Box>
        </Modal>
      </BigWrapper>
    </>
  );
}
export default Contacts;
