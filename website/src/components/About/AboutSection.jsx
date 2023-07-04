import React from 'react'
// import { AboutContainer, 
//   AboutH1, 
//   AboutP,  
//     } from './AboutSection.styled'
import Reveal from '../RevealEffect/Reveal'



const AboutSection = () => {
  return (
  <>
  <div>
  <Reveal>
    <h1>
      About Me...
    </h1>
    </Reveal>
    <Reveal>
    <p>
    I am a Cumbrian born photographer based in Manchester. I am passionate about story telling through crafting beautiful imagery.I have worked for a variety of brands and makers, such as The Wild Life Trust and Modern Milkmen to produce imagery in keeping with their values and style. 
    </p>
    </Reveal>
    
    <Reveal>
    <p>
    I am passionate about both product and portrait photography, I really love to work with people who take great pleasure and pride in what they do and help them tell their story.
    </p>
    </Reveal>

    <Reveal>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </Reveal>
    </div>
 </>
  )
}

export default AboutSection