import React from 'react'
import Button from '../Button/Button'
import { Container, Project1, Project2, Project3, } from './Portfolio.styled'


const Portfolio = () => {
  return (
    <Container>
        <Project1>
            <h1>blah blah blah</h1>
            <p>blah</p>
            <Button>hello</Button>
        </Project1>
        <Project2/>
        <Project3/>
    </Container>
  )
}

export default Portfolio