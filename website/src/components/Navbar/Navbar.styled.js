import styled from 'styled-components'
import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const Nav = styled.nav`
background-color: #EAD29C;
height: 100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
margin-top: -80px;
top: 0;
position: sticky;
z-index: 10;

`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 90px;
width: 100%;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
display: flex;
align-items: center;
text-decoration: none;
color: white;
cursor: pointer;
padding: 25px;
justify-self: flex-start;
`

export const HamburgerMenu = styled.div`
display: none;
padding: 25px;


@media screen and (max-width: 768px) {
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100% 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 90px;
`

export const NavLinks = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
color: black;
cursor: pointer;
padding: 16px;
height: 100%;
height: 100%;

&.active {
    border-bottom: 3px solid #42CAFD;
}
`

export const Bars = styled(FaBars)`
color: black;
`