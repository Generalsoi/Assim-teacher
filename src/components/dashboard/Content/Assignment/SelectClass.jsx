import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../assets/images/Logo.png";
import "./Assignment.css";
import useAxiosGetWithoutToken from "../../../../customHooks/useAxiosGetWithoutToken";
import { accessToken } from "../../../../config";
import { getPostedDate, shortenText } from "../../../../functions";
import { Link } from "react-router-dom";
import BackdropLoader from "../../../Loader/BackdropLoader";
import PersonIcon from "@mui/icons-material/Person";
import ClassOneImg from "../../../../assets/images/classone.png";

const SelectClass = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [recentClassContents, setRecentClassContents] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const ownerId = userInfo.user.id;
  const tutor = userInfo.user.name;

  const { response, loading } = useAxiosGetWithoutToken({
    method: "get",
    url: "classes?ownerId=" + ownerId + "&access_token=" + accessToken,
  });

  React.useEffect(() => {
    if (response) {
      setRecentClassContents(response.rows);
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
              <h2>Select Class</h2>
            </div>
            <br></br>

            <div className="classess-div">
              <div className="single-classes">
                {recentClassContents.map((content) => (

                  <Link to={`/assignments?class=${content.id}`} key={content.id} className="single-class" >
                    <div className="class-image">
                      <img src={ClassOneImg} alt={content.name} />
                    </div>
                    <h5 className="class-title">{shortenText(content.name, 15)}</h5>
                    <div className="class-tutor">
                      <div>
                        <PersonIcon className="person-icon" />
                        <p className="class-tutor-name">{shortenText(tutor, 10)}</p>
                      </div>
                      <div className="class-length">
                        <p>{getPostedDate(content.createdAt)}</p>
                      </div>
                    </div>
                  </Link>
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

export default SelectClass;
