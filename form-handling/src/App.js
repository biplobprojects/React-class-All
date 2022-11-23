import React from "react";
// import Message from './FORMS/Message'
// import Data from "./React Binding/Data";
import Digiclock from "./LIFE CYCLE METHODS/Digiclock";
// import './STYLES/clock.css'
// import Registrationform from "./FORMS/Registrationform";
// import Users from "./AXIOS/Users";
// import Product from "./AXIOS/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
// import Home from "./COMPONENTS/Home";
// import About from "./COMPONENTS/About";
// import Contact from "./COMPONENTS/Contact";
import './style1.css'
// import Reactaxios from "./PRACTICESET/Reactaxios";


const App = () => {
  return (
    <>
     

       <Router>

        <Navbar />
        

        <Routes>
          <Route path ="/digi"  element={<Digiclock/>}/>
          {/* <Route exact path="/home" element={<Home />} /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/contact" element={<Contact />} /> */}
          {/* <Route exact path="/users" element={<Users />} /> */}
          {/* <Route exact path="/product" element={<Product />} /> */}
           {/* <Route exact path="/axi" element={<Reactaxios />}  */}

        </Routes>
      </Router> 
    </>
  );
};

export default App;
