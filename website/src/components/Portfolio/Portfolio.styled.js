import styled from "styled-components";
// import { motion } from 'framer-motion'


export const Container = styled.div`
height: 800px;
background-color: #EAD29C;
display: grid;
grid-template-columns: 2.5fr 2fr 1.5fr;
align-items: center;
justify-content: center;
gap: .5rem;
`

export const Project1 = styled.div`
height: 100%;
width: 100%;
background-color: limegreen;
border: 2px solid black; 
display: flex;
`

export const Item1 = styled.div`
background-color: white;
height: 99%;
width: 99%;
margin: 5px;
`

export const Project2 = styled.div`
height: 100%;
width: 100%;
background-color: red;
border: 2px solid black; 
display: grid;
grid-template-rows: 1fr 1fr 1fr;
`

export const Item2 = styled.div`
background-color: white;
height: 95%;
width: 98%;
margin: 5px;
`

export const Project3 = styled.div`
height: 100%;
width: 100%;
background-color: blue;
border: 2px solid black; 
display: grid;
grid-template-rows: 1fr 1fr 1fr;
`

export const Item3 = styled.div`
background-color: white;
height: 95%;
width: 98%;
margin: 5px;
`

export const H1 = styled.h1`
color: white;
font-size: 3rem;
font-family: Lacquer;
margin: 5px;
`

export const P = styled.p`
color: white;
font-size: 1.75rem;
font-family: Lacquer;
margin: 5px;
display: flex;
align-items: center;
`