import styled from "styled-components";
// import { motion } from 'framer-motion'


export const Container = styled.div`
height: 650px;
background-color: #EAD29C;
display: flex;
align-items: center;
justify-content: center;
`

export const LeftContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
order: 2;
/* border: 2px solid black;  */
`

export const Vid = styled.video`
height: 100%;
width: 100%;
object-fit: cover;
border: 2px solid black; 
`

export const RightContainer = styled.div`
height: 100%;
width: 100%;

`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const H1 = styled.h1`
color: black;
font-size: 4rem;
font-family: 'Zilla Slab Highlight', cursive;
padding: 5px;

@media screen and (max-width: 768px) {
    font-size: 2.5em;
}

@media screen and (max-width: 480px) {
    font-size: 2em;
}
`

export const P = styled.p`
color: black;
font-size: 1.75rem;
font-family: Stylish;
padding: 5px;

@media screen and (max-width: 768px) {
    font-size: 1.5em;
}

@media screen and (max-width: 480px) {
    font-size: 1.125em;
}
`