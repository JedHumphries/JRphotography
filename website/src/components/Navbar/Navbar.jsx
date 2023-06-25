import React from 'react'
import { Nav, 
  NavLogo, 
  NavbarContainer, 
  NavMenu, 
  NavItem, 
  NavLinks,
  HamburgerMenu,
  Bars } from './Navbar.styled'
import logo2 from './images/logo2.jpg'


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
          <img src={logo2} alt='small logo'></img>
          </NavLogo>
          <HamburgerMenu onClick={toggle}>
            <Bars/>
          </HamburgerMenu>
          <NavMenu>
            <NavItem>
              <NavLinks to='projects'>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='gallery'>Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
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