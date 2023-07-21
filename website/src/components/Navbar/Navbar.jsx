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
                <Reveal>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
                </Reveal>
                <Reveal>
            <NavItem>
              <NavLinks to='gallery'>Gallery</NavLinks>
            </NavItem>
                </Reveal>
                <Reveal>
            <NavItem>
              <NavLinks to='projects'>Projects</NavLinks>
            </NavItem>
                </Reveal>
                <Reveal>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
                </Reveal>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar