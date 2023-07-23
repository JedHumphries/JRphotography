import styled from "styled-components";


export const AboutContainer = styled.div`
height: 600px;
width: 100%;
background-color: black;
`

export const H1 = styled.h1`
color: white;
font-size: 3rem;
padding: 10px;
font-family: Lacquer;
text-align: left;
padding-top: 25px;

@media screen and (max-width: 768px) {
    font-size: 4em;
}

@media screen and (max-width: 480px) {
    font-size: 3em;
}
`

export const AboutP = styled.p`
color: white;
font-size: 1.75rem;
padding: 10px;
font-family: Lacquer;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px) {
    font-size: 1.5em;
}

@media screen and (max-width: 480px) {
    font-size: 1.125em;
}
`
