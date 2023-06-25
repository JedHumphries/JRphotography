import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from 'react-scroll'

export const DropDownContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: black;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: white;

&:hover {
    color: gray;
    transition: 0.2 ease-in-out
}
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 24px;
cursor: pointer;
/* outline: none; */
`

export const DropDownWrapper = styled.div`
color: white;
`

export const DropDown = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px)
}
`

export const DropDownLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
transition: 0.2s ease-in-out;
color: white;
cursor: pointer;

&:hover {
    color: gray;
    transition: 0.2 ease-in-out
}
`