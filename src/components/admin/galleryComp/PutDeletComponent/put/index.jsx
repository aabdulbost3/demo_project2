import { useRef, useState} from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../../common/modal";
import axios from "axios";
function ModalPut({handleClose , open , PutBlog , Title , Element}) {
    const Image = useRef();
    const [selectedImages , setSelectedImages] = useState()
    const [loading , setLoading] = useState(false)
    const HandleChange = (e) =>{
        const formData = new FormData()
        formData.append("file" , e.target.files[0])
        formData.append("upload_preset" , "y2ots37w")
        setLoading(true)
        const postImage = async () =>{
            try{
                const response = await axios.post("https://api.cloudinary.com/v1_1/dtp8fqbzl/upload" , formData)
                setSelectedImages(response?.data.secure_url)
                setLoading(false)
            }catch(error){
                console.error(error);
            }
        }
        postImage()
}
    const HandleSubmit = async (e , id ) =>{
        e.preventDefault()
        try {
           await fetch(`https://api.reverhotel.uz/galery/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image_galery : selectedImages, 
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
          } catch(err) {
            console.log(err)
        }
    }
    return(
        <Wrapper>
        <ModalCommon handleClose={handleClose} open={open}>
            <ModalTop>
                    <span>Изменить КЛИЕНТЫ</span>
                    <span onClick={handleClose}>&times;</span>
            </ModalTop>
            <Form className="form" onSubmit={(e) => HandleSubmit(e , PutBlog)}>
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
        </ModalCommon>
        </Wrapper>
    )
}
export default ModalPut