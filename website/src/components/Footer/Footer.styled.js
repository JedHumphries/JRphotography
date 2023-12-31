import styled from "styled-components";
import { FaRegEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'

export const FooterContainer = styled.div`
height: 60px;
width: 100%;
/* background-color: #CF0015; */
background-color: black;
display: flex;
align-items: center;
justify-content: center;
bottom: 0;
right: 0;
z-index: 998;
/* border: 1px solid white; */
`

export const FooterInfo = styled.p`
padding-right: 75px;
font-size: 16px;
color: white;
`

export const EmailLink = styled(LinkRouter)`
padding-right: 25px;
`

export const InstagramLink = styled(LinkRouter)`
padding-right: 25px;
`

export const LinkedInLink = styled(LinkRouter)`
padding-right: 25px;
`

export const Envelope = styled(FaRegEnvelope)`
color: white;
cursor: pointer;
`

export const Instagram = styled(FaInstagram)`
color: white;
cursor: pointer;
`

export const LinkedinIn = styled(FaLinkedinIn)`
color: white;
cursor: pointer;
`