import styled from "styled-components";
import { motion } from 'framer-motion'


export const CarouselContainer = styled.div`
height: 800px;
background-color: #EAD29C;
`

export const H1 = styled.h1`
color: black;
font-family: Lacquer;
/* text-align: center; */
font-size: 4rem;
padding: 10px;
`

export const OuterCarousel = styled(motion.div)`
cursor: grab;
overflow: hidden;
background-color: black;
`

export const InnerCarousel = styled(motion.div)`
display: flex;
background-color: black;
`

export const ItemContainer = styled(motion.div)`
min-height: 30rem;
min-width: 25rem;
padding: 40px;
`

export const Item = styled.img`
width: 100%;
height: 100%;
border-radius: 2rem;
pointer-events: none;
border: 2.5px solid white;
`
