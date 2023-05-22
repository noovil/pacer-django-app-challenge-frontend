import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route exact path="/home" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;