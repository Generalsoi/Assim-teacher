import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import "./Assignment.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../assets/images/Logo.png";
import { useLocation } from "react-router-dom";
import useAxiosGetWithoutToken from "../../../../customHooks/useAxiosGetWithoutToken";
import { accessToken } from "../../../../config";
import { formatDate, getPostedDate, shortenText } from "../../../../functions";
import BackdropLoader from '../../../Loader/BackdropLoader';

const Assignment = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);
  const [assigmentContents, setAssigmentContents] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };
  const search = useLocation().search;
  let classId = new URLSearchParams(search).get("class");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const tutor = userInfo.user.name;

  const { response, loading } = useAxiosGetWithoutToken({
    method: "get",
    url: "documents?classId=" + classId + "&access_token=" + accessToken,
  });

  React.useEffect(() => {
    if (response) {
      setAssigmentContents(response.rows);
    }
  }, [response]);
  return (
    <>
      {loading && <BackdropLoader />}
      <div className="dashboard">
        <div className={open ? "sidebar-mobile open" : "sidebar"}>
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
        <div className="content">
          <div className="classes">
            <StudentDashboardHeader />

            <div className="welcome-message">
              <h2>Assingments</h2>
            </div>
            <br></br>
            <div className="assingments-div">
              <div className="asignment-item-list">
                {assigmentContents.map((content) => (
                  <div className="assignment-item" key={content.id}>
                    <div className="asignment-item-top">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="36" height="36" rx="8" fill="#F3E4FF" />
                        <path
                          d="M17 10C16.7348 10 16.4804 10.1054 16.2929 10.2929C16.1054 10.4804 16 10.7348 16 11C16 11.2652 16.1054 11.5196 16.2929 11.7071C16.4804 11.8946 16.7348 12 17 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10H17Z"
                          fill="#8F00FF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 13C12 12.4696 12.2107 11.9609 12.5858 11.5858C12.9609 11.2107 13.4696 11 14 11C14 11.7956 14.3161 12.5587 14.8787 13.1213C15.4413 13.6839 16.2044 14 17 14H19C19.7956 14 20.5587 13.6839 21.1213 13.1213C21.6839 12.5587 22 11.7956 22 11C22.5304 11 23.0391 11.2107 23.4142 11.5858C23.7893 11.9609 24 12.4696 24 13V24C24 24.5304 23.7893 25.0391 23.4142 25.4142C23.0391 25.7893 22.5304 26 22 26H14C13.4696 26 12.9609 25.7893 12.5858 25.4142C12.2107 25.0391 12 24.5304 12 24V13ZM15 17C14.7348 17 14.4804 17.1054 14.2929 17.2929C14.1054 17.4804 14 17.7348 14 18C14 18.2652 14.1054 18.5196 14.2929 18.7071C14.4804 18.8946 14.7348 19 15 19H15.01C15.2752 19 15.5296 18.8946 15.7171 18.7071C15.9046 18.5196 16.01 18.2652 16.01 18C16.01 17.7348 15.9046 17.4804 15.7171 17.2929C15.5296 17.1054 15.2752 17 15.01 17H15ZM18 17C17.7348 17 17.4804 17.1054 17.2929 17.2929C17.1054 17.4804 17 17.7348 17 18C17 18.2652 17.1054 18.5196 17.2929 18.7071C17.4804 18.8946 17.7348 19 18 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18C22 17.7348 21.8946 17.4804 21.7071 17.2929C21.5196 17.1054 21.2652 17 21 17H18ZM15 21C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H15.01C15.2752 23 15.5296 22.8946 15.7171 22.7071C15.9046 22.5196 16.01 22.2652 16.01 22C16.01 21.7348 15.9046 21.4804 15.7171 21.2929C15.5296 21.1054 15.2752 21 15.01 21H15ZM18 21C17.7348 21 17.4804 21.1054 17.2929 21.2929C17.1054 21.4804 17 21.7348 17 22C17 22.2652 17.1054 22.5196 17.2929 22.7071C17.4804 22.8946 17.7348 23 18 23H21C21.2652 23 21.5196 22.8946 21.7071 22.7071C21.8946 22.5196 22 22.2652 22 22C22 21.7348 21.8946 21.4804 21.7071 21.2929C21.5196 21.1054 21.2652 21 21 21H18Z"
                          fill="#8F00FF"
                        />
                      </svg>
                      <div className="assignment-subject-tutor">
                        <h5>{shortenText(content.name, 20)}</h5>
                        <p>{tutor}</p>
                      </div>
                    </div>
                    <div className="assignment-desc">
                      <p>Description</p>
                      <h6> {shortenText(content.description, 40)}</h6>
                    </div>
                    <div className="assingment-item-body">
                      <div className="assingment-dates">
                        <p>Date given</p>
                        <h6>{getPostedDate(content.createdAt)}</h6>
                      </div>
                      <div className="assingment-dates">
                        <p>Due date</p>
                        <h6>{formatDate(content.createdAt)}</h6>
                      </div>
                    </div>
                    <div className="assignment-footer">
                      <div className="assigment-status submitted">
                        <p>Download File</p>
                      </div>
                    </div>
                  </div>
                ))}
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
    </>
  );
};

export default Assignment;
