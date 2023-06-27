import React from 'react'
import { FooterContainer, 
    FooterInfo, 
    Envelope, 
    Instagram, 
    LinkedinIn, 
    EmailLink, 
    InstagramLink, 
    LinkedInLink,  } from './footer.styled'


function Footer() {
  return (
    <>
    <FooterContainer>
        <FooterInfo>
            Copyright©2023 Joe Roper
        </FooterInfo>
            <EmailLink to='mailto:joeroper@rocketmail.com' target="_blank">
                <Envelope size='1.5em'/>
            </EmailLink>
            <InstagramLink to='https://www.instagram.com/jr_shot/' target="_blank">
                <Instagram size='1.5em'  />
            </InstagramLink>
            <LinkedInLink to='https://www.linkedin.com/in/joe-roper-25701212b/' target="_blank">
                <LinkedinIn size='1.5em'/>
            </LinkedInLink>
    </FooterContainer>
    </>
  )
}

export default Footer