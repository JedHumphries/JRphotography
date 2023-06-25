import styled from 'styled-components'
import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const Nav = styled.nav`
background-color: black;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
/* margin-top: -80px; */
/* top: 0; */
position: sticky;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
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
/* background-color: blue; */
color: white;
cursor: pointer;
padding: 25px;
justify-self: flex-start;

`

export const HamburgerMenu = styled.div`
/* display: none; */
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
color: white;
cursor: pointer;
padding: 16px;
height: 100%;
/* background-color: blue; */
height: 100%;

&.active {
    border-bottom: 3px solid #EAD29C;
}
`
export const Bars = styled(FaBars)`
`