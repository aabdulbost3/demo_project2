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
`