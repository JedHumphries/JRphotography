import styled from "styled-components";


export const VideoContainer = styled.div`
background: white;
display: flex;
justify-content: center;
align-items: center;
height: 800px;
position: relative;
padding: 0 30px;
z-index: 1;

`

export const VideoSectionBg = styled.div`
height: 100%;
width: 100%;
top: 0;
bottom: 0;
left: 0;
right: 0;
position: absolute;
overflow: hidden;
`

export const VideoBg = styled.video`
height: 100%;
width: 100%;
-o-object-fit: cover;
object-fit: cover;

`