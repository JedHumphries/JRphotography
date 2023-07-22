import React from 'react'
import Button from '../Button/Button'
import { Container, Project1, Project2, H1, P, Item1, ButtonContainer,  } from './Portfolio.styled'

// import image1 from '../../images/image1.jpg'
import drone from '../../videos/drone.mp4'


const Portfolio = () => {
  return (
    <Container>
          <Project1>
          <ButtonContainer> 
          
              <H1>blah blah blah</H1>
              <P>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</P> 
              <Button>Projects</Button> 
              </ButtonContainer> 
            
          </Project1>
        <Project2> 
             <Item1 src={drone} autoPlay loop muted type="video/mp4" />   
        </Project2>
    </Container>
  )
}

export default Portfolio