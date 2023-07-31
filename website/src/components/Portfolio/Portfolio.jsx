import React from 'react'
import Button from '../Button/Button'
import { Container, LeftContainer, RightContainer, H1, P, Vid, ButtonContainer,  } from './Portfolio.styled'


import project from '../../videos/project.mp4'


const Portfolio = () => {
  return (
    <Container>
          <LeftContainer>
              <ButtonContainer> 
                <H1>blah blah blah</H1>
                <P>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</P> 
                <Button>Projects</Button> 
              </ButtonContainer>  
          </LeftContainer>
        <RightContainer> 
             <Vid src={project} autoPlay loop muted type="video/mp4" />   
        </RightContainer>
    </Container>
  )
}

export default Portfolio