import styled from "styled-components";
import blue from "../../../assets/client/OurHotel/blue2.png";
import redcolor from "../../../assets/client/OurHotel/redcolor.png";

export const Wrapper = styled.div`
  h1 {
    padding-top: 60px;
    @media screen and (max-width: 425px) {
      padding-left: 10px;
    }
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
  color: white;
  background-image: url(${blue});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 40px;
`;
export const Ul1 = styled.div`
  background-image: url(${redcolor});
  background-repeat: no-repeat;
  background-position-x: right  ;
  background-position-y: 1250px;
  padding-top: 20px;
  ul {
    list-style: none;
    padding: 0 10px;
  }
  li {
    padding-bottom: 50px;
    img {
      width: 350px;
      height: 380px;

      @media screen and (max-width: 360px){
        width: 100%;
        height: 380px;
      }
    }
    p {
      padding-bottom: 20px;
    }
    button {
      padding: 10px 30px;
      background: none;
      border: 1px solid white;
      color: white;
      border-radius: 2px;
      cursor: pointer;
      transition: 0.65s;
    }
    button:hover {
      background-color: white;
      color: black;
    }
  }
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 20px;

  @media screen and (max-width: 640px) {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center;
  }
`;
