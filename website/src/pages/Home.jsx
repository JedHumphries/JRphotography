import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import DropDownMenu from '../components/DropDown/DropDownMenu';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import VideoSection from '../components/VideoSection/VideoSection';
import AboutSection from '../components/About/AboutSection';
import Slider from '../components/Slider/Slider';


import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'


const H1 = styled.h1`
color: limegreen;
`
const P = styled.p`
color: limegreen;
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <VideoSection/>
      <AboutSection/>
      <Link to='/images'>
      <Slider 
      images={[image1,image2,image3,image4,image5, image6]}>
      <H1>blah blah blah blah blah blah blah blah blah blah</H1>
      <P>blah blah blah blah blah</P>
      </Slider>
      </Link>
      <Footer/>
    </>
  )
}

export default Home