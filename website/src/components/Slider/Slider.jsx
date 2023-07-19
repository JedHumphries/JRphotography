import React from 'react'
import { Slide, Wrapper, } from './Slider.styled'

const Slider = ({ images = [], ...props }) => {
    console.log(images)
  return (
    <>
    <Wrapper {...props}>
        {images.map((image, index) => (
            <Slide key={index}
                  style={{ background: `url(${image})` }}
            ></Slide>))}
    </Wrapper>
    </>
  )
}



export default Slider