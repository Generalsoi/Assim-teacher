import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Redirect } from "react-router";
import "./App.css";
import Signup from "./components/signup/Signup";
import CompleteSignUp from "./components/signup/CompleteSignUp/CompleteSignUp";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/dashboard/Dashboard/Dashboard";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="completeSignUp" element={<CompleteSignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="completeSignUp" element={<CompleteSignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="classes" element={<Classes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
