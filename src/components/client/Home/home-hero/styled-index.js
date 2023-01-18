import styled from "styled-components";
import bgcolors from "../../../../assets/client/home/bgcolors.png";
export const Container = styled.div`
  width: 100% !important;
  margin: 0 auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url(${bgcolors});
  background-position-y: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 5%;
 
  @media screen and (max-width: 823px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const LeftDiv = styled.div`
  padding-left: 5%;
  padding-right: 10px;
  width: 45%;

  @media screen and (max-width: 825px){
    padding-left: 0;
    padding-right: 0;
    width: 90%;
    margin-left: 3%;
  }
  @media screen and (max-width: 655px){
    margin-left: 5%;
  }
  h1 {
    padding-top: 7%;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    @media screen and (max-width: 1088px) {
      padding-top: 0%;
    }
    @media screen and (max-width: 935px) {
      font-size: 30px;
    }
  }
  p {
    width: 90%;
    @media screen and (max-width: 823px) {
      width: 100%;
      font-size: 15px;
      width: 70%;
    }
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
`;
export const RightDiv = styled.div`
width: 45%;
@media screen  and (max-width: 825px){
    width: 100% ;
  }
 img {
    width: 100%;
    @media screen and (max-width: 823px) {
      margin-top: 5%;
    }
  }
`;
export const Bigdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10%;
  width: 95%;
  @media screen and (max-width: 823px) {
    display: none;
  }
`;

export const Smallestdiv = styled.div`
  width: 100%;
  p {
    padding-left: 5%;
  }
  @media screen and (max-width: 823px) {
    display: none;
  }
`;
export const Smalldiv = styled.div`
  width: 90%;
  @media screen and (max-width: 823px) {
    display: none;
  }
`;

export const Wrapper = styled.div``;
