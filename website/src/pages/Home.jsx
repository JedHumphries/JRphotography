import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { motion } from 'framer-motion'

import DropDownMenu from '../components/DropDown/DropDownMenu';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import VideoSection from '../components/VideoSection/VideoSection';
import AboutSection from '../components/About/AboutSection';
import Slider from '../components/Slider/Slider';
import Portfolio from '../components/Portfolio/Portfolio'


import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'


const H1 = styled(motion.h1)`
color: black;
font-size: 4rem;
font-family: Stylish;

@media screen and (max-width: 768px) {
    font-size: 2.5em;
}

@media screen and (max-width: 480px) {
    font-size: 2em;
}
`
const P = styled(motion.p)`
color: black;
font-size: 1.75rem;
font-family: Stylish;

@media screen and (max-width: 768px) {
    font-size: 1.5em;
}

@media screen and (max-width: 480px) {
    font-size: 1.125em;
}
`

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    

    const toggle = () => {
      setIsOpen(!isOpen)
    }

  return (
    <>
      <DropDownMenu isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/> 
      <VideoSection/>
      <AboutSection/>
      <Portfolio/>
      <Link to='/images'> 
      <Slider 
      images={[ image1,image2,image3,image4,image5, image6 ]}>
      <H1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .5 }}
      > blah blah blah blah blah blah blah blah blah blah</H1>
      <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .5 }}
      > Click For More 👉</P>
      </Slider>
      </Link>
     
      <Footer/>
    </>
  )
}

export default Home