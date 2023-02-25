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
import UploadVideo from "./components/dashboard/UploadVideo/UploadVideo";
import Classes from "./components/dashboard/Content/Classes/Classes";
import NewClass from "./components/dashboard/Content/Classes/NewClass";
import Assignment from "./components/dashboard/Content/Assignment/Assignment";
import NewAssignment from "./components/dashboard/Content/Assignment/NewAssignment";
import SelectClass from "./components/dashboard/Content/Assignment/SelectClass";
import ClassVideos from "./components/dashboard/Content/Classes/ClassVideos";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/completeSignUp" element={<CompleteSignUp />} />
        <Route path="/dashboard" element={<StudDashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/new-class" element={<NewClass />} />
        <Route path="/upload-course" element={<UploadCourse />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/select-class" element={<SelectClass />} />
        <Route path="/assignments" element={<Assignment />} />
        <Route path="/class-videos" element={<ClassVideos />} />
        <Route path="/new-assignment" element={<NewAssignment />} />
      </Routes>
    </Router>
  );
}

export default App;
