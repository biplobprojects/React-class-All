import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <div>

        {/* react-router-dom version 5 */}
        <Router>
          <Navbar />
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
