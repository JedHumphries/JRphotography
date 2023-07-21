import React from 'react'
// import Button from '../Button/Button'
import { Container, Project1, Project2, Project3, H1, P, Item1, Item2, Item3  } from './Portfolio.styled'


const Portfolio = () => {
  return (
    <Container>
        <Project1>
            <H1>blah blah blah</H1>
            <P>blah blah blah blah blah blah</P>
            <Item1 />
        </Project1>
        <Project2>
             <Item2/>
             <H1>blah blah blah</H1>
             <P>blah blah blah blah blah blah</P>         
        </Project2>
        <Project3>
              <H1>blah blah blah</H1>
              <Item3/>
              <P>blah blah blah blah blah blah</P>
        </Project3>
    </Container>
  )
}

export default Portfolio