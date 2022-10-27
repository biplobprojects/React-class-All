import React from "react";
import Navbar from "./Navbar";
import Home from "./Compo123/Home";
// import About from './Compo123/About'
// import Contact from './Compo123/Contact'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/Home" element={<Home/>} />
            {/* <Route path="/About" element={<About/>} /> */}
            {/* <Route path="/Contact" element={<Contact/>} /> */}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
