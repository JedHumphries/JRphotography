import React, {useRef, useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
import images from '../../images/images'
import { CarouselContainer, OuterCarousel, InnerCarousel, ItemContainer, Item, H1 } from './Carousel.styled'
import Reveal from '../RevealEffect/Reveal'



const Carousel = () => {
  return (
  <CarouselContainer>
    <Reveal>
      <H1> Gallery </H1>
    </Reveal>
    <OuterCarousel>
      <InnerCarousel drag="x">
        {images.map(image => {
          return (
            <ItemContainer key={image}>
              <Item src={image} alt="" />
            </ItemContainer>
          )
        })}
      </InnerCarousel>
    </OuterCarousel>
  </CarouselContainer>
    
  )
}

export default Carousel