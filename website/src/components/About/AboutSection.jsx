import React from 'react'
import { AboutContainer, 
  AboutH1, 
  AboutP, 
  ArrowContainer, 
  ArrowLink, 
  H1RedactedEffect  } from './AboutSection.styled'
import { FaArrowDown } from 'react-icons/fa'


const AboutSection = () => {
  return (
<AboutContainer>
  <H1RedactedEffect
    variants={{ 
    hidden:{left: 0},
    visible:{left: "100%"},
    }}
    initial="hidden"
    whileInView="visible"
    transition={{duration: 0.5, ease: "easeIn"}}
    style={{
      position: "absolute",
      width: "fit-content",
      top: "4",
      bottom: "4",
      left: "0",
      right: "0",
      background: "purple",
      zIndex: 20,
    }}
  >
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
    </H1RedactedEffect>
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
    I have worked for a variety of brands and makers, such as The Wild Life Trust and Modern Milkmen to produce imagery in keeping with their values and style. 
    <br></br>
    I am passionate about both product and portrait photography, I really love to work with people who take great pleasure and pride in what they do and help them tell their story.
   </AboutP>
   <ArrowContainer
   variants={{ 
    hidden: {opacity: 0, y: 75}
    }}
    initial="hidden"
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration: 0.5, delay: 0.25}}
   >  
   <ArrowLink to="contact">
   <FaArrowDown color="white" size="6em"></FaArrowDown>
   </ArrowLink>
  </ArrowContainer>
</AboutContainer>
  )
}

export default AboutSection