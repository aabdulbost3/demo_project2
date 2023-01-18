import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


button {
border: 1px solid white;
background-color: transparent;
cursor: pointer;
color: white;
padding: 10px 30px;
letter-spacing: 1px;
font-weight: 600;
border-radius: 10px;
transition: .65s;

&:hover {
    background-color: white;
    color: black;
}
}
`


export const Form = styled.form`
display: flex;
flex-direction: column;
input {
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    height: 50px;
    outline: transparent;
    margin-bottom: 20px;
  }
  button{
    margin-top: 50px;
    padding: 25px 0;
}
`