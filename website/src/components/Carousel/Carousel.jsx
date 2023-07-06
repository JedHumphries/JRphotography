import React, {useRef, useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
import images from '../../images/images'
import { CarouselContainer, OuterCarousel, InnerCarousel, Item, Pic } from './Carousel.styled'



const Carousel = () => {
  return (
  <CarouselContainer>
    <OuterCarousel>
      <InnerCarousel>
        {images.map(image => {
          return (
            <Item key={image}>
              <Pic src={image} alt="" />
            </Item>
          )
        })}
      </InnerCarousel>
    </OuterCarousel>
  </CarouselContainer>
    
  )
}

export default Carousel