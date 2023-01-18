import styled from "styled-components";

export const Wrapper = styled.div`
  button {
    display: flex;
    margin-left: auto;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-transform: uppercase;
    color: #1b1b1b;
    background: #ffd700;
    padding: 23px 42px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  span:nth-child(1) {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: black;
    margin-left: 20px;
    font-weight: bold;
    text-transform: uppercase;
    color: #224066;
  }
  span:nth-child(2) {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 38px;
    line-height: 22px;
    color: black;
    margin-left: 20px;
    cursor: pointer;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  label {
    border-style: dotted;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
    cursor: pointer;
  }
  input[type="file"] {
    display: none;
  }
  .span-download {
    font-size: 22px;
    position: relative;
    top: 7px;
    margin-right: 5px;
  }
  .loading {
    position: absolute;
    text-align: center;
    background-color: #ffd700;
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
  button {
    margin-top: 83px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-transform: uppercase;
    color: white;
    background: #f67263;
    padding: 23px 0px;
    border: transparent;
    cursor: pointer;
    border-radius: 25px;
  }
  textarea {
    width: 300px;
    height: 200px;
    padding: 10px;
  }
`;
