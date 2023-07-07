import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Gallery from './pages/Gallery'



function App() {
  
  return (
    <Router to="/">
        <Home/>
    </Router>
  )
}

export default App
