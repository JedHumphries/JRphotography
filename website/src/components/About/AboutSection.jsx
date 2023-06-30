import React from 'react'
import { AboutContainer, AboutH1, H1Effect  } from './AboutSection.styled'
 

const AboutSection = () => {
  return (
    <AboutContainer>
   <AboutH1
   initial={{ x : -200 }}
   animate={{ x : 0 }}
   transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100}}
   >
    Joe Roper
   </AboutH1>
  </AboutContainer>
  )
}

export default AboutSection