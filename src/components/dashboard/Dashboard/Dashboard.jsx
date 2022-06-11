import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./../Sidebar/Sidebar";
import Content from "../Content/Content";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");

  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className="content">
        <Content activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </div>
  );
};

export default Dashboard;
