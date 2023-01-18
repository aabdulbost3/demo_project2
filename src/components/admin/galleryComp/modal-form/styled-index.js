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
.span-download{
    font-size: 22px;
    position: relative;
    top: 7px;
    margin-right: 5px;
}
`