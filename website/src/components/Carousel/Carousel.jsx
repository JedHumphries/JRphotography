import React, {useRef, useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
import images from '../../images/images'
import { CarouselContainer, OuterCarousel, InnerCarousel, ItemContainer, Item, H1 } from './Carousel.styled'



const Carousel = () => {
  return (
  <CarouselContainer>
  <H1> Gallery </H1>
    <OuterCarousel>
      <InnerCarousel>
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