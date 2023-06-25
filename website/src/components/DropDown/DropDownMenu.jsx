import React from 'react'
import { DropDownContainer, 
  CloseIcon, 
  Icon, 
  DropDownWrapper, 
  DropDownLink, 
  DropDown } from './DropDownMenu.styled'

const DropDownMenu = ({isOpen, toggle}) => {
  return (
    <DropDownContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
          <DropDownWrapper>
            <DropDown>
              <DropDownLink to='projects' onClick={toggle}> Projects</DropDownLink>
              <DropDownLink to='gallery' onClick={toggle}> Gallery</DropDownLink>
              <DropDownLink to='about' onClick={toggle}> About</DropDownLink>
              <DropDownLink to='contact' onClick={toggle}> Contact</DropDownLink>
              </DropDown>
          </DropDownWrapper>
    </DropDownContainer>
  )
}

export default DropDownMenu