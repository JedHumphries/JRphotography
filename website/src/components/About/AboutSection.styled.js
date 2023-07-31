import styled from "styled-components";


export const AboutContainer = styled.div`
height: 650px;
width: 100%;
background-color: #EAD29C;
`

export const H1 = styled.h1`
color: black;
font-size: 4rem;
padding: 10px;
font-family: 'Zilla Slab Highlight', cursive;
text-align: left;
padding-top: 25px;

@media screen and (max-width: 768px) {
    font-size: 2.5em;
}

@media screen and (max-width: 480px) {
    font-size: 2em;
}
`

export const AboutP = styled.p`
color: black;
font-size: 1.75rem;
padding: 10px;
font-family: 'Zilla Slab Highlight', cursive;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px) {
    font-size: 1.5em;
}

@media screen and (max-width: 480px) {
    font-size: 1.125em;
}
`
