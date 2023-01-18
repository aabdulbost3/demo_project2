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
const NewsModalFormComponent = ({ open, handleClose }) => {
    const [loading, setLoading] = useState(false)
    const title_uz = useRef();
    const title_ru = useRef();
    const title_en = useRef();
    const descrip_ru = useRef();
    const descrip_en = useRef();
    const descrip_uz = useRef();

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
            image_news: SelectedImages,
            news_title_uz: title_uz.current.value,
            news_title_ru: title_ru.current.value,
            news_title_en: title_en.current.value,
            news_description_uz: descrip_uz.current.value,
            news_description_ru: descrip_ru.current.value,
            news_description_en: descrip_en.current.value
        }
        const res = await axios.post("https://api.reverhotel.uz/news", body)
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
                    <input ref={title_uz} type="text" placeholder='новости_uz' />
                    <input ref={title_ru} type="text" placeholder='новости_ru' />
                    <input ref={title_en} type="text" placeholder='новости_en' />
                    <input ref={descrip_uz} type="text" placeholder='описание_uz' />
                    <input ref={descrip_ru} type="text" placeholder='описание_ru' />
                    <input ref={descrip_en} type="text" placeholder='описание_en' />
                    <button type="submit">Сохранять</button>
                </Form>
            </Box>
        </Modal>
    )
}

export default NewsModalFormComponent