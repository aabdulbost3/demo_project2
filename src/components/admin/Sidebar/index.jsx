import React from "react";
import { dataSidebar } from "./data-sidebar";
import { NavLink } from "react-router-dom";
import { UL, Ul, Dashboar } from "../../../pages/admin/dashboard/styled-index";
import Logo from "../../../assets/client/header/Logo.svg";
import {
  Wrapper,
  WrapperTop,
  WrapperList,
  WrapperItem,
  Profile,
  ProfileTitle,
} from "./styled-index";

const Sidebar = () => {
  return (
    <>
      <Dashboar>
        <ul>
          <li>
            <UL>
              <li>
                <img src={Logo} width={125} height={110} alt="logo" />
              </li>
            </UL>
          </li>
          <li>
            <Ul>
              {dataSidebar.map((elem, index) => (
                <li key={index}>
                  <NavLink
                    to={elem.path}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      padding: "15px",
                      width: "100%",
                    }}
                  >
                    <box-icon name={elem.icon}></box-icon>
                    <span>{elem.title}</span>
                  </NavLink>
                  </li>
              ))}
            </Ul>
          </li>
        </ul>
      </Dashboar>
    </>
  );
};

export default Sidebar;
