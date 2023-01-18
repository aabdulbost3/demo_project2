import styled from "styled-components";

export const Modals = styled.div`
  display: none;
  background-color: #0f0f11;
  position: fixed;
  height: 100%;
  padding: 0 20px 0 0px;
  width: 80%;
  top: 0;
  left:${(props) => (props.modal ? "-800px" : "0px")};
  transition: 0.8s;
  overflow-y: scroll;
  p {
    text-align: end;
    color: white;
    cursor: pointer;
    transition: 0.65s;
  }

  @media screen and (max-width: 900px) {
    display: block;
  }
  ul {
    list-style: none;
    li {
      margin-top: 10%;
      padding-bottom: 3%;
      border-bottom: 1px solid white;
      transition: 0.65s;
      &:hover {
        transform: scale(1.1);
      }
      a {
        text-decoration: none;
        color: white;
      }
      select {
        border: none;
        background-color: #0f0f11;
        color: white;
      }
    }
    li:nth-child(6) {
      display: flex;
      flex-direction: column;
    }
  }
`;