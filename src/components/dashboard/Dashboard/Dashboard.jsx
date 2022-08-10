import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./../Sidebar/Sidebar";
import Logo from "../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Content from "./../Content/Content/Content";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="dashboard">
      <div className={open ? "sidebar-mobile open" : "sidebar"}>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className="content">
        <Content activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>

      <div className="mobile-view">
        <img src={Logo} alt="assim-logo" />
        <MenuIcon className="hamburger" onClick={handleClick} />
      </div>

      {open && <div className="overlay" />}
    </div>
  );
};

export default Dashboard;
