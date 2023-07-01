import React from 'react'
import { AboutContainer, 
  AboutH1, 
  AboutP, 
  ArrowContainer, 
  ArrowLink, 
    } from './AboutSection.styled'
import { FaArrowDown } from 'react-icons/fa'



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
    I have worked for a variety of brands and makers, such as The Wild Life Trust and Modern Milkmen to produce imagery in keeping with their values and style. 
    <br></br>
    I am passionate about both product and portrait photography, I really love to work with people who take great pleasure and pride in what they do and help them tell their story.
    <br></br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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