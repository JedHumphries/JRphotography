import React, { useState, useEffect } from 'react'
import { Slide, Wrapper, Children } from './Slider.styled'

const Slider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 30000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);


  return (
    <>
    <Wrapper {...props}>
        {images.map((image, index) => (
            <Slide key={index}
                  style={{ backgroundImage: `url(${image})`, 
                  marginLeft: index === 0 ? `-${currentSlide * 100}%` : null }}
            ></Slide>
            ))}
            <Children>
              {children}
            </Children>
    </Wrapper>

    </>
  )
}

export default Slider