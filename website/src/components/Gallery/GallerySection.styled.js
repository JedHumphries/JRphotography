import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'

export const GalleryContainer = styled.div`
background-color: black;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 800px;
width: 100%;

`

export const H1Gallery = styled(LinkRouter)`
font-family: Roboto;
color: white;
background-color: black;
font-size: 48px;
`

export const GallerySectionBg = styled.div`
background-color: white;
display: flex;
position: relative;
height: 550px;
width: 350px;
/* border-color: blue;
border-style: solid; */
border-radius: 2%;
`

export const PicInfo = styled.div`
display: flex;
position: absolute;
color: black;
align-items: center;
justify-content: center;
/* font-size: 18px; */
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #EAD29C;
bottom: 0;
height: 125px;
width: 100%;
/* border-color: red;
border-style: solid; */
border-radius: 2%;
text-decoration: none;
`


export const PicOne = styled.img`

`

export const PicTwo = styled.img`

`

export const PicThree = styled.img`

`