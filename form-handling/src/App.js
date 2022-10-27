import React from "react";
// import Message from './FORMS/Message'
// import Data from "./React Binding/Data";
// import Digiclock from "./LIFE CYCLE METHODS/Digiclock";
// import './STYLES/clock.css'
// import Registrationform from "./FORMS/Registrationform";
import Users from "./AXIOS/Users";
import Product from "./AXIOS/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
import Home from "./COMPONENTS/Home";
import About from "./COMPONENTS/About";
import Contact from "./COMPONENTS/Contact";

const App = () => {
  return (
    <>
      {/* <Message/> */}
      {/* <Data /> */}
      {/* <Digiclock/> */}
      {/* <Registrationform/> */}
      {/* <Users/> */}

      {/* <Product /> */}

      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
