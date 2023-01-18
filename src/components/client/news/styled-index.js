import styled from "styled-components";
import Img from "../../../assets/client/home/Frame1684.png";

export const Wrapper = styled.div`
  @media screen and (max-width: 375px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;
export const CarouselDiv = styled.div`
  color: white;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const SliderItem = styled.div`
  width: 550px;
  height: 380px;

  div {
    button {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.01em;
      color: #ffffff;
      /* background: #1b1b1c;
      border: 1px solid #cccccc;
      border-radius: 5px;
      outline: none;
      padding: 16px 30px; */
      padding: 10px 30px;
      background: none;
      border: 1px solid white;
      color: white;
      border-radius: 2px;
      cursor: pointer;
      -webkit-transition: 0.65s;
      transition: 0.65s;

      :hover {
        background-color: white;
        color: black;
      }
    }
  }

  img {
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    border: 1px solid white;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    transition: 0.65s;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }
  }
  div {
    margin-right: 5%;
  }
`;

export const Card = styled.div`
  width: 300px !important;
`;

export const Buttons = styled.div`
  text-align: end;
  padding-bottom: 3%;
  button {
    border: 1px solid #9f9b9b;
    background-color: transparent;
    color: #9f9b9b;
    border-radius: 50%;
    padding: 14px 14px 10px 12px;
    font-size: 30px;
    cursor: pointer;
    transition: 0.65s;

    &:hover {
      border: 1px solid white;
      color: white;
    }
  }
  button:nth-child(1) {
    margin-right: 3%;
  }
`;

export const H2 = styled.div`
  font-size: 30px;
  color: white;
  margin-top: 10%;
  margin-bottom: 5%;
  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`;
