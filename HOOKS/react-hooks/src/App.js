import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./COMPONENTS/Product";
import React from "react";
import Navbar from "./Navbar";
import Message from "./COMPONENTS/Message";

const App = () => {
  return <div>

    <Router>
      <Navbar/>
      <Routes>
        <Route path ="/msg" element={<Message/>} />
        <Route path ="/pro" element={<Product/>} />

      </Routes>
    </Router>
  </div>;
};

export default App;
