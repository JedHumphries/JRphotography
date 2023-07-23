import styled from "styled-components";


export const VideoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 600px;
z-index: 1;
margin-top: 5rem;
`

export const VideoBg = styled.div`
position: absolute;
display: flex;
top: 0;
bottom: 0;
right: 0;
left: 0;
height: 100%;
width: 100%;
 overflow: hidden;
`

export const VideoMp4 = styled.video`
height: 100%;
width: 100%;
object-fit: cover;
`

export const VideoContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const H1Video = styled.h1`
font-family: Lacquer;
color: white;
font-size: 8rem;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 4em;
}

@media screen and (max-width: 480px) {
    font-size: 3em;
}
`

export const VideoP = styled.p`
margin-top: 24px;
color: white;
font-size: 1.75rem;
text-align: center;
max-width: 600px;
font-family: Roboto Condensed;

@media screen and (max-width: 768px) {
    font-size: 1.5em;
}

@media screen and (max-width: 480px) {
    font-size: 1.125em;
}
`