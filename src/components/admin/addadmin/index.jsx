import { Wrapper, Form } from "./styled-index"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from "axios";


function Add() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const name = React.useRef()
    const email = React.useRef()
    const pasword = React.useRef()
    const hendelAdd = async (e) => {
        e.preventDefault()
        try {
            const body = {
                name: name.current.value,
                email: email.current.value,
                password: pasword.current.value
            }
            const response = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:vR9Klpfo/auth/signup", body)
            if (response) {
                setOpen(false)
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <Wrapper>
                <h2>Добавить Админ</h2>
                <button onClick={handleOpen}>Добавить+</button>
            </Wrapper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Form>
                        <label>Имя</label>
                        <input ref={name} type="text" placeholder="имя..." />

                        <label>Эл. адрес</label>
                        <input ref={email} type="email" placeholder="Эл. адрес..." />

                        <label>Парол</label>
                        <input ref={pasword} type="password" placeholder="парол" />

                        <button onClick={hendelAdd}>Добавить</button>
                    </Form>
                </Box>
            </Modal>
        </>
    );
}

export default Add;