import React from 'react'
import { Container, LeftContainer, RightContainer, H1, P } from './AboutSection.styled'
import Reveal from '../RevealEffect/Reveal'



const AboutSection = () => {
  return (
  <>
  <Container>
    <LeftContainer>
      <H1>ABOUT ME</H1>
      <P> <Reveal>I am a Cumbrian born photographer based in Manchester. I am passionate about story telling through crafting beautiful imagery. I have worked for a variety of brands and makers, such as The Wild Life Trust and Modern Milkmen to produce imagery in keeping with their values and style. 
        <br/>
        <br/>
        </Reveal>
        <Reveal>
         I am passionate about both product and portrait photography, I really love to work with people who take great pleasure and pride in what they do and help them tell their story.</Reveal> </P>
    </LeftContainer>
    <RightContainer>
      
    </RightContainer>
  </Container>
 </>
  )
}

export default AboutSection