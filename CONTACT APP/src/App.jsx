import React from 'react'
import Navbar from './Navbar.jsx'
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Home from './COMPONENTS/Home.jsx'
import Contact from './COMPONENTS/Contact.jsx'

const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
   <Route path="/home" element={<Home/>}/>
   <Route path="/contact" element={<Contact/>}/>




    </Routes>
    </Router>
  )
}

export default App
