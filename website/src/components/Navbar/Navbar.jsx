import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Nav, 
  NavLogo, 
  NavbarContainer, 
  NavMenu, 
  NavItem, 
  NavLinks,
  HamMenu } from './Navbar.styled'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Logo</NavLogo>
          <HamMenu>
            <GiHamburgerMenu size="1.5em"/>
          </HamMenu>
          <NavMenu>
            <NavItem>
              <NavLinks>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar