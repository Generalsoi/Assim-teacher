import React from "react";
import "./Content.css";
import TeacherDashboard from "./../TeacherDashboard/TeacherDashboard";

const Content = (props) => {
  const { activeMenu } = props;
  return (
    <div class="main-content">
      {activeMenu === "menu1" && <TeacherDashboard />}
    </div>
  );
};

export default Content;
