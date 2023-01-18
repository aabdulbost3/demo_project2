import styled from "styled-components";

export const Wrapper = styled.div`

`
export const WrapperTop = styled.div`
    display: flex;
    justify-content: space-between;
    h2{
        margin: 0;
        padding: 0;
        color: white;
        font-size: 320 px;
    }
    button{
        background-color: white;
        color: black;
        border: none;
        cursor: pointer;
        font-size: 24px;
        padding: 10px;
        border-radius: 15px;
    }
`
export const Gallerys = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    padding-top: 50px;
`
export const WrapperCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    width: 33%;
    li {
    padding-bottom: 50px;
    list-style-type: none;
    img {
      width: 300px;
      height: 380px;
    }
    p {
      padding-bottom: 20px;
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
  }
`