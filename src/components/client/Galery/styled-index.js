import styled from "styled-components";
import Fram from "../../../assets/client/home/Frame1.png"

export const Caroulse = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
overflow-x: scroll;
scroll-behavior: smooth;
margin-top: 5%;
&::-webkit-scrollbar {
    display: none;
}
img{
    width: 100%;
    margin-right: 5%;
}
`
export const SliderItem = styled.div`
 width: 550px;
 height: 380px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 5%;
 img{
    width: 550px !important;
    height: 450px;
    padding-right: 50px;
    border-radius: 3px;
    margin: 0 auto;


    @media screen and (max-width: 395px){
        width: 300px;
    }
 }
 

`

export const GalWrapper = styled.div`
margin-top: 5%;
padding: 0 10px;
background-image: url(${Fram});
background-repeat: no-repeat;
background-size: 100%;
background-position-y: bottom;
h2 {
    color: white;
    font-size: 50px;
    letter-spacing: 1px;
    @media only screen and (max-width: 425px) {
        font-size: 35px;
    }

    @media only screen and (max-width: 375px) {
        font-size: 20px;
    }
}
`

export const Buttons = styled.div`
padding: 3% 0%;
text-align: end;
button {
    border: 1px solid #9F9B9B;
    background-color: transparent;
    color: #9F9B9B;
    border-radius: 50%;
    padding: 14px 14px 10px 12px;
    font-size: 30px;
    cursor: pointer;
    transition: .65s;

    &:hover {
        border: 1px solid white;
        color: white;
    }
}
button:nth-child(1) {
    margin-right: 2%;
}
`