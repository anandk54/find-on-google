import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/search" exact Component={Search}></Route>
      </Routes>
    </Router>
  );
}

export default App;
