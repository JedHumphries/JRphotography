import styled from "styled-components";
import { motion } from 'framer-motion'


export const CarouselContainer = styled.div`
height: 800px;
background-color: #EAD29C;
align-items: center;
justify-content: center;
`

export const H1 = styled.h1`
color: black;
font-family: Lacquer;
text-align: center;
font-size: 4rem;
`

export const OuterCarousel = styled(motion.div)`

`

export const InnerCarousel = styled(motion.div)`
display: flex;
`

export const ItemContainer = styled(motion.div)`
min-height: 40rem;
width: 35rem;
padding: 40px;
`

export const Item = styled.img`
width: 100%;
height: 100%;
border-radius: 2rem;
`
