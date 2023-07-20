import styled from "styled-components";


export const Wrapper = styled.div`
background-color: gray;
height: 800px;
display: flex;
flex-wrap: nowrap;
overflow-x: hidden;

`

export const Slide = styled.div`
border: 4px double #ffff;
height: 100%;
width: 100%;
flex-shrink: 0;
background-position: center;
background-size: cover;
transition: 750ms ease-in-out;
`

