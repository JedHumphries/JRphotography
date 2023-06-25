import React, { useState } from 'react'
import DropDownMenu from '../components/DropDown/DropDownMenu';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

  return (
    <>
      <DropDownMenu isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> 
          <Footer/>
        
    </>
  )
}

export default Home