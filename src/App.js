import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Redirect } from "react-router";
import "./App.css";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        {/* <Route path="completeSignUp" element={<CompleteSignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="classes" element={<Classes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
