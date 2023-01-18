import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Form} from "./styled-index"
import axios from "axios"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};
const HotelModalFormComponent = ({ open , handleClose}) => {
    const [loading , setLoading] = useState(false)
    const title = useRef();
    const area_rooms = useRef();
    const number_guests = useRef();
    const cost_night = useRef();
    const [ SelectedImages ,  setSelectedImages] = useState();
    const HandleChange = (e) =>{
        const formData = new FormData()
        formData.append("file" , e.target.files[0])
        formData.append("upload_preset" , "y2ots37w")
        setLoading(true)
        const postImage = async () =>{
            try{
                const response = await axios.post("https://api.cloudinary.com/v1_1/dtp8fqbzl/upload" , formData)
                setSelectedImages(response?.data.secure_url)
                console.log(response?.data.secure_url);
                setLoading(false)
            }catch(error){
                console.error(error);
            }
        }
        postImage()
}
const HandleSubmit = async (e) =>{
    e.preventDefault();
    const body = {
        image_room : SelectedImages,
        title_room : title.current.value,
        area_room : area_rooms.current.value,
        number_guests :number_guests.current.value,
        cost_night : cost_night.current.value
    }
    const res = await axios.post("https://api.reverhotel.uz/rooms"  , body)
    if (res) {
        handleClose()
    }
}
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Form onSubmit={HandleSubmit}>
            <input type="file" id="file" onChange={HandleChange}/>
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                {loading ? (<>
                    <span className="loading">loading...</span>
                </>):null}
                <input ref={title} type="text" placeholder='название комнаты' />
                <input ref={area_rooms} type="text" placeholder='площадь комнаты' />
                <input ref={number_guests} type="text" placeholder='Количество гостей' />
                <input ref={cost_night} type="text" placeholder='Стоимость за 1 ночь' />
                <button type="submit">Сохранять</button>
            </Form>
        </Box>
      </Modal>
  )
}

export default HotelModalFormComponent