import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './COMPONENTS/Navbar.jsx'
import UserApp from './COMPONENTS/UserApp.jsx'
import Home from './COMPONENTS/Home.jsx'

const App = () => {
  return (
   <Router>

    <Navbar/>

    <Routes>
    <Route  path="/home" element={<Home/>}/>

      <Route  path="/userapp" element={<UserApp/>}/>
    </Routes>
   </Router>
  )
}

export default App
