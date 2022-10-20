import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Hero1 from "./Components/Hero1";

class App extends React.Component {
  render() {
   return <>
    <Navbar/>
    <Hero/>
    <Hero1/>
    </>
  }
}

export default App
