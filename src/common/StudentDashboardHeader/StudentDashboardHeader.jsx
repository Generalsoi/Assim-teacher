import React from "react";
import "./StudentDashboardHeader.css";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAxiosGet from '../../customHooks/useAxiosGet';
import UploadModal from "../../components/dashboard/UploadModal/UploadModal";

const StudentDashboardHeader = () => {

  const [userProfile, setUserProfile] = useState({});
  const [uploadModalDiv, setUploadModal] = useState(false)

  const { userData } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userData === null) {
      window.location.href = "/sign-in";
    }
  }, [userData]);

  const { response } = useAxiosGet({
    method: 'get',
    url: `users/me`,
  });

  React.useEffect(() => {
    if (response) {
      setUserProfile(response);
    }
  }, [response]);

  const openModal = () => {
    setUploadModal(true)
  }

  return (
    <>
      {
        uploadModalDiv &&
        <UploadModal />
      }
      <div className="student-dashboard-header">
        <input
          type="text"
          placeholder="Search Classes, Documents, Achievements..."
        />

        <div className="student-dashboard-header-details">
          <div className="upload_btn" onClick={openModal}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4.51251L7 1.51251L10 4.51251" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 1.51251V9.51251" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 11.5125C4.89 12.8125 9.11 12.8125 13 11.5125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Upload
          </div>
          <NotificationsSharpIcon className="notification-icon" />

          <div className="student-detail">
            <img
              alt="user-icon"
              className="student-user-icon"
              src={userProfile.picture}
            />
            <div>
              <span>
                {userProfile.name}
              </span>
              <span>{userProfile.profileType}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboardHeader;
