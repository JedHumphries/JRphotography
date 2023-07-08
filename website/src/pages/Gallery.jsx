import React, { useState } from 'react'
import DropDownMenu from '../components/DropDown/DropDownMenu'
import Navbar from '../components/Navbar/Navbar'

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return (
    <>
    {/* <DropDownMenu isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/> */}
    <h1>gallery.images</h1>
    </>
  )
}

export default Gallery