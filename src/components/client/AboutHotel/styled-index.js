import styled from "styled-components";

export const Wrapper = styled.div`
  /* padding-top: 10px; */
  padding: 10px 10px 20px 10px;
  background-color: #0f0f11;
  color: white;
  /* padding-bottom: 20px; */
  p {
    margin: 0;
    padding: 0;
  }
  h3 {
    border-bottom: 1px solid #5a5a5a;
    font-size: 35px;
    padding-bottom: 3%;
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
`;
export const Bigdiv = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;

  @media screen and (max-width: 1105px) {
    display: flex;
    flex-direction: column;
    color: white;
  }
`;

export const First = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    @media screen and (max-width: 780px) {
      font-size: 15px;
    }
  }
`;
export const Second = styled.div`
  @media screen and (max-width: 1105px) {
    img {
      width: 100%;
      margin-top: 5%;
    }
  }
`;
export const Small = styled.div`
  h2 {
    margin-top: 5%;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
  }
`;
export const Ul = styled.div`
  ul {
    padding-top: 20px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 50%;
    @media screen and (max-width: 1105px) {
      width: 70%;
    }
    @media screen and (max-width: 780px) {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0;
      li {
        margin-top: 10%;
      }
    }
    @media screen and (max-width: 350px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  p {
    padding-top: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;
