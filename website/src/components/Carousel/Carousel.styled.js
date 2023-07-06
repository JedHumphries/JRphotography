import styled from "styled-components";
import { motion } from 'framer-motion'


export const CarouselContainer = styled.div`
height: 700px;
background-color: #EAD29C;
/* display: flex; */
align-items: center;
justify-content: center;
`

export const OuterCarousel = styled(motion.div)`

`

export const InnerCarousel = styled(motion.div)`

`

export const Item = styled(motion.div)`
min-height: 40rem;
width: 33%;
padding: 40px;
`

export const Pic = styled.img`
width: 100%;
height: 100%;
`
