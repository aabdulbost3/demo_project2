import styled from "styled-components";

export const Dashboar = styled.div`
background-color: #1B1B1C;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
position: fixed;
top: 0;
left: 0;
padding: 0;
text-align: start;
width: 250px;
padding-right: 90px;
height: 100%;

display: flex;
ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    margin-left: 15px;
}
`
export const DashboardWrapper = styled.div`
 width: 100%;
`
export const Pages = styled.div`
  width: 60%;
  height: 100%;
`

export const Ul = styled.ul`
li{
    a{
        text-decoration: none;
        color: white;
        font-size: 20px;
        padding-bottom: 5%;
    }
    border-bottom: 1px solid white;
    margin-top: 10%;
}
`

export const UL = styled.ul`
margin: 0;
padding: 0;
li {
   text-align: center;  
}
`   