import React, { useContext } from 'react'
import { Wrapper , WrapperTop , Gallerys , WrapperCard } from './index-styled'
import ModalFormComponent from '../../../components/admin/galleryComp/modal-form';
import { GaleryContext } from '../../../context/galery';
import DeletPutComponent from '../../../components/admin/galleryComp/PutDeletComponent';

const Gallery = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {GaleryMap} = useContext(GaleryContext)
  return (
    <Wrapper>
        <WrapperTop>
            <h2>Галерея</h2>
            <button onClick={handleOpen}>Галерея добавить</button>
        </WrapperTop>
        <ModalFormComponent open={open} handleClose={handleClose}/>
        
        <Gallerys>
                {GaleryMap.map((elem , index) =>
                    <WrapperCard>   
                    <img src={elem.image_galery} alt="images galery" width={450} height={300} />
                    <DeletPutComponent DeleteId={elem.galery_id} PutBlog={elem.galery_id} Element={elem}/>
                    </WrapperCard>
                )}
        </Gallerys>
    </Wrapper>
   )
}

export default Gallery