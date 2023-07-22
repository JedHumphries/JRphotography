import React from 'react'
import Button from '../Button/Button'
import { Container, Project1, Project2, H1, P, Item1, Item2, ButtonContainer  } from './Portfolio.styled'

import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'


const Portfolio = () => {
  return (
    <Container>
        <Project1>
            <Item1 src={image1} alt=''/>
        </Project1>
        <Project2>
             <Item2 src={image2} alt=''/>
             <H1>blah blah blah</H1>
             <P>blah blah blah blah blah blah</P> 
             <ButtonContainer> 
             <Button>Projects</Button> 
              </ButtonContainer>     
        </Project2>
    </Container>
  )
}

export default Portfolio