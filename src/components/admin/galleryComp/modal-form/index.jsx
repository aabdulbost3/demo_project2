import React, { useState } from 'react'
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
const ModalFormComponent = ({ open , handleClose}) => {
    const [loading , setLoading] = useState(false)
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
        image_galery : SelectedImages
    }
    const res = await axios.post("https://api.reverhotel.uz/galery"  , body)
    console.log(res);
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
                <button type="submit">Сохранять</button>
            </Form>
        </Box>
      </Modal>
  )
}

export default ModalFormComponent