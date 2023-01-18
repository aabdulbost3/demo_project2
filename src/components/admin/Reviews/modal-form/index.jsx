import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Form } from "./styled-index"
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
const RevaisComp = ({ open, handleClose }) => {
    const [loading, setLoading] = useState(false)
    const title = useRef();
    const description_uz = useRef();
    const description_ru = useRef();
    const description_en = useRef();
    const [SelectedImages, setSelectedImages] = useState();
    const HandleChange = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "y2ots37w")
        setLoading(true)
        const postImage = async () => {
            try {
                const response = await axios.post("https://api.cloudinary.com/v1_1/dtp8fqbzl/upload", formData)
                setSelectedImages(response?.data.secure_url)
                console.log(response?.data.secure_url);
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        postImage()
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            avatar_image: SelectedImages,
            description_en: description_en.current.value,
            description_ru : description_ru.current.value,
            description_uz : description_uz.current.value,
            r_name : title.current.value
        }
        const res = await axios.post("https://api.reverhotel.uz/reviews", body)
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
                    <input type="file" id="file" onChange={HandleChange} />
                    <label for="file" class="custom-file-upload">
                        <span className="span-download"><ion-icon name="cloud-download-outline"></ion-icon></span>
                        загрузить изображение
                    </label>
                    {loading ? (<>
                        <span className="loading">loading...</span>
                    </>) : null}
                    <input ref={title} type="text" placeholder='Имя' />
                    <input ref={description_uz} type="text" placeholder='Отзыв посетителя uz' />
                    <input ref={description_ru} type="text" placeholder='Отзыв посетителя ru' />
                    <input ref={description_en} type="text" placeholder='Отзыв посетителя en' />
                    <button type="submit">Сохранять</button>
                </Form>
            </Box>
        </Modal>
    )
}

export default RevaisComp