import React, { useEffect, useState } from "react";
import "./StudentDashboardHeader.css";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import axios from "axios";
import { apiEndpoint } from "../../config";

const StudentDashboardHeader = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if (!userInfo) {
      window.location.href = "/sign-in"
    }
    fetchData(userInfo)
  }, [])

  const fetchData = async (userInfo) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiEndpoint}users/me`,
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer " + userInfo.token,
        },
      });
      setUserData(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="student-dashboard-header">
      <input
        type="text"
        placeholder="Search Classes, Documents, Achievements..."
      />

      <div className="student-dashboard-header-details">
        <button className="upload_btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4.51251L7 1.51251L10 4.51251" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 1.51251V9.51251" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 11.5125C4.89 12.8125 9.11 12.8125 13 11.5125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          Upload
        </button>

        <NotificationsSharpIcon className="notification-icon" />

        <div className="student-detail">
          <img
            alt="user-icon"
            className="student-user-icon"
            src={userData.picture}
          />
          <div>
            <span>{userData.name}</span>
            <span>{userData.profileType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardHeader;
