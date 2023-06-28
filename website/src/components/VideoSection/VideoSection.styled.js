import styled from "styled-components";


export const VideoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 800px;
z-index: 1;
padding: 0 30px;

`

export const VideoBg = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
height: 100vh;
width: 100vw;
overflow: hidden;
`

export const VideoMp4 = styled.video`
height: 100%;
width: 100%;
-o-object-fit: cover;
object-fit: cover;
`