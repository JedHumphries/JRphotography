import React from 'react'
import { AboutContainer, AboutH1, AboutP, Button  } from './AboutSection.styled'

 

const AboutSection = () => {
  return (
    <AboutContainer>
   <AboutH1 
    variants={{ 
    hidden: {opacity: 0, y: 75}
    }}
    initial="hidden"
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration: 0.5, delay: 0.25}}
   >
    About Me..
    </AboutH1>
    <AboutP
    variants={{ 
    hidden: {opacity: 0, y: 75}
    }}
    initial="hidden"
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration: 0.5, delay: 0.25}}
    >
    I am a Cumbrian born photographer based in Manchester. I am passionate about story telling through crafting beautiful imagery.
    <br></br>
    <br></br>
    I have worked for a variety of brands and makers, such as The Wild Life Trust and Modern Milkmen to produce imagery in keeping with their values and style. 
    <br></br>
    <br></br>
    I am passionate about both product and portrait photography, I really love to work with people who take great pleasure and pride in what they do and help them tell their story.
   </AboutP>
   <Button
   variants={{ 
    hidden: {opacity: 0, y: 75}
    }}
    initial="hidden"
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration: 0.5, delay: 0.25}}
   >
   Contact Me</Button>
  </AboutContainer>
  )
}

export default AboutSection