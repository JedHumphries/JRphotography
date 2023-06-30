import styled from "styled-components";
// import { Link as LinkRouter } from 'react-router-dom'
import { motion } from 'framer-motion'

export const AboutContainer = styled.div`
height: 700px;
width: 100%;
background-color: black;

`

// export const H1Effect = styled(motion.div)`
// background-color: purple;
// width: fit-content;
// `

export const AboutH1 = styled(motion.h2)`
color: white;
font-size: 32px;
padding: 10px;
font-family: Roboto;
text-align: left;
/* background-color: purple;
width: fit-content; */
`

export const AboutP = styled(motion.p)`
color: white;
font-size: 28px;
padding: 10px;
font-family: Roboto Condensed;
/* background-color: blue;
width: fit-content; */
`

export const Button = styled(motion.button)`
padding: 10px;
margin: 10px;

`