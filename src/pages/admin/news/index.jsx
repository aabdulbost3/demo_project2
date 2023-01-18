import React, { useContext } from 'react'
import { Wrapper, WrapperTop, Gallerys, WrapperCard } from './index-styled'
import HotelModalFormComponent from '../../../components/admin/OurHotelComp/modal-form/index';
import HotelDeletPutComponent from '../../../components/admin/OurHotelComp/PutDeletComponent/index';
import NewsModalFormComponent from '../../../components/admin/NewsComp/modal-form';
import NewsDeletPutComponent from '../../../components/admin/NewsComp/PutDeletComponent';
import { NewsContext } from '../../../context/news';

const News = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { NewsMap } = useContext(NewsContext)
    return (
        <Wrapper>
            <WrapperTop>
                <h2>Новости</h2>
                <button onClick={handleOpen}> добавить</button>
            </WrapperTop>
            <NewsModalFormComponent open={open} handleClose={handleClose} />
            <Gallerys>
                {NewsMap.map((elem, index) =>
                    <WrapperCard key={index}>
                        <li>
                            <div>
                                <img src={elem.image_news} width={300} height={380} alt="room" />
                            </div>
                            <h3>{elem.news_title_uz}</h3>
                            <p>{elem.news_description_uz}</p>
                        </li>
                        <NewsDeletPutComponent DeleteId={elem.news_id} PutBlog={elem.news_id} Element={elem} />
                    </WrapperCard>
                )}
            </Gallerys>
        </Wrapper>
    )
}

export default News