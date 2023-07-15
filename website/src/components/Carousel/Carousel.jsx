import React, {useRef, useState, useEffect } from 'react'
import images from '../../images/images'
import { CarouselContainer, 
  OuterCarousel, 
  InnerCarousel, 
  ItemContainer, 
  Item, 
  H1,
  BtnLink } from './Carousel.styled'

import Reveal from '../RevealEffect/Reveal'
import Button from '../Button/Button'


const Carousel = () => {
  // could useMediaQuery hook to make responsive
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
  <CarouselContainer >
    <Reveal>
      <H1> Gallery </H1>
    </Reveal>
    <OuterCarousel ref={carousel} whileTap={{cursor: "grabbing"}}>
      <InnerCarousel 
      // animate={{ x: [0, 10, 0] }}
      // transition={{repeat: Infinity }}
      drag="x" 
      dragConstraints={{ right:0, left:-width }}>
        {images.map(image => {
          return (
            <ItemContainer key={image}>
              <Item src={image} alt="" />
            </ItemContainer>
          )
        })}
      </InnerCarousel>
    </OuterCarousel>
    <BtnLink to='images'>
    <Button>More</Button>
    </BtnLink>
  </CarouselContainer>
  
  )
}

export default Carousel

