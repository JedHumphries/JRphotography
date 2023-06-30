import styled from "styled-components";
// import { Link as LinkRouter } from 'react-router-dom'
import { motion } from 'framer-motion'

export const AboutContainer = styled.div`
height: 700px;
width: 100%;
background-color: black;

`

export const H1Effect = styled(motion.div)`
background-color: purple;
width: 25%;

`

export const AboutH1 = styled(motion.h1)`
color: white;
font-size: 64px;
padding: 10px;

`


