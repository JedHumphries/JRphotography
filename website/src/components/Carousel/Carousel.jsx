import React, {useRef, useState, useEffect } from 'react'
import images from '../../images/images'
import { CarouselContainer, 
  OuterCarousel, 
  InnerCarousel, 
  ItemContainer, 
  Item, 
  H1 } from './Carousel.styled'

import Reveal from '../RevealEffect/Reveal'
import Button from '../Button/Button'


const Carousel = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <>
  <CarouselContainer >
    <Reveal>
      <H1> Gallery </H1>
    </Reveal>
    <OuterCarousel ref={carousel} whileTap={{cursor: "grabbing"}}>
      <InnerCarousel 
      animate={{ x: [0, 10, 0] }}
      transition={{repeat: Infinity }}
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
    <Button></Button>
  </CarouselContainer>
  </>
  )
}

export default Carousel

