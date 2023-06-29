import React, { useState } from 'react'
import DropDownMenu from '../components/DropDown/DropDownMenu';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import VideoSection from '../components/VideoSection/VideoSection';
import GallerySection from '../components/Gallery/GallerySection';



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
            <GallerySection/>
              {/* <Footer/> */}
    </>
  )
}

export default Home