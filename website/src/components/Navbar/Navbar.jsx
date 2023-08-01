import React from 'react'
import logoSmall from '../../images/logoSmall.jpg'
import { Nav, 
  NavLogo, 
  NavbarContainer, 
  NavMenu, 
  NavItem, 
  NavLinks,
  HamburgerMenu,
  Bars } from './Navbar.styled'
  import Reveal from '../RevealEffect/Reveal'


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
          <img src={logoSmall} alt='small logo'></img>
          </NavLogo>
          <HamburgerMenu onClick={toggle}>
            <Bars/>
          </HamburgerMenu>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='gallery'>Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='projects'>Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar