import { useState } from "react";
import ModalDelete from "./delete/index";
import { Wrapper , WrapperBottom} from "./styled-index";
import ModalPut from "./put/index";
function DeletPutComponent({DeleteId , PutBlog , Element}) {
    const [open , SetOpen] = useState(false)
    const [open2 , SetOpen2] = useState(false)

    const HandleOpen = () => {
        SetOpen(true)
    }
    const HandleClose = () => {
        SetOpen(false)
    }
    const HandleOpen2 = () => {
        SetOpen2(true)
    }
    const HandleClose2 = () => {
        SetOpen2(false)
    }
     return(
        <Wrapper>
                <WrapperBottom>
                        <button onClick={HandleOpen}>изменить</button>
                        <button onClick={HandleOpen2}>удалить</button>
                </WrapperBottom>
            <ModalDelete open={open2} HandleClose={HandleClose2}   DeleteId={DeleteId}/>
            <ModalPut open={open} handleClose={HandleClose} Element={Element} PutBlog={PutBlog} />
        </Wrapper>
    )
}
export default DeletPutComponent