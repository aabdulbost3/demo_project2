import { useContext, useState } from "react";
import { AddadminContext } from "../../../context/addadmin";
import { Wrapper } from "./styled-index";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Add from "../../../components/admin/addadmin/index";
function AddAdmin() {
  const { adminMap } = useContext(AddadminContext);
  console.log(adminMap);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const DelAdmin = async () => {
    const DeleteId = window.localStorage.getItem("delId");
    const response = await fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:vR9Klpfo/user/${DeleteId}`,
      {
        method: "DELETE",
      }
    ).catch((DeleteId) => console.error(DeleteId));
    if (response) {
      window.location.reload();
    }
  };
  return (
    <Wrapper>
      <Add />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Имя</th>
            <th>Эл. адрес</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {adminMap.map((elem, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>
                <button
                  onClick={() => {
                    window.localStorage.setItem("delId", elem.id);
                    handleOpen();
                  }}>Delete</button>
              </td>
            </tr>))}
        </tbody>
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Вы уверены, что хотите удалить данные?</h3>

          <div>
            <button onClick={DelAdmin}>Да</button>
            <button onClick={handleClose}>Нет</button>
          </div>
        </Box>
      </Modal>
    </Wrapper>
  );
}
export default AddAdmin;
