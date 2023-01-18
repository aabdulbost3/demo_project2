import styled from "styled-components"
import Fram from "../../../assets/client/home/Frame1.png"

export const Wrapper = styled.div`
padding: 10px 10px 0 10px;
background-color: #0F0F11;
color: white;
h3{
    border-bottom: 1px solid #5A5A5A;
    padding-bottom: 3%;
    font-size: 35px;
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
}
`
export const Bigdiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


@media screen and (max-width: 815px) {
    display: flex;
    flex-direction: column;
}
`

export const First = styled.div`
p{
width: 95%;
font-style: normal;
font-weight: 400;
font-size: 16px;
}
`
export const Second = styled.div`
`
export const Smaller = styled.div`
`
export const Smallest = styled.div`
`
export const Text = styled.div`
@media screen and (max-width: 400px){
    background-image: url(${Fram});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: bottom;
}
`

export const DfDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 400px){
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
h5 {
    font-size: 20px;
}
`
  