import styled from "styled-components";


export const Wrapper = styled.div`
background-color: black;
height: 800px;
display: flex;
flex-wrap: nowrap;
overflow-x: hidden;
position: relative;
`

export const Slide = styled.div`
border: 4px double #ffff;
height: 100%;
width: 100%;
flex-shrink: 0;
background-position: center;
background-size: cover;
transition: 750ms ease-in-out;
cursor: pointer;
`

export const Children = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)
`