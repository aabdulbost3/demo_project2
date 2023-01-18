import * as React from 'react';
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HotelOurContext } from "../../../context/our-hotel";
import {
  Wrapper,
  Card,
  CardDiv,
  CardWrap,
  CaRd,
  Butto,
  Count,
  Countdiv,
  DivCard,
  CardDiV,
  CaRD,
  TimeDiv,
  Succsess
} from "./styled-index";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function ReservHome() {
  const [count, setCount] = useState(0)
  const [countBaby, setCountBaby] = useState(0)
  const checkin = useRef()
  const checkout = useRef()
  const number = useRef()
  const { t, i18n } = useTranslation()
  const HendelChange = (e) => {
    const selectVal = e.target.value
    window.localStorage.setItem("roomVal", selectVal)
  }
  const { HotelOurMap } = useContext(HotelOurContext)
  const Icrement = () => {
    setCount(count => count += 1)
  }
  const Dicrement = () => {
    setCount(count => count -= 1)
  }
  const Icrement2 = () => {
    setCountBaby(count => count += 1)
  }
  const Dicrement2 = () => {
    setCountBaby(count => count -= 1)
  }
  const HendelCheck = async (e) => {
    e.preventDefault()
    try {
      const body = {
        check_in: checkin.current.value,
        departure: checkout.current.value,
        kids: countBaby,
        adults: count,
        phone_number: number.current.value,
        room: window.localStorage.getItem("roomVal")
      }
      const response = await axios.post("https://api.reverhotel.uz/contacts", body)
      if (response.data) {
        setOpen(true)
      }
    } catch (error) {
      console.log(error);
    }
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input , setInput] = useState(false)

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
  return (
    <Wrapper id='reserv'>
      <h2>{t("Reserv.0")}</h2>
      <CardWrap>
        <CardDiv>
          <Card>
            <TimeDiv>
              <p>{t("Reserv.1")}</p>
              <i className="bx bxs-calendar-edit"></i>
            </TimeDiv>
            {input ? <><input type="date"  ref={checkin} /></> : <input type="text" onFocus={() => setInput(true)} placeholder={t("Reserv.10")} />}
          </Card>
          <Card>
            <TimeDiv>
              <p>{t("Reserv.2")}</p>
              <i className="bx bxs-calendar-edit"></i>
            </TimeDiv>
            {input ? <><input type="date"  ref={checkout} /></> : <input type="text" onFocus={() => setInput(true)} placeholder={t("Reserv.10")} />}
          </Card>
          <Card>
            <CardDiV>
              <p>{t("Reserv.3")}</p>
              <i class='bx bxs-user-check' ></i>
            </CardDiV>
            <Count>
              <Countdiv>
                <p>{t("Reserv.7")}</p>
                <div>   
                  <button onClick={Dicrement}>-</button>
                  <p>{count}</p>
                  <button onClick={Icrement}>+</button>
                </div>
              </Countdiv>
              <Countdiv>
                <p>{t("Reserv.8")}</p>
                <div>
                  <button onClick={Dicrement2}>-</button>
                  <p>{countBaby}</p>
                  <button onClick={Icrement2}>+</button>
                </div>
              </Countdiv>
            </Count>
          </Card>
        </CardDiv>
        <DivCard>
          <CaRd>
            <div>
              <p>{t("Reserv.4")}</p>
              <i class="bx bxs-hotel"></i>
            </div>
            <select onChange={HendelChange}>
              {HotelOurMap.map((elem, index) =>
                <option key={index} value={elem.title_room}>{elem.title_room}</option>
              )}
            </select>
          </CaRd>
          <CaRD>
            <p>{t("Reserv.5")}</p>
            <input type="number" placeholder="+998 (__) ___ __ __" ref={number} />
          </CaRD>
        </DivCard>
      </CardWrap>
      <Butto onClick={HendelCheck}>{t("Reserv.6")}</Butto>
      <div>
       
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Succsess>
                <i class='bx bx-check-circle' ></i>
                <h3>{t("Reserv.9")}</h3>
                <button onClick={handleClose}>Ok</button>
              </Succsess>
            </Typography>
          </Box>
        </Modal>
      </div>
    </Wrapper>
  );
}
export default ReservHome;