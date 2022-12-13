import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import StudDashboard from "./components/dashboard/Content/StudDashboard/StudDashboard";
import Schedule from "./components/dashboard/Content/Schedule/Schedule";
import Settings from "./components/dashboard/Content/Settings/Settings/Settings";
import Courses from "./components/dashboard/Content/Courses/Courses";
import Signup from "./components/signup/Signup";
import CompleteSignUp from "./components/signup/CompleteSignUp/CompleteSignUp";
import SignIn from "./components/SignIn/SignIn";
import UploadCourse from "./components/dashboard/Content/Courses/UploadCourse/UploadCourse";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/completeSignUp" element={<CompleteSignUp />} />
        <Route path="/dashboard" element={<StudDashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/upload-course" element={<UploadCourse />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
