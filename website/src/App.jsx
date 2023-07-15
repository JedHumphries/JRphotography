import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'



function App() {
  
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/images" element={ <Gallery/> } /> 
    </Routes>
  )
}

export default App
