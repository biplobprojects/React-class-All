import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AxiosClass from "./COMPONENT/AxiosClass";
import AxiosFunct from "./COMPONENT/AxiosFunct";
import Users from "./COMPONENT/Users";
import { Provider } from "react-redux";
import { store } from "./REDUX/users/store";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/axiosClass" element={<AxiosClass />} />
          <Route path="/axiosFunc" element={<AxiosFunct />} />
          <Route path="/userData" element={<Users />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
