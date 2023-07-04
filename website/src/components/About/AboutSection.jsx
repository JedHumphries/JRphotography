import React from 'react'
import { AboutContainer, H1, AboutP } from './AboutSection.styled'
import Reveal from '../RevealEffect/Reveal'



const AboutSection = () => {
  return (
  <>
  <AboutContainer>

     <Reveal><H1> About Me...</H1></Reveal>

    <Reveal>
    <AboutP>
    I am a Cumbrian born photographer based in Manchester. I am passionate about story telling through crafting beautiful imagery.I have worked for a variety of brands and makers, such as The Wild Life Trust and Modern Milkmen to produce imagery in keeping with their values and style. 
    </AboutP>
    </Reveal>
    
    <Reveal>
    <AboutP>
    I am passionate about both product and portrait photography, I really love to work with people who take great pleasure and pride in what they do and help them tell their story.
    </AboutP>
    </Reveal>
    
    </AboutContainer>
 </>
  )
}

export default AboutSection