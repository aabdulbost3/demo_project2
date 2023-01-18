import React, { useContext } from 'react'
import { Wrapper, WrapperTop, Gallerys, WrapperCard } from './styled-index'
import HotelModalFormComponent from '../../../components/admin/OurHotelComp/modal-form/index';
import HotelDeletPutComponent from '../../../components/admin/OurHotelComp/PutDeletComponent/index';
import RevaisComp from '../../../components/admin/Reviews/modal-form';
import NewsDeletPutComponent from '../../../components/admin/Reviews/PutDeletComponent';
import { ReviewsContext } from '../../../context/revais';

const Number = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { ReviewsMap } = useContext(ReviewsContext)
    return (
        <Wrapper>
            <WrapperTop>
                <h2>Отзывы посетителей</h2>
                <button onClick={handleOpen}> добавить</button>
            </WrapperTop>
            <RevaisComp open={open} handleClose={handleClose} />
            <Gallerys>
                {ReviewsMap.map((elem, index) =>
                    <WrapperCard key={index}>
                        <li>
                            <img src={elem.avatar_image} alt="room" />
                            <h3>{elem.r_name}</h3>
                            <p>{elem.description_ru}</p>
                        </li>
                        <NewsDeletPutComponent DeleteId={elem.reviews_id} PutBlog={elem.reviews_id} Element={elem} />
                    </WrapperCard>
                )}
            </Gallerys>
        </Wrapper>
    )
}

export default Number