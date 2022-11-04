import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import "./StudDashboard.css";
import Sidebar from "../../Sidebar/Sidebar";
import Logo from "../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Hand from "../../../../assets/images/hand.png";
import Money from "../../../../assets/images/money.png";
import Star from "../../../../assets/images/star.png";
import User from "../../../../assets/images/user.png";

import Chart from "chart.js";
import { Bar, HorizontalBar } from "react-chartjs-2";
import {
  chartOptions,
  parseOptions,
  chartExample2,
} from "./chart/charts";

const StudDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (

    <div className="dashboard">
      <div className={open ? "sidebar-mobile open" : "sidebar"}>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className="content">
        <div className="student-dashboard">
          <StudentDashboardHeader />

          <div className="welcome-message">
            <h2>
              Good morning, <span>Josephine</span>
              <img src={Hand} alt="" />
            </h2>
          </div>

          <div className="stats">
            <p>Statistics</p>

            <div className="visits">
              <p>Course visit </p><span className="dots"></span>
              <select>
                <option value="">Today</option>
                <option value="">Today</option>
                <option value="">Today</option>
              </select>
            </div>
          </div>

          <div className="chart_div">
            <Bar
              data={chartExample2.data}
              options={chartExample2.options}
            />
          </div>

          {/* cards */}
          <div className="card_container">
            <div className="card_item">
              <div className="left_border"></div>
              <div className="card_content">
                <h2>Total Revenue</h2>
                <p>₦ 30,000</p>
              </div>
              <img src={Money} alt="" />
            </div>
            <div className="card_item">
              <div className="left_border"></div>
              <div className="card_content">
                <h2>Average Rating</h2>
                <p>4.3</p>

              </div>
              <img src={Star} alt="" />
            </div>
            <div className="card_item">
              <div className="left_border"></div>
              <div className="card_content">
                <h2>Total Students</h2>
                <p>1,300</p>

              </div>
              <img src={User} alt="" />
            </div>
          </div>

        </div>
      </div>

      <div className="mobile-view">
        <img src={Logo} alt="assim-logo" />
        <MenuIcon className="hamburger" onClick={handleClick} />
      </div>

      {open && <div className="overlay" />}
    </div>
  );
};

export default StudDashboard;
