import React, { useContext } from "react";
import { ReservContext } from "../../../context/reserv";
import { Wrapper } from "./styled-index";

const Contacts = () => {
  const { ReservMap } = useContext(ReservContext);
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Checkin</th>
            <th>Departure</th>
            <th>Room</th>
            <th>PhoneNumber</th>
            <th>Adults</th>
            <th>Children</th>
          </tr>
        </thead>
        <tbody>
          {ReservMap.map((elem) => (
            <tr>
              <td>{elem.check_in}</td>
              <td>{elem.departure}</td>
              <td>{elem.room}</td>
              <td>{elem.phone_number}</td>
              <td>{elem.adults}</td>
              <td>{elem.kids}</td>
            </tr>))}
        </tbody>
      </table>
    </Wrapper>);};
export default Contacts;