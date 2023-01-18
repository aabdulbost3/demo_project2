import styled from "styled-components";

export const Wrapper = styled.div`

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
input[type="file"] {
    display: none;
}
button{
    margin-top: 50px;
    padding: 25px 0;
}
label{
    border-style: dotted;
    text-align: center;
    padding: 10px 10px 15px 10px;
    cursor: pointer;
}
.loading{
    position: absolute;
    text-align: center;
    background-color: #FFD700;
    padding-top: 15px;
    padding-bottom: 20px;
    width: 86%;
    margin-top: 2px;
}
input {
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    height: 50px;
    outline: transparent;
    margin-bottom: 20px;
  }
  textarea {
    width: 300px;
    height: 200px;
    padding: 10px;
  }
.span-download{
    font-size: 22px;
    position: relative;
    top: 7px;
    margin-right: 5px;
}
`