import { useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index"
import ModalCommon from "../../../common/modal";
import axios from "axios";
function ModalPut({ handleClose, open, PutBlog, Title, Element }) {
    const [selectedImages, setSelectedImages] = useState()
    const [loading, setLoading] = useState(false)
    const title_uz = useRef();
    const title_ru = useRef();
    const title_en = useRef();
    const descrip_ru = useRef();
    const descrip_en = useRef();
    const descrip_uz = useRef();
    const HandleChange = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "y2ots37w")
        setLoading(true)
        const postImage = async () => {
            try {
                const response = await axios.post("https://api.cloudinary.com/v1_1/dtp8fqbzl/upload", formData)
                setSelectedImages(response?.data.secure_url)
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        postImage()
    }
    const HandleSubmit = async (e, id) => {
        e.preventDefault()
        try {
            await fetch(`https://api.reverhotel.uz/news/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image_news: selectedImages,
                    news_title_uz: title_uz.current.value,
                    news_title_ru: title_ru.current.value,
                    news_title_en: title_en.current.value,
                    news_description_uz: descrip_uz.current.value,
                    news_description_ru: descrip_ru.current.value,
                    news_description_en: descrip_en.current.value
                })
            })
                .then(res => res.text())
                .then(result => {
                    if (result) {
                        handleClose()
                    }
                });
            e.target[0].value = null
            e.target[1].value = null
            e.target[2].value = null
            e.target[3].value = null
            e.target[4].value = null
            e.target[5].value = null
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Wrapper>
            <ModalCommon handleClose={handleClose} open={open}>
                <ModalTop>
                    <span>Изменить</span>
                    <span onClick={handleClose}>&times;</span>
                </ModalTop>
                <Form className="form" onSubmit={(e) => HandleSubmit(e, PutBlog)}>
                    <input type="file" id="file" onChange={HandleChange} />
                    <label for="file" class="custom-file-upload">
                        <span className="span-download"><ion-icon name="cloud-download-outline"></ion-icon></span>
                        загрузить изображение
                    </label>
                    {loading ? (<>
                        <span className="loading">loading...</span>
                    </>) : null}
                    <input ref={title_uz} type="text" placeholder={Element.news_title_uz} />
                    <input ref={title_ru} type="text" placeholder={Element.news_title_ru} />
                    <input ref={title_en} type="text" placeholder={Element.news_title_en} />
                    <input ref={descrip_uz} type="text" placeholder={Element.news_description_uz} />
                    <input ref={descrip_ru} type="text" placeholder={Element.news_description_ru}  />
                    <input ref={descrip_en} type="text" placeholder={Element.news_description_en}  />
                    <button type="submit">Сохранять</button>
                </Form>
            </ModalCommon>
        </Wrapper>
    )
}
export default ModalPut