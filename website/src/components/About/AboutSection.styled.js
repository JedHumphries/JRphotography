import styled from "styled-components";
import { motion } from 'framer-motion'
import { Link as LinkScroll } from 'react-scroll'

export const AboutContainer = styled.div`
height: 700px;
width: 100%;
background-color: black;
`

export const AboutH1 = styled(motion.h2)`
color: white;
font-size: 32px;
padding: 10px;
font-family: Roboto;
text-align: left;

@media screen and (max-width: 768px) {
    font-size: 64px;
}

@media screen and (max-width: 480px) {
    font-size: 48px;
}
`

export const AboutP = styled(motion.p)`
color: white;
font-size: 28px;
padding: 10px;
font-family: Roboto Condensed;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const ArrowContainer = styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;
color:white;
`

export const ArrowLink = styled(LinkScroll)`
cursor: pointer;
`