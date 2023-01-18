import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #1b1b1c;
  background-color: #1b1b1c;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2%;
  color: white;
  border-radius: 5px;
  margin-top: 5%;
  @media screen and (max-width: 320px) and (max-width: 375px){
    padding: 30px 20px;
  }
  @media screen and (max-width: 885px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    width: 20%;
    @media screen and (max-width: 885px) {
      width: 100%;
      text-align: center;
    }
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
  p {
    margin: 0;
  }
`;

export const CardWrap = styled.div`
  width: 62%;
  @media screen and (max-width: 885px) {
    width: 100%; 
  }
  @media screen and (max-width: 320px) and (max-width: 375px){
    padding: 0 20px !important
    ;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 656px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  border: 1px solid #2f2f2f;
  width: 25%;
  border-radius: 5px;
  padding: 3%;
  background-color: #2f2f2f;
  @media screen and (max-width: 656px){
    margin-top: 3%;
    width: 70%;
  }
  @media screen and (max-width: 320px) and (max-width: 375px){
    width: 100%;
  }
  input {
    margin-top: 15%;
    background-color: #1b1b1c;
    border: 1px solid #1b1b1c;
    padding: 7px 0px 7px 5px ;
    color-scheme: dark;
    border-radius: 5px;
    color: white;
    outline: none;
    font-size: 15px;
    width: 100%;
  }

  input:nth-child(2):focus input:nth-child(3){
  display: none;
  } 
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Countdiv = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
    button {
      border: 1px solid #1f1f1f;
      background-color: #1f1f1f;
      color: white;
      border-radius: 50%;
      height: 23px !important;
    }
  }
  p {
    padding-bottom: 5%;
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
  }
  p:nth-child(2) {
    font-size: 18px;
  }
`;

export const DivCard = styled.div`
  display: flex;
  margin-top: 3%;
  @media screen and (max-width: 656px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 320px) and (max-width: 375px){
    width: 100%;
  }
  
`;

export const CaRd = styled.div`
  border: 1px solid #2f2f2f;
  background-color: #2f2f2f;
  width: 25%;
  border-radius: 5px;
  padding: 3%;
  @media screen and (max-width: 320px) and (max-width: 375px){
    width: 100% !important;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width: 320px) and (max-width: 375px){
    width: 100%;
  }
    .bx {
      font-size: 25px;
    }
  }
  select {
    margin-top: 15%;
    border: 1px solid #1b1b1c;
    background-color: #1b1b1c;
    width: 100%;
    padding: 7px 10px;
    color: white;
    outline: none;
    font-size: 15px;
    border-radius: 5px;
  }
  @media screen and (max-width: 656px){
    margin-top: 0%;
    width: 70%;
  }
`;
export const CaRD = styled.div`
  border: 1px solid #2f2f2f;
  background-color: #2f2f2f;
  width: 25%;
  margin-left: 3%;
  padding: 3%;
  border-radius: 5px;
  @media screen and (max-width: 320px) and (max-width: 375px){
    width: 100% !important;
  }
  @media screen and (max-width: 656px){
    margin-top: 3%;
    width: 70%;
    margin: 3% 0;
  }

  input {
    margin-top: 15%;
    background-color: #1b1b1c;
    border: 1px solid #1b1b1c;
    outline: none;
    padding: 7px 0px;
    width: 100%;
    border-radius: 5px;
    font-size: 15px;
    padding-left: 5px;
    color: white;
  }

`;

export const Butto = styled.button`
  width: 15%;
  border: 1px solid white;
  color: white;
  font-weight: 500;
  background-color: #1b1b1c;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.65s;
  

  &:hover {
    background-color: white;
    color: #1b1b1c;
  }
  @media screen and (max-width: 885px) {
    margin-top: 5%; 
    width: 30%;
  }

  @media screen and (max-width: 320px) and (max-width: 375px){
    width: 100% !important;
  }
  @media screen and (max-width: 502px){
    width: 77% !important;
    margin: 10px auto;
  }
  @media screen and (max-width: 425px){
    width: 77% !important;
    margin: 10px auto;
  }
`;

export const CardDiV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5%;
  .bx {
    font-size: 25px;
  }
`;

export const TimeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bx {
    font-size: 25px;
  }
`;


export const Succsess = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.bx {
color: green;
font-size: 50px;
}
button {
padding: 7px 20px;
font-size: 20px;
font-weight: 700;
background-color: green;
color: white;
border: 1px solid green;
border-radius: 10px;
cursor: pointer;
margin-top: 5%;
}
`