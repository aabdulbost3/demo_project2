import styled from "styled-components";

export const Wrapper = styled.div`
  background: #0f0f11;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  img {
    width: 125px;
    height: 110px;
    @media screen and (max-width: 800px) {
      width: 100px;
    height: 70px;
    }
  }
  ul {
    @media screen and (max-width: 950px) {
      display: none;
    }
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    width: 65%;

    li {
      a {
        text-decoration: none;
        color: white;
      }
      select {
        color: white;
        background-color: #0f0f11;
        border: none;
      }
    }
    li:nth-child(6) {
      display: flex;
      flex-direction: column;
      a{
      border-radius: 50px;
      padding: 5px 15px;
      margin-top: 5px;
      box-shadow: 0px 0px  5px 0px white;
      -webkit-animation: mymove 3s infinite;
    animation: mymove 3s infinite;
      }
      @keyframes mymove {
        50%{
        box-shadow: 0px 0px 20px 0px white;
        }
        50%{
        box-shadow: 0px 0px 20px 0px white;
        }
      }
    }
  }
  button {
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: none;
  .bx {
    color: white;
    font-size: 35px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 950px) {
    display: block;
    display: flex;
    flex-direction: column;
  }
`;

export const Number = styled.div`
  display: none;
  @media screen and (max-width: 950px) {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 98%;
    padding-top: 15%;
    a{
        color: white;
        text-decoration: none;
        text-align: end;
        margin-top: 5px;
        border-radius: 50px;
        padding: 5px 15px;
        width: 135px;
        box-shadow: 0px 0px  5px 0px white;
      -webkit-animation: mymove 3s infinite;
    animation: mymove 3s infinite;
      @keyframes mymove {
        50%{
        box-shadow: 0px 0px 20px 0px white;
        }
        50%{
        box-shadow: 0px 0px 20px 0px white;
        }
      }
    }
  }

  @media screen and (max-width: 667px){
    padding-top: 20%;
  }
  @media screen and (max-width: 475px){
    padding-top: 25%;
  }
  @media screen and (max-width: 362px){
    padding-top: 30%;
    font-size: 15px;
    width: 97%;
    a{
    width: 126px;
    }
}
`
