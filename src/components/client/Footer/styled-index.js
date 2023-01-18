import styled from "styled-components";
import backgroundimg from "../../../assets/footer/frame.png";
import blue from "../../../assets/footer/blue.png";

export const Wrapper = styled.div`
  padding-top: 50px;
  background-image: url(${backgroundimg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
  @media only screen and (max-width: 922px) {
    background-color: #0f0f11;
    background-image: url(${blue});
    background-size: auto;
    background-position-y: 95%;
    background-position-x: 100%;
  }
`;

export const Container = styled.div`
  a {
    color: #ffffff;
    text-decoration: none;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.01em;
  }
  ul {
    list-style: none;
  }
`;

export const Title = styled.div`
  h2 {
    color: #ffffff;
  }
`;

export const Ul = styled.div``;

export const P = styled.div`
  li {
    padding-top: 15px;
    color: #ffffff;
  }
`;

export const UPWrapper = styled.div`
  @media only screen and (max-width: 502px) {
   padding-left: 40px;
  }
`;
export const Up = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #bbbbbb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 140px;
  a {
    i {
      font-size: 30px;
    }
  }
`;
export const Heading = styled.div`
  position: relative;
  img {
    width: 200px;
    margin-bottom: 30px;
    @media only screen and (max-width:622px) {
      width: 120px;
      margin-right: 236px;
      margin-bottom: 0px;
    }
  }
  ul {
    padding: 0 40px;
    li {
      margin: 10px 0;
    }
    i {
      font-size: 25px;
      margin: 0 7px 0 0;
    }
    button {
    border: 1px solid white;
    background-color: transparent;
    color: white ;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.01em;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 1px;
    box-shadow: 0px 0px  5px 0px white;
      -webkit-animation: mymove 3s infinite;
    animation: mymove 3s infinite;
      @keyframes mymove {
        50%{
        box-shadow: 0px 0px 25px 0px white;
        }
        50%{
        box-shadow: 0px 0px 25px 0px white;
        }
      }
    }
  }

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media only screen and (max-width: 940px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Li = styled.div`
  img {
    width: 60px;
    display: flex;
    margin-left: auto;
    @media only screen and (max-width: 940px) {
      margin-left: 260px;
      width: 60px;
      margin-bottom: -20px;
    }
  }
 
`;

export const Li1 = styled.div`
  color: #ffffff;
  padding-top: 10px;
  letter-spacing: 20px;
`;
