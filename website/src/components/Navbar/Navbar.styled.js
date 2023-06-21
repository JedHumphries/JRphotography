import styled from 'styled-components'

export const Nav = styled.nav`
background-color: black;
height: 80px;
/* top: 0; */
position: sticky;
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
`

export const NavLogo = styled.div`
background-color: blue;
color: white;
cursor: pointer;
padding: 25px;
justify-self: flex-start;
`

export const HamMenu = styled.div`
display: none;
padding: 15px;

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
height: 80px;
`

export const NavLinks = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
cursor: pointer;
padding: 16px;
height: 100%;
background-color: blue;
height: 100%;

/* &.active {
    border-bottom: 3px solid red;
} */
`